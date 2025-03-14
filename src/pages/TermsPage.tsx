
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const TermsPage = () => {
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
                Terms of Service
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Last updated: June 1, 2023
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto prose prose-headings:font-display prose-headings:font-semibold prose-h2:text-2xl prose-h3:text-xl prose-p:text-muted-foreground">
              <h2>1. Introduction</h2>
              <p>
                Welcome to Mobile Care Nexus. By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
              </p>
              
              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily access and use the Mobile Care Nexus platform for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul>
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose;</li>
                <li>Attempt to decompile or reverse engineer any software contained in the Mobile Care Nexus platform;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              
              <h2>3. Disclaimer</h2>
              <p>
                The materials on the Mobile Care Nexus platform are provided on an 'as is' basis. Mobile Care Nexus makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              
              <h2>4. Limitations</h2>
              <p>
                In no event shall Mobile Care Nexus or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Mobile Care Nexus platform, even if Mobile Care Nexus or a Mobile Care Nexus authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              
              <h2>5. Accuracy of Materials</h2>
              <p>
                The materials appearing on the Mobile Care Nexus platform could include technical, typographical, or photographic errors. Mobile Care Nexus does not warrant that any of the materials on its platform are accurate, complete, or current. Mobile Care Nexus may make changes to the materials contained on its platform at any time without notice.
              </p>
              
              <h2>6. Links</h2>
              <p>
                Mobile Care Nexus has not reviewed all of the sites linked to its platform and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Mobile Care Nexus of the site. Use of any such linked website is at the user's own risk.
              </p>
              
              <h2>7. Modifications</h2>
              <p>
                Mobile Care Nexus may revise these terms of service for its platform at any time without notice. By using this platform, you are agreeing to be bound by the then current version of these terms of service.
              </p>
              
              <h2>8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction] and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsPage;
