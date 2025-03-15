
import React from 'react';
import CallFlowDiagram from './CallFlowDiagram';
import PostCallProcessing from './PostCallProcessing';
import CallHandlingScenarios from './CallHandlingScenarios';
import TechnicalCapabilities from './TechnicalCapabilities';

const CallSystemWorkflow: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-8">
      <h3 className="text-2xl font-semibold text-center mb-8 text-indigo-700">How Our AI Call System Works</h3>
      
      {/* Call Flow Diagram */}
      <CallFlowDiagram />
      
      {/* Post-Call Processing Section */}
      <PostCallProcessing />
      
      {/* Call Handling Scenarios */}
      <CallHandlingScenarios />
        
      {/* Technical Capabilities */}
      <TechnicalCapabilities />
    </div>
  );
};

export default CallSystemWorkflow;
