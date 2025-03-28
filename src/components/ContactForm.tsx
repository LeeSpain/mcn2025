
import React, { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import ContactFormInputs from './contact/ContactFormInputs';
import SubmitButton from './contact/SubmitButton';
import { useLanguage } from '@/context/LanguageContext';

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
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
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,119,182,0.08),transparent_60%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="glass-card shadow-lg rounded-2xl overflow-hidden border border-mcn-blue/10 bg-gradient-to-br from-white to-gray-50">
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-display font-semibold mb-6 text-mcn-blue-dark">{t('contact.title')}</h3>
                
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
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
