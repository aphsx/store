import ProductCard from '@/components/ui/ProductCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { products } from '@/lib/data/products';
import Link from 'next/link';

export default function NewArrivals() {
  const newProducts = products.filter(p => p.category === 'new-arrivals');

  return (
    <section className="py-20 bg-white">
      <ScrollReveal>
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          NEW ARRIVALS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          {newProducts.map((product) => (
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
      </div>
      </ScrollReveal>
    </section>
  );
}
