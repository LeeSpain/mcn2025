
import React from 'react';
import ChatInterface from './chat/ChatInterface';
import ChatHeader from './chat/ChatHeader';
import ChatFeatures from './chat/ChatFeatures';
import BackgroundElements from './chat/BackgroundElements';

const AIGuardianChat: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-br from-mcn-blue-light/30 via-white/80 to-white">
      <BackgroundElements />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ChatHeader />
          <ChatInterface />
          <ChatFeatures />
        </div>
      </div>
    </section>
  );
};

export default AIGuardianChat;
