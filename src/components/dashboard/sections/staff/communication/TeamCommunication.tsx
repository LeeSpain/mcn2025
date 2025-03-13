
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Users,
  MessageCircle,
} from 'lucide-react';

const TeamCommunication: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Team Communication</CardTitle>
        <CardDescription>Supervisor messages and team chat</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 mr-3">
                  <Users className="h-4 w-4" />
                </div>
                <div className="font-medium">Team Announcement</div>
              </div>
              <div className="text-xs text-muted-foreground">10:15 AM</div>
            </div>
            <p className="text-sm">New firmware update available for BBrain Home devices. Please review documentation before assisting clients.</p>
          </div>
          
          <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 mr-3">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div className="font-medium">Sophie (Team Lead)</div>
              </div>
              <div className="text-xs text-muted-foreground">11:32 AM</div>
            </div>
            <p className="text-sm">Please remember to log all device connectivity issues with the network team today.</p>
          </div>
          
          <div className="flex justify-end">
            <Button variant="outline" size="sm">
              <MessageCircle className="mr-2 h-4 w-4" />
              Open Team Chat
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamCommunication;
