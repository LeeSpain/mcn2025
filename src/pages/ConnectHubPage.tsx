
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const ConnectHubPage = () => {
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
                Connect Hub
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Unified communication platform connecting patients, families, and healthcare providers in one secure space.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-semibold mb-4">Seamless Communication for Better Care</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our Connect Hub creates a centralized communication platform where patients, family members, and healthcare 
                  providers can securely share information, updates, and coordinate care activities.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-mcn-blue/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mcn-blue"></div>
                    </div>
                    <p>Secure messaging with end-to-end encryption</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-mcn-blue/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mcn-blue"></div>
                    </div>
                    <p>Video consultation capabilities</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-mcn-blue/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mcn-blue"></div>
                    </div>
                    <p>Document sharing and collaborative care notes</p>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-mcn-blue/10 to-mcn-blue/5 p-6 rounded-xl">
                <div className="aspect-video bg-white rounded-lg shadow-lg"></div>
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
