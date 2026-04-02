import React from 'react';
import type { Filters, TransitType } from '../types';
import { getLineNamesForCity } from '../data/transitLines';

interface TransitFiltersProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

const WALK_DISTANCES = [
  { label: '1 block', sublabel: '250 ft', value: 250 },
  { label: '2 blocks', sublabel: '500 ft', value: 500 },
  { label: '5 min', sublabel: '¼ mi', value: 1320 },
  { label: '10 min', sublabel: '½ mi', value: 2640 },
  { label: '15 min', sublabel: '¾ mi', value: 3960 },
  { label: 'Any', sublabel: '', value: null },
];

const BED_OPTIONS = [
  { label: 'Studio', value: 0 },
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4+', value: 4 },
];

export const TransitFilters: React.FC<TransitFiltersProps> = ({ filters, onFiltersChange }) => {
  const lineNames = getLineNamesForCity(filters.city);

  const toggleTransitType = (type: TransitType) => {
    const current = filters.transitTypes;
    const next = current.includes(type)
      ? current.filter(t => t !== type)
      : [...current, type];
    onFiltersChange({ ...filters, transitTypes: next });
  };

  return (
    <div className="space-y-3">
      {/* Transit Type + Walk Distance Row */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 items-start">
        {/* Transit Type */}
        <div className="flex-shrink-0">
          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Transit Type</p>
          <div className="flex gap-1.5">
            {(['subway', 'bus'] as TransitType[]).map(type => (
              <button
                key={type}
                onClick={() => toggleTransitType(type)}
                className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                  filters.transitTypes.includes(type)
                    ? 'bg-[#7C3AED] text-white border-[#7C3AED]'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-[#7C3AED] hover:text-[#7C3AED]'
                }`}
              >
                {type === 'subway' ? '🚇 Subway / Rail' : '🚌 Bus'}
              </button>
            ))}
          </div>
        </div>

        {/* Walk Distance */}
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Max Walk Distance</p>
          <div className="flex flex-wrap gap-1.5">
            {WALK_DISTANCES.map(opt => (
              <button
                key={String(opt.value)}
                onClick={() => onFiltersChange({ ...filters, maxWalkDistance: opt.value })}
                className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-all whitespace-nowrap ${
                  filters.maxWalkDistance === opt.value
                    ? 'bg-[#7C3AED] text-white border-[#7C3AED]'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-[#7C3AED] hover:text-[#7C3AED]'
                }`}
              >
                {opt.label}{opt.sublabel ? ` (${opt.sublabel})` : ''}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lines + Price + Beds Row */}
      <div className="flex flex-wrap gap-x-3 gap-y-2 items-end">
        {/* Specific Lines */}
        <div className="flex-shrink-0 min-w-[160px]">
          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Specific Line</p>
          <select
            value={filters.selectedLine}
            onChange={e => onFiltersChange({ ...filters, selectedLine: e.target.value })}
            className="w-full text-xs border border-slate-200 rounded-lg px-2.5 py-1.5 bg-white text-slate-700 outline-none focus:border-[#7C3AED] cursor-pointer"
          >
            <option value="">All Lines</option>
            {lineNames.map(name => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div className="flex-1 min-w-[180px]">
          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Price Range</p>
          <div className="flex items-center gap-1.5">
            <input
              type="number"
              placeholder="Min"
              value={filters.minPrice ?? ''}
              onChange={e => onFiltersChange({ ...filters, minPrice: e.target.value ? Number(e.target.value) : null })}
              className="w-full text-xs border border-slate-200 rounded-lg px-2.5 py-1.5 bg-white text-slate-700 outline-none focus:border-[#7C3AED]"
            />
            <span className="text-slate-400 text-xs">–</span>
            <input
              type="number"
              placeholder="Max"
              value={filters.maxPrice ?? ''}
              onChange={e => onFiltersChange({ ...filters, maxPrice: e.target.value ? Number(e.target.value) : null })}
              className="w-full text-xs border border-slate-200 rounded-lg px-2.5 py-1.5 bg-white text-slate-700 outline-none focus:border-[#7C3AED]"
            />
          </div>
        </div>

        {/* Beds */}
        <div className="flex-shrink-0">
          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Beds</p>
          <div className="flex gap-1">
            {BED_OPTIONS.map(opt => (
              <button
                key={opt.value}
                onClick={() => onFiltersChange({
                  ...filters,
                  minBeds: filters.minBeds === opt.value ? null : opt.value
                })}
                className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-all ${
                  filters.minBeds === opt.value
                    ? 'bg-[#7C3AED] text-white border-[#7C3AED]'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-[#7C3AED] hover:text-[#7C3AED]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
