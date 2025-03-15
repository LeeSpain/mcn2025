
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Bot, MessageSquare, Activity, Brain } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AIAgentDashboard: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="p-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
          <Brain className="h-8 w-8 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">AI Agent Dashboard</h1>
          <p className="text-muted-foreground">Intelligent assistance for your healthcare needs</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-2 bg-indigo-100 rounded-full">
              <MessageSquare className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="font-semibold text-lg">AI Chat Assistant</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Get instant answers to your health questions and assistance with daily tasks.
          </p>
          <button className="w-full py-2 rounded-md bg-indigo-600 text-white font-medium">
            Start Conversation
          </button>
        </Card>

        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-2 bg-purple-100 rounded-full">
              <Bot className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg">Virtual Health Companion</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Your 24/7 companion for medication reminders, wellness tips, and emotional support.
          </p>
          <button className="w-full py-2 rounded-md bg-purple-600 text-white font-medium">
            Access Companion
          </button>
        </Card>

        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-2 bg-blue-100 rounded-full">
              <Activity className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg">Health Insights</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            AI-powered analysis of your health data with personalized recommendations.
          </p>
          <button className="w-full py-2 rounded-md bg-blue-600 text-white font-medium">
            View Insights
          </button>
        </Card>
      </div>

      <Card className="p-6 shadow-md">
        <h3 className="font-semibold text-lg mb-4">Recent AI Interactions</h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Medication Reminder</span>
              <span className="text-sm text-muted-foreground">Today, 9:30 AM</span>
            </div>
            <p className="text-muted-foreground text-sm">
              "Remember to take your morning medication with breakfast"
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Health Query</span>
              <span className="text-sm text-muted-foreground">Yesterday, 2:15 PM</span>
            </div>
            <p className="text-muted-foreground text-sm">
              "Based on your symptoms, I recommend resting and increasing your fluid intake"
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Wellness Tip</span>
              <span className="text-sm text-muted-foreground">Yesterday, 10:00 AM</span>
            </div>
            <p className="text-muted-foreground text-sm">
              "Consider a 10-minute breathing exercise to help reduce your stress levels"
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AIAgentDashboard;
