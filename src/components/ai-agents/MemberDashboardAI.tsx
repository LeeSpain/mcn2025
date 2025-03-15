
import React from 'react';
import DashboardAIHeader from './dashboard/DashboardAIHeader';
import AIFeatureGrid from './dashboard/AIFeatureGrid';
import ChatPreview from './dashboard/ChatPreview';

const MemberDashboardAI: React.FC = () => {
  return (
    <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <DashboardAIHeader />
          <AIFeatureGrid />
        </div>
        
        <ChatPreview />
      </div>
    </section>
  );
};

export default MemberDashboardAI;
