
import React from 'react';
import PricingCard from './PricingCard';
import { useLanguage } from '@/context/LanguageContext';

const PricingSection: React.FC = () => {
  const { t } = useLanguage();
  
  const mainPlan = {
    title: t('pricing.main.title'),
    price: t('pricing.main.price'),
    description: t('pricing.main.description'),
    planId: 'membership',
    isPopular: true,
    highlightColor: 'border-mcn-blue',
    features: [
      // Products
      { text: 'BBrain Voice Assistant Device', category: 'product' as const },
      { text: 'Safety Monitoring Sensors', category: 'product' as const },
      { text: 'Wearable Health Tracker', category: 'product' as const },
      { text: 'Emergency Alert Button', category: 'product' as const },
      { text: 'Smart Medication Dispenser', category: 'product' as const },
      { text: 'Home Automation Controls', category: 'product' as const },
      { text: 'Digital Photo Frame', category: 'product' as const },
      
      // Services
      { text: 'Care Manager (task tracking)', category: 'service' as const },
      { text: 'Safety Monitor (advanced)', category: 'service' as const },
      { text: 'Health View (full integration)', category: 'service' as const },
      { text: 'Connect Hub (unlimited video calls)', category: 'service' as const },
      { text: 'BBrain voice integration', category: 'service' as const },
      { text: 'Provider Connectivity', category: 'service' as const },
      { text: 'Remote Setup Assistance', category: 'service' as const },
      { text: '24/7 Technical Support', category: 'service' as const },
    ]
  };

  const familyPlan = {
    title: t('pricing.family.title'),
    price: t('pricing.family.price'),
    description: t('pricing.family.description'),
    planId: 'family',
    highlightColor: 'border-mcn-blue-dark',
    isFamily: true,
    features: [
      { text: 'Connect to main member account' },
      { text: 'Monitor health and activity' },
      { text: 'Access to family dashboard' },
      { text: 'Video calling and messaging' },
      { text: 'Emergency notifications' }
    ]
  };

  return (
    <div className="bg-mcn-gray-light p-8 md:p-12 rounded-2xl mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-display font-bold mb-4">{t('pricing.title')}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t('pricing.description')}
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
