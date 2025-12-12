import type { AnyTFunction } from '@/i18n/types';

export type Crumb = {
  label: string;
  to?: string;
};

export type BreadcrumbLabelGetter = (t: AnyTFunction) => string;
export type BreadcrumbEntityLabelGetter<T> = (
  t: AnyTFunction,
  entity?: T | null
) => string;

export type ListBreadcrumbConfig = {
  type: 'list';
  label: BreadcrumbLabelGetter;
};

export type ProfileBreadcrumbConfig<T> = {
  type: 'profile';
  listLabel: BreadcrumbLabelGetter;
  listTo: string;
  entityLabel: BreadcrumbEntityLabelGetter<T>;
};

export type BreadcrumbConfig<T = unknown> =
  | ListBreadcrumbConfig
  | ProfileBreadcrumbConfig<T>;
