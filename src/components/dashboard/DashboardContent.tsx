
import React from 'react';
import StaffDashboard from './sections/StaffDashboard';
import ChatSection from './sections/ChatSection';
import HealthView from './sections/HealthView';
import SafetyMonitor from './sections/SafetyMonitor';
import ConnectHub from './sections/ConnectHub';
import ShopGateway from './sections/ShopGateway';
import BbrainAssistant from './sections/BbrainAssistant';
import AccountSettings from './sections/AccountSettings';
import HelpSupport from './sections/HelpSupport';
import FamilyPortal from './sections/FamilyPortal';
import CareManager from './sections/CareManager';
import MainDashboard from './sections/MainDashboard';
import ClientManagement from './sections/staff/ClientManagement';
import SupportCenter from './sections/staff/SupportCenter';
import HealthMonitoring from './sections/staff/HealthMonitoring';
import ClientEducation from './sections/staff/ClientEducation';
import StaffAnalytics from './sections/staff/StaffAnalytics';
import KnowledgeLibrary from './sections/staff/KnowledgeLibrary';

interface DashboardContentProps {
  activeSection: string;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ activeSection }) => {
  // Render the appropriate section based on the active id
  const renderContent = () => {
    switch(activeSection) {
      // Member Portal Sections
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
        
      // Staff Portal Sections
      case 'staff':
        return <StaffDashboard />;
      case 'chat':
        return <ChatSection />;
      case 'clients':
        return <ClientManagement />;
      case 'support':
        return <SupportCenter />;
      case 'health-monitoring':
        return <HealthMonitoring />;
      case 'education':
        return <ClientEducation />;
      case 'analytics':
        return <StaffAnalytics />;
      case 'knowledge':
        return <KnowledgeLibrary />;
      
      default:
        // Default to the member dashboard if no matching section
        return <MainDashboard />;
    }
  };

  return (
    <div className="dashboard-content">
      {renderContent()}
    </div>
  );
};

export default DashboardContent;
