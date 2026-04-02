export interface CityConfig {
  center: [number, number];
  zoom: number;
}

export interface TransitStation {
  id: string;
  name: string;
  lineName: string;
  lineColor: string;
  lat: number;
  lng: number;
}

export interface TransitLine {
  id: string;
  name: string;
  color: string;
  city: string;
  type: 'subway' | 'bus' | 'rail';
  coordinates: [number, number][];
  stations: TransitStation[];
}

export interface NearestTransit {
  stationName: string;
  lineName: string;
  lineColor: string;
  distanceFt: number;
  walkMinutes: number;
}

export interface Property {
  id: number;
  city: string;
  address: string;
  neighborhood: string;
  lat: number;
  lng: number;
  type: 'rent' | 'sale';
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  imageId: number;
  nearestTransit: NearestTransit;
  forRent: boolean;
}

export type TransitType = 'subway' | 'bus';
export type SortOption = 'transit' | 'price-asc' | 'price-desc';

export interface Filters {
  city: string;
  listingType: 'rent' | 'sale';
  transitTypes: TransitType[];
  maxWalkDistance: number | null; // in feet, null = any
  selectedLine: string;
  minPrice: number | null;
  maxPrice: number | null;
  minBeds: number | null;
  sortBy: SortOption;
}
