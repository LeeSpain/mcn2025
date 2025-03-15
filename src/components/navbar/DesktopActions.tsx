
import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const DesktopActions: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="hidden md:flex items-center space-x-4">
      <LanguageSwitcher />
      
      {/* Dashboard Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="outline-button flex items-center gap-1.5">
            <LayoutDashboard size={16} />
            <span>Dashboard</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Select Dashboard</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <Link to="/dashboard#home" className="w-full">Member Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Link to="/dashboard#staff" className="w-full">Staff Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Link to="/dashboard#nurse-dashboard" className="w-full">Nurse Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Link to="/dashboard#ai-agent" className="w-full">AI Agent</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Link to="/login" className="outline-button">
        {t('nav.login')}
      </Link>
      <Link to="/signup" className="primary-button">
        {t('nav.signup')}
      </Link>
    </div>
  );
};

export default DesktopActions;
