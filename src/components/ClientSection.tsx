
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ClientSection: React.FC = () => {
  return (
    <section id="clients" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-[50%] h-[90%] bg-mcn-blue/5 rounded-l-[100px] transform -translate-y-[20%]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="lg:aspect-[4/3] relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="glass-card w-full h-full shadow-soft-lg p-6 md:p-8 rounded-2xl overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-mcn-blue-light via-mcn-blue to-mcn-blue-dark"></div>
                  
                  <div className="flex flex-col h-full">
                    <div className="mb-8">
                      <h3 className="text-2xl font-display font-semibold mb-2">Client Benefits</h3>
                      <p className="text-muted-foreground">MCN empowers independent living with intuitive tools</p>
                    </div>
                    
                    <div className="space-y-6 flex-grow">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue flex-shrink-0">
                          <Check size={16} />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-1">Simplified Task Management</h4>
                          <p className="text-muted-foreground text-sm">Keep track of medications, appointments, and daily routines with voice reminders</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue flex-shrink-0">
                          <Check size={16} />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-1">Enhanced Safety</h4>
                          <p className="text-muted-foreground text-sm">Automatic activity monitoring with alerts to caregivers if unusual patterns are detected</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue flex-shrink-0">
                          <Check size={16} />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-1">Seamless Communication</h4>
                          <p className="text-muted-foreground text-sm">Connect with family members and care professionals through high-quality video calls</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue flex-shrink-0">
                          <Check size={16} />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-1">Health Insights</h4>
                          <p className="text-muted-foreground text-sm">Monitor health metrics with beautiful visualizations and easy sharing with healthcare providers</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <Link to="/client-demo" className="primary-button inline-flex items-center">
                        See Client Demo <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div 
                  className="absolute -top-6 -right-6 w-20 h-20 rounded-xl glass-card shadow-soft rotate-[10deg] animate-float z-20"
                  style={{ animationDelay: '0.5s' }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-10 h-10 bg-mcn-blue-light/30 rounded-lg flex items-center justify-center">
                      <div className="w-5 h-5 bg-mcn-blue rounded-md"></div>
                    </div>
                  </div>
                </div>
                
                <div 
                  className="absolute -bottom-8 -left-8 w-24 h-24 rounded-xl glass-card shadow-soft rotate-[-5deg] animate-float z-20"
                  style={{ animationDelay: '0.8s' }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-mcn-blue/10 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-mcn-blue rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2 animate-fade-in-up">
            <div className="mb-6">
              <span className="chip">For Clients</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight mb-6">Live Independently with Confidence</h2>
            <p className="text-lg text-muted-foreground mb-8">
              MCN provides older adults with easy-to-use tools that support independent living while maintaining connections with loved ones and caregivers.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-mcn-blue/5 rounded-lg border border-mcn-blue/10">
                <h4 className="font-medium mb-1">Designed for All Comfort Levels</h4>
                <p className="text-muted-foreground text-sm">
                  Whether you're tech-savvy or new to digital tools, MCN's intuitive interface makes it easy to navigate and use.
                </p>
              </div>
              
              <div className="p-4 bg-mcn-blue/5 rounded-lg border border-mcn-blue/10">
                <h4 className="font-medium mb-1">No Extra Hardware Required</h4>
                <p className="text-muted-foreground text-sm">
                  Works with your existing devices and can integrate with popular wearables you might already own.
                </p>
              </div>
              
              <div className="p-4 bg-mcn-blue/5 rounded-lg border border-mcn-blue/10">
                <h4 className="font-medium mb-1">Privacy-Focused Design</h4>
                <p className="text-muted-foreground text-sm">
                  You control what information is shared and with whom, ensuring your privacy is always respected.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup" className="primary-button flex items-center justify-center">
                Get Started
              </Link>
              <Link to="/#contact" className="outline-button flex items-center justify-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
