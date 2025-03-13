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
  BarChart,
  MessageSquare,
  Settings,
  TrendingUp,
  UserCheck,
  Lightbulb,
  UserCog,
  Shield,
  Network,
  Globe,
  DollarSign
} from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

// Import all the required components
import AgentWorkspace from './staff/AgentWorkspace';
import ClientProfile from './staff/ClientProfile';
import LiveAssistance from './staff/LiveAssistance';
import HealthMonitoring from './staff/HealthMonitoring';
import TechnicalSupport from './staff/TechnicalSupport';
import ClientEducation from './staff/ClientEducation';
import ServiceManagement from './ServiceManagement';
import QualityAssurance from './QualityAssurance';
import EscalationSupport from './EscalationSupport';
import Analytics from './Analytics';
import AdminTools from './AdminTools';

// Sample data for charts
const revenueData = [
  { name: 'Jan', actual: 65000, target: 60000 },
  { name: 'Feb', actual: 68000, target: 62000 },
  { name: 'Mar', actual: 72000, target: 65000 },
  { name: 'Apr', actual: 75000, target: 68000 },
  { name: 'May', actual: 82000, target: 70000 },
  { name: 'Jun', actual: 87000, target: 75000 },
];

const clientsData = [
  { name: 'Individual', value: 400 },
  { name: 'Family', value: 300 },
  { name: 'Enterprise', value: 150 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const kpiData = [
  { name: 'Growth', value: 12.5, target: 10 },
  { name: 'Retention', value: 94.2, target: 90 },
  { name: 'ARPU', value: 125, target: 120 },
  { name: 'CAC', value: 85, target: 90 },
  { name: 'LTV Ratio', value: 3.2, target: 3 },
];

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
          <h1 className="text-2xl font-bold">MCN Executive Dashboard</h1>
          <p className="text-muted-foreground">Business Performance Overview & Client Management</p>
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

      <Tabs defaultValue="business" className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 mb-4 overflow-x-auto">
          <TabsTrigger value="business" className="flex items-center space-x-1">
            <TrendingUp className="h-4 w-4" />
            <span className="hidden md:inline">Business</span>
          </TabsTrigger>
          <TabsTrigger value="clients" className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span className="hidden md:inline">Clients</span>
          </TabsTrigger>
          <TabsTrigger value="customer-exp" className="flex items-center space-x-1">
            <UserCheck className="h-4 w-4" />
            <span className="hidden md:inline">CX</span>
          </TabsTrigger>
          <TabsTrigger value="growth" className="flex items-center space-x-1">
            <Lightbulb className="h-4 w-4" />
            <span className="hidden md:inline">Growth</span>
          </TabsTrigger>
          <TabsTrigger value="org-health" className="flex items-center space-x-1">
            <UserCog className="h-4 w-4" />
            <span className="hidden md:inline">Org</span>
          </TabsTrigger>
          <TabsTrigger value="risk" className="flex items-center space-x-1">
            <Shield className="h-4 w-4" />
            <span className="hidden md:inline">Risk</span>
          </TabsTrigger>
          <TabsTrigger value="partners" className="flex items-center space-x-1">
            <Network className="h-4 w-4" />
            <span className="hidden md:inline">Partners</span>
          </TabsTrigger>
          <TabsTrigger value="finance" className="flex items-center space-x-1">
            <DollarSign className="h-4 w-4" />
            <span className="hidden md:inline">Finance</span>
          </TabsTrigger>
        </TabsList>

        {/* Business Performance Overview Tab */}
        <TabsContent value="business" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Financial Snapshot</CardTitle>
                <CardDescription>Monthly revenue vs targets</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="actual" fill="#0080ff" name="Actual Revenue" />
                      <Bar dataKey="target" fill="#ff8042" name="Target Revenue" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="bg-blue-50 p-2 rounded-md">
                    <p className="text-xs text-gray-500">Gross Margin</p>
                    <p className="text-lg font-semibold">64.2%</p>
                  </div>
                  <div className="bg-green-50 p-2 rounded-md">
                    <p className="text-xs text-gray-500">Net Profit</p>
                    <p className="text-lg font-semibold">23.5%</p>
                  </div>
                  <div className="bg-amber-50 p-2 rounded-md">
                    <p className="text-xs text-gray-500">Runway</p>
                    <p className="text-lg font-semibold">18 months</p>
                  </div>
                  <div className="bg-purple-50 p-2 rounded-md">
                    <p className="text-xs text-gray-500">CAC/LTV</p>
                    <p className="text-lg font-semibold">1:3.2</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">KPI Scorecard</CardTitle>
                <CardDescription>Key performance indicators</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                {kpiData.map((item, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className={`text-sm font-medium ${item.value >= item.target ? 'text-green-600' : 'text-red-600'}`}>
                        {item.value} {item.name === 'ARPU' ? '$' : item.name === 'LTV Ratio' ? '' : '%'}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${item.value >= item.target ? 'bg-green-500' : 'bg-amber-500'}`}
                        style={{ width: `${(item.value / (item.target * 1.5)) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>0</span>
                      <span>Target: {item.target}{item.name === 'ARPU' ? '$' : item.name === 'LTV Ratio' ? '' : '%'}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Market Performance</CardTitle>
                <CardDescription>Segment distribution</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={clientsData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {clientsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2">
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#0088FE] mr-2"></div>
                      <span className="text-sm">Individual</span>
                    </div>
                    <span className="text-sm font-medium">23% Market Share</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#00C49F] mr-2"></div>
                      <span className="text-sm">Family</span>
                    </div>
                    <span className="text-sm font-medium">18% Market Share</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#FFBB28] mr-2"></div>
                      <span className="text-sm">Enterprise</span>
                    </div>
                    <span className="text-sm font-medium">12% Market Share</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Operational Health</CardTitle>
              <CardDescription>System performance and SLA compliance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">SLA Compliance</p>
                  <p className="text-2xl font-semibold text-green-600">99.3%</p>
                  <p className="text-xs text-gray-500">+0.2% from previous month</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Platform Uptime</p>
                  <p className="text-2xl font-semibold text-green-600">99.98%</p>
                  <p className="text-xs text-gray-500">-0.01% from previous month</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Critical Incidents</p>
                  <p className="text-2xl font-semibold text-amber-600">3</p>
                  <p className="text-xs text-gray-500">Avg resolution: 42 min</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Inventory Status</p>
                  <p className="text-2xl font-semibold text-blue-600">92%</p>
                  <p className="text-xs text-gray-500">8 items need reordering</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium mb-3">Critical Service Dependencies</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">Health Monitoring API</span>
                    </span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Operational</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">Emergency Response System</span>
                    </span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Operational</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">Medical Records Integration</span>
                    </span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Operational</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                      <span className="text-sm">Pharmacy Database</span>
                    </span>
                    <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Degraded</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Clients Tab */}
        <TabsContent value="clients" className="space-y-6">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Client Acquisition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="actual" stroke="#0080ff" name="New Clients" />
                      <Line type="monotone" dataKey="target" stroke="#ff8042" name="Target" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Client Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={clientsData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {clientsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Customer Experience Tab */}
        <TabsContent value="customer-exp">
          <Card>
            <CardHeader>
              <CardTitle>Customer Experience & Satisfaction</CardTitle>
              <CardDescription>NPS scores, sentiment analysis, and service quality metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="text-lg font-medium mb-2">NPS Score</h3>
                  <div className="text-4xl font-bold text-blue-600">72</div>
                  <p className="text-sm text-gray-500">+5 points from last quarter</p>
                  <div className="mt-4 h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="text-lg font-medium mb-2">Sentiment Analysis</h3>
                  <div className="flex items-end h-20 mt-4">
                    <div className="flex-1 bg-green-200 rounded-t-md h-16"></div>
                    <div className="flex-1 bg-blue-200 rounded-t-md h-8"></div>
                    <div className="flex-1 bg-red-200 rounded-t-md h-4"></div>
                  </div>
                  <div className="flex text-xs justify-between mt-2">
                    <span>Positive (82%)</span>
                    <span>Neutral (12%)</span>
                    <span>Negative (6%)</span>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="text-lg font-medium mb-2">Resolution Metrics</h3>
                  <div className="space-y-4 mt-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>First Contact Resolution</span>
                        <span className="font-medium">78%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-green-500 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Average Resolution Time</span>
                        <span className="font-medium">5.2 hours</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-blue-500 rounded-full" style={{ width: '62%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-3">Feature Adoption Rates</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Health Monitoring</span>
                      <span className="text-sm font-medium">94%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full bg-green-500" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Safety Features</span>
                      <span className="text-sm font-medium">87%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full bg-green-500" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Family Communication</span>
                      <span className="text-sm font-medium">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full bg-blue-500" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Medication Management</span>
                      <span className="text-sm font-medium">68%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full bg-blue-500" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Shopping Services</span>
                      <span className="text-sm font-medium">52%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full bg-amber-500" style={{ width: '52%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Other tabs would follow the same pattern - adding placeholder cards for now */}
        <TabsContent value="growth">
          <Card>
            <CardHeader>
              <CardTitle>Strategic Growth & Innovation</CardTitle>
              <CardDescription>Product roadmap, market expansion, and innovation metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Strategic growth and innovation dashboard content would appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="org-health">
          <Card>
            <CardHeader>
              <CardTitle>Organizational Health & Culture</CardTitle>
              <CardDescription>Talent dashboard, culture vitals, and productivity metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Organizational health and culture dashboard content would appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="risk">
          <Card>
            <CardHeader>
              <CardTitle>Risk & Compliance Management</CardTitle>
              <CardDescription>Security posture, regulatory compliance, and risk management</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Risk and compliance management dashboard content would appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="partners">
          <Card>
            <CardHeader>
              <CardTitle>Partner & Healthcare Ecosystem</CardTitle>
              <CardDescription>Healthcare provider network, partnerships, and payer relationships</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Partner and healthcare ecosystem dashboard content would appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="finance">
          <Card>
            <CardHeader>
              <CardTitle>Financial Health & Investment</CardTitle>
              <CardDescription>Financial performance, investments, and profitability analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Financial health and investment dashboard content would appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Existing Call Center Tabs - Keep these as additional sections */}
        <TabsContent value="workspace" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 space-y-6">
              <AgentWorkspace />
            </div>
            <div className="lg:col-span-4 space-y-6">
              <ClientProfile />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="client-profile" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-12">
              <ClientProfile />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="live-assistance" className="space-y-6">
          <LiveAssistance />
        </TabsContent>

        <TabsContent value="health-monitoring" className="space-y-6">
          <HealthMonitoring />
        </TabsContent>

        <TabsContent value="technical-support" className="space-y-6">
          <TechnicalSupport />
        </TabsContent>

        <TabsContent value="client-education" className="space-y-6">
          <ClientEducation />
        </TabsContent>

        <TabsContent value="service-management" className="space-y-6">
          <ServiceManagement />
        </TabsContent>

        <TabsContent value="quality-assurance" className="space-y-6">
          <QualityAssurance />
        </TabsContent>

        <TabsContent value="escalation" className="space-y-6">
          <EscalationSupport />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Analytics />
        </TabsContent>

        <TabsContent value="admin" className="space-y-6">
          <AdminTools />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StaffDashboard;
