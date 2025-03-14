
import { TranslationSet } from './types';
import { navigationTranslations } from './navigation';
import { clientsTranslations } from './clients';
import { pricingTranslations } from './pricing';
import { ctaTranslations } from './cta';
import { enterpriseTranslations } from './enterprise';
import { nurseTranslations } from './nurse';
import { dashboardTranslations } from './dashboard';
import { staffTranslations } from './staff';
import { featuresTranslations } from './features';
import { heroTranslations } from './hero';

// Combine all translation sets into one
export const translations: TranslationSet = {
  ...navigationTranslations,
  ...clientsTranslations,
  ...pricingTranslations,
  ...ctaTranslations,
  ...enterpriseTranslations,
  ...nurseTranslations,
  ...dashboardTranslations,
  ...staffTranslations,
  ...featuresTranslations,
  ...heroTranslations,
};

export * from './types';
