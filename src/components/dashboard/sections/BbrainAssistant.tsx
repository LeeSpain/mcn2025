
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mic, Calendar, Settings } from 'lucide-react';

const BbrainAssistant: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-1.5">
        <h2 className="text-2xl font-semibold tracking-tight">BBrain Voice Assistant</h2>
        <p className="text-muted-foreground">Configure and interact with your BBrain voice assistant</p>
      </div>

      <Tabs defaultValue="commands" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="commands" className="flex items-center gap-2">
            <Mic className="h-4 w-4" />
            Command Center
          </TabsTrigger>
          <TabsTrigger value="routines" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Routines
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Voice Settings
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="commands">
          <Card>
            <CardHeader>
              <CardTitle>Command Center</CardTitle>
              <CardDescription>View and customize voice commands</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Voice command management will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="routines">
          <Card>
            <CardHeader>
              <CardTitle>Routine Creator</CardTitle>
              <CardDescription>Create and manage your daily routines</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Routine creation functionality will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Voice Settings</CardTitle>
              <CardDescription>Configure your BBrain voice assistant</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Voice assistant settings will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BbrainAssistant;
