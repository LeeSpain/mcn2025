
import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

interface PricingFeature {
  text: string;
  category?: 'product' | 'service';
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  planId: string;
  isPopular?: boolean;
  highlightColor?: string;
  isFamily?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  planId,
  isPopular = false,
  highlightColor = 'border-mcn-blue-light',
  isFamily = false
}) => {
  const { t, language } = useLanguage();
  
  return (
    <div className={`glass-card p-8 flex flex-col border-t-4 ${highlightColor} ${isPopular ? 'relative transform scale-105 z-10 shadow-soft-lg' : ''}`}>
      {isPopular && (
        <div className="absolute -top-4 right-8 bg-mcn-blue text-white text-xs font-medium py-1 px-3 rounded-full">
          {t('pricing.popular')}
        </div>
      )}
      
      <h3 className="text-2xl font-display font-semibold mb-2">{title}</h3>
      <div className="text-3xl font-bold mb-1">{price}<span className="text-lg font-normal text-muted-foreground">/{language === 'en' ? 'month' : 'maand'}</span></div>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      {!isFamily && (
        <div className="mb-4">
          <p className="text-sm font-medium text-mcn-blue">{t('pricing.limit.text')}</p>
        </div>
      )}
      
      {features.length > 0 && (
        <>
          {!isFamily && (
            <div className="mb-4">
              <h4 className="font-medium mb-2">{t('pricing.products.title')}</h4>
              <ul className="space-y-3">
                {features.filter(f => f.category === 'product').map((feature, index) => (
                  <li key={`product-${index}`} className="flex items-start gap-2">
                    <div className="mt-1 text-mcn-blue flex-shrink-0"><Check size={16} /></div>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {!isFamily && (
            <div className="mb-6">
              <h4 className="font-medium mb-2">{t('pricing.services.title')}</h4>
              <ul className="space-y-3">
                {features.filter(f => f.category === 'service').map((feature, index) => (
                  <li key={`service-${index}`} className="flex items-start gap-2">
                    <div className="mt-1 text-mcn-blue flex-shrink-0"><Check size={16} /></div>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {isFamily && (
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 text-mcn-blue flex-shrink-0"><Check size={16} /></div>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
      
      <div className="mt-auto">
        <Link 
          to={planId === 'membership-details' ? '/membership-details' : `/pricing/${planId}`}
          className={`${isPopular ? 'primary-button' : 'outline-button'} w-full justify-center`}
        >
          {t('pricing.choose')} {title}
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
