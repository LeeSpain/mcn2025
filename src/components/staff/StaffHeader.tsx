
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StaffHeader: React.FC = () => {
  return (
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <div className="mb-3">
        <div className="chip mx-auto">For Customer Service</div>
      </div>
      <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight mb-6">
        MCN Call Center & Customer Service Dashboard
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        Empower your support team with comprehensive tools to deliver exceptional service. 
        Streamline client interactions, troubleshoot efficiently, and manage all aspects of service delivery from one intuitive interface.
      </p>
      <Link to="/dashboard/staff">
        <Button className="primary-button">
          Access Customer Service Dashboard <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
};

export default StaffHeader;
