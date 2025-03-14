
import React from 'react';
import StaffBenefits from './staff/StaffBenefits';
import StaffDashboardMockup from './staff/StaffDashboardMockup';
import { useLanguage } from '@/context/LanguageContext';

const StaffSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="staff" className="section-padding bg-mcn-gray-light relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,119,182,0.1),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-3">
            <div className="chip mx-auto">{t('staff.header.chip', 'For Staff')}</div>
          </div>
          <h2 className="section-title">{t('staff.header.title', 'Streamline Care Management')}</h2>
          <p className="section-subtitle">
            {t('staff.header.description', 'MCN gives care professionals powerful tools to reduce administrative burden and focus on what matters most: providing quality care.')}
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <StaffBenefits />
          <StaffDashboardMockup />
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
