import type { CityConfig } from '../types';

export const CITIES: Record<string, CityConfig> = {
  "New York": { center: [40.7128, -74.006], zoom: 13 },
  "Boston": { center: [42.3601, -71.0589], zoom: 13 },
  "Chicago": { center: [41.8781, -87.6298], zoom: 13 },
  "San Francisco": { center: [37.7749, -122.4194], zoom: 13 },
  "Washington DC": { center: [38.9072, -77.0369], zoom: 13 },
  "Los Angeles": { center: [34.0522, -118.2437], zoom: 12 },
};

export const CITY_NAMES = Object.keys(CITIES);
