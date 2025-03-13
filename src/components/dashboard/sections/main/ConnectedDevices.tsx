
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity } from 'lucide-react';

type DeviceProps = {
  name: string;
  isOnline: boolean;
  status: string;
};

const Device: React.FC<DeviceProps> = ({ name, isOnline, status }) => {
  return (
    <li className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <span>{name}</span>
      </div>
      <span className="text-xs text-muted-foreground">{status}</span>
    </li>
  );
};

const ConnectedDevices: React.FC = () => {
  const devices = [
    {
      name: "Smart Watch",
      isOnline: true,
      status: "Battery 78%"
    },
    {
      name: "BBrain Assistant",
      isOnline: true,
      status: "Connected"
    },
    {
      name: "Blood Pressure Monitor",
      isOnline: true,
      status: "Ready"
    },
    {
      name: "Door Sensor",
      isOnline: false,
      status: "Offline"
    }
  ];

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Activity className="h-5 w-5 text-mcn-blue" />
          Connected Devices
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {devices.map((device, index) => (
            <Device
              key={index}
              name={device.name}
              isOnline={device.isOnline}
              status={device.status}
            />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ConnectedDevices;
