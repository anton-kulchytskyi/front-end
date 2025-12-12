import { useTranslation } from 'react-i18next';

import SelectInput from '@/components/ui/SelectInput';
import { useLanguage } from '@/hooks/useLanguage';
import type { Language } from '@/i18n/languages';

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const { t } = useTranslation('nav');

  const options = Object.values(languages).map((lang) => ({
    value: lang.code,
    label: lang.label,
  }));

  return (
    <SelectInput
      label={t('langLabel')}
      value={currentLanguage}
      onChange={(value) => changeLanguage(value as Language)}
      options={options}
      fullWidth={false}
    />
  );
};

export default LanguageSelector;
