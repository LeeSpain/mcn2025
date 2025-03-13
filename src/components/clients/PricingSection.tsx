
import React from 'react';
import PricingCard from './PricingCard';

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      title: 'Basic',
      price: '€8',
      description: 'Perfect for getting started',
      planId: 'basic',
      highlightColor: 'border-mcn-blue-light',
      features: [
        { text: 'Care Manager (task tracking)' },
        { text: 'Safety Monitor (basic)' },
        { text: 'Health View (manual entries)' }
      ]
    },
    {
      title: 'Premium',
      price: '€15',
      description: 'Enhanced features and connectivity',
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
      title: 'Family',
      price: '€25',
      description: 'For multiple family members',
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
        <h2 className="text-3xl font-display font-bold mb-4">Pricing Plans</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that best fits your needs and lifestyle. All plans include access to our mobile app and web portal.
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
