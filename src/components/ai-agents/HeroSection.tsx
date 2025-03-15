
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="text-center pt-10 md:pt-16">
      <div className="relative inline-block mb-3">
        <div className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium inline-block">
          {t('aiAgents.page.title', 'AI Agents')}
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 bg-gradient-to-r from-mcn-blue-dark to-mcn-blue bg-clip-text text-transparent">
        {t('aiAgents.page.subtitle', 'Advanced AI solutions for seamless client communication')}
      </h1>
      
      <p className="text-xl text-muted-foreground mx-auto max-w-3xl mb-10">
        {t('solutions.ai.description', 
          'Our AI agents streamline communication, reduce workload, and enhance customer service by handling routine interactions while escalating complex cases to human staff.')}
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/contact" className="primary-button inline-flex items-center">
          {t('cta.getStarted', 'Get Started')} <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        
        <Link to="/features#ai" className="outline-button inline-flex items-center">
          {t('cta.learnMore', 'Learn More')}
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
