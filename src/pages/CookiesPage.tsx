
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const CookiesPage = () => {
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
                Cookie Policy
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
              <h2>1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
              </p>
              
              <h2>2. How We Use Cookies</h2>
              <p>
                Mobile Care Nexus uses cookies for a variety of purposes, including:
              </p>
              <ul>
                <li><strong>Essential cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</li>
                <li><strong>Preference cookies:</strong> These cookies allow the website to remember choices you have made in the past, like language preferences or login information.</li>
                <li><strong>Analytics cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                <li><strong>Marketing cookies:</strong> These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.</li>
              </ul>
              
              <h2>3. Types of Cookies We Use</h2>
              <h3>3.1 First-Party Cookies</h3>
              <p>
                These are cookies that are set by our website directly. They are used to maintain your session and remember your preferences.
              </p>
              
              <h3>3.2 Third-Party Cookies</h3>
              <p>
                These are cookies that are set by our partners and service providers. They help us analyze site usage, personalize content, and provide relevant advertising.
              </p>
              
              <h2>4. How to Manage Cookies</h2>
              <p>
                Most web browsers allow you to control cookies through their settings preferences. However, limiting the ability of websites to set cookies may impact your overall user experience. Below are links to manage cookie settings on popular browsers:
              </p>
              <ul>
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener">Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener">Microsoft Edge</a></li>
              </ul>
              
              <h2>5. Cookie Consent</h2>
              <p>
                When you first visit our website, you will be presented with a cookie banner that allows you to accept or decline non-essential cookies. You can change your preferences at any time by clicking on the "Cookie Settings" link in the footer of our website.
              </p>
              
              <h2>6. Changes to This Cookie Policy</h2>
              <p>
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
              </p>
              
              <h2>7. Contact Us</h2>
              <p>
                If you have any questions about our Cookie Policy, please contact us:
              </p>
              <p>
                Email: privacy@mobilecarenexus.com<br />
                Phone: (800) 123-4567<br />
                Address: 123 Healthcare Lane, Suite 200, San Francisco, CA 94107, USA
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiesPage;
