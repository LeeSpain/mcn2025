
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  Phone, 
  Activity, 
  BookOpen, 
  Settings, 
  Heart, 
  BarChart, 
  HelpCircle,
  MessageCircle,
  FileText
} from 'lucide-react';
import StaffPortalHeader from './staff/dashboard/StaffPortalHeader';
import AgentWorkspaceCard from './staff/dashboard/AgentWorkspaceCard';
import ClientManagementCard from './staff/dashboard/ClientManagementCard';
import AgentPerformanceCard from './staff/dashboard/AgentPerformanceCard';
import KnowledgeBaseCard from './staff/dashboard/KnowledgeBaseCard';
import ShiftInformationCard from './staff/dashboard/ShiftInformationCard';
import HealthMonitoring from './staff/HealthMonitoring';
import ClientEducation from './staff/ClientEducation';
import AdminTools from './staff/AdminTools';
import TechnicalSupport from './staff/TechnicalSupport';
import LiveAssistance from './staff/LiveAssistance';

const StaffDashboard: React.FC = () => {
  const [agentStatus, setAgentStatus] = useState<'available' | 'busy' | 'away'>('available');
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
    <div className="staff-portal w-full">
      {/* Staff Portal Header */}
      <StaffPortalHeader 
        agentStatus={agentStatus} 
        setAgentStatus={setAgentStatus} 
      />

      {/* Main Tabs Navigation */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
        <TabsList className="grid grid-cols-6 w-full">
          <TabsTrigger value="dashboard" className="flex items-center gap-1">
            <Activity className="h-4 w-4" />
            <span>Dashboard</span>
          </TabsTrigger>
          <TabsTrigger value="clients" className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>Clients</span>
          </TabsTrigger>
          <TabsTrigger value="support" className="flex items-center gap-1">
            <Phone className="h-4 w-4" />
            <span>Support</span>
          </TabsTrigger>
          <TabsTrigger value="health" className="flex items-center gap-1">
            <Heart className="h-4 w-4" />
            <span>Health</span>
          </TabsTrigger>
          <TabsTrigger value="education" className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            <span>Education</span>
          </TabsTrigger>
          <TabsTrigger value="admin" className="flex items-center gap-1">
            <Settings className="h-4 w-4" />
            <span>Admin</span>
          </TabsTrigger>
        </TabsList>

        {/* Tab Content - Each content must be inside the Tabs component */}
        <TabsContent value="dashboard" className="m-0">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full">
            {/* Left Column - Agent Workspace */}
            <div className="lg:col-span-3 space-y-6">
              {/* Agent Workspace Section */}
              <AgentWorkspaceCard />

              {/* Client Management */}
              <ClientManagementCard />
            </div>

            {/* Right Column - Performance Stats & Resources */}
            <div className="space-y-6">
              {/* Agent Performance */}
              <AgentPerformanceCard />

              {/* Knowledge Base */}
              <KnowledgeBaseCard />
              
              {/* Agent Status Summary */}
              <ShiftInformationCard />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="clients" className="m-0">
          <div className="grid grid-cols-1 gap-6">
            <ClientManagementCard />
          </div>
        </TabsContent>
        
        <TabsContent value="support" className="m-0">
          <div className="grid grid-cols-1 gap-6">
            <LiveAssistance />
            <TechnicalSupport />
          </div>
        </TabsContent>
        
        <TabsContent value="health" className="m-0">
          <div className="grid grid-cols-1 gap-6">
            <HealthMonitoring />
          </div>
        </TabsContent>
        
        <TabsContent value="education" className="m-0">
          <div className="grid grid-cols-1 gap-6">
            <ClientEducation />
          </div>
        </TabsContent>
        
        <TabsContent value="admin" className="m-0">
          <div className="grid grid-cols-1 gap-6">
            <AdminTools />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StaffDashboard;
