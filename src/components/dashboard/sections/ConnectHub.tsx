
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Video, MessageSquare, Users, CalendarClock } from 'lucide-react';

const ConnectHub: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-1.5">
        <h2 className="text-2xl font-semibold tracking-tight">Connect Hub</h2>
        <p className="text-muted-foreground">Stay connected with family, caregivers, and your community</p>
      </div>

      <Tabs defaultValue="video" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="video" className="flex items-center gap-2">
            <Video className="h-4 w-4" />
            Video Calls
          </TabsTrigger>
          <TabsTrigger value="messaging" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Messaging
          </TabsTrigger>
          <TabsTrigger value="care-circle" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Care Circle
          </TabsTrigger>
          <TabsTrigger value="community" className="flex items-center gap-2">
            <CalendarClock className="h-4 w-4" />
            Community
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="video">
          <Card>
            <CardHeader>
              <CardTitle>Video Call Center</CardTitle>
              <CardDescription>Make video calls to your family and caregivers</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Video calling functionality will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="messaging">
          <Card>
            <CardHeader>
              <CardTitle>Messaging Center</CardTitle>
              <CardDescription>Send and receive messages</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Messaging functionality will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="care-circle">
          <Card>
            <CardHeader>
              <CardTitle>Care Circle Management</CardTitle>
              <CardDescription>Manage your care circle members and their permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Care circle management will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="community">
          <Card>
            <CardHeader>
              <CardTitle>Community Connection</CardTitle>
              <CardDescription>Discover local events and connect with your community</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Community features will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ConnectHub;
