
import React from 'react';
import { MessageSquare, UserCog, HelpCircle, Headphones } from 'lucide-react';
import AIFeatureCard from './AIFeatureCard';

const AIFeatureGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
      <AIFeatureCard 
        icon={MessageSquare}
        title="Instant Responses"
        description="Get immediate answers to your questions without waiting on hold."
        bgColor="bg-purple-100"
        iconColor="text-purple-600"
      />
      
      <AIFeatureCard 
        icon={UserCog}
        title="Personalized Help"
        description="Receive tailored guidance based on your specific needs and history."
        bgColor="bg-indigo-100"
        iconColor="text-indigo-600"
      />
      
      <AIFeatureCard 
        icon={HelpCircle}
        title="Instructions & Tutorials"
        description="Easy-to-follow guidance on using all features of our platform."
        bgColor="bg-blue-100"
        iconColor="text-blue-600"
      />
      
      <AIFeatureCard 
        icon={Headphones}
        title="Seamless Escalation"
        description="Complex issues are promptly transferred to our human support team."
        bgColor="bg-green-100"
        iconColor="text-green-600"
      />
    </div>
  );
};

export default AIFeatureGrid;
