import type { TranslationSchema } from '@/i18n';

export type Crumb = {
  label: string;
  to?: string;
};

export type BreadcrumbLabelGetter = (t: TranslationSchema) => string;
export type BreadcrumbEntityLabelGetter<T> = (
  entity: T | null,
  t: TranslationSchema
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
