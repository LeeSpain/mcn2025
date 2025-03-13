
import React from 'react';
import EnterpriseBenefit from './EnterpriseBenefit';
import { useLanguage } from '@/context/LanguageContext';

const EnterpriseBenefits: React.FC = () => {
  const { t } = useLanguage();
  
  const benefits = [
    {
      title: t('enterprise.benefit1.title'),
      description: t('enterprise.benefit1.description')
    },
    {
      title: t('enterprise.benefit2.title'),
      description: t('enterprise.benefit2.description')
    },
    {
      title: t('enterprise.benefit3.title'),
      description: t('enterprise.benefit3.description')
    },
    {
      title: t('enterprise.benefit4.title'),
      description: t('enterprise.benefit4.description')
    }
  ];

  return (
    <div className="w-full lg:w-1/2">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight mb-6">
        {t('enterprise.title')}
      </h2>
      <p className="text-lg text-muted-foreground mb-8">
        {t('enterprise.description')}
      </p>
      
      <div className="space-y-6">
        {benefits.map((benefit, index) => (
          <EnterpriseBenefit 
            key={index}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
};

export default EnterpriseBenefits;
