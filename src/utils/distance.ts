/**
 * Haversine formula to calculate distance between two lat/lng points in feet.
 */
export function haversineDistanceFt(
  lat1: number, lng1: number,
  lat2: number, lng2: number
): number {
  const R = 20902231; // Earth radius in feet
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180);
}

export function getTransitScore(walkMinutes: number): {
  label: string;
  color: string;
  bgColor: string;
} {
  if (walkMinutes <= 5) {
    return { label: 'Excellent', color: '#10B981', bgColor: 'bg-green-100 text-green-800' };
  } else if (walkMinutes <= 10) {
    return { label: 'Good', color: '#F59E0B', bgColor: 'bg-yellow-100 text-yellow-800' };
  } else if (walkMinutes <= 15) {
    return { label: 'Fair', color: '#F97316', bgColor: 'bg-orange-100 text-orange-800' };
  } else {
    return { label: 'Limited', color: '#EF4444', bgColor: 'bg-red-100 text-red-800' };
  }
}

export function formatDistance(ft: number): string {
  if (ft < 1000) {
    return `${Math.round(ft)} ft`;
  }
  return `${(ft / 5280).toFixed(1)} mi`;
}
