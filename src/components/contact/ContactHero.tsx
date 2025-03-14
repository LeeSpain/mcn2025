
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const ContactHero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-mcn-blue/10 to-white">
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,119,182,0.15),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="mb-3">
            <div className="chip mx-auto bg-mcn-blue text-white">{t('contact.title')}</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-mcn-blue-dark to-mcn-blue bg-clip-text text-transparent tracking-tight mb-6">
            {t('contact.getInTouch')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('contact.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
