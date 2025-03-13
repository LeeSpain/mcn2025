
import React from 'react';
import { Bot, User } from 'lucide-react';
import { Message } from './types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div 
        className={`flex max-w-[80%] gap-3 items-start ${
          isUser 
            ? 'bg-gradient-to-r from-mcn-blue to-mcn-blue-dark text-white shadow-md' 
            : 'bg-white border border-gray-100 text-gray-800 shadow-sm'
        } p-3 rounded-lg animate-fade-in-up`}
      >
        <div className="flex-shrink-0 mt-1">
          {isUser ? (
            <div className="bg-white/20 p-1 rounded-full">
              <User size={16} className="text-white" />
            </div>
          ) : (
            <div className="bg-mcn-blue/10 p-1 rounded-full">
              <Bot size={16} className="text-mcn-blue" />
            </div>
          )}
        </div>
        <div>
          <div className="text-sm">{message.content}</div>
          <div className="text-xs opacity-70 mt-1">
            {message.timestamp.toLocaleTimeString(undefined, {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
