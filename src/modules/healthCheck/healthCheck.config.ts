import type { HealthServiceKey } from './types';

import {
  checkBackendHealth,
  checkDatabaseHealth,
  checkRedisHealth,
} from '@/api';

export type HealthServiceConfig = {
  label: string;
  check: () => Promise<{ message?: string }>;
  successMessage: string;
  errorMessage: string;
};

export const HEALTH_SERVICES: Record<HealthServiceKey, HealthServiceConfig> = {
  backend: {
    label: 'Backend API',
    check: checkBackendHealth,
    successMessage: 'Backend is healthy!',
    errorMessage: 'Backend check failed',
  },
  database: {
    label: 'Database (PostgreSQL)',
    check: checkDatabaseHealth,
    successMessage: 'Database is healthy!',
    errorMessage: 'Database check failed',
  },
  redis: {
    label: 'Redis Cache',
    check: checkRedisHealth,
    successMessage: 'Redis is healthy!',
    errorMessage: 'Redis check failed',
  },
};
