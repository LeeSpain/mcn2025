
import React from 'react';
import AIServiceHeader from './AIServiceHeader';
import CallSystemWorkflow from './CallSystemWorkflow';

const AICallAgentsSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl">
      <div className="flex flex-col gap-8">
        {/* Section Header */}
        <AIServiceHeader />
        
        {/* Detailed AI Call Flow Section */}
        <CallSystemWorkflow />
      </div>
    </section>
  );
};

export default AICallAgentsSection;
