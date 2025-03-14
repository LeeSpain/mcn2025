
import React from 'react';
import { Menu, Bell, X } from 'lucide-react';
import LanguageSwitcher from '../LanguageSwitcher';

interface DashboardHeaderProps {
  toggleSidebar: () => void;
  sidebarOpen: boolean;
  isStaffPortal?: boolean;
  isNursePortal?: boolean;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ 
  toggleSidebar, 
  sidebarOpen,
  isStaffPortal = false,
  isNursePortal = false
}) => {
  const portalType = isStaffPortal ? 'Staff Portal' : isNursePortal ? 'Nurse Portal' : 'Member Portal';
  
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6">
      <button 
        onClick={toggleSidebar}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-9 w-9"
      >
        {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        <span className="sr-only">Toggle Menu</span>
      </button>
      
      <div className="flex-1">
        <h1 className="text-lg font-semibold">MCN {portalType}</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-9 w-9">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </button>
        
        <div className="h-8 w-8 rounded-full bg-mcn-blue-light flex items-center justify-center text-white font-medium">
          {isStaffPortal ? 'SP' : isNursePortal ? 'NP' : 'MP'}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
