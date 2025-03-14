
import React, { useState } from 'react';
import { 
  Headphones, 
  Users, 
  Heart, 
  Wrench, 
  BookOpen, 
  BarChart2, 
  Settings, 
  Shield, 
  MessageSquare, 
  Clock, 
  FileText, 
  User, 
  BarChart, 
  ChevronRight, 
  PhoneCall, 
  Video, 
  Mail, 
  Monitor, 
  Eye, 
  MousePointer
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer, 
  Tooltip, 
  LineChart, 
  Line 
} from 'recharts';

// Import Staff Dashboard section components
import AdminTools from './staff/AdminTools';
import ClientEducation from './staff/ClientEducation';
import HealthMonitoring from './staff/HealthMonitoring';

// Sample data for charts
const performanceData = [
  { name: 'Mon', calls: 24, chats: 18, resolved: 38 },
  { name: 'Tue', calls: 28, chats: 16, resolved: 42 },
  { name: 'Wed', calls: 26, chats: 20, resolved: 45 },
  { name: 'Thu', calls: 30, chats: 22, resolved: 48 },
  { name: 'Fri', calls: 27, chats: 18, resolved: 43 },
  { name: 'Sat', calls: 18, chats: 12, resolved: 26 },
  { name: 'Sun', calls: 14, chats: 8, resolved: 19 },
];

// Sample client data
const clientsList = [
  { id: 1, name: 'Sarah Johnson', plan: 'Premium', status: 'Active', lastActive: '2 hours ago', health: 'Good', priority: 'High' },
  { id: 2, name: 'Robert Williams', plan: 'Family', status: 'Active', lastActive: '1 day ago', health: 'Attention', priority: 'Medium' },
  { id: 3, name: 'Emma Davis', plan: 'Basic', status: 'Active', lastActive: '5 hours ago', health: 'Good', priority: 'Low' },
  { id: 4, name: 'James Miller', plan: 'Enterprise', status: 'Inactive', lastActive: '5 days ago', health: 'Review', priority: 'High' },
  { id: 5, name: 'Patricia Brown', plan: 'Premium', status: 'Active', lastActive: '1 hour ago', health: 'Good', priority: 'Low' },
  { id: 6, name: 'Thomas Wilson', plan: 'Family', status: 'Active', lastActive: '3 hours ago', health: 'Good', priority: 'Medium' },
  { id: 7, name: 'Linda Moore', plan: 'Basic', status: 'Active', lastActive: '2 days ago', health: 'Attention', priority: 'High' },
  { id: 8, name: 'Michael Taylor', plan: 'Enterprise', status: 'Active', lastActive: '6 hours ago', health: 'Good', priority: 'Medium' },
];

// Sample queue data
const queueData = [
  { id: 1, type: 'Call', client: 'Robert Williams', issue: 'Device Connection', priority: 'High', waitTime: '2:35' },
  { id: 2, type: 'Chat', client: 'Emma Davis', issue: 'App Navigation', priority: 'Medium', waitTime: '1:14' },
  { id: 3, type: 'Email', client: 'Thomas Wilson', issue: 'Billing Question', priority: 'Normal', waitTime: '5:22' },
  { id: 4, type: 'Callback', client: 'Linda Moore', issue: 'Sensor Setup', priority: 'High', waitTime: 'Scheduled 2pm' },
]

const StaffDashboard: React.FC = () => {
  const [agentStatus, setAgentStatus] = useState<'available' | 'busy' | 'away'>('available');
  
  const getStatusButtonClass = (status: string) => {
    switch(status) {
      case 'available':
        return 'bg-green-100 text-green-700 border-green-200 hover:bg-green-200';
      case 'busy':
        return 'bg-red-100 text-red-700 border-red-200 hover:bg-red-200';
      case 'away':
        return 'bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-200';
      default:
        return '';
    }
  };

  const getHealthStatusClass = (status: string) => {
    switch(status) {
      case 'Good':
        return 'text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs';
      case 'Attention':
        return 'text-amber-600 bg-amber-100 px-2 py-1 rounded-full text-xs';
      case 'Review':
        return 'text-red-600 bg-red-100 px-2 py-1 rounded-full text-xs';
      default:
        return 'text-gray-600 bg-gray-100 px-2 py-1 rounded-full text-xs';
    }
  };

  const getPriorityClass = (priority: string) => {
    switch(priority) {
      case 'High':
        return 'text-red-600 bg-red-100 px-2 py-1 rounded-full text-xs';
      case 'Medium':
        return 'text-amber-600 bg-amber-100 px-2 py-1 rounded-full text-xs';
      case 'Low':
        return 'text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs';
      default:
        return 'text-blue-600 bg-blue-100 px-2 py-1 rounded-full text-xs';
    }
  };

  return (
    <div className="staff-portal">
      {/* Staff Portal Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4 bg-white p-4 rounded-lg shadow">
        <div>
          <h1 className="text-2xl font-bold">MCN Staff Portal</h1>
          <p className="text-muted-foreground">Agent Workspace & Client Management</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            className={getStatusButtonClass(agentStatus)}
            onClick={() => {
              const nextStatus = agentStatus === 'available' ? 'busy' : agentStatus === 'busy' ? 'away' : 'available';
              setAgentStatus(nextStatus);
            }}
          >
            <User className="mr-2 h-4 w-4" />
            {agentStatus === 'available' ? 'Available' : agentStatus === 'busy' ? 'Busy' : 'Away'}
          </Button>
          <Button variant="outline" size="sm">
            <Clock className="mr-2 h-4 w-4" />
            Work Session: 4:25:12
          </Button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Column - Agent Workspace */}
        <div className="lg:col-span-3 space-y-6">
          {/* Agent Workspace Section */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Agent Workspace</CardTitle>
              <CardDescription>Manage client interactions and support tasks</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Interaction Queue */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Client Interaction Queue</h3>
                <div className="overflow-x-auto rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Type</TableHead>
                        <TableHead>Client</TableHead>
                        <TableHead>Issue</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Wait Time</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {queueData.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.type}</TableCell>
                          <TableCell>{item.client}</TableCell>
                          <TableCell>{item.issue}</TableCell>
                          <TableCell>
                            <span className={getPriorityClass(item.priority)}>
                              {item.priority}
                            </span>
                          </TableCell>
                          <TableCell>{item.waitTime}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm">Accept</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* Communication Tools */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Voice Communication</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                          <PhoneCall className="h-8 w-8 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-2">
                        <Button size="sm" variant="outline">
                          <PhoneCall className="h-4 w-4 mr-2" />
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

          {/* Client Management */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Client Management</CardTitle>
              <CardDescription>Overview of all clients and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead>Health</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {clientsList.map((client) => (
                      <TableRow key={client.id}>
                        <TableCell className="font-medium">{client.id}</TableCell>
                        <TableCell>{client.name}</TableCell>
                        <TableCell>{client.plan}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            client.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {client.status}
                          </span>
                        </TableCell>
                        <TableCell>{client.lastActive}</TableCell>
                        <TableCell>
                          <span className={getHealthStatusClass(client.health)}>
                            {client.health}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className={getPriorityClass(client.priority)}>
                            {client.priority}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm" className="mr-2">View</Button>
                          <Button variant="outline" size="sm">Assist</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Performance Stats & Resources */}
        <div className="space-y-6">
          {/* Agent Performance */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Agent Performance</CardTitle>
              <CardDescription>Your weekly metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] w-full mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart
                    data={performanceData}
                    margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="calls" fill="#8884d8" name="Calls" />
                    <Bar dataKey="chats" fill="#82ca9d" name="Chats" />
                    <Bar dataKey="resolved" fill="#ffc658" name="Resolved" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 bg-gray-50 rounded-md">
                  <div className="text-sm text-gray-500">Today's Calls</div>
                  <div className="text-xl font-semibold">12</div>
                </div>
                <div className="p-2 bg-gray-50 rounded-md">
                  <div className="text-sm text-gray-500">Avg Handle Time</div>
                  <div className="text-xl font-semibold">8:42</div>
                </div>
                <div className="p-2 bg-gray-50 rounded-md">
                  <div className="text-sm text-gray-500">Resolution Rate</div>
                  <div className="text-xl font-semibold">92%</div>
                </div>
                <div className="p-2 bg-gray-50 rounded-md">
                  <div className="text-sm text-gray-500">Client Rating</div>
                  <div className="text-xl font-semibold">4.8/5</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Knowledge Base */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Knowledge Base</CardTitle>
              <CardDescription>Quick access resources</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-md flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-blue-500 mr-2" />
                  <span>Device Troubleshooting Guide</span>
                </div>
                <ChevronRight className="h-4 w-4 text-blue-500" />
              </div>
              
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-md flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-blue-500 mr-2" />
                  <span>Medication Alert FAQs</span>
                </div>
                <ChevronRight className="h-4 w-4 text-blue-500" />
              </div>
              
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-md flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-blue-500 mr-2" />
                  <span>App Navigation Tutorial</span>
                </div>
                <ChevronRight className="h-4 w-4 text-blue-500" />
              </div>
              
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-md flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-blue-500 mr-2" />
                  <span>Service Plan Comparison</span>
                </div>
                <ChevronRight className="h-4 w-4 text-blue-500" />
              </div>

              <Button variant="outline" className="w-full">
                Search Knowledge Base
              </Button>
            </CardContent>
          </Card>
          
          {/* Agent Status Summary */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Shift Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="text-sm flex justify-between mb-1">
                    <span>Scheduled Break:</span>
                    <span className="font-medium">15:30 - 16:00</span>
                  </div>
                  <div className="text-sm flex justify-between mb-1">
                    <span>Shift Ends:</span>
                    <span className="font-medium">18:00</span>
                  </div>
                  <div className="text-sm flex justify-between">
                    <span>Team Meeting:</span>
                    <span className="font-medium">14:00 - 14:30</span>
                  </div>
                </div>
                
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="font-medium mb-1">Team Status</div>
                  <div className="text-sm flex justify-between">
                    <span>Available Agents:</span>
                    <span className="font-medium">8/12</span>
                  </div>
                  <div className="text-sm flex justify-between">
                    <span>Queue Load:</span>
                    <span className="font-medium">Medium</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Staff Portal Tools */}
      <div className="mt-6">
        <Tabs defaultValue="health-monitoring" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="health-monitoring" className="flex items-center space-x-1">
              <Heart className="h-4 w-4 mr-1" />
              <span>Health Monitoring</span>
            </TabsTrigger>
            <TabsTrigger value="client-education" className="flex items-center space-x-1">
              <BookOpen className="h-4 w-4 mr-1" />
              <span>Client Education</span>
            </TabsTrigger>
            <TabsTrigger value="admin-tools" className="flex items-center space-x-1">
              <Settings className="h-4 w-4 mr-1" />
              <span>Admin Tools</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="health-monitoring">
            <HealthMonitoring />
          </TabsContent>

          <TabsContent value="client-education">
            <ClientEducation />
          </TabsContent>

          <TabsContent value="admin-tools">
            <AdminTools />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StaffDashboard;
