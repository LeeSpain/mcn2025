
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Heart, MessageSquare, UserPlus } from 'lucide-react';

const FamilyPortal: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-1.5">
        <h2 className="text-2xl font-semibold tracking-tight">Family Access Portal</h2>
        <p className="text-muted-foreground">Coordinate care with your family members</p>
      </div>

      <Tabs defaultValue="coordination" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="coordination" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Care Coordination
          </TabsTrigger>
          <TabsTrigger value="monitoring" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            Health Monitoring
          </TabsTrigger>
          <TabsTrigger value="communication" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Communication
          </TabsTrigger>
          <TabsTrigger value="providers" className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            Providers
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="coordination">
          <Card>
            <CardHeader>
              <CardTitle>Care Coordination</CardTitle>
              <CardDescription>Coordinate care with your family members</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Care coordination functionality will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="monitoring">
          <Card>
            <CardHeader>
              <CardTitle>Health Monitoring</CardTitle>
              <CardDescription>Share health information with family members</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Health monitoring sharing functionality will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="communication">
          <Card>
            <CardHeader>
              <CardTitle>Communication Center</CardTitle>
              <CardDescription>Communicate with your care circle</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Family communication functionality will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="providers">
          <Card>
            <CardHeader>
              <CardTitle>Provider Collaboration</CardTitle>
              <CardDescription>Coordinate with healthcare providers</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Provider collaboration functionality will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FamilyPortal;
