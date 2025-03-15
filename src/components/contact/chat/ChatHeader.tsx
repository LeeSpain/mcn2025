
import React from 'react';
import { Bot } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ChatHeader: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="text-center mb-8">
      <div className="p-1 bg-gradient-to-r from-mcn-blue to-mcn-blue-dark/80 rounded-full inline-block mb-4 shadow-md">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-mcn-blue">
          <Bot size={28} />
        </div>
      </div>
      <h2 className="text-3xl font-display font-semibold mb-4 bg-gradient-to-r from-mcn-blue-dark to-mcn-blue bg-clip-text text-transparent">
        {t('contact.chat.title', 'AI Guardian Chat Assistant')}
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        {t('contact.chat.description', 'Have questions about our services? Our AI Guardian assistant is here to help 24/7. Just type your question below to get started.')}
      </p>
    </div>
  );
};

export default ChatHeader;
