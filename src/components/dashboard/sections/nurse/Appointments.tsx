
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Video, 
  Phone, 
  Users, 
  Calendar as CalendarIcon, 
  Clock, 
  Plus, 
  Check, 
  X,
  AlertCircle,
  FileText,
  MoreHorizontal,
  Filter,
  Search
} from 'lucide-react';

// Sample appointments data
const upcomingAppointments = [
  { 
    id: 1, 
    client: 'Elizabeth Wilson', 
    date: 'Today', 
    time: '10:30 AM', 
    type: 'Video Call', 
    purpose: 'Medication Review', 
    duration: '30 min',
    status: 'Confirmed'
  },
  { 
    id: 2, 
    client: 'Robert Johnson', 
    date: 'Today', 
    time: '1:45 PM', 
    type: 'Phone Call', 
    purpose: 'Follow-up', 
    duration: '15 min',
    status: 'Confirmed'
  },
  { 
    id: 3, 
    client: 'Patricia Davis', 
    date: 'Tomorrow', 
    time: '9:15 AM', 
    type: 'Video Call', 
    purpose: 'Health Assessment', 
    duration: '45 min',
    status: 'Pending'
  },
  { 
    id: 4, 
    client: 'James Miller', 
    date: 'Jun 10, 2023', 
    time: '11:00 AM', 
    type: 'Video Call', 
    purpose: 'Care Plan Review', 
    duration: '30 min',
    status: 'Confirmed'
  },
  { 
    id: 5, 
    client: 'Mary Taylor', 
    date: 'Jun 12, 2023', 
    time: '2:30 PM', 
    type: 'Phone Call', 
    purpose: 'Medical Results', 
    duration: '20 min',
    status: 'Needs Scheduling'
  },
];

const pastAppointments = [
  { 
    id: 101, 
    client: 'Elizabeth Wilson', 
    date: 'Jun 2, 2023', 
    time: '10:30 AM', 
    type: 'Video Call', 
    purpose: 'Medication Review', 
    duration: '30 min',
    status: 'Completed',
    notes: 'Patient reported improved sleep, adjusted medication schedule'
  },
  { 
    id: 102, 
    client: 'Robert Johnson', 
    date: 'Jun 1, 2023', 
    time: '1:45 PM', 
    type: 'Phone Call', 
    purpose: 'Follow-up', 
    duration: '15 min',
    status: 'Completed',
    notes: 'No issues reported, next appointment in 2 weeks'
  },
  { 
    id: 103, 
    client: 'Patricia Davis', 
    date: 'May 29, 2023', 
    time: '9:15 AM', 
    type: 'Video Call', 
    purpose: 'Health Assessment', 
    duration: '45 min',
    status: 'Cancelled',
    notes: 'Patient had transportation issues, rescheduled for next week'
  },
];

// Weekly schedule slots
const timeSlots = [
  '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', 
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
];

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const Appointments: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [activeTab, setActiveTab] = useState('upcoming');

  // Generate the schedule grid data
  const scheduleGrid = timeSlots.map(time => {
    const row: any = { time };
    weekDays.forEach(day => {
      // Randomly add some appointments for demo purposes
      if (Math.random() > 0.8) {
        const types = ['Video Call', 'Phone Call'];
        const clients = ['Elizabeth W.', 'Robert J.', 'Patricia D.', 'James M.', 'Mary T.'];
        row[day] = {
          client: clients[Math.floor(Math.random() * clients.length)],
          type: types[Math.floor(Math.random() * types.length)]
        };
      } else {
        row[day] = null;
      }
    });
    return row;
  });

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Confirmed':
        return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Confirmed</span>;
      case 'Pending':
        return <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs">Pending</span>;
      case 'Needs Scheduling':
        return <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Needs Scheduling</span>;
      case 'Completed':
        return <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">Completed</span>;
      case 'Cancelled':
        return <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Cancelled</span>;
      default:
        return <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">{status}</span>;
    }
  };

  const getTypeIcon = (type: string) => {
    if (type === 'Video Call') {
      return <Video className="h-4 w-4 text-blue-500" />;
    } else if (type === 'Phone Call') {
      return <Phone className="h-4 w-4 text-green-500" />;
    } else {
      return <Users className="h-4 w-4 text-purple-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Appointments</h1>
          <p className="text-muted-foreground">
            Manage your remote video and phone appointments with clients
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex items-center space-x-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button size="sm" className="gap-1">
            <Plus className="h-4 w-4" />
            New Appointment
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
              <CardDescription>Your remote appointments for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAppointments
                  .filter(apt => apt.date === 'Today')
                  .map(appointment => (
                    <div 
                      key={appointment.id} 
                      className="p-4 border rounded-lg flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <div className="p-2 rounded-full bg-blue-50 mr-4">
                          {getTypeIcon(appointment.type)}
                        </div>
                        <div>
                          <div className="font-medium">{appointment.client}</div>
                          <div className="text-sm text-gray-500">
                            {appointment.time} • {appointment.duration} • {appointment.purpose}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(appointment.status)}
                        <Button 
                          size="sm" 
                          className="gap-1"
                          disabled={appointment.status !== 'Confirmed'}
                        >
                          {appointment.type === 'Video Call' ? (
                            <>
                              <Video className="h-4 w-4" />
                              Start
                            </>
                          ) : (
                            <>
                              <Phone className="h-4 w-4" />
                              Call
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  ))}
                
                {upcomingAppointments.filter(apt => apt.date === 'Today').length === 0 && (
                  <div className="text-center p-8 text-gray-500">
                    <Calendar className="h-12 w-12 mx-auto text-gray-300 mb-2" />
                    <p>No appointments scheduled for today</p>
                    <Button variant="outline" size="sm" className="mt-4 gap-1">
                      <Plus className="h-4 w-4" />
                      Schedule Appointment
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="mx-auto"
              />
              <div className="mt-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Video Call</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Phone Call</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">In-Person</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full gap-1">
                <CalendarIcon className="h-4 w-4" />
                View Full Calendar
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="upcoming">Upcoming Appointments</TabsTrigger>
          <TabsTrigger value="past">Past Appointments</TabsTrigger>
          <TabsTrigger value="week">Weekly Schedule</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Upcoming Appointments</CardTitle>
                  <CardDescription>
                    All scheduled future appointments
                  </CardDescription>
                </div>
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search appointments..." 
                    className="pl-8 pr-4 py-2 border rounded-md w-48" 
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
                      <TableHead>Type</TableHead>
                      <TableHead>Purpose</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingAppointments.map(appointment => (
                      <TableRow key={appointment.id}>
                        <TableCell className="font-medium">{appointment.client}</TableCell>
                        <TableCell>
                          <div>{appointment.date}</div>
                          <div className="text-xs text-gray-500">{appointment.time}</div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {getTypeIcon(appointment.type)}
                            <span className="ml-2">{appointment.type}</span>
                          </div>
                        </TableCell>
                        <TableCell>{appointment.purpose}</TableCell>
                        <TableCell>{appointment.duration}</TableCell>
                        <TableCell>{getStatusBadge(appointment.status)}</TableCell>
                        <TableCell>
                          <div className="flex space-x-1">
                            {appointment.status === 'Confirmed' && (
                              <Button variant="outline" size="sm">
                                {appointment.type === 'Video Call' ? 'Start' : 'Call'}
                              </Button>
                            )}
                            {appointment.status === 'Needs Scheduling' && (
                              <Button variant="outline" size="sm">Schedule</Button>
                            )}
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
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

        <TabsContent value="past">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Past Appointments</CardTitle>
                  <CardDescription>
                    History of completed and cancelled appointments
                  </CardDescription>
                </div>
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search history..." 
                    className="pl-8 pr-4 py-2 border rounded-md w-48" 
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
                      <TableHead>Type</TableHead>
                      <TableHead>Purpose</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Notes</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pastAppointments.map(appointment => (
                      <TableRow key={appointment.id}>
                        <TableCell className="font-medium">{appointment.client}</TableCell>
                        <TableCell>
                          <div>{appointment.date}</div>
                          <div className="text-xs text-gray-500">{appointment.time}</div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {getTypeIcon(appointment.type)}
                            <span className="ml-2">{appointment.type}</span>
                          </div>
                        </TableCell>
                        <TableCell>{appointment.purpose}</TableCell>
                        <TableCell>{getStatusBadge(appointment.status)}</TableCell>
                        <TableCell className="max-w-[200px] truncate" title={appointment.notes}>
                          {appointment.notes}
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-1">
                            <Button variant="outline" size="sm">
                              <FileText className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">Reschedule</Button>
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

        <TabsContent value="week">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Weekly Schedule</CardTitle>
                  <CardDescription>
                    Week of June 5 - 9, 2023
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">Previous Week</Button>
                  <Button variant="outline" size="sm">This Week</Button>
                  <Button variant="outline" size="sm">Next Week</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-20">Time</TableHead>
                      {weekDays.map(day => (
                        <TableHead key={day}>{day}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {scheduleGrid.map((slot, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="font-medium">{slot.time}</TableCell>
                        {weekDays.map(day => (
                          <TableCell key={day} className="p-1">
                            {slot[day] ? (
                              <div className={`text-xs p-2 rounded-md ${
                                slot[day].type === 'Video Call' ? 'bg-blue-50 border border-blue-200' : 
                                slot[day].type === 'Phone Call' ? 'bg-green-50 border border-green-200' : 
                                'bg-purple-50 border border-purple-200'
                              }`}>
                                <div className="font-medium flex items-center">
                                  {getTypeIcon(slot[day].type)}
                                  <span className="ml-1">{slot[day].client}</span>
                                </div>
                                <div>{slot[day].type}</div>
                              </div>
                            ) : (
                              <div className="h-14 w-full border border-dashed border-gray-200 rounded-md"></div>
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full gap-1">
                <Plus className="h-4 w-4" />
                Add Appointment
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Appointments;
