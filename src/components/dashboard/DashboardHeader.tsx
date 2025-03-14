
import React from 'react';
import { Bell, Menu, User, X, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link, useLocation } from 'react-router-dom';

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
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
          
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-mcn-blue">
              {isStaffPortal ? 'MCN Staff Portal' : isNursePortal ? 'MCN Nurse Portal' : 'MCN Member Dashboard'}
            </h1>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Home Link */}
          <Link to="/">
            <Button variant="outline" size="sm" className="gap-1">
              <Home size={16} />
              <span className="hidden sm:inline">Back to Home</span>
            </Button>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell size={20} />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-80 overflow-y-auto">
                {isStaffPortal ? (
                  <>
                    <DropdownMenuItem className="cursor-pointer flex flex-col items-start">
                      <p className="font-medium">New Training Available</p>
                      <p className="text-sm text-muted-foreground">BBrain Hub troubleshooting course</p>
                      <p className="text-xs text-muted-foreground mt-1">15 minutes ago</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer flex flex-col items-start">
                      <p className="font-medium">Team Meeting</p>
                      <p className="text-sm text-muted-foreground">Weekly catchup at 15:00</p>
                      <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
                    </DropdownMenuItem>
                  </>
                ) : isNursePortal ? (
                  <>
                    <DropdownMenuItem className="cursor-pointer flex flex-col items-start">
                      <p className="font-medium">High-Priority Client</p>
                      <p className="text-sm text-muted-foreground">Jan de Vries - Missed medication (2)</p>
                      <p className="text-xs text-muted-foreground mt-1">10 minutes ago</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer flex flex-col items-start">
                      <p className="font-medium">New Care Plan Assignment</p>
                      <p className="text-sm text-muted-foreground">3 care plans pending review</p>
                      <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer flex flex-col items-start">
                      <p className="font-medium">Hospital Discharge</p>
                      <p className="text-sm text-muted-foreground">Anna Koster - Scheduled for follow-up</p>
                      <p className="text-xs text-muted-foreground mt-1">3 hours ago</p>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem className="cursor-pointer flex flex-col items-start">
                      <p className="font-medium">Medication Reminder</p>
                      <p className="text-sm text-muted-foreground">Time to take your morning medication</p>
                      <p className="text-xs text-muted-foreground mt-1">10 minutes ago</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer flex flex-col items-start">
                      <p className="font-medium">Doctor Appointment</p>
                      <p className="text-sm text-muted-foreground">Tomorrow at 10:00 AM</p>
                      <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                    </DropdownMenuItem>
                  </>
                )}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
              {isStaffPortal ? (
                <>
                  <DropdownMenuItem className="cursor-pointer">Schedule</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Performance</DropdownMenuItem>
                </>
              ) : isNursePortal ? (
                <>
                  <DropdownMenuItem className="cursor-pointer">Clinical Schedule</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Documentation</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Certifications</DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem className="cursor-pointer">Membership</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
                </>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
