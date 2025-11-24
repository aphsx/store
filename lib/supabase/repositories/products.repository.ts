import { BaseRepository } from './base.repository'
import { getSupabaseClient, TABLE_NAMES } from '../client'
import { ApiResponse, createSuccessResponse, createErrorResponse } from '../errors'
import { Database } from '@/lib/database.types'

type ProductRow = Database['public']['Tables']['products']['Row']
type ProductInsert = Database['public']['Tables']['products']['Insert']
type ProductUpdate = Database['public']['Tables']['products']['Update']

export class ProductsRepository extends BaseRepository<'products'> {
  constructor() {
    super(getSupabaseClient(), TABLE_NAMES.PRODUCTS as 'products')
  }

  /**
   * Get products by category
   */
  async findByCategory(category: string): Promise<ApiResponse<ProductRow[]>> {
    return this.findBy('category', category as any)
  }

  /**
   * Get products by style
   */
  async findByStyle(style: string): Promise<ApiResponse<ProductRow[]>> {
    return this.findBy('style', style as any)
  }

  /**
   * Search products by query
   */
  async search(query: string): Promise<ApiResponse<ProductRow[]>> {
    try {
      const { data, error } = await this.client
        .from(this.tableName)
        .select('*')
        .or(`name.ilike.%${query}%,name_en.ilike.%${query}%,description.ilike.%${query}%`)
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error searching products:', error)
        return createErrorResponse(error)
      }

      return createSuccessResponse(data)
    } catch (error) {
      console.error('Unexpected error in search:', error)
      return createErrorResponse(error as Error)
    }
  }

  /**
   * Get products with filters
   */
  async findWithFilters(filters: {
    category?: string
    style?: string
    minPrice?: number
    maxPrice?: number
    isCustomizable?: boolean
  }): Promise<ApiResponse<ProductRow[]>> {
    try {
      let query = this.client.from(this.tableName).select('*')

      if (filters.category) {
        query = query.eq('category', filters.category)
      }

      if (filters.style) {
        query = query.eq('style', filters.style)
      }

      if (filters.minPrice !== undefined) {
        query = query.gte('base_price', filters.minPrice)
      }

      if (filters.maxPrice !== undefined) {
        query = query.lte('base_price', filters.maxPrice)
      }

      if (filters.isCustomizable !== undefined) {
        query = query.eq('is_customizable', filters.isCustomizable)
      }

      const { data, error } = await query.order('created_at', { ascending: false })

      if (error) {
        console.error('Error finding products with filters:', error)
        return createErrorResponse(error)
      }

      return createSuccessResponse(data)
    } catch (error) {
      console.error('Unexpected error in findWithFilters:', error)
      return createErrorResponse(error as Error)
    }
  }

  /**
   * Get latest products
   */
  async findLatest(limit: number = 4): Promise<ApiResponse<ProductRow[]>> {
    return this.findAll({
      orderBy: { column: 'created_at', ascending: false },
      limit,
    })
  }

  /**
   * Get featured products
   */
  async findFeatured(limit: number = 4): Promise<ApiResponse<ProductRow[]>> {
    return this.findAll({
      orderBy: { column: 'created_at', ascending: true },
      limit,
    })
  }
}

// Export singleton instance
export const productsRepository = new ProductsRepository()
