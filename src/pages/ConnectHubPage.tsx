
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

const ConnectHubPage = () => {
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
                {t('connectHub.page.title', 'Connect Hub')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t('connectHub.page.description', 'Communication platform that connects clients with caregivers, family members, and healthcare providers.')}
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-mcn-blue/10 to-mcn-blue/5 p-6 rounded-xl order-2 md:order-1">
                <div className="aspect-video bg-white rounded-lg shadow-lg"></div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-display font-semibold mb-4">
                  {t('connectHub.section.title', 'Seamless Communication for Better Care')}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {t('connectHub.section.description', 'Our Connect Hub solution enables seamless communication between clients, family members, and care providers, ensuring everyone stays informed and connected.')}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-mcn-blue/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mcn-blue"></div>
                    </div>
                    <p>{t('connectHub.feature.videoCall', 'Secure video calling with family and caregivers')}</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-mcn-blue/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mcn-blue"></div>
                    </div>
                    <p>{t('connectHub.feature.messaging', 'Encrypted messaging for sensitive communications')}</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-mcn-blue/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mcn-blue"></div>
                    </div>
                    <p>{t('connectHub.feature.updates', 'Automated care updates and notifications')}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ConnectHubPage;
