
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Shield, Clock, LineChart, Brain, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import StaffHeader from '@/components/staff/StaffHeader';
import StaffBenefitsCards from '@/components/staff/StaffBenefitsCards';
import StaffTestimonials from '@/components/staff/StaffTestimonials';
import StaffRecruitmentCTA from '@/components/staff/StaffRecruitmentCTA';
import FeatureCard from '@/components/staff/FeatureCard';
import StaffDashboardMockup from '@/components/staff/StaffDashboardMockup';

const StaffPage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-20 md:pt-24">
        <section className="py-20 bg-mcn-gray-light relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,119,182,0.1),transparent_70%)]"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <StaffHeader />
            
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-24">
              <div className="w-full lg:w-1/2">
                <StaffDashboardMockup />
              </div>
              
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight mb-6">Transform Your Workflow</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  MCN streamlines your daily tasks, allowing you to spend more time with clients and less time on administrative work.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <FeatureCard 
                    icon={<Shield size={20} />}
                    title="ClientSync"
                    description="Access all client information in one unified dashboard, reducing time spent switching between systems."
                  />
                  
                  <FeatureCard 
                    icon={<Clock size={20} />}
                    title="TaskMaster"
                    description="AI-powered prioritization of tasks helps staff focus on the most critical client needs first."
                  />
                  
                  <FeatureCard 
                    icon={<LineChart size={20} />}
                    title="RemoteLink"
                    description="Conduct virtual check-ins with clients, reducing travel time while maintaining quality care."
                  />
                  
                  <FeatureCard 
                    icon={<Brain size={20} />}
                    title="Floortje AI"
                    description="Receive AI-generated care suggestions based on client data patterns and best practices."
                  />
                </div>
                
                <div className="mt-8">
                  <Link to="/staff-demo" className="primary-button inline-flex items-center">
                    See Staff Dashboard Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            <StaffBenefitsCards />
            <StaffTestimonials />
            <StaffRecruitmentCTA />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default StaffPage;
