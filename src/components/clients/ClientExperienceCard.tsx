
import React from 'react';
import { Calendar, ShieldCheck, User, Activity } from 'lucide-react';

const ClientExperienceCard: React.FC = () => {
  const experienceItems = [
    {
      icon: <Calendar size={16} />,
      title: 'Morning Routine',
      description: 'Receive gentle reminders about medications and appointments for the day'
    },
    {
      icon: <ShieldCheck size={16} />,
      title: 'Throughout Your Day',
      description: 'Your activity is monitored in the background, ensuring you\'re safe and active'
    },
    {
      icon: <User size={16} />,
      title: 'Staying Connected',
      description: 'Video call family members or message your care team with the tap of a button'
    },
    {
      icon: <Activity size={16} />,
      title: 'Health Tracking',
      description: 'Record and monitor your health metrics, sharing them with healthcare providers when needed'
    }
  ];

  return (
    <div className="relative">
      <div className="aspect-[4/3] relative animate-fade-in-up glass-card shadow-soft-lg p-6 md:p-8 rounded-2xl overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-mcn-blue-light via-mcn-blue to-mcn-blue-dark"></div>
        
        <div className="flex flex-col h-full">
          <div className="mb-8">
            <h3 className="text-2xl font-display font-semibold mb-2">Client Experience</h3>
            <p className="text-muted-foreground">How MCN works in your daily life</p>
          </div>
          
          <div className="space-y-6 flex-grow">
            {experienceItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientExperienceCard;
