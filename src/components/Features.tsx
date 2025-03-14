
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
  colorClass?: string;
  iconColorClass?: string;
}

const Feature: React.FC<FeatureProps> = ({ 
  icon, 
  title, 
  description, 
  delay = 0, 
  colorClass = "from-mcn-blue/5 to-transparent",
  iconColorClass = "bg-mcn-blue/10 text-mcn-blue"
}) => (
  <div 
    className={`p-6 glass-card hover:shadow-soft-lg transform transition-all duration-300 hover:translate-y-[-5px] min-h-[320px] flex flex-col bg-gradient-to-br ${colorClass} border border-gray-100 rounded-xl relative overflow-hidden`}
    style={{ 
      animationDelay: `${delay}s`,
    }}
  >
    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClass.replace('from-', 'from-').replace('/5', '/30').replace('to-transparent', 'to-white/0')}`}></div>
    <div className={`w-12 h-12 rounded-xl ${iconColorClass} flex items-center justify-center mb-5`}>
      {icon}
    </div>
    <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const { t } = useLanguage();
  
  const featureStyles = [
    {
      colorClass: "from-blue-50 to-transparent",
      iconColorClass: "bg-blue-100 text-blue-600"
    },
    {
      colorClass: "from-green-50 to-transparent",
      iconColorClass: "bg-green-100 text-green-600"
    },
    {
      colorClass: "from-purple-50 to-transparent",
      iconColorClass: "bg-purple-100 text-purple-600"
    },
    {
      colorClass: "from-amber-50 to-transparent",
      iconColorClass: "bg-amber-100 text-amber-600"
    },
    {
      colorClass: "from-pink-50 to-transparent",
      iconColorClass: "bg-pink-100 text-pink-600"
    },
    {
      colorClass: "from-cyan-50 to-transparent",
      iconColorClass: "bg-cyan-100 text-cyan-600"
    },
  ];
  
  return (
    <section id="features" className="section-padding bg-gradient-to-b from-white to-mcn-gray-light relative overflow-hidden">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,119,182,0.15),transparent_70%)]"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/4 bg-blue-50/40 rounded-bl-[100px] -translate-y-1/4 translate-x-1/4 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-green-50/30 rounded-tr-[80px] blur-3xl"></div>
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
              colorClass={featureStyles[0].colorClass}
              iconColorClass={featureStyles[0].iconColorClass}
              delay={0.1}
            />
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Feature 
              icon={<ShieldCheck size={24} />}
              title={t('features.safetyMonitor.title', 'Safety Monitor')}
              description={t('features.safetyMonitor.description', 'Keep track of activity patterns and vitals with automatic alerts for caregivers if abnormal patterns are detected.')}
              colorClass={featureStyles[1].colorClass}
              iconColorClass={featureStyles[1].iconColorClass}
              delay={0.2}
            />
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Feature 
              icon={<Phone size={24} />}
              title={t('features.connectHub.title', 'Connect Hub')}
              description={t('features.connectHub.description', 'Stay connected through high-quality video calls and messaging with family members and care professionals.')}
              colorClass={featureStyles[2].colorClass}
              iconColorClass={featureStyles[2].iconColorClass}
              delay={0.3}
            />
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Feature 
              icon={<ShoppingBag size={24} />}
              title={t('features.shopGateway.title', 'Shop Gateway')}
              description={t('features.shopGateway.description', 'Access essential safety equipment and services through an integrated shopping experience with Nettie.')}
              colorClass={featureStyles[3].colorClass}
              iconColorClass={featureStyles[3].iconColorClass}
              delay={0.4}
            />
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Feature 
              icon={<Activity size={24} />}
              title={t('features.healthView.title', 'Health View')}
              description={t('features.healthView.description', 'Monitor vital health statistics with beautiful visualizations and easy sharing with healthcare providers.')}
              colorClass={featureStyles[4].colorClass}
              iconColorClass={featureStyles[4].iconColorClass}
              delay={0.5}
            />
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Feature 
              icon={<ClipboardCheck size={24} />}
              title={t('features.taskMaster.title', 'TaskMaster')}
              description={t('features.taskMaster.description', 'AI-powered smart task prioritization for caregivers to optimize client care and reduce administrative burden.')}
              colorClass={featureStyles[5].colorClass}
              iconColorClass={featureStyles[5].iconColorClass}
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
