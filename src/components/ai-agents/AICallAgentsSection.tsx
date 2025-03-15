
import React from 'react';
import { PhoneCall, FileText, BarChart3, ArrowRight, Stethoscope, BadgeCheck, CalendarClock, AlertCircle, UserCog, UserCircle, Heart, MessageSquare, Headphones } from 'lucide-react';
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
            <h2 className="text-3xl font-bold mb-6 text-indigo-800">AI Call Agents: Revolutionizing Care</h2>
            <p className="text-gray-700 mb-6">
              Our AI call agents provide 24/7 support for patients and healthcare providers, handling routine inquiries, appointment scheduling, medication reminders, and emergency triage—all while maintaining the human touch that's essential in healthcare.
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
                  <p className="text-sm text-gray-600">Gain insights from call patterns to improve care delivery.</p>
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
                description="Patient calls in and is greeted by our AI system, which identifies them and accesses their records."
                example="Hello, thank you for calling MCN Healthcare. May I have your name and date of birth to access your records?"
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
                title="Assessment & Triage"
                description="AI assistant assesses the patient's needs and determines the appropriate action or service."
                example="I understand you're experiencing chest pain. I need to ask you some questions to determine the severity..."
                icon={Stethoscope}
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
                description="AI either resolves the issue or seamlessly escalates to a human healthcare professional if needed."
                example="I've scheduled your appointment for Tuesday at 2 PM. Would you like a calendar invitation sent to your email?"
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
                  description="Call is automatically transcribed, summarized, and added to the patient's electronic health record."
                />
                
                {/* Analysis */}
                <PostCallProcessCard 
                  icon={BarChart3}
                  title="Analysis"
                  description="AI extracts key data points and patterns to improve service and identify potential health concerns."
                />
                
                {/* Follow-up */}
                <PostCallProcessCard 
                  icon={CalendarClock}
                  title="Follow-up"
                  description="System schedules any necessary follow-ups and sends automated reminders to patients and providers."
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
                  description="The AI agent checks provider availability, patient preferences, and schedules appointments with confirmation."
                  bgColor="bg-blue-100"
                  iconColor="text-blue-600"
                />
                
                {/* Scenario 2 */}
                <CallScenarioCard 
                  icon={FileText}
                  title="Prescription Refills"
                  description="Verifies patient identity, medication history, and processes refill requests that meet criteria."
                  bgColor="bg-purple-100"
                  iconColor="text-purple-600"
                />
                
                {/* Scenario 3 */}
                <CallScenarioCard 
                  icon={AlertCircle}
                  title="Symptom Assessment"
                  description="Conducts initial assessment of symptoms and provides guidance or escalates to emergency services if needed."
                  bgColor="bg-red-100"
                  iconColor="text-red-600"
                />
                
                {/* Scenario 4 */}
                <CallScenarioCard 
                  icon={UserCog}
                  title="Insurance Inquiries"
                  description="Checks coverage details, explains benefits, and answers common insurance-related questions."
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
                    <Heart className="h-5 w-5 text-indigo-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Emotion Detection</h4>
                    <p className="text-sm text-indigo-200">Recognizes patient distress signals and adjusts response accordingly.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-indigo-800 rounded-full">
                    <MessageSquare className="h-5 w-5 text-indigo-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Natural Language</h4>
                    <p className="text-sm text-indigo-200">Understands context, medical terminology, and conversational nuances.</p>
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
