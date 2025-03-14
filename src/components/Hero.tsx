
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,119,182,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              {t('hero.subtitle')}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/clients" className="primary-button flex items-center justify-center">
                {t('hero.primaryCta')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/features" className="outline-button flex items-center justify-center">
                {t('hero.secondaryCta')}
              </Link>
            </div>
            
            {/* Feature Badges */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="feature-badge">
                {t('hero.feature1')}
              </div>
              <div className="feature-badge">
                {t('hero.feature2')}
              </div>
              <div className="feature-badge">
                {t('hero.feature3')}
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="w-full lg:w-1/2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-soft-2xl glass-card p-1">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-mcn-blue-light via-mcn-blue to-mcn-blue-dark"></div>
                <div className="w-full h-full bg-[url('/images/hero-image.jpg')] bg-cover bg-center rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
