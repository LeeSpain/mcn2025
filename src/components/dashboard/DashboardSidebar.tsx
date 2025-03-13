
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface DashboardSidebarProps {
  navItems: NavItem[];
  activeSection: string;
  setActiveSection: (id: string) => void;
  isOpen: boolean;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  navItems,
  activeSection,
  setActiveSection,
  isOpen
}) => {
  return (
    <aside 
      className={cn(
        "bg-white border-r border-gray-200 transition-all duration-300 overflow-y-auto flex-shrink-0",
        isOpen ? "w-64" : "w-0 md:w-20"
      )}
    >
      <div className="py-4">
        <div className="px-4 mb-6">
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

        <nav className="space-y-1 px-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={cn(
                "w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                activeSection === item.id
                  ? "bg-mcn-blue text-white"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <item.icon className={cn(
                "mr-3 h-5 w-5",
                !isOpen && "mx-auto"
              )} />
              {isOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
