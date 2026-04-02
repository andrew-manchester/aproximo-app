import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import type { Property, SortOption } from '../types';
import { PropertyCard } from './PropertyCard';

interface PropertyListProps {
  properties: Property[];
  matchingPropertyIds: Set<number>;
  selectedPropertyId: number | null;
  onPropertySelect: (id: number | null) => void;
  totalCount: number;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'transit', label: 'Best Transit Match' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
];

export const PropertyList: React.FC<PropertyListProps> = ({
  properties,
  matchingPropertyIds,
  selectedPropertyId,
  onPropertySelect,
  totalCount,
  sortBy,
  onSortChange,
}) => {
  const matchingCount = properties.filter(p => matchingPropertyIds.has(p.id)).length;

  return (
    <div className="flex flex-col h-full min-h-0">
      {/* List header */}
      <div className="flex items-center justify-between mb-3 flex-shrink-0">
        <div>
          <p className="text-sm font-semibold text-slate-800">
            Showing{' '}
            <span className="text-[#7C3AED]">{matchingCount}</span>
            {' '}of{' '}
            <span>{totalCount}</span>
            {' '}homes
          </p>
          <p className="text-xs text-slate-400">near transit in {properties[0]?.city || 'selected city'}</p>
        </div>
        <div className="flex items-center gap-1.5">
          <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
          <select
            value={sortBy}
            onChange={e => onSortChange(e.target.value as SortOption)}
            className="text-xs border border-slate-200 rounded-lg px-2 py-1 bg-white text-slate-600 outline-none focus:border-[#7C3AED] cursor-pointer"
          >
            {SORT_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Scrollable cards */}
      <div className="flex-1 overflow-y-auto min-h-0 pr-1 -mr-1">
        {properties.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 text-center px-4">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">🏠</span>
            </div>
            <p className="text-sm font-semibold text-slate-700 mb-1">No homes found</p>
            <p className="text-xs text-slate-400">
              No homes found within that transit distance.{' '}
              Try expanding your search.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 pb-4">
            {properties.map(property => (
              <PropertyCard
                key={property.id}
                property={property}
                isMatching={matchingPropertyIds.has(property.id)}
                isSelected={selectedPropertyId === property.id}
                onSelect={id => onPropertySelect(selectedPropertyId === id ? null : id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
