
import React from 'react';
import { Check } from 'lucide-react';
import ClientExperienceCard from './ClientExperienceCard';
import { useLanguage } from '@/context/LanguageContext';

const ClientEmpowermentSection: React.FC = () => {
  const { t } = useLanguage();
  
  const empowermentFeatures = [
    {
      title: t('clients.features.comfort.title'),
      description: t('clients.features.comfort.description')
    },
    {
      title: t('clients.features.hardware.title'),
      description: t('clients.features.hardware.description')
    },
    {
      title: t('clients.features.privacy.title'),
      description: t('clients.features.privacy.description')
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-24">
      <div className="w-full lg:w-1/2 order-2 lg:order-1">
        <ClientExperienceCard />
      </div>
      
      <div className="w-full lg:w-1/2 order-1 lg:order-2 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight mb-6">{t('clients.empowerment.title')}</h2>
        <p className="text-lg text-muted-foreground mb-8">
          {t('clients.empowerment.description')}
        </p>
        
        <div className="space-y-4 mb-8">
          {empowermentFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue flex-shrink-0">
                <Check size={16} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientEmpowermentSection;
