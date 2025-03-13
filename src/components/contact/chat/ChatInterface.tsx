
import React, { useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import ChatMessage from './ChatMessage';
import { useChatMessages } from './useChatMessages';

const ChatInterface: React.FC = () => {
  const { 
    input, 
    messages, 
    isTyping, 
    handleInputChange, 
    handleKeyDown, 
    handleSendMessage 
  } = useChatMessages();
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Card className="shadow-[0_10px_40px_-15px_rgba(0,119,182,0.3)] border-mcn-blue/10 overflow-hidden backdrop-blur-sm bg-white/90">
      <div className="p-1 bg-gradient-to-r from-mcn-blue-light via-mcn-blue to-mcn-blue-dark rounded-t-xl"></div>
      <div className="p-6">
        <div className="h-[400px] overflow-y-auto p-4 space-y-4 mb-4 rounded-lg bg-gray-50/50">
          {messages.map((message, index) => (
            <ChatMessage 
              key={index} 
              message={message} 
            />
          ))}
          {isTyping && (
            <div className="flex justify-start animate-fade-in">
              <div className="bg-white border border-gray-100 text-gray-800 p-3 rounded-lg shadow-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-mcn-blue animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-mcn-blue animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-mcn-blue animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="flex items-end gap-2">
          <Textarea
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Type your question here..."
            className="resize-none min-h-[60px] bg-gray-50/70 border-mcn-blue/10 focus-visible:ring-mcn-blue/30"
          />
          <Button 
            onClick={handleSendMessage} 
            className="bg-gradient-to-r from-mcn-blue to-mcn-blue-dark hover:opacity-90 h-[60px] px-4 shadow-md"
            disabled={!input.trim() || isTyping}
          >
            <Send size={20} />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ChatInterface;
