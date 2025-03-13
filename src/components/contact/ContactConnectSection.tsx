
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ConnectCard from './ConnectCard';

const ContactConnectSection: React.FC = () => {
  return (
    <div className="lg:pl-6">
      <h3 className="text-2xl font-display font-semibold mb-6">Connect With Us</h3>
      
      <div className="space-y-8">
        <ConnectCard
          icon={<Mail size={20} />}
          title="Email"
          description="For general inquiries:"
          content={
            <a href="mailto:info@mobile-care.nl" className="text-mcn-blue hover:underline">
              info@mobile-care.nl
            </a>
          }
        />
        
        <ConnectCard
          icon={<Phone size={20} />}
          title="Phone"
          description="Monday to Friday, 9AM-5PM CET:"
          content={
            <a href="tel:+31612345678" className="text-mcn-blue hover:underline">
              +31 6 1234 5678
            </a>
          }
        />
        
        <ConnectCard
          icon={<MapPin size={20} />}
          title="Location"
          description="Our head office:"
          content={
            <address className="not-italic">
              Delfzijlstraat 123<br />
              9933 AA Delfzijl<br />
              The Netherlands
            </address>
          }
        />
        
        <div className="p-6 rounded-xl bg-mcn-blue text-white">
          <h4 className="text-lg font-medium mb-3">Beta Program</h4>
          <p className="mb-4 text-white/90">
            Join our beta program and be among the first to experience MCN's transformative care platform.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-4 py-2 bg-white text-mcn-blue-dark rounded-lg font-medium transition-colors hover:bg-opacity-90"
          >
            Sign up for beta
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactConnectSection;
