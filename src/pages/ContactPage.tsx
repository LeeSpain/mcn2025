
import React from 'react';
import NavBar from '@/components/NavBar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-20 md:pt-24">
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
            
            <div className="flex flex-col lg:flex-row gap-12 mb-24">
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <ContactForm />
              </div>
              
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="glass-card p-8 md:p-10 h-full">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">Contact Information</h2>
                  <p className="text-muted-foreground mb-8">
                    Feel free to reach out to us using any of the methods below. Our team is available to assist you with any questions or concerns.
                  </p>
                  
                  <div className="space-y-6 mb-10">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-mcn-blue/10 flex items-center justify-center text-mcn-blue flex-shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Our Offices</h4>
                        <p className="text-muted-foreground">
                          Hoofdkantoor: Marconistraat 16<br />
                          3281 NN Delfzijl<br /><br />
                          Bijkantoor: Wilhelminaplein 5<br />
                          4875 BZ Etten-Leur
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-mcn-blue/10 flex items-center justify-center text-mcn-blue flex-shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Phone</h4>
                        <p className="text-muted-foreground">
                          Customer Support: +31 (0)10 123 4567<br />
                          Sales Inquiries: +31 (0)10 765 4321
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-mcn-blue/10 flex items-center justify-center text-mcn-blue flex-shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Email</h4>
                        <p className="text-muted-foreground">
                          General Inquiries: info@mobile-care.nl<br />
                          Support: support@mobile-care.nl<br />
                          Sales: sales@mobile-care.nl
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-mcn-blue/10 flex items-center justify-center text-mcn-blue flex-shrink-0">
                        <Clock size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Business Hours</h4>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 5:00 PM<br />
                          Saturday: 10:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-mcn-blue/5 rounded-lg border border-mcn-blue/10">
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
            
            <div className="glass-card p-8 md:p-10 rounded-xl mb-20">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Find quick answers to common questions about MCN.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <h4 className="text-lg font-medium mb-2">Can I try MCN before committing?</h4>
                  <p className="text-muted-foreground">
                    Yes! We offer a 30-day free trial for all new users. You can explore all features and see how MCN fits into your life or care practice before subscribing.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">How do I connect with my healthcare provider?</h4>
                  <p className="text-muted-foreground">
                    If your healthcare provider uses MCN, they can send you an invitation link. Alternatively, you can share your MCN profile with them through the app's sharing feature.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Do you offer training for care organizations?</h4>
                  <p className="text-muted-foreground">
                    Yes, we provide comprehensive training programs for care organizations adopting MCN. Contact our sales team to learn more about our training options.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-10">
                <Link to="/faq" className="text-mcn-blue font-medium inline-flex items-center">
                  View all FAQs <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">Ready to transform care?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup" className="primary-button flex items-center justify-center">
                  Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/demo" className="outline-button flex items-center justify-center">
                  Request a Demo
                </Link>
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
