
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const DesktopNavigation: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <Link to="/features" className="text-foreground hover:text-mcn-blue transition-colors">
        {t('nav.features')}
      </Link>
      <Link to="/clients" className="text-foreground hover:text-mcn-blue transition-colors">
        {t('nav.clients')}
      </Link>
      <Link to="/enterprise" className="text-foreground hover:text-mcn-blue transition-colors">
        {t('nav.enterprise')}
      </Link>
      <Link to="/contact" className="text-foreground hover:text-mcn-blue transition-colors">
        {t('nav.contact')}
      </Link>
    </nav>
  );
};

export default DesktopNavigation;
