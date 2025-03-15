
import React from 'react';
import { PhoneCall, FileText, BarChart3 } from 'lucide-react';

const AIServiceHeader: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="md:w-2/5">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center z-10">
            <PhoneCall className="h-8 w-8 text-purple-600" />
          </div>
          <div className="bg-white rounded-lg shadow-xl p-6 pl-10">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="AI Call Center" 
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="md:w-3/5">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800">AI Call Agents: Revolutionizing Customer Service</h2>
        <p className="text-gray-700 mb-6">
          Our AI call agents provide 24/7 support for your customers, handling routine inquiries, appointment scheduling, order status updates, and technical troubleshooting—all while maintaining the professional touch that's essential for customer satisfaction.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-indigo-100 rounded-full">
              <FileText className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <h4 className="font-semibold">Complete Logging</h4>
              <p className="text-sm text-gray-600">Every call is transcribed and stored securely for future reference.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-indigo-100 rounded-full">
              <BarChart3 className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <h4 className="font-semibold">Analytics</h4>
              <p className="text-sm text-gray-600">Gain insights from call patterns to improve service delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServiceHeader;
