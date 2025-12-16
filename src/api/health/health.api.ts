import axiosInstance from '../axiosInstance';

import { HEALTH_ENDPOINTS } from './health.endpoints';
import type { HealthCheckResponse } from './health.types';

/**
 * Check backend health status
 * Calls the backend's health endpoint to verify it's operational
 *
 * @returns Promise with health check response
 * @throws ApiError if request fails
 */
export const checkBackendHealth = async (): Promise<HealthCheckResponse> => {
  const response = await axiosInstance.get<HealthCheckResponse>(
    HEALTH_ENDPOINTS.backend
  );
  return response.data;
};

/**
 * Check database health status
 * Calls the backend's database health endpoint
 *
 * @returns Promise with health check response
 * @throws ApiError if request fails
 */
export const checkDatabaseHealth = async (): Promise<HealthCheckResponse> => {
  const response = await axiosInstance.get<HealthCheckResponse>(
    HEALTH_ENDPOINTS.database
  );
  return response.data;
};

/**
 * Check Redis health status
 * Calls the backend's Redis health endpoint
 *
 * @returns Promise with health check response
 * @throws ApiError if request fails
 */
export const checkRedisHealth = async (): Promise<HealthCheckResponse> => {
  const response = await axiosInstance.get<HealthCheckResponse>(
    HEALTH_ENDPOINTS.redis
  );
  return response.data;
};
