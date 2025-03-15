
import React from 'react';
import { MessageSquare, Bot, Activity } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesGrid: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <FeatureCard
        icon={MessageSquare}
        title="AI Chat Assistant"
        description="Get instant answers to your health questions and assistance with daily tasks."
        iconBgColor="bg-indigo-100"
        iconColor="text-indigo-600"
        buttonBgColor="bg-indigo-600"
        buttonHoverColor="hover:bg-indigo-700"
      />
      
      <FeatureCard
        icon={Bot}
        title="Health Companion"
        description="Your 24/7 companion for medication reminders, wellness tips, and emotional support."
        iconBgColor="bg-purple-100"
        iconColor="text-purple-600"
        buttonBgColor="bg-purple-600"
        buttonHoverColor="hover:bg-purple-700"
      />
      
      <FeatureCard
        icon={Activity}
        title="Health Insights"
        description="AI-powered analysis of your health data with personalized recommendations."
        iconBgColor="bg-blue-100"
        iconColor="text-blue-600"
        buttonBgColor="bg-blue-600"
        buttonHoverColor="hover:bg-blue-700"
      />
    </section>
  );
};

export default FeaturesGrid;
