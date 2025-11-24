import { SupabaseClient } from '@supabase/supabase-js'
import { Database } from '@/lib/database.types'
import { ApiResponse, createSuccessResponse, createErrorResponse } from '../errors'

export abstract class BaseRepository<
  TTable extends keyof Database['public']['Tables'],
  TRow = Database['public']['Tables'][TTable]['Row'],
  TInsert = Database['public']['Tables'][TTable]['Insert'],
  TUpdate = Database['public']['Tables'][TTable]['Update']
> {
  constructor(
    protected client: SupabaseClient<Database>,
    protected tableName: TTable
  ) {}

  /**
   * Get all records
   */
  async findAll(options?: {
    orderBy?: { column: keyof TRow; ascending?: boolean }
    limit?: number
  }): Promise<ApiResponse<TRow[]>> {
    try {
      let query = this.client.from(this.tableName).select('*')

      if (options?.orderBy) {
        query = query.order(
          options.orderBy.column as string,
          { ascending: options.orderBy.ascending ?? true }
        )
      }

      if (options?.limit) {
        query = query.limit(options.limit)
      }

      const { data, error, count } = await query

      if (error) {
        console.error(`Error fetching all from ${String(this.tableName)}:`, error)
        return createErrorResponse(error)
      }

      return createSuccessResponse(data as TRow[], count ?? undefined)
    } catch (error) {
      console.error(`Unexpected error in findAll ${String(this.tableName)}:`, error)
      return createErrorResponse(error as Error)
    }
  }

  /**
   * Get record by ID
   */
  async findById(id: string): Promise<ApiResponse<TRow>> {
    try {
      const { data, error } = await this.client
        .from(this.tableName)
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        console.error(`Error fetching ${String(this.tableName)} by ID:`, error)
        return createErrorResponse(error)
      }

      return createSuccessResponse(data as TRow)
    } catch (error) {
      console.error(`Unexpected error in findById ${String(this.tableName)}:`, error)
      return createErrorResponse(error as Error)
    }
  }

  /**
   * Create new record
   */
  async create(data: TInsert): Promise<ApiResponse<TRow>> {
    try {
      const { data: created, error } = await this.client
        .from(this.tableName)
        .insert(data)
        .select()
        .single()

      if (error) {
        console.error(`Error creating ${String(this.tableName)}:`, error)
        return createErrorResponse(error)
      }

      return createSuccessResponse(created as TRow)
    } catch (error) {
      console.error(`Unexpected error in create ${String(this.tableName)}:`, error)
      return createErrorResponse(error as Error)
    }
  }

  /**
   * Update record by ID
   */
  async update(id: string, data: TUpdate): Promise<ApiResponse<TRow>> {
    try {
      const { data: updated, error } = await this.client
        .from(this.tableName)
        .update(data)
        .eq('id', id)
        .select()
        .single()

      if (error) {
        console.error(`Error updating ${String(this.tableName)}:`, error)
        return createErrorResponse(error)
      }

      return createSuccessResponse(updated as TRow)
    } catch (error) {
      console.error(`Unexpected error in update ${String(this.tableName)}:`, error)
      return createErrorResponse(error as Error)
    }
  }

  /**
   * Delete record by ID
   */
  async delete(id: string): Promise<ApiResponse<void>> {
    try {
      const { error } = await this.client
        .from(this.tableName)
        .delete()
        .eq('id', id)

      if (error) {
        console.error(`Error deleting ${String(this.tableName)}:`, error)
        return createErrorResponse(error)
      }

      return createSuccessResponse(undefined as void)
    } catch (error) {
      console.error(`Unexpected error in delete ${String(this.tableName)}:`, error)
      return createErrorResponse(error as Error)
    }
  }

  /**
   * Find records by field value
   */
  async findBy<K extends keyof TRow>(
    field: K,
    value: TRow[K]
  ): Promise<ApiResponse<TRow[]>> {
    try {
      const { data, error } = await this.client
        .from(this.tableName)
        .select('*')
        .eq(field as string, value)

      if (error) {
        console.error(`Error finding ${String(this.tableName)} by ${String(field)}:`, error)
        return createErrorResponse(error)
      }

      return createSuccessResponse(data as TRow[])
    } catch (error) {
      console.error(`Unexpected error in findBy ${String(this.tableName)}:`, error)
      return createErrorResponse(error as Error)
    }
  }
}
