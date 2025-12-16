/**
 * Common API Types
 *
 * Shared types used across all API services
 */

// Common API error structure
export interface ApiError {
  message: string;
  status?: number;
  data?: unknown;
  isNetworkError?: boolean;
}

// // Health check response (вже використовується)
// export interface HealthCheckResponse {
//   status: string;
//   message?: string;
// }
