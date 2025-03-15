
import React from 'react';
import { Zap, Shield, Clock, BookOpen } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  return (
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
  );
};

export default HowItWorksSection;
