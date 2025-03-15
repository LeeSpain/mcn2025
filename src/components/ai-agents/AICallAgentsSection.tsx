
import React from 'react';
import { PhoneCall, FileText, BarChart3, ArrowRight, CheckSquare, BadgeCheck, CalendarClock, AlertCircle, UserCog, UserCircle, MessageSquare, Headphones } from 'lucide-react';
import CallFlowStep from './CallFlowStep';
import PostCallProcessCard from './PostCallProcessCard';
import CallScenarioCard from './CallScenarioCard';

const AICallAgentsSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl">
      <div className="flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/5">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center z-10">
                <PhoneCall className="h-8 w-8 text-purple-600" />
              </div>
              <div className="bg-white rounded-lg shadow-xl p-6 pl-10">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="AI Call Center" 
                  className="rounded-lg w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <h2 className="text-3xl font-bold mb-6 text-indigo-800">AI Call Agents: Revolutionizing Customer Service</h2>
            <p className="text-gray-700 mb-6">
              Our AI call agents provide 24/7 support for your customers, handling routine inquiries, appointment scheduling, order status updates, and technical troubleshooting—all while maintaining the professional touch that's essential for customer satisfaction.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-indigo-100 rounded-full">
                  <FileText className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Complete Logging</h4>
                  <p className="text-sm text-gray-600">Every call is transcribed and stored securely for future reference.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-indigo-100 rounded-full">
                  <BarChart3 className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Analytics</h4>
                  <p className="text-sm text-gray-600">Gain insights from call patterns to improve service delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Detailed AI Call Flow Section */}
        <div className="bg-white p-6 rounded-xl shadow-md mt-8">
          <h3 className="text-2xl font-semibold text-center mb-8 text-indigo-700">How Our AI Call System Works</h3>
          
          {/* Call Flow Diagram */}
          <div className="relative">
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
            
            {/* Post-Call Processing Section */}
            <div className="mt-12 border-t border-gray-200 pt-8">
              <h4 className="text-xl font-semibold text-center mb-6 text-indigo-700">Post-Call Processing</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Documentation */}
                <PostCallProcessCard 
                  icon={FileText}
                  title="Documentation"
                  description="Call is automatically transcribed, summarized, and added to the customer's account history for future reference."
                />
                
                {/* Analysis */}
                <PostCallProcessCard 
                  icon={BarChart3}
                  title="Analysis"
                  description="AI extracts key data points and patterns to improve service and identify potential customer satisfaction issues."
                />
                
                {/* Follow-up */}
                <PostCallProcessCard 
                  icon={CalendarClock}
                  title="Follow-up"
                  description="System schedules any necessary follow-ups and sends automated confirmations to customers and representatives."
                />
              </div>
            </div>
            
            {/* Call Handling Scenarios */}
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
              
            {/* Technical Capabilities */}
            <div className="mt-8 bg-indigo-900 text-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Advanced Technical Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-indigo-800 rounded-full">
                    <UserCircle className="h-5 w-5 text-indigo-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Voice Recognition</h4>
                    <p className="text-sm text-indigo-200">Identifies and authenticates callers by voice patterns with 98% accuracy.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-indigo-800 rounded-full">
                    <MessageSquare className="h-5 w-5 text-indigo-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sentiment Analysis</h4>
                    <p className="text-sm text-indigo-200">Recognizes customer satisfaction signals and adjusts response accordingly.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-indigo-800 rounded-full">
                    <MessageSquare className="h-5 w-5 text-indigo-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Natural Language</h4>
                    <p className="text-sm text-indigo-200">Understands context, industry terminology, and conversational nuances.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-indigo-800 rounded-full">
                    <Headphones className="h-5 w-5 text-indigo-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Multi-language Support</h4>
                    <p className="text-sm text-indigo-200">Supports over 20 languages with real-time translation capabilities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICallAgentsSection;
