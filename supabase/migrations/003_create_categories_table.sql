-- Create product categories table
CREATE TABLE IF NOT EXISTS product_categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  name_en TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT,
  min_order TEXT,
  color TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_categories_display_order ON product_categories(display_order);
CREATE INDEX idx_categories_is_active ON product_categories(is_active);

-- Create updated_at trigger
CREATE TRIGGER update_categories_updated_at
  BEFORE UPDATE ON product_categories
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE product_categories ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON product_categories
  FOR SELECT
  TO public
  USING (is_active = true);

-- Create policy to allow authenticated users to manage
CREATE POLICY "Allow authenticated insert" ON product_categories
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated update" ON product_categories
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated delete" ON product_categories
  FOR DELETE
  TO authenticated
  USING (true);

-- Seed categories data
INSERT INTO product_categories (id, name, name_en, description, icon, min_order, color, display_order) VALUES
('polo', 'เสื้อโปโล', 'Polo Shirts', 'เสื้อโปโลตัดต่อ กุ้น แขนจั้ม', 'Shirt', '50 ตัว', 'from-blue-500 to-blue-600', 1),
('t-shirt', 'เสื้อยืด', 'T-Shirts', 'เสื้อยืดคอกลมพร้อมสกรีน', 'Shirt', '50 ตัว', 'from-red-500 to-red-600', 2),
('sportswear', 'ชุดกีฬา', 'Sportswear', 'เสื้อกีฬาระบายอากาศ พิมพ์ซับลิเมชั่น', 'Shirt', '30 ตัว', 'from-green-500 to-green-600', 3),
('tote-bag', 'หมอน', 'Tote Bags', 'หมอนไดคัทพิมพ์ลาย', 'ShoppingBag', '100 ใบ', 'from-yellow-500 to-yellow-600', 4),
('another-product', 'another product', 'Another Product', 'รายละเอียดสินค้าเพิ่มเติม ติดต่อเราเพื่อสอบถาม', '', '', 'from-orange-500 to-orange-600', 5);
