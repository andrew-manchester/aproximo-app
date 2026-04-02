const RAPIDAPI_HOST = 'zillow-scraper-api.p.rapidapi.com';

export interface ZillowListing {
  zpid: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  price: number;
  bedrooms: number | null;
  bathrooms: number | null;
  living_area_sqft: number | null;
  home_type: string;
  listing_status: string;
  days_on_zillow: number | null;
  latitude: number;
  longitude: number;
  image_url: string | null;
  detail_url: string | null;
}

export async function fetchListingsForCity(city: string, apiKey: string): Promise<ZillowListing[]> {
  // map city names to search-friendly strings
  const cityStateMap: Record<string, string> = {
    'New York': 'New York, NY',
    'Boston': 'Boston, MA',
    'Chicago': 'Chicago, IL',
    'San Francisco': 'San Francisco, CA',
    'Washington DC': 'Washington, DC',
    'Los Angeles': 'Los Angeles, CA',
  };
  const location = cityStateMap[city] ?? city;
  const url = `https://${RAPIDAPI_HOST}/zillow/search?location=${encodeURIComponent(location)}`;

  const response = await fetch(url, {
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': RAPIDAPI_HOST,
    },
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  const json = await response.json();
  if (!json.success || !json.data?.listings) {
    throw new Error('Unexpected API response shape');
  }

  return json.data.listings as ZillowListing[];
}
