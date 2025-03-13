import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MessageSquare, Phone, AlertTriangle, Activity, Bell, Thermometer, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';

const MainDashboard: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <Card className="border-none shadow-md bg-gradient-to-r from-mcn-blue/80 to-mcn-blue">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl text-white">Welcome Back, Sarah!</CardTitle>
          <CardDescription className="text-white/90">{currentDate}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button variant="secondary" size="sm" className="flex items-center gap-2">
              <Phone size={16} />
              Call Family
            </Button>
            <Button variant="secondary" size="sm" className="flex items-center gap-2">
              <Phone size={16} />
              Call Support
            </Button>
            <Button variant="destructive" size="sm" className="flex items-center gap-2">
              <AlertTriangle size={16} />
              Emergency
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Access Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="hover:shadow-md transition-shadow cursor-pointer group">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-medium mb-1">Appointments</h3>
              <p className="text-sm text-muted-foreground mb-2">View upcoming</p>
              <ArrowRight className="h-4 w-4 text-mcn-blue opacity-0 group-hover:opacity-100 transition-opacity" />
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow cursor-pointer group">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3 group-hover:bg-green-200 transition-colors">
                <Activity className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-medium mb-1">Health Stats</h3>
              <p className="text-sm text-muted-foreground mb-2">Check vitals</p>
              <ArrowRight className="h-4 w-4 text-mcn-blue opacity-0 group-hover:opacity-100 transition-opacity" />
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow cursor-pointer group">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3 group-hover:bg-purple-200 transition-colors">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-medium mb-1">Messages</h3>
              <p className="text-sm text-muted-foreground mb-2">2 unread</p>
              <ArrowRight className="h-4 w-4 text-mcn-blue opacity-0 group-hover:opacity-100 transition-opacity" />
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow cursor-pointer group">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3 group-hover:bg-amber-200 transition-colors">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-medium mb-1">Safety</h3>
              <p className="text-sm text-muted-foreground mb-2">All systems normal</p>
              <ArrowRight className="h-4 w-4 text-mcn-blue opacity-0 group-hover:opacity-100 transition-opacity" />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Daily Agenda */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5 text-mcn-blue" />
                Daily Agenda
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="border-l-4 border-blue-500 pl-3 py-1">
                <p className="font-medium">Blood Pressure Medication</p>
                <p className="text-sm text-muted-foreground">8:00 AM</p>
              </li>
              <li className="border-l-4 border-green-500 pl-3 py-1">
                <p className="font-medium">Doctor Johnson Appointment</p>
                <p className="text-sm text-muted-foreground">11:30 AM</p>
              </li>
              <li className="border-l-4 border-purple-500 pl-3 py-1">
                <p className="font-medium">Video Call with Family</p>
                <p className="text-sm text-muted-foreground">4:00 PM</p>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Activity className="h-5 w-5 text-mcn-blue" />
              Health Stats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Blood Pressure</p>
                  <p className="font-medium">120/80 mmHg</p>
                </div>
                <span className="text-green-600 bg-green-100 px-2 py-1 rounded text-xs">Normal</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Heart Rate</p>
                  <p className="font-medium">72 BPM</p>
                </div>
                <span className="text-green-600 bg-green-100 px-2 py-1 rounded text-xs">Normal</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Steps Today</p>
                  <p className="font-medium">2,345 steps</p>
                </div>
                <span className="text-amber-600 bg-amber-100 px-2 py-1 rounded text-xs">Below Goal</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Family Messages - Quick Chat Preview */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-mcn-blue" />
                Chat Messages
              </CardTitle>
              <Button variant="link" size="sm" className="text-mcn-blue" onClick={() => {}}>
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-mcn-blue text-white">MS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Dr. Smith (MCN Staff)</p>
                  <p className="text-sm text-muted-foreground">How are you feeling today? Any improvements?</p>
                  <p className="text-xs text-muted-foreground mt-1">12:45 PM</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-green-100 text-green-800">JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">John (Son)</p>
                  <p className="text-sm text-muted-foreground">We'll stop by tomorrow around 2pm.</p>
                  <p className="text-xs text-muted-foreground mt-1">10:23 AM</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-purple-100 text-purple-800">ML</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Mary (Daughter)</p>
                  <p className="text-sm text-muted-foreground">Did you take your medicine this morning?</p>
                  <p className="text-xs text-muted-foreground mt-1">Yesterday</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bell className="h-5 w-5 text-mcn-blue" />
              Alerts & Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                  <AlertTriangle size={16} />
                </div>
                <div>
                  <p className="font-medium">Medication Reminder</p>
                  <p className="text-sm text-muted-foreground">Blood pressure medication at 8:00 PM</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Calendar size={16} />
                </div>
                <div>
                  <p className="font-medium">Upcoming Appointment</p>
                  <p className="text-sm text-muted-foreground">Dr. Johnson on Thursday at 11:30 AM</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Device Status */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Activity className="h-5 w-5 text-mcn-blue" />
              Connected Devices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Smart Watch</span>
                </div>
                <span className="text-xs text-muted-foreground">Battery 78%</span>
              </li>
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>BBrain Assistant</span>
                </div>
                <span className="text-xs text-muted-foreground">Connected</span>
              </li>
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Blood Pressure Monitor</span>
                </div>
                <span className="text-xs text-muted-foreground">Ready</span>
              </li>
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span>Door Sensor</span>
                </div>
                <span className="text-xs text-muted-foreground">Offline</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Weather Information */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Thermometer className="h-5 w-5 text-mcn-blue" />
              Weather Forecast
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-3xl font-bold">19°C</p>
                <p className="text-muted-foreground">Amsterdam, NL</p>
              </div>
              <div className="text-right">
                <p className="font-medium">Partly Cloudy</p>
                <p className="text-sm text-muted-foreground">Humidity: 65%</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {['Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                <div key={day} className="text-center">
                  <p className="text-sm font-medium">{day}</p>
                  <p className="text-lg font-medium">{18 + i}°</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MainDashboard;
