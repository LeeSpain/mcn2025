
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-mcn-gray-light border-t border-mcn-gray relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(0,119,182,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-mcn-blue flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="font-display font-bold text-xl">MCN</span>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Mobile Care Nexus unifies healthcare monitoring, communication, and support in one seamless platform.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue transition-colors hover:bg-mcn-blue hover:text-white"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue transition-colors hover:bg-mcn-blue hover:text-white"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue transition-colors hover:bg-mcn-blue hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue transition-colors hover:bg-mcn-blue hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/care-manager" className="text-muted-foreground hover:text-mcn-blue transition-colors">
                  Care Manager
                </Link>
              </li>
              <li>
                <Link to="/safety-monitor" className="text-muted-foreground hover:text-mcn-blue transition-colors">
                  Safety Monitor
                </Link>
              </li>
              <li>
                <Link to="/connect-hub" className="text-muted-foreground hover:text-mcn-blue transition-colors">
                  Connect Hub
                </Link>
              </li>
              <li>
                <Link to="/shop-gateway" className="text-muted-foreground hover:text-mcn-blue transition-colors">
                  Shop Gateway
                </Link>
              </li>
              <li>
                <Link to="/health-view" className="text-muted-foreground hover:text-mcn-blue transition-colors">
                  Health View
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-mcn-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-mcn-blue transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-mcn-blue transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-muted-foreground hover:text-mcn-blue transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-mcn-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-2 rounded-l-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-mcn-blue focus:border-transparent"
                />
                <button 
                  type="submit" 
                  className="bg-mcn-blue text-white px-4 py-2 rounded-r-lg border border-mcn-blue hover:bg-mcn-blue-dark transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>
            
            <p className="text-xs text-muted-foreground">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-mcn-gray flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Mobile Care Nexus. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-4 md:gap-8">
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-mcn-blue">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-mcn-blue">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-mcn-blue">
              Cookie Policy
            </Link>
            <Link to="/accessibility" className="text-sm text-muted-foreground hover:text-mcn-blue">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
