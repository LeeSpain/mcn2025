
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { LayoutDashboard } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  
  return (
    <div 
      className={cn(
        "md:hidden fixed inset-0 z-40 bg-white w-full h-screen transition-all duration-300 ease-smooth pt-20",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <nav className="container mx-auto px-6 py-8 flex flex-col space-y-6">
        <Link 
          to="/features" 
          className="text-xl font-medium border-b border-gray-100 pb-4"
          onClick={onClose}
        >
          {t('nav.features')}
        </Link>
        <Link 
          to="/clients" 
          className="text-xl font-medium border-b border-gray-100 pb-4"
          onClick={onClose}
        >
          {t('nav.clients')}
        </Link>
        <Link 
          to="/enterprise" 
          className="text-xl font-medium border-b border-gray-100 pb-4"
          onClick={onClose}
        >
          {t('nav.enterprise')}
        </Link>
        <Link 
          to="/contact" 
          className="text-xl font-medium border-b border-gray-100 pb-4"
          onClick={onClose}
        >
          {t('nav.contact')}
        </Link>
        
        {/* Dashboard Dropdown in Mobile Menu */}
        <div className="border-b border-gray-100 pb-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 text-xl font-medium">
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="cursor-pointer" onClick={onClose}>
                <Link to="/dashboard#home" className="w-full">Member Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" onClick={onClose}>
                <Link to="/dashboard#staff" className="w-full">Staff Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" onClick={onClose}>
                <Link to="/dashboard#nurse-dashboard" className="w-full">Nurse Dashboard</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="pt-2 pb-4 flex justify-center">
          <LanguageSwitcher />
        </div>
        
        <div className="pt-2 flex flex-col space-y-4">
          <Link 
            to="/login" 
            className="outline-button text-center"
            onClick={onClose}
          >
            {t('nav.login')}
          </Link>
          <Link 
            to="/signup" 
            className="primary-button text-center"
            onClick={onClose}
          >
            {t('nav.signup')}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
