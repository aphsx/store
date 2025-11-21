import ProductCard from '@/components/ui/ProductCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { products } from '@/lib/data/products';
import Link from 'next/link';

export default function TopSelling() {
  const topProducts = products.filter(p => p.category === 'top-selling');

  return (
    <section className="py-20 bg-gray-50">
      <ScrollReveal direction="right">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          TOP SELLING
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          {topProducts.map((product) => (
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
