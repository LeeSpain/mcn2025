
import React, { ReactNode } from 'react';

interface ConnectCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  content: ReactNode;
}

const ConnectCard: React.FC<ConnectCardProps> = ({ icon, title, description, content }) => {
  return (
    <div className="glass-card p-6 rounded-xl flex items-start">
      <div className="w-12 h-12 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue mr-4">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-medium mb-1">{title}</h4>
        <p className="text-muted-foreground mb-2">{description}</p>
        {content}
      </div>
    </div>
  );
};

export default ConnectCard;
