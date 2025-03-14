
import { TranslationSet } from './types';
import { clientHeaderTranslations } from './client-header';
import { clientBenefitsTranslations } from './client-benefits';
import { clientExperienceTranslations } from './client-experience';
import { clientFeaturesTranslations } from './client-features';
import { clientPricingTranslations } from './client-pricing';
import { clientFamilyTranslations } from './client-family';
import { clientCTATranslations } from './client-cta';

// Combine all client-related translation sets into one
export const clientsTranslations: TranslationSet = {
  ...clientHeaderTranslations,
  ...clientBenefitsTranslations,
  ...clientExperienceTranslations,
  ...clientFeaturesTranslations,
  ...clientPricingTranslations,
  ...clientFamilyTranslations,
  ...clientCTATranslations,
};
