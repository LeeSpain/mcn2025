
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const AccessibilityPage = () => {
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
                Accessibility Statement
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
              <h2>Our Commitment to Accessibility</h2>
              <p>
                Mobile Care Nexus is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
              
              <h2>Standards We Follow</h2>
              <p>
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.
              </p>
              <p>
                The guidelines have three levels of accessibility (A, AA, and AAA). We've chosen Level AA as our target.
              </p>
              
              <h2>How We're Achieving Accessibility</h2>
              <p>
                We're working to achieve our accessibility goals in a number of ways:
              </p>
              <ul>
                <li>Providing text alternatives for non-text content</li>
                <li>Providing captions and other alternatives for multimedia</li>
                <li>Creating content that can be presented in different ways without losing information</li>
                <li>Making it easier for users to see and hear content</li>
                <li>Making all functionality available from a keyboard</li>
                <li>Giving users enough time to read and use content</li>
                <li>Not designing content in a way that is known to cause seizures</li>
                <li>Providing ways to help users navigate and find content</li>
                <li>Making text readable and understandable</li>
                <li>Making content appear and operate in predictable ways</li>
                <li>Helping users avoid and correct mistakes</li>
                <li>Maximizing compatibility with current and future user tools</li>
              </ul>
              
              <h2>Accessibility Features</h2>
              <p>
                Our platform includes the following accessibility features:
              </p>
              <ul>
                <li>Proper heading structure to allow screen reader users to navigate easily</li>
                <li>Alt text for all informative images</li>
                <li>Color contrast that meets WCAG 2.1 AA standards</li>
                <li>Keyboard accessibility for all interactive elements</li>
                <li>Form labels and error messages that are programmatically associated with inputs</li>
                <li>ARIA landmarks to identify regions of the page</li>
                <li>Resizable text without loss of functionality</li>
                <li>Text spacing adjustments</li>
              </ul>
              
              <h2>Limitations and Alternatives</h2>
              <p>
                Despite our best efforts, there may be some parts of our platform that are not fully accessible. In these cases, we offer the following alternatives:
              </p>
              <ul>
                <li>Email support at accessibility@mobilecarenexus.com</li>
                <li>Phone support at (800) 123-4567</li>
                <li>Live chat support available during business hours</li>
              </ul>
              
              <h2>Feedback and Contact Information</h2>
              <p>
                We welcome your feedback on the accessibility of the Mobile Care Nexus platform. Please let us know if you encounter barriers:
              </p>
              <ul>
                <li>Email: accessibility@mobilecarenexus.com</li>
                <li>Phone: (800) 123-4567</li>
                <li>Address: 123 Healthcare Lane, Suite 200, San Francisco, CA 94107, USA</li>
              </ul>
              <p>
                We try to respond to feedback within 2 business days.
              </p>
              
              <h2>Assessment and Compliance Status</h2>
              <p>
                The Mobile Care Nexus platform was last assessed for accessibility compliance on May 15, 2023 through:
              </p>
              <ul>
                <li>Internal assessment by our development team</li>
                <li>Third-party evaluation by AccessibilityWorks Consulting</li>
                <li>User testing with individuals using assistive technology</li>
              </ul>
              <p>
                This statement was last updated on June 1, 2023.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AccessibilityPage;
