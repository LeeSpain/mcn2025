
import React from 'react';
import NavBar from '@/components/NavBar';
import StaffSection from '@/components/StaffSection';
import Footer from '@/components/Footer';

const StaffPage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-20 md:pt-24">
        <StaffSection />
      </div>
      <Footer />
    </div>
  );
};

export default StaffPage;
