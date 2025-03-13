
import React from 'react';
import PricingCard from './PricingCard';
import { useLanguage } from '@/context/LanguageContext';

const PricingSection: React.FC = () => {
  const { t } = useLanguage();
  
  const pricingPlans = [
    {
      title: t('pricing.basic.title'),
      price: t('pricing.basic.price'),
      description: t('pricing.basic.description'),
      planId: 'basic',
      highlightColor: 'border-mcn-blue-light',
      features: [
        { text: 'Care Manager (task tracking)' },
        { text: 'Safety Monitor (basic)' },
        { text: 'Health View (manual entries)' }
      ]
    },
    {
      title: t('pricing.premium.title'),
      price: t('pricing.premium.price'),
      description: t('pricing.premium.description'),
      planId: 'premium',
      isPopular: true,
      highlightColor: 'border-mcn-blue',
      features: [
        { text: 'All Basic features' },
        { text: 'Connect Hub (unlimited video calls)' },
        { text: 'BBrain voice integration' },
        { text: 'Wearable device integration' }
      ]
    },
    {
      title: t('pricing.family.title'),
      price: t('pricing.family.price'),
      description: t('pricing.family.description'),
      planId: 'family',
      highlightColor: 'border-mcn-blue-dark',
      features: [
        { text: 'All Premium features' },
        { text: 'Up to 5 family member accounts' },
        { text: 'Family dashboard view' },
        { text: 'Priority support' }
      ]
    }
  ];

  return (
    <div className="bg-mcn-gray-light p-8 md:p-12 rounded-2xl mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-display font-bold mb-4">{t('pricing.title')}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t('pricing.description')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            description={plan.description}
            features={plan.features}
            planId={plan.planId}
            isPopular={plan.isPopular}
            highlightColor={plan.highlightColor}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
