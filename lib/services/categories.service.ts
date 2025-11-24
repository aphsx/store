import { categoriesRepository } from '@/lib/supabase'
import type { Database } from '@/lib/database.types'

type CategoryRow = Database['public']['Tables']['product_categories']['Row']

export interface Category {
  id: string
  name: string
  nameEn?: string
  icon: string
  productCount: number
  isActive: boolean
  displayOrder: number
}

/**
 * Convert database category to frontend Category type
 */
export function convertDbCategoryToCategory(dbCategory: CategoryRow): Category {
  return {
    id: dbCategory.id,
    name: dbCategory.name,
    nameEn: dbCategory.name_en || undefined,
    icon: dbCategory.icon,
    productCount: dbCategory.product_count,
    isActive: dbCategory.is_active,
    displayOrder: dbCategory.display_order,
  }
}

/**
 * Categories Service - Business logic layer
 */
export class CategoriesService {
  /**
   * Get all categories
   */
  static async getAllCategories() {
    const response = await categoriesRepository.findAll({
      orderBy: { column: 'display_order', ascending: true },
    })

    if (response.data) {
      return {
        ...response,
        data: response.data.map(convertDbCategoryToCategory),
      }
    }

    return response
  }

  /**
   * Get all active categories
   */
  static async getActiveCategories() {
    const response = await categoriesRepository.findAllActive()

    if (response.data) {
      return {
        ...response,
        data: response.data.map(convertDbCategoryToCategory),
      }
    }

    return response
  }

  /**
   * Get category by ID
   */
  static async getCategoryById(id: string) {
    const response = await categoriesRepository.findById(id)

    if (response.data) {
      return {
        ...response,
        data: convertDbCategoryToCategory(response.data),
      }
    }

    return response
  }

  /**
   * Get active category by ID
   */
  static async getActiveCategoryById(id: string) {
    const response = await categoriesRepository.findActiveById(id)

    if (response.data) {
      return {
        ...response,
        data: convertDbCategoryToCategory(response.data),
      }
    }

    return response
  }

  /**
   * Toggle category active status
   */
  static async toggleCategoryActive(id: string, isActive: boolean) {
    const response = await categoriesRepository.toggleActive(id, isActive)

    if (response.data) {
      return {
        ...response,
        data: convertDbCategoryToCategory(response.data),
      }
    }

    return response
  }

  /**
   * Update category display order
   */
  static async updateCategoryOrder(id: string, order: number) {
    const response = await categoriesRepository.updateDisplayOrder(id, order)

    if (response.data) {
      return {
        ...response,
        data: convertDbCategoryToCategory(response.data),
      }
    }

    return response
  }
}

// Export convenience functions for backward compatibility
export const getAllCategories = CategoriesService.getAllCategories
export const getActiveCategories = CategoriesService.getActiveCategories
export const getCategoryById = CategoriesService.getCategoryById

// Export raw database access for components that need full database fields
export async function getAllCategoriesRaw() {
  return await categoriesRepository.findAll({
    orderBy: { column: 'display_order', ascending: true },
  })
}
