
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, BookOpen, Settings } from 'lucide-react';
import HealthMonitoring from '../HealthMonitoring';
import ClientEducation from '../ClientEducation';
import AdminTools from '../AdminTools';

const StaffToolTabs: React.FC = () => {
  return (
    <Tabs defaultValue="health-monitoring" className="w-full">
      <TabsList className="grid grid-cols-3 mb-4">
        <TabsTrigger value="health-monitoring" className="flex items-center space-x-1">
          <Heart className="h-4 w-4 mr-1" />
          <span>Health Monitoring</span>
        </TabsTrigger>
        <TabsTrigger value="client-education" className="flex items-center space-x-1">
          <BookOpen className="h-4 w-4 mr-1" />
          <span>Client Education</span>
        </TabsTrigger>
        <TabsTrigger value="admin-tools" className="flex items-center space-x-1">
          <Settings className="h-4 w-4 mr-1" />
          <span>Admin Tools</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="health-monitoring">
        <HealthMonitoring />
      </TabsContent>

      <TabsContent value="client-education">
        <ClientEducation />
      </TabsContent>

      <TabsContent value="admin-tools">
        <AdminTools />
      </TabsContent>
    </Tabs>
  );
};

export default StaffToolTabs;
