import { PostgrestError } from '@supabase/supabase-js'

export class SupabaseError extends Error {
  constructor(
    message: string,
    public code?: string,
    public details?: string,
    public hint?: string
  ) {
    super(message)
    this.name = 'SupabaseError'
  }
}

export function handleSupabaseError(error: PostgrestError | null): SupabaseError | null {
  if (!error) return null

  return new SupabaseError(
    error.message,
    error.code,
    error.details,
    error.hint
  )
}

export interface ApiResponse<T> {
  data: T | null
  error: SupabaseError | null
  count?: number
}

export function createSuccessResponse<T>(data: T, count?: number): ApiResponse<T> {
  return {
    data,
    error: null,
    count,
  }
}

export function createErrorResponse<T>(error: PostgrestError | Error): ApiResponse<T> {
  const supabaseError = error instanceof Error && 'code' in error
    ? handleSupabaseError(error as PostgrestError)
    : new SupabaseError(error.message)

  return {
    data: null,
    error: supabaseError,
  }
}
