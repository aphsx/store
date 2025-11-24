import Link from 'next/link';
import { Product } from '@/lib/types';
import { Package, Clock, Shirt } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

// Generate background color based on product id
const getProductColor = (id: string) => {
  const colors = [
    'bg-gradient-to-br from-blue-50 to-blue-100',
    'bg-gradient-to-br from-red-50 to-red-100',
    'bg-gradient-to-br from-green-50 to-green-100',
    'bg-gradient-to-br from-yellow-50 to-yellow-100',
    'bg-gradient-to-br from-purple-50 to-purple-100',
    'bg-gradient-to-br from-pink-50 to-pink-100',
    'bg-gradient-to-br from-gray-50 to-gray-100',
    'bg-gradient-to-br from-orange-50 to-orange-100',
  ];
  const index = (parseInt(id) - 1) % colors.length;
  return colors[index] || colors[0];
};

export default function ProductCard({ product }: ProductCardProps) {
  const bgColor = getProductColor(product.id);

  return (
    <Link href={`/product/${product.id}`} className="group cursor-pointer block">
      <div className={`relative aspect-square ${bgColor} rounded-xl overflow-hidden mb-4 transition-all duration-300 group-hover:shadow-lg`}>
        {/* Product placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
            <Shirt className="w-20 h-20 text-gray-300 mx-auto mb-2" strokeWidth={1.5} />
            <div className="text-xs font-medium text-gray-400">
              {product.nameEn || product.name}
            </div>
          </div>
        </div>

        {/* Customizable Badge */}
        {product.isCustomizable && (
          <div className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded-full font-medium">
            รับปรับแต่ง
          </div>
        )}
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-semibold line-clamp-2 leading-relaxed group-hover:text-gray-600 transition-colors">
          {product.name}
        </h3>

        {product.nameEn && (
          <p className="text-xs text-gray-500">{product.nameEn}</p>
        )}

        <div className="flex items-center justify-between">
          {product.basePrice !== null ? (
            <p className="text-base font-bold text-black">
              ฿{product.basePrice}
              <span className="text-xs font-normal text-gray-500">/ตัว</span>
            </p>
          ) : (
            <p className="text-sm font-medium text-blue-600">สอบถามราคา</p>
          )}
        </div>

        <div className="flex flex-wrap gap-2 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <Package className="w-3 h-3" />
            <span>ขั้นต่ำ {product.minOrderQty}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{product.leadTimeDays} วัน</span>
          </div>
        </div>

        {product.material && (
          <div className="text-xs text-gray-500">
            วัสดุ: {product.material}
            {product.weight && ` (${product.weight} GSM)`}
          </div>
        )}
      </div>
    </Link>
  );
}
