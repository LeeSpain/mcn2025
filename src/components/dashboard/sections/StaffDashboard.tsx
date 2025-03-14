
import React, { useState } from 'react';
import StaffPortalHeader from './staff/dashboard/StaffPortalHeader';
import AgentWorkspaceCard from './staff/dashboard/AgentWorkspaceCard';
import ClientManagementCard from './staff/dashboard/ClientManagementCard';
import AgentPerformanceCard from './staff/dashboard/AgentPerformanceCard';
import KnowledgeBaseCard from './staff/dashboard/KnowledgeBaseCard';
import ShiftInformationCard from './staff/dashboard/ShiftInformationCard';
import StaffToolTabs from './staff/dashboard/StaffToolTabs';

const StaffDashboard: React.FC = () => {
  const [agentStatus, setAgentStatus] = useState<'available' | 'busy' | 'away'>('available');
  
  return (
    <div className="staff-portal">
      {/* Staff Portal Header */}
      <StaffPortalHeader 
        agentStatus={agentStatus} 
        setAgentStatus={setAgentStatus} 
      />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
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

      {/* Additional Staff Portal Tools */}
      <div className="mt-6">
        <StaffToolTabs />
      </div>
    </div>
  );
};

export default StaffDashboard;
