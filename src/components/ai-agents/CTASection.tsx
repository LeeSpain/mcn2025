
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  return (
    <section className="text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-10 rounded-xl">
      <h2 className="text-3xl font-bold mb-4">Transform Your Healthcare Operations</h2>
      <p className="text-xl mb-6 max-w-2xl mx-auto">
        Join thousands of healthcare providers who have reduced staffing costs and improved patient satisfaction with our AI agents.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="bg-white text-indigo-600 hover:bg-gray-100 text-lg">
          Schedule a Demo
        </Button>
        <Button variant="outline" className="border-2 border-white bg-transparent hover:bg-white/10 text-white text-lg">
          Download ROI Report
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
