
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  isStaff?: boolean;
  isMember?: boolean;
  isNurse?: boolean;
}

interface DashboardSidebarProps {
  navItems: NavItem[];
  activeSection: string;
  setActiveSection: (id: string) => void;
  isOpen: boolean;
  isStaffPortal?: boolean;
  isNursePortal?: boolean;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  navItems,
  activeSection,
  setActiveSection,
  isOpen,
  isStaffPortal = false,
  isNursePortal = false
}) => {
  return (
    <aside 
      className={cn(
        "bg-white border-r border-gray-200 transition-all duration-300 overflow-hidden h-[calc(100vh-64px)] flex-shrink-0",
        isOpen ? "w-64" : "w-0 md:w-20"
      )}
    >
      <div className="h-full flex flex-col">
        <div className="px-4 mb-4 pt-4">
          {isOpen && (
            <div className="h-12 flex items-center">
              <img 
                src="/placeholder.svg" 
                alt="MCN Logo" 
                className="h-8"
              />
            </div>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto px-2 pb-4">
          {/* Portal Label */}
          {isOpen && (
            <div className="mb-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {isStaffPortal ? 'Staff Portal' : isNursePortal ? 'Nurse Portal' : 'Member Portal'}
            </div>
          )}
          
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  // Update URL hash without full page reload
                  window.location.hash = item.id;
                }}
                className={cn(
                  "w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  activeSection === item.id
                    ? "bg-mcn-blue text-white"
                    : "text-gray-700 hover:bg-gray-100",
                  !isOpen && "justify-center"
                )}
              >
                <item.icon className={cn(
                  "h-5 w-5",
                  isOpen ? "mr-3" : "mx-auto"
                )} />
                {isOpen && <span className="truncate">{item.label}</span>}
              </button>
            ))}
          </div>
        </nav>
        
        {/* Version info at bottom */}
        {isOpen && (
          <div className="px-4 py-2 text-xs text-gray-500 border-t border-gray-200">
            <p>MCN Healthcare v1.0.2</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default DashboardSidebar;
