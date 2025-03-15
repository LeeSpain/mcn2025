
import React from 'react';
import { Brain } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="text-center space-y-6">
      <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 mb-4">
        <Brain className="h-10 w-10 text-white" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700">
        AI Healthcare Agents
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Our advanced AI agents provide personalized healthcare assistance, 
        monitoring, and support for better health outcomes while reducing staffing burden.
      </p>
    </section>
  );
};

export default HeroSection;
