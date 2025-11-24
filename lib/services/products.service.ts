import { productsRepository } from '@/lib/supabase'
import type { Product } from '@/lib/types'
import type { Database } from '@/lib/database.types'

type ProductRow = Database['public']['Tables']['products']['Row']

/**
 * Convert database product to frontend Product type
 */
export function convertDbProductToProduct(dbProduct: ProductRow): Product {
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

/**
 * Products Service - Business logic layer
 */
export class ProductsService {
  /**
   * Get all products
   */
  static async getAllProducts() {
    const response = await productsRepository.findAll({
      orderBy: { column: 'created_at', ascending: false },
    })

    if (response.data) {
      return {
        ...response,
        data: response.data.map(convertDbProductToProduct),
      }
    }

    return response
  }

  /**
   * Get product by ID
   */
  static async getProductById(id: string) {
    const response = await productsRepository.findById(id)

    if (response.data) {
      return {
        ...response,
        data: convertDbProductToProduct(response.data),
      }
    }

    return response
  }

  /**
   * Get products by category
   */
  static async getProductsByCategory(category: string) {
    const response = await productsRepository.findByCategory(category)

    if (response.data) {
      return {
        ...response,
        data: response.data.map(convertDbProductToProduct),
      }
    }

    return response
  }

  /**
   * Get products by style
   */
  static async getProductsByStyle(style: string) {
    const response = await productsRepository.findByStyle(style)

    if (response.data) {
      return {
        ...response,
        data: response.data.map(convertDbProductToProduct),
      }
    }

    return response
  }

  /**
   * Search products
   */
  static async searchProducts(query: string) {
    const response = await productsRepository.search(query)

    if (response.data) {
      return {
        ...response,
        data: response.data.map(convertDbProductToProduct),
      }
    }

    return response
  }

  /**
   * Get latest products (for New Arrivals)
   */
  static async getLatestProducts(limit: number = 4) {
    const response = await productsRepository.findLatest(limit)

    if (response.data) {
      return {
        ...response,
        data: response.data.map(convertDbProductToProduct),
      }
    }

    return response
  }

  /**
   * Get featured products (for Top Selling)
   */
  static async getFeaturedProducts(limit: number = 4) {
    const response = await productsRepository.findFeatured(limit)

    if (response.data) {
      return {
        ...response,
        data: response.data.map(convertDbProductToProduct),
      }
    }

    return response
  }
}

// Export convenience functions for backward compatibility
export const getAllProducts = ProductsService.getAllProducts
export const getProductById = ProductsService.getProductById
export const getProductsByCategory = ProductsService.getProductsByCategory
export const getProductsByStyle = ProductsService.getProductsByStyle
export const searchProducts = ProductsService.searchProducts
export const getLatestProducts = ProductsService.getLatestProducts
export const getFeaturedProducts = ProductsService.getFeaturedProducts
