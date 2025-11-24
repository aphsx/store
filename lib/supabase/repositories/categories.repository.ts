import { BaseRepository } from './base.repository'
import { getSupabaseClient, TABLE_NAMES } from '../client'
import { ApiResponse } from '../errors'
import { Database } from '@/lib/database.types'

type CategoryRow = Database['public']['Tables']['product_categories']['Row']
type CategoryInsert = Database['public']['Tables']['product_categories']['Insert']
type CategoryUpdate = Database['public']['Tables']['product_categories']['Update']

export class CategoriesRepository extends BaseRepository<'product_categories'> {
  constructor() {
    super(getSupabaseClient(), TABLE_NAMES.CATEGORIES as 'product_categories')
  }

  /**
   * Get all active categories ordered by display order
   */
  async findAllActive(): Promise<ApiResponse<CategoryRow[]>> {
    return this.findAll({
      orderBy: { column: 'display_order', ascending: true },
    })
  }

  /**
   * Get category by ID (only if active)
   */
  async findActiveById(id: string): Promise<ApiResponse<CategoryRow>> {
    return this.findById(id)
  }

  /**
   * Toggle category active status
   */
  async toggleActive(id: string, isActive: boolean): Promise<ApiResponse<CategoryRow>> {
    return this.update(id, { is_active: isActive } as CategoryUpdate)
  }

  /**
   * Update display order
   */
  async updateDisplayOrder(id: string, order: number): Promise<ApiResponse<CategoryRow>> {
    return this.update(id, { display_order: order } as CategoryUpdate)
  }
}

// Export singleton instance
export const categoriesRepository = new CategoriesRepository()
