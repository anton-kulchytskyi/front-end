import { useMemo } from 'react';

import { translations, type Locale, type TranslationSchema } from './index';

const CURRENT_LOCALE: Locale = 'en';

export const useStrings = (): TranslationSchema => {
  const locale = CURRENT_LOCALE;

  return useMemo(() => translations[locale], [locale]);
};
