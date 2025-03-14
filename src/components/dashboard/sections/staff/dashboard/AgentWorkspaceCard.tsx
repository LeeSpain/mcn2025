
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { 
  Phone, 
  Video, 
  MessageSquare, 
  Mail, 
  Eye, 
  Monitor, 
  MousePointer,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const AgentWorkspaceCard: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Agent Workspace</CardTitle>
        <CardDescription>Manage client interactions and support tasks</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Client Management Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Voice Support</CardTitle>
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
                    Call Client
                  </Button>
                  <Button size="sm" variant="outline">
                    <Video className="h-4 w-4 mr-2" />
                    Video Call
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Client Communication</CardTitle>
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
                    Message
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
                    View Device
                  </Button>
                  <Button size="sm" variant="outline">
                    <MousePointer className="h-4 w-4 mr-2" />
                    Remote Control
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Communication */}
        <div>
          <h3 className="text-lg font-medium mb-3">Team Communication</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Team Chat</CardTitle>
              </CardHeader>
              <CardContent className="h-[200px] overflow-y-auto">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      JP
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2 text-sm flex-1">
                      <p className="font-medium">John Parker</p>
                      <p>Anyone available to help with a complex device setup?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      LS
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2 text-sm flex-1">
                      <p className="font-medium">Lisa Smith</p>
                      <p>I can assist in about 10 minutes, currently on a call.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      ME
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2 text-sm flex-1">
                      <p className="font-medium">Mike Evans</p>
                      <p>FYI - New feature release notes are in the KB now.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <div className="flex gap-2 w-full">
                  <input type="text" placeholder="Type your message..." className="flex-1 px-3 py-1 border rounded-md" />
                  <Button size="sm">Send</Button>
                </div>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Supervisor Messages</CardTitle>
              </CardHeader>
              <CardContent className="h-[200px] overflow-y-auto">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      DM
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2 text-sm flex-1">
                      <p className="font-medium">David Martinez (Supervisor)</p>
                      <p>Team meeting at 2PM today to discuss the new safety protocols.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      DM
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2 text-sm flex-1">
                      <p className="font-medium">David Martinez (Supervisor)</p>
                      <p>Great job handling the Williams case yesterday!</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button size="sm" variant="outline" className="w-full">Reply to Supervisor</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AgentWorkspaceCard;
