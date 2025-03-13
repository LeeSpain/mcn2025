
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

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
                  <div>
                    <label htmlFor="userType" className="block text-sm font-medium text-foreground mb-2">
                      I am a:
                    </label>
                    <select
                      id="userType"
                      name="userType"
                      value={formState.userType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-mcn-blue focus:border-transparent transition-all"
                      required
                    >
                      <option value="client">Client or Family Member</option>
                      <option value="staff">Healthcare Professional</option>
                      <option value="partner">Business Partner</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-mcn-blue focus:border-transparent transition-all"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-mcn-blue focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-mcn-blue focus:border-transparent transition-all"
                      placeholder="+31 6 12345678"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-mcn-blue focus:border-transparent transition-all resize-none"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full primary-button flex items-center justify-center py-3 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    } ${
                      isSubmitted ? 'bg-green-600 hover:bg-green-700' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : isSubmitted ? (
                      <>
                        <Check className="mr-2 h-4 w-4" /> Message Sent
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="lg:pl-6">
              <h3 className="text-2xl font-display font-semibold mb-6">Connect With Us</h3>
              
              <div className="space-y-8">
                <div className="glass-card p-6 rounded-xl flex items-start">
                  <div className="w-12 h-12 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground mb-2">For general inquiries:</p>
                    <a href="mailto:info@mobile-care.nl" className="text-mcn-blue hover:underline">
                      info@mobile-care.nl
                    </a>
                  </div>
                </div>
                
                <div className="glass-card p-6 rounded-xl flex items-start">
                  <div className="w-12 h-12 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <p className="text-muted-foreground mb-2">Monday to Friday, 9AM-5PM CET:</p>
                    <a href="tel:+31612345678" className="text-mcn-blue hover:underline">
                      +31 6 1234 5678
                    </a>
                  </div>
                </div>
                
                <div className="glass-card p-6 rounded-xl flex items-start">
                  <div className="w-12 h-12 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground mb-2">Our head office:</p>
                    <address className="not-italic">
                      Delfzijlstraat 123<br />
                      9933 AA Delfzijl<br />
                      The Netherlands
                    </address>
                  </div>
                </div>
                
                <div className="p-6 rounded-xl bg-mcn-blue text-white">
                  <h4 className="text-lg font-medium mb-3">Beta Program</h4>
                  <p className="mb-4 text-white/90">
                    Join our beta program and be among the first to experience MCN's transformative care platform.
                  </p>
                  <a 
                    href="#contact" 
                    className="inline-block px-4 py-2 bg-white text-mcn-blue-dark rounded-lg font-medium transition-colors hover:bg-opacity-90"
                  >
                    Sign up for beta
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
