
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CallFlowStepProps {
  stepNumber: number;
  title: string;
  description: string;
  example: string;
  icon: LucideIcon;
  bgColor: string;
  iconBgColor: string;
  iconColor: string;
  exampleBgColor: string;
  exampleTextColor: string;
}

const CallFlowStep: React.FC<CallFlowStepProps> = ({
  stepNumber,
  title,
  description,
  example,
  icon: Icon,
  bgColor,
  iconBgColor,
  iconColor,
  exampleBgColor,
  exampleTextColor,
}) => {
  return (
    <div className={`${bgColor} p-5 rounded-lg border border-${bgColor.replace('bg-', 'border-')} flex flex-col items-center text-center`}>
      <div className={`${iconBgColor} p-3 rounded-full mb-3`}>
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      <h4 className="font-semibold text-lg mb-2">{stepNumber}. {title}</h4>
      <p className="text-sm text-gray-600">
        {description}
      </p>
      <div className={`mt-4 ${exampleBgColor} p-2 rounded-md w-full`}>
        <p className={`text-xs italic ${exampleTextColor}`}>
          "{example}"
        </p>
      </div>
    </div>
  );
};

export default CallFlowStep;
