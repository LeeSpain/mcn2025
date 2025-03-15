
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  Calendar, 
  Clipboard, 
  Activity, 
  FileText, 
  BookOpen, 
  Shield, 
  BarChart2,
  AlertTriangle,
  Bell,
  Heart,
  Video
} from 'lucide-react';
import ClientCaseloadOverview from './dashboard/ClientCaseloadOverview';
import UpcomingVisits from './dashboard/UpcomingVisits';
import ClinicalAlerts from './dashboard/ClinicalAlerts';
import PendingTasks from './dashboard/PendingTasks';
import QuickActions from './dashboard/QuickActions';

const NurseDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="nurse-dashboard space-y-6 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Nurse Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome, Monique! Manage your client caseload, remote sessions, and clinical interventions
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex space-x-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-mcn-blue text-white rounded-md text-sm">
            <Bell className="h-4 w-4" />
            <span>Clinical Alerts</span>
            <span className="ml-1 bg-white text-mcn-blue rounded-full h-5 w-5 flex items-center justify-center text-xs font-medium">5</span>
          </button>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-6 w-full">
          <TabsTrigger value="overview" className="flex items-center gap-1">
            <Activity className="h-4 w-4" />
            <span>Overview</span>
          </TabsTrigger>
          <TabsTrigger value="clients" className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>Client Caseload</span>
          </TabsTrigger>
          <TabsTrigger value="visits" className="flex items-center gap-1">
            <Video className="h-4 w-4" />
            <span>Today's Relex</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Client Caseload Overview */}
              <ClientCaseloadOverview />
              
              {/* Upcoming Visits Section */}
              <UpcomingVisits />
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              {/* Clinical Alerts */}
              <ClinicalAlerts />
              
              {/* Pending Tasks */}
              <PendingTasks />
              
              {/* Quick Actions */}
              <QuickActions />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="clients" className="space-y-6 w-full">
          <div className="grid grid-cols-1 gap-6 w-full">
            <ClientCaseloadOverview fullView={true} />
          </div>
        </TabsContent>
        
        <TabsContent value="visits" className="space-y-6 w-full">
          <div className="grid grid-cols-1 gap-6 w-full">
            <UpcomingVisits fullView={true} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NurseDashboard;
