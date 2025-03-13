
import React from 'react';
import { DollarSign, TrendingDown, Clock, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const EnterpriseSavings: React.FC = () => {
  const { t } = useLanguage();
  
  const savingItems = [
    {
      title: t('enterprise.saving1.title'),
      description: t('enterprise.saving1.description'),
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      title: t('enterprise.saving2.title'),
      description: t('enterprise.saving2.description'),
      icon: <TrendingDown className="w-5 h-5" />
    },
    {
      title: t('enterprise.saving3.title'),
      description: t('enterprise.saving3.description'),
      icon: <Users className="w-5 h-5" />
    },
    {
      title: t('enterprise.saving4.title'),
      description: t('enterprise.saving4.description'),
      icon: <Clock className="w-5 h-5" />
    }
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight mb-4">
          {t('enterprise.savings.title')}
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('enterprise.savings.description')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {savingItems.map((item, index) => (
          <div key={index} className="glass-card p-6 rounded-2xl shadow-soft">
            <div className="w-12 h-12 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-medium mb-2">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnterpriseSavings;
