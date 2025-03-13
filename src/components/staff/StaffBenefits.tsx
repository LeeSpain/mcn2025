
import React from 'react';
import { Shield, Clock, LineChart, Brain, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import StaffBenefit from './StaffBenefit';

const StaffBenefits: React.FC = () => {
  return (
    <div className="w-full lg:w-1/2 order-2 lg:order-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StaffBenefit 
          icon={<Shield size={20} />}
          title="ClientSync"
          description="Access all client information in one unified dashboard, reducing time spent switching between systems."
          delay={0.1}
        />
        
        <StaffBenefit 
          icon={<Clock size={20} />}
          title="TaskMaster"
          description="AI-powered prioritization of tasks helps staff focus on the most critical client needs first."
          delay={0.2}
        />
        
        <StaffBenefit 
          icon={<LineChart size={20} />}
          title="RemoteLink"
          description="Conduct virtual check-ins with clients, reducing travel time while maintaining quality care."
          delay={0.3}
        />
        
        <StaffBenefit 
          icon={<Brain size={20} />}
          title="Floortje AI"
          description="Receive AI-generated care suggestions based on client data patterns and best practices."
          delay={0.4}
        />
      </div>
      
      <div className="mt-8 text-center lg:text-left">
        <Link to="/staff-demo" className="primary-button inline-flex items-center">
          See Staff Dashboard Demo <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default StaffBenefits;
