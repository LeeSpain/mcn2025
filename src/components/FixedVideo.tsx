
import React from 'react';

const FixedVideo: React.FC = () => {
  return (
    <div className="fixed top-24 right-6 z-30 md:right-8 lg:right-12 w-64 md:w-80 xl:w-96 shadow-xl rounded-xl overflow-hidden border-2 border-mcn-blue/30">
      <div className="relative w-full pb-[56.25%]">
        <iframe 
          src="https://www.youtube.com/embed/rRqZZwZuw4M?autoplay=0&mute=0"
          className="absolute inset-0 w-full h-full"
          title="MCN Healthcare Platform Overview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      
      {/* Branded overlay with subtle gradient */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-mcn-blue-dark/80 to-transparent p-3">
        <div className="text-white text-sm font-medium text-center">
          Mobile Care Nexus Overview
        </div>
      </div>
    </div>
  );
};

export default FixedVideo;
