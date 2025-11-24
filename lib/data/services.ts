import { Service } from '@/lib/types';

export const services: Service[] = [
  {
    id: 'screen-printing',
    name: 'สกรีนดิจิตอล',
    nameEn: 'Digital Screen Printing',
    slug: 'screen-printing',
    description: 'ระบบสกรีนดิจิตอลทันสมัย คมชัด สีสดใส ทนทาน รองรับงานพิมพ์หลากหลายสี',
    icon: 'Printer',
    features: [
      'พิมพ์ได้หลากหลายสี',
      'คมชัด ละเอียด',
      'สีสดใส ไม่ลอก',
      'เหมาะกับงานจำนวนมาก',
      'ราคาประหยัด'
    ],
    minQuantity: 50
  },
  {
    id: 'embroidery',
    name: 'ปักด้วยระบบดิจิตอล',
    nameEn: 'Digital Embroidery',
    slug: 'embroidery',
    description: 'บริการปักด้วยระบบดิจิตอล สวยงาม ดูหรูหรา เพิ่มมูลค่าให้สินค้า',
    icon: 'Sparkles',
    features: [
      'ปักละเอียด สวยงาม',
      'ดูหรูหรา มีระดับ',
      'ทนทานกว่าการพิมพ์',
      'เหมาะกับชุดยูนิฟอร์ม',
      'สามารถปักโลโก้ได้'
    ],
    minQuantity: 20
  },
  {
    id: 'sublimation',
    name: 'พิมพ์ซับลิเมชั่น',
    nameEn: 'Sublimation Printing',
    slug: 'sublimation',
    description: 'เทคนิคพิมพ์ซับลิเมชั่น เหมาะกับผ้าโพลีเอสเตอร์ สีสดใส ไม่ลอก',
    icon: 'Palette',
    features: [
      'สีสดใส คมชัดมาก',
      'พิมพ์ได้เต็มพื้นที่',
      'ไม่มีขอบ ไม่หลุดลอก',
      'เหมาะกับชุดกีฬา',
      'ลายไม่จางแม้ซักหลายครั้ง'
    ],
    minQuantity: 30
  },
  {
    id: 'laser-cutting',
    name: 'ตัดผ้าด้วยเลเซอร์',
    nameEn: 'Laser Fabric Cutting',
    slug: 'laser-cutting',
    description: 'เทคโนโลยีตัดผ้าด้วยเลเซอร์ แม่นยำ รวดเร็ว ขอบเรียบสวย',
    icon: 'Scissors',
    features: [
      'ตัดแม่นยำสูง',
      'ขอบเรียบ ไม่ลุ่ย',
      'รวดเร็ว ประหยัดเวลา',
      'รองรับลายซับซ้อน',
      'ลดของเสีย'
    ],
    minQuantity: 10
  }
];
