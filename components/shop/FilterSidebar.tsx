'use client';

type SortOption = 'default' | 'price-low' | 'price-high' | 'rating';
type StyleFilter = 'all' | 'casual' | 'formal' | 'party' | 'gym';

interface FilterSidebarProps {
  sortBy: SortOption;
  setSortBy: (value: SortOption) => void;
  styleFilter: StyleFilter;
  setStyleFilter: (value: StyleFilter) => void;
  priceRange: [number, number];
  setPriceRange: (value: [number, number]) => void;
  showFilters: boolean;
  setShowFilters: (value: boolean) => void;
}

export default function FilterSidebar({
  sortBy,
  setSortBy,
  styleFilter,
  setStyleFilter,
  priceRange,
  setPriceRange,
  showFilters,
  setShowFilters,
}: FilterSidebarProps) {
  return (
    <aside className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
      <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Filters</h2>
          <button
            onClick={() => setShowFilters(false)}
            className="lg:hidden text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        {/* Style Filter */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3 text-sm">Style</h3>
          <div className="space-y-2">
            {(['all', 'casual', 'formal', 'party', 'gym'] as StyleFilter[]).map((style) => (
              <button
                key={style}
                onClick={() => setStyleFilter(style)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  styleFilter === style
                    ? 'bg-black text-white'
                    : 'bg-white hover:bg-gray-100'
                }`}
              >
                {style.charAt(0).toUpperCase() + style.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3 text-sm">Price Range</h3>
          <div className="space-y-3">
            <input
              type="range"
              min="0"
              max="500"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              className="w-full accent-black"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Sort By */}
        <div>
          <h3 className="font-semibold mb-3 text-sm">Sort By</h3>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm bg-white"
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>
    </aside>
  );
}
