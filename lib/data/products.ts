import { Product } from '@/lib/types';

export const products: Product[] = [
  // เสื้อโปโล (Polo Shirts)
  {
    id: '1',
    name: 'เสื้อโปโลคอปก Cotton 100%',
    nameEn: 'Classic Polo Shirt 100% Cotton',
    basePrice: 180,
    image: '/images/product-1.jpg',
    category: 'polo',
    description: 'เสื้อโปโลคอปกคุณภาพดี ผ้า Cotton 100% นุ่ม ระบายอากาศได้ดี เหมาะสำหรับทำยูนิฟอร์มบริษัท ชุดพนักงาน',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
    colors: ['ขาว', 'ดำ', 'เทา', 'กรมท่า', 'แดง', 'เหลือง', 'เขียว', 'ส้ม'],
    material: 'Cotton 100%',
    weight: 200,
    minOrderQty: 50,
    leadTimeDays: 14,
    isCustomizable: true,
    style: 'polo'
  },
  {
    id: '2',
    name: 'เสื้อโปโล CVC ผ้าคอมพ์',
    nameEn: 'CVC Polo Shirt',
    basePrice: 150,
    image: '/images/product-2.jpg',
    category: 'polo',
    description: 'เสื้อโปโล CVC (Chief Value Cotton) ผสม Polyester นุ่ม ใส่สบาย ไม่ยับง่าย เหมาะกับงานโรงแรม ร้านอาหาร',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    colors: ['ขาว', 'ดำ', 'เทา', 'กรมท่า', 'ฟ้า', 'แดง'],
    material: 'CVC (60% Cotton, 40% Polyester)',
    weight: 180,
    minOrderQty: 50,
    leadTimeDays: 14,
    isCustomizable: true,
    style: 'polo'
  },
  {
    id: '3',
    name: 'เสื้อโปโลตัดต่อสี',
    nameEn: 'Color Block Polo Shirt',
    basePrice: 200,
    image: '/images/product-3.jpg',
    category: 'polo',
    description: 'เสื้อโปโลดีไซน์ตัดต่อสี โดดเด่น สะดุดตา เหมาะสำหรับทีมขายงาน Event งานโปรโมท',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    colors: ['ขาว/กรมท่า', 'ดำ/แดง', 'เทา/เขียว', 'ขาว/ฟ้า'],
    material: 'CVC',
    weight: 190,
    minOrderQty: 100,
    leadTimeDays: 21,
    isCustomizable: true,
    style: 'polo'
  },

  // เสื้อยืด (T-Shirts)
  {
    id: '4',
    name: 'เสื้อยืดคอกลม Cotton 100%',
    nameEn: 'Classic Round Neck T-Shirt',
    basePrice: 100,
    image: '/images/product-4.jpg',
    category: 't-shirt',
    description: 'เสื้อยืดคอกลม Cotton 100% เนื้อนุ่ม ใส่สบาย เหมาะสำหรับทำเสื้อกิจกรรม เสื้อทีม สกรีนลายได้สวย',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL'],
    colors: ['ขาว', 'ดำ', 'เทา', 'กรมท่า', 'แดง', 'เขียว', 'ส้ม', 'ชมพู', 'ฟ้า'],
    material: 'Cotton 100%',
    weight: 180,
    minOrderQty: 50,
    leadTimeDays: 10,
    isCustomizable: true,
    style: 't-shirt'
  },
  {
    id: '5',
    name: 'เสื้อยืด CVC คุณภาพพรีเมี่ยม',
    nameEn: 'Premium CVC T-Shirt',
    basePrice: 120,
    image: '/images/product-5.jpg',
    category: 't-shirt',
    description: 'เสื้อยืด CVC คุณภาพพรีเมี่ยม นุ่มพิเศษ ไม่ยับง่าย ซักง่าย แห้งเร็ว',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    colors: ['ขาว', 'ดำ', 'เทา', 'กรมท่า', 'น้ำเงิน'],
    material: 'CVC (65% Cotton, 35% Polyester)',
    weight: 200,
    minOrderQty: 50,
    leadTimeDays: 10,
    isCustomizable: true,
    style: 't-shirt'
  },
  {
    id: '6',
    name: 'เสื้อยืดคอวี',
    nameEn: 'V-Neck T-Shirt',
    basePrice: 110,
    image: '/images/product-6.jpg',
    category: 't-shirt',
    description: 'เสื้อยืดคอวี ทรงสวย ใส่แล้วดูดี เหมาะกับทุกเพศทุกวัย',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['ขาว', 'ดำ', 'เทา', 'กรมท่า'],
    material: 'CVC',
    weight: 180,
    minOrderQty: 50,
    leadTimeDays: 10,
    isCustomizable: true,
    style: 't-shirt'
  },

  // เสื้อแจ๊คเก็ต (Jackets)
  {
    id: '7',
    name: 'แจ๊คเก็ตแบบซิป',
    nameEn: 'Zip-Up Jacket',
    basePrice: 350,
    image: '/images/product-7.jpg',
    category: 'jacket',
    description: 'แจ๊คเก็ตแบบซิป ผ้าไมโครไฟเบอร์ กันลมกันฝน เหมาะกับงาน Outdoor ทีมขาย',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    colors: ['ดำ', 'กรมท่า', 'แดง', 'เขียว'],
    material: 'Microfiber',
    weight: 300,
    minOrderQty: 30,
    leadTimeDays: 21,
    isCustomizable: true,
    style: 'jacket'
  },
  {
    id: '8',
    name: 'แจ๊คเก็ตมีฮู้ด',
    nameEn: 'Hooded Jacket',
    basePrice: 380,
    image: '/images/product-8.jpg',
    category: 'jacket',
    description: 'แจ๊คเก็ตมีฮู้ด ซิปหน้า กระเป๋าข้าง สไตล์สปอร์ต ใส่สบาย',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['ดำ', 'เทา', 'กรมท่า'],
    material: 'Cotton Blend',
    weight: 320,
    minOrderQty: 30,
    leadTimeDays: 21,
    isCustomizable: true,
    style: 'jacket'
  },

  // ชุดกีฬา (Sportswear)
  {
    id: '9',
    name: 'เสื้อกีฬาระบายอากาศ',
    nameEn: 'Breathable Sports Jersey',
    basePrice: 150,
    image: '/images/product-9.jpg',
    category: 'sportswear',
    description: 'เสื้อกีฬาผ้าไมโครระบายอากาศ ดูดซับเหรินไหว แห้งเร็ว เหมาะกับงานกีฬา การแข่งขัน',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    colors: ['ขาว', 'ดำ', 'แดง', 'น้ำเงิน', 'เขียว', 'ส้ม'],
    material: 'Polyester Microfiber',
    weight: 140,
    minOrderQty: 30,
    leadTimeDays: 14,
    isCustomizable: true,
    style: 'sportswear'
  },
  {
    id: '10',
    name: 'เสื้อกีฬาพิมพ์ซับลิเมชั่น',
    nameEn: 'Sublimation Sports Jersey',
    basePrice: 200,
    image: '/images/product-10.jpg',
    category: 'sportswear',
    description: 'เสื้อกีฬาพิมพ์ซับลิเมชั่นลายเต็มตัว สีสดใส คมชัด ไม่ลอก ไม่จาง',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['ตามออกแบบ'],
    material: 'Polyester 100%',
    weight: 150,
    minOrderQty: 30,
    leadTimeDays: 21,
    isCustomizable: true,
    style: 'sportswear'
  },

  // กระเป๋าผ้า (Tote Bags)
  {
    id: '11',
    name: 'กระเป๋าผ้าแคนวาส',
    nameEn: 'Canvas Tote Bag',
    basePrice: 80,
    image: '/images/product-11.jpg',
    category: 'bag',
    description: 'กระเป๋าผ้าแคนวาสหนา ทนทาน เหมาะสำหรับของขวัญ ของพรีเมี่ยม สกรีนลายได้สวย',
    sizes: ['10x12 นิ้ว', '12x14 นิ้ว', '14x16 นิ้ว'],
    colors: ['ขาว', 'ครีม', 'ดำ', 'กรมท่า', 'แดง'],
    material: 'Canvas Cotton',
    minOrderQty: 100,
    leadTimeDays: 14,
    isCustomizable: true,
    style: 'accessories'
  },
  {
    id: '12',
    name: 'กระเป๋าผ้าสปันบอนด์',
    nameEn: 'Spunbond Non-Woven Bag',
    basePrice: 25,
    image: '/images/product-12.jpg',
    category: 'bag',
    description: 'กระเป๋าผ้าสปันบอนด์ ราคาประหยัด เหมาะสำหรับงาน Event สัมมนา แจกของ',
    sizes: ['10x12 นิ้ว', '12x14 นิ้ว', '14x16 นิ้ว', '16x18 นิ้ว'],
    colors: ['ขาว', 'ดำ', 'แดง', 'เขียว', 'น้ำเงิน', 'ส้ม', 'ชมพู'],
    material: 'Spunbond Non-Woven',
    minOrderQty: 500,
    leadTimeDays: 10,
    isCustomizable: true,
    style: 'accessories'
  },

  // ผ้ากันเปื้อน (Aprons)
  {
    id: '13',
    name: 'ผ้ากันเปื้อนทำครัว',
    nameEn: 'Kitchen Apron',
    basePrice: 120,
    image: '/images/product-13.jpg',
    category: 'apron',
    description: 'ผ้ากันเปื้อนสำหรับครัว ร้านอาหาร คาเฟ่ ทนทาน ซักง่าย ปักโลโก้ได้',
    sizes: ['Free Size', 'Large'],
    colors: ['ดำ', 'น้ำตาล', 'กรมท่า', 'แดง'],
    material: 'Canvas / Denim',
    minOrderQty: 50,
    leadTimeDays: 14,
    isCustomizable: true,
    style: 'accessories'
  },

  // หมวก (Caps)
  {
    id: '14',
    name: 'หมวกแก๊ป',
    nameEn: 'Baseball Cap',
    basePrice: 80,
    image: '/images/product-14.jpg',
    category: 'cap',
    description: 'หมวกแก๊ปทรงสวย ปักโลโก้ได้ เหมาะกับงานโปรโมท Event ของแจก',
    sizes: ['Free Size', 'ปรับได้'],
    colors: ['ดำ', 'ขาว', 'กรมท่า', 'แดง', 'เขียว', 'ส้ม'],
    material: 'Cotton Twill',
    minOrderQty: 100,
    leadTimeDays: 14,
    isCustomizable: true,
    style: 'accessories'
  },

  // ร่ม (Umbrellas)
  {
    id: '15',
    name: 'ร่มพับ 2 ตอน',
    nameEn: '2-Fold Umbrella',
    basePrice: 150,
    image: '/images/product-15.jpg',
    category: 'umbrella',
    description: 'ร่มพับ 2 ตอน พกพาสะดวก พิมพ์โลโก้ได้ เหมาะสำหรับของพรีเมี่ยม',
    sizes: ['21 นิ้ว', '23 นิ้ว'],
    colors: ['ดำ', 'กรมท่า', 'แดง', 'เขียว'],
    material: 'Polyester',
    minOrderQty: 100,
    leadTimeDays: 21,
    isCustomizable: true,
    style: 'accessories'
  },
  {
    id: '16',
    name: 'ร่มกอลฟ์ขนาดใหญ่',
    nameEn: 'Golf Umbrella',
    basePrice: 250,
    image: '/images/product-16.jpg',
    category: 'umbrella',
    description: 'ร่มกอลฟ์ขนาดใหญ่ 30 นิ้ว กันแดดกันฝนได้ดี พิมพ์โลโก้ได้เต็มพื้นที่',
    sizes: ['27 นิ้ว', '30 นิ้ว'],
    colors: ['ดำ', 'กรมท่า', 'แดง', 'เขียว', 'ฟ้า'],
    material: 'Polyester',
    minOrderQty: 50,
    leadTimeDays: 21,
    isCustomizable: true,
    style: 'accessories'
  }
];

// Helper functions
export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
