import type { User } from '../types/user.types';

import type { AnyTFunction } from '@/i18n/types';
import { createBooleanStatusMeta } from '@/utils/createBooleanStatusMeta';
import { formatDate } from '@/utils/formatDate';

export const getUserStatusMeta = (isActive: boolean, t: AnyTFunction) =>
  createBooleanStatusMeta(isActive, {
    trueLabel: t('status.active'),
    falseLabel: t('status.inactive'),
  });

export const getUserMetaData = (user: User, t: AnyTFunction) => {
  return [
    { label: t('labels.id'), value: user.id },
    { label: t('labels.createdAt'), value: formatDate(user.created_at) },
    { label: t('labels.updatedAt'), value: formatDate(user.updated_at) },
  ];
};
