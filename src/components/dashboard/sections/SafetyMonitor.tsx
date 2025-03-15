
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Activity, AlertTriangle, Home, Shield, Bell, Phone, User, Users, DoorOpen, Thermometer, Map, Battery } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const SafetyMonitor: React.FC = () => {
  const [homeStatus, setHomeStatus] = useState<'secure' | 'alert' | 'warning'>('secure');
  
  // Sample data for alerts
  const recentAlerts = [
    { id: 1, type: 'Movement', location: 'Living Room', time: '2 hours ago', status: 'resolved' },
    { id: 2, type: 'Door', location: 'Front Door', time: '5 hours ago', status: 'resolved' },
    { id: 3, type: 'No Activity', location: 'Home', time: 'yesterday', status: 'resolved' }
  ];
  
  // Sample data for emergency contacts
  const emergencyContacts = [
    { id: 1, name: 'John Smith', relation: 'Son', phone: '(555) 123-4567', priority: 1 },
    { id: 2, name: 'Mary Johnson', relation: 'Daughter', phone: '(555) 234-5678', priority: 2 },
    { id: 3, name: 'Dr. Williams', relation: 'Primary Doctor', phone: '(555) 345-6789', priority: 3 }
  ];
  
  // Sample sensor data
  const sensorReadings = [
    { id: 1, type: 'Temperature', location: 'Living Room', value: '72°F', status: 'normal' },
    { id: 2, type: 'Door', location: 'Front Door', value: 'Closed', status: 'normal' },
    { id: 3, type: 'Door', location: 'Back Door', value: 'Closed', status: 'normal' },
    { id: 4, type: 'Window', location: 'Bedroom', value: 'Closed', status: 'normal' },
    { id: 5, type: 'Motion', location: 'Kitchen', value: 'Detected', status: 'normal' },
    { id: 6, type: 'Temperature', location: 'Bedroom', value: '70°F', status: 'normal' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-1.5">
        <h2 className="text-2xl font-semibold tracking-tight">Safety Monitor</h2>
        <p className="text-muted-foreground">Monitor your home environment and safety settings</p>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Shield className={`h-5 w-5 ${homeStatus === 'secure' ? 'text-green-500' : homeStatus === 'warning' ? 'text-amber-500' : 'text-red-500'}`} />
              Home Status
            </CardTitle>
            <CardDescription>Overall safety status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold flex items-center">
                <span className={`inline-flex h-3 w-3 rounded-full mr-2 ${homeStatus === 'secure' ? 'bg-green-500' : homeStatus === 'warning' ? 'bg-amber-500' : 'bg-red-500'}`}></span>
                {homeStatus === 'secure' ? 'Secure' : homeStatus === 'warning' ? 'Warning' : 'Alert'}
              </div>
              <div className="text-sm text-muted-foreground">Updated 5m ago</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-amber-500" />
              Recent Alerts
            </CardTitle>
            <CardDescription>Safety notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="text-3xl font-bold">3</div>
              <div className="text-sm text-muted-foreground">Last 24 hours</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Battery className="h-5 w-5 text-green-500" />
              Device Status
            </CardTitle>
            <CardDescription>Sensor battery levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold flex items-center">
                <span className="inline-flex h-3 w-3 rounded-full mr-2 bg-green-500"></span>
                All devices operational
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="activity" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="activity" className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Activity Patterns
          </TabsTrigger>
          <TabsTrigger value="emergency" className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Emergency Settings
          </TabsTrigger>
          <TabsTrigger value="environment" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Home Environment
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Activity Pattern Dashboard</CardTitle>
              <CardDescription>Visualize your daily movement patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Today's Activity</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Activity className="h-5 w-5 mr-2 text-blue-500" />
                        <span>Movement</span>
                      </div>
                      <div className="font-medium">Normal</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <DoorOpen className="h-5 w-5 mr-2 text-indigo-500" />
                        <span>Door Usage</span>
                      </div>
                      <div className="font-medium">3 times</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <User className="h-5 w-5 mr-2 text-amber-500" />
                        <span>Room Presence</span>
                      </div>
                      <div className="font-medium">Living Room (Current)</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Bell className="h-5 w-5 mr-2 text-red-500" />
                        <span>Unusual Patterns</span>
                      </div>
                      <div className="font-medium">None detected</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Movement Heat Map</h3>
                  <div className="aspect-video bg-white rounded border border-gray-200 p-3 flex items-center justify-center">
                    <Map className="h-12 w-12 text-gray-300" />
                    <p className="text-sm text-muted-foreground ml-2">Home floor plan would display here</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      Movement is concentrated in the living room and kitchen areas today, 
                      which follows your typical pattern.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Recent Alerts</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Type</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentAlerts.map(alert => (
                      <TableRow key={alert.id}>
                        <TableCell className="font-medium">{alert.type}</TableCell>
                        <TableCell>{alert.location}</TableCell>
                        <TableCell>{alert.time}</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                            {alert.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="emergency">
          <Card>
            <CardHeader>
              <CardTitle>Emergency Settings</CardTitle>
              <CardDescription>Configure your emergency contacts and alert preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Emergency Contacts</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Priority</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Relation</TableHead>
                        <TableHead>Phone</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {emergencyContacts.map(contact => (
                        <TableRow key={contact.id}>
                          <TableCell>{contact.priority}</TableCell>
                          <TableCell className="font-medium">{contact.name}</TableCell>
                          <TableCell>{contact.relation}</TableCell>
                          <TableCell>{contact.phone}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Alert Settings</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
                        <span>Fall Detection</span>
                      </div>
                      <div className="font-medium text-green-600">Enabled</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Bell className="h-5 w-5 mr-2 text-amber-500" />
                        <span>Inactivity Alerts</span>
                      </div>
                      <div className="font-medium text-green-600">Enabled (3h threshold)</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <DoorOpen className="h-5 w-5 mr-2 text-amber-500" />
                        <span>Door Left Open</span>
                      </div>
                      <div className="font-medium text-green-600">Enabled (5m threshold)</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-2 text-amber-500" />
                        <span>Emergency Button</span>
                      </div>
                      <div className="font-medium text-green-600">Enabled</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Emergency Response Plan</h3>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 pt-0.5">
                        <Shield className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-blue-800">Your emergency response plan</p>
                        <ul className="mt-2 text-sm text-blue-700 list-disc list-inside space-y-1">
                          <li>Alert will be sent to emergency contacts in priority order</li>
                          <li>If no response within 2 minutes, next contact will be alerted</li>
                          <li>Medical information will be made available to emergency responders</li>
                          <li>Door lock will be automatically unlocked for emergency personnel</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="environment">
          <Card>
            <CardHeader>
              <CardTitle>Home Environment</CardTitle>
              <CardDescription>Monitor temperature, door/window status, and other home sensors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Sensor Readings</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Sensor Type</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Reading</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sensorReadings.map(sensor => (
                        <TableRow key={sensor.id}>
                          <TableCell className="font-medium">{sensor.type}</TableCell>
                          <TableCell>{sensor.location}</TableCell>
                          <TableCell>{sensor.value}</TableCell>
                          <TableCell>
                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${sensor.status === 'normal' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                              {sensor.status}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Home Safety Checklist</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 pt-0.5">
                          <span className="inline-flex h-4 w-4 rounded-full bg-green-100 text-green-500 items-center justify-center">
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                          </span>
                        </div>
                        <p className="ml-2 text-sm">All doors secured and locked</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 pt-0.5">
                          <span className="inline-flex h-4 w-4 rounded-full bg-green-100 text-green-500 items-center justify-center">
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                          </span>
                        </div>
                        <p className="ml-2 text-sm">All windows secured and locked</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 pt-0.5">
                          <span className="inline-flex h-4 w-4 rounded-full bg-green-100 text-green-500 items-center justify-center">
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                          </span>
                        </div>
                        <p className="ml-2 text-sm">Smoke detectors operational</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 pt-0.5">
                          <span className="inline-flex h-4 w-4 rounded-full bg-green-100 text-green-500 items-center justify-center">
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                          </span>
                        </div>
                        <p className="ml-2 text-sm">Carbon monoxide detector operational</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 pt-0.5">
                          <span className="inline-flex h-4 w-4 rounded-full bg-green-100 text-green-500 items-center justify-center">
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                          </span>
                        </div>
                        <p className="ml-2 text-sm">Temperature in safe range</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Device Status</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b pb-2">
                        <div className="flex items-center">
                          <Thermometer className="h-5 w-5 mr-2 text-blue-500" />
                          <span>Thermostat</span>
                        </div>
                        <div className="text-sm font-medium text-green-600">Online (100%)</div>
                      </div>
                      <div className="flex justify-between items-center border-b pb-2">
                        <div className="flex items-center">
                          <DoorOpen className="h-5 w-5 mr-2 text-indigo-500" />
                          <span>Door Sensors</span>
                        </div>
                        <div className="text-sm font-medium text-green-600">Online (92%)</div>
                      </div>
                      <div className="flex justify-between items-center border-b pb-2">
                        <div className="flex items-center">
                          <Activity className="h-5 w-5 mr-2 text-amber-500" />
                          <span>Motion Sensors</span>
                        </div>
                        <div className="text-sm font-medium text-green-600">Online (87%)</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
                          <span>Emergency Button</span>
                        </div>
                        <div className="text-sm font-medium text-green-600">Online (100%)</div>
                      </div>
                    </div>
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

export default SafetyMonitor;
