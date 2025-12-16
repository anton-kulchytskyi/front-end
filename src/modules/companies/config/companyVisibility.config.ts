import type { TranslationSchema } from '@/i18n';
import { createBooleanStatusMeta } from '@/utils/createBooleanStatusMeta';

export const getCompanyVisibilityMeta = (
  isVisible: boolean,
  t: TranslationSchema['companiesPage']
) =>
  createBooleanStatusMeta(isVisible, {
    trueLabel: t.status.visible,
    falseLabel: t.status.hidden,
  });
