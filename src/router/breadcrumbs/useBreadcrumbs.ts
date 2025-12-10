import type { BreadcrumbConfig, Crumb } from './types';

import { useStrings } from '@/i18n/useStrings';
import { ROUTES } from '@/router/routes';

export function useBreadcrumbs<T = unknown>(
  config: BreadcrumbConfig<T>,
  entity: T | null = null
): Crumb[] {
  const t = useStrings();

  switch (config.type) {
    case 'list':
      return [
        { label: t.nav.home, to: ROUTES.HOME },
        { label: config.label(t) },
      ];

    case 'profile':
      return [
        { label: t.nav.home, to: ROUTES.HOME },
        { label: config.listLabel(t), to: config.listTo },
        { label: config.entityLabel(entity, t) },
      ];
  }
}
