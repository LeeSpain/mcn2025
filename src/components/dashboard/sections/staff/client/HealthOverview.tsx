
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Heart,
  AlertCircle,
  CheckCircle,
  XCircle,
} from 'lucide-react';

const HealthOverview: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Health Overview</CardTitle>
        <CardDescription>Latest data with permission</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Heart className="h-5 w-5 mr-2 text-red-500" />
              <span>Heart Rate</span>
            </div>
            <div className="font-medium">78 bpm</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 mr-2 text-amber-500" />
              <span>Blood Pressure</span>
            </div>
            <div className="font-medium">142/88 mmHg</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
              <span>Medications</span>
            </div>
            <div className="font-medium">3/4 taken today</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <XCircle className="h-5 w-5 mr-2 text-red-500" />
              <span>Missed Alerts</span>
            </div>
            <div className="font-medium">2 in last 24h</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthOverview;
