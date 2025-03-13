
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Smartphone,
  Wifi,
  BatteryMedium,
  Shield
} from 'lucide-react';

const DeviceStatus: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Device Status</CardTitle>
        <CardDescription>Connected devices</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Smartphone className="h-5 w-5 mr-2 text-blue-500" />
              <span>BBrain Hub</span>
            </div>
            <div className="font-medium text-green-600">Online</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Wifi className="h-5 w-5 mr-2 text-blue-500" />
              <span>WiFi Strength</span>
            </div>
            <div className="font-medium">Good (87%)</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BatteryMedium className="h-5 w-5 mr-2 text-amber-500" />
              <span>Pendant Battery</span>
            </div>
            <div className="font-medium">42% (2 days)</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-red-500" />
              <span>Safety Sensors</span>
            </div>
            <div className="font-medium text-red-600">Check needed</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeviceStatus;
