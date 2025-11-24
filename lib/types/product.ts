export interface Product {
  id: string;
  name: string;
  nameEn?: string;
  basePrice: number | null; // null = ติดต่อสอบถาม
  image: string;
  category: string; // 'polo', 't-shirt', 'jacket', 'sportswear', 'bag', 'apron', 'cap', 'umbrella'
  description: string;
  sizes: string[];
  colors: string[];
  material?: string; // Cotton, Polyester, etc.
  weight?: number; // GSM
  minOrderQty: number; // จำนวนสั่งขั้นต่ำ
  leadTimeDays: number; // ระยะเวลาผลิต
  isCustomizable: boolean; // รับพิมพ์/ปักได้หรือไม่
  style?: 'polo' | 't-shirt' | 'jacket' | 'sportswear' | 'accessories';
}

export interface Service {
  id: string;
  name: string;
  nameEn: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  minQuantity?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface QuoteItem extends CartItem {
  customizationNotes?: string;
  selectedServices?: string[]; // service IDs
}
