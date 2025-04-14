
import React from 'react';
import { HeartPulse, ShieldCheck, Clock, Users } from 'lucide-react';

const GapCategorySummary: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: "Measurement Devices", count: 3, icon: <HeartPulse className="h-5 w-5 text-red-500" /> },
        { title: "Monitors", count: 3, icon: <ShieldCheck className="h-5 w-5 text-blue-500" /> },
        { title: "Daily Structure", count: 3, icon: <Clock className="h-5 w-5 text-green-500" /> },
        { title: "Lifestyle & Wellbeing", count: 6, icon: <Users className="h-5 w-5 text-purple-500" /> }
      ].map((category, index) => (
        <div key={index} className="bg-white p-5 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-3">
            {category.icon}
            <h3 className="font-semibold">{category.title}</h3>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">{category.count}</span>
            <span className="text-sm text-gray-500">gaps to address</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GapCategorySummary;
