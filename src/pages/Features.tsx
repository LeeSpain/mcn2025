
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

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, details, delay = 0 }) => (
  <div 
    className="p-6 glass-card hover:shadow-soft-lg transform transition-all duration-300 hover:translate-y-[-5px] flex flex-col"
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
      <h4 className="font-medium text-sm text-mcn-blue">Key Benefits:</h4>
      <ul className="space-y-1">
        {details.map((detail, index) => (
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
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-20 md:pt-24">
        <section className="py-20 bg-mcn-gray-light relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,119,182,0.1),transparent_70%)]"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="mb-3">
                <div className="chip mx-auto">MCN Platform</div>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight mb-6">Complete Care Management Solution</h1>
              <p className="text-xl text-muted-foreground">
                MCN brings together essential tools for independent living and efficient care management in a single intuitive platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <FeatureCard 
                icon={<Calendar size={24} />}
                title="Care Manager"
                description="Track medications, appointments, and daily tasks with smart voice reminders through BBrain integration."
                details={[
                  "Voice-activated reminders for medication and appointments",
                  "Customizable daily task schedules with priority settings",
                  "Caregiver sharing for immediate status updates",
                  "Medication history and compliance tracking"
                ]}
                delay={0.1}
              />
              
              <FeatureCard 
                icon={<ShieldCheck size={24} />}
                title="Safety Monitor"
                description="Keep track of activity patterns and vitals with automatic alerts for caregivers if abnormal patterns are detected."
                details={[
                  "Automatic detection of unusual activity patterns",
                  "Integration with popular wearable devices",
                  "Real-time caregiver alerts for safety concerns",
                  "Historical activity analysis for trend identification"
                ]}
                delay={0.2}
              />
              
              <FeatureCard 
                icon={<Phone size={24} />}
                title="Connect Hub"
                description="Stay connected through high-quality video calls and messaging with family members and care professionals."
                details={[
                  "HD video calls with multiple participants",
                  "Text and voice messaging with read receipts",
                  "Media sharing for photos and documents",
                  "Invite system for adding family members to care circle"
                ]}
                delay={0.3}
              />
              
              <FeatureCard 
                icon={<ShoppingBag size={24} />}
                title="Shop Gateway"
                description="Access essential safety equipment and services through an integrated shopping experience with Nettie."
                details={[
                  "Curated safety equipment recommendations",
                  "Seamless checkout process with saved payment methods",
                  "Add-on BBrain services for enhanced functionality",
                  "Order tracking and delivery updates"
                ]}
                delay={0.4}
              />
              
              <FeatureCard 
                icon={<Activity size={24} />}
                title="Health View"
                description="Monitor vital health statistics with beautiful visualizations and easy sharing with healthcare providers."
                details={[
                  "Visual tracking of key health metrics over time",
                  "Secure sharing with healthcare providers",
                  "Integration with medical devices and wearables",
                  "Customizable health goals and progress tracking"
                ]}
                delay={0.5}
              />
              
              <FeatureCard 
                icon={<ClipboardCheck size={24} />}
                title="TaskMaster"
                description="AI-powered smart task prioritization for caregivers to optimize client care and reduce administrative burden."
                details={[
                  "AI-driven priority scoring of client tasks",
                  "Automatic task creation based on client data",
                  "Streamlined documentation and reporting",
                  "Time-saving templates for common care tasks"
                ]}
                delay={0.6}
              />
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">Ready to experience MCN?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup" className="primary-button flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/contact" className="outline-button flex items-center justify-center">
                  Contact Sales
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
