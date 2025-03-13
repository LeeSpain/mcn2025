
import React from 'react';

const ChatFeatures: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-8">
      <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-mcn-blue/5 shadow-lg shadow-mcn-blue/5">
        <div className="w-12 h-12 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue mx-auto mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        </div>
        <div className="font-medium text-mcn-blue-dark">24/7 Availability</div>
        <p className="text-sm text-muted-foreground mt-2">Get answers anytime, day or night</p>
      </div>
      <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-mcn-blue/5 shadow-lg shadow-mcn-blue/5">
        <div className="w-12 h-12 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue mx-auto mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <div className="font-medium text-mcn-blue-dark">Instant Responses</div>
        <p className="text-sm text-muted-foreground mt-2">No waiting for customer service</p>
      </div>
      <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-mcn-blue/5 shadow-lg shadow-mcn-blue/5">
        <div className="w-12 h-12 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue mx-auto mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div className="font-medium text-mcn-blue-dark">Personalized Assistance</div>
        <p className="text-sm text-muted-foreground mt-2">Tailored information to your needs</p>
      </div>
    </div>
  );
};

export default ChatFeatures;
