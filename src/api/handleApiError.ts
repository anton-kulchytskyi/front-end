/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosError } from 'axios';

import type { ApiError } from './types';

import { createLogger } from '@/utils/logger';

const logger = createLogger('API');

export function handleApiError(error: AxiosError): ApiError {
  // Network error
  if (!error.response) {
    logger.warn('Network error');

    return {
      message: 'Network error. Please check your connection.',
      isNetworkError: true,
    };
  }

  const { status, data } = error.response;

  switch (status) {
    case 401:
      logger.warn('Unauthorized – clearing token');
      localStorage.removeItem('access_token');
      break;

    case 403:
      logger.warn('Forbidden');
      break;

    case 404:
      logger.warn('Not found');
      break;

    case 500:
      logger.error('Server error');
      break;

    default:
      logger.error('Unhandled error', data);
  }

  return {
    status,
    message:
      (data as any)?.message || (data as any)?.detail || 'An error occurred',
    data,
  };
}
