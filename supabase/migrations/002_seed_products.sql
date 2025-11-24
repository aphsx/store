-- Seed products data
INSERT INTO products (name, name_en, base_price, image, category, description, sizes, colors, material, weight, min_order_qty, lead_time_days, is_customizable, style) VALUES

-- เสื้อโปโล (Polo Shirts)
('เสื้อโปโลคอปก Cotton 100%', 'Classic Polo Shirt 100% Cotton', 180, '/images/product-1.jpg', 'polo', 'เสื้อโปโลคอปกคุณภาพดี ผ้า Cotton 100% นุ่ม ระบายอากาศได้ดี เหมาะสำหรับทำยูนิฟอร์มบริษัท ชุดพนักงาน',
  ARRAY['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
  ARRAY['ขาว', 'ดำ', 'เทา', 'กรมท่า', 'แดง', 'เหลือง', 'เขียว', 'ส้ม'],
  'Cotton 100%', 200, 50, 14, true, 'polo'),

('เสื้อโปโล CVC ผ้าคอมพ์', 'CVC Polo Shirt', 150, '/images/product-2.jpg', 'polo', 'เสื้อโปโล CVC (Chief Value Cotton) ผสม Polyester นุ่ม ใส่สบาย ไม่ยับง่าย เหมาะกับงานโรงแรม ร้านอาหาร',
  ARRAY['S', 'M', 'L', 'XL', 'XXL', '3XL'],
  ARRAY['ขาว', 'ดำ', 'เทา', 'กรมท่า', 'ฟ้า', 'แดง'],
  'CVC (60% Cotton, 40% Polyester)', 180, 50, 14, true, 'polo'),

('เสื้อโปโลตัดต่อสี', 'Color Block Polo Shirt', 200, '/images/product-3.jpg', 'polo', 'เสื้อโปโลดีไซน์ตัดต่อสี โดดเด่น สะดุดตา เหมาะสำหรับทีมขายงาน Event งานโปรโมท',
  ARRAY['S', 'M', 'L', 'XL', 'XXL', '3XL'],
  ARRAY['ขาว/กรมท่า', 'ดำ/แดง', 'เทา/เขียว', 'ขาว/ฟ้า'],
  'CVC', 190, 100, 21, true, 'polo'),

-- เสื้อยืด (T-Shirts)
('เสื้อยืดคอกลม Cotton 100%', 'Classic Round Neck T-Shirt', 100, '/images/product-4.jpg', 't-shirt', 'เสื้อยืดคอกลม Cotton 100% เนื้อนุ่ม ใส่สบาย เหมาะสำหรับทำเสื้อกิจกรรม เสื้อทีม สกรีนลายได้สวย',
  ARRAY['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL'],
  ARRAY['ขาว', 'ดำ', 'เทา', 'กรมท่า', 'แดง', 'เขียว', 'ส้ม', 'ชมพู', 'ฟ้า'],
  'Cotton 100%', 180, 50, 10, true, 't-shirt'),

('เสื้อยืด CVC คุณภาพพรีเมี่ยม', 'Premium CVC T-Shirt', 120, '/images/product-5.jpg', 't-shirt', 'เสื้อยืด CVC คุณภาพพรีเมี่ยม นุ่มพิเศษ ไม่ยับง่าย ซักง่าย แห้งเร็ว',
  ARRAY['S', 'M', 'L', 'XL', 'XXL', '3XL'],
  ARRAY['ขาว', 'ดำ', 'เทา', 'กรมท่า', 'น้ำเงิน'],
  'CVC (65% Cotton, 35% Polyester)', 200, 50, 10, true, 't-shirt'),

('เสื้อยืดคอวี', 'V-Neck T-Shirt', 110, '/images/product-6.jpg', 't-shirt', 'เสื้อยืดคอวี ทรงสวย ใส่แล้วดูดี เหมาะกับทุกเพศทุกวัย',
  ARRAY['S', 'M', 'L', 'XL', 'XXL'],
  ARRAY['ขาว', 'ดำ', 'เทา', 'กรมท่า'],
  'CVC', 180, 50, 10, true, 't-shirt'),

-- เสื้อแจ๊คเก็ต (Jackets)
('แจ๊คเก็ตแบบซิป', 'Zip-Up Jacket', 350, '/images/product-7.jpg', 'jacket', 'แจ๊คเก็ตแบบซิป ผ้าไมโครไฟเบอร์ กันลมกันฝน เหมาะกับงาน Outdoor ทีมขาย',
  ARRAY['S', 'M', 'L', 'XL', 'XXL', '3XL'],
  ARRAY['ดำ', 'กรมท่า', 'แดง', 'เขียว'],
  'Microfiber', 300, 30, 21, true, 'jacket'),

('แจ๊คเก็ตมีฮู้ด', 'Hooded Jacket', 380, '/images/product-8.jpg', 'jacket', 'แจ๊คเก็ตมีฮู้ด ซิปหน้า กระเป๋าข้าง สไตล์สปอร์ต ใส่สบาย',
  ARRAY['S', 'M', 'L', 'XL', 'XXL'],
  ARRAY['ดำ', 'เทา', 'กรมท่า'],
  'Cotton Blend', 320, 30, 21, true, 'jacket'),

-- ชุดกีฬา (Sportswear)
('เสื้อกีฬาระบายอากาศ', 'Breathable Sports Jersey', 150, '/images/product-9.jpg', 'sportswear', 'เสื้อกีฬาผ้าไมโครระบายอากาศ ดูดซับเหรินไหว แห้งเร็ว เหมาะกับงานกีฬา การแข่งขัน',
  ARRAY['S', 'M', 'L', 'XL', 'XXL', '3XL'],
  ARRAY['ขาว', 'ดำ', 'แดง', 'น้ำเงิน', 'เขียว', 'ส้ม'],
  'Polyester Microfiber', 140, 30, 14, true, 'sportswear'),

('เสื้อกีฬาพิมพ์ซับลิเมชั่น', 'Sublimation Sports Jersey', 200, '/images/product-10.jpg', 'sportswear', 'เสื้อกีฬาพิมพ์ซับลิเมชั่นลายเต็มตัว สีสดใส คมชัด ไม่ลอก ไม่จาง',
  ARRAY['S', 'M', 'L', 'XL', 'XXL'],
  ARRAY['ตามออกแบบ'],
  'Polyester 100%', 150, 30, 21, true, 'sportswear'),

-- กระเป๋าผ้า (Tote Bags)
('กระเป๋าผ้าแคนวาส', 'Canvas Tote Bag', 80, '/images/product-11.jpg', 'bag', 'กระเป๋าผ้าแคนวาสหนา ทนทาน เหมาะสำหรับของขวัญ ของพรีเมี่ยม สกรีนลายได้สวย',
  ARRAY['10x12 นิ้ว', '12x14 นิ้ว', '14x16 นิ้ว'],
  ARRAY['ขาว', 'ครีม', 'ดำ', 'กรมท่า', 'แดง'],
  'Canvas Cotton', NULL, 100, 14, true, 'accessories'),

('กระเป๋าผ้าสปันบอนด์', 'Spunbond Non-Woven Bag', 25, '/images/product-12.jpg', 'bag', 'กระเป๋าผ้าสปันบอนด์ ราคาประหยัด เหมาะสำหรับงาน Event สัมมนา แจกของ',
  ARRAY['10x12 นิ้ว', '12x14 นิ้ว', '14x16 นิ้ว', '16x18 นิ้ว'],
  ARRAY['ขาว', 'ดำ', 'แดง', 'เขียว', 'น้ำเงิน', 'ส้ม', 'ชมพู'],
  'Spunbond Non-Woven', NULL, 500, 10, true, 'accessories'),

-- ผ้ากันเปื้อน (Aprons)
('ผ้ากันเปื้อนทำครัว', 'Kitchen Apron', 120, '/images/product-13.jpg', 'apron', 'ผ้ากันเปื้อนสำหรับครัว ร้านอาหาร คาเฟ่ ทนทาน ซักง่าย ปักโลโก้ได้',
  ARRAY['Free Size', 'Large'],
  ARRAY['ดำ', 'น้ำตาล', 'กรมท่า', 'แดง'],
  'Canvas / Denim', NULL, 50, 14, true, 'accessories'),

-- หมวก (Caps)
('หมวกแก๊ป', 'Baseball Cap', 80, '/images/product-14.jpg', 'cap', 'หมวกแก๊ปทรงสวย ปักโลโก้ได้ เหมาะกับงานโปรโมท Event ของแจก',
  ARRAY['Free Size', 'ปรับได้'],
  ARRAY['ดำ', 'ขาว', 'กรมท่า', 'แดง', 'เขียว', 'ส้ม'],
  'Cotton Twill', NULL, 100, 14, true, 'accessories'),

-- ร่ม (Umbrellas)
('ร่มพับ 2 ตอน', '2-Fold Umbrella', 150, '/images/product-15.jpg', 'umbrella', 'ร่มพับ 2 ตอน พกพาสะดวก พิมพ์โลโก้ได้ เหมาะสำหรับของพรีเมี่ยม',
  ARRAY['21 นิ้ว', '23 นิ้ว'],
  ARRAY['ดำ', 'กรมท่า', 'แดง', 'เขียว'],
  'Polyester', NULL, 100, 21, true, 'accessories'),

('ร่มกอลฟ์ขนาดใหญ่', 'Golf Umbrella', 250, '/images/product-16.jpg', 'umbrella', 'ร่มกอลฟ์ขนาดใหญ่ 30 นิ้ว กันแดดกันฝนได้ดี พิมพ์โลโก้ได้เต็มพื้นที่',
  ARRAY['27 นิ้ว', '30 นิ้ว'],
  ARRAY['ดำ', 'กรมท่า', 'แดง', 'เขียว', 'ฟ้า'],
  'Polyester', NULL, 50, 21, true, 'accessories');
