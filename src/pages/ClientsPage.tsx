
import React from 'react';
import NavBar from '@/components/NavBar';
import ClientSection from '@/components/ClientSection';
import Footer from '@/components/Footer';

const ClientsPage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-20 md:pt-24">
        <ClientSection />
      </div>
      <Footer />
    </div>
  );
};

export default ClientsPage;
