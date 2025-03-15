
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const CTASection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 my-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          {t('aiAgents.cta.title', 'Ready to Transform Your Client Communication?')}
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          {t('solutions.ai.cta.description', 
            'Join healthcare organizations that have improved client satisfaction, reduced staff workload, and increased operational efficiency with MCN\'s AI Agents.')}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="primary-button inline-flex items-center">
            {t('aiAgents.cta.button', 'Get Started')} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
