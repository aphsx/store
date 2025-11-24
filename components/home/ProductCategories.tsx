'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shirt, ShoppingBag, Umbrella, ChefHat } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { getAllCategories } from '@/lib/services/categories';
import { Database } from '@/lib/database.types';

type Category = Database['public']['Tables']['product_categories']['Row'];

const iconMap: Record<string, any> = {
  Shirt,
  ShoppingBag,
  Umbrella,
  ChefHat
};

export default function ProductCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      const { data, error } = await getAllCategories();
      if (data) {
        setCategories(data);
      } else if (error) {
        console.error('Error loading categories:', error);
      }
      setLoading(false);
    }
    loadCategories();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal direction="right">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">หมวดหมู่สินค้า</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              สินค้าที่เราผลิตครอบคลุมทุกความต้องการ พร้อมรับปรับแต่งตามสั่ง
            </p>
          </div>
        </ScrollReveal>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => {
                const Icon = iconMap[category.icon || ''];
                return (
                  <ScrollReveal
                    key={category.id}
                    direction="right"
                    delay={index * 0.05}
                  >
                    <Link href={`/products/${category.id}`} className="h-full block">
                      <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                        {/* Gradient Header */}
                        <div className={`bg-gradient-to-r ${category.color} p-6 text-white relative overflow-hidden`}>
                          <div className="absolute top-0 right-0 opacity-20">
                            {Icon && <Icon className="w-24 h-24" strokeWidth={1} />}
                          </div>
                          <div className="relative">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
                              {Icon && <Icon className="w-6 h-6" />}
                            </div>
                            <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                            <p className="text-xs text-white/80">{category.name_en}</p>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-1 min-h-[3rem]">
                            {category.description}
                          </p>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-500">สั่งขั้นต่ำ</span>
                            <span className="font-semibold text-black">{category.min_order}</span>
                          </div>
                        </div>

                        {/* Hover Arrow */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </>
        )}

        <ScrollReveal direction="right" delay={0.4}>
          <div className="text-center mt-10">
            <Link
              href="/shop"
              className="inline-block bg-black text-white px-10 py-3 rounded-full hover:bg-gray-800 transition-all font-medium text-sm hover:scale-105"
            >
              ดูสินค้าทั้งหมด
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
