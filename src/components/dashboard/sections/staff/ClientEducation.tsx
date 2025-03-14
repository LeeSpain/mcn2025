
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText, Video, Calendar, Users, ChevronRight, Search, Clock, Award } from 'lucide-react';

// Sample training materials
const trainingMaterials = [
  { id: 1, title: 'Getting Started with BBrain', type: 'Video', duration: '12 min', popular: true },
  { id: 2, title: 'Setting Up Medication Reminders', type: 'Guide', duration: '5 min', popular: true },
  { id: 3, title: 'Family Portal Introduction', type: 'Video', duration: '8 min', popular: false },
  { id: 4, title: 'Safety Sensors Installation', type: 'Guide', duration: '15 min', popular: true },
  { id: 5, title: 'Using Video Calls', type: 'Interactive', duration: '7 min', popular: false },
];

// Sample scheduled sessions
const scheduledSessions = [
  { id: 1, client: 'Sarah Johnson', type: 'One-on-One', topic: 'App Navigation', date: 'Today', time: '2:30 PM' },
  { id: 2, client: 'Robert Williams', type: 'Device Setup', topic: 'Safety Sensors', date: 'Tomorrow', time: '10:00 AM' },
  { id: 3, client: 'Multiple Clients', type: 'Group Session', topic: 'New Features', date: 'Jun 15', time: '3:00 PM' },
];

const ClientEducation: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Training Materials */}
        <Card>
          <CardHeader>
            <CardTitle>Training Materials</CardTitle>
            <CardDescription>Resources for client education and onboarding</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium">Most Popular Resources</h3>
              <div className="relative">
                <Search className="h-4 w-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search resources..." 
                  className="pl-8 pr-4 py-1 text-sm border rounded-md w-48" 
                />
              </div>
            </div>
            
            <div className="space-y-3">
              {trainingMaterials.filter(item => item.popular).map(item => (
                <div key={item.id} className="p-3 border rounded-md flex items-center justify-between">
                  <div className="flex items-center">
                    {item.type === 'Video' ? (
                      <Video className="h-5 w-5 text-blue-500 mr-3" />
                    ) : item.type === 'Interactive' ? (
                      <Users className="h-5 w-5 text-purple-500 mr-3" />
                    ) : (
                      <FileText className="h-5 w-5 text-green-500 mr-3" />
                    )}
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-xs text-gray-500 flex items-center">
                        <span className="mr-2">{item.type}</span>
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            
            <Button variant="outline" className="w-full">View All Resources</Button>
          </CardContent>
        </Card>
        
        {/* Training Sessions */}
        <Card>
          <CardHeader>
            <CardTitle>Training Sessions</CardTitle>
            <CardDescription>Scheduled educational appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="overflow-x-auto rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Client</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Topic</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {scheduledSessions.map(session => (
                      <TableRow key={session.id}>
                        <TableCell>{session.client}</TableCell>
                        <TableCell>{session.type}</TableCell>
                        <TableCell>{session.topic}</TableCell>
                        <TableCell>
                          <div className="font-medium">{session.date}</div>
                          <div className="text-xs text-gray-500">{session.time}</div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">Start</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <Button variant="outline" className="w-full">Schedule New Session</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Client Onboarding Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Client Onboarding Progress</CardTitle>
          <CardDescription>Monitor setup and training completion</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead>Enrollment Date</TableHead>
                  <TableHead>Device Setup</TableHead>
                  <TableHead>Account Setup</TableHead>
                  <TableHead>Training Completion</TableHead>
                  <TableHead>Overall Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Emma Davis</TableCell>
                  <TableCell>June 2, 2023</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                      <span className="text-xs">100%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                      <span className="text-xs">100%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                      <span className="text-xs">80%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-amber-600 bg-amber-100 px-2 py-1 rounded-full text-xs">Almost Complete</span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">Follow Up</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Thomas Wilson</TableCell>
                  <TableCell>May 28, 2023</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                      <span className="text-xs">100%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                      <span className="text-xs">60%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                      <span className="text-xs">40%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-amber-600 bg-amber-100 px-2 py-1 rounded-full text-xs">In Progress</span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">Schedule</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Michael Taylor</TableCell>
                  <TableCell>June 5, 2023</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                      <span className="text-xs">30%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                      <span className="text-xs">100%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                      <span className="text-xs">20%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-red-600 bg-red-100 px-2 py-1 rounded-full text-xs">Needs Attention</span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">Call Now</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full flex justify-between">
            <Button variant="outline">Export Progress Report</Button>
            <Button>Add New Client</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ClientEducation;
