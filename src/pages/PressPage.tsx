
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const PressPage = () => {
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
                Press & Media
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Browse the latest press releases, news coverage, and media resources about Mobile Care Nexus.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-semibold mb-8 text-center">Press Releases</h2>
              
              <div className="space-y-8">
                <div className="border border-mcn-gray rounded-xl p-6 hover:border-mcn-blue transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Mobile Care Nexus Raises $25M Series B to Expand Connected Healthcare Platform</h3>
                    <span className="text-sm text-muted-foreground">July 12, 2023</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Funding will accelerate product development and market expansion for the company's integrated healthcare monitoring and communication platform.
                  </p>
                  <button className="text-mcn-blue hover:text-mcn-blue-dark font-medium">Read Full Release →</button>
                </div>
                
                <div className="border border-mcn-gray rounded-xl p-6 hover:border-mcn-blue transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Mobile Care Nexus Announces Partnership with National Healthcare Network</h3>
                    <span className="text-sm text-muted-foreground">May 4, 2023</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Strategic partnership will bring advanced remote monitoring and care coordination tools to over 200 healthcare facilities nationwide.
                  </p>
                  <button className="text-mcn-blue hover:text-mcn-blue-dark font-medium">Read Full Release →</button>
                </div>
                
                <div className="border border-mcn-gray rounded-xl p-6 hover:border-mcn-blue transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Mobile Care Nexus Launches Next-Generation Safety Monitoring System</h3>
                    <span className="text-sm text-muted-foreground">March 21, 2023</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    New AI-powered monitoring solution provides enhanced fall detection and predictive health alerts for vulnerable patients.
                  </p>
                  <button className="text-mcn-blue hover:text-mcn-blue-dark font-medium">Read Full Release →</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-mcn-blue/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-semibold mb-8 text-center">Media Coverage</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-24 h-8 bg-mcn-blue/10 rounded"></div>
                    <span className="text-sm text-muted-foreground">June 5, 2023</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">"How Mobile Care Nexus is Transforming Home Healthcare"</h3>
                  <p className="text-muted-foreground mb-4">
                    Feature article exploring how our platform is helping patients age in place while maintaining high quality care standards.
                  </p>
                  <button className="text-mcn-blue hover:text-mcn-blue-dark font-medium">Read Article →</button>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-24 h-8 bg-mcn-blue/10 rounded"></div>
                    <span className="text-sm text-muted-foreground">April 18, 2023</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">"Tech Solutions Addressing the Caregiver Shortage Crisis"</h3>
                  <p className="text-muted-foreground mb-4">
                    Industry analysis featuring Mobile Care Nexus as a leading innovator in healthcare technology solutions.
                  </p>
                  <button className="text-mcn-blue hover:text-mcn-blue-dark font-medium">Read Article →</button>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-24 h-8 bg-mcn-blue/10 rounded"></div>
                    <span className="text-sm text-muted-foreground">February 23, 2023</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">"The Future of Connected Healthcare: Interview with MCN CEO"</h3>
                  <p className="text-muted-foreground mb-4">
                    In-depth interview discussing industry trends and the vision behind Mobile Care Nexus.
                  </p>
                  <button className="text-mcn-blue hover:text-mcn-blue-dark font-medium">Read Article →</button>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-24 h-8 bg-mcn-blue/10 rounded"></div>
                    <span className="text-sm text-muted-foreground">January 10, 2023</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">"50 Healthcare Startups to Watch in 2023"</h3>
                  <p className="text-muted-foreground mb-4">
                    Mobile Care Nexus recognized among the top healthcare technology innovators to watch this year.
                  </p>
                  <button className="text-mcn-blue hover:text-mcn-blue-dark font-medium">Read Article →</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PressPage;
