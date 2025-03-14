
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const ContactHero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,119,182,0.1),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="mb-3">
            <div className="chip mx-auto">{t('contact.title')}</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight mb-6">
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
