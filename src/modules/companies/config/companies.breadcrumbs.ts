import type { Company } from '../types/company.types';

import {
  createListBreadcrumbs,
  createProfileBreadcrumbs,
} from '@/router/breadcrumbs/helpers';
import { ROUTES } from '@/router/routes';

export const companiesListBreadcrumbConfig = createListBreadcrumbs(
  (t) => t.companiesPage.title
);

export const companyProfileBreadcrumbConfig = createProfileBreadcrumbs<Company>(
  (t) => t.companiesPage.title,
  ROUTES.COMPANIES,
  (company, t) => company?.name ?? t.companiesPage.profile.defaultTitle
);

// export const companiesListBreadcrumbConfig: BreadcrumbConfig = {
//   type: 'list',
//   label: (t) => t.companiesPage.title,
// };

// export const companyProfileBreadcrumbConfig: BreadcrumbConfig<Company> = {
//   type: 'profile',
//   listLabel: (t) => t.companiesPage.title,
//   listTo: ROUTES.COMPANIES,
//   entityLabel: (company, t) =>
//     company?.name ?? t.companiesPage.profile.defaultTitle,
// };
