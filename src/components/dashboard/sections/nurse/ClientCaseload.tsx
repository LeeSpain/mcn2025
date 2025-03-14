
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  UserPlus, 
  Filter, 
  Search, 
  ListFilter,
  HeartPulse,
  AlertCircle,
  CheckCircle,
  ArrowDown
} from 'lucide-react';
import ClientCaseloadOverview from './dashboard/ClientCaseloadOverview';
import HealthOverview from '../staff/client/HealthOverview';

const ClientCaseload: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Client Caseload</h1>
          <p className="text-muted-foreground">
            Manage and monitor your assigned clients
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex space-x-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search clients..."
              className="pl-9 pr-4 py-2 text-sm border rounded-md w-full sm:w-auto min-w-[200px]"
            />
          </div>
          <button className="flex items-center gap-1.5 px-3 py-2 bg-white border rounded-md text-sm">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 bg-mcn-blue text-white rounded-md text-sm">
            <UserPlus className="h-4 w-4" />
            <span>Add Client</span>
          </button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all" className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>All Clients</span>
          </TabsTrigger>
          <TabsTrigger value="high-risk" className="flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            <span>High Risk</span>
          </TabsTrigger>
          <TabsTrigger value="monitoring" className="flex items-center gap-1">
            <HeartPulse className="h-4 w-4" />
            <span>Active Monitoring</span>
          </TabsTrigger>
          <TabsTrigger value="stable" className="flex items-center gap-1">
            <CheckCircle className="h-4 w-4" />
            <span>Stable</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 gap-6">
            <ClientCaseloadOverview fullView={true} />
          </div>
        </TabsContent>
        
        <TabsContent value="high-risk">
          <div className="grid grid-cols-1 gap-6">
            <HealthOverview />
          </div>
        </TabsContent>
        
        <TabsContent value="monitoring">
          <div className="grid grid-cols-1 gap-6">
            <HealthOverview />
          </div>
        </TabsContent>
        
        <TabsContent value="stable">
          <div className="grid grid-cols-1 gap-6">
            <HealthOverview />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClientCaseload;
