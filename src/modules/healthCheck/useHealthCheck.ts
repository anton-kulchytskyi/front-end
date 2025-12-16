import { useState } from 'react';

import {
  HEALTH_SERVICES,
  type HealthServiceConfig,
} from './healthCheck.config';
import type { HealthServiceKey, HealthCheckResult } from './types';

import type { ApiError } from '@/api/types';

type HealthState = Record<HealthServiceKey, HealthCheckResult>;

const createInitialState = (): HealthState =>
  Object.fromEntries(
    Object.keys(HEALTH_SERVICES).map((key) => [
      key,
      { status: 'idle', message: '' },
    ])
  ) as HealthState;

export const useHealthCheck = () => {
  const [health, setHealth] = useState<HealthState>(createInitialState());

  const runCheck = async (key: HealthServiceKey) => {
    const service: HealthServiceConfig = HEALTH_SERVICES[key];

    setHealth((prev) => ({
      ...prev,
      [key]: { status: 'loading', message: '' },
    }));

    try {
      const result = await service.check();
      setHealth((prev) => ({
        ...prev,
        [key]: {
          status: 'success',
          message: result.message || service.successMessage,
        },
      }));
    } catch (error) {
      const apiError = error as ApiError;
      setHealth((prev) => ({
        ...prev,
        [key]: {
          status: 'error',
          message: apiError.message || service.errorMessage,
        },
      }));
    }
  };

  const runAllChecks = async () => {
    await Promise.all(
      (Object.keys(HEALTH_SERVICES) as HealthServiceKey[]).map(runCheck)
    );
  };

  return {
    health,
    services: HEALTH_SERVICES,
    runCheck,
    runAllChecks,
  };
};
