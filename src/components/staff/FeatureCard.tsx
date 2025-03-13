
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="flex items-start gap-4 p-5 glass-card animate-fade-in-up">
    <div className="mt-1 w-10 h-10 rounded-lg bg-mcn-blue-light/30 flex items-center justify-center text-mcn-blue-dark flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </div>
);

export default FeatureCard;
