
import React, { useState, useEffect } from 'react';
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
  MessageCircle,
  Headphones,
  BarChart,
  BookOpen,
  FileText
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import DashboardContent from './DashboardContent';
import { useLocation } from 'react-router-dom';

// Define navigation items with their respective icons
export const dashboardNavItems = [
  // Staff Portal items
  { id: 'staff', label: 'Staff Portal', icon: Headphones, isStaff: true },
  { id: 'clients', label: 'Client Management', icon: Users, isStaff: true },
  { id: 'support', label: 'Support Center', icon: MessageSquare, isStaff: true },
  { id: 'health-monitoring', label: 'Health Monitoring', icon: Heart, isStaff: true },
  { id: 'education', label: 'Client Education', icon: BookOpen, isStaff: true },
  { id: 'analytics', label: 'Staff Analytics', icon: BarChart, isStaff: true },
  { id: 'knowledge', label: 'Knowledge Base', icon: FileText, isStaff: true },
  
  // Member Dashboard items
  { id: 'home', label: 'Dashboard', icon: Home },
  { id: 'chat', label: 'Chat', icon: MessageCircle },
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
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { t } = useLanguage();

  // Set active section based on URL hash if present
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && dashboardNavItems.some(item => item.id === hash)) {
      setActiveSection(hash);
    }
  }, [location.hash]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

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
            <DashboardContent activeSection={activeSection} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
