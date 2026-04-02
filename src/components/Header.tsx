import React from 'react';

interface HeaderProps {
  listingType: 'rent' | 'sale';
  onListingTypeChange: (type: 'rent' | 'sale') => void;
}

export const Header: React.FC<HeaderProps> = ({ listingType, onListingTypeChange }) => {
  return (
    <header className="bg-[#0F172A] text-white px-5 py-3 flex items-center justify-between shadow-lg flex-shrink-0">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-9 h-9 bg-[#7C3AED] rounded-lg">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <rect x="2" y="7" width="20" height="10" rx="2" />
            <circle cx="7" cy="17" r="2" fill="currentColor" stroke="none" />
            <circle cx="17" cy="17" r="2" fill="currentColor" stroke="none" />
            <path d="M2 12h20M7 7V5M17 7V5" />
          </svg>
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white leading-none">Aproximo</h1>
          <p className="text-[11px] text-slate-400 leading-none mt-0.5">Find your home near the lines that move you</p>
        </div>
      </div>

      <div className="flex items-center gap-1 bg-[#1E293B] rounded-full p-1">
        <button
          onClick={() => onListingTypeChange('rent')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            listingType === 'rent'
              ? 'bg-[#7C3AED] text-white shadow'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          For Rent
        </button>
        <button
          onClick={() => onListingTypeChange('sale')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            listingType === 'sale'
              ? 'bg-[#7C3AED] text-white shadow'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          For Sale
        </button>
      </div>
    </header>
  );
};
