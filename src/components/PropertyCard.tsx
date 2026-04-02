import React from 'react';
import { BedDouble, Bath, Maximize2 } from 'lucide-react';
import type { Property } from '../types';
import { getTransitScore } from '../utils/distance';

interface PropertyCardProps {
  property: Property;
  isMatching: boolean;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  isMatching,
  isSelected,
  onSelect,
}) => {
  const score = getTransitScore(property.nearestTransit.walkMinutes);

  return (
    <div
      onClick={() => onSelect(property.id)}
      className={`
        bg-white rounded-xl overflow-hidden shadow-sm border cursor-pointer transition-all duration-200
        hover:shadow-md hover:-translate-y-0.5
        ${isSelected ? 'ring-2 ring-[#7C3AED] border-[#7C3AED]' : 'border-slate-200'}
        ${isMatching ? 'border-l-4 border-l-[#7C3AED]' : 'opacity-75'}
      `}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={property.imageUrl
            ? property.imageUrl
            : `https://picsum.photos/seed/${property.imageId}/400/250`}
          alt={property.address}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Price badge */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-white font-bold text-lg leading-none">
                {property.forRent
                  ? `$${property.price.toLocaleString()}`
                  : `$${(property.price / 1000).toFixed(0)}k`}
              </span>
              {property.forRent && (
                <span className="text-white/80 text-xs ml-1">/mo</span>
              )}
            </div>
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${score.bgColor}`}>
              {score.label}
            </span>
          </div>
        </div>
        {isMatching && (
          <div className="absolute top-2 left-2 bg-[#7C3AED] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            Near Transit
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3">
        <div className="mb-2">
          <h3 className="text-sm font-semibold text-slate-800 truncate">{property.address}</h3>
          <p className="text-xs text-slate-500">{property.neighborhood}, {property.city}</p>
        </div>

        {/* Details row */}
        <div className="flex items-center gap-3 text-xs text-slate-600 mb-3">
          <span className="flex items-center gap-1">
            <BedDouble className="w-3.5 h-3.5 text-slate-400" />
            {property.beds === 0 ? 'Studio' : `${property.beds} bed`}
          </span>
          <span className="text-slate-300">|</span>
          <span className="flex items-center gap-1">
            <Bath className="w-3.5 h-3.5 text-slate-400" />
            {property.baths} bath
          </span>
          <span className="text-slate-300">|</span>
          <span className="flex items-center gap-1">
            <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
            {property.sqft.toLocaleString()} sqft
          </span>
        </div>

        {/* Transit badge */}
        <div
          className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs"
          style={{ backgroundColor: `${property.nearestTransit.lineColor}15` }}
        >
          <span className="text-sm">🚇</span>
          <div className="min-w-0">
            <span className="font-semibold" style={{ color: property.nearestTransit.lineColor }}>
              {property.nearestTransit.walkMinutes} min walk
            </span>
            <span className="text-slate-500"> to </span>
            <span className="text-slate-700 font-medium truncate">
              {property.nearestTransit.stationName}
            </span>
            <span className="text-slate-400"> · {property.nearestTransit.lineName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
