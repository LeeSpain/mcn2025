
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

const CareManagerPage = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      <NavBar />
      
      <main>
        <section className="py-20 bg-gradient-to-b from-mcn-blue/10 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-mcn-blue-dark to-mcn-blue bg-clip-text text-transparent mb-6">
                {t('careManager.page.title', 'Care Manager')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t('careManager.page.description', 'Comprehensive care coordination platform that centralizes health data, care plans, and provider communication.')}
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-mcn-blue/10 to-mcn-blue/5 p-6 rounded-xl">
                <div className="aspect-video bg-white rounded-lg shadow-lg"></div>
              </div>
              <div>
                <h2 className="text-3xl font-display font-semibold mb-4">
                  {t('solutions.page.title', 'Comprehensive Healthcare Solutions')}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {t('solutions.page.description', 'Mobile Care Nexus provides a comprehensive suite of integrated solutions designed to enhance healthcare delivery, improve client outcomes, and streamline operations.')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CareManagerPage;
