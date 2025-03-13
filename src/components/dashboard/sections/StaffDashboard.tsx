
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CircleUser,
  Clock,
  Users,
  Headphones,
  FileText,
  Phone,
  Heart,
  ShieldAlert,
  Wrench,
  BookOpen,
  BarChart2,
  MessageSquare,
  Settings,
  TrendingUp,
  UserCheck,
  Lightbulb,
  UserCog,
  Shield,
  Network,
  Globe,
  DollarSign,
  Video,
  AlertCircle,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  // Add the missing icon imports
  Mail,
  Monitor,
  Eye,
  MousePointer
} from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  Tooltip, 
  Legend, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';

// Import all the required components for agent workspace
import AgentWorkspace from './staff/AgentWorkspace';
import ClientProfile from './staff/ClientProfile';
import InteractionQueue from './staff/queue/InteractionQueue';
import TeamCommunication from './staff/communication/TeamCommunication';
import KnowledgeBase from './staff/knowledge/KnowledgeBase';
import AgentPerformance from './staff/performance/AgentPerformance';

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
  { id: 1, name: 'Sarah Johnson', plan: 'Premium', status: 'Active', lastActive: '2 hours ago', health: 'Good' },
  { id: 2, name: 'Robert Williams', plan: 'Family', status: 'Active', lastActive: '1 day ago', health: 'Attention' },
  { id: 3, name: 'Emma Davis', plan: 'Basic', status: 'Active', lastActive: '5 hours ago', health: 'Good' },
  { id: 4, name: 'James Miller', plan: 'Enterprise', status: 'Inactive', lastActive: '5 days ago', health: 'Review' },
  { id: 5, name: 'Patricia Brown', plan: 'Premium', status: 'Active', lastActive: '1 hour ago', health: 'Good' },
  { id: 6, name: 'Thomas Wilson', plan: 'Family', status: 'Active', lastActive: '3 hours ago', health: 'Good' },
  { id: 7, name: 'Linda Moore', plan: 'Basic', status: 'Active', lastActive: '2 days ago', health: 'Attention' },
  { id: 8, name: 'Michael Taylor', plan: 'Enterprise', status: 'Active', lastActive: '6 hours ago', health: 'Good' },
];

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

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
        <div>
          <h1 className="text-2xl font-bold">MCN Staff Portal</h1>
          <p className="text-muted-foreground">Agent Workspace & Client Management</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative group">
            <Button 
              variant="outline" 
              size="sm" 
              className={getStatusButtonClass(agentStatus)}
              onClick={() => {
                // Cycle through statuses: available -> busy -> away -> available
                const nextStatus = agentStatus === 'available' ? 'busy' : agentStatus === 'busy' ? 'away' : 'available';
                setAgentStatus(nextStatus);
              }}
            >
              <CircleUser className="mr-2 h-4 w-4" />
              {agentStatus === 'available' ? 'Available' : agentStatus === 'busy' ? 'Busy' : 'Away'}
            </Button>
          </div>
          <Button variant="outline" size="sm">
            <Clock className="mr-2 h-4 w-4" />
            Work Session: 4:25:12
          </Button>
        </div>
      </div>

      <Tabs defaultValue="agent-workspace" className="w-full">
        <TabsList className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 mb-4 overflow-x-auto">
          <TabsTrigger value="agent-workspace" className="flex items-center space-x-1">
            <Headphones className="h-4 w-4" />
            <span className="hidden md:inline">Workspace</span>
          </TabsTrigger>
          <TabsTrigger value="client-profile" className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span className="hidden md:inline">Clients</span>
          </TabsTrigger>
          <TabsTrigger value="live-assistance" className="flex items-center space-x-1">
            <Phone className="h-4 w-4" />
            <span className="hidden md:inline">Assistance</span>
          </TabsTrigger>
          <TabsTrigger value="health-monitoring" className="flex items-center space-x-1">
            <Heart className="h-4 w-4" />
            <span className="hidden md:inline">Health</span>
          </TabsTrigger>
          <TabsTrigger value="technical-support" className="flex items-center space-x-1">
            <Wrench className="h-4 w-4" />
            <span className="hidden md:inline">Tech Support</span>
          </TabsTrigger>
          <TabsTrigger value="client-education" className="flex items-center space-x-1">
            <BookOpen className="h-4 w-4" />
            <span className="hidden md:inline">Education</span>
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center space-x-1">
            <BarChart2 className="h-4 w-4" />
            <span className="hidden md:inline">Analytics</span>
          </TabsTrigger>
          <TabsTrigger value="admin" className="flex items-center space-x-1">
            <Settings className="h-4 w-4" />
            <span className="hidden md:inline">Admin</span>
          </TabsTrigger>
        </TabsList>

        {/* Agent Workspace Tab */}
        <TabsContent value="agent-workspace" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 space-y-6">
              {/* Agent Performance */}
              <AgentPerformance />

              {/* Client Interaction Queue */}
              <InteractionQueue />

              {/* Team Communication */}
              <TeamCommunication />
            </div>
            <div className="lg:col-span-4 space-y-6">
              {/* Knowledge Base Quick Access */}
              <KnowledgeBase />
              
              {/* Agent Status Summary */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Your Status</CardTitle>
                  <CardDescription>Daily performance and queue metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500">Handled Today</p>
                        <p className="text-xl font-semibold">23</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500">Avg. Handle Time</p>
                        <p className="text-xl font-semibold">6:42</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500">Resolution Rate</p>
                        <p className="text-xl font-semibold">88%</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500">CSAT Score</p>
                        <p className="text-xl font-semibold">4.7</p>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="font-medium mb-1">Shift Information</div>
                      <div className="text-sm flex justify-between">
                        <span>Scheduled Break:</span>
                        <span className="font-medium">15:30 - 16:00</span>
                      </div>
                      <div className="text-sm flex justify-between">
                        <span>Shift Ends:</span>
                        <span className="font-medium">18:00</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Client Profile Tab */}
        <TabsContent value="client-profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Client Management</CardTitle>
              <CardDescription>Overview of all clients and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Client ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead>Health Status</TableHead>
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
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm" className="mr-2">View</Button>
                          <Button variant="outline" size="sm">Connect</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
          
          <ClientProfile />
        </TabsContent>

        {/* Live Assistance Tab */}
        <TabsContent value="live-assistance" className="space-y-6">
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
        </TabsContent>

        {/* Placeholder content for other tabs */}
        <TabsContent value="health-monitoring" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Health & Safety Monitoring</CardTitle>
              <CardDescription>Client health data and safety alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Health monitoring dashboard content would appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="technical-support" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Technical Support Tools</CardTitle>
              <CardDescription>Device troubleshooting and software management</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Technical support dashboard content would appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="client-education" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Client Education & Onboarding</CardTitle>
              <CardDescription>Training materials and setup assistance</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Client education dashboard content would appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Analytics & Reporting</CardTitle>
              <CardDescription>Performance metrics and service quality</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Analytics dashboard content would appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="admin" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Administrative Tools</CardTitle>
              <CardDescription>Team management and resource allocation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Administrative tools dashboard content would appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StaffDashboard;
