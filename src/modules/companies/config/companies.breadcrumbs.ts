import type { Company } from '../types/company.types';

import {
  createListBreadcrumbs,
  createProfileBreadcrumbs,
} from '@/router/breadcrumbs/helpers';
import { ROUTES } from '@/router/routes';

export const companiesListBreadcrumbConfig = createListBreadcrumbs((t) =>
  t('title')
);

export const companyProfileBreadcrumbConfig = createProfileBreadcrumbs<Company>(
  (t) => t('title'),
  ROUTES.COMPANIES,
  (t, company) => company?.name ?? t('profile.defaultTitle')
);
