
import React from 'react';
import { Calendar, ShieldCheck, User, Activity } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ClientExperienceCard: React.FC = () => {
  const { t } = useLanguage();
  
  const experienceItems = [
    {
      icon: <Calendar size={16} />,
      title: t('clients.experience.morning'),
      description: t('clients.experience.morning.description')
    },
    {
      icon: <ShieldCheck size={16} />,
      title: t('clients.experience.day'),
      description: t('clients.experience.day.description')
    },
    {
      icon: <User size={16} />,
      title: t('clients.experience.connected'),
      description: t('clients.experience.connected.description')
    },
    {
      icon: <Activity size={16} />,
      title: t('clients.experience.health'),
      description: t('clients.experience.health.description')
    }
  ];

  return (
    <div className="relative">
      <div className="aspect-[4/3] relative animate-fade-in-up glass-card shadow-soft-lg p-6 md:p-8 rounded-2xl overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-mcn-blue-light via-mcn-blue to-mcn-blue-dark"></div>
        
        <div className="flex flex-col h-full">
          <div className="mb-8">
            <h3 className="text-2xl font-display font-semibold mb-2">{t('clients.experience.title')}</h3>
            <p className="text-muted-foreground">{t('clients.experience.subtitle')}</p>
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
