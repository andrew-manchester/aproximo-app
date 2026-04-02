import type { TransitLine } from '../types';

export const TRANSIT_LINES: TransitLine[] = [
  // ── BOSTON MBTA ──────────────────────────────────────────────────────────
  {
    id: 'boston-red',
    name: 'Red Line',
    color: '#DA291C',
    city: 'Boston',
    type: 'subway',
    coordinates: [
      [42.3954, -71.1427], [42.3736, -71.1189], [42.3657, -71.1031],
      [42.3601, -71.0857], [42.3523, -71.0664], [42.3396, -71.0504],
    ],
    stations: [
      { id: 'bos-red-1', name: 'Alewife', lineName: 'Red Line', lineColor: '#DA291C', lat: 42.3954, lng: -71.1427 },
      { id: 'bos-red-2', name: 'Harvard', lineName: 'Red Line', lineColor: '#DA291C', lat: 42.3736, lng: -71.1189 },
      { id: 'bos-red-3', name: 'Central Sq', lineName: 'Red Line', lineColor: '#DA291C', lat: 42.3657, lng: -71.1031 },
      { id: 'bos-red-4', name: 'Charles/MGH', lineName: 'Red Line', lineColor: '#DA291C', lat: 42.3601, lng: -71.0857 },
      { id: 'bos-red-5', name: 'Downtown Crossing', lineName: 'Red Line', lineColor: '#DA291C', lat: 42.3523, lng: -71.0664 },
      { id: 'bos-red-6', name: 'South Station', lineName: 'Red Line', lineColor: '#DA291C', lat: 42.3396, lng: -71.0504 },
    ],
  },
  {
    id: 'boston-green',
    name: 'Green Line',
    color: '#00843D',
    city: 'Boston',
    type: 'subway',
    coordinates: [
      [42.3389, -71.1088], [42.3467, -71.0984], [42.3523, -71.0827],
      [42.3557, -71.0636], [42.3601, -71.0589],
    ],
    stations: [
      { id: 'bos-grn-1', name: 'Longwood', lineName: 'Green Line', lineColor: '#00843D', lat: 42.3389, lng: -71.1088 },
      { id: 'bos-grn-2', name: 'Kenmore', lineName: 'Green Line', lineColor: '#00843D', lat: 42.3467, lng: -71.0984 },
      { id: 'bos-grn-3', name: 'Copley', lineName: 'Green Line', lineColor: '#00843D', lat: 42.3523, lng: -71.0827 },
      { id: 'bos-grn-4', name: 'Boylston', lineName: 'Green Line', lineColor: '#00843D', lat: 42.3557, lng: -71.0636 },
      { id: 'bos-grn-5', name: 'Park St', lineName: 'Green Line', lineColor: '#00843D', lat: 42.3601, lng: -71.0589 },
    ],
  },
  {
    id: 'boston-orange',
    name: 'Orange Line',
    color: '#ED8B00',
    city: 'Boston',
    type: 'subway',
    coordinates: [
      [42.4368, -71.0764], [42.4072, -71.0764], [42.3835, -71.0764],
      [42.3601, -71.0589], [42.3367, -71.0764],
    ],
    stations: [
      { id: 'bos-org-1', name: 'Oak Grove', lineName: 'Orange Line', lineColor: '#ED8B00', lat: 42.4368, lng: -71.0764 },
      { id: 'bos-org-2', name: 'Malden Center', lineName: 'Orange Line', lineColor: '#ED8B00', lat: 42.4072, lng: -71.0764 },
      { id: 'bos-org-3', name: 'Sullivan Sq', lineName: 'Orange Line', lineColor: '#ED8B00', lat: 42.3835, lng: -71.0764 },
      { id: 'bos-org-4', name: 'North Station', lineName: 'Orange Line', lineColor: '#ED8B00', lat: 42.3601, lng: -71.0589 },
      { id: 'bos-org-5', name: 'Ruggles', lineName: 'Orange Line', lineColor: '#ED8B00', lat: 42.3367, lng: -71.0764 },
    ],
  },
  {
    id: 'boston-blue',
    name: 'Blue Line',
    color: '#003DA5',
    city: 'Boston',
    type: 'subway',
    coordinates: [
      [42.3601, -71.0589], [42.3667, -71.0400], [42.3801, -71.0200], [42.3968, -70.9914],
    ],
    stations: [
      { id: 'bos-blu-1', name: 'Government Center', lineName: 'Blue Line', lineColor: '#003DA5', lat: 42.3601, lng: -71.0589 },
      { id: 'bos-blu-2', name: 'Aquarium', lineName: 'Blue Line', lineColor: '#003DA5', lat: 42.3667, lng: -71.0400 },
      { id: 'bos-blu-3', name: 'Airport', lineName: 'Blue Line', lineColor: '#003DA5', lat: 42.3801, lng: -71.0200 },
      { id: 'bos-blu-4', name: 'Wonderland', lineName: 'Blue Line', lineColor: '#003DA5', lat: 42.3968, lng: -70.9914 },
    ],
  },

  // ── NEW YORK SUBWAY ───────────────────────────────────────────────────────
  {
    id: 'nyc-ace',
    name: 'A/C/E Line',
    color: '#0039A6',
    city: 'New York',
    type: 'subway',
    coordinates: [
      [40.8680, -73.9378], [40.8054, -73.9669], [40.7580, -73.9892],
      [40.7282, -74.0051], [40.7023, -74.0159],
    ],
    stations: [
      { id: 'nyc-ace-1', name: '181 St', lineName: 'A/C/E Line', lineColor: '#0039A6', lat: 40.8680, lng: -73.9378 },
      { id: 'nyc-ace-2', name: '125 St', lineName: 'A/C/E Line', lineColor: '#0039A6', lat: 40.8054, lng: -73.9669 },
      { id: 'nyc-ace-3', name: '42 St - Port Authority', lineName: 'A/C/E Line', lineColor: '#0039A6', lat: 40.7580, lng: -73.9892 },
      { id: 'nyc-ace-4', name: 'Canal St', lineName: 'A/C/E Line', lineColor: '#0039A6', lat: 40.7282, lng: -74.0051 },
      { id: 'nyc-ace-5', name: 'Fulton St', lineName: 'A/C/E Line', lineColor: '#0039A6', lat: 40.7023, lng: -74.0159 },
    ],
  },
  {
    id: 'nyc-456',
    name: '4/5/6 Line',
    color: '#00933C',
    city: 'New York',
    type: 'subway',
    coordinates: [
      [40.8983, -73.8648], [40.8530, -73.8992], [40.8030, -73.9541],
      [40.7580, -73.9892], [40.7282, -74.0051],
    ],
    stations: [
      { id: 'nyc-456-1', name: 'Woodlawn', lineName: '4/5/6 Line', lineColor: '#00933C', lat: 40.8983, lng: -73.8648 },
      { id: 'nyc-456-2', name: 'Fordham Rd', lineName: '4/5/6 Line', lineColor: '#00933C', lat: 40.8530, lng: -73.8992 },
      { id: 'nyc-456-3', name: '86 St', lineName: '4/5/6 Line', lineColor: '#00933C', lat: 40.8030, lng: -73.9541 },
      { id: 'nyc-456-4', name: 'Grand Central', lineName: '4/5/6 Line', lineColor: '#00933C', lat: 40.7580, lng: -73.9892 },
      { id: 'nyc-456-5', name: 'Brooklyn Bridge', lineName: '4/5/6 Line', lineColor: '#00933C', lat: 40.7282, lng: -74.0051 },
    ],
  },
  {
    id: 'nyc-l',
    name: 'L Line',
    color: '#A7A9AC',
    city: 'New York',
    type: 'subway',
    coordinates: [
      [40.6769, -73.9344], [40.6840, -73.9088], [40.7115, -73.9440], [40.7398, -73.9992],
    ],
    stations: [
      { id: 'nyc-l-1', name: 'Canarsie', lineName: 'L Line', lineColor: '#A7A9AC', lat: 40.6769, lng: -73.9344 },
      { id: 'nyc-l-2', name: 'Livonia Ave', lineName: 'L Line', lineColor: '#A7A9AC', lat: 40.6840, lng: -73.9088 },
      { id: 'nyc-l-3', name: 'Bedford Ave', lineName: 'L Line', lineColor: '#A7A9AC', lat: 40.7115, lng: -73.9440 },
      { id: 'nyc-l-4', name: '14 St - Union Sq', lineName: 'L Line', lineColor: '#A7A9AC', lat: 40.7398, lng: -73.9992 },
    ],
  },
  {
    id: 'nyc-nqrw',
    name: 'N/Q/R/W Line',
    color: '#FCCC0A',
    city: 'New York',
    type: 'subway',
    coordinates: [
      [40.7580, -73.8855], [40.7580, -73.9300], [40.7580, -73.9892], [40.7282, -74.0051],
    ],
    stations: [
      { id: 'nyc-nqrw-1', name: 'Astoria', lineName: 'N/Q/R/W Line', lineColor: '#FCCC0A', lat: 40.7580, lng: -73.8855 },
      { id: 'nyc-nqrw-2', name: 'Jackson Heights', lineName: 'N/Q/R/W Line', lineColor: '#FCCC0A', lat: 40.7580, lng: -73.9300 },
      { id: 'nyc-nqrw-3', name: 'Times Sq', lineName: 'N/Q/R/W Line', lineColor: '#FCCC0A', lat: 40.7580, lng: -73.9892 },
      { id: 'nyc-nqrw-4', name: 'Rector St', lineName: 'N/Q/R/W Line', lineColor: '#FCCC0A', lat: 40.7282, lng: -74.0051 },
    ],
  },

  // ── CHICAGO L ─────────────────────────────────────────────────────────────
  {
    id: 'chi-red',
    name: 'Red Line',
    color: '#C60C30',
    city: 'Chicago',
    type: 'subway',
    coordinates: [
      [42.0199, -87.6691], [41.9679, -87.6655], [41.9079, -87.6330],
      [41.8827, -87.6281], [41.8317, -87.6281],
    ],
    stations: [
      { id: 'chi-red-1', name: 'Howard', lineName: 'Red Line', lineColor: '#C60C30', lat: 42.0199, lng: -87.6691 },
      { id: 'chi-red-2', name: 'Loyola', lineName: 'Red Line', lineColor: '#C60C30', lat: 41.9679, lng: -87.6655 },
      { id: 'chi-red-3', name: 'Belmont', lineName: 'Red Line', lineColor: '#C60C30', lat: 41.9079, lng: -87.6330 },
      { id: 'chi-red-4', name: 'Chicago', lineName: 'Red Line', lineColor: '#C60C30', lat: 41.8827, lng: -87.6281 },
      { id: 'chi-red-5', name: '95th/Dan Ryan', lineName: 'Red Line', lineColor: '#C60C30', lat: 41.8317, lng: -87.6281 },
    ],
  },
  {
    id: 'chi-blue',
    name: 'Blue Line',
    color: '#00A1DE',
    city: 'Chicago',
    type: 'subway',
    coordinates: [
      [41.9796, -87.9008], [41.9210, -87.7982], [41.8827, -87.7282], [41.8781, -87.6298],
    ],
    stations: [
      { id: 'chi-blu-1', name: "O'Hare", lineName: 'Blue Line', lineColor: '#00A1DE', lat: 41.9796, lng: -87.9008 },
      { id: 'chi-blu-2', name: 'Montrose', lineName: 'Blue Line', lineColor: '#00A1DE', lat: 41.9210, lng: -87.7982 },
      { id: 'chi-blu-3', name: 'Logan Square', lineName: 'Blue Line', lineColor: '#00A1DE', lat: 41.8827, lng: -87.7282 },
      { id: 'chi-blu-4', name: 'Clark/Lake', lineName: 'Blue Line', lineColor: '#00A1DE', lat: 41.8781, lng: -87.6298 },
    ],
  },
  {
    id: 'chi-green',
    name: 'Green Line',
    color: '#009B3A',
    city: 'Chicago',
    type: 'subway',
    coordinates: [
      [41.8781, -87.7198], [41.8781, -87.6798], [41.8781, -87.6298], [41.8781, -87.6090],
    ],
    stations: [
      { id: 'chi-grn-1', name: 'Harlem', lineName: 'Green Line', lineColor: '#009B3A', lat: 41.8781, lng: -87.7198 },
      { id: 'chi-grn-2', name: 'Oak Park', lineName: 'Green Line', lineColor: '#009B3A', lat: 41.8781, lng: -87.6798 },
      { id: 'chi-grn-3', name: 'Clinton', lineName: 'Green Line', lineColor: '#009B3A', lat: 41.8781, lng: -87.6298 },
      { id: 'chi-grn-4', name: 'Ashland', lineName: 'Green Line', lineColor: '#009B3A', lat: 41.8781, lng: -87.6090 },
    ],
  },

  // ── SAN FRANCISCO BART ────────────────────────────────────────────────────
  {
    id: 'sf-red',
    name: 'Red Line',
    color: '#ED1C24',
    city: 'San Francisco',
    type: 'subway',
    coordinates: [
      [37.7749, -122.4194], [37.7749, -122.3988], [37.8044, -122.2712], [37.8324, -122.2854],
    ],
    stations: [
      { id: 'sf-red-1', name: 'Civic Center', lineName: 'Red Line', lineColor: '#ED1C24', lat: 37.7749, lng: -122.4194 },
      { id: 'sf-red-2', name: 'Embarcadero', lineName: 'Red Line', lineColor: '#ED1C24', lat: 37.7749, lng: -122.3988 },
      { id: 'sf-red-3', name: 'Oakland 12th St', lineName: 'Red Line', lineColor: '#ED1C24', lat: 37.8044, lng: -122.2712 },
      { id: 'sf-red-4', name: 'Richmond', lineName: 'Red Line', lineColor: '#ED1C24', lat: 37.8324, lng: -122.2854 },
    ],
  },
  {
    id: 'sf-blue',
    name: 'Blue Line',
    color: '#0099CC',
    city: 'San Francisco',
    type: 'subway',
    coordinates: [
      [37.7749, -122.4194], [37.7220, -122.4471], [37.6879, -122.4702], [37.5630, -122.0567],
    ],
    stations: [
      { id: 'sf-blu-1', name: 'Powell St', lineName: 'Blue Line', lineColor: '#0099CC', lat: 37.7749, lng: -122.4194 },
      { id: 'sf-blu-2', name: 'Balboa Park', lineName: 'Blue Line', lineColor: '#0099CC', lat: 37.7220, lng: -122.4471 },
      { id: 'sf-blu-3', name: 'Daly City', lineName: 'Blue Line', lineColor: '#0099CC', lat: 37.6879, lng: -122.4702 },
      { id: 'sf-blu-4', name: 'Fremont', lineName: 'Blue Line', lineColor: '#0099CC', lat: 37.5630, lng: -122.0567 },
    ],
  },
  {
    id: 'sf-yellow',
    name: 'Yellow Line',
    color: '#FFD800',
    city: 'San Francisco',
    type: 'subway',
    coordinates: [
      [37.9257, -122.3477], [37.8716, -122.2677], [37.8044, -122.2712], [37.7749, -122.4194],
    ],
    stations: [
      { id: 'sf-yel-1', name: 'Richmond', lineName: 'Yellow Line', lineColor: '#FFD800', lat: 37.9257, lng: -122.3477 },
      { id: 'sf-yel-2', name: 'El Cerrito', lineName: 'Yellow Line', lineColor: '#FFD800', lat: 37.8716, lng: -122.2677 },
      { id: 'sf-yel-3', name: 'Oakland 19th St', lineName: 'Yellow Line', lineColor: '#FFD800', lat: 37.8044, lng: -122.2712 },
      { id: 'sf-yel-4', name: 'Montgomery St', lineName: 'Yellow Line', lineColor: '#FFD800', lat: 37.7749, lng: -122.4194 },
    ],
  },

  // ── WASHINGTON DC METRO ───────────────────────────────────────────────────
  {
    id: 'dc-red',
    name: 'Red Line',
    color: '#BF0D3E',
    city: 'Washington DC',
    type: 'subway',
    coordinates: [
      [39.0840, -77.1531], [38.9800, -77.0869], [38.9072, -77.0369], [38.8973, -77.0063],
    ],
    stations: [
      { id: 'dc-red-1', name: 'Shady Grove', lineName: 'Red Line', lineColor: '#BF0D3E', lat: 39.0840, lng: -77.1531 },
      { id: 'dc-red-2', name: 'Bethesda', lineName: 'Red Line', lineColor: '#BF0D3E', lat: 38.9800, lng: -77.0869 },
      { id: 'dc-red-3', name: 'Metro Center', lineName: 'Red Line', lineColor: '#BF0D3E', lat: 38.9072, lng: -77.0369 },
      { id: 'dc-red-4', name: 'Union Station', lineName: 'Red Line', lineColor: '#BF0D3E', lat: 38.8973, lng: -77.0063 },
    ],
  },
  {
    id: 'dc-blue',
    name: 'Blue/Orange/Silver Line',
    color: '#009CDE',
    city: 'Washington DC',
    type: 'subway',
    coordinates: [
      [38.8801, -77.1731], [38.8868, -77.0893], [38.8973, -77.0063], [38.9072, -77.0369],
    ],
    stations: [
      { id: 'dc-blu-1', name: 'Pentagon', lineName: 'Blue/Orange/Silver Line', lineColor: '#009CDE', lat: 38.8801, lng: -77.1731 },
      { id: 'dc-blu-2', name: 'Rosslyn', lineName: 'Blue/Orange/Silver Line', lineColor: '#009CDE', lat: 38.8868, lng: -77.0893 },
      { id: 'dc-blu-3', name: 'Farragut West', lineName: 'Blue/Orange/Silver Line', lineColor: '#009CDE', lat: 38.8973, lng: -77.0063 },
      { id: 'dc-blu-4', name: 'Gallery Place', lineName: 'Blue/Orange/Silver Line', lineColor: '#009CDE', lat: 38.9072, lng: -77.0369 },
    ],
  },
  {
    id: 'dc-green',
    name: 'Green/Yellow Line',
    color: '#00B140',
    city: 'Washington DC',
    type: 'subway',
    coordinates: [
      [38.9972, -76.9796], [38.9568, -77.0025], [38.9072, -77.0369], [38.8433, -77.0050],
    ],
    stations: [
      { id: 'dc-grn-1', name: 'Greenbelt', lineName: 'Green/Yellow Line', lineColor: '#00B140', lat: 38.9972, lng: -76.9796 },
      { id: 'dc-grn-2', name: 'Fort Totten', lineName: 'Green/Yellow Line', lineColor: '#00B140', lat: 38.9568, lng: -77.0025 },
      { id: 'dc-grn-3', name: 'Shaw', lineName: 'Green/Yellow Line', lineColor: '#00B140', lat: 38.9072, lng: -77.0369 },
      { id: 'dc-grn-4', name: 'Waterfront', lineName: 'Green/Yellow Line', lineColor: '#00B140', lat: 38.8433, lng: -77.0050 },
    ],
  },

  // ── LOS ANGELES METRO ─────────────────────────────────────────────────────
  {
    id: 'la-red',
    name: 'Red/Purple Line',
    color: '#E3231D',
    city: 'Los Angeles',
    type: 'subway',
    coordinates: [
      [34.1022, -118.3402], [34.0684, -118.3008], [34.0522, -118.2437], [34.0480, -118.2588],
    ],
    stations: [
      { id: 'la-red-1', name: 'North Hollywood', lineName: 'Red/Purple Line', lineColor: '#E3231D', lat: 34.1022, lng: -118.3402 },
      { id: 'la-red-2', name: 'Hollywood/Highland', lineName: 'Red/Purple Line', lineColor: '#E3231D', lat: 34.0684, lng: -118.3008 },
      { id: 'la-red-3', name: 'Pershing Square', lineName: 'Red/Purple Line', lineColor: '#E3231D', lat: 34.0522, lng: -118.2437 },
      { id: 'la-red-4', name: 'Wilshire/Vermont', lineName: 'Red/Purple Line', lineColor: '#E3231D', lat: 34.0480, lng: -118.2588 },
    ],
  },
  {
    id: 'la-blue',
    name: 'Blue Line',
    color: '#006DB6',
    city: 'Los Angeles',
    type: 'subway',
    coordinates: [
      [34.0522, -118.2437], [33.9801, -118.2437], [33.9201, -118.2437], [33.8537, -118.2011],
    ],
    stations: [
      { id: 'la-blu-1', name: '7th/Metro Center', lineName: 'Blue Line', lineColor: '#006DB6', lat: 34.0522, lng: -118.2437 },
      { id: 'la-blu-2', name: 'Slauson', lineName: 'Blue Line', lineColor: '#006DB6', lat: 33.9801, lng: -118.2437 },
      { id: 'la-blu-3', name: 'Compton', lineName: 'Blue Line', lineColor: '#006DB6', lat: 33.9201, lng: -118.2437 },
      { id: 'la-blu-4', name: 'Long Beach Transit Mall', lineName: 'Blue Line', lineColor: '#006DB6', lat: 33.8537, lng: -118.2011 },
    ],
  },
  {
    id: 'la-gold',
    name: 'Gold Line',
    color: '#F2A900',
    city: 'Los Angeles',
    type: 'subway',
    coordinates: [
      [34.1469, -118.1514], [34.1095, -118.1795], [34.0522, -118.2437],
    ],
    stations: [
      { id: 'la-gld-1', name: 'Sierra Madre Villa', lineName: 'Gold Line', lineColor: '#F2A900', lat: 34.1469, lng: -118.1514 },
      { id: 'la-gld-2', name: 'Pasadena Del Mar', lineName: 'Gold Line', lineColor: '#F2A900', lat: 34.1095, lng: -118.1795 },
      { id: 'la-gld-3', name: 'Union Station', lineName: 'Gold Line', lineColor: '#F2A900', lat: 34.0522, lng: -118.2437 },
    ],
  },
];

export function getLinesForCity(city: string): TransitLine[] {
  return TRANSIT_LINES.filter(line => line.city === city);
}

export function getLineNamesForCity(city: string): string[] {
  return getLinesForCity(city).map(line => line.name);
}
