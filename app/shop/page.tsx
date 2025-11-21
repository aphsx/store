'use client';

import { useState, useMemo } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import FilterSidebar from '@/components/shop/FilterSidebar';
import { products } from '@/lib/data/products';
import { Filter } from 'lucide-react';

type SortOption = 'default' | 'price-low' | 'price-high' | 'rating';
type StyleFilter = 'all' | 'casual' | 'formal' | 'party' | 'gym';

export default function ShopPage() {
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [styleFilter, setStyleFilter] = useState<StyleFilter>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by style
    if (styleFilter !== 'all') {
      filtered = filtered.filter(p => p.style === styleFilter);
    }

    // Filter by price range
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [sortBy, styleFilter, priceRange]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            SHOP ALL PRODUCTS
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Browse through our diverse range of meticulously crafted garments
          </p>
        </div>
      </div> */}

      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <FilterSidebar
            sortBy={sortBy}
            setSortBy={setSortBy}
            styleFilter={styleFilter}
            setStyleFilter={setStyleFilter}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />

          {/* Products Grid */}
          <div className="flex-1">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setShowFilters(true)}
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredAndSortedProducts.length}</span> products
              </p>
            </div>

            {/* Products Grid */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No products found matching your filters</p>
                <button
                  onClick={() => {
                    setStyleFilter('all');
                    setPriceRange([0, 500]);
                    setSortBy('default');
                  }}
                  className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
