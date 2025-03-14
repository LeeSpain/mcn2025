
import React from 'react';
import PricingCard from './PricingCard';
import { useLanguage } from '@/context/LanguageContext';

const PricingSection: React.FC = () => {
  const { t } = useLanguage();
  
  const mainPlan = {
    title: t('pricing.main.title'),
    price: t('pricing.main.price'),
    description: t('pricing.main.description'),
    planId: 'membership-details',
    isPopular: true,
    highlightColor: 'border-mcn-blue',
    features: [
      // Products
      { text: t('BBrain Voice Assistant Device', 'BBrain Voice Assistant Device'), category: 'product' as const },
      { text: t('Safety Monitoring Sensors', 'Safety Monitoring Sensors'), category: 'product' as const },
      { text: t('Wearable Health Tracker', 'Wearable Health Tracker'), category: 'product' as const },
      { text: t('Emergency Alert Button', 'Emergency Alert Button'), category: 'product' as const },
      { text: t('Smart Medication Dispenser', 'Smart Medication Dispenser'), category: 'product' as const },
      { text: t('Home Automation Controls', 'Home Automation Controls'), category: 'product' as const },
      { text: t('Digital Photo Frame', 'Digital Photo Frame'), category: 'product' as const },
      
      // Services
      { text: t('Care Manager (task tracking)', 'Care Manager (task tracking)'), category: 'service' as const },
      { text: t('Safety Monitor (advanced)', 'Safety Monitor (advanced)'), category: 'service' as const },
      { text: t('Health View (full integration)', 'Health View (full integration)'), category: 'service' as const },
      { text: t('Connect Hub (unlimited video calls)', 'Connect Hub (unlimited video calls)'), category: 'service' as const },
      { text: t('BBrain voice integration', 'BBrain voice integration'), category: 'service' as const },
      { text: t('Provider Connectivity', 'Provider Connectivity'), category: 'service' as const },
      { text: t('Remote Setup Assistance', 'Remote Setup Assistance'), category: 'service' as const },
      { text: t('24/7 Technical Support', '24/7 Technical Support'), category: 'service' as const },
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
