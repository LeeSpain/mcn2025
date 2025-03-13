
import React from 'react';

interface StaffBenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const StaffBenefit: React.FC<StaffBenefitProps> = ({ icon, title, description, delay = 0 }) => (
  <div 
    className="flex items-start gap-4 p-5 glass-card animate-fade-in-up"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="mt-1 w-10 h-10 rounded-lg bg-mcn-blue-light/30 flex items-center justify-center text-mcn-blue-dark flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </div>
);

export default StaffBenefit;
