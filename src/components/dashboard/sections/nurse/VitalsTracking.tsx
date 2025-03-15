
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BadgeAlert, Plus } from 'lucide-react';
import { clientsList } from './vitals/vitalsData';
import VitalsSummaryCards from './vitals/VitalsSummaryCards';
import VitalsTrendsTab from './vitals/VitalsTrendsTab';
import VitalsLogTab from './vitals/VitalsLogTab';
import ClientsOverviewTab from './vitals/ClientsOverviewTab';

const VitalsTracking: React.FC = () => {
  const [selectedClient, setSelectedClient] = useState(clientsList[0].name);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [activeTab, setActiveTab] = useState('trends');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Vitals Tracking</h1>
          <p className="text-muted-foreground">
            Monitor and manage client vital signs remotely
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex items-center space-x-2">
          <div className="relative">
            <select 
              className="pl-3 pr-8 py-2 border rounded-md w-48 appearance-none"
              value={selectedClient}
              onChange={(e) => setSelectedClient(e.target.value)}
            >
              {clientsList.map(client => (
                <option key={client.id} value={client.name}>{client.name}</option>
              ))}
            </select>
          </div>
          <Button variant="outline" size="sm" className="gap-1">
            <BadgeAlert className="h-4 w-4" />
            Alerts
          </Button>
          <Button size="sm" className="gap-1">
            <Plus className="h-4 w-4" />
            New Reading
          </Button>
        </div>
      </div>

      <VitalsSummaryCards />

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="trends">Vitals Trends</TabsTrigger>
          <TabsTrigger value="log">Vitals Log</TabsTrigger>
          <TabsTrigger value="clients">Client Overview</TabsTrigger>
        </TabsList>
        
        <TabsContent value="trends" className="space-y-4">
          <VitalsTrendsTab selectedClient={selectedClient} />
        </TabsContent>
        
        <TabsContent value="log" className="space-y-4">
          <VitalsLogTab date={date} setDate={setDate} />
        </TabsContent>
        
        <TabsContent value="clients" className="space-y-4">
          <ClientsOverviewTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VitalsTracking;
