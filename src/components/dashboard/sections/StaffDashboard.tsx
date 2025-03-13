
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CircleUser,
  Clock,
  Users,
  Headphones,
  FileText,
  Phone,
  Heart,
  ShieldAlert,
  Wrench,
  BookOpen,
  BarChart,
  MessageSquare,
  Settings
} from 'lucide-react';

// Import all the required components
import AgentWorkspace from './staff/AgentWorkspace';
import ClientProfile from './staff/ClientProfile';
import LiveAssistance from './staff/LiveAssistance';
import HealthMonitoring from './staff/HealthMonitoring';
import TechnicalSupport from './staff/TechnicalSupport';
import ClientEducation from './staff/ClientEducation';
import ServiceManagement from './staff/ServiceManagement';
import QualityAssurance from './staff/QualityAssurance';
import EscalationSupport from './staff/EscalationSupport';
import Analytics from './staff/Analytics';
import AdminTools from './staff/AdminTools';

const StaffDashboard: React.FC = () => {
  const [agentStatus, setAgentStatus] = useState<'available' | 'busy' | 'away'>('available');
  
  const getStatusButtonClass = (status: string) => {
    switch(status) {
      case 'available':
        return 'bg-green-100 text-green-700 border-green-200 hover:bg-green-200';
      case 'busy':
        return 'bg-red-100 text-red-700 border-red-200 hover:bg-red-200';
      case 'away':
        return 'bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-200';
      default:
        return '';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
        <div>
          <h1 className="text-2xl font-bold">MCN Call Center & Customer Service Dashboard</h1>
          <p className="text-muted-foreground">Comprehensive client support and service management</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative group">
            <Button 
              variant="outline" 
              size="sm" 
              className={getStatusButtonClass(agentStatus)}
              onClick={() => {
                // Cycle through statuses: available -> busy -> away -> available
                const nextStatus = agentStatus === 'available' ? 'busy' : agentStatus === 'busy' ? 'away' : 'available';
                setAgentStatus(nextStatus);
              }}
            >
              <CircleUser className="mr-2 h-4 w-4" />
              {agentStatus === 'available' ? 'Available' : agentStatus === 'busy' ? 'Busy' : 'Away'}
            </Button>
          </div>
          <Button variant="outline" size="sm">
            <Clock className="mr-2 h-4 w-4" />
            Shift: 4:25:12
          </Button>
        </div>
      </div>

      <Tabs defaultValue="workspace" className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-11 mb-4">
          <TabsTrigger value="workspace" className="flex items-center space-x-1">
            <Headphones className="h-4 w-4" />
            <span className="hidden md:inline">Workspace</span>
          </TabsTrigger>
          <TabsTrigger value="client-profile" className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span className="hidden md:inline">Client</span>
          </TabsTrigger>
          <TabsTrigger value="live-assistance" className="flex items-center space-x-1">
            <Phone className="h-4 w-4" />
            <span className="hidden md:inline">Assistance</span>
          </TabsTrigger>
          <TabsTrigger value="health-monitoring" className="flex items-center space-x-1">
            <Heart className="h-4 w-4" />
            <span className="hidden md:inline">Health</span>
          </TabsTrigger>
          <TabsTrigger value="technical-support" className="flex items-center space-x-1">
            <Wrench className="h-4 w-4" />
            <span className="hidden md:inline">Tech</span>
          </TabsTrigger>
          <TabsTrigger value="client-education" className="flex items-center space-x-1">
            <BookOpen className="h-4 w-4" />
            <span className="hidden md:inline">Education</span>
          </TabsTrigger>
          <TabsTrigger value="service-management" className="flex items-center space-x-1">
            <FileText className="h-4 w-4" />
            <span className="hidden md:inline">Service</span>
          </TabsTrigger>
          <TabsTrigger value="quality-assurance" className="flex items-center space-x-1">
            <ShieldAlert className="h-4 w-4" />
            <span className="hidden md:inline">Quality</span>
          </TabsTrigger>
          <TabsTrigger value="escalation" className="flex items-center space-x-1">
            <MessageSquare className="h-4 w-4" />
            <span className="hidden md:inline">Escalation</span>
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center space-x-1">
            <BarChart className="h-4 w-4" />
            <span className="hidden md:inline">Analytics</span>
          </TabsTrigger>
          <TabsTrigger value="admin" className="flex items-center space-x-1">
            <Settings className="h-4 w-4" />
            <span className="hidden md:inline">Admin</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="workspace" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 space-y-6">
              <AgentWorkspace />
            </div>
            <div className="lg:col-span-4 space-y-6">
              <ClientProfile />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="client-profile" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-12">
              <ClientProfile />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="live-assistance" className="space-y-6">
          <LiveAssistance />
        </TabsContent>

        <TabsContent value="health-monitoring" className="space-y-6">
          <HealthMonitoring />
        </TabsContent>

        <TabsContent value="technical-support" className="space-y-6">
          <TechnicalSupport />
        </TabsContent>

        <TabsContent value="client-education" className="space-y-6">
          <ClientEducation />
        </TabsContent>

        <TabsContent value="service-management" className="space-y-6">
          <ServiceManagement />
        </TabsContent>

        <TabsContent value="quality-assurance" className="space-y-6">
          <QualityAssurance />
        </TabsContent>

        <TabsContent value="escalation" className="space-y-6">
          <EscalationSupport />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Analytics />
        </TabsContent>

        <TabsContent value="admin" className="space-y-6">
          <AdminTools />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StaffDashboard;
