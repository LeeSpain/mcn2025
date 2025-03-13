
import React from 'react';

const BackgroundElements: React.FC = () => {
  return (
    <>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img src="/images/bg-pattern.svg" alt="" className="w-full h-full object-cover" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-mcn-blue/10 animate-float opacity-70 hidden md:block"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-mcn-blue-light/20 animate-float opacity-70 hidden md:block" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-40 right-20 w-12 h-12 rounded-full bg-mcn-blue/10 animate-float opacity-70 hidden md:block" style={{ animationDelay: '1s' }}></div>
    </>
  );
};

export default BackgroundElements;
