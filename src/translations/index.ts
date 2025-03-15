
import { heroTranslations } from './hero';
import { navigationTranslations } from './navigation';
import { featuresTranslations } from './features';
import { clientsTranslations } from './clients';
import { staffTranslations } from './staff';
import { enterpriseTranslations } from './enterprise';
import { testimonialsTranslations } from './testimonials';
import { footerTranslations } from './footer';
import { ctaTranslations } from './cta';
import { authTranslations } from './auth';
import { solutionsTranslations } from './solutions';
import { dashboardTranslations } from './dashboard';
import { companyTranslations } from './company';
import { clientBenefitsTranslations } from './client-benefits';
import { clientExperienceTranslations } from './client-experience';
import { clientPricingTranslations } from './client-pricing';
import { clientFeaturesTranslations } from './client-features';
import { clientFamilyTranslations } from './client-family';
import { clientCTATranslations } from './client-cta';
import { clientHeaderTranslations } from './client-header';
import { pricingTranslations } from './pricing';
import { blogTranslations } from './blog';
import { nurseTranslations } from './nurse';
import { patientEducationTranslations } from './patient-education';
import { popupTranslations } from './popup';

import { TranslationSet } from './types';

export const translations: TranslationSet = {
  ...heroTranslations,
  ...navigationTranslations,
  ...featuresTranslations,
  ...clientsTranslations,
  ...staffTranslations,
  ...enterpriseTranslations,
  ...testimonialsTranslations,
  ...footerTranslations,
  ...ctaTranslations,
  ...authTranslations,
  ...solutionsTranslations,
  ...dashboardTranslations,
  ...companyTranslations,
  ...clientBenefitsTranslations,
  ...clientExperienceTranslations,
  ...clientPricingTranslations,
  ...clientFeaturesTranslations,
  ...clientFamilyTranslations,
  ...clientCTATranslations,
  ...clientHeaderTranslations,
  ...pricingTranslations,
  ...blogTranslations,
  ...nurseTranslations,
  ...patientEducationTranslations,
  ...popupTranslations,
};

// Export Language type from types.ts using 'export type'
export type { Language } from './types';
