
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Phone,
  Video,
  MessageSquare,
  Mail,
  Eye,
  Monitor,
  MousePointer
} from 'lucide-react';

const LiveAssistance: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Live Client Assistance</CardTitle>
          <CardDescription>Communication tools and remote assistance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Voice Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                      <Phone className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex justify-center gap-2">
                    <Button size="sm" variant="outline">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                    <Button size="sm" variant="outline">
                      <Video className="h-4 w-4 mr-2" />
                      Video
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Text Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                      <MessageSquare className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <div className="flex justify-center gap-2">
                    <Button size="sm" variant="outline">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Chat
                    </Button>
                    <Button size="sm" variant="outline">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Remote Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center">
                      <Monitor className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>
                  <div className="flex justify-center gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <MousePointer className="h-4 w-4 mr-2" />
                      Control
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-center text-muted-foreground">Select a client from the client list to initiate assistance</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveAssistance;
