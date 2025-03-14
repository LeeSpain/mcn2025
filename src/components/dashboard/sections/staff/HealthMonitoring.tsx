
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Heart, Activity, Clock, Bell, AlertCircle, CheckCircle } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// Sample health data for charts
const vitalData = [
  { time: '8AM', heartRate: 72, bloodPressureSys: 120, bloodPressureDia: 80 },
  { time: '10AM', heartRate: 75, bloodPressureSys: 122, bloodPressureDia: 82 },
  { time: '12PM', heartRate: 78, bloodPressureSys: 125, bloodPressureDia: 85 },
  { time: '2PM', heartRate: 74, bloodPressureSys: 118, bloodPressureDia: 78 },
  { time: '4PM', heartRate: 73, bloodPressureSys: 121, bloodPressureDia: 81 },
  { time: '6PM', heartRate: 71, bloodPressureSys: 119, bloodPressureDia: 79 },
];

// Sample alerts data
const healthAlerts = [
  { id: 1, client: 'Robert Williams', type: 'Medication', status: 'Missed', time: '2 hours ago', severity: 'High' },
  { id: 2, client: 'Emma Davis', type: 'Blood Pressure', status: 'Elevated', time: '4 hours ago', severity: 'Medium' },
  { id: 3, client: 'Sarah Johnson', type: 'Activity', status: 'Below Target', time: '1 day ago', severity: 'Low' },
  { id: 4, client: 'Michael Taylor', type: 'Fall Risk', status: 'Detected', time: '6 hours ago', severity: 'High' },
];

const HealthMonitoring: React.FC = () => {
  const getSeverityClass = (severity: string) => {
    switch(severity) {
      case 'High':
        return 'text-red-600 bg-red-100 px-2 py-1 rounded-full text-xs';
      case 'Medium':
        return 'text-amber-600 bg-amber-100 px-2 py-1 rounded-full text-xs';
      case 'Low':
        return 'text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs';
      default:
        return 'text-gray-600 bg-gray-100 px-2 py-1 rounded-full text-xs';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Client Health Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Client Vital Trends</CardTitle>
            <CardDescription>Select a client to view detailed health data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={vitalData}
                  margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="heartRate" stroke="#8884d8" name="Heart Rate" />
                  <Line type="monotone" dataKey="bloodPressureSys" stroke="#82ca9d" name="BP Systolic" />
                  <Line type="monotone" dataKey="bloodPressureDia" stroke="#ffc658" name="BP Diastolic" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="p-2 bg-purple-50 rounded-md border border-purple-100 flex items-center">
                <Heart className="h-4 w-4 text-purple-500 mr-2" />
                <div>
                  <div className="text-xs text-gray-500">Heart Rate</div>
                  <div className="font-medium">74 bpm</div>
                </div>
              </div>
              <div className="p-2 bg-green-50 rounded-md border border-green-100 flex items-center">
                <Activity className="h-4 w-4 text-green-500 mr-2" />
                <div>
                  <div className="text-xs text-gray-500">BP</div>
                  <div className="font-medium">121/80</div>
                </div>
              </div>
              <div className="p-2 bg-blue-50 rounded-md border border-blue-100 flex items-center">
                <Clock className="h-4 w-4 text-blue-500 mr-2" />
                <div>
                  <div className="text-xs text-gray-500">Last Check</div>
                  <div className="font-medium">2h ago</div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View Client Health History</Button>
          </CardFooter>
        </Card>

        {/* Health & Safety Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Health & Safety Alerts</CardTitle>
            <CardDescription>Requires staff attention or intervention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {healthAlerts.map(alert => (
                <div key={alert.id} className="p-3 border rounded-md flex items-start">
                  <div className="mr-3">
                    {alert.severity === 'High' ? (
                      <div className="bg-red-100 p-2 rounded-full">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      </div>
                    ) : alert.severity === 'Medium' ? (
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Bell className="h-5 w-5 text-amber-500" />
                      </div>
                    ) : (
                      <div className="bg-green-100 p-2 rounded-full">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div className="font-medium">{alert.client}</div>
                      <span className={getSeverityClass(alert.severity)}>{alert.severity}</span>
                    </div>
                    <div className="text-sm">{alert.type}: {alert.status}</div>
                    <div className="text-xs text-gray-500 mt-1">{alert.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View All Alerts</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Medication Compliance Tracker */}
      <Card>
        <CardHeader>
          <CardTitle>Medication Compliance</CardTitle>
          <CardDescription>Track client medication adherence</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead>Today's Compliance</TableHead>
                  <TableHead>Weekly Average</TableHead>
                  <TableHead>Missed Doses</TableHead>
                  <TableHead>Next Due</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Robert Williams</TableCell>
                  <TableCell>
                    <span className="text-amber-600 bg-amber-100 px-2 py-1 rounded-full text-xs">3/4 Taken</span>
                  </TableCell>
                  <TableCell>87%</TableCell>
                  <TableCell>Evening dose (Today)</TableCell>
                  <TableCell>8:00 PM</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">Remind</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Emma Davis</TableCell>
                  <TableCell>
                    <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs">All Taken</span>
                  </TableCell>
                  <TableCell>98%</TableCell>
                  <TableCell>None</TableCell>
                  <TableCell>9:00 AM (Tomorrow)</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">View Plan</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>James Miller</TableCell>
                  <TableCell>
                    <span className="text-red-600 bg-red-100 px-2 py-1 rounded-full text-xs">1/3 Taken</span>
                  </TableCell>
                  <TableCell>62%</TableCell>
                  <TableCell>Afternoon, Evening doses</TableCell>
                  <TableCell>2:00 PM</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">Call</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HealthMonitoring;
