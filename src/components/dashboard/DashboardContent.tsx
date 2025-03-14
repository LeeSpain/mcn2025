
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

interface DashboardContentProps {
  activeSection: string;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ activeSection }) => {
  // For the staff section, we'll show the dedicated staff portal
  if (activeSection === 'staff') {
    return <StaffDashboard />;
  }
  
  // For all other sections, use the existing switch statement
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
