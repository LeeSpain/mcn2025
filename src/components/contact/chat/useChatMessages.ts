
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { Message } from './types';
import { useLanguage } from '@/context/LanguageContext';

export const useChatMessages = () => {
  const { language } = useLanguage();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: language === 'nl' 
        ? 'Hallo! Ik ben de AI Guardian-assistent voor MCN. Hoe kan ik u vandaag helpen?'
        : 'Hello! I\'m the AI Guardian assistant for MCN. How can I help you today?',
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

      if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('pricing') ||
          lowerInput.includes('prijs') || lowerInput.includes('kosten')) {
        response = language === 'nl'
          ? 'Onze prijsplannen beginnen bij €39/maand voor de basisservice. Voor gedetailleerde informatie kunt u onze prijspagina bezoeken of contact opnemen met ons verkoopteam via sales@mobile-care.nl.'
          : 'Our pricing plans start at €39/month for basic service. For detailed information, please visit our pricing page or contact our sales team at sales@mobile-care.nl.';
      } else if (lowerInput.includes('office') || lowerInput.includes('location') || lowerInput.includes('address') ||
                lowerInput.includes('kantoor') || lowerInput.includes('locatie') || lowerInput.includes('adres')) {
        response = language === 'nl'
          ? 'Ons hoofdkantoor is gevestigd aan de Marconistraat 16, 3281 NN Delfzijl. We hebben ook een bijkantoor aan het Wilhelminaplein 5, 4875 BZ Etten-Leur.'
          : 'Our main office is located at Marconistraat 16, 3281 NN Delfzijl. We also have a branch office at Wilhelminaplein 5, 4875 BZ Etten-Leur.';
      } else if (lowerInput.includes('contact') || lowerInput.includes('phone') || lowerInput.includes('email') ||
                lowerInput.includes('telefoon') || lowerInput.includes('e-mail')) {
        response = language === 'nl'
          ? 'U kunt ons bereiken via telefoon op +31 (0)10 123 4567 voor klantenondersteuning of +31 (0)10 765 4321 voor verkoop. Onze e-mailadressen zijn info@mobile-care.nl voor algemene vragen, support@mobile-care.nl voor ondersteuning en sales@mobile-care.nl voor verkoop.'
          : 'You can reach us via phone at +31 (0)10 123 4567 for customer support or +31 (0)10 765 4321 for sales. Our email addresses are info@mobile-care.nl for general inquiries, support@mobile-care.nl for support, and sales@mobile-care.nl for sales.';
      } else if (lowerInput.includes('hour') || lowerInput.includes('open') || lowerInput.includes('time') ||
                lowerInput.includes('uur') || lowerInput.includes('open') || lowerInput.includes('tijd')) {
        response = language === 'nl'
          ? 'Onze openingstijden zijn maandag tot vrijdag: 9:00 - 17:00, zaterdag: 10:00 - 14:00, en we zijn gesloten op zondagen.'
          : 'Our business hours are Monday to Friday: 9:00 AM - 5:00 PM, Saturday: 10:00 AM - 2:00 PM, and we\'re closed on Sundays.';
      } else if (lowerInput.includes('service') || lowerInput.includes('offer') || lowerInput.includes('product') ||
                lowerInput.includes('dienst') || lowerInput.includes('aanbod') || lowerInput.includes('product')) {
        response = language === 'nl'
          ? 'MCN biedt AI-gestuurde zorgmonitoringsystemen die helpen zelfstandigheid te behouden terwijl ervoor wordt gezorgd dat ondersteuning beschikbaar is wanneer nodig. Onze diensten omvatten 24/7 geautomatiseerde monitoring en waarschuwingen, privacy-gericht ontwerp en machine learning die zich aanpast aan uw levensstijl.'
          : 'MCN offers AI-powered care monitoring systems that help maintain independence while ensuring support is available when needed. Our services include 24/7 automated monitoring and alerts, privacy-focused design, and machine learning that adapts to your lifestyle.';
      } else {
        response = language === 'nl'
          ? 'Bedankt voor uw vraag. Ons team is toegewijd aan het bieden van gepersonaliseerde zorgoplossingen. Voor meer specifieke informatie kunt u contact opnemen met ons ondersteuningsteam op support@mobile-care.nl of bel ons op +31 (0)10 123 4567.'
          : 'Thank you for your question. Our team is dedicated to providing personalized care solutions. For more specific information, please reach out to our support team at support@mobile-care.nl or call us at +31 (0)10 123 4567.';
      }

      const aiMessage: Message = {
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
      
      toast({
        title: language === 'nl' ? "Nieuw bericht van AI Guardian" : "New message from AI Guardian",
        description: language === 'nl' ? "De assistent heeft gereageerd op uw vraag." : "The assistant has responded to your inquiry.",
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
