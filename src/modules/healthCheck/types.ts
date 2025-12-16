export type HealthStatus = 'idle' | 'loading' | 'success' | 'error';

export type HealthServiceKey = 'backend' | 'database' | 'redis';

export interface HealthCheckResult {
  status: HealthStatus;
  message: string;
}
