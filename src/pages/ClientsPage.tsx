
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Check, ArrowRight, User, Calendar, ShieldCheck, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const ClientsPage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-20 md:pt-24">
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute right-0 top-0 w-[50%] h-[90%] bg-mcn-blue/5 rounded-l-[100px] transform -translate-y-[20%]"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="mb-3">
                <div className="chip mx-auto">For Clients</div>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight mb-6">
                Independent Living Made Simple
              </h1>
              <p className="text-xl text-muted-foreground">
                MCN provides easy-to-use tools that support independent living while maintaining connections with loved ones and caregivers.
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-24">
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="relative">
                  <div className="aspect-[4/3] relative animate-fade-in-up glass-card shadow-soft-lg p-6 md:p-8 rounded-2xl overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-mcn-blue-light via-mcn-blue to-mcn-blue-dark"></div>
                    
                    <div className="flex flex-col h-full">
                      <div className="mb-8">
                        <h3 className="text-2xl font-display font-semibold mb-2">Client Experience</h3>
                        <p className="text-muted-foreground">How MCN works in your daily life</p>
                      </div>
                      
                      <div className="space-y-6 flex-grow">
                        <div className="flex items-start gap-4">
                          <div className="mt-1 w-6 h-6 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue flex-shrink-0">
                            <Calendar size={16} />
                          </div>
                          <div>
                            <h4 className="text-lg font-medium mb-1">Morning Routine</h4>
                            <p className="text-muted-foreground text-sm">Receive gentle reminders about medications and appointments for the day</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="mt-1 w-6 h-6 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue flex-shrink-0">
                            <ShieldCheck size={16} />
                          </div>
                          <div>
                            <h4 className="text-lg font-medium mb-1">Throughout Your Day</h4>
                            <p className="text-muted-foreground text-sm">Your activity is monitored in the background, ensuring you're safe and active</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="mt-1 w-6 h-6 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue flex-shrink-0">
                            <User size={16} />
                          </div>
                          <div>
                            <h4 className="text-lg font-medium mb-1">Staying Connected</h4>
                            <p className="text-muted-foreground text-sm">Video call family members or message your care team with the tap of a button</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="mt-1 w-6 h-6 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue flex-shrink-0">
                            <Activity size={16} />
                          </div>
                          <div>
                            <h4 className="text-lg font-medium mb-1">Health Tracking</h4>
                            <p className="text-muted-foreground text-sm">Record and monitor your health metrics, sharing them with healthcare providers when needed</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 order-1 lg:order-2 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight mb-6">How MCN Empowers You</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our platform is designed to help you maintain your independence while providing peace of mind to you and your loved ones.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue flex-shrink-0">
                      <Check size={16} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Designed for All Comfort Levels</h4>
                      <p className="text-muted-foreground text-sm">
                        Whether you're tech-savvy or new to digital tools, MCN's intuitive interface makes it easy to navigate and use.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue flex-shrink-0">
                      <Check size={16} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">No Extra Hardware Required</h4>
                      <p className="text-muted-foreground text-sm">
                        Works with your existing devices and can integrate with popular wearables you might already own.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue flex-shrink-0">
                      <Check size={16} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Privacy-Focused Design</h4>
                      <p className="text-muted-foreground text-sm">
                        You control what information is shared and with whom, ensuring your privacy is always respected.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-mcn-gray-light p-8 md:p-12 rounded-2xl mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold mb-4">Pricing Plans</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Choose the plan that best fits your needs and lifestyle. All plans include access to our mobile app and web portal.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="glass-card p-8 flex flex-col border-t-4 border-mcn-blue-light">
                  <h3 className="text-2xl font-display font-semibold mb-2">Basic</h3>
                  <div className="text-3xl font-bold mb-1">€8<span className="text-lg font-normal text-muted-foreground">/month</span></div>
                  <p className="text-muted-foreground mb-6">Perfect for getting started</p>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-mcn-blue flex-shrink-0"><Check size={16} /></div>
                      <span>Care Manager (task tracking)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-mcn-blue flex-shrink-0"><Check size={16} /></div>
                      <span>Safety Monitor (basic)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-mcn-blue flex-shrink-0"><Check size={16} /></div>
                      <span>Health View (manual entries)</span>
                    </li>
                  </ul>
                  
                  <div className="mt-auto">
                    <Link to="/signup?plan=basic" className="outline-button w-full justify-center">
                      Choose Basic
                    </Link>
                  </div>
                </div>
                
                <div className="glass-card p-8 flex flex-col border-t-4 border-mcn-blue relative transform scale-105 z-10 shadow-soft-lg">
                  <div className="absolute -top-4 right-8 bg-mcn-blue text-white text-xs font-medium py-1 px-3 rounded-full">Most Popular</div>
                  <h3 className="text-2xl font-display font-semibold mb-2">Premium</h3>
                  <div className="text-3xl font-bold mb-1">€15<span className="text-lg font-normal text-muted-foreground">/month</span></div>
                  <p className="text-muted-foreground mb-6">Enhanced features and connectivity</p>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-mcn-blue flex-shrink-0"><Check size={16} /></div>
                      <span>All Basic features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-mcn-blue flex-shrink-0"><Check size={16} /></div>
                      <span>Connect Hub (unlimited video calls)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-mcn-blue flex-shrink-0"><Check size={16} /></div>
                      <span>BBrain voice integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-mcn-blue flex-shrink-0"><Check size={16} /></div>
                      <span>Wearable device integration</span>
                    </li>
                  </ul>
                  
                  <div className="mt-auto">
                    <Link to="/signup?plan=premium" className="primary-button w-full justify-center">
                      Choose Premium
                    </Link>
                  </div>
                </div>
                
                <div className="glass-card p-8 flex flex-col border-t-4 border-mcn-blue-dark">
                  <h3 className="text-2xl font-display font-semibold mb-2">Family</h3>
                  <div className="text-3xl font-bold mb-1">€25<span className="text-lg font-normal text-muted-foreground">/month</span></div>
                  <p className="text-muted-foreground mb-6">For multiple family members</p>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-mcn-blue flex-shrink-0"><Check size={16} /></div>
                      <span>All Premium features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-mcn-blue flex-shrink-0"><Check size={16} /></div>
                      <span>Up to 5 family member accounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-mcn-blue flex-shrink-0"><Check size={16} /></div>
                      <span>Family dashboard view</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-mcn-blue flex-shrink-0"><Check size={16} /></div>
                      <span>Priority support</span>
                    </li>
                  </ul>
                  
                  <div className="mt-auto">
                    <Link to="/signup?plan=family" className="outline-button w-full justify-center">
                      Choose Family
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">Ready to get started?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup" className="primary-button flex items-center justify-center">
                  Sign Up Today <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/contact" className="outline-button flex items-center justify-center">
                  Contact Us
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

export default ClientsPage;
