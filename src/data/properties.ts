import type { Property } from '../types';

export const PROPERTIES: Property[] = [
  // ── BOSTON ────────────────────────────────────────────────────────────────
  {
    id: 1, city: 'Boston', address: '45 Brattle St', neighborhood: 'Cambridge',
    lat: 42.3740, lng: -71.1202, type: 'rent', price: 3200, beds: 2, baths: 1, sqft: 950,
    imageId: 1, forRent: true,
    nearestTransit: { stationName: 'Harvard', lineName: 'Red Line', lineColor: '#DA291C', distanceFt: 180, walkMinutes: 1 },
  },
  {
    id: 2, city: 'Boston', address: '12 Massachusetts Ave', neighborhood: 'Back Bay',
    lat: 42.3470, lng: -71.0980, type: 'rent', price: 4100, beds: 3, baths: 2, sqft: 1350,
    imageId: 2, forRent: true,
    nearestTransit: { stationName: 'Kenmore', lineName: 'Green Line', lineColor: '#00843D', distanceFt: 320, walkMinutes: 2 },
  },
  {
    id: 3, city: 'Boston', address: '88 Tremont St', neighborhood: 'Downtown',
    lat: 42.3560, lng: -71.0640, type: 'sale', price: 750000, beds: 2, baths: 2, sqft: 1100,
    imageId: 3, forRent: false,
    nearestTransit: { stationName: 'Boylston', lineName: 'Green Line', lineColor: '#00843D', distanceFt: 450, walkMinutes: 3 },
  },
  {
    id: 4, city: 'Boston', address: '300 Harrison Ave', neighborhood: 'South End',
    lat: 42.3480, lng: -71.0690, type: 'rent', price: 2800, beds: 1, baths: 1, sqft: 720,
    imageId: 4, forRent: true,
    nearestTransit: { stationName: 'Ruggles', lineName: 'Orange Line', lineColor: '#ED8B00', distanceFt: 1200, walkMinutes: 8 },
  },
  {
    id: 5, city: 'Boston', address: '1 Beacon St', neighborhood: 'Beacon Hill',
    lat: 42.3600, lng: -71.0620, type: 'sale', price: 1250000, beds: 4, baths: 3, sqft: 2100,
    imageId: 5, forRent: false,
    nearestTransit: { stationName: 'Park St', lineName: 'Green Line', lineColor: '#00843D', distanceFt: 210, walkMinutes: 2 },
  },
  {
    id: 6, city: 'Boston', address: '500 Commonwealth Ave', neighborhood: 'Fenway',
    lat: 42.3520, lng: -71.0980, type: 'rent', price: 3600, beds: 2, baths: 2, sqft: 1050,
    imageId: 6, forRent: true,
    nearestTransit: { stationName: 'Copley', lineName: 'Green Line', lineColor: '#00843D', distanceFt: 890, walkMinutes: 6 },
  },
  {
    id: 7, city: 'Boston', address: '22 Putnam Ave', neighborhood: 'Cambridge',
    lat: 42.3654, lng: -71.1090, type: 'rent', price: 2600, beds: 0, baths: 1, sqft: 520,
    imageId: 7, forRent: true,
    nearestTransit: { stationName: 'Central Sq', lineName: 'Red Line', lineColor: '#DA291C', distanceFt: 650, walkMinutes: 4 },
  },

  // ── NEW YORK ──────────────────────────────────────────────────────────────
  {
    id: 8, city: 'New York', address: '245 W 107th St', neighborhood: 'Upper West Side',
    lat: 40.8020, lng: -73.9620, type: 'rent', price: 3800, beds: 2, baths: 1, sqft: 880,
    imageId: 8, forRent: true,
    nearestTransit: { stationName: '86 St', lineName: '4/5/6 Line', lineColor: '#00933C', distanceFt: 390, walkMinutes: 2 },
  },
  {
    id: 9, city: 'New York', address: '55 W 25th St', neighborhood: 'Chelsea',
    lat: 40.7440, lng: -73.9900, type: 'rent', price: 4500, beds: 1, baths: 1, sqft: 720,
    imageId: 9, forRent: true,
    nearestTransit: { stationName: 'Times Sq', lineName: 'N/Q/R/W Line', lineColor: '#FCCC0A', distanceFt: 540, walkMinutes: 4 },
  },
  {
    id: 10, city: 'New York', address: '180 Montague St', neighborhood: 'Brooklyn Heights',
    lat: 40.6960, lng: -73.9930, type: 'sale', price: 1450000, beds: 3, baths: 2, sqft: 1650,
    imageId: 10, forRent: false,
    nearestTransit: { stationName: 'Rector St', lineName: 'N/Q/R/W Line', lineColor: '#FCCC0A', distanceFt: 820, walkMinutes: 5 },
  },
  {
    id: 11, city: 'New York', address: '310 Bedford Ave', neighborhood: 'Williamsburg',
    lat: 40.7120, lng: -73.9550, type: 'rent', price: 2900, beds: 1, baths: 1, sqft: 650,
    imageId: 11, forRent: true,
    nearestTransit: { stationName: 'Bedford Ave', lineName: 'L Line', lineColor: '#A7A9AC', distanceFt: 210, walkMinutes: 1 },
  },
  {
    id: 12, city: 'New York', address: '680 Amsterdam Ave', neighborhood: 'Harlem',
    lat: 40.8060, lng: -73.9680, type: 'rent', price: 2400, beds: 2, baths: 1, sqft: 850,
    imageId: 12, forRent: true,
    nearestTransit: { stationName: '125 St', lineName: 'A/C/E Line', lineColor: '#0039A6', distanceFt: 1800, walkMinutes: 12 },
  },
  {
    id: 13, city: 'New York', address: '22-18 Jackson Ave', neighborhood: 'Long Island City',
    lat: 40.7450, lng: -73.9400, type: 'sale', price: 980000, beds: 2, baths: 2, sqft: 1100,
    imageId: 13, forRent: false,
    nearestTransit: { stationName: 'Jackson Heights', lineName: 'N/Q/R/W Line', lineColor: '#FCCC0A', distanceFt: 1450, walkMinutes: 9 },
  },
  {
    id: 14, city: 'New York', address: '1001 5th Ave', neighborhood: 'Upper East Side',
    lat: 40.7770, lng: -73.9620, type: 'sale', price: 2400000, beds: 4, baths: 3, sqft: 2200,
    imageId: 14, forRent: false,
    nearestTransit: { stationName: 'Grand Central', lineName: '4/5/6 Line', lineColor: '#00933C', distanceFt: 2600, walkMinutes: 17 },
  },

  // ── CHICAGO ───────────────────────────────────────────────────────────────
  {
    id: 15, city: 'Chicago', address: '1600 N Clark St', neighborhood: 'Lincoln Park',
    lat: 41.9100, lng: -87.6340, type: 'rent', price: 2200, beds: 2, baths: 1, sqft: 900,
    imageId: 15, forRent: true,
    nearestTransit: { stationName: 'Belmont', lineName: 'Red Line', lineColor: '#C60C30', distanceFt: 280, walkMinutes: 2 },
  },
  {
    id: 16, city: 'Chicago', address: '2251 N Milwaukee Ave', neighborhood: 'Bucktown',
    lat: 41.9220, lng: -87.6920, type: 'rent', price: 1900, beds: 1, baths: 1, sqft: 650,
    imageId: 16, forRent: true,
    nearestTransit: { stationName: 'Montrose', lineName: 'Blue Line', lineColor: '#00A1DE', distanceFt: 490, walkMinutes: 3 },
  },
  {
    id: 17, city: 'Chicago', address: '720 S Dearborn St', neighborhood: 'Printer\'s Row',
    lat: 41.8720, lng: -87.6310, type: 'sale', price: 485000, beds: 2, baths: 2, sqft: 1200,
    imageId: 17, forRent: false,
    nearestTransit: { stationName: 'Clark/Lake', lineName: 'Blue Line', lineColor: '#00A1DE', distanceFt: 700, walkMinutes: 5 },
  },
  {
    id: 18, city: 'Chicago', address: '1830 W Division St', neighborhood: 'Wicker Park',
    lat: 41.9030, lng: -87.6840, type: 'rent', price: 2100, beds: 2, baths: 1, sqft: 850,
    imageId: 18, forRent: true,
    nearestTransit: { stationName: 'Logan Square', lineName: 'Blue Line', lineColor: '#00A1DE', distanceFt: 1600, walkMinutes: 11 },
  },
  {
    id: 19, city: 'Chicago', address: '445 E Illinois St', neighborhood: 'Streeterville',
    lat: 41.8900, lng: -87.6200, type: 'sale', price: 650000, beds: 1, baths: 1, sqft: 780,
    imageId: 19, forRent: false,
    nearestTransit: { stationName: 'Chicago', lineName: 'Red Line', lineColor: '#C60C30', distanceFt: 920, walkMinutes: 6 },
  },
  {
    id: 20, city: 'Chicago', address: '3900 N Sheridan Rd', neighborhood: 'Lakeview',
    lat: 41.9540, lng: -87.6510, type: 'rent', price: 2400, beds: 3, baths: 2, sqft: 1350,
    imageId: 20, forRent: true,
    nearestTransit: { stationName: 'Loyola', lineName: 'Red Line', lineColor: '#C60C30', distanceFt: 2200, walkMinutes: 15 },
  },

  // ── SAN FRANCISCO ─────────────────────────────────────────────────────────
  {
    id: 21, city: 'San Francisco', address: '2000 Market St', neighborhood: 'Castro',
    lat: 37.7651, lng: -122.4351, type: 'rent', price: 3400, beds: 1, baths: 1, sqft: 680,
    imageId: 21, forRent: true,
    nearestTransit: { stationName: 'Civic Center', lineName: 'Red Line', lineColor: '#ED1C24', distanceFt: 1100, walkMinutes: 7 },
  },
  {
    id: 22, city: 'San Francisco', address: '500 Sansome St', neighborhood: 'Financial District',
    lat: 37.7960, lng: -122.4010, type: 'sale', price: 1100000, beds: 2, baths: 2, sqft: 1200,
    imageId: 22, forRent: false,
    nearestTransit: { stationName: 'Embarcadero', lineName: 'Red Line', lineColor: '#ED1C24', distanceFt: 250, walkMinutes: 2 },
  },
  {
    id: 23, city: 'San Francisco', address: '780 Mission St', neighborhood: 'SoMa',
    lat: 37.7840, lng: -122.4010, type: 'rent', price: 4200, beds: 2, baths: 2, sqft: 1150,
    imageId: 23, forRent: true,
    nearestTransit: { stationName: 'Montgomery St', lineName: 'Yellow Line', lineColor: '#FFD800', distanceFt: 360, walkMinutes: 2 },
  },
  {
    id: 24, city: 'San Francisco', address: '1300 Geneva Ave', neighborhood: 'Excelsior',
    lat: 37.7200, lng: -122.4400, type: 'rent', price: 2600, beds: 3, baths: 2, sqft: 1200,
    imageId: 24, forRent: true,
    nearestTransit: { stationName: 'Balboa Park', lineName: 'Blue Line', lineColor: '#0099CC', distanceFt: 1900, walkMinutes: 13 },
  },
  {
    id: 25, city: 'San Francisco', address: '2990 California St', neighborhood: 'Pacific Heights',
    lat: 37.7874, lng: -122.4417, type: 'sale', price: 1850000, beds: 3, baths: 2, sqft: 1700,
    imageId: 25, forRent: false,
    nearestTransit: { stationName: 'Powell St', lineName: 'Blue Line', lineColor: '#0099CC', distanceFt: 2400, walkMinutes: 16 },
  },
  {
    id: 26, city: 'San Francisco', address: '101 Potrero Ave', neighborhood: 'Potrero Hill',
    lat: 37.7620, lng: -122.4070, type: 'rent', price: 3100, beds: 2, baths: 1, sqft: 870,
    imageId: 26, forRent: true,
    nearestTransit: { stationName: 'Civic Center', lineName: 'Red Line', lineColor: '#ED1C24', distanceFt: 750, walkMinutes: 5 },
  },

  // ── WASHINGTON DC ─────────────────────────────────────────────────────────
  {
    id: 27, city: 'Washington DC', address: '1400 R St NW', neighborhood: 'Logan Circle',
    lat: 38.9122, lng: -77.0319, type: 'rent', price: 2800, beds: 2, baths: 1, sqft: 950,
    imageId: 27, forRent: true,
    nearestTransit: { stationName: 'Shaw', lineName: 'Green/Yellow Line', lineColor: '#00B140', distanceFt: 420, walkMinutes: 3 },
  },
  {
    id: 28, city: 'Washington DC', address: '600 H St NE', neighborhood: 'Capitol Hill',
    lat: 38.8985, lng: -76.9975, type: 'rent', price: 3200, beds: 2, baths: 2, sqft: 1100,
    imageId: 28, forRent: true,
    nearestTransit: { stationName: 'Union Station', lineName: 'Red Line', lineColor: '#BF0D3E', distanceFt: 880, walkMinutes: 6 },
  },
  {
    id: 29, city: 'Washington DC', address: '1800 K St NW', neighborhood: 'Foggy Bottom',
    lat: 38.9018, lng: -77.0452, type: 'sale', price: 720000, beds: 1, baths: 1, sqft: 720,
    imageId: 29, forRent: false,
    nearestTransit: { stationName: 'Farragut West', lineName: 'Blue/Orange/Silver Line', lineColor: '#009CDE', distanceFt: 310, walkMinutes: 2 },
  },
  {
    id: 30, city: 'Washington DC', address: '3200 Wisconsin Ave NW', neighborhood: 'Cleveland Park',
    lat: 38.9340, lng: -77.0620, type: 'rent', price: 2500, beds: 1, baths: 1, sqft: 680,
    imageId: 30, forRent: true,
    nearestTransit: { stationName: 'Bethesda', lineName: 'Red Line', lineColor: '#BF0D3E', distanceFt: 2100, walkMinutes: 14 },
  },
  {
    id: 31, city: 'Washington DC', address: '2501 Pennsylvania Ave SE', neighborhood: 'Capitol Hill East',
    lat: 38.8810, lng: -76.9820, type: 'sale', price: 550000, beds: 3, baths: 2, sqft: 1500,
    imageId: 31, forRent: false,
    nearestTransit: { stationName: 'Waterfront', lineName: 'Green/Yellow Line', lineColor: '#00B140', distanceFt: 1500, walkMinutes: 10 },
  },
  {
    id: 32, city: 'Washington DC', address: '1025 Vermont Ave NW', neighborhood: 'Downtown',
    lat: 38.9090, lng: -77.0330, type: 'sale', price: 895000, beds: 2, baths: 2, sqft: 1050,
    imageId: 32, forRent: false,
    nearestTransit: { stationName: 'Metro Center', lineName: 'Red Line', lineColor: '#BF0D3E', distanceFt: 150, walkMinutes: 1 },
  },

  // ── LOS ANGELES ───────────────────────────────────────────────────────────
  {
    id: 33, city: 'Los Angeles', address: '1600 Vine St', neighborhood: 'Hollywood',
    lat: 34.0970, lng: -118.3250, type: 'rent', price: 2800, beds: 1, baths: 1, sqft: 700,
    imageId: 33, forRent: true,
    nearestTransit: { stationName: 'Hollywood/Highland', lineName: 'Red/Purple Line', lineColor: '#E3231D', distanceFt: 520, walkMinutes: 4 },
  },
  {
    id: 34, city: 'Los Angeles', address: '400 S Spring St', neighborhood: 'Downtown LA',
    lat: 34.0485, lng: -118.2490, type: 'sale', price: 620000, beds: 2, baths: 2, sqft: 1300,
    imageId: 34, forRent: false,
    nearestTransit: { stationName: 'Pershing Square', lineName: 'Red/Purple Line', lineColor: '#E3231D', distanceFt: 200, walkMinutes: 1 },
  },
  {
    id: 35, city: 'Los Angeles', address: '3780 Wilshire Blvd', neighborhood: 'Koreatown',
    lat: 34.0620, lng: -118.3100, type: 'rent', price: 2300, beds: 2, baths: 1, sqft: 900,
    imageId: 35, forRent: true,
    nearestTransit: { stationName: 'Wilshire/Vermont', lineName: 'Red/Purple Line', lineColor: '#E3231D', distanceFt: 330, walkMinutes: 2 },
  },
  {
    id: 36, city: 'Los Angeles', address: '1880 S Pacific Ave', neighborhood: 'Long Beach',
    lat: 33.8690, lng: -118.1990, type: 'rent', price: 1850, beds: 2, baths: 1, sqft: 950,
    imageId: 36, forRent: true,
    nearestTransit: { stationName: 'Long Beach Transit Mall', lineName: 'Blue Line', lineColor: '#006DB6', distanceFt: 1100, walkMinutes: 7 },
  },
  {
    id: 37, city: 'Los Angeles', address: '60 N Raymond Ave', neighborhood: 'Pasadena',
    lat: 34.1470, lng: -118.1520, type: 'sale', price: 870000, beds: 3, baths: 2, sqft: 1650,
    imageId: 37, forRent: false,
    nearestTransit: { stationName: 'Sierra Madre Villa', lineName: 'Gold Line', lineColor: '#F2A900', distanceFt: 150, walkMinutes: 1 },
  },
  {
    id: 38, city: 'Los Angeles', address: '8400 Sunset Blvd', neighborhood: 'West Hollywood',
    lat: 34.0900, lng: -118.3800, type: 'rent', price: 3900, beds: 1, baths: 1, sqft: 680,
    imageId: 38, forRent: true,
    nearestTransit: { stationName: 'North Hollywood', lineName: 'Red/Purple Line', lineColor: '#E3231D', distanceFt: 2500, walkMinutes: 17 },
  },
  {
    id: 39, city: 'Los Angeles', address: '2800 S Figueroa St', neighborhood: 'University Park',
    lat: 34.0180, lng: -118.2720, type: 'sale', price: 720000, beds: 3, baths: 2, sqft: 1400,
    imageId: 39, forRent: false,
    nearestTransit: { stationName: 'Slauson', lineName: 'Blue Line', lineColor: '#006DB6', distanceFt: 1850, walkMinutes: 12 },
  },
  {
    id: 40, city: 'Los Angeles', address: '120 E 6th St', neighborhood: 'Arts District',
    lat: 34.0430, lng: -118.2390, type: 'rent', price: 3100, beds: 2, baths: 2, sqft: 1100,
    imageId: 40, forRent: true,
    nearestTransit: { stationName: '7th/Metro Center', lineName: 'Blue Line', lineColor: '#006DB6', distanceFt: 600, walkMinutes: 4 },
  },
];

export function getPropertiesForCity(city: string): Property[] {
  return PROPERTIES.filter(p => p.city === city);
}
