
import React from 'react';
import { FileText, BarChart3, CalendarClock } from 'lucide-react';
import PostCallProcessCard from './PostCallProcessCard';

const PostCallProcessing: React.FC = () => {
  return (
    <div className="mt-12 border-t border-gray-200 pt-8">
      <h4 className="text-xl font-semibold text-center mb-6 text-indigo-700">Post-Call Processing</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Documentation */}
        <PostCallProcessCard 
          icon={FileText}
          title="Documentation"
          description="Call is automatically transcribed, summarized, and added to the customer's account history for future reference."
        />
        
        {/* Analysis */}
        <PostCallProcessCard 
          icon={BarChart3}
          title="Analysis"
          description="AI extracts key data points and patterns to improve service and identify potential customer satisfaction issues."
        />
        
        {/* Follow-up */}
        <PostCallProcessCard 
          icon={CalendarClock}
          title="Follow-up"
          description="System schedules any necessary follow-ups and sends automated confirmations to customers and representatives."
        />
      </div>
    </div>
  );
};

export default PostCallProcessing;
