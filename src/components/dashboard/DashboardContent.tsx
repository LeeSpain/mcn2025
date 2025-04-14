
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
import StaffDashboard from './sections/StaffDashboard';
import ClientManagement from './sections/staff/ClientManagement';
import ChatSection from './sections/ChatSection';
import LiveAssistance from './sections/staff/LiveAssistance';
import TechnicalSupport from './sections/staff/TechnicalSupport';
import HealthMonitoring from './sections/staff/HealthMonitoring';
import ClientEducation from './sections/staff/ClientEducation';
import Analytics from './sections/staff/Analytics';
import KnowledgeLibrary from './sections/staff/KnowledgeLibrary';
import NurseDashboard from './sections/nurse/NurseDashboard';
import ClientCaseload from './sections/nurse/ClientCaseload';
import NurseChat from './sections/nurse/NurseChat';
import VisitSchedule from './sections/nurse/VisitSchedule';
import CarePlans from './sections/nurse/CarePlans';
import ClinicalMonitoring from './sections/nurse/ClinicalMonitoring';
import MedicationManagement from './sections/nurse/MedicationManagement';
import DocumentManagement from './sections/nurse/DocumentManagement';
import QualitySafety from './sections/nurse/QualitySafety';
import VitalsTracking from './sections/nurse/VitalsTracking';
import Appointments from './sections/nurse/Appointments';
import PatientEducation from './sections/nurse/patient-education/PatientEducation';
import ClinicalResources from './sections/nurse/ClinicalResources';

interface DashboardContentProps {
  activeSection: string;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ activeSection }) => {
  // Render the appropriate component based on the active section
  const renderContent = () => {
    switch (activeSection) {
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
        return <LiveAssistance />;
      case 'health-monitoring':
        return <HealthMonitoring />;
      case 'education':
        return <ClientEducation />;
      case 'analytics':
        return <Analytics />;
      case 'knowledge':
        return <KnowledgeLibrary />;
        
      // Nurse Portal Sections
      case 'nurse-dashboard':
        return <NurseDashboard />;
      case 'client-caseload':
        return <ClientCaseload />;
      case 'nurse-chat':
        return <NurseChat />;
      case 'visit-schedule':
        return <VisitSchedule />;
      case 'care-plans':
        return <CarePlans />;
      case 'clinical-monitoring':
        return <ClinicalMonitoring />;
      case 'medication-mgmt':
        return <MedicationManagement />;
      case 'documentation':
        return <DocumentManagement />;
      case 'quality-safety':
        return <QualitySafety />;
      case 'vitals':
        return <VitalsTracking />;
      case 'appointments':
        return <Appointments />;
      case 'patient-education':
        return <PatientEducation />;
      case 'clinical-resources':
        return <ClinicalResources />;
      case 'nurse-analytics':
        return <Analytics />;
        
      // Default case
      default:
        return <MainDashboard />;
    }
  };

  return (
    <div className="w-full">
      {renderContent()}
    </div>
  );
};

export default DashboardContent;
