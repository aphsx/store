-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  name_en TEXT,
  base_price INTEGER, -- null means contact for price
  image TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('polo', 't-shirt', 'jacket', 'sportswear', 'bag', 'apron', 'cap', 'umbrella')),
  description TEXT NOT NULL,
  sizes TEXT[] NOT NULL DEFAULT '{}',
  colors TEXT[] NOT NULL DEFAULT '{}',
  material TEXT,
  weight INTEGER, -- GSM
  min_order_qty INTEGER NOT NULL,
  lead_time_days INTEGER NOT NULL,
  is_customizable BOOLEAN NOT NULL DEFAULT true,
  style TEXT CHECK (style IN ('polo', 't-shirt', 'jacket', 'sportswear', 'accessories')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_style ON products(style);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON products
  FOR SELECT
  TO public
  USING (true);

-- Create policy to allow authenticated users to insert/update/delete
CREATE POLICY "Allow authenticated insert" ON products
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated update" ON products
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated delete" ON products
  FOR DELETE
  TO authenticated
  USING (true);
