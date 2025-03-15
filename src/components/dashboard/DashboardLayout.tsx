
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

// Define navigation items with their respective icons and translation keys
export const dashboardNavItems = [
  // Member Portal items
  { id: 'home', label: 'dashboard.nav.home', icon: Home, isMember: true },
  { id: 'care', label: 'dashboard.nav.care', icon: Heart, isMember: true },
  { id: 'health', label: 'dashboard.nav.health', icon: HeartPulse, isMember: true },
  { id: 'safety', label: 'dashboard.nav.safety', icon: Shield, isMember: true },
  { id: 'connect', label: 'dashboard.nav.connect', icon: Link2, isMember: true },
  { id: 'shop', label: 'dashboard.nav.shop', icon: ShoppingCart, isMember: true },
  { id: 'bbrain', label: 'dashboard.nav.bbrain', icon: Brain, isMember: true },
  { id: 'account', label: 'dashboard.nav.account', icon: UserCog, isMember: true },
  { id: 'help', label: 'dashboard.nav.help', icon: HelpCircle, isMember: true },
  { id: 'family', label: 'dashboard.nav.family', icon: UsersRound, isMember: true },
  
  // Customer Service Portal items
  { id: 'staff', label: 'dashboard.nav.staff', icon: LayoutDashboard, isStaff: true },
  { id: 'chat', label: 'dashboard.nav.chat', icon: MessageCircle, isStaff: true },
  { id: 'clients', label: 'dashboard.nav.clients', icon: Users, isStaff: true },
  { id: 'support', label: 'dashboard.nav.support', icon: MessageSquare, isStaff: true },
  { id: 'health-monitoring', label: 'dashboard.nav.healthMonitoring', icon: Heart, isStaff: true },
  { id: 'education', label: 'dashboard.nav.education', icon: BookOpen, isStaff: true },
  { id: 'analytics', label: 'dashboard.nav.analytics', icon: BarChart, isStaff: true },
  { id: 'knowledge', label: 'dashboard.nav.knowledge', icon: FileText, isStaff: true },
  
  // Nurse Portal items
  { id: 'nurse-dashboard', label: 'dashboard.nav.nurseDashboard', icon: Stethoscope, isNurse: true },
  { id: 'client-caseload', label: 'dashboard.nav.clientCaseload', icon: Users, isNurse: true },
  { id: 'nurse-chat', label: 'dashboard.nav.nurseChat', icon: MessageCircle, isNurse: true },
  { id: 'visit-schedule', label: 'dashboard.nav.visitSchedule', icon: Video, isNurse: true },
  { id: 'care-plans', label: 'dashboard.nav.carePlans', icon: Clipboard, isNurse: true },
  { id: 'clinical-monitoring', label: 'dashboard.nav.clinicalMonitoring', icon: Activity, isNurse: true },
  { id: 'medication-mgmt', label: 'dashboard.nav.medicationMgmt', icon: Pill, isNurse: true },
  { id: 'documentation', label: 'dashboard.nav.documentation', icon: BookText, isNurse: true },
  { id: 'quality-safety', label: 'dashboard.nav.qualitySafety', icon: Shield, isNurse: true },
  { id: 'vitals', label: 'dashboard.nav.vitals', icon: HeartPulse, isNurse: true },
  { id: 'appointments', label: 'dashboard.nav.appointments', icon: FileClock, isNurse: true },
  { id: 'patient-education', label: 'dashboard.nav.patientEducation', icon: GraduationCap, isNurse: true },
  { id: 'clinical-resources', label: 'dashboard.nav.clinicalResources', icon: BookOpen, isNurse: true },
  { id: 'nurse-analytics', label: 'dashboard.nav.nurseAnalytics', icon: LineChart, isNurse: true },
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
    <div className="flex flex-col min-h-screen w-full bg-gray-50 overflow-hidden">
      <DashboardHeader 
        toggleSidebar={toggleSidebar} 
        sidebarOpen={sidebarOpen} 
        isStaffPortal={isStaffPortal}
        isNursePortal={isNursePortal}
      />
      
      <div className="flex flex-1 w-full overflow-hidden">
        <DashboardSidebar 
          navItems={filteredNavItems} 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isOpen={sidebarOpen}
          isStaffPortal={isStaffPortal}
          isNursePortal={isNursePortal}
          t={t}
        />
        
        <main className="flex-1 overflow-auto p-4 md:p-6 transition-all duration-300 w-full">
          <DashboardContent activeSection={activeSection} />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
