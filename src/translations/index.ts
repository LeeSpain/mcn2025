
import { TranslationSet } from './types';
import { navigationTranslations } from './navigation';
import { clientsTranslations } from './clients';
import { pricingTranslations } from './pricing';
import { ctaTranslations } from './cta';
import { enterpriseTranslations } from './enterprise';

// Combine all translation sets into one
export const translations: TranslationSet = {
  ...navigationTranslations,
  ...clientsTranslations,
  ...pricingTranslations,
  ...ctaTranslations,
  ...enterpriseTranslations,
};

export * from './types';
