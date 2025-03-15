
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
  Search,
  Filter,
  MoreHorizontal,
  FileText,
  AlertCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format, addDays, subDays, startOfWeek, endOfWeek, eachDayOfInterval, isToday, isSameDay } from 'date-fns';
import { useLanguage } from '@/context/LanguageContext';
import { toast } from 'sonner';

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

// Sample past appointments data
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
  const [weekStart, setWeekStart] = useState<Date>(startOfWeek(new Date(), { weekStartsOn: 1 }));
  const [activeTab, setActiveTab] = useState('upcoming');
  const { t } = useLanguage();

  // Generate week dates
  const weekDates = eachDayOfInterval({
    start: weekStart,
    end: endOfWeek(weekStart, { weekStartsOn: 1 })
  });

  // Find appointments for the selected date
  const getTodaysAppointments = () => {
    if (!date) return [];
    return upcomingAppointments.filter(apt => {
      if (apt.date === 'Today' && isToday(date)) return true;
      if (apt.date === 'Tomorrow' && isToday(addDays(date, -1))) return true;
      
      // For other dates, we'd ideally parse them properly
      // This is a simplified approach
      return apt.date.includes(format(date, 'MMM d'));
    });
  };

  // Go to previous/next week
  const previousWeek = () => setWeekStart(subDays(weekStart, 7));
  const nextWeek = () => setWeekStart(addDays(weekStart, 7));
  const currentWeek = () => setWeekStart(startOfWeek(new Date(), { weekStartsOn: 1 }));

  const handleStartAppointment = (appointmentType: string) => {
    toast.success(`Starting ${appointmentType}`, {
      description: "Connecting to your appointment...",
      position: "top-center",
    });
  };

  const handleNewAppointment = () => {
    toast.info("Opening new appointment form", {
      description: "You can schedule a new appointment here.",
    });
  };

  // Generate the schedule grid data
  const scheduleGrid = timeSlots.map(time => {
    const row: any = { time };
    weekDays.forEach((day, index) => {
      // Randomly add some appointments for demo purposes
      // In a real app, you'd match actual appointments from your data
      const currentDate = weekDates[index];
      const random = Math.random();
      if (random > 0.8 || (isToday(currentDate) && random > 0.5)) {
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
          <Button size="sm" className="gap-1" onClick={handleNewAppointment}>
            <Plus className="h-4 w-4" />
            New Appointment
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>{date ? format(date, 'MMMM d, yyyy') : 'Today\'s'} Schedule</CardTitle>
                  <CardDescription>Your remote appointments for the selected day</CardDescription>
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      Select Date
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="end">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {getTodaysAppointments().map(appointment => (
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
                        onClick={() => handleStartAppointment(appointment.type)}
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
                
                {getTodaysAppointments().length === 0 && (
                  <div className="text-center p-8 text-gray-500">
                    <CalendarIcon className="h-12 w-12 mx-auto text-gray-300 mb-2" />
                    <p>No appointments scheduled for {date ? format(date, 'MMMM d, yyyy') : 'today'}</p>
                    <Button variant="outline" size="sm" className="mt-4 gap-1" onClick={handleNewAppointment}>
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
              <CardDescription>Select a date to view appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="mx-auto pointer-events-auto"
                modifiers={{
                  booked: (date) => {
                    // Highlight dates with appointments
                    // This is a simplified example - in a real app
                    // you would check against actual appointment dates
                    return [1, 5, 10, 15, 20, 25].includes(date.getDate());
                  }
                }}
                modifiersStyles={{
                  booked: {
                    fontWeight: 'bold',
                    border: '2px solid currentColor',
                    color: 'var(--mcn-blue)'
                  }
                }}
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
              <Button variant="outline" className="w-full gap-1" onClick={() => setActiveTab('week')}>
                <CalendarIcon className="h-4 w-4" />
                View Weekly Schedule
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
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleStartAppointment(appointment.type)}
                              >
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
                    Week of {format(weekStart, 'MMM d')} - {format(endOfWeek(weekStart, { weekStartsOn: 1 }), 'MMM d, yyyy')}
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" onClick={previousWeek}>
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" onClick={currentWeek}>
                    This Week
                  </Button>
                  <Button variant="outline" size="sm" onClick={nextWeek}>
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-20">Time</TableHead>
                      {weekDates.slice(0, 5).map((date, index) => (
                        <TableHead key={index} className={isToday(date) ? "bg-blue-50" : ""}>
                          <div>{weekDays[index]}</div>
                          <div className="text-xs font-normal">{format(date, 'MMM d')}</div>
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {scheduleGrid.map((slot, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="font-medium">{slot.time}</TableCell>
                        {weekDays.map((day, dayIndex) => (
                          <TableCell key={day} className={`p-1 ${isToday(weekDates[dayIndex]) ? "bg-blue-50" : ""}`}>
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
              <Button className="w-full gap-1" onClick={handleNewAppointment}>
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
