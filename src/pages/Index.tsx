
import React from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ClientSection from '@/components/ClientSection';
import StaffSection from '@/components/StaffSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Features />
      <ClientSection />
      <StaffSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
