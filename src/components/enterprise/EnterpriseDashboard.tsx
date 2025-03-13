
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const EnterpriseDashboard: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full lg:w-1/2">
      <div className="relative">
        <div className="lg:aspect-[4/3] relative">
          <div className="glass-card w-full h-full shadow-soft-lg p-6 md:p-8 rounded-2xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-mcn-blue-light via-mcn-blue to-mcn-blue-dark"></div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-display font-semibold">{t('enterprise.pricing.title')}</h3>
              <div className="flex items-baseline mt-4">
                <span className="text-3xl font-bold">{t('enterprise.pricing.custom')}</span>
              </div>
              <p className="text-muted-foreground mt-2">
                {t('enterprise.pricing.description')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-mcn-blue/5 rounded-lg border border-mcn-blue/10">
                <h4 className="font-medium mb-1">{t('enterprise.tiers.small')}</h4>
                <p className="text-sm text-muted-foreground">{t('enterprise.tiers.small.description')}</p>
                <div className="mt-2 text-xs bg-mcn-blue/10 px-2 py-1 inline-block rounded">10-50 Users</div>
              </div>
              <div className="p-4 bg-mcn-blue/5 rounded-lg border border-mcn-blue/10">
                <h4 className="font-medium mb-1">{t('enterprise.tiers.medium')}</h4>
                <p className="text-sm text-muted-foreground">{t('enterprise.tiers.medium.description')}</p>
                <div className="mt-2 text-xs bg-mcn-blue/10 px-2 py-1 inline-block rounded">51-200 Users</div>
              </div>
              <div className="p-4 bg-mcn-blue/5 rounded-lg border border-mcn-blue/10">
                <h4 className="font-medium mb-1">{t('enterprise.tiers.large')}</h4>
                <p className="text-sm text-muted-foreground">{t('enterprise.tiers.large.description')}</p>
                <div className="mt-2 text-xs bg-mcn-blue/10 px-2 py-1 inline-block rounded">201-500 Users</div>
              </div>
              <div className="p-4 bg-mcn-blue/5 rounded-lg border border-mcn-blue/10">
                <h4 className="font-medium mb-1">{t('enterprise.tiers.enterprise')}</h4>
                <p className="text-sm text-muted-foreground">{t('enterprise.tiers.enterprise.description')}</p>
                <div className="mt-2 text-xs bg-mcn-blue/10 px-2 py-1 inline-block rounded">500+ Users</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="primary-button flex items-center justify-center">
                {t('enterprise.contact.button')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/enterprise-demo" className="outline-button flex items-center justify-center">
                {t('enterprise.demo.button')}
              </Link>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-20 h-20 rounded-xl glass-card shadow-soft rotate-[10deg] animate-float z-20">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-10 h-10 bg-mcn-blue-light/30 rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 bg-mcn-blue rounded-md"></div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-xl glass-card shadow-soft rotate-[-5deg] animate-float z-20">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-12 h-12 bg-mcn-blue/10 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-mcn-blue rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseDashboard;
