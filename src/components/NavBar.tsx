
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth w-full',
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 rounded-lg bg-mcn-blue flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="font-display font-bold text-xl">MCN</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/#features" className="text-foreground hover:text-mcn-blue transition-colors">
              Features
            </Link>
            <Link to="/#clients" className="text-foreground hover:text-mcn-blue transition-colors">
              For Clients
            </Link>
            <Link to="/#staff" className="text-foreground hover:text-mcn-blue transition-colors">
              For Staff
            </Link>
            <Link to="/#contact" className="text-foreground hover:text-mcn-blue transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="outline-button">
              Login
            </Link>
            <Link to="/signup" className="primary-button">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-white w-full h-screen transition-all duration-300 ease-smooth pt-20",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="container mx-auto px-6 py-8 flex flex-col space-y-6">
          <Link 
            to="/#features" 
            className="text-xl font-medium border-b border-gray-100 pb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link 
            to="/#clients" 
            className="text-xl font-medium border-b border-gray-100 pb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            For Clients
          </Link>
          <Link 
            to="/#staff" 
            className="text-xl font-medium border-b border-gray-100 pb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            For Staff
          </Link>
          <Link 
            to="/#contact" 
            className="text-xl font-medium border-b border-gray-100 pb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-6 flex flex-col space-y-4">
            <Link 
              to="/login" 
              className="outline-button text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="primary-button text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
