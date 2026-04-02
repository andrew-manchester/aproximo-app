import { useState, useEffect } from 'react';
import type { Property } from '../types';
import { PROPERTIES } from '../data/properties';
import { fetchListingsForCity } from '../services/zillowApi';
import { getCached, setCached } from '../services/propertyCache';
import { mapZillowToProperty } from '../services/propertyMapper';

export type DataSource = 'mock' | 'api' | 'cached';

interface UsePropertiesResult {
  properties: Property[];
  dataSource: DataSource;
  isLoading: boolean;
  error: string | null;
  refreshCity: (city: string) => void;
}

export function useProperties(city: string): UsePropertiesResult {
  const [apiProperties, setApiProperties] = useState<Record<string, Property[]>>({});
  const [loadingCities, setLoadingCities] = useState<Set<string>>(new Set());
  const [errors, setErrors] = useState<Record<string, string>>({});

  const apiKey = import.meta.env.VITE_RAPIDAPI_KEY as string;

  const loadCity = async (cityName: string, forceRefresh = false) => {
    if (!apiKey || loadingCities.has(cityName)) return;

    // Check cache first (unless force refresh)
    if (!forceRefresh) {
      const cached = getCached<Property[]>(`city_${cityName}`);
      if (cached && cached.length > 0) {
        setApiProperties(prev => ({ ...prev, [cityName]: cached }));
        return;
      }
    }

    setLoadingCities(prev => new Set(prev).add(cityName));
    setErrors(prev => { const n = {...prev}; delete n[cityName]; return n; });

    try {
      const listings = await fetchListingsForCity(cityName, apiKey);
      const mapped = listings
        .map(l => mapZillowToProperty(l, cityName))
        .filter((p): p is Property => p !== null)
        .slice(0, 50); // cap at 50 per city to be safe with quota

      if (mapped.length > 0) {
        setCached(`city_${cityName}`, mapped);
        setApiProperties(prev => ({ ...prev, [cityName]: mapped }));
      } else {
        throw new Error('No valid listings returned');
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      setErrors(prev => ({ ...prev, [cityName]: message }));
      // Don't set apiProperties — will fall back to mock
    } finally {
      setLoadingCities(prev => { const s = new Set(prev); s.delete(cityName); return s; });
    }
  };

  useEffect(() => {
    loadCity(city);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  const cityApiProps = apiProperties[city];
  const isLoading = loadingCities.has(city);
  const error = errors[city] ?? null;

  let properties: Property[];
  let dataSource: DataSource;

  if (cityApiProps && cityApiProps.length > 0) {
    properties = cityApiProps;
    dataSource = getCached<Property[]>(`city_${city}`) ? 'cached' : 'api';
  } else {
    properties = PROPERTIES;
    dataSource = 'mock';
  }

  return {
    properties,
    dataSource,
    isLoading,
    error,
    refreshCity: (c) => loadCity(c, true),
  };
}
