import { supabase } from '@/lib/supabase'
import { Database } from '@/lib/database.types'

type Category = Database['public']['Tables']['product_categories']['Row']

export async function getAllCategories() {
  const { data, error } = await supabase
    .from('product_categories')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true })

  if (error) {
    console.error('Error fetching categories:', error)
    return { data: null, error }
  }

  return { data, error: null }
}

export async function getCategoryById(id: string) {
  const { data, error } = await supabase
    .from('product_categories')
    .select('*')
    .eq('id', id)
    .eq('is_active', true)
    .single()

  if (error) {
    console.error('Error fetching category:', error)
    return { data: null, error }
  }

  return { data, error: null }
}

export async function createCategory(category: Database['public']['Tables']['product_categories']['Insert']) {
  const { data, error } = await supabase
    .from('product_categories')
    .insert(category)
    .select()
    .single()

  if (error) {
    console.error('Error creating category:', error)
    return { data: null, error }
  }

  return { data, error: null }
}

export async function updateCategory(id: string, updates: Database['public']['Tables']['product_categories']['Update']) {
  const { data, error } = await supabase
    .from('product_categories')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating category:', error)
    return { data: null, error }
  }

  return { data, error: null }
}

export async function deleteCategory(id: string) {
  const { error } = await supabase
    .from('product_categories')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting category:', error)
    return { error }
  }

  return { error: null }
}
