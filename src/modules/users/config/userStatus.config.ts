import type { TranslationSchema } from '@/i18n';
import { createBooleanStatusMeta } from '@/utils/createBooleanStatusMeta';

export const getUserStatusMeta = (
  isActive: boolean,
  t: TranslationSchema['usersPage']
) =>
  createBooleanStatusMeta(isActive, {
    trueLabel: t.status.active,
    falseLabel: t.status.inactive,
  });
