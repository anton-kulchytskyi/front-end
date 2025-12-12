import type { Company } from '../types/company.types';

import type { AnyTFunction } from '@/i18n/types';
import { createBooleanStatusMeta } from '@/utils/createBooleanStatusMeta';
import { formatDate } from '@/utils/formatDate';

export const getCompanyVisibilityMeta = (isVisible: boolean, t: AnyTFunction) =>
  createBooleanStatusMeta(isVisible, {
    trueLabel: t('status.visible'),
    falseLabel: t('status.hidden'),
  });

export const getCompanyMetaData = (company: Company, t: AnyTFunction) => {
  const createdAt = formatDate(company.created_at) ?? '—';
  const updatedAt = formatDate(company.updated_at) ?? '—';
  return [
    { label: t('labels.id'), value: company.id },
    { label: t('labels.createdAt'), value: createdAt },
    { label: t('labels.updatedAt'), value: updatedAt },
  ];
};

export const getCompanySidebarMetaData = (
  company: Company,
  t: AnyTFunction
) => {
  return [
    {
      label: t('labels.owner'),
      value: company.owner_id,
    },
    {
      label: t('labels.createdAt'),
      value: formatDate(company.created_at) ?? '—',
    },
    {
      label: t('labels.updatedAt'),
      value: formatDate(company.updated_at) ?? '—',
    },
  ];
};
