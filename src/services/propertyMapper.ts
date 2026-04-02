import type { Property, NearestTransit } from '../types';
import type { ZillowListing } from './zillowApi';
import { TRANSIT_LINES } from '../data/transitLines';
import { haversineDistanceFt } from '../utils/distance';

let idCounter = 10000; // start high to avoid colliding with mock property IDs

function findNearestTransit(lat: number, lng: number, city: string): NearestTransit {
  const cityLines = TRANSIT_LINES.filter(l => l.city === city);
  let best: NearestTransit | null = null;
  let bestDist = Infinity;

  for (const line of cityLines) {
    for (const station of line.stations) {
      const dist = haversineDistanceFt(lat, lng, station.lat, station.lng);
      if (dist < bestDist) {
        bestDist = dist;
        best = {
          stationName: station.name,
          lineName: line.name,
          lineColor: line.color,
          distanceFt: Math.round(dist),
          walkMinutes: Math.round(dist / 264), // ~3mph walking = 264 ft/min
        };
      }
    }
  }

  // fallback if no transit data for city
  return best ?? {
    stationName: 'Nearby Stop',
    lineName: 'Transit',
    lineColor: '#6B7280',
    distanceFt: 1320,
    walkMinutes: 5,
  };
}

export function mapZillowToProperty(listing: ZillowListing, city: string): Property | null {
  // skip listings without coordinates
  if (!listing.latitude || !listing.longitude) return null;
  // skip listings without price
  if (!listing.price || listing.price <= 0) return null;

  const nearestTransit = findNearestTransit(listing.latitude, listing.longitude, city);
  const forRent = listing.listing_status === 'FOR_RENT';

  return {
    id: idCounter++,
    city,
    address: listing.address,
    neighborhood: listing.city || city,
    lat: listing.latitude,
    lng: listing.longitude,
    type: forRent ? 'rent' : 'sale',
    price: listing.price,
    beds: listing.bedrooms ?? 0,
    baths: listing.bathrooms ?? 1,
    sqft: listing.living_area_sqft ?? 0,
    imageId: 0, // 0 = use image_url instead of picsum
    imageUrl: listing.image_url ?? undefined,
    nearestTransit,
    forRent,
    zillowUrl: listing.detail_url ?? undefined,
  };
}
