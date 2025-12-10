import type {
  BreadcrumbConfig,
  BreadcrumbEntityLabelGetter,
  BreadcrumbLabelGetter,
} from './types';

export function createListBreadcrumbs(
  label: BreadcrumbLabelGetter
): BreadcrumbConfig {
  return {
    type: 'list',
    label,
  };
}

export function createProfileBreadcrumbs<T>(
  listLabel: BreadcrumbLabelGetter,
  listTo: string,
  entityLabel: BreadcrumbEntityLabelGetter<T>
): BreadcrumbConfig<T> {
  return {
    type: 'profile',
    listLabel,
    listTo,
    entityLabel,
  };
}
