import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { TransitFilters } from './components/TransitFilters';
import { MapView } from './components/MapView';
import { PropertyList } from './components/PropertyList';
import { getLinesForCity } from './data/transitLines';
import type { Filters, Property, SortOption } from './types';
import { useProperties } from './hooks/useProperties';

const DEFAULT_CITY = 'Boston';

const DEFAULT_FILTERS: Filters = {
  city: DEFAULT_CITY,
  listingType: 'rent',
  transitTypes: ['subway'],
  maxWalkDistance: null,
  selectedLine: '',
  minPrice: null,
  maxPrice: null,
  minBeds: null,
  sortBy: 'transit',
};

function applyFilters(properties: Property[], filters: Filters): {
  cityProps: Property[];
  matchingIds: Set<number>;
  sorted: Property[];
} {
  const cityProps = properties.filter(p =>
    p.city === filters.city &&
    p.forRent === (filters.listingType === 'rent')
  );

  const matchingIds = new Set<number>();

  for (const p of cityProps) {
    if (filters.transitTypes.length > 0) {
      const isSubway = !p.nearestTransit.lineName.toLowerCase().includes('bus');
      const isBus = p.nearestTransit.lineName.toLowerCase().includes('bus');
      const typeOk =
        (filters.transitTypes.includes('subway') && isSubway) ||
        (filters.transitTypes.includes('bus') && isBus);
      if (!typeOk) continue;
    }

    if (filters.maxWalkDistance !== null) {
      if (p.nearestTransit.distanceFt > filters.maxWalkDistance) continue;
    }

    if (filters.selectedLine && p.nearestTransit.lineName !== filters.selectedLine) continue;
    if (filters.minPrice !== null && p.price < filters.minPrice) continue;
    if (filters.maxPrice !== null && p.price > filters.maxPrice) continue;
    if (filters.minBeds !== null && p.beds < filters.minBeds) continue;

    matchingIds.add(p.id);
  }

  const sorted = [...cityProps].sort((a, b) => {
    const aMatch = matchingIds.has(a.id) ? 0 : 1;
    const bMatch = matchingIds.has(b.id) ? 0 : 1;
    if (aMatch !== bMatch) return aMatch - bMatch;

    if (filters.sortBy === 'transit') {
      return a.nearestTransit.walkMinutes - b.nearestTransit.walkMinutes;
    } else if (filters.sortBy === 'price-asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return { cityProps, matchingIds, sorted };
}

function App() {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(null);

  const transitLines = useMemo(() => getLinesForCity(filters.city), [filters.city]);

  const { properties, dataSource, isLoading } = useProperties(filters.city);

  const { cityProps, matchingIds, sorted } = useMemo(
    () => applyFilters(properties, filters),
    [properties, filters]
  );

  const handleCityChange = (city: string) => {
    setFilters(f => ({ ...f, city, selectedLine: '' }));
    setSelectedPropertyId(null);
  };

  const handleListingTypeChange = (type: 'rent' | 'sale') => {
    setFilters(f => ({ ...f, listingType: type }));
    setSelectedPropertyId(null);
  };

  const handleSortChange = (sortBy: SortOption) => {
    setFilters(f => ({ ...f, sortBy }));
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-slate-50">
      <Header
        listingType={filters.listingType}
        onListingTypeChange={handleListingTypeChange}
      />

      <div className="flex flex-1 min-h-0 overflow-hidden">
        <div className="w-[55%] flex-shrink-0 h-full">
          <MapView
            city={filters.city}
            transitLines={transitLines}
            properties={cityProps}
            matchingPropertyIds={matchingIds}
            selectedPropertyId={selectedPropertyId}
            onPropertySelect={setSelectedPropertyId}
          />
        </div>

        <div className="flex-1 h-full flex flex-col min-w-0 bg-slate-50 border-l border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-200 bg-white shadow-sm flex-shrink-0 space-y-3">
            <SearchBar
              selectedCity={filters.city}
              onCityChange={handleCityChange}
            />
            <TransitFilters
              filters={filters}
              onFiltersChange={setFilters}
            />
          </div>

          <div className="flex-1 min-h-0 p-4 overflow-hidden flex flex-col">
            <PropertyList
              properties={sorted}
              matchingPropertyIds={matchingIds}
              selectedPropertyId={selectedPropertyId}
              onPropertySelect={setSelectedPropertyId}
              totalCount={cityProps.length}
              sortBy={filters.sortBy}
              onSortChange={handleSortChange}
              dataSource={dataSource}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
