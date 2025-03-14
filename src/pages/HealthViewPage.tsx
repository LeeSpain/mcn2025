
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const HealthViewPage = () => {
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
                Health View
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive health monitoring dashboard providing insights into patient wellness and progress.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-semibold mb-4">Complete Health Visibility</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our Health View platform provides patients and caregivers with a clear, comprehensive view of health metrics,
                  progress tracking, and wellness indicators in an intuitive dashboard.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-mcn-blue/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mcn-blue"></div>
                    </div>
                    <p>Interactive health metrics dashboard</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-mcn-blue/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mcn-blue"></div>
                    </div>
                    <p>Progress tracking with visual trends</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-mcn-blue/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mcn-blue"></div>
                    </div>
                    <p>Custom health goals and achievement tracking</p>
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

export default HealthViewPage;
