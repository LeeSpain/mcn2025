
import React from 'react';
import { Shield } from 'lucide-react';

const AIGuardianSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
          <div className="w-full md:w-1/2">
            <div className="p-1 bg-mcn-blue/10 rounded-full inline-block mb-4">
              <div className="w-12 h-12 rounded-full bg-mcn-blue/20 flex items-center justify-center text-mcn-blue">
                <Shield size={24} />
              </div>
            </div>
            <h2 className="text-3xl font-display font-semibold mb-4">AI Guardian Technologies</h2>
            <p className="text-muted-foreground mb-6">
              Our AI-powered systems work around the clock to ensure your safety and well-being. MCN's Guardian technology learns your routines and can alert caregivers to potential issues before they become emergencies.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 text-green-600">✓</div>
                <span>24/7 automated monitoring and alerts</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 text-green-600">✓</div>
                <span>Privacy-focused design puts you in control</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 text-green-600">✓</div>
                <span>Machine learning that adapts to your lifestyle</span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <div className="glass-card p-8 rounded-2xl shadow-soft bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-mcn-blue/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10">
                <img 
                  src="/placeholder.svg" 
                  alt="AI Guardian Technology" 
                  className="w-full h-auto rounded-lg mb-6"
                />
                <h3 className="text-xl font-medium mb-2">Intelligent Care</h3>
                <p className="text-muted-foreground text-sm">
                  Our AI systems create a protective digital barrier that helps maintain independence while ensuring support is available when needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIGuardianSection;
