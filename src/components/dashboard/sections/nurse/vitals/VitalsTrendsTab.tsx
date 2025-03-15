
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, Download } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { vitalsTrendData } from './vitalsData';

interface VitalsTrendsTabProps {
  selectedClient: string;
}

const VitalsTrendsTab: React.FC<VitalsTrendsTabProps> = ({ selectedClient }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Vitals History for {selectedClient}</CardTitle>
        <CardDescription>
          Last 7 days of vital sign measurements
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={vitalsTrendData}
              margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="heartRate" stroke="#ef4444" name="Heart Rate" />
              <Line type="monotone" dataKey="bloodPressureSys" stroke="#3b82f6" name="BP Systolic" />
              <Line type="monotone" dataKey="bloodPressureDia" stroke="#60a5fa" name="BP Diastolic" />
              <Line type="monotone" dataKey="o2" stroke="#8b5cf6" name="O2 Saturation" />
              <Line type="monotone" dataKey="glucose" stroke="#14b8a6" name="Glucose" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center space-x-2">
          <CalendarIcon className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-500">Date Range:</span>
          <Button variant="outline" size="sm">Last 7 Days</Button>
          <Button variant="outline" size="sm">Last 30 Days</Button>
          <Button variant="outline" size="sm">Custom</Button>
        </div>
        <Button variant="outline" size="sm" className="gap-1">
          <Download className="h-4 w-4" />
          Export Data
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VitalsTrendsTab;
