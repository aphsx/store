export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string
          name: string
          name_en: string | null
          base_price: number | null
          image: string
          category: 'polo' | 't-shirt' | 'jacket' | 'sportswear' | 'bag' | 'apron' | 'cap' | 'umbrella'
          description: string
          sizes: string[]
          colors: string[]
          material: string | null
          weight: number | null
          min_order_qty: number
          lead_time_days: number
          is_customizable: boolean
          style: 'polo' | 't-shirt' | 'jacket' | 'sportswear' | 'accessories' | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          name_en?: string | null
          base_price?: number | null
          image: string
          category: 'polo' | 't-shirt' | 'jacket' | 'sportswear' | 'bag' | 'apron' | 'cap' | 'umbrella'
          description: string
          sizes?: string[]
          colors?: string[]
          material?: string | null
          weight?: number | null
          min_order_qty: number
          lead_time_days: number
          is_customizable?: boolean
          style?: 'polo' | 't-shirt' | 'jacket' | 'sportswear' | 'accessories' | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          name_en?: string | null
          base_price?: number | null
          image?: string
          category?: 'polo' | 't-shirt' | 'jacket' | 'sportswear' | 'bag' | 'apron' | 'cap' | 'umbrella'
          description?: string
          sizes?: string[]
          colors?: string[]
          material?: string | null
          weight?: number | null
          min_order_qty?: number
          lead_time_days?: number
          is_customizable?: boolean
          style?: 'polo' | 't-shirt' | 'jacket' | 'sportswear' | 'accessories' | null
          created_at?: string
          updated_at?: string
        }
      }
      product_categories: {
        Row: {
          id: string
          name: string
          name_en: string
          description: string
          icon: string | null
          min_order: string | null
          color: string
          display_order: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          name: string
          name_en: string
          description: string
          icon?: string | null
          min_order?: string | null
          color: string
          display_order?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          name_en?: string
          description?: string
          icon?: string | null
          min_order?: string | null
          color?: string
          display_order?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
