
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { Bot, MessageSquare, Activity, Brain, Zap, Shield, Clock, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';
import ScrollToTop from '@/components/ScrollToTop';

const AIAgentsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <ScrollToTop />
      <NavBar />
      
      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 mb-4">
              <Brain className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700">
              AI Healthcare Agents
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced AI agents provide personalized healthcare assistance, 
              monitoring, and support for better health outcomes.
            </p>
          </section>

          {/* Features Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                Learn More
              </button>
            </Card>

            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 bg-purple-100 rounded-full">
                  <Bot className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg">Health Companion</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Your 24/7 companion for medication reminders, wellness tips, and emotional support.
              </p>
              <button className="w-full py-2 rounded-md bg-purple-600 text-white font-medium">
                Learn More
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
                Learn More
              </button>
            </Card>
          </section>

          {/* How It Works Section */}
          <section className="bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-center mb-8">How Our AI Agents Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-3">
                <div className="mx-auto bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <Zap className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="font-semibold">Learn</h3>
                <p className="text-gray-600">AI adapts to your health needs and preferences</p>
              </div>
              <div className="text-center space-y-3">
                <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold">Protect</h3>
                <p className="text-gray-600">Ensures your health data remains private and secure</p>
              </div>
              <div className="text-center space-y-3">
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold">Monitor</h3>
                <p className="text-gray-600">Continuously tracks your health metrics and activities</p>
              </div>
              <div className="text-center space-y-3">
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold">Educate</h3>
                <p className="text-gray-600">Provides personalized health education and resources</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-10 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">Experience AI-Powered Healthcare</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Join thousands of users who have transformed their healthcare experience with our AI agents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-lg bg-white text-indigo-600 font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 rounded-lg bg-transparent border-2 border-white text-white font-semibold text-lg hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AIAgentsPage;
