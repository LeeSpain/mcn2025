
import React from 'react';
import { 
  Calendar, 
  ShieldCheck, 
  Phone, 
  ShoppingBag, 
  Activity, 
  ClipboardCheck
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay = 0 }) => (
  <div 
    className="p-6 glass-card hover:shadow-soft-lg transform transition-all duration-300 hover:translate-y-[-5px] min-h-[320px] flex flex-col"
    style={{ 
      animationDelay: `${delay}s`,
    }}
  >
    <div className="w-12 h-12 rounded-xl bg-mcn-blue/10 flex items-center justify-center mb-5 text-mcn-blue">
      {icon}
    </div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description flex-grow">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="features" className="section-padding bg-mcn-gray-light relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,119,182,0.1),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-3">
            <div className="chip mx-auto">{t('features.chip', 'Core Features')}</div>
          </div>
          <h2 className="section-title">{t('features.title', 'One Platform, Complete Care Solution')}</h2>
          <p className="section-subtitle">
            {t('features.subtitle', 'MCN brings together essential tools for independent living and efficient care management in a single intuitive platform.')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="animate-fade-in-up">
            <Feature 
              icon={<Calendar size={24} />}
              title={t('features.careManager.title', 'Care Manager')}
              description={t('features.careManager.description', 'Track medications, appointments, and daily tasks with smart voice reminders through BBrain integration.')}
              delay={0.1}
            />
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Feature 
              icon={<ShieldCheck size={24} />}
              title={t('features.safetyMonitor.title', 'Safety Monitor')}
              description={t('features.safetyMonitor.description', 'Keep track of activity patterns and vitals with automatic alerts for caregivers if abnormal patterns are detected.')}
              delay={0.2}
            />
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Feature 
              icon={<Phone size={24} />}
              title={t('features.connectHub.title', 'Connect Hub')}
              description={t('features.connectHub.description', 'Stay connected through high-quality video calls and messaging with family members and care professionals.')}
              delay={0.3}
            />
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Feature 
              icon={<ShoppingBag size={24} />}
              title={t('features.shopGateway.title', 'Shop Gateway')}
              description={t('features.shopGateway.description', 'Access essential safety equipment and services through an integrated shopping experience with Nettie.')}
              delay={0.4}
            />
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Feature 
              icon={<Activity size={24} />}
              title={t('features.healthView.title', 'Health View')}
              description={t('features.healthView.description', 'Monitor vital health statistics with beautiful visualizations and easy sharing with healthcare providers.')}
              delay={0.5}
            />
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Feature 
              icon={<ClipboardCheck size={24} />}
              title={t('features.taskMaster.title', 'TaskMaster')}
              description={t('features.taskMaster.description', 'AI-powered smart task prioritization for caregivers to optimize client care and reduce administrative burden.')}
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
