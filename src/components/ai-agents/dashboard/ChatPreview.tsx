
import React from 'react';
import ChatInterface from '@/components/contact/chat/ChatInterface';

interface ChatPreviewProps {
  title?: string;
  subtitle?: string;
}

const ChatPreview: React.FC<ChatPreviewProps> = ({
  title = "Dashboard Chat Assistant",
  subtitle = "Try a sample of our dashboard chat experience"
}) => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute -z-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      <div className="w-full max-w-md">
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold mb-2 text-purple-700">
            {title}
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            {subtitle}
          </p>
        </div>
        <ChatInterface />
      </div>
    </div>
  );
};

export default ChatPreview;
