import Link from 'next/link';
import { Product } from '@/lib/types';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

// Generate background color based on product id
const getProductColor = (id: string) => {
  const colors = [
    'bg-gray-100',
    'bg-gray-200',
    'bg-gray-100',
    'bg-gray-200',
    'bg-gray-100',
    'bg-gray-200',
    'bg-gray-100',
    'bg-gray-200',
  ];
  return colors[parseInt(id) - 1] || colors[0];
};

export default function ProductCard({ product }: ProductCardProps) {
  const bgColor = getProductColor(product.id);

  return (
    <Link href={`/product/${product.id}`} className="group cursor-pointer block">
      <div className={`relative aspect-square ${bgColor} rounded-xl overflow-hidden mb-4 transition-transform group-hover:scale-105`}>
        {/* Product placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-300">
              {product.name.charAt(0)}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium line-clamp-2 leading-relaxed group-hover:text-gray-600 transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-2">
          <p className="text-base font-bold">$ {product.price}</p>
        </div>

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
        </div>
      </div>
    </Link>
  );
}
