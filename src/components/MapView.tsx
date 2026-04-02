import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Polyline, CircleMarker, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Property, TransitLine } from '../types';
import { CITIES } from '../data/cities';

// Fix Leaflet default icon paths
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface MapViewProps {
  city: string;
  transitLines: TransitLine[];
  properties: Property[];
  matchingPropertyIds: Set<number>;
  selectedPropertyId: number | null;
  onPropertySelect: (id: number | null) => void;
}

// Component to recenter map when city changes
const MapController: React.FC<{ city: string }> = ({ city }) => {
  const map = useMap();
  useEffect(() => {
    const cfg = CITIES[city];
    if (cfg) {
      map.setView(cfg.center, cfg.zoom, { animate: true });
    }
  }, [city, map]);
  return null;
};

function formatPrice(price: number, forRent: boolean): string {
  if (forRent) {
    return `$${(price / 1000).toFixed(1)}k`;
  }
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(1)}M`;
  }
  return `$${Math.round(price / 1000)}k`;
}

export const MapView: React.FC<MapViewProps> = ({
  city,
  transitLines,
  properties,
  matchingPropertyIds,
  selectedPropertyId,
  onPropertySelect,
}) => {
  const cfg = CITIES[city];

  // Create custom price bubble icon
  const createPriceIcon = (property: Property, isMatching: boolean, isSelected: boolean) => {
    const price = formatPrice(property.price, property.forRent);
    const bg = isSelected ? '#6D28D9' : isMatching ? '#7C3AED' : '#94A3B8';
    const border = isSelected ? '#4C1D95' : isMatching ? '#6D28D9' : '#CBD5E1';
    return L.divIcon({
      html: `<div style="
        background:${bg};
        border:2px solid ${border};
        border-radius:20px;
        padding:3px 7px;
        font-size:11px;
        font-weight:700;
        color:#fff;
        white-space:nowrap;
        box-shadow:0 2px 6px rgba(0,0,0,0.25);
        cursor:pointer;
        transition:all 0.15s;
      ">${price}</div>`,
      className: '',
      iconAnchor: [24, 14],
    });
  };

  return (
    <div className="w-full h-full relative">
      <MapContainer
        center={cfg.center}
        zoom={cfg.zoom}
        style={{ width: '100%', height: '100%' }}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          opacity={0.85}
        />

        <MapController city={city} />

        {/* Transit Lines */}
        {transitLines.map(line => (
          <Polyline
            key={line.id}
            positions={line.coordinates}
            pathOptions={{
              color: line.color,
              weight: 4,
              opacity: 0.75,
            }}
          >
            <Tooltip sticky>{line.name}</Tooltip>
          </Polyline>
        ))}

        {/* Transit Stations */}
        {transitLines.flatMap(line =>
          line.stations.map(station => (
            <CircleMarker
              key={station.id}
              center={[station.lat, station.lng]}
              radius={5}
              pathOptions={{
                color: '#fff',
                weight: 2,
                fillColor: station.lineColor,
                fillOpacity: 1,
              }}
            >
              <Tooltip>
                <div className="text-xs font-semibold">{station.name}</div>
                <div className="text-xs text-slate-500">{station.lineName}</div>
              </Tooltip>
            </CircleMarker>
          ))
        )}

        {/* Property Markers using L.marker with divIcon */}
        {properties.map(property => {
          const isMatching = matchingPropertyIds.has(property.id);
          const isSelected = selectedPropertyId === property.id;
          const icon = createPriceIcon(property, isMatching, isSelected);

          return (
            <PropertyMarker
              key={property.id}
              property={property}
              icon={icon}
              isMatching={isMatching}
              isSelected={isSelected}
              onSelect={onPropertySelect}
            />
          );
        })}
      </MapContainer>
    </div>
  );
};

// Separate component to use L.marker imperatively
import { useEffect as useEff, useRef } from 'react';
import { useMap as useMapHook } from 'react-leaflet';

interface PropertyMarkerProps {
  property: Property;
  icon: L.DivIcon;
  isMatching: boolean;
  isSelected: boolean;
  onSelect: (id: number | null) => void;
}

const PropertyMarker: React.FC<PropertyMarkerProps> = ({ property, icon, isMatching, isSelected, onSelect }) => {
  const map = useMapHook();
  const markerRef = useRef<L.Marker | null>(null);

  useEff(() => {
    const marker = L.marker([property.lat, property.lng], { icon, zIndexOffset: isMatching ? 100 : 0 });
    marker.on('click', () => onSelect(isSelected ? null : property.id));
    marker.bindTooltip(`
      <div style="font-size:12px;line-height:1.4">
        <div style="font-weight:700;margin-bottom:2px">${property.address}</div>
        <div style="color:#64748b">${property.neighborhood}</div>
        <div style="margin-top:4px;color:#7C3AED;font-weight:600">
          ${property.forRent ? `$${property.price.toLocaleString()}/mo` : `$${property.price.toLocaleString()}`}
        </div>
        <div style="margin-top:3px;font-size:11px">
          🚇 ${property.nearestTransit.walkMinutes} min walk · ${property.nearestTransit.stationName}
        </div>
      </div>
    `, { direction: 'top', offset: [0, -10] });
    marker.addTo(map);
    markerRef.current = marker;
    return () => { marker.remove(); };
  }, []);

  useEff(() => {
    if (markerRef.current) {
      markerRef.current.setIcon(icon);
      markerRef.current.setZIndexOffset(isMatching ? 100 : 0);
    }
  }, [icon, isMatching, isSelected]);

  return null;
};
