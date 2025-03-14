
import React from 'react';
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
import ChatSection from './sections/ChatSection';
import StaffDashboard from './sections/StaffDashboard';
import HealthMonitoring from './sections/staff/HealthMonitoring';
import ClientEducation from './sections/staff/ClientEducation';
import AdminTools from './sections/staff/AdminTools';
import LiveAssistance from './sections/staff/LiveAssistance';
import TechnicalSupport from './sections/staff/TechnicalSupport';
import ClientManagementCard from './sections/staff/dashboard/ClientManagementCard';

interface DashboardContentProps {
  activeSection: string;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ activeSection }) => {
  // Staff portal routes
  const staffRoutes = ['staff', 'clients', 'support', 'health-monitoring', 'education', 'analytics', 'knowledge'];
  
  // If we're on a staff route, check which specific section to show
  if (staffRoutes.includes(activeSection)) {
    switch (activeSection) {
      case 'staff':
        return <StaffDashboard />;
      case 'clients':
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Client Management</h1>
            <ClientManagementCard />
          </div>
        );
      case 'support':
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Support Center</h1>
            <LiveAssistance />
            <TechnicalSupport />
          </div>
        );
      case 'health-monitoring':
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Health Monitoring</h1>
            <HealthMonitoring />
          </div>
        );
      case 'education':
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Client Education</h1>
            <ClientEducation />
          </div>
        );
      case 'analytics':
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Staff Analytics</h1>
            <p>Staff performance analytics will appear here.</p>
          </div>
        );
      case 'knowledge':
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Knowledge Base</h1>
            <p>Support documentation and articles will appear here.</p>
          </div>
        );
      default:
        return <StaffDashboard />;
    }
  }
  
  // For member dashboard routes, use the existing switch statement
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
    case 'chat':
      return <ChatSection />;
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

export default DashboardContent;
