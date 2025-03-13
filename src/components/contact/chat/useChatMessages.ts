
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { Message } from './types';

export const useChatMessages = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m the AI Guardian assistant for MCN. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

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

  return {
    input,
    messages,
    isTyping,
    handleInputChange,
    handleKeyDown,
    handleSendMessage
  };
};
