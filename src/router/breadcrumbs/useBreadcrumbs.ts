import { useTranslation } from 'react-i18next';

import type { BreadcrumbConfig, Crumb } from './types';

import type { AnyTFunction } from '@/i18n/types';
import { ROUTES } from '@/router/routes';

export function useBreadcrumbs<T = unknown>(
  config: BreadcrumbConfig<T>,
  t: AnyTFunction,
  entity?: T | null
): Crumb[] {
  const { t: tNav } = useTranslation('nav');

  switch (config.type) {
    case 'list':
      return [
        { label: tNav('home'), to: ROUTES.HOME },
        { label: config.label(t) },
      ];

    case 'profile':
      return [
        { label: tNav('home'), to: ROUTES.HOME },
        { label: config.listLabel(t), to: config.listTo },
        { label: config.entityLabel(t, entity) },
      ];
  }
}
