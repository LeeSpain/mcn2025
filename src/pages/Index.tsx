import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ClientSection from '@/components/ClientSection';
import StaffSection from '@/components/StaffSection';
import EnterpriseBenefits from '@/components/enterprise/EnterpriseBenefits';
import EnterpriseDashboard from '@/components/enterprise/EnterpriseDashboard';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import FixedVideo from '@/components/FixedVideo';
import { LanguageProvider } from '@/context/LanguageContext';
import { Users, ShieldCheck, ArrowRight, Wrench, Heart, MessageCircle, Bot, Database } from 'lucide-react';

const Index = () => {
  // Ensure scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <NavBar />
        <FixedVideo />
        <Hero />
        <Features />
        <ClientSection />
        <StaffSection />
        
        {/* Enterprise Section */}
        <section id="enterprise" className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <EnterpriseBenefits />
              <EnterpriseDashboard />
            </div>
          </div>
        </section>
        
        {/* MCN Portals Access Section - Enhanced */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 my-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Mobile Care Nexus</h2>
                <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                  Explore our unified healthcare platform through interactive portal demos.
                  Access all the services and tools in our comprehensive care ecosystem.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {/* Member Portal Card */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
                  <div className="p-6">
                    <div className="p-2 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <ShieldCheck className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Member Portal</h3>
                    <p className="text-gray-600 mb-4">
                      Access personal care management, health monitoring, and communication tools designed for clients and their families.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 text-pink-500 mr-2" />
                        <span className="text-sm">Health Tracking</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 text-blue-500 mr-2" />
                        <span className="text-sm">Family Chat</span>
                      </div>
                      <div className="flex items-center">
                        <Bot className="h-4 w-4 text-purple-500 mr-2" />
                        <span className="text-sm">BBrain Assistant</span>
                      </div>
                      <div className="flex items-center">
                        <Database className="h-4 w-4 text-orange-500 mr-2" />
                        <span className="text-sm">Care Records</span>
                      </div>
                    </div>
                    
                    <Link 
                      to="/dashboard" 
                      className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
                    >
                      Launch Member Portal
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                
                {/* Staff Portal Card */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
                  <div className="p-6">
                    <div className="p-2 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Staff Portal</h3>
                    <p className="text-gray-600 mb-4">
                      Tools for healthcare providers and support staff to manage client care, monitor health data, and coordinate services.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-blue-500 mr-2" />
                        <span className="text-sm">Client Management</span>
                      </div>
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 text-pink-500 mr-2" />
                        <span className="text-sm">Health Monitoring</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Care Coordination</span>
                      </div>
                      <div className="flex items-center">
                        <Database className="h-4 w-4 text-purple-500 mr-2" />
                        <span className="text-sm">Service Analytics</span>
                      </div>
                    </div>
                    
                    <Link 
                      to="/staff-demo" 
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                    >
                      Launch Staff Portal
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* MCN Implementation Dashboard Link */}
        <section className="bg-white py-14 my-8 border-y border-gray-100">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="p-2 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">MobileCare to MCN Transition</h2>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                Track our progress on implementing all 26 identified gaps and supplier integrations 
                in the transition from MobileCare to Mobile Care Nexus.
              </p>
              <Link 
                to="/mcn-implementation-dashboard" 
                className="inline-flex items-center justify-center px-6 py-3 bg-mcn-blue text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                View Implementation Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
        
        <TestimonialsSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default React.memo(Index);
