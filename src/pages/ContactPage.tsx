
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfoSection from '@/components/contact/ContactInfoSection';
import GetInTouchSection from '@/components/contact/GetInTouchSection';
import FAQSection from '@/components/contact/FAQSection';
import AIGuardianChat from '@/components/contact/AIGuardianChat';
import { useLanguage } from '@/context/LanguageContext';

const ContactPage = () => {
  const { t } = useLanguage();
  
  // Effect to scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-20 md:pt-24">
        {/* Hero Section */}
        <ContactHero />

        {/* AI Guardian Chat Section */}
        <AIGuardianChat />

        {/* Get in Touch Section with Contact Form */}
        <GetInTouchSection />

        {/* Contact Information Section */}
        <ContactInfoSection />
            
        {/* FAQ Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="mb-3">
                  <div className="chip mx-auto">FAQ</div>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
                  {t('contact.faq.title', 'Frequently Asked Questions')}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t('contact.faq.description', 'Find answers to common questions about MCN and our services.')}
                </p>
              </div>
              <div className="glass-card p-8 rounded-xl">
                <div className="w-full" id="faq-section">
                  <FAQSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
