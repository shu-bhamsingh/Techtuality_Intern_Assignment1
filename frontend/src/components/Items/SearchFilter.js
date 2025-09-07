import React from 'react';

const SearchFilter = ({ searchTerm, onSearchChange }) => {
  const handleClearSearch = () => {
    onSearchChange('');
  };

  return (
    <div className="card mb-6">
      <div className="flex-1">
        <label htmlFor="search" className="form-label">
          Search Items
        </label>
        <div className="relative">
          <input
            id="search"
            type="text"
            className="input-field pr-10"
            placeholder="Search by title or description..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchTerm && (
            <button
              onClick={handleClearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
