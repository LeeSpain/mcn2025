
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const EnterpriseHeader: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <div className="mb-3">
        <div className="chip mx-auto">{t('enterprise.chip')}</div>
      </div>
      <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight mb-6">
        {t('enterprise.title')}
      </h1>
      <p className="text-xl text-muted-foreground">
        {t('enterprise.description')}
      </p>
    </div>
  );
};

export default EnterpriseHeader;
