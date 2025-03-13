
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CircleUser,
  Clock,
  Phone,
  MessageSquare,
  Video,
  PhoneCall,
  CheckCircle2,
  FileText,
  AlertCircle,
  Search,
  Users,
  Headphones,
  Heart
} from 'lucide-react';
import AgentWorkspace from './staff/AgentWorkspace';
import ClientProfile from './staff/ClientProfile';
import LiveAssistance from './staff/LiveAssistance';

const StaffDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
        <div>
          <h1 className="text-2xl font-bold">MCN Call Center & Customer Service Dashboard</h1>
          <p className="text-muted-foreground">Comprehensive client support and service management</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="bg-green-100 text-green-700 border-green-200 hover:bg-green-200">
            <CircleUser className="mr-2 h-4 w-4" />
            Available
          </Button>
          <Button variant="outline" size="sm">
            <Clock className="mr-2 h-4 w-4" />
            Shift: 4:25:12
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main agent workspace - 8 columns on large screens */}
        <div className="lg:col-span-8 space-y-6">
          <AgentWorkspace />
          <LiveAssistance />
        </div>

        {/* Client profile sidebar - 4 columns on large screens */}
        <div className="lg:col-span-4 space-y-6">
          <ClientProfile />
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
