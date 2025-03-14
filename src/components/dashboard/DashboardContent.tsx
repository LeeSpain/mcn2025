
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
