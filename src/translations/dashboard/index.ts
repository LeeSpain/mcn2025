
// Re-export all dashboard translations from their respective files
import { dashboardNavigationTranslations } from './navigation';
import { dashboardWelcomeTranslations } from './welcome';
import { dashboardTasksTranslations } from './tasks';
import { dashboardHealthTranslations } from './health';
import { dashboardConnectTranslations } from './connect';
import { dashboardShopTranslations } from './shop';
import { dashboardStaffTranslations } from './staff';
import { dashboardTechnicalTranslations } from './technical';
import { dashboardAnalyticsTranslations } from './analytics';

// Export all dashboard translations
export const dashboardTranslations = {
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
