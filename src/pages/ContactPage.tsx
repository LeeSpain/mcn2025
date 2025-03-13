
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import AIGuardianSection from '@/components/contact/AIGuardianSection';
import ContactInfoSection from '@/components/contact/ContactInfoSection';
import GetInTouchSection from '@/components/contact/GetInTouchSection';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-20 md:pt-24">
        {/* Hero Section */}
        <ContactHero />

        {/* AI Guardian Section */}
        <AIGuardianSection />

        {/* Contact Information Section */}
        <ContactInfoSection />
            
        {/* Get in Touch Section with FAQ */}
        <GetInTouchSection />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
