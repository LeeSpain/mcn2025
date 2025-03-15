
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
import { patientEducationTranslations } from './patient-education';
import { authTranslations } from './auth';
import { testimonialsTranslations } from './testimonials';
import { clientPricingTranslations } from './client-pricing';
import { footerTranslations } from './footer';
import { solutionsTranslations } from './solutions';
import { blogTranslations } from './blog';
import { companyTranslations } from './company';

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
  ...patientEducationTranslations,
  ...authTranslations,
  ...testimonialsTranslations,
  ...clientPricingTranslations,
  ...footerTranslations,
  ...solutionsTranslations,
  ...blogTranslations,
  ...companyTranslations,
};

export * from './types';
