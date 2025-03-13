
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const RecentInteractions: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Recent Interactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <div className="flex justify-between">
              <div className="font-medium">Chat Support</div>
              <div className="text-xs text-muted-foreground">2 days ago</div>
            </div>
            <div className="text-sm">App navigation assistance</div>
          </div>
          <div className="border-l-4 border-purple-400 pl-3 py-1">
            <div className="flex justify-between">
              <div className="font-medium">Video Call</div>
              <div className="text-xs text-muted-foreground">1 week ago</div>
            </div>
            <div className="text-sm">Device setup walkthrough</div>
          </div>
          <div className="border-l-4 border-amber-400 pl-3 py-1">
            <div className="flex justify-between">
              <div className="font-medium">Phone Support</div>
              <div className="text-xs text-muted-foreground">2 weeks ago</div>
            </div>
            <div className="text-sm">Medication reminder issue</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="outline" size="sm" className="w-full">
          View Full History
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecentInteractions;
