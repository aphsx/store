import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/lib/data/products';
import Link from 'next/link';

export default function TopSelling() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          TOP SELLING
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/shop"
            className="inline-block border-2 border-black px-12 py-3 rounded-full hover:bg-black hover:text-white transition"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
