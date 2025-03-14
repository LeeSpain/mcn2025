
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLogo: React.FC = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-2"
    >
      <div className="w-8 h-8 rounded-lg bg-mcn-blue flex items-center justify-center">
        <span className="text-white font-bold text-lg">M</span>
      </div>
      <span className="font-display font-bold text-xl">MCN</span>
    </Link>
  );
};

export default NavbarLogo;
