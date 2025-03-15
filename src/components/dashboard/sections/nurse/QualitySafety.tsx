
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  FileCheck,
  LineChart,
  ListChecks,
  ClipboardCheck,
  Calendar,
  ThumbsUp,
  UserCheck,
  BarChart,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Users
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart as RechartBar,
  Bar,
  LineChart as RechartLine,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  PieChart as RechartPie,
  Pie
} from 'recharts';

// Quality metrics data
const qualityMetrics = [
  { name: 'Client Satisfaction', score: 92, change: +3, target: 90 },
  { name: 'Medication Compliance', score: 87, change: -2, target: 95 },
  { name: 'Documentation Completeness', score: 95, change: +1, target: 90 },
  { name: 'Care Plan Adherence', score: 89, change: +4, target: 85 },
  { name: 'Visit Completion Rate', score: 98, change: 0, target: 95 },
];

// Incident reports
const incidents = [
  { 
    id: 1, 
    type: 'Fall', 
    client: 'Jan de Vries',
    date: 'June 5, 2023',
    severity: 'Medium',
    status: 'Resolved',
    action: 'Safety assessment completed'
  },
  { 
    id: 2, 
    type: 'Medication Error', 
    client: 'Anna Koster',
    date: 'May 28, 2023',
    severity: 'High',
    status: 'In Progress',
    action: 'Review of medication process'
  },
  { 
    id: 3, 
    type: 'Equipment Failure', 
    client: 'Pieter Bakker',
    date: 'June 10, 2023',
    severity: 'Low',
    status: 'Resolved',
    action: 'Equipment replaced'
  },
];

// Safety checklist data
const safetyItems = [
  { id: 1, task: 'Fall Risk Assessment', frequency: 'Weekly', lastCompleted: '2 days ago', compliance: 'Current' },
  { id: 2, task: 'Medication Reconciliation', frequency: 'Monthly', lastCompleted: '3 weeks ago', compliance: 'Current' },
  { id: 3, task: 'Home Safety Check', frequency: 'Quarterly', lastCompleted: '1 month ago', compliance: 'Current' },
  { id: 4, task: 'Fire Safety Verification', frequency: 'Quarterly', lastCompleted: '4 months ago', compliance: 'Overdue' },
  { id: 5, task: 'Emergency Plan Review', frequency: 'Annually', lastCompleted: '10 months ago', compliance: 'Current' },
];

// Quality improvement data
const improvementProjects = [
  { id: 1, name: 'Medication Adherence Initiative', status: 'In Progress', completion: 65, lead: 'Nursing Team' },
  { id: 2, name: 'Fall Prevention Program', status: 'Completed', completion: 100, lead: 'Safety Committee' },
  { id: 3, name: 'Documentation Streamlining', status: 'Planning', completion: 25, lead: 'Quality Team' },
];

// Outcome data for charts
const outcomeData = [
  { month: 'Jan', falls: 3, medication: 5, satisfaction: 88 },
  { month: 'Feb', falls: 2, medication: 4, satisfaction: 89 },
  { month: 'Mar', falls: 4, medication: 3, satisfaction: 87 },
  { month: 'Apr', falls: 1, medication: 2, satisfaction: 90 },
  { month: 'May', falls: 0, medication: 2, satisfaction: 91 },
  { month: 'Jun', falls: 1, medication: 1, satisfaction: 92 },
];

const pieData = [
  { name: 'Falls', value: 12, color: '#ef4444' },
  { name: 'Medication Errors', value: 18, color: '#f97316' },
  { name: 'Equipment Issues', value: 8, color: '#eab308' },
  { name: 'Communication', value: 15, color: '#3b82f6' },
  { name: 'Documentation', value: 7, color: '#6366f1' },
];

const QualitySafety: React.FC = () => {
  const getSeverityBadge = (severity: string) => {
    switch(severity) {
      case 'High':
        return <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">High</Badge>;
      case 'Medium':
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Medium</Badge>;
      case 'Low':
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Low</Badge>;
      default:
        return <Badge variant="outline">{severity}</Badge>;
    }
  };
  
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Resolved':
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Resolved</Badge>;
      case 'In Progress':
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">In Progress</Badge>;
      case 'Pending':
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Pending</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  
  const getComplianceBadge = (compliance: string) => {
    switch(compliance) {
      case 'Current':
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Current</Badge>;
      case 'Overdue':
        return <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">Overdue</Badge>;
      case 'Due Soon':
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Due Soon</Badge>;
      default:
        return <Badge variant="outline">{compliance}</Badge>;
    }
  };
  
  return (
    <div className="space-y-6 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Quality & Safety</h1>
          <p className="text-muted-foreground">
            Monitor quality metrics and safety protocols
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex space-x-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1.5">
            <FileCheck className="h-4 w-4" />
            <span>Reports</span>
          </Button>
          <Button className="flex items-center gap-1.5 bg-mcn-blue text-white">
            <AlertTriangle className="h-4 w-4" />
            <span>Report Incident</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="overview" className="flex items-center gap-1">
            <BarChart className="h-4 w-4" />
            <span>Quality Overview</span>
          </TabsTrigger>
          <TabsTrigger value="incidents" className="flex items-center gap-1">
            <AlertTriangle className="h-4 w-4" />
            <span>Incident Management</span>
          </TabsTrigger>
          <TabsTrigger value="safety" className="flex items-center gap-1">
            <Shield className="h-4 w-4" />
            <span>Safety Protocols</span>
          </TabsTrigger>
          <TabsTrigger value="improvement" className="flex items-center gap-1">
            <LineChart className="h-4 w-4" />
            <span>Quality Improvement</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="w-full">
          {/* Quality Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {qualityMetrics.slice(0, 3).map(metric => (
              <Card key={metric.name}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{metric.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-3xl font-bold">{metric.score}%</div>
                    <div className="flex items-center gap-1">
                      {metric.change > 0 ? (
                        <div className="flex items-center text-green-600">
                          <ArrowUpRight className="h-4 w-4" />
                          <span>+{metric.change}%</span>
                        </div>
                      ) : metric.change < 0 ? (
                        <div className="flex items-center text-red-600">
                          <ArrowDownRight className="h-4 w-4" />
                          <span>{metric.change}%</span>
                        </div>
                      ) : (
                        <div className="text-gray-500">No change</div>
                      )}
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    Target: {metric.target}%
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div 
                      className={`h-2.5 rounded-full ${
                        metric.score >= metric.target ? 'bg-green-600' : 'bg-amber-500'
                      }`}
                      style={{ width: `${metric.score}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Charts and Data */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Outcome Trends</CardTitle>
                <CardDescription>Six-month trend of key quality indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartLine
                      data={outcomeData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="falls" stroke="#ef4444" name="Falls" />
                      <Line type="monotone" dataKey="medication" stroke="#f97316" name="Med Errors" />
                      <Line type="monotone" dataKey="satisfaction" stroke="#3b82f6" name="Satisfaction %" />
                    </RechartLine>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Incident Distribution</CardTitle>
                <CardDescription>Types of incidents reported this quarter</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartPie>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </RechartPie>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="incidents" className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Incident Reports</CardTitle>
              <CardDescription>Track and manage client safety incidents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Incident Type</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Severity</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions Taken</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {incidents.map(incident => (
                      <TableRow key={incident.id}>
                        <TableCell className="font-medium">{incident.type}</TableCell>
                        <TableCell>{incident.client}</TableCell>
                        <TableCell>{incident.date}</TableCell>
                        <TableCell>{getSeverityBadge(incident.severity)}</TableCell>
                        <TableCell>{getStatusBadge(incident.status)}</TableCell>
                        <TableCell className="max-w-[200px] truncate">{incident.action}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">View</Button>
                            <Button variant="outline" size="sm">Update</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-6">
                <Button className="w-full">Report New Incident</Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Incident Analysis */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Incident Analysis</CardTitle>
              <CardDescription>Trends and patterns in safety incidents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartBar
                    data={outcomeData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="falls" name="Falls" fill="#ef4444" />
                    <Bar dataKey="medication" name="Medication Errors" fill="#f97316" />
                  </RechartBar>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm font-medium">Total Incidents</div>
                  <div className="text-2xl font-bold mt-1">24</div>
                  <div className="text-sm text-gray-500 mt-1">This Quarter</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm font-medium">Resolution Rate</div>
                  <div className="text-2xl font-bold mt-1">87%</div>
                  <div className="text-sm text-gray-500 mt-1">Within 48 hours</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm font-medium">Repeat Incidents</div>
                  <div className="text-2xl font-bold mt-1">9%</div>
                  <div className="text-sm text-gray-500 mt-1">Reduction from last quarter</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="safety" className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Safety Protocols & Checklists</CardTitle>
              <CardDescription>Monitor safety assessment compliance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Safety Task</TableHead>
                      <TableHead>Frequency</TableHead>
                      <TableHead>Last Completed</TableHead>
                      <TableHead>Compliance Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {safetyItems.map(item => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.task}</TableCell>
                        <TableCell>{item.frequency}</TableCell>
                        <TableCell>{item.lastCompleted}</TableCell>
                        <TableCell>{getComplianceBadge(item.compliance)}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Complete</Button>
                            <Button variant="outline" size="sm">View History</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
          
          {/* Safety Resources */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Safety Resources</CardTitle>
                <CardDescription>Guidelines and protocols for client safety</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-gray-50 rounded-lg flex items-center gap-3">
                  <Shield className="h-6 w-6 text-mcn-blue" />
                  <div>
                    <div className="font-medium">Fall Prevention Protocol</div>
                    <div className="text-sm text-gray-500">Updated 3 months ago</div>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto">View</Button>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg flex items-center gap-3">
                  <Shield className="h-6 w-6 text-mcn-blue" />
                  <div>
                    <div className="font-medium">Medication Safety Guidelines</div>
                    <div className="text-sm text-gray-500">Updated 1 month ago</div>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto">View</Button>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg flex items-center gap-3">
                  <Shield className="h-6 w-6 text-mcn-blue" />
                  <div>
                    <div className="font-medium">Home Safety Assessment Tool</div>
                    <div className="text-sm text-gray-500">Updated 2 weeks ago</div>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto">View</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Safety Training Status</CardTitle>
                <CardDescription>Staff safety certification status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <div className="text-sm font-medium">Fall Prevention</div>
                    <div className="text-sm font-medium text-green-600">100%</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <div className="text-sm font-medium">Medication Safety</div>
                    <div className="text-sm font-medium text-green-600">95%</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '95%' }} />
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <div className="text-sm font-medium">Emergency Response</div>
                    <div className="text-sm font-medium text-amber-600">82%</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '82%' }} />
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full">View Training Schedule</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="improvement" className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Quality Improvement Projects</CardTitle>
              <CardDescription>Ongoing initiatives to enhance care quality</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {improvementProjects.map(project => (
                  <div key={project.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-lg">{project.name}</h3>
                        <div className="text-sm text-gray-500">Led by: {project.lead}</div>
                      </div>
                      <Badge className={`
                        ${project.status === 'In Progress' ? 'bg-blue-100 text-blue-800 border-blue-200' : 
                          project.status === 'Completed' ? 'bg-green-100 text-green-800 border-green-200' : 
                          'bg-amber-100 text-amber-800 border-amber-200'}
                      `}>
                        {project.status}
                      </Badge>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex justify-between mb-2">
                        <div className="text-sm font-medium">Progress</div>
                        <div className="text-sm font-medium">{project.completion}%</div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${
                            project.status === 'Completed' ? 'bg-green-600' : 
                            project.completion > 50 ? 'bg-blue-600' : 'bg-amber-500'
                          }`}
                          style={{ width: `${project.completion}%` }}
                        />
                      </div>
                    </div>
                    
                    <div className="mt-4 flex space-x-2">
                      <Button variant="outline" size="sm">View Details</Button>
                      {project.status !== 'Completed' && (
                        <Button variant="outline" size="sm">Update Progress</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Button className="w-full">Start New Quality Project</Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Quality Metrics and Benchmarks */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Quality Benchmarks</CardTitle>
              <CardDescription>Comparing performance against industry standards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[250px] mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartBar
                    data={[
                      { metric: 'Client Satisfaction', your: 92, benchmark: 85 },
                      { metric: 'Falls per 1000', your: 2.1, benchmark: 3.5 },
                      { metric: 'Medication Errors', your: 1.5, benchmark: 2.2 },
                      { metric: 'Timely Documentation', your: 88, benchmark: 80 },
                      { metric: 'Hospital Readmission', your: 12, benchmark: 15 }
                    ]}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="metric" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="your" name="Your Performance" fill="#3b82f6" />
                    <Bar dataKey="benchmark" name="Industry Benchmark" fill="#6366f1" />
                  </RechartBar>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <ThumbsUp className="h-8 w-8 text-blue-500 mr-3" />
                  <div>
                    <div className="font-medium">Excellence Areas</div>
                    <div className="text-sm text-gray-600">Client satisfaction, Documentation completeness</div>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-amber-50 rounded-lg">
                  <Users className="h-8 w-8 text-amber-500 mr-3" />
                  <div>
                    <div className="font-medium">Improvement Opportunities</div>
                    <div className="text-sm text-gray-600">Medication compliance, Care plan adherence</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default QualitySafety;
