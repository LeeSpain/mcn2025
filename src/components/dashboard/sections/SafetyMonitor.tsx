
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Activity, AlertTriangle, Home } from 'lucide-react';

const SafetyMonitor: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-1.5">
        <h2 className="text-2xl font-semibold tracking-tight">Safety Monitor</h2>
        <p className="text-muted-foreground">Monitor your home environment and safety settings</p>
      </div>

      <Tabs defaultValue="activity" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="activity" className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Activity Patterns
          </TabsTrigger>
          <TabsTrigger value="emergency" className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Emergency Settings
          </TabsTrigger>
          <TabsTrigger value="environment" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Home Environment
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Activity Pattern Dashboard</CardTitle>
              <CardDescription>Visualize your daily movement patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Activity pattern monitoring will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="emergency">
          <Card>
            <CardHeader>
              <CardTitle>Emergency Settings</CardTitle>
              <CardDescription>Configure your emergency contacts and alert preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Emergency settings configuration will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="environment">
          <Card>
            <CardHeader>
              <CardTitle>Home Environment</CardTitle>
              <CardDescription>Monitor temperature, door/window status, and other home sensors</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Home environment monitoring will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SafetyMonitor;
