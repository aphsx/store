import Link from 'next/link';
import { Shirt, ShoppingBag, Umbrella, ChefHat } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const categories = [
  {
    id: 'polo',
    name: 'เสื้อโปโล',
    nameEn: 'Polo Shirts',
    description: 'เสื้อโปโลตัดต่อ กุ้น แขนจั้ม',
    icon: 'Shirt',
    minOrder: '50 ตัว',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 't-shirt',
    name: 'เสื้อยืด',
    nameEn: 'T-Shirts',
    description: 'เสื้อยืดคอกลมพร้อมสกรีน',
    icon: 'Shirt',
    minOrder: '50 ตัว',
    color: 'from-red-500 to-red-600'
  },
  {
    id: 'sportswear',
    name: 'ชุดกีฬา',
    nameEn: 'Sportswear',
    description: 'เสื้อกีฬาระบายอากาศ พิมพ์ซับลิเมชั่น',
    icon: 'Shirt',
    minOrder: '30 ตัว',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'tote-bag',
    name: 'หมอน',
    nameEn: 'Tote Bags',
    description: 'หมอนไดคัทพิมพ์ลาย',
    icon: 'ShoppingBag',
    minOrder: '100 ใบ',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    id: 'another-product',
    name: 'another product',
    nameEn: 'Another Product',
    description: 'รายละเอียดสินค้าเพิ่มเติม ติดต่อเราเพื่อสอบถาม',
    icon: '',
    minOrder: '',
    color: 'from-orange-500 to-orange-600'
  },
  // {
  //   id: 'cap',
  //   name: 'หมวก',
  //   nameEn: 'Caps',
  //   description: 'หมวกแก๊ปทรงสวย ปักโลโก้ได้',
  //   icon: 'Shirt',
  //   minOrder: '100 ใบ',
  //   color: 'from-purple-500 to-purple-600'
  // },
  // {
  //   id: 'umbrella',
  //   name: 'ร่ม',
  //   nameEn: 'Umbrellas',
  //   description: 'ร่มพับและร่มกอลฟ์ พิมพ์โลโก้ได้',
  //   icon: 'Umbrella',
  //   minOrder: '50 คัน',
  //   color: 'from-pink-500 to-pink-600'
  // }
];

const iconMap: Record<string, any> = {
  Shirt,
  ShoppingBag,
  Umbrella,
  ChefHat
};

export default function ProductCategories() {
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <ScrollReveal
                key={category.id}
                direction="right"
                delay={index * 0.05}
              >
                <Link href={`/shop?category=${category.id}`} className="h-full block">
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
                        <p className="text-xs text-white/80">{category.nameEn}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-1 min-h-[3rem]">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">สั่งขั้นต่ำ</span>
                        <span className="font-semibold text-black">{category.minOrder}</span>
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
