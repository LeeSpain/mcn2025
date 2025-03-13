
import React, { useState } from 'react';
import { 
  Home, 
  Calendar, 
  Heart, 
  Shield, 
  MessageSquare, 
  ShoppingBag, 
  Mic, 
  Settings, 
  HelpCircle, 
  Users, 
  Menu, 
  X,
  Bell,
  User
} from 'lucide-react';
import { useTranslation } from '../../../src/context/LanguageContext';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import MainDashboard from './sections/MainDashboard';
import CareManager from './sections/CareManager';
import HealthView from './sections/HealthView';
import SafetyMonitor from './sections/SafetyMonitor';
import ConnectHub from './sections/ConnectHub';
import ShopGateway from './sections/ShopGateway';
import BbrainAssistant from './sections/BbrainAssistant';
import AccountSettings from './sections/AccountSettings';
import HelpSupport from './sections/HelpSupport';
import FamilyPortal from './sections/FamilyPortal';

// Define navigation items with their respective icons
export const dashboardNavItems = [
  { id: 'home', label: 'Dashboard', icon: Home },
  { id: 'care', label: 'Care Manager', icon: Calendar },
  { id: 'health', label: 'Health View', icon: Heart },
  { id: 'safety', label: 'Safety Monitor', icon: Shield },
  { id: 'connect', label: 'Connect Hub', icon: MessageSquare },
  { id: 'shop', label: 'Shop Gateway', icon: ShoppingBag },
  { id: 'bbrain', label: 'BBrain Assistant', icon: Mic },
  { id: 'account', label: 'Account & Settings', icon: Settings },
  { id: 'help', label: 'Help & Support', icon: HelpCircle },
  { id: 'family', label: 'Family Portal', icon: Users },
];

const DashboardLayout: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { translate } = useTranslation();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Render the active section content
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <MainDashboard />;
      case 'care':
        return <CareManager />;
      case 'health':
        return <HealthView />;
      case 'safety':
        return <SafetyMonitor />;
      case 'connect':
        return <ConnectHub />;
      case 'shop':
        return <ShopGateway />;
      case 'bbrain':
        return <BbrainAssistant />;
      case 'account':
        return <AccountSettings />;
      case 'help':
        return <HelpSupport />;
      case 'family':
        return <FamilyPortal />;
      default:
        return <MainDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DashboardHeader toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar 
          navItems={dashboardNavItems} 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isOpen={sidebarOpen}
        />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 transition-all duration-300">
          <div className="max-w-7xl mx-auto">
            {renderSection()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
