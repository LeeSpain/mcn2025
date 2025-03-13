
export type Language = 'en' | 'nl';

export type TranslationRecord = {
  en: string;
  nl: string;
};

export type TranslationSet = {
  [key: string]: TranslationRecord;
};
