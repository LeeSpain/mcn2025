
import React from 'react';
import { Check } from 'lucide-react';

interface EnterpriseBenefitProps {
  title: string;
  description: string;
}

const EnterpriseBenefit: React.FC<EnterpriseBenefitProps> = ({ title, description }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 w-6 h-6 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue flex-shrink-0">
        <Check size={16} />
      </div>
      <div>
        <h4 className="text-lg font-medium mb-1">{title}</h4>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

export default EnterpriseBenefit;
