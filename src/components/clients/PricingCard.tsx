
import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  planId: string;
  isPopular?: boolean;
  highlightColor?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  planId,
  isPopular = false,
  highlightColor = 'border-mcn-blue-light'
}) => {
  return (
    <div className={`glass-card p-8 flex flex-col border-t-4 ${highlightColor} ${isPopular ? 'relative transform scale-105 z-10 shadow-soft-lg' : ''}`}>
      {isPopular && (
        <div className="absolute -top-4 right-8 bg-mcn-blue text-white text-xs font-medium py-1 px-3 rounded-full">
          Most Popular
        </div>
      )}
      
      <h3 className="text-2xl font-display font-semibold mb-2">{title}</h3>
      <div className="text-3xl font-bold mb-1">{price}<span className="text-lg font-normal text-muted-foreground">/month</span></div>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="mt-1 text-mcn-blue flex-shrink-0"><Check size={16} /></div>
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        <Link 
          to={`/pricing/${planId}`} 
          className={`${isPopular ? 'primary-button' : 'outline-button'} w-full justify-center`}
        >
          Choose {title}
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
