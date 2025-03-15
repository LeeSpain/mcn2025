
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import MemberDashboard from '../dashboard/sections/MainDashboard';
import StaffDashboard from '../dashboard/sections/StaffDashboard';
import NurseDashboard from './sections/nurse/NurseDashboard';
import SupportSection from './sections/ChatSection';
import ChatSection from './sections/ChatSection';
import ClientManagement from './sections/staff/ClientManagement';
import HealthMonitoring from './sections/staff/HealthMonitoring';
import ClientEducation from './sections/staff/ClientEducation';
import StaffAnalytics from './sections/staff/StaffAnalytics';
import KnowledgeLibrary from './sections/staff/KnowledgeLibrary';
import FamilyPortal from './sections/FamilyPortal';
import CareManager from './sections/CareManager';
import HealthView from './sections/HealthView';
import SafetyMonitor from './sections/SafetyMonitor';
import ConnectHub from './sections/ConnectHub';
import ShopGateway from './sections/ShopGateway';
import BBrainAssistant from './sections/BbrainAssistant';
import AIAgentDashboard from './sections/AIAgentDashboard';
import AccountSettings from './sections/AccountSettings';
import HelpSupport from './sections/HelpSupport';
import VisitSchedule from './sections/nurse/VisitSchedule';
import CarePlans from './sections/nurse/CarePlans';
import ClinicalMonitoring from './sections/nurse/ClinicalMonitoring';
import ClientCaseload from './sections/nurse/ClientCaseload';
import MedicationManagement from './sections/nurse/MedicationManagement';
import DocumentManagement from './sections/nurse/DocumentManagement';
import QualitySafety from './sections/nurse/QualitySafety';
import VitalsTracking from './sections/nurse/VitalsTracking';

// Import the needed components
import Appointments from './sections/nurse/Appointments';
import PatientEducation from './sections/nurse/PatientEducation';
import ClinicalResources from './sections/nurse/ClinicalResources';

// Create placeholder components for the missing modules
const Documentation = () => (
  <div>
    <h2>Documentation</h2>
    <p>Access and manage patient documentation here.</p>
  </div>
);

const QualitySafetyPlaceholder = () => (
  <div>
    <h2>Quality & Safety</h2>
    <p>Monitor quality and safety metrics here.</p>
  </div>
);

const NurseAnalytics = () => (
  <div>
    <h2>Nurse Analytics</h2>
    <p>View nursing performance analytics here.</p>
  </div>
);

// Import the NurseChat component
import NurseChat from './sections/nurse/NurseChat';

const DashboardContent: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-full">
      {/* Member Portal Sections */}
      {activeSection === 'home' && <MemberDashboard />}
      {activeSection === 'care' && <CareManager />}
      {activeSection === 'health' && <HealthView />}
      {activeSection === 'safety' && <SafetyMonitor />}
      {activeSection === 'connect' && <ConnectHub />}
      {activeSection === 'shop' && <ShopGateway />}
      {activeSection === 'bbrain' && <BBrainAssistant />}
      {activeSection === 'ai-agent' && <AIAgentDashboard />}
      {activeSection === 'account' && <AccountSettings />}
      {activeSection === 'help' && <HelpSupport />}
      {activeSection === 'family' && <FamilyPortal />}

      {/* Staff Portal Sections */}
      {activeSection === 'staff' && <StaffDashboard />}
      {activeSection === 'chat' && <ChatSection />}
      {activeSection === 'clients' && <ClientManagement />}
      {activeSection === 'support' && <SupportSection />}
      {activeSection === 'health-monitoring' && <HealthMonitoring />}
      {activeSection === 'education' && <ClientEducation />}
      {activeSection === 'analytics' && <StaffAnalytics />}
      {activeSection === 'knowledge' && <KnowledgeLibrary />}

      {/* Nurse Portal Sections */}
      {activeSection === 'nurse-dashboard' && <NurseDashboard />}
      {activeSection === 'client-caseload' && <ClientCaseload />}
      {activeSection === 'nurse-chat' && <NurseChat />}
      {activeSection === 'visit-schedule' && <VisitSchedule />}
      {activeSection === 'care-plans' && <CarePlans />}
      {activeSection === 'clinical-monitoring' && <ClinicalMonitoring />}
      {activeSection === 'medication-mgmt' && <MedicationManagement />}
      {activeSection === 'documentation' && <DocumentManagement />}
      {activeSection === 'quality-safety' && <QualitySafety />}
      {activeSection === 'vitals' && <VitalsTracking />}
      {activeSection === 'appointments' && <Appointments />}
      {activeSection === 'patient-education' && <PatientEducation />}
      {activeSection === 'clinical-resources' && <ClinicalResources />}
      {activeSection === 'nurse-analytics' && <NurseAnalytics />}
    </div>
  );
};

export default DashboardContent;
