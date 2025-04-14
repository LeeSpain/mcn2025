
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ClientSection from '@/components/ClientSection';
import StaffSection from '@/components/StaffSection';
import EnterpriseBenefits from '@/components/enterprise/EnterpriseBenefits';
import EnterpriseDashboard from '@/components/enterprise/EnterpriseDashboard';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

const Index = () => {
  // Ensure scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
        
        {/* MCN Implementation Dashboard Link */}
        <section className="bg-blue-50 py-12 my-8">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">MobileCare to MCN Transition</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Track our progress on implementing all 26 identified gaps and supplier integrations 
              in the transition from MobileCare to Mobile Care Nexus.
            </p>
            <Link 
              to="/mcn-implementation-dashboard" 
              className="inline-flex items-center justify-center px-6 py-3 bg-mcn-blue text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              View Implementation Dashboard
            </Link>
          </div>
        </section>
        
        <TestimonialsSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default React.memo(Index);
