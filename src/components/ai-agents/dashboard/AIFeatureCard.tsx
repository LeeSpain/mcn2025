
import React from 'react';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface AIFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const AIFeatureCard: React.FC<AIFeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  bgColor,
  iconColor,
}) => {
  return (
    <Card className={`p-4 border ${bgColor.replace('bg-', 'border-')}`}>
      <div className="flex items-start space-x-3">
        <div className={`${bgColor} p-2 rounded-full`}>
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default AIFeatureCard;
