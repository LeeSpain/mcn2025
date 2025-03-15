
import React from 'react';
import { Users, CalendarClock, FileText } from 'lucide-react';

const StaffingEfficiencySection: React.FC = () => {
  return (
    <section className="rounded-2xl overflow-hidden">
      <div className="bg-blue-800 text-white p-8 rounded-t-2xl">
        <h2 className="text-3xl font-bold mb-4">Transforming Healthcare Staffing</h2>
        <p className="text-xl opacity-90">
          Our AI agents reduce administrative burden by up to 70%, allowing your healthcare professionals to focus on what matters most—patient care.
        </p>
      </div>
      <div className="bg-white shadow-lg p-8 rounded-b-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 border border-gray-100 rounded-xl">
            <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Optimized Workforce</h3>
            <p className="text-gray-600">
              AI handles routine tasks, allowing you to allocate human resources where they're needed most.
            </p>
          </div>
          <div className="text-center p-6 border border-gray-100 rounded-xl">
            <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <CalendarClock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">24/7 Coverage</h3>
            <p className="text-gray-600">
              Provide round-the-clock care without the cost of overnight staffing or on-call rotations.
            </p>
          </div>
          <div className="text-center p-6 border border-gray-100 rounded-xl">
            <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Complete Documentation</h3>
            <p className="text-gray-600">
              All interactions are automatically documented, ensuring complete records without manual note-taking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffingEfficiencySection;
