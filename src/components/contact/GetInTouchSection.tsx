
import React from 'react';
import ContactForm from '@/components/ContactForm';

const GetInTouchSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="mb-3">
            <div className="chip mx-auto">Get in Touch</div>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Ready to transform care?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're a potential client, caregiver, or partner, we'd love to hear from you and discuss how MCN can support your needs.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
