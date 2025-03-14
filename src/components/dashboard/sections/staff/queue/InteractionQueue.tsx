
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Phone,
  MessageSquare,
  Video,
  PhoneCall,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

const InteractionQueue: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Interaction Queue</CardTitle>
        <CardDescription>Incoming requests and assigned tickets</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <PhoneCall className="h-8 w-8 text-amber-500 mb-2" />
                <div className="text-2xl font-bold text-amber-700">5</div>
                <p className="text-xs text-amber-700">Waiting Calls</p>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <MessageSquare className="h-8 w-8 text-blue-500 mb-2" />
                <div className="text-2xl font-bold text-blue-700">12</div>
                <p className="text-xs text-blue-700">Active Chats</p>
              </CardContent>
            </Card>
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <Video className="h-8 w-8 text-purple-500 mb-2" />
                <div className="text-2xl font-bold text-purple-700">2</div>
                <p className="text-xs text-purple-700">Video Requests</p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-8 w-8 text-green-500 mb-2" />
                <div className="text-2xl font-bold text-green-700">83%</div>
                <p className="text-xs text-green-700">Resolution Rate</p>
              </CardContent>
            </Card>
          </div>

          {/* Queue Items */}
          <div className="space-y-3">
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center text-amber-700 mr-3">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium">Incoming Call</div>
                  <div className="text-xs text-muted-foreground">+31 6 12345678 • Waiting: 1:24</div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="border-amber-300 bg-amber-100 hover:bg-amber-200">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center text-red-700 mr-3">
                  <AlertCircle className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium">Escalated Issue</div>
                  <div className="text-xs text-muted-foreground">Jan de Vries • Device Connectivity • SLA: 0:42:18</div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="border-red-300 bg-red-100 hover:bg-red-200">
                  <AlertCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 mr-3">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium">Chat Request</div>
                  <div className="text-xs text-muted-foreground">Anna Bakker • App Navigation Help • Waiting: 0:45</div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="border-blue-300 bg-blue-100 hover:bg-blue-200">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 mr-3">
                  <Video className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium">Video Assistance</div>
                  <div className="text-xs text-muted-foreground">Pieter Jansen • Device Setup • Scheduled: 14:30</div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="border-purple-300 bg-purple-100 hover:bg-purple-200">
                  <Video className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractionQueue;
