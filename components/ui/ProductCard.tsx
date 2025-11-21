import { Product } from '@/lib/types';

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
    <div className="group cursor-pointer">
      <div className={`relative aspect-square ${bgColor} rounded-xl overflow-hidden mb-4`}>
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
        <h3 className="text-sm font-medium line-clamp-2 leading-relaxed">
          {product.name}
        </h3>

        <div className="flex items-center gap-2">
          <p className="text-base font-bold">$ {product.price}</p>
        </div>
      </div>
    </div>
  );
}
