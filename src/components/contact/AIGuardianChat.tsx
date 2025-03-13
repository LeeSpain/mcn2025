
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AIGuardianChat: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m the AI Guardian assistant for MCN. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response with predefined answers
    setTimeout(() => {
      let response = '';
      const lowerInput = input.toLowerCase();

      if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('pricing')) {
        response = 'Our pricing plans start at €39/month for basic service. For detailed information, please visit our pricing page or contact our sales team at sales@mobile-care.nl.';
      } else if (lowerInput.includes('office') || lowerInput.includes('location') || lowerInput.includes('address')) {
        response = 'Our main office is located at Marconistraat 16, 3281 NN Delfzijl. We also have a branch office at Wilhelminaplein 5, 4875 BZ Etten-Leur.';
      } else if (lowerInput.includes('contact') || lowerInput.includes('phone') || lowerInput.includes('email')) {
        response = 'You can reach us via phone at +31 (0)10 123 4567 for customer support or +31 (0)10 765 4321 for sales. Our email addresses are info@mobile-care.nl for general inquiries, support@mobile-care.nl for support, and sales@mobile-care.nl for sales.';
      } else if (lowerInput.includes('hour') || lowerInput.includes('open') || lowerInput.includes('time')) {
        response = 'Our business hours are Monday to Friday: 9:00 AM - 5:00 PM, Saturday: 10:00 AM - 2:00 PM, and we\'re closed on Sundays.';
      } else if (lowerInput.includes('service') || lowerInput.includes('offer') || lowerInput.includes('product')) {
        response = 'MCN offers AI-powered care monitoring systems that help maintain independence while ensuring support is available when needed. Our services include 24/7 automated monitoring and alerts, privacy-focused design, and machine learning that adapts to your lifestyle.';
      } else {
        response = 'Thank you for your question. Our team is dedicated to providing personalized care solutions. For more specific information, please reach out to our support team at support@mobile-care.nl or call us at +31 (0)10 123 4567.';
      }

      const aiMessage: Message = {
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
      
      toast({
        title: "New message from AI Guardian",
        description: "The assistant has responded to your inquiry.",
        duration: 3000,
      });
    }, 1000);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="p-1 bg-mcn-blue/10 rounded-full inline-block mb-4">
              <div className="w-12 h-12 rounded-full bg-mcn-blue/20 flex items-center justify-center text-mcn-blue">
                <Bot size={24} />
              </div>
            </div>
            <h2 className="text-3xl font-display font-semibold mb-4">AI Guardian Chat Assistant</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about our services? Our AI Guardian assistant is here to help 24/7. Just type your question below to get started.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl shadow-soft bg-white mb-6">
            <div className="h-[400px] overflow-y-auto p-4 space-y-4 mb-4">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`flex max-w-[80%] gap-3 items-start ${
                      message.role === 'user' 
                        ? 'bg-mcn-blue text-white' 
                        : 'bg-gray-100 text-gray-800'
                    } p-3 rounded-lg`}
                  >
                    <div className="flex-shrink-0 mt-1">
                      {message.role === 'user' ? (
                        <User size={18} className="text-white" />
                      ) : (
                        <Bot size={18} className="text-mcn-blue" />
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
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
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
                className="resize-none min-h-[60px]"
              />
              <Button 
                onClick={handleSendMessage} 
                className="bg-mcn-blue hover:bg-mcn-blue-dark h-[60px] px-4"
                disabled={!input.trim() || isTyping}
              >
                <Send size={20} />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-lg bg-gray-50">
              <div className="font-medium">24/7 Availability</div>
              <p className="text-sm text-muted-foreground">Get answers anytime, day or night</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50">
              <div className="font-medium">Instant Responses</div>
              <p className="text-sm text-muted-foreground">No waiting for customer service</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50">
              <div className="font-medium">Personalized Assistance</div>
              <p className="text-sm text-muted-foreground">Tailored information to your needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIGuardianChat;
