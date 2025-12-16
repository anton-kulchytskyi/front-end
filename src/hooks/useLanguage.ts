import { useTranslation } from 'react-i18next';

import { LANGUAGES, type Language } from '@/i18n/languages';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language as Language;

  const changeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
  };

  return {
    currentLanguage,
    changeLanguage,
    languages: LANGUAGES,
  };
};
