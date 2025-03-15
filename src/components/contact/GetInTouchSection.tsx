
import React from 'react';
import ContactForm from '@/components/ContactForm';
import { useLanguage } from '@/context/LanguageContext';

const GetInTouchSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-gradient-to-b from-mcn-blue/5 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-semibold bg-gradient-to-r from-mcn-blue-dark to-mcn-blue bg-clip-text text-transparent">
              {t('contact.getInTouch', 'Get in Touch With Us')}
            </h3>
            <p className="text-muted-foreground mt-2">
              {t('contact.description', "We'd love to hear from you. Fill out the form below and we'll respond as soon as possible.")}
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
