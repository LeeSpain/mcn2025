
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const HealthMonitoring: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Health & Safety Monitoring</CardTitle>
          <CardDescription>Client health data and safety alerts</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Health monitoring dashboard content would appear here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HealthMonitoring;
