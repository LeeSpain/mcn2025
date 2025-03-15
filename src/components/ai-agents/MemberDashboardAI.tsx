
import React from 'react';
import { Card } from '@/components/ui/card';
import { Bot, UserCog, MessageSquare, Headphones, HelpCircle, BadgeCheck } from 'lucide-react';
import ChatInterface from '@/components/contact/chat/ChatInterface';

const MemberDashboardAI: React.FC = () => {
  return (
    <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <Card className="p-4 border border-purple-100">
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <MessageSquare className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Instant Responses</h4>
                  <p className="text-sm text-gray-600">Get immediate answers to your questions without waiting on hold.</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-4 border border-indigo-100">
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <UserCog className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Personalized Help</h4>
                  <p className="text-sm text-gray-600">Receive tailored guidance based on your specific needs and history.</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-4 border border-blue-100">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <HelpCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Instructions & Tutorials</h4>
                  <p className="text-sm text-gray-600">Easy-to-follow guidance on using all features of our platform.</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-4 border border-green-100">
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Headphones className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Seamless Escalation</h4>
                  <p className="text-sm text-gray-600">Complex issues are promptly transferred to our human support team.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="relative flex items-center justify-center">
          <div className="absolute -z-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
          <div className="w-full max-w-md">
            <ChatHeader />
            <ChatInterface />
          </div>
        </div>
      </div>
    </section>
  );
};

// Create a simplified ChatHeader component here to avoid an extra file
const ChatHeader: React.FC = () => {
  return (
    <div className="text-center mb-4">
      <h3 className="text-xl font-semibold mb-2 text-purple-700">
        Dashboard Chat Assistant
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        Try a sample of our dashboard chat experience
      </p>
    </div>
  );
};

export default MemberDashboardAI;
