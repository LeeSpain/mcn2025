
import React from 'react';
import { Bot, BadgeCheck } from 'lucide-react';

const DashboardAIHeader: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="inline-flex items-center justify-center p-2 rounded-full bg-purple-100 mb-2">
        <Bot className="h-6 w-6 text-purple-600" />
      </div>
      
      <h2 className="text-3xl font-bold mb-4">AI Chat Assistant in Your Dashboard</h2>
      
      <p className="text-gray-700">
        Our AI-powered chat assistant is available directly in your member dashboard, 
        providing immediate support and guidance whenever you need it.
      </p>
      
      <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 mb-6">
        <p className="text-amber-800 font-medium flex items-start">
          <BadgeCheck className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
          <span>While our AI provides 24/7 support, our human team is always available for complex issues and personal service.</span>
        </p>
      </div>
    </div>
  );
};

export default DashboardAIHeader;
