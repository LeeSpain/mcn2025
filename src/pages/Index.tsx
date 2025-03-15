
import React, { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ClientSection from '@/components/ClientSection';
import StaffSection from '@/components/StaffSection';
import EnterpriseBenefits from '@/components/enterprise/EnterpriseBenefits';
import EnterpriseDashboard from '@/components/enterprise/EnterpriseDashboard';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import PopupTerms from '@/components/PopupTerms';
import { LanguageProvider } from '@/context/LanguageContext';

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);
  
  // Ensure scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <NavBar />
        <Hero />
        <Features />
        <ClientSection />
        <StaffSection />
        
        {/* Enterprise Section */}
        <section id="enterprise" className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <EnterpriseBenefits />
              <EnterpriseDashboard />
            </div>
          </div>
        </section>
        
        <TestimonialsSection />
        <Footer />
        
        {/* Terms & Conditions Popup */}
        <PopupTerms 
          isOpen={showPopup} 
          onClose={handleClosePopup} 
        />
      </div>
    </LanguageProvider>
  );
};

export default Index;
