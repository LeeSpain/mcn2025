
import React from 'react';
import { 
  MainDashboard, 
  HealthView, 
  SafetyMonitor, 
  ConnectHub,
  ShopGateway, 
  BbrainAssistant, 
  AccountSettings, 
  HelpSupport, 
  FamilyPortal, 
  CareManager,
} from './sections';
import StaffDashboard from './sections/StaffDashboard';
import ChatSection from './sections/ChatSection';

interface DashboardContentProps {
  activeSection: string;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ activeSection }) => {
  // Render the appropriate section based on the active id
  const renderContent = () => {
    switch(activeSection) {
      // Staff Portal Sections
      case 'staff':
        return <StaffDashboard />;
      case 'chat':
        return <ChatSection />;
      case 'clients':
        return <div>Client Management Content</div>;
      case 'support':
        return <div>Support Center Content</div>;
      case 'health-monitoring':
        return <div>Health Monitoring Content</div>;
      case 'education':
        return <div>Client Education Content</div>;
      case 'analytics':
        return <div>Staff Analytics Content</div>;
      case 'knowledge':
        return <div>Knowledge Base Content</div>;
      
      // Default member sections - should not be used now
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
        return <StaffDashboard />;
    }
  };

  return (
    <div className="dashboard-content">
      {renderContent()}
    </div>
  );
};

export default DashboardContent;
