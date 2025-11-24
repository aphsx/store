'use client';

import { useState, useMemo, useEffect } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import FilterSidebar from '@/components/shop/FilterSidebar';
import { getAllProducts } from '@/lib/services/products.service';
import type { Product } from '@/lib/types';
import { Filter } from 'lucide-react';

type SortOption = 'default' | 'price-low' | 'price-high' | 'min-order';
type CategoryFilter = 'all' | 'polo' | 't-shirt' | 'jacket' | 'sportswear' | 'bag' | 'apron' | 'cap' | 'umbrella';

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [styleFilter, setStyleFilter] = useState<CategoryFilter>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      const { data, error } = await getAllProducts();
      if (data) {
        setProducts(data);
      } else if (error) {
        console.error('Error loading products:', error);
      }
      setLoading(false);
    }
    loadProducts();
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (styleFilter !== 'all') {
      filtered = filtered.filter(p => p.category === styleFilter);
    }

    // Filter by price range (handle null prices)
    filtered = filtered.filter(p => {
      if (p.basePrice === null) return true; // Show "contact for price" items
      return p.basePrice >= priceRange[0] && p.basePrice <= priceRange[1];
    });

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => {
          if (a.basePrice === null) return 1;
          if (b.basePrice === null) return -1;
          return a.basePrice - b.basePrice;
        });
        break;
      case 'price-high':
        filtered.sort((a, b) => {
          if (a.basePrice === null) return 1;
          if (b.basePrice === null) return -1;
          return b.basePrice - a.basePrice;
        });
        break;
      case 'min-order':
        filtered.sort((a, b) => a.minOrderQty - b.minOrderQty);
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

            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
              </div>
            ) : (
              <>
                {/* Results Count */}
                <div className="mb-6">
                  <p className="text-gray-600">
                    แสดง <span className="font-semibold">{filteredAndSortedProducts.length}</span> รายการ
                  </p>
                </div>

                {/* Products Grid */}
                {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">ไม่พบสินค้าที่ตรงกับเงื่อนไขที่เลือก</p>
                <button
                  onClick={() => {
                    setStyleFilter('all');
                    setPriceRange([0, 500]);
                    setSortBy('default');
                  }}
                  className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800"
                >
                  ล้างตัวกรอง
                </button>
              </div>
            )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
