
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, TrendingUp, Footprints, Target } from 'lucide-react';

const HealthView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-1.5">
        <h2 className="text-2xl font-semibold tracking-tight">Health View</h2>
        <p className="text-muted-foreground">Monitor your health metrics and track progress</p>
      </div>

      <Tabs defaultValue="vitals" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="vitals" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            Vital Signs
          </TabsTrigger>
          <TabsTrigger value="trends" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Health Trends
          </TabsTrigger>
          <TabsTrigger value="activity" className="flex items-center gap-2">
            <Footprints className="h-4 w-4" />
            Activity
          </TabsTrigger>
          <TabsTrigger value="goals" className="flex items-center gap-2">
            <Target className="h-4 w-4" />
            Goals
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="vitals">
          <Card>
            <CardHeader>
              <CardTitle>Vital Signs Dashboard</CardTitle>
              <CardDescription>View your current health metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Vital signs monitoring functionality will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle>Health Trends</CardTitle>
              <CardDescription>Track your health metrics over time</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Health trends visualization will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Activity Tracking</CardTitle>
              <CardDescription>Monitor your daily activity levels</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Activity tracking functionality will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="goals">
          <Card>
            <CardHeader>
              <CardTitle>Health Goals</CardTitle>
              <CardDescription>Set and track your health goals</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Health goals management will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HealthView;
