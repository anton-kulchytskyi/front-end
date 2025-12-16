import { en, type TranslationSchema } from './en';
import { uk } from './uk';

export type Locale = 'en' | 'uk';

export const translations: Record<Locale, TranslationSchema> = {
  en,
  uk,
};

export { type TranslationSchema };
