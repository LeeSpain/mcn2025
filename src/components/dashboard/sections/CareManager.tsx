
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pill, Calendar, CheckSquare, Clock, AlertTriangle, Bell, MessageCircle, HeartPulse, ArrowRight, Plus } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

const CareManager: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { toast } = useToast();

  const medications = [
    { id: 1, name: 'Lisinopril', dosage: '10mg', time: '8:00 AM', taken: true },
    { id: 2, name: 'Metformin', dosage: '500mg', time: '1:00 PM', taken: true },
    { id: 3, name: 'Simvastatin', dosage: '20mg', time: '8:00 PM', taken: false },
    { id: 4, name: 'Aspirin', dosage: '81mg', time: '8:00 AM', taken: true }
  ];

  const appointments = [
    { id: 1, title: 'Dr. Smith - Follow-up', date: '2023-09-15', time: '10:30 AM', location: 'Memorial Hospital' },
    { id: 2, title: 'Physical Therapy', date: '2023-09-18', time: '2:00 PM', location: 'Wellness Center' },
    { id: 3, title: 'Lab Work', date: '2023-09-22', time: '8:15 AM', location: 'Diagnostic Center' }
  ];

  const tasks = [
    { id: 1, title: 'Morning Walk', time: '7:00 AM', completed: true },
    { id: 2, title: 'Blood Pressure Check', time: '9:00 AM', completed: true },
    { id: 3, title: 'Glucose Reading', time: '11:00 AM', completed: false },
    { id: 4, title: 'Evening Exercises', time: '6:00 PM', completed: false },
  ];

  // ADL Program Weeks
  const adlProgram = [
    { week: 1, focus: 'Baseline Assessment', completed: true },
    { week: 2, focus: 'Personal Hygiene Skills', completed: true },
    { week: 3, focus: 'Meal Preparation Basics', completed: false },
    { week: 4, focus: 'Household Safety', completed: false },
    { week: 5, focus: 'Medication Management', completed: false },
    { week: 6, focus: 'Basic Mobility', completed: false },
    { week: 7, focus: 'Community Navigation', completed: false },
    { week: 8, focus: 'Financial Management', completed: false },
    { week: 9, focus: 'Communication Skills', completed: false },
    { week: 10, focus: 'Emergency Preparedness', completed: false },
    { week: 11, focus: 'Social Engagement', completed: false },
    { week: 12, focus: 'Progress Review & Future Planning', completed: false }
  ];

  // Current progress in ADL program
  const currentWeek = 3;
  const adlProgress = Math.round((currentWeek / 12) * 100);

  // Handler for reminder settings
  const handleWhatsAppToggle = (enabled: boolean) => {
    toast({
      title: enabled ? "WhatsApp Reminders Enabled" : "WhatsApp Reminders Disabled",
      description: enabled 
        ? "You will now receive reminders through WhatsApp" 
        : "You will no longer receive reminders through WhatsApp",
    });
  };
  
  // Handler for wristband vibration toggle
  const handleVibrationToggle = (enabled: boolean) => {
    toast({
      title: enabled ? "Vibration Alerts Enabled" : "Vibration Alerts Disabled",
      description: enabled 
        ? "Your UF Wristband will vibrate for reminders" 
        : "Your wristband vibration alerts are now off",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-1.5">
        <h2 className="text-2xl font-semibold tracking-tight">Care Manager</h2>
        <p className="text-muted-foreground">Manage your medications, appointments, and daily tasks</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Pill className="h-5 w-5 text-blue-500" />
              Medications
            </CardTitle>
            <CardDescription>Today's schedule</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="text-3xl font-bold">3/4</div>
              <div className="text-sm text-muted-foreground">Taken today</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-indigo-500" />
              Appointments
            </CardTitle>
            <CardDescription>Upcoming events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="text-3xl font-bold">3</div>
              <div className="text-sm text-muted-foreground">This week</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <CheckSquare className="h-5 w-5 text-green-500" />
              Daily Tasks
            </CardTitle>
            <CardDescription>Your routine</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="text-3xl font-bold">2/4</div>
              <div className="text-sm text-muted-foreground">Completed today</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="medications" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="medications" className="flex items-center gap-2">
            <Pill className="h-4 w-4" />
            Medications
          </TabsTrigger>
          <TabsTrigger value="appointments" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Appointments
          </TabsTrigger>
          <TabsTrigger value="tasks" className="flex items-center gap-2">
            <CheckSquare className="h-4 w-4" />
            Daily Tasks
          </TabsTrigger>
          <TabsTrigger value="adl-program" className="flex items-center gap-2">
            <HeartPulse className="h-4 w-4" />
            ADL Program
          </TabsTrigger>
          <TabsTrigger value="reminders" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Reminders
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="medications">
          <Card>
            <CardHeader>
              <CardTitle>Medication Tracker</CardTitle>
              <CardDescription>Manage your medication schedule and track your compliance</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Medication</TableHead>
                    <TableHead>Dosage</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {medications.map((med) => (
                    <TableRow key={med.id}>
                      <TableCell className="font-medium">{med.name}</TableCell>
                      <TableCell>{med.dosage}</TableCell>
                      <TableCell>{med.time}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${med.taken ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {med.taken ? 'Taken' : 'Pending'}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <div className="mt-4">
                <p className="text-sm text-muted-foreground flex items-center">
                  <Clock className="h-4 w-4 mr-1" /> Next medication: Simvastatin 20mg at 8:00 PM
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="appointments">
          <Card>
            <CardHeader>
              <CardTitle>Appointments</CardTitle>
              <CardDescription>View and manage your upcoming appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Appointment</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Location</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {appointments.map((apt) => (
                    <TableRow key={apt.id}>
                      <TableCell className="font-medium">{apt.title}</TableCell>
                      <TableCell>{apt.date}</TableCell>
                      <TableCell>{apt.time}</TableCell>
                      <TableCell>{apt.location}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-muted-foreground flex items-center">
                  <Calendar className="h-4 w-4 mr-1" /> Next appointment: Dr. Smith, Sep 15 at 10:30 AM
                </p>
                <button className="text-sm text-blue-600 hover:underline">
                  Request New Appointment
                </button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tasks">
          <Card>
            <CardHeader>
              <CardTitle>Daily Tasks</CardTitle>
              <CardDescription>Keep track of your daily tasks and routines</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Task</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tasks.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell className="font-medium">{task.title}</TableCell>
                      <TableCell>{task.time}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${task.completed ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                          {task.completed ? 'Completed' : 'Pending'}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <div className="mt-4">
                <p className="text-sm text-muted-foreground flex items-center">
                  <Bell className="h-4 w-4 mr-1" /> Upcoming: Glucose Reading at 11:00 AM
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* New Tab: ADL Program (Gap 12) */}
        <TabsContent value="adl-program">
          <Card>
            <CardHeader>
              <CardTitle>12-Week ADL Independence Program</CardTitle>
              <CardDescription>
                Track your progress through the Activities of Daily Living program designed to 
                increase independence and quality of life
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Overall Progress</span>
                  <span className="font-medium">{adlProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: `${adlProgress}%` }}
                  ></div>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  You are in Week {currentWeek} of the 12-week program
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-medium mb-3">Current Week Focus</h3>
                  <Card className="bg-blue-50 border border-blue-100">
                    <CardContent className="pt-6">
                      <div className="text-2xl font-bold mb-2">Week {currentWeek}</div>
                      <div className="text-lg font-medium mb-3">{adlProgram[currentWeek - 1].focus}</div>
                      <p className="text-sm text-gray-600 mb-3">
                        This week focuses on developing skills for preparing simple, nutritious meals safely and efficiently.
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">View Activities</Button>
                        <Button size="sm">Join Virtual Session</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Upcoming Weeks</h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                    {adlProgram.slice(currentWeek).map((week) => (
                      <div key={week.week} className="flex items-center p-3 border rounded-md bg-white">
                        <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                          <span className="font-medium">{week.week}</span>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{week.focus}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <h3 className="text-lg font-medium mb-3">Completed Weeks</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {adlProgram.slice(0, currentWeek - 1).map((week) => (
                    <div key={week.week} className="flex items-center p-3 border rounded-md bg-green-50 border-green-100">
                      <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-green-800">
                        <span className="font-medium">{week.week}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{week.focus}</div>
                        <div className="text-sm text-gray-600">Completed</div>
                      </div>
                      <CheckSquare className="h-5 w-5 text-green-600" />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t bg-gray-50 flex justify-between">
              <div className="text-sm text-gray-600">
                Next coaching session: Thursday, 2:00 PM
              </div>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                View All Resources
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* New Tab: Reminders (Gaps 8 & 9) */}
        <TabsContent value="reminders">
          <Card>
            <CardHeader>
              <CardTitle>Reminder Settings</CardTitle>
              <CardDescription>
                Customize how you receive reminders for medications, appointments, and tasks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* WhatsApp Reminders (Gap 8) */}
                <div className="border rounded-md p-4">
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <MessageCircle className="h-5 w-5 text-green-600 mr-2" />
                    WhatsApp Reminders
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Receive reminders through WhatsApp messages. Connect your account to enable this feature.
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col space-y-1">
                      <span className="font-medium">Enable WhatsApp reminders</span>
                      <span className="text-sm text-gray-500">For medications and appointments</span>
                    </div>
                    <Switch onCheckedChange={handleWhatsAppToggle} />
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <Button variant="outline" size="sm" className="mr-2">
                      Connect WhatsApp
                    </Button>
                    <Button variant="ghost" size="sm">
                      Test Notification
                    </Button>
                  </div>
                </div>
                
                {/* Wristband Vibration Reminders (Gap 9) */}
                <div className="border rounded-md p-4">
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    UF Wristband Vibration Alerts
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Receive up to 7 vibration alerts per day on your wristband for medication, tasks, and appointments.
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col space-y-1">
                      <span className="font-medium">Enable vibration alerts</span>
                      <span className="text-sm text-gray-500">Vibration feedback for reminders</span>
                    </div>
                    <Switch onCheckedChange={handleVibrationToggle} />
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-gray-700">Alert Schedule</h4>
                    {[
                      { time: "7:00 AM", purpose: "Morning Medication & Tasks" },
                      { time: "9:00 AM", purpose: "Health Checks" },
                      { time: "12:00 PM", purpose: "Lunch & Afternoon Medication" },
                      { time: "3:00 PM", purpose: "Afternoon Activities" },
                      { time: "6:00 PM", purpose: "Evening Exercises" },
                      { time: "8:00 PM", purpose: "Evening Medication" }
                    ].map((alert, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                        <div className="font-medium">{alert.time}</div>
                        <div className="text-sm text-gray-600">{alert.purpose}</div>
                        <Button variant="ghost" size="sm">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Voice Assistant Reminders (BBrain) */}
                <div className="border rounded-md p-4">
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <Bell className="h-5 w-5 text-purple-600 mr-2" />
                    Voice Assistant Reminders
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Use BBrain Voice Assistant to receive spoken reminders in your home.
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col space-y-1">
                      <span className="font-medium">Enable voice reminders</span>
                      <span className="text-sm text-gray-500">For medications, tasks and appointments</span>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <Button variant="outline" size="sm">
                      Customize Voice Settings
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t bg-gray-50 flex justify-between">
              <div className="text-sm text-gray-600">
                Last updated: Today, 9:45 AM
              </div>
              <Button>Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CareManager;
