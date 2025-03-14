
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfoSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-8 md:p-10 rounded-xl border border-mcn-blue/10 shadow-lg bg-gradient-to-br from-white to-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center md:text-left">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-mcn-blue to-mcn-blue-dark flex items-center justify-center text-white mx-auto md:mx-0 mb-4 shadow-md">
                  <MapPin size={24} />
                </div>
                <h4 className="font-medium mb-2 text-mcn-blue-dark">Our Offices</h4>
                <p className="text-muted-foreground">
                  Hoofdkantoor: Marconistraat 16<br />
                  3281 NN Delfzijl<br /><br />
                  Bijkantoor: Wilhelminaplein 5<br />
                  4875 BZ Etten-Leur
                </p>
              </div>
              
              <div className="text-center md:text-left">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-mcn-blue to-mcn-blue-dark flex items-center justify-center text-white mx-auto md:mx-0 mb-4 shadow-md">
                  <Phone size={24} />
                </div>
                <h4 className="font-medium mb-2 text-mcn-blue-dark">Phone</h4>
                <p className="text-muted-foreground">
                  Customer Support: +31 (0)10 123 4567<br />
                  Sales Inquiries: +31 (0)10 765 4321
                </p>
              </div>
              
              <div className="text-center md:text-left">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-mcn-blue to-mcn-blue-dark flex items-center justify-center text-white mx-auto md:mx-0 mb-4 shadow-md">
                  <Mail size={24} />
                </div>
                <h4 className="font-medium mb-2 text-mcn-blue-dark">Email</h4>
                <p className="text-muted-foreground">
                  General Inquiries: info@mobile-care.nl<br />
                  Support: support@mobile-care.nl<br />
                  Sales: sales@mobile-care.nl
                </p>
              </div>
              
              <div className="text-center md:text-left">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-mcn-blue to-mcn-blue-dark flex items-center justify-center text-white mx-auto md:mx-0 mb-4 shadow-md">
                  <Clock size={24} />
                </div>
                <h4 className="font-medium mb-2 text-mcn-blue-dark">Business Hours</h4>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday: 10:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
