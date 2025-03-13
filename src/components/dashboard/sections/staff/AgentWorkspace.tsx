
import React from 'react';
import AgentPerformance from './performance/AgentPerformance';
import InteractionQueue from './queue/InteractionQueue';
import TeamCommunication from './communication/TeamCommunication';
import KnowledgeBase from './knowledge/KnowledgeBase';

const AgentWorkspace: React.FC = () => {
  return (
    <>
      {/* Agent Performance */}
      <AgentPerformance />

      {/* Client Interaction Queue */}
      <InteractionQueue />

      {/* Team Communication */}
      <TeamCommunication />

      {/* Knowledge Base Quick Access */}
      <KnowledgeBase />
    </>
  );
};

export default AgentWorkspace;
