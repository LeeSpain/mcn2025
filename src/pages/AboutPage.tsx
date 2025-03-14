
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const AboutPage = () => {
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
                About Us
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Learn about our mission to transform healthcare through innovative technology solutions.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-semibold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At Mobile Care Nexus, we're committed to transforming how healthcare is delivered and experienced.
                  Our integrated platform unifies monitoring, communication, and support systems to create a
                  seamless experience for patients, care providers, and healthcare organizations.
                </p>
                <p className="text-lg text-muted-foreground">
                  Founded by healthcare professionals and technology experts in 2015, we've been at the forefront
                  of digital health innovation, creating solutions that address real challenges in patient care
                  and health management.
                </p>
              </div>
              <div className="bg-gradient-to-br from-mcn-blue/10 to-mcn-blue/5 p-6 rounded-xl">
                <div className="aspect-video bg-white rounded-lg shadow-lg"></div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-mcn-blue/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-display font-semibold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground">
                These core principles guide everything we do at Mobile Care Nexus.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Patient-Centered Innovation</h3>
                <p className="text-muted-foreground">
                  We design every feature with the patient experience in mind, ensuring our technology supports and enhances care.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Seamless Connectivity</h3>
                <p className="text-muted-foreground">
                  We believe in breaking down barriers between systems and people to create truly integrated care experiences.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Empowering Independence</h3>
                <p className="text-muted-foreground">
                  Our solutions are designed to give patients more control over their health while providing peace of mind to caregivers.
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

export default AboutPage;
