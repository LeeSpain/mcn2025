
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const PrivacyPage = () => {
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
                Privacy Policy
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
                Mobile Care Nexus ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, products, and services.
              </p>
              
              <h2>2. Information We Collect</h2>
              <h3>2.1 Personal Information</h3>
              <p>
                We may collect personal information that you provide directly to us, such as:
              </p>
              <ul>
                <li>Contact information (name, email address, phone number, postal address)</li>
                <li>Account credentials (username, password)</li>
                <li>Profile information (profile picture, biographical information)</li>
                <li>Health information (medical history, health metrics, medication details)</li>
                <li>Payment information (credit card details, billing address)</li>
              </ul>
              
              <h3>2.2 Usage Information</h3>
              <p>
                We automatically collect certain information about how you interact with our platform, including:
              </p>
              <ul>
                <li>Log data (IP address, browser type, pages visited, time spent)</li>
                <li>Device information (hardware model, operating system, unique device identifiers)</li>
                <li>Location information (with your consent)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
              
              <h2>3. How We Use Your Information</h2>
              <p>
                We may use the information we collect for various purposes, including:
              </p>
              <ul>
                <li>Providing, maintaining, and improving our services</li>
                <li>Processing transactions and sending transaction notifications</li>
                <li>Sending service announcements and administrative messages</li>
                <li>Responding to your comments, questions, and requests</li>
                <li>Personalizing your experience on our platform</li>
                <li>Monitoring and analyzing trends, usage, and activities</li>
                <li>Detecting, investigating, and preventing fraudulent transactions and unauthorized access</li>
                <li>Complying with legal obligations</li>
              </ul>
              
              <h2>4. Sharing of Information</h2>
              <p>
                We may share your information in the following circumstances:
              </p>
              <ul>
                <li>With healthcare providers and caregivers authorized by you</li>
                <li>With third-party service providers who perform services on our behalf</li>
                <li>In connection with a business transaction, such as a merger, sale of assets, or acquisition</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>With your consent or at your direction</li>
              </ul>
              
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
              </p>
              
              <h2>6. Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>Accessing, correcting, or deleting your information</li>
                <li>Objecting to or restricting processing of your information</li>
                <li>Data portability</li>
                <li>Withdrawing consent at any time</li>
              </ul>
              
              <h2>7. Changes to this Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible.
              </p>
              
              <h2>8. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
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

export default PrivacyPage;
