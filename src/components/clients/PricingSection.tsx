
import React from 'react';
import PricingCard from './PricingCard';
import { useLanguage } from '@/context/LanguageContext';

const PricingSection: React.FC = () => {
  const { t } = useLanguage();
  
  const mainPlan = {
    title: t('pricing.main.title'),
    price: '€100',
    description: t('pricing.main.description'),
    planId: 'membership-details',
    isPopular: true,
    highlightColor: 'border-mcn-blue',
    features: [
      // Products
      { text: t('pricing.products.voiceAssistant'), category: 'product' as const },
      { text: t('pricing.products.safetyMonitoring'), category: 'product' as const },
      { text: t('pricing.products.wearableTracker'), category: 'product' as const },
      { text: t('pricing.products.emergencyButton'), category: 'product' as const },
      { text: t('pricing.products.medicationDispenser'), category: 'product' as const },
      { text: t('pricing.products.homeAutomation'), category: 'product' as const },
      { text: t('pricing.products.photoFrame'), category: 'product' as const },
      
      // Services
      { text: t('pricing.services.careManager'), category: 'service' as const },
      { text: t('pricing.services.safetyMonitor'), category: 'service' as const },
      { text: t('pricing.services.healthView'), category: 'service' as const },
      { text: t('pricing.services.connectHub'), category: 'service' as const },
      { text: t('pricing.services.voiceIntegration'), category: 'service' as const },
      { text: t('pricing.services.providerConnectivity'), category: 'service' as const },
      { text: t('pricing.services.remoteSetup'), category: 'service' as const },
      { text: t('pricing.services.techSupport'), category: 'service' as const },
    ]
  };

  const familyPlan = {
    title: t('pricing.family.title'),
    price: t('pricing.family.price'),
    description: t('pricing.family.description'),
    planId: 'family-details',
    highlightColor: 'border-mcn-blue-dark',
    isFamily: true,
    features: [
      { text: t('pricing.family.connect') },
      { text: t('pricing.family.monitor') },
      { text: t('pricing.family.dashboard') },
      { text: t('pricing.family.video') },
      { text: t('pricing.family.emergency') }
    ]
  };

  return (
    <div className="bg-mcn-gray-light p-8 md:p-12 rounded-2xl mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-display font-bold mb-4">{t('pricing.title')}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t('pricing.simple.description')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <PricingCard
            title={mainPlan.title}
            price={mainPlan.price}
            description={mainPlan.description}
            features={mainPlan.features}
            planId={mainPlan.planId}
            isPopular={mainPlan.isPopular}
            highlightColor={mainPlan.highlightColor}
          />
        </div>
        <div>
          <PricingCard
            title={familyPlan.title}
            price={familyPlan.price}
            description={familyPlan.description}
            features={familyPlan.features}
            planId={familyPlan.planId}
            highlightColor={familyPlan.highlightColor}
            isFamily={true}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
