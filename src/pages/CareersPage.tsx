
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const CareersPage = () => {
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
                Join Our Team
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Build a career where you can make a real difference in healthcare through technology.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-semibold mb-6 text-center">Why Work With Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-mcn-blue/5 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3">Meaningful Impact</h3>
                  <p className="text-muted-foreground">
                    Our solutions directly improve the quality of care and life for patients and caregivers every day.
                  </p>
                </div>
                <div className="p-6 bg-mcn-blue/5 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3">Innovation Culture</h3>
                  <p className="text-muted-foreground">
                    We encourage creative thinking and provide the resources to turn great ideas into reality.
                  </p>
                </div>
                <div className="p-6 bg-mcn-blue/5 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3">Growth Opportunities</h3>
                  <p className="text-muted-foreground">
                    Continuous learning and professional development are core to our values and your success.
                  </p>
                </div>
                <div className="p-6 bg-mcn-blue/5 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
                  <p className="text-muted-foreground">
                    We believe in supporting our team with flexible work arrangements and comprehensive benefits.
                  </p>
                </div>
              </div>
              
              <h2 className="text-3xl font-display font-semibold mb-6 text-center">Open Positions</h2>
              <div className="space-y-4">
                <div className="border border-mcn-gray rounded-lg p-6 hover:border-mcn-blue transition-colors">
                  <h3 className="text-xl font-semibold mb-2">Senior Full Stack Developer</h3>
                  <p className="text-sm text-muted-foreground mb-4">Remote • Full-time</p>
                  <p className="mb-4">Join our engineering team to build and enhance our core healthcare platform using modern web technologies.</p>
                  <button className="text-mcn-blue hover:text-mcn-blue-dark font-medium">Learn More →</button>
                </div>
                <div className="border border-mcn-gray rounded-lg p-6 hover:border-mcn-blue transition-colors">
                  <h3 className="text-xl font-semibold mb-2">UX/UI Designer</h3>
                  <p className="text-sm text-muted-foreground mb-4">Hybrid • Full-time</p>
                  <p className="mb-4">Create intuitive, accessible interfaces that help patients and healthcare providers navigate our platform with ease.</p>
                  <button className="text-mcn-blue hover:text-mcn-blue-dark font-medium">Learn More →</button>
                </div>
                <div className="border border-mcn-gray rounded-lg p-6 hover:border-mcn-blue transition-colors">
                  <h3 className="text-xl font-semibold mb-2">Healthcare Integration Specialist</h3>
                  <p className="text-sm text-muted-foreground mb-4">Remote • Full-time</p>
                  <p className="mb-4">Collaborate with healthcare organizations to ensure seamless integration of our platform with their existing systems.</p>
                  <button className="text-mcn-blue hover:text-mcn-blue-dark font-medium">Learn More →</button>
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

export default CareersPage;
