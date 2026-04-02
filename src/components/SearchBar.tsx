import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { CITY_NAMES } from '../data/cities';

interface SearchBarProps {
  selectedCity: string;
  onCityChange: (city: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ selectedCity, onCityChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const filtered = CITY_NAMES.filter(c =>
    c.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative">
      <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2.5 shadow-sm">
        <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
        <input
          type="text"
          value={query || selectedCity}
          onChange={e => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => {
            setQuery('');
            setIsOpen(true);
          }}
          placeholder="Search city, neighborhood, or zip..."
          className="flex-1 text-sm text-slate-700 placeholder-slate-400 outline-none bg-transparent"
        />
        <button
          onClick={() => setIsOpen(o => !o)}
          className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-700 border-l border-slate-200 pl-2 ml-1"
        >
          <span className="font-medium">{selectedCity}</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full mt-1 left-0 right-0 bg-white border border-slate-200 rounded-xl shadow-xl z-20 overflow-hidden">
            {filtered.map(city => (
              <button
                key={city}
                onClick={() => {
                  onCityChange(city);
                  setQuery('');
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 transition-colors flex items-center gap-2 ${
                  city === selectedCity ? 'bg-purple-50 text-[#7C3AED] font-medium' : 'text-slate-700'
                }`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 opacity-50">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                {city}
              </button>
            ))}
            {filtered.length === 0 && (
              <p className="text-sm text-slate-400 px-4 py-3">No cities found</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};
