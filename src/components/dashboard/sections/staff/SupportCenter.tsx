
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageCircle, Phone, Video, Calendar, Clock } from 'lucide-react';
import LiveAssistance from './LiveAssistance';
import TechnicalSupport from './TechnicalSupport';

const SupportCenter: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Support Center</CardTitle>
          <CardDescription>Manage client support requests and communications</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="live">
            <TabsList className="mb-4">
              <TabsTrigger value="live" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Live Assistance
              </TabsTrigger>
              <TabsTrigger value="calls" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call Queue
              </TabsTrigger>
              <TabsTrigger value="video" className="flex items-center gap-2">
                <Video className="h-4 w-4" />
                Video Sessions
              </TabsTrigger>
              <TabsTrigger value="schedule" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Schedule
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="live">
              <LiveAssistance />
            </TabsContent>
            
            <TabsContent value="calls">
              <Card>
                <CardHeader>
                  <CardTitle>Call Queue</CardTitle>
                  <CardDescription>Manage incoming and scheduled calls</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-3">
                      <h3 className="font-medium">Waiting Calls</h3>
                      <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">3 in queue</span>
                    </div>
                    
                    {[
                      { name: 'Maria Garcia', time: '2 mins', reason: 'Device setup assistance' },
                      { name: 'Thomas Wilson', time: '5 mins', reason: 'Medication reminder issue' },
                      { name: 'Sarah Johnson', time: '8 mins', reason: 'Service billing question' }
                    ].map((call, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50">
                        <div>
                          <p className="font-medium">{call.name}</p>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>Waiting: {call.time}</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{call.reason}</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-3 py-1 bg-mcn-blue text-white text-sm rounded-md hover:bg-mcn-blue/80">
                            Accept
                          </button>
                          <button className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-gray-200">
                            Transfer
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="video">
              <Card>
                <CardHeader>
                  <CardTitle>Video Sessions</CardTitle>
                  <CardDescription>Scheduled and on-demand video consultations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Today's Sessions</h3>
                      <button className="text-mcn-blue text-sm hover:underline">+ New Session</button>
                    </div>
                    
                    {[
                      { name: 'David Chen', time: '10:30 AM', status: 'upcoming', type: 'Care plan review' },
                      { name: 'Lisa Thompson', time: '1:15 PM', status: 'upcoming', type: 'Medical device training' },
                      { name: 'Robert Williams', time: '3:45 PM', status: 'upcoming', type: 'Wellness check-in' }
                    ].map((session, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50">
                        <div>
                          <p className="font-medium">{session.name}</p>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{session.time}</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{session.type}</p>
                        </div>
                        <button className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-md hover:bg-emerald-200">
                          Join when ready
                        </button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="schedule">
              <Card>
                <CardHeader>
                  <CardTitle>Support Schedule</CardTitle>
                  <CardDescription>View and manage your support schedule</CardDescription>
                </CardHeader>
                <CardContent>
                  <TechnicalSupport />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupportCenter;
