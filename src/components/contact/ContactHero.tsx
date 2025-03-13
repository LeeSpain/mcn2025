
import React from 'react';

const ContactHero: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,119,182,0.1),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="mb-3">
            <div className="chip mx-auto">Contact Us</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            Have questions about MCN? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
