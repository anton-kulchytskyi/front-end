import { ROUTES } from '../routes';

import type { Crumb } from './types';

import type { AnyTFunction } from '@/i18n/types';

type RouteKey = keyof typeof ROUTES;

export const getNavigationItems = () => {
  return Object.values(ROUTES).filter((route) => route.showInNav);
};

export const getRouteBreadcrumbs = (
  routeKey: RouteKey,
  t: AnyTFunction
): Crumb[] => {
  return ROUTES[routeKey].breadcrumbs(t);
};
