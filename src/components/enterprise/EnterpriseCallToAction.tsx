
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const EnterpriseCallToAction: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">{t('cta.title')}</h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/contact" className="primary-button flex items-center justify-center">
          {t('enterprise.contact.button')} <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <Link to="/enterprise-demo" className="outline-button flex items-center justify-center">
          {t('enterprise.demo.button')}
        </Link>
      </div>
    </div>
  );
};

export default EnterpriseCallToAction;
