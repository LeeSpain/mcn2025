
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const CallToAction: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">{t('cta.title')}</h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/signup" className="primary-button flex items-center justify-center">
          {t('cta.signup')} <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <Link to="/contact" className="outline-button flex items-center justify-center">
          {t('cta.contact')}
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
