
import React, { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import ContactFormInputs from './contact/ContactFormInputs';
import ContactConnectSection from './contact/ContactConnectSection';
import SubmitButton from './contact/SubmitButton';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    userType: 'client' // 'client' or 'staff'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Message sent!",
        description: "We've received your message and will get back to you soon.",
      });
      
      // Reset after showing success state
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          phone: '',
          message: '',
          userType: 'client'
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,119,182,0.05),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-3">
            <div className="chip mx-auto">Get in Touch</div>
          </div>
          <h2 className="section-title">Ready to transform care?</h2>
          <p className="section-subtitle">
            Whether you're a potential client, caregiver, or partner, we'd love to hear from you and discuss how MCN can support your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in-up">
            <div className="glass-card shadow-soft-lg rounded-2xl overflow-hidden">
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-display font-semibold mb-6">Contact Us</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <ContactFormInputs 
                    formState={formState} 
                    handleChange={handleChange} 
                  />
                  
                  <SubmitButton 
                    isSubmitting={isSubmitting} 
                    isSubmitted={isSubmitted} 
                  />
                </form>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <ContactConnectSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
