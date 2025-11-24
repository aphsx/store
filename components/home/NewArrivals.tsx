'use client';

import { useState, useEffect } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { getLatestProducts } from '@/lib/services/products.service';
import type { Product } from '@/lib/types';
import Link from 'next/link';

export default function NewArrivals() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const { data, error } = await getLatestProducts(4);
      if (data) {
        setProducts(data);
      } else if (error) {
        console.error('Error loading new arrivals:', error);
      }
      setLoading(false);
    }
    loadProducts();
  }, []);

  return (
    <section className="py-20 bg-white">
      <ScrollReveal>
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          NEW ARRIVALS
        </h2>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/shop"
                className="inline-block border border-gray-300 px-12 py-3 rounded-full hover:bg-gray-50 transition-all text-sm font-medium"
              >
                View All
              </Link>
            </div>
          </>
        )}
      </div>
      </ScrollReveal>
    </section>
  );
}
