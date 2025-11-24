import { supabase } from '@/lib/supabase'
import { Database } from '@/lib/database.types'

type Product = Database['public']['Tables']['products']['Row']

export async function getAllProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching products:', error)
    return { data: null, error }
  }

  return { data, error: null }
}

export async function getProductById(id: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching product:', error)
    return { data: null, error }
  }

  return { data, error: null }
}

export async function getProductsByCategory(category: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', category)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching products by category:', error)
    return { data: null, error }
  }

  return { data, error: null }
}

export async function getProductsByStyle(style: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('style', style)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching products by style:', error)
    return { data: null, error }
  }

  return { data, error: null }
}

export async function searchProducts(query: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .or(`name.ilike.%${query}%,name_en.ilike.%${query}%,description.ilike.%${query}%`)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error searching products:', error)
    return { data: null, error }
  }

  return { data, error: null }
}

export async function createProduct(product: Database['public']['Tables']['products']['Insert']) {
  const { data, error } = await supabase
    .from('products')
    .insert(product)
    .select()
    .single()

  if (error) {
    console.error('Error creating product:', error)
    return { data: null, error }
  }

  return { data, error: null }
}

export async function updateProduct(id: string, updates: Database['public']['Tables']['products']['Update']) {
  const { data, error } = await supabase
    .from('products')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating product:', error)
    return { data: null, error }
  }

  return { data, error: null }
}

export async function deleteProduct(id: string) {
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting product:', error)
    return { error }
  }

  return { error: null }
}

// Convert database product to frontend Product type
export function convertDbProductToProduct(dbProduct: Product) {
  return {
    id: dbProduct.id,
    name: dbProduct.name,
    nameEn: dbProduct.name_en || undefined,
    basePrice: dbProduct.base_price,
    image: dbProduct.image,
    category: dbProduct.category,
    description: dbProduct.description,
    sizes: dbProduct.sizes,
    colors: dbProduct.colors,
    material: dbProduct.material || undefined,
    weight: dbProduct.weight || undefined,
    minOrderQty: dbProduct.min_order_qty,
    leadTimeDays: dbProduct.lead_time_days,
    isCustomizable: dbProduct.is_customizable,
    style: dbProduct.style || undefined,
  }
}
