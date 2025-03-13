
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const ClientEducation: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Client Education & Onboarding</CardTitle>
          <CardDescription>Training materials and setup assistance</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Client education dashboard content would appear here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientEducation;
