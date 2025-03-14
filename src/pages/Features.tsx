
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { 
  Calendar, 
  ShieldCheck, 
  Phone, 
  ShoppingBag, 
  Activity, 
  ClipboardCheck,
  Zap,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  delay?: number;
  colorClass?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  details, 
  delay = 0,
  colorClass = "from-mcn-blue/10 to-transparent" 
}) => (
  <div 
    className={`p-6 glass-card hover:shadow-soft-lg transform transition-all duration-300 hover:translate-y-[-5px] flex flex-col bg-gradient-to-br ${colorClass} border border-gray-100`}
    style={{ 
      animationDelay: `${delay}s`,
    }}
  >
    <div className="w-12 h-12 rounded-xl bg-mcn-blue/10 flex items-center justify-center mb-5 text-mcn-blue">
      {icon}
    </div>
    <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground mb-4">{description}</p>
    <div className="mt-auto space-y-2">
      <h4 className="font-medium text-sm text-mcn-blue">{details[0]}</h4>
      <ul className="space-y-1">
        {details.slice(1).map((detail, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <div className="mt-1 text-mcn-blue flex-shrink-0">
              <Zap size={14} />
            </div>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const FeaturesPage = () => {
  const { t } = useLanguage();
  
  const gradientClasses = [
    "from-blue-50 to-transparent",
    "from-green-50 to-transparent",
    "from-purple-50 to-transparent",
    "from-orange-50 to-transparent",
    "from-pink-50 to-transparent",
    "from-yellow-50 to-transparent",
  ];
  
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-20 md:pt-24">
        <section className="py-20 bg-gradient-to-b from-white to-mcn-gray-light relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,119,182,0.15),transparent_70%)]"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="mb-3">
                <div className="chip mx-auto">{t('features.chip', 'MCN Platform')}</div>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight mb-6">{t('features.title', 'Complete Care Management Solution')}</h1>
              <p className="text-xl text-muted-foreground">
                {t('features.subtitle', 'MCN brings together essential tools for independent living and efficient care management in a single intuitive platform.')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <FeatureCard 
                icon={<Calendar size={24} />}
                title={t('features.careManager.title', 'Care Manager')}
                description={t('features.careManager.description', 'Track medications, appointments, and daily tasks with smart voice reminders through BBrain integration.')}
                details={[
                  t('features.careManager.benefits', 'Key Benefits:'),
                  t('features.careManager.benefit1', 'Voice-activated reminders for medication and appointments'),
                  t('features.careManager.benefit2', 'Customizable daily task schedules with priority settings'),
                  t('features.careManager.benefit3', 'Caregiver sharing for immediate status updates'),
                  t('features.careManager.benefit4', 'Medication history and compliance tracking')
                ]}
                colorClass={gradientClasses[0]}
                delay={0.1}
              />
              
              <FeatureCard 
                icon={<ShieldCheck size={24} />}
                title={t('features.safetyMonitor.title', 'Safety Monitor')}
                description={t('features.safetyMonitor.description', 'Keep track of activity patterns and vitals with automatic alerts for caregivers if abnormal patterns are detected.')}
                details={[
                  t('features.safetyMonitor.benefits', 'Key Benefits:'),
                  t('features.safetyMonitor.benefit1', 'Automatic detection of unusual activity patterns'),
                  t('features.safetyMonitor.benefit2', 'Integration with popular wearable devices'),
                  t('features.safetyMonitor.benefit3', 'Real-time caregiver alerts for safety concerns'),
                  t('features.safetyMonitor.benefit4', 'Historical activity analysis for trend identification')
                ]}
                colorClass={gradientClasses[1]}
                delay={0.2}
              />
              
              <FeatureCard 
                icon={<Phone size={24} />}
                title={t('features.connectHub.title', 'Connect Hub')}
                description={t('features.connectHub.description', 'Stay connected through high-quality video calls and messaging with family members and care professionals.')}
                details={[
                  t('features.connectHub.benefits', 'Key Benefits:'),
                  t('features.connectHub.benefit1', 'HD video calls with multiple participants'),
                  t('features.connectHub.benefit2', 'Text and voice messaging with read receipts'),
                  t('features.connectHub.benefit3', 'Media sharing for photos and documents'),
                  t('features.connectHub.benefit4', 'Invite system for adding family members to care circle')
                ]}
                colorClass={gradientClasses[2]}
                delay={0.3}
              />
              
              <FeatureCard 
                icon={<ShoppingBag size={24} />}
                title={t('features.shopGateway.title', 'Shop Gateway')}
                description={t('features.shopGateway.description', 'Access essential safety equipment and services through an integrated shopping experience with Nettie.')}
                details={[
                  t('features.shopGateway.benefits', 'Key Benefits:'),
                  t('features.shopGateway.benefit1', 'Curated safety equipment recommendations'),
                  t('features.shopGateway.benefit2', 'Seamless checkout process with saved payment methods'),
                  t('features.shopGateway.benefit3', 'Add-on BBrain services for enhanced functionality'),
                  t('features.shopGateway.benefit4', 'Order tracking and delivery updates')
                ]}
                colorClass={gradientClasses[3]}
                delay={0.4}
              />
              
              <FeatureCard 
                icon={<Activity size={24} />}
                title={t('features.healthView.title', 'Health View')}
                description={t('features.healthView.description', 'Monitor vital health statistics with beautiful visualizations and easy sharing with healthcare providers.')}
                details={[
                  t('features.healthView.benefits', 'Key Benefits:'),
                  t('features.healthView.benefit1', 'Visual tracking of key health metrics over time'),
                  t('features.healthView.benefit2', 'Secure sharing with healthcare providers'),
                  t('features.healthView.benefit3', 'Integration with medical devices and wearables'),
                  t('features.healthView.benefit4', 'Customizable health goals and progress tracking')
                ]}
                colorClass={gradientClasses[4]}
                delay={0.5}
              />
              
              <FeatureCard 
                icon={<ClipboardCheck size={24} />}
                title={t('features.taskMaster.title', 'TaskMaster')}
                description={t('features.taskMaster.description', 'AI-powered smart task prioritization for caregivers to optimize client care and reduce administrative burden.')}
                details={[
                  t('features.taskMaster.benefits', 'Key Benefits:'),
                  t('features.taskMaster.benefit1', 'AI-driven priority scoring of client tasks'),
                  t('features.taskMaster.benefit2', 'Automatic task creation based on client data'),
                  t('features.taskMaster.benefit3', 'Streamlined documentation and reporting'),
                  t('features.taskMaster.benefit4', 'Time-saving templates for common care tasks')
                ]}
                colorClass={gradientClasses[5]}
                delay={0.6}
              />
            </div>
            
            <div className="text-center p-8 bg-mcn-blue/5 rounded-xl shadow-sm border border-mcn-blue/10">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">{t('features.cta.title', 'Ready to experience MCN?')}</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup" className="primary-button flex items-center justify-center">
                  {t('features.cta.getStarted', 'Get Started')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/contact" className="outline-button flex items-center justify-center">
                  {t('features.cta.contact', 'Contact Sales')}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
