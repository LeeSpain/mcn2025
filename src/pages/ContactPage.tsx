
import React from 'react';
import NavBar from '@/components/NavBar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-20 md:pt-24">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
