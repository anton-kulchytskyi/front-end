import { homeCrumb } from './breadcrumbs/homeCrumb';
import type { RouteConfig } from './breadcrumbs/types';

export const ROUTES = {
  HOME: {
    path: '/',
    translationKey: 'home',
    showInNav: true,
    breadcrumbs: () => [],
  },

  ABOUT: {
    path: '/about',
    translationKey: 'about',
    showInNav: true,
    breadcrumbs: (t) => [homeCrumb, { label: t('about') }],
  },

  USERS: {
    path: '/users',
    translationKey: 'users',
    showInNav: true,
    breadcrumbs: (t) => [homeCrumb, { label: t('users') }],
  },

  USER_PROFILE: {
    path: '/users/:id',
    translationKey: 'userProfile',
    showInNav: false,
    breadcrumbs: (t) => [homeCrumb, { label: t('users'), to: '/users' }],
  },

  COMPANIES: {
    path: '/companies',
    translationKey: 'companies',
    showInNav: true,
    breadcrumbs: (t) => [homeCrumb, { label: t('companies') }],
  },

  COMPANY_PROFILE: {
    path: '/companies/:id',
    translationKey: 'companyProfile',
    showInNav: false,
    breadcrumbs: (t) => [
      homeCrumb,
      { label: t('companies'), to: '/companies' },
    ],
  },
  STATE_DEMO: {
    path: '/state-demo',
    translationKey: 'stateDemo',
    showInNav: true,
    breadcrumbs: (t) => [homeCrumb, { label: t('stateDemo') }],
  },
} as const satisfies Record<string, RouteConfig>;
