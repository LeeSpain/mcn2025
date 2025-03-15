
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CallScenarioCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const CallScenarioCard: React.FC<CallScenarioCardProps> = ({
  icon: Icon,
  title,
  description,
  bgColor,
  iconColor
}) => {
  return (
    <div className="flex bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
      <div className="mr-4">
        <div className={`${bgColor} p-2 rounded-full`}>
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
      </div>
      <div>
        <h5 className="font-semibold mb-1">{title}</h5>
        <p className="text-sm text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CallScenarioCard;
