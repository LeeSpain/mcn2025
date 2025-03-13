
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Button 
        variant="ghost" 
        size="sm"
        className={`px-2 py-1 text-xs font-medium rounded ${language === 'en' ? 'bg-mcn-blue/10 text-mcn-blue' : ''}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </Button>
      <Button 
        variant="ghost" 
        size="sm"
        className={`px-2 py-1 text-xs font-medium rounded ${language === 'nl' ? 'bg-mcn-blue/10 text-mcn-blue' : ''}`}
        onClick={() => setLanguage('nl')}
      >
        NL
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
