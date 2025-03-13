
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, CreditCard, Smartphone, Bell, Shield, Accessibility } from 'lucide-react';

const AccountSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-1.5">
        <h2 className="text-2xl font-semibold tracking-tight">Account & Settings</h2>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="membership" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            Membership
          </TabsTrigger>
          <TabsTrigger value="devices" className="flex items-center gap-2">
            <Smartphone className="h-4 w-4" />
            Devices
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="privacy" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Privacy
          </TabsTrigger>
          <TabsTrigger value="accessibility" className="flex items-center gap-2">
            <Accessibility className="h-4 w-4" />
            Accessibility
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Management</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Profile management will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="membership">
          <Card>
            <CardHeader>
              <CardTitle>Membership Details</CardTitle>
              <CardDescription>View and manage your membership plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 bg-blue-50">
                  <h3 className="font-semibold text-lg text-mcn-blue">Premium Plan</h3>
                  <p className="text-sm text-gray-600">Active since: January 15, 2023</p>
                  <div className="mt-2">
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Active</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Plan Features</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>24/7 Emergency Response</li>
                    <li>Unlimited Video Calls</li>
                    <li>Family Access Portal (up to 5 members)</li>
                    <li>Health Monitoring</li>
                    <li>BBrain Voice Assistant</li>
                    <li>Medication Management</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Billing Information</h3>
                  <p className="text-sm">Next billing date: December 15, 2023</p>
                  <p className="text-sm">Amount: €49.99/month</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="devices">
          <Card>
            <CardHeader>
              <CardTitle>Device Management</CardTitle>
              <CardDescription>Manage your connected devices</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Device management will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Configure how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Notification settings will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>Manage your data and privacy preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Privacy settings will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="accessibility">
          <Card>
            <CardHeader>
              <CardTitle>Accessibility Options</CardTitle>
              <CardDescription>Customize your experience for better accessibility</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Accessibility settings will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AccountSettings;
