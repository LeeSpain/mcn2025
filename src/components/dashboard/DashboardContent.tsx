import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import MemberDashboard from './sections/member/MemberDashboard';
import StaffDashboard from './sections/staff/StaffDashboard';
import NurseDashboard from './sections/nurse/NurseDashboard';
import SettingsSection from './sections/SettingsSection';
import SupportSection from './sections/SupportSection';
import ChatSection from './sections/ChatSection';
import ClientManagement from './sections/staff/ClientManagement';
import HealthMonitoring from './sections/staff/HealthMonitoring';
import ClientEducation from './sections/staff/ClientEducation';
import StaffAnalytics from './sections/staff/StaffAnalytics';
import KnowledgeLibrary from './sections/staff/KnowledgeLibrary';
import FamilyPortal from './sections/member/FamilyPortal';
import CareManager from './sections/member/CareManager';
import HealthView from './sections/member/HealthView';
import SafetyMonitor from './sections/member/SafetyMonitor';
import ConnectHub from './sections/member/ConnectHub';
import ShopGateway from './sections/member/ShopGateway';
import BBrainAssistant from './sections/member/BBrainAssistant';
import AccountSettings from './sections/member/AccountSettings';
import HelpSupport from './sections/member/HelpSupport';
import VisitSchedule from './sections/nurse/VisitSchedule';
import CarePlans from './sections/nurse/CarePlans';
import ClinicalMonitoring from './sections/nurse/ClinicalMonitoring';
import MedicationMgmt from './sections/nurse/MedicationMgmt';
import Documentation from './sections/nurse/Documentation';
import QualitySafety from './sections/nurse/QualitySafety';
import VitalsTracking from './sections/nurse/VitalsTracking';
import Appointments from './sections/nurse/Appointments';
import PatientEducation from './sections/nurse/PatientEducation';
import ClinicalResources from './sections/nurse/ClinicalResources';
import NurseAnalytics from './sections/nurse/NurseAnalytics';

// Import the new NurseChat component
import NurseChat from './sections/nurse/NurseChat';

const ClientCaseload = () => (
  <div>
    <h2>Client Caseload</h2>
    <p>Manage client caseload here.</p>
  </div>
);

const DashboardContent: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const { t } = useLanguage();

  return (
    <>
      {/* Member Portal Sections */}
      {activeSection === 'home' && <MemberDashboard />}
      {activeSection === 'care' && <CareManager />}
      {activeSection === 'health' && <HealthView />}
      {activeSection === 'safety' && <SafetyMonitor />}
      {activeSection === 'connect' && <ConnectHub />}
      {activeSection === 'shop' && <ShopGateway />}
      {activeSection === 'bbrain' && <BBrainAssistant />}
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
      {activeSection === 'medication-mgmt' && <MedicationMgmt />}
      {activeSection === 'documentation' && <Documentation />}
      {activeSection === 'quality-safety' && <QualitySafety />}
      {activeSection === 'vitals' && <VitalsTracking />}
      {activeSection === 'appointments' && <Appointments />}
      {activeSection === 'patient-education' && <PatientEducation />}
      {activeSection === 'clinical-resources' && <ClinicalResources />}
      {activeSection === 'nurse-analytics' && <NurseAnalytics />}
    </>
  );
};

export default DashboardContent;
