import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Calendar } from '@/components/ui/calendar';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { 
  Heart, 
  Droplets, 
  Thermometer, 
  Dumbbell, 
  Lung, 
  Activity, 
  Scale,
  ArrowUp,
  ArrowDown,
  BadgeAlert,
  Clock,
  Calendar as CalendarIcon,
  SearchIcon,
  Download,
  Send,
  Plus
} from 'lucide-react';

// Sample vitals data
const vitalsTrendData = [
  { date: 'Jun 1', heartRate: 72, bloodPressureSys: 120, bloodPressureDia: 80, o2: 98, glucose: 92 },
  { date: 'Jun 2', heartRate: 75, bloodPressureSys: 118, bloodPressureDia: 78, o2: 97, glucose: 90 },
  { date: 'Jun 3', heartRate: 78, bloodPressureSys: 121, bloodPressureDia: 82, o2: 98, glucose: 95 },
  { date: 'Jun 4', heartRate: 71, bloodPressureSys: 119, bloodPressureDia: 79, o2: 99, glucose: 88 },
  { date: 'Jun 5', heartRate: 74, bloodPressureSys: 122, bloodPressureDia: 83, o2: 98, glucose: 91 },
  { date: 'Jun 6', heartRate: 76, bloodPressureSys: 121, bloodPressureDia: 81, o2: 97, glucose: 93 },
  { date: 'Jun 7', heartRate: 73, bloodPressureSys: 118, bloodPressureDia: 78, o2: 98, glucose: 90 },
];

// Sample clients list
const clientsList = [
  { id: 1, name: 'Elizabeth Wilson', age: 72, status: 'Stable', lastReading: '2 hours ago' },
  { id: 2, name: 'Robert Johnson', age: 68, status: 'Needs Attention', lastReading: '1 day ago' },
  { id: 3, name: 'Patricia Davis', age: 81, status: 'Stable', lastReading: '4 hours ago' },
  { id: 4, name: 'James Miller', age: 75, status: 'Improving', lastReading: '30 mins ago' },
  { id: 5, name: 'Mary Taylor', age: 79, status: 'Stable', lastReading: '1 hour ago' },
];

// Sample vitals logs
const vitalsLogEntries = [
  { id: 1, client: 'Elizabeth Wilson', date: '06/07/2023', time: '8:30 AM', heartRate: 72, bp: '120/80', temp: '98.6°F', o2: '98%', glucose: '92 mg/dL', notes: 'Patient reports feeling well' },
  { id: 2, client: 'Robert Johnson', date: '06/06/2023', time: '9:15 AM', heartRate: 82, bp: '135/85', temp: '99.1°F', o2: '96%', glucose: '110 mg/dL', notes: 'Slight elevation in glucose' },
  { id: 3, client: 'Patricia Davis', date: '06/05/2023', time: '10:00 AM', heartRate: 68, bp: '118/75', temp: '98.4°F', o2: '99%', glucose: '88 mg/dL', notes: 'All readings within normal range' },
  { id: 4, client: 'James Miller', date: '06/04/2023', time: '2:45 PM', heartRate: 75, bp: '122/82', temp: '98.8°F', o2: '97%', glucose: '94 mg/dL', notes: 'BP slightly improved from last reading' },
];

const VitalsTracking: React.FC = () => {
  const [selectedClient, setSelectedClient] = useState(clientsList[0].name);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [activeTab, setActiveTab] = useState('trends');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Vitals Tracking</h1>
          <p className="text-muted-foreground">
            Monitor and manage client vital signs remotely
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex items-center space-x-2">
          <div className="relative">
            <select 
              className="pl-3 pr-8 py-2 border rounded-md w-48 appearance-none"
              value={selectedClient}
              onChange={(e) => setSelectedClient(e.target.value)}
            >
              {clientsList.map(client => (
                <option key={client.id} value={client.name}>{client.name}</option>
              ))}
            </select>
          </div>
          <Button variant="outline" size="sm" className="gap-1">
            <BadgeAlert className="h-4 w-4" />
            Alerts
          </Button>
          <Button size="sm" className="gap-1">
            <Plus className="h-4 w-4" />
            New Reading
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card className="bg-white">
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <Heart className="h-8 w-8 text-red-500 mb-2" />
            <div className="text-sm text-gray-500">Heart Rate</div>
            <div className="text-2xl font-bold">72 bpm</div>
            <div className="text-xs text-green-600 flex items-center">
              <ArrowDown className="h-3 w-3 mr-1" />
              3 from last reading
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <Activity className="h-8 w-8 text-blue-500 mb-2" />
            <div className="text-sm text-gray-500">Blood Pressure</div>
            <div className="text-2xl font-bold">120/80</div>
            <div className="text-xs text-amber-600 flex items-center">
              <ArrowUp className="h-3 w-3 mr-1" />
              2/1 from last reading
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <Thermometer className="h-8 w-8 text-orange-500 mb-2" />
            <div className="text-sm text-gray-500">Temperature</div>
            <div className="text-2xl font-bold">98.6°F</div>
            <div className="text-xs text-gray-500 flex items-center">
              No change
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <Lung className="h-8 w-8 text-purple-500 mb-2" />
            <div className="text-sm text-gray-500">Oxygen Saturation</div>
            <div className="text-2xl font-bold">98%</div>
            <div className="text-xs text-green-600 flex items-center">
              <ArrowUp className="h-3 w-3 mr-1" />
              1% from last reading
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <Droplets className="h-8 w-8 text-teal-500 mb-2" />
            <div className="text-sm text-gray-500">Glucose</div>
            <div className="text-2xl font-bold">92 mg/dL</div>
            <div className="text-xs text-amber-600 flex items-center">
              <ArrowUp className="h-3 w-3 mr-1" />
              4 from last reading
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="trends">Vitals Trends</TabsTrigger>
          <TabsTrigger value="log">Vitals Log</TabsTrigger>
          <TabsTrigger value="clients">Client Overview</TabsTrigger>
        </TabsList>
        
        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vitals History for {selectedClient}</CardTitle>
              <CardDescription>
                Last 7 days of vital sign measurements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={vitalsTrendData}
                    margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="heartRate" stroke="#ef4444" name="Heart Rate" />
                    <Line type="monotone" dataKey="bloodPressureSys" stroke="#3b82f6" name="BP Systolic" />
                    <Line type="monotone" dataKey="bloodPressureDia" stroke="#60a5fa" name="BP Diastolic" />
                    <Line type="monotone" dataKey="o2" stroke="#8b5cf6" name="O2 Saturation" />
                    <Line type="monotone" dataKey="glucose" stroke="#14b8a6" name="Glucose" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-500">Date Range:</span>
                <Button variant="outline" size="sm">Last 7 Days</Button>
                <Button variant="outline" size="sm">Last 30 Days</Button>
                <Button variant="outline" size="sm">Custom</Button>
              </div>
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-4 w-4" />
                Export Data
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="log" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-lg">Vitals Log Entries</CardTitle>
                  <CardDescription>
                    Recent vital sign measurements recorded by staff or clients
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search logs..." 
                      className="pl-8 pr-4 py-2 border rounded-md w-48" 
                    />
                    <SearchIcon className="h-4 w-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="border rounded-md"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Client</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Heart Rate</TableHead>
                      <TableHead>Blood Pressure</TableHead>
                      <TableHead>Temperature</TableHead>
                      <TableHead>O2 Sat</TableHead>
                      <TableHead>Glucose</TableHead>
                      <TableHead>Notes</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {vitalsLogEntries.map(entry => (
                      <TableRow key={entry.id}>
                        <TableCell>{entry.client}</TableCell>
                        <TableCell>
                          <div>{entry.date}</div>
                          <div className="text-xs text-gray-500">{entry.time}</div>
                        </TableCell>
                        <TableCell>{entry.heartRate} bpm</TableCell>
                        <TableCell>{entry.bp}</TableCell>
                        <TableCell>{entry.temp}</TableCell>
                        <TableCell>{entry.o2}</TableCell>
                        <TableCell>{entry.glucose}</TableCell>
                        <TableCell className="max-w-[200px] truncate" title={entry.notes}>{entry.notes}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">Details</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-4 w-4" />
                Export Log
              </Button>
              <Button size="sm" className="gap-1">
                <Plus className="h-4 w-4" />
                Add Entry
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="clients" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Client Vitals Overview</CardTitle>
              <CardDescription>
                Summary of current vital statuses for all clients
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Client Name</TableHead>
                      <TableHead>Age</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Reading</TableHead>
                      <TableHead>Heart Rate</TableHead>
                      <TableHead>Blood Pressure</TableHead>
                      <TableHead>Temperature</TableHead>
                      <TableHead>O2 Sat</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {clientsList.map(client => (
                      <TableRow key={client.id}>
                        <TableCell className="font-medium">{client.name}</TableCell>
                        <TableCell>{client.age}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs
                            ${client.status === 'Stable' ? 'bg-green-100 text-green-800' : 
                             client.status === 'Needs Attention' ? 'bg-red-100 text-red-800' : 
                             'bg-blue-100 text-blue-800'}`}>
                            {client.status}
                          </span>
                        </TableCell>
                        <TableCell className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-gray-500" />
                          {client.lastReading}
                        </TableCell>
                        <TableCell>72 bpm</TableCell>
                        <TableCell>120/80</TableCell>
                        <TableCell>98.6°F</TableCell>
                        <TableCell>98%</TableCell>
                        <TableCell>
                          <div className="flex space-x-1">
                            <Button variant="outline" size="sm">History</Button>
                            <Button variant="outline" size="sm">Add</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VitalsTracking;
