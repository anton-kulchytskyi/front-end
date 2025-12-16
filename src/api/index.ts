/**
 * API Module
 *
 * This module provides centralized API services for the application.
 * All API calls should go through these services to maintain consistency
 * and enable global error handling, interceptors, and configuration.
 *
 * @module api
 */

// Export axios instance for direct use if needed
export { default as axiosInstance } from './axiosInstance';

// Export API services
export * from './health';

// Export types
export type * from './types';
