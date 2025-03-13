
import React from 'react';
import NavBar from '@/components/NavBar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-20 md:pt-24">
        {/* Hero Section */}
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

        {/* AI Guardian Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
              <div className="w-full md:w-1/2">
                <div className="p-1 bg-mcn-blue/10 rounded-full inline-block mb-4">
                  <div className="w-12 h-12 rounded-full bg-mcn-blue/20 flex items-center justify-center text-mcn-blue">
                    <Shield size={24} />
                  </div>
                </div>
                <h2 className="text-3xl font-display font-semibold mb-4">AI Guardian Technologies</h2>
                <p className="text-muted-foreground mb-6">
                  Our AI-powered systems work around the clock to ensure your safety and well-being. MCN's Guardian technology learns your routines and can alert caregivers to potential issues before they become emergencies.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 text-green-600">✓</div>
                    <span>24/7 automated monitoring and alerts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 text-green-600">✓</div>
                    <span>Privacy-focused design puts you in control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 text-green-600">✓</div>
                    <span>Machine learning that adapts to your lifestyle</span>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2">
                <div className="glass-card p-8 rounded-2xl shadow-soft bg-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-mcn-blue/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                  <div className="relative z-10">
                    <img 
                      src="/placeholder.svg" 
                      alt="AI Guardian Technology" 
                      className="w-full h-auto rounded-lg mb-6"
                    />
                    <h3 className="text-xl font-medium mb-2">Intelligent Care</h3>
                    <p className="text-muted-foreground text-sm">
                      Our AI systems create a protective digital barrier that helps maintain independence while ensuring support is available when needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Ready to Transform Section */}
        <section className="py-16 bg-mcn-blue text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-display font-semibold mb-6">Ready to Transform Care?</h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Join thousands of clients and caregivers who are already experiencing the benefits of MCN's connected care platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup" className="bg-white text-mcn-blue px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors inline-flex items-center justify-center">
                  Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/demo" className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center">
                  Request a Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="glass-card p-8 md:p-10 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center md:text-left">
                    <div className="w-12 h-12 rounded-lg bg-mcn-blue/10 flex items-center justify-center text-mcn-blue mx-auto md:mx-0 mb-4">
                      <MapPin size={24} />
                    </div>
                    <h4 className="font-medium mb-2">Our Offices</h4>
                    <p className="text-muted-foreground">
                      Hoofdkantoor: Marconistraat 16<br />
                      3281 NN Delfzijl<br /><br />
                      Bijkantoor: Wilhelminaplein 5<br />
                      4875 BZ Etten-Leur
                    </p>
                  </div>
                  
                  <div className="text-center md:text-left">
                    <div className="w-12 h-12 rounded-lg bg-mcn-blue/10 flex items-center justify-center text-mcn-blue mx-auto md:mx-0 mb-4">
                      <Phone size={24} />
                    </div>
                    <h4 className="font-medium mb-2">Phone</h4>
                    <p className="text-muted-foreground">
                      Customer Support: +31 (0)10 123 4567<br />
                      Sales Inquiries: +31 (0)10 765 4321
                    </p>
                  </div>
                  
                  <div className="text-center md:text-left">
                    <div className="w-12 h-12 rounded-lg bg-mcn-blue/10 flex items-center justify-center text-mcn-blue mx-auto md:mx-0 mb-4">
                      <Mail size={24} />
                    </div>
                    <h4 className="font-medium mb-2">Email</h4>
                    <p className="text-muted-foreground">
                      General Inquiries: info@mobile-care.nl<br />
                      Support: support@mobile-care.nl<br />
                      Sales: sales@mobile-care.nl
                    </p>
                  </div>
                  
                  <div className="text-center md:text-left">
                    <div className="w-12 h-12 rounded-lg bg-mcn-blue/10 flex items-center justify-center text-mcn-blue mx-auto md:mx-0 mb-4">
                      <Clock size={24} />
                    </div>
                    <h4 className="font-medium mb-2">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
            
        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-1/2">
                <ContactForm />
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="glass-card p-8 md:p-10 h-full">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">Frequently Asked Questions</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium mb-2">How do I get started with MCN?</h4>
                      <p className="text-muted-foreground">
                        Getting started is easy! Simply sign up for an account on our website or download the mobile app. Follow the setup instructions, and you'll be up and running in no time.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2">Is MCN compatible with my existing devices?</h4>
                      <p className="text-muted-foreground">
                        MCN works with most modern smartphones and tablets. For the web portal, we support all major browsers. We also integrate with popular wearables like Fitbit and Apple Watch.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2">How secure is my data with MCN?</h4>
                      <p className="text-muted-foreground">
                        We take data security very seriously. All data is encrypted using industry-standard protocols, and we comply with NEN7510 and ISO standards for healthcare data protection.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2">Do you offer training for care organizations?</h4>
                      <p className="text-muted-foreground">
                        Yes, we provide comprehensive training programs for care organizations adopting MCN. Contact our sales team to learn more about our training options.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-mcn-blue/5 rounded-lg border border-mcn-blue/10">
                    <h4 className="font-medium mb-2">Need urgent assistance?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      For technical issues or urgent support, our team is available 24/7.
                    </p>
                    <Link to="/support" className="text-mcn-blue font-medium text-sm inline-flex items-center">
                      Visit our support center <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
