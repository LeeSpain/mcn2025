
import { TranslationSet } from './types';
import { navigationTranslations } from './navigation';
import { clientsTranslations } from './clients';
import { pricingTranslations } from './pricing';
import { ctaTranslations } from './cta';
import { enterpriseTranslations } from './enterprise';
import { nurseTranslations } from './nurse';
import { dashboardTranslations } from './dashboard';
import { featuresTranslations } from './features';
import { contactTranslations } from './contact';
import { chatTranslations } from './chat';
import { heroTranslations } from './hero';
import { staffTranslations } from './staff';

// Combine all translation sets into one
export const translations: TranslationSet = {
  ...navigationTranslations,
  ...clientsTranslations,
  ...pricingTranslations,
  ...ctaTranslations,
  ...enterpriseTranslations,
  ...nurseTranslations,
  ...dashboardTranslations,
  ...featuresTranslations,
  ...contactTranslations,
  ...chatTranslations,
  ...heroTranslations,
  ...staffTranslations,
};

export * from './types';
