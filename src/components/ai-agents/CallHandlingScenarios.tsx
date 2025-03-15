
import React from 'react';
import { CalendarClock, FileText, AlertCircle, UserCog } from 'lucide-react';
import CallScenarioCard from './CallScenarioCard';

const CallHandlingScenarios: React.FC = () => {
  return (
    <div className="mt-12 border-t border-gray-200 pt-8">
      <h4 className="text-xl font-semibold text-center mb-6 text-indigo-700">Common Call Scenarios Handled by AI</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Scenario 1 */}
        <CallScenarioCard 
          icon={CalendarClock}
          title="Appointment Scheduling"
          description="The AI agent checks availability, customer preferences, and schedules appointments with instant confirmation."
          bgColor="bg-blue-100"
          iconColor="text-blue-600"
        />
        
        {/* Scenario 2 */}
        <CallScenarioCard 
          icon={FileText}
          title="Order Status Updates"
          description="Verifies customer identity, checks order database, and provides accurate shipping and delivery information."
          bgColor="bg-purple-100"
          iconColor="text-purple-600"
        />
        
        {/* Scenario 3 */}
        <CallScenarioCard 
          icon={AlertCircle}
          title="Technical Support"
          description="Conducts initial troubleshooting for common issues and provides step-by-step resolution guidance."
          bgColor="bg-red-100"
          iconColor="text-red-600"
        />
        
        {/* Scenario 4 */}
        <CallScenarioCard 
          icon={UserCog}
          title="Account Management"
          description="Helps customers update their information, manage preferences, and navigate account settings securely."
          bgColor="bg-green-100"
          iconColor="text-green-600"
        />
      </div>
    </div>
  );
};

export default CallHandlingScenarios;
