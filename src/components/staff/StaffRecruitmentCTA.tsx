
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, BadgeCheck } from 'lucide-react';

const StaffRecruitmentCTA: React.FC = () => {
  return (
    <div className="glass-card p-8 md:p-12 rounded-xl">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">Ready to join our team?</h2>
          <p className="text-muted-foreground mb-6">
            We're always looking for passionate care professionals to join our team and help deliver exceptional care using MCN.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <div className="mt-1 text-mcn-blue flex-shrink-0"><Check size={16} /></div>
              <span>Competitive pay and benefits</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 text-mcn-blue flex-shrink-0"><Check size={16} /></div>
              <span>Flexible scheduling options</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 text-mcn-blue flex-shrink-0"><Check size={16} /></div>
              <span>Professional development opportunities</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 text-mcn-blue flex-shrink-0"><Check size={16} /></div>
              <span>Cutting-edge technology tools</span>
            </div>
          </div>
          <div className="mt-8">
            <Link to="/careers" className="primary-button inline-flex items-center">
              View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="w-full h-full rounded-xl bg-mcn-blue/10 p-6 flex items-center justify-center">
            <div className="text-center">
              <BadgeCheck size={48} className="text-mcn-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certified Training</h3>
              <p className="text-sm text-muted-foreground">
                All staff receive comprehensive training on the MCN platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffRecruitmentCTA;
