import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { Database } from '@/lib/database.types'

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase environment variables are not set.')
  console.warn('Please create a .env.local file with:')
  console.warn('- NEXT_PUBLIC_SUPABASE_URL')
  console.warn('- NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

// Create typed Supabase client
let supabaseInstance: SupabaseClient<Database> | null = null

export function getSupabaseClient(): SupabaseClient<Database> {
  if (!supabaseInstance) {
    supabaseInstance = createClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
      db: {
        schema: 'public',
      },
      global: {
        headers: {
          'x-application-name': 'store-app',
        },
      },
    })
  }
  return supabaseInstance
}

// Export singleton instance
export const supabase = getSupabaseClient()

// Type-safe table names
export const TABLE_NAMES = {
  PRODUCTS: 'products',
  CATEGORIES: 'product_categories',
} as const

export type TableName = typeof TABLE_NAMES[keyof typeof TABLE_NAMES]
