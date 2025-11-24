'use client';

type SortOption = 'default' | 'price-low' | 'price-high' | 'min-order';
type CategoryFilter = 'all' | 'polo' | 't-shirt' | 'jacket' | 'sportswear' | 'bag' | 'apron' | 'cap' | 'umbrella';

interface FilterSidebarProps {
  sortBy: SortOption;
  setSortBy: (value: SortOption) => void;
  styleFilter: CategoryFilter;
  setStyleFilter: (value: CategoryFilter) => void;
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

        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3 text-sm">หมวดหมู่สินค้า</h3>
          <div className="space-y-2">
            {[
              { value: 'all', label: 'ทั้งหมด' },
              { value: 'polo', label: 'เสื้อโปโล' },
              { value: 't-shirt', label: 'เสื้อยืด' },
              { value: 'jacket', label: 'แจ๊คเก็ต' },
              { value: 'sportswear', label: 'ชุดกีฬา' },
              { value: 'bag', label: 'กระเป๋าผ้า' },
              { value: 'apron', label: 'ผ้ากันเปื้อน' },
              { value: 'cap', label: 'หมวก' },
              { value: 'umbrella', label: 'ร่ม' },
            ].map((category) => (
              <button
                key={category.value}
                onClick={() => setStyleFilter(category.value as CategoryFilter)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  styleFilter === category.value
                    ? 'bg-black text-white'
                    : 'bg-white hover:bg-gray-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3 text-sm">ช่วงราคา</h3>
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
              <span>฿{priceRange[0]}</span>
              <span>฿{priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Sort By */}
        <div>
          <h3 className="font-semibold mb-3 text-sm">เรียงตาม</h3>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm bg-white"
          >
            <option value="default">เริ่มต้น</option>
            <option value="price-low">ราคา: ต่ำ - สูง</option>
            <option value="price-high">ราคา: สูง - ต่ำ</option>
            <option value="min-order">จำนวนสั่งขั้นต่ำ</option>
          </select>
        </div>
      </div>
    </aside>
  );
}
