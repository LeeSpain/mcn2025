
import { TranslationSet } from '../types';
import { dashboardNavigationTranslations } from './navigation';
import { dashboardWelcomeTranslations } from './welcome';
import { dashboardTasksTranslations } from './tasks';
import { dashboardHealthTranslations } from './health';
import { dashboardConnectTranslations } from './connect';
import { dashboardShopTranslations } from './shop';
import { dashboardStaffTranslations } from './staff';
import { dashboardTechnicalTranslations } from './technical';
import { dashboardAnalyticsTranslations } from './analytics';

// Combine all dashboard translations
export const dashboardTranslations: TranslationSet = {
  ...dashboardNavigationTranslations,
  ...dashboardWelcomeTranslations,
  ...dashboardTasksTranslations,
  ...dashboardHealthTranslations,
  ...dashboardConnectTranslations,
  ...dashboardShopTranslations,
  ...dashboardStaffTranslations,
  ...dashboardTechnicalTranslations,
  ...dashboardAnalyticsTranslations
};
