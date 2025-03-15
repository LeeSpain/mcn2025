
import React from 'react';
import { UserCircle, MessageSquare, Headphones } from 'lucide-react';

const TechnicalCapabilities: React.FC = () => {
  return (
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
  );
};

export default TechnicalCapabilities;
