import type { ReactNode } from 'react';

import type { AnyTFunction } from '@/i18n/types';

export type Crumb = {
  label: string | ReactNode;
  to?: string;
};

export type RouteConfig = {
  path: string;
  translationKey: string;
  showInNav: boolean;
  requiresAuth?: boolean;
  breadcrumbs: (t: AnyTFunction) => Crumb[];
};
