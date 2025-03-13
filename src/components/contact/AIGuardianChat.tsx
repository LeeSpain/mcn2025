
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Card } from '@/components/ui/card';

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
    <section className="py-16 relative overflow-hidden bg-gradient-to-br from-mcn-blue-light/30 to-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img src="/images/bg-pattern.svg" alt="" className="w-full h-full object-cover" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-mcn-blue/10 animate-float opacity-70 hidden md:block"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-mcn-blue-light/20 animate-float opacity-70 hidden md:block" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-40 right-20 w-12 h-12 rounded-full bg-mcn-blue/10 animate-float opacity-70 hidden md:block" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="p-1 bg-gradient-to-r from-mcn-blue to-mcn-blue-dark/80 rounded-full inline-block mb-4 shadow-md">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-mcn-blue">
                <Bot size={28} />
              </div>
            </div>
            <h2 className="text-3xl font-display font-semibold mb-4 bg-gradient-to-r from-mcn-blue-dark to-mcn-blue bg-clip-text text-transparent">AI Guardian Chat Assistant</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about our services? Our AI Guardian assistant is here to help 24/7. Just type your question below to get started.
            </p>
          </div>

          <Card className="shadow-[0_10px_40px_-15px_rgba(0,119,182,0.3)] border-mcn-blue/10 overflow-hidden backdrop-blur-sm bg-white/90">
            <div className="p-1 bg-gradient-to-r from-mcn-blue-light via-mcn-blue to-mcn-blue-dark rounded-t-xl"></div>
            <div className="p-6">
              <div className="h-[400px] overflow-y-auto p-4 space-y-4 mb-4 rounded-lg bg-gray-50/50">
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`flex max-w-[80%] gap-3 items-start ${
                        message.role === 'user' 
                          ? 'bg-gradient-to-r from-mcn-blue to-mcn-blue-dark text-white shadow-md' 
                          : 'bg-white border border-gray-100 text-gray-800 shadow-sm'
                      } p-3 rounded-lg animate-fade-in-up`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex-shrink-0 mt-1">
                        {message.role === 'user' ? (
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
        </div>
      </div>
    </section>
  );
};

export default AIGuardianChat;
