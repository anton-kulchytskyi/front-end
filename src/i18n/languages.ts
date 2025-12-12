export const LANGUAGES = {
  en: { code: 'en', label: 'EN' },
  uk: { code: 'uk', label: 'UA' },
} as const;

export type Language = keyof typeof LANGUAGES;
