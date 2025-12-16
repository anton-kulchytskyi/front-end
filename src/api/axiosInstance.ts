/**
 * Axios Instance Configuration
 *
 * Centralized Axios instance with:
 * - Base URL from environment variables
 * - Default JSON headers
 * - Request/response interceptors
 * - Scoped logging
 *
 * @module api/axiosInstance
 */

import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
  type AxiosResponse,
} from 'axios';

import { handleApiError } from './handleApiError';

import { createLogger } from '@/utils/logger';

const logger = createLogger('API');

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

/**
 * Request Interceptor
 */
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    logger.info('Request', config.method?.toUpperCase(), config.url);

    const token = localStorage.getItem('access_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
      logger.debug('Auth token attached');
    }

    return config;
  },
  (error) => {
    logger.error('Request error', error);
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor
 */
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    logger.info('Response', response.status, response.config.url);
    return response;
  },
  (error) => {
    logger.error('Response error', error.response?.status, error.config?.url);

    return Promise.reject(handleApiError(error));
  }
);

export default axiosInstance;
