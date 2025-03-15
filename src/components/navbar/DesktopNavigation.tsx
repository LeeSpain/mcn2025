
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { LayoutDashboard } from 'lucide-react';

const DesktopNavigation: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="hidden md:flex items-center space-x-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/features" className="nav-link">
              {t('nav.features')}
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/clients" className="nav-link">
              {t('nav.clients')}
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/enterprise" className="nav-link">
              {t('nav.enterprise')}
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="nav-link">
              <LayoutDashboard className="h-4 w-4 mr-1" />
              Dashboard
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white p-2 rounded-md shadow-md border">
              <div className="grid min-w-[200px]">
                <Link 
                  to="/dashboard#home" 
                  className="block p-2 rounded hover:bg-gray-100"
                >
                  Member Dashboard
                </Link>
                <Link 
                  to="/dashboard#staff" 
                  className="block p-2 rounded hover:bg-gray-100"
                >
                  Staff Dashboard
                </Link>
                <Link 
                  to="/dashboard#nurse-dashboard" 
                  className="block p-2 rounded hover:bg-gray-100"
                >
                  Nurse Dashboard
                </Link>
                <Link 
                  to="/ai-agent" 
                  className="block p-2 rounded hover:bg-gray-100"
                >
                  {t('nav.aiAgent', 'AI Agent')}
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/contact" className="nav-link">
              {t('nav.contact')}
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNavigation;
