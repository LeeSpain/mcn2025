
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Pill, 
  CalendarClock, 
  AlertTriangle, 
  CheckCircle2, 
  Clock,
  Search,
  Filter,
  Plus,
  FileEdit,
  ListChecks,
  AlertOctagon,
  CalendarDays
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

// Sample medication data
const medicationSchedule = [
  { 
    id: 1, 
    client: 'Jan de Vries', 
    medication: 'Lisinopril', 
    dosage: '20mg',
    schedule: 'Daily, morning',
    lastTaken: '8:15 AM today',
    status: 'Taken',
    notes: 'Take with food',
    nextDue: 'Tomorrow, 8:00 AM' 
  },
  { 
    id: 2, 
    client: 'Anna Koster', 
    medication: 'Metoprolol', 
    dosage: '50mg',
    schedule: 'Twice daily',
    lastTaken: '9:30 AM today',
    status: 'Taken',
    notes: 'Monitor blood pressure',
    nextDue: 'Today, 9:00 PM' 
  },
  { 
    id: 3, 
    client: 'Anna Koster', 
    medication: 'Warfarin', 
    dosage: '2.5mg',
    schedule: 'Daily, evening',
    lastTaken: 'Yesterday, 8:45 PM',
    status: 'Upcoming',
    notes: 'Blood test weekly',
    nextDue: 'Today, 9:00 PM' 
  },
  { 
    id: 4, 
    client: 'Pieter Bakker', 
    medication: 'Tramadol', 
    dosage: '50mg',
    schedule: 'Every 6 hours as needed',
    lastTaken: 'Yesterday, 6:00 PM',
    status: 'Missed',
    notes: 'For pain management',
    nextDue: 'Today, 12:00 PM' 
  },
  { 
    id: 5, 
    client: 'Maria Jansen', 
    medication: 'Metformin', 
    dosage: '1000mg',
    schedule: 'Twice daily with meals',
    lastTaken: 'Today, 7:30 AM',
    status: 'Taken',
    notes: 'Monitor glucose levels',
    nextDue: 'Today, 6:00 PM' 
  },
];

// Medication non-compliance alerts
const medicationAlerts = [
  {
    id: 1,
    client: 'Pieter Bakker',
    issue: 'Missed 2 doses of Tramadol',
    time: '2 days',
    severity: 'High',
  },
  {
    id: 2,
    client: 'Jan de Vries',
    issue: 'Lisinopril timing inconsistent',
    time: '1 week',
    severity: 'Medium',
  },
  {
    id: 3,
    client: 'Thomas Visser',
    issue: 'New prescription needs review',
    time: '1 day',
    severity: 'Low',
  },
];

const MedicationManagement: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredMedications = medicationSchedule.filter(med => 
    med.client.toLowerCase().includes(searchQuery.toLowerCase()) || 
    med.medication.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Taken':
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Taken</Badge>;
      case 'Upcoming':
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Upcoming</Badge>;
      case 'Missed':
        return <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">Missed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  
  return (
    <div className="space-y-6 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Medication Management</h1>
          <p className="text-muted-foreground">
            Monitor, record, and manage client medications
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex space-x-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search medications..."
              className="pl-9 pr-4 py-2 text-sm w-full sm:w-auto min-w-[200px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="sm" className="flex items-center gap-1.5">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Button className="flex items-center gap-1.5 bg-mcn-blue text-white">
            <Plus className="h-4 w-4" />
            <span>Add Medication</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="schedule" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="schedule" className="flex items-center gap-1">
            <CalendarClock className="h-4 w-4" />
            <span>Medication Schedule</span>
          </TabsTrigger>
          <TabsTrigger value="alerts" className="flex items-center gap-1">
            <AlertTriangle className="h-4 w-4" />
            <span>Compliance Alerts</span>
          </TabsTrigger>
          <TabsTrigger value="inventory" className="flex items-center gap-1">
            <ListChecks className="h-4 w-4" />
            <span>Medication Inventory</span>
          </TabsTrigger>
          <TabsTrigger value="prescriptions" className="flex items-center gap-1">
            <FileEdit className="h-4 w-4" />
            <span>Prescriptions</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="schedule" className="w-full">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Today's Medication Schedule</CardTitle>
                  <CardDescription>Tracking client medication administration</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <CalendarDays className="h-4 w-4" />
                    <span>Change Date</span>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Client</TableHead>
                      <TableHead>Medication</TableHead>
                      <TableHead>Dosage</TableHead>
                      <TableHead>Schedule</TableHead>
                      <TableHead>Last Taken</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Notes</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredMedications.map(med => (
                      <TableRow key={med.id}>
                        <TableCell className="font-medium">{med.client}</TableCell>
                        <TableCell>{med.medication}</TableCell>
                        <TableCell>{med.dosage}</TableCell>
                        <TableCell>{med.schedule}</TableCell>
                        <TableCell className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {med.lastTaken}
                        </TableCell>
                        <TableCell>{getStatusBadge(med.status)}</TableCell>
                        <TableCell className="text-sm text-gray-500">{med.notes}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Record</Button>
                            <Button variant="outline" size="sm">View</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
          
          {/* Medication Compliance Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Upcoming Medications</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {medicationSchedule.filter(m => m.status === 'Upcoming').map(med => (
                    <div key={med.id} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div>
                        <div className="font-medium">{med.client}</div>
                        <div className="text-sm">{med.medication} {med.dosage}</div>
                        <div className="text-xs text-gray-500">{med.nextDue}</div>
                      </div>
                      <Button size="sm">Notify</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Missed Medications</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {medicationSchedule.filter(m => m.status === 'Missed').map(med => (
                    <div key={med.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div>
                        <div className="font-medium">{med.client}</div>
                        <div className="text-sm">{med.medication} {med.dosage}</div>
                        <div className="text-xs text-gray-500">Due: {med.nextDue}</div>
                      </div>
                      <Button size="sm" variant="destructive">Resolve</Button>
                    </div>
                  ))}
                  {medicationSchedule.filter(m => m.status === 'Missed').length === 0 && (
                    <div className="p-6 text-center text-gray-500">
                      No missed medications
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Compliance Stats</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm font-medium">Overall Compliance</div>
                    <div className="text-lg font-semibold text-green-600">92%</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm font-medium">Taken On Time</div>
                    <div className="text-lg font-semibold text-blue-600">87%</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm font-medium">Total Medications</div>
                    <div className="text-lg font-semibold">{medicationSchedule.length}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="alerts" className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Medication Compliance Alerts</CardTitle>
              <CardDescription>Clients requiring medication adherence intervention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {medicationAlerts.map(alert => (
                  <div key={alert.id} className="p-3 border rounded-md flex items-start">
                    <div className="mr-3">
                      {alert.severity === 'High' ? (
                        <div className="bg-red-100 p-2 rounded-full">
                          <AlertOctagon className="h-5 w-5 text-red-500" />
                        </div>
                      ) : alert.severity === 'Medium' ? (
                        <div className="bg-amber-100 p-2 rounded-full">
                          <AlertTriangle className="h-5 w-5 text-amber-500" />
                        </div>
                      ) : (
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Pill className="h-5 w-5 text-blue-500" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div className="font-medium">{alert.client}</div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium
                          ${alert.severity === 'High' ? 'bg-red-100 text-red-800' : 
                            alert.severity === 'Medium' ? 'bg-amber-100 text-amber-800' : 
                            'bg-blue-100 text-blue-800'}`}>
                          {alert.severity}
                        </span>
                      </div>
                      <div className="text-sm">{alert.issue}</div>
                      <div className="text-xs text-gray-500 mt-1">Ongoing for {alert.time}</div>
                      <div className="mt-2 flex space-x-2">
                        <Button size="sm" variant="outline">Call Client</Button>
                        <Button size="sm" variant="outline">Send Reminder</Button>
                        <Button size="sm">Resolve</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Alerts</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="inventory" className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Medication Inventory</CardTitle>
              <CardDescription>Track medication supply and refill status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-12 text-center">
                <Pill className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium mb-2">Medication Inventory Tracking</h3>
                <p className="text-gray-500 mb-4">This feature allows you to track medication supplies and schedule refills.</p>
                <Button>Set Up Inventory Tracking</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="prescriptions" className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Prescription Management</CardTitle>
              <CardDescription>Manage and renew client prescriptions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-12 text-center">
                <FileEdit className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium mb-2">Prescription Management</h3>
                <p className="text-gray-500 mb-4">Track prescription renewals, medication changes, and provider communications.</p>
                <Button>View Prescription Records</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MedicationManagement;
