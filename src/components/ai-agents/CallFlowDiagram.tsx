
import React from 'react';
import { PhoneCall, CheckSquare, BadgeCheck, ArrowRight } from 'lucide-react';
import CallFlowStep from './CallFlowStep';

const CallFlowDiagram: React.FC = () => {
  return (
    <div className="relative z-10">
      {/* Flow Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* Step 1: Call Initiation */}
        <CallFlowStep 
          stepNumber={1}
          title="Call Initiation"
          description="Customer calls in and is greeted by our AI system, which identifies them and accesses their account information."
          example="Hello, thank you for calling MCN Services. May I have your account number or the phone number associated with your account?"
          icon={PhoneCall}
          bgColor="bg-blue-50"
          iconBgColor="bg-blue-100"
          iconColor="text-blue-600"
          exampleBgColor="bg-blue-100"
          exampleTextColor="text-blue-700"
        />
        
        {/* Arrow for desktop */}
        <div className="hidden md:flex items-center justify-center">
          <ArrowRight className="h-8 w-8 text-indigo-300" />
        </div>
        
        {/* Step 2: Assessment & Routing */}
        <CallFlowStep 
          stepNumber={2}
          title="Issue Identification"
          description="AI assistant determines the nature of the customer's inquiry and collects the necessary details to assist them."
          example="I see you're calling about your recent order #12345. How can I help you with this order today?"
          icon={CheckSquare}
          bgColor="bg-purple-50"
          iconBgColor="bg-purple-100"
          iconColor="text-purple-600"
          exampleBgColor="bg-purple-100"
          exampleTextColor="text-purple-700"
        />
        
        {/* Arrow for desktop */}
        <div className="hidden md:flex items-center justify-center">
          <ArrowRight className="h-8 w-8 text-indigo-300" />
        </div>
        
        {/* Step 3: Resolution or Escalation */}
        <CallFlowStep 
          stepNumber={3}
          title="Resolution/Escalation"
          description="AI either resolves the issue or seamlessly escalates to a human customer service representative if needed."
          example="I've updated your shipping address. Your order will now be delivered to 123 Main Street on Friday. Is there anything else I can help with?"
          icon={BadgeCheck}
          bgColor="bg-green-50"
          iconBgColor="bg-green-100"
          iconColor="text-green-600"
          exampleBgColor="bg-green-100"
          exampleTextColor="text-green-700"
        />
      </div>
    </div>
  );
};

export default CallFlowDiagram;
