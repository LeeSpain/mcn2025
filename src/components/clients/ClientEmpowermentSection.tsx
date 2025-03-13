
import React from 'react';
import { Check } from 'lucide-react';
import ClientExperienceCard from './ClientExperienceCard';

const ClientEmpowermentSection: React.FC = () => {
  const empowermentFeatures = [
    {
      title: 'Designed for All Comfort Levels',
      description: 'Whether you\'re tech-savvy or new to digital tools, MCN\'s intuitive interface makes it easy to navigate and use.'
    },
    {
      title: 'No Extra Hardware Required',
      description: 'Works with your existing devices and can integrate with popular wearables you might already own.'
    },
    {
      title: 'Privacy-Focused Design',
      description: 'You control what information is shared and with whom, ensuring your privacy is always respected.'
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-24">
      <div className="w-full lg:w-1/2 order-2 lg:order-1">
        <ClientExperienceCard />
      </div>
      
      <div className="w-full lg:w-1/2 order-1 lg:order-2 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight mb-6">How MCN Empowers You</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Our platform is designed to help you maintain your independence while providing peace of mind to you and your loved ones.
        </p>
        
        <div className="space-y-4 mb-8">
          {empowermentFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue flex-shrink-0">
                <Check size={16} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientEmpowermentSection;
