
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import DemoButton from '@/components/implementation/DemoButton';

const PageHeader: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-bold mb-4">
        {t('implementation.title', 'MCN Implementation Plan')}
      </h1>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        {t('implementation.subtitle', 'Tracking the progress of transitioning from MobileCare to Mobile Care Nexus')}
      </p>

      {/* Demo Access Button */}
      <div className="mt-6">
        <DemoButton text="Launch Staff Portal Demo" />
      </div>
    </div>
  );
};

export default PageHeader;
