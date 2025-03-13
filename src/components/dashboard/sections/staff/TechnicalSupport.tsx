
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Wrench,
  Laptop,
  Wifi,
  ShieldCheck,
  Settings,
  RefreshCw,
  HardDrive,
  Lock,
  RotateCw,
  Check,
  Search
} from 'lucide-react';

const TechnicalSupport: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Device Troubleshooting</CardTitle>
          <CardDescription>Diagnostic tools and common issue resolution</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search device issues..."
              className="w-full rounded-md pl-9 py-2 border border-input" 
            />
          </div>
          
          <div className="space-y-3 mt-2">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 cursor-pointer transition-colors">
              <div className="font-medium text-blue-800 mb-1">BBrain Hub Connectivity</div>
              <div className="text-sm text-blue-700">
                Diagnostics and troubleshooting for hub connection issues
              </div>
            </div>
            
            <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 cursor-pointer transition-colors">
              <div className="font-medium text-purple-800 mb-1">Safety Sensor Setup</div>
              <div className="text-sm text-purple-700">
                Installation and connectivity guidance for all safety sensors
              </div>
            </div>
            
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg hover:bg-amber-100 cursor-pointer transition-colors">
              <div className="font-medium text-amber-800 mb-1">Mobile App Troubleshooting</div>
              <div className="text-sm text-amber-700">
                Login issues, feature access, and notification configuration
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button variant="outline" size="sm">View All Guides</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Software Management</CardTitle>
          <CardDescription>Remote update and configuration tools</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 border rounded-lg">
              <div className="flex items-center">
                <HardDrive className="h-5 w-5 mr-2 text-blue-500" />
                <div>
                  <div className="font-medium">BBrain Hub</div>
                  <div className="text-xs text-muted-foreground">Firmware v3.4.2 (Current: v3.4.1)</div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100">
                <RotateCw className="h-4 w-4 mr-1" /> Update
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 border rounded-lg">
              <div className="flex items-center">
                <ShieldCheck className="h-5 w-5 mr-2 text-green-500" />
                <div>
                  <div className="font-medium">Safety Sensors</div>
                  <div className="text-xs text-muted-foreground">Firmware v2.1.0 (Up to date)</div>
                </div>
              </div>
              <Button size="sm" variant="outline" disabled className="opacity-50">
                <Check className="h-4 w-4 mr-1" /> Current
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 border rounded-lg">
              <div className="flex items-center">
                <Lock className="h-5 w-5 mr-2 text-amber-500" />
                <div>
                  <div className="font-medium">Security Settings</div>
                  <div className="text-xs text-muted-foreground">Last updated: 45 days ago</div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100">
                <RefreshCw className="h-4 w-4 mr-1" /> Review
              </Button>
            </div>
          </div>
          
          <div className="pt-3 border-t">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Advanced Options</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" className="justify-start">
                <Settings className="h-4 w-4 mr-1" /> Factory Reset
              </Button>
              <Button variant="outline" size="sm" className="justify-start">
                <Laptop className="h-4 w-4 mr-1" /> Remote Access
              </Button>
              <Button variant="outline" size="sm" className="justify-start">
                <Wifi className="h-4 w-4 mr-1" /> Network Settings
              </Button>
              <Button variant="outline" size="sm" className="justify-start">
                <Wrench className="h-4 w-4 mr-1" /> Feature Toggles
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Network Diagnostics</CardTitle>
          <CardDescription>Connection testing and optimization</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-gray-50 border rounded-lg">
            <div className="mb-3">
              <div className="text-sm font-medium mb-1">Wi-Fi Signal Strength</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Poor</span>
                <span>Good</span>
              </div>
            </div>
            
            <div className="mb-3">
              <div className="text-sm font-medium mb-1">Connection Stability</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Unstable</span>
                <span>Stable</span>
              </div>
            </div>
            
            <div className="mb-3">
              <div className="text-sm font-medium mb-1">Bandwidth</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Low</span>
                <span>High</span>
              </div>
            </div>
            
            <div className="space-y-2 mt-4">
              <div className="flex justify-between text-sm">
                <span>Network Type:</span>
                <span className="font-medium">Wi-Fi (2.4GHz)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>IP Address:</span>
                <span className="font-medium">192.168.1.45</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Last Outage:</span>
                <span className="font-medium">3 days ago (2 minutes)</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between">
            <Button variant="outline" size="sm">
              <Wifi className="h-4 w-4 mr-1" /> Test Connection
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-1" /> Optimize Network
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Account Recovery</CardTitle>
          <CardDescription>Authentication and access management</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-3 border rounded-lg">
              <div className="font-medium mb-1">Password Reset</div>
              <div className="text-sm text-muted-foreground mb-2">
                Send a secure password reset link to the client's registered email
              </div>
              <Button size="sm" variant="outline" className="w-full">
                <Lock className="h-4 w-4 mr-1" /> Send Reset Link
              </Button>
            </div>
            
            <div className="p-3 border rounded-lg">
              <div className="font-medium mb-1">Multi-factor Authentication</div>
              <div className="text-sm text-muted-foreground mb-2">
                Manage or troubleshoot two-factor authentication setup
              </div>
              <Button size="sm" variant="outline" className="w-full">
                <ShieldCheck className="h-4 w-4 mr-1" /> Manage 2FA
              </Button>
            </div>
            
            <div className="p-3 border rounded-lg">
              <div className="font-medium mb-1">Session Management</div>
              <div className="text-sm text-muted-foreground mb-2">
                View and terminate active sessions on all devices
              </div>
              <Button size="sm" variant="outline" className="w-full">
                <Laptop className="h-4 w-4 mr-1" /> View Active Sessions
              </Button>
            </div>
          </div>
          
          <div className="pt-3 border-t">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Emergency Access Override</h3>
              <Button variant="outline" size="sm" className="bg-red-50 border-red-200 text-red-700 hover:bg-red-100">
                Initiate Override
              </Button>
            </div>
            <div className="text-xs text-muted-foreground">
              For emergency situations only. Requires supervisor approval and will be logged.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechnicalSupport;
