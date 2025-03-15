
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

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
            <Link to="/ai-agent" className="nav-link">
              {t('nav.aiAgent', 'AI Agent')}
            </Link>
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
