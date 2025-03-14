import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  Settings, 
  MessageCircle,
  BarChart,
  BookOpen,
  FileText,
  Heart,
  Home,
  Shield,
  Link2,
  ShoppingCart,
  Brain,
  UserCog,
  HelpCircle,
  UsersRound,
  Stethoscope,
  Calendar,
  Clipboard,
  Activity,
  AlarmClock,
  AlertTriangle,
  BarChart2,
  BookText,
  Pill,
  HeartPulse,
  FileClock,
  FileCheck,
  GraduationCap,
  LineChart,
  Video
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import DashboardContent from './DashboardContent';
import { useLocation } from 'react-router-dom';

// Define navigation items with their respective icons
export const dashboardNavItems = [
  // Member Portal items
  { id: 'home', label: 'Home Dashboard', icon: Home, isMember: true },
  { id: 'care', label: 'Care Manager', icon: Heart, isMember: true },
  { id: 'health', label: 'Health View', icon: LayoutDashboard, isMember: true },
  { id: 'safety', label: 'Safety Monitor', icon: Shield, isMember: true },
  { id: 'connect', label: 'Connect Hub', icon: Link2, isMember: true },
  { id: 'shop', label: 'Shop Gateway', icon: ShoppingCart, isMember: true },
  { id: 'bbrain', label: 'BBrain Assistant', icon: Brain, isMember: true },
  { id: 'account', label: 'Account Settings', icon: UserCog, isMember: true },
  { id: 'help', label: 'Help & Support', icon: HelpCircle, isMember: true },
  { id: 'family', label: 'Family Portal', icon: UsersRound, isMember: true },
  
  // Staff Portal items
  { id: 'staff', label: 'Dashboard', icon: LayoutDashboard, isStaff: true },
  { id: 'chat', label: 'Chat', icon: MessageCircle, isStaff: true },
  { id: 'clients', label: 'Client Management', icon: Users, isStaff: true },
  { id: 'support', label: 'Support Center', icon: MessageSquare, isStaff: true },
  { id: 'health-monitoring', label: 'Health Monitoring', icon: Heart, isStaff: true },
  { id: 'education', label: 'Client Education', icon: BookOpen, isStaff: true },
  { id: 'analytics', label: 'Staff Analytics', icon: BarChart, isStaff: true },
  { id: 'knowledge', label: 'Knowledge Library', icon: FileText, isStaff: true },
  
  // Nurse Portal items
  { id: 'nurse-dashboard', label: 'Nurse Dashboard', icon: Stethoscope, isNurse: true },
  { id: 'client-caseload', label: 'Client Caseload', icon: Users, isNurse: true },
  { id: 'visit-schedule', label: 'Relex Schedule', icon: Video, isNurse: true },
  { id: 'care-plans', label: 'Care Plans', icon: Clipboard, isNurse: true },
  { id: 'clinical-monitoring', label: 'Clinical Monitoring', icon: Activity, isNurse: true },
  { id: 'medication-mgmt', label: 'Medication Management', icon: Pill, isNurse: true },
  { id: 'documentation', label: 'Documentation', icon: BookText, isNurse: true },
  { id: 'quality-safety', label: 'Quality & Safety', icon: Shield, isNurse: true },
  { id: 'vitals', label: 'Vitals Tracking', icon: HeartPulse, isNurse: true },
  { id: 'appointments', label: 'Appointments', icon: FileClock, isNurse: true },
  { id: 'patient-education', label: 'Patient Education', icon: GraduationCap, isNurse: true },
  { id: 'clinical-resources', label: 'Clinical Resources', icon: BookOpen, isNurse: true },
  { id: 'nurse-analytics', label: 'Analytics', icon: LineChart, isNurse: true },
];

const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isStaffPortal, setIsStaffPortal] = useState(false);
  const [isNursePortal, setIsNursePortal] = useState(false);
  const { t } = useLanguage();

  // Set active section based on URL hash if present
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
      
      // Determine if we're in staff portal or nurse portal
      const isStaff = dashboardNavItems.find(item => item.id === hash)?.isStaff || false;
      const isNurse = dashboardNavItems.find(item => item.id === hash)?.isNurse || false;
      
      setIsStaffPortal(isStaff);
      setIsNursePortal(isNurse);
    }
  }, [location.hash]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Filter nav items based on whether we're in the staff, nurse or member portal
  const filteredNavItems = dashboardNavItems.filter(item => 
    isStaffPortal ? item.isStaff : isNursePortal ? item.isNurse : item.isMember
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DashboardHeader 
        toggleSidebar={toggleSidebar} 
        sidebarOpen={sidebarOpen} 
        isStaffPortal={isStaffPortal}
        isNursePortal={isNursePortal}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar 
          navItems={filteredNavItems} 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isOpen={sidebarOpen}
          isStaffPortal={isStaffPortal}
          isNursePortal={isNursePortal}
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
