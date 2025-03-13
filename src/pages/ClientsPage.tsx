
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ClientsHeader from '@/components/clients/ClientsHeader';
import ClientEmpowermentSection from '@/components/clients/ClientEmpowermentSection';
import PricingSection from '@/components/clients/PricingSection';
import CallToAction from '@/components/clients/CallToAction';

const ClientsPage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-20 md:pt-24">
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute right-0 top-0 w-[50%] h-[90%] bg-mcn-blue/5 rounded-l-[100px] transform -translate-y-[20%]"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <ClientsHeader />
            <ClientEmpowermentSection />
            <PricingSection />
            <CallToAction />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ClientsPage;
