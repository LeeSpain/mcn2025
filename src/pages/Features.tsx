
import React from 'react';
import NavBar from '@/components/NavBar';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-20 md:pt-24">
        <Features />
      </div>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
