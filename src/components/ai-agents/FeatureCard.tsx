
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
  buttonBgColor: string;
  buttonHoverColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  iconBgColor,
  iconColor,
  buttonBgColor,
  buttonHoverColor
}) => {
  return (
    <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4 mb-4">
        <div className={`p-2 ${iconBgColor} rounded-full`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-muted-foreground mb-4">
        {description}
      </p>
      <Button className={`w-full ${buttonBgColor} ${buttonHoverColor}`}>
        Learn More
      </Button>
    </Card>
  );
};

export default FeatureCard;
