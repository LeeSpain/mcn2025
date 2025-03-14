
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Users, 
  UserPlus, 
  UserMinus, 
  FileText, 
  Settings, 
  BarChart2, 
  Clock, 
  Calendar,
  Shield,
  AlertTriangle
} from 'lucide-react';

// Sample staff data
const staffMembers = [
  { 
    id: 1, 
    name: 'Sarah Chen', 
    role: 'Senior Agent', 
    status: 'Online', 
    skillLevel: 'Expert',
    shift: 'Morning' 
  },
  { 
    id: 2, 
    name: 'John Martinez', 
    role: 'Technical Support', 
    status: 'Busy', 
    skillLevel: 'Advanced',
    shift: 'Morning' 
  },
  { 
    id: 3, 
    name: 'Lisa Johnson', 
    role: 'Care Specialist', 
    status: 'Away', 
    skillLevel: 'Intermediate',
    shift: 'Afternoon' 
  },
  { 
    id: 4, 
    name: 'David Wilson', 
    role: 'Supervisor', 
    status: 'Online', 
    skillLevel: 'Expert',
    shift: 'Morning' 
  },
];

// Sample upcoming shifts
const upcomingShifts = [
  { date: 'Today', morning: 6, afternoon: 4, evening: 5 },
  { date: 'Tomorrow', morning: 5, afternoon: 6, evening: 4 },
  { date: 'Jun 15', morning: 4, afternoon: 5, evening: 3 },
  { date: 'Jun 16', morning: 5, afternoon: 5, evening: 4 },
];

const AdminTools: React.FC = () => {
  // Status classes
  const getStatusClass = (status: string) => {
    switch(status) {
      case 'Online':
        return 'text-green-600 bg-green-100';
      case 'Busy':
        return 'text-red-600 bg-red-100';
      case 'Away':
        return 'text-amber-600 bg-amber-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };
  
  // Skill level classes
  const getSkillClass = (level: string) => {
    switch(level) {
      case 'Expert':
        return 'text-purple-600 bg-purple-100';
      case 'Advanced':
        return 'text-blue-600 bg-blue-100';
      case 'Intermediate':
        return 'text-green-600 bg-green-100';
      case 'Beginner':
        return 'text-gray-600 bg-gray-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Team Management */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Team Management</CardTitle>
            <CardDescription>Staff roster and schedule management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Skill Level</TableHead>
                    <TableHead>Shift</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {staffMembers.map(staff => (
                    <TableRow key={staff.id}>
                      <TableCell className="font-medium">{staff.name}</TableCell>
                      <TableCell>{staff.role}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusClass(staff.status)}`}>
                          {staff.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${getSkillClass(staff.skillLevel)}`}>
                          {staff.skillLevel}
                        </span>
                      </TableCell>
                      <TableCell>{staff.shift}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                        <Button variant="outline" size="sm">Message</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-full flex justify-between">
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                Export Staff Report
              </Button>
              <div>
                <Button size="sm" variant="outline" className="mr-2">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add Staff
                </Button>
                <Button size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Shifts
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
        
        {/* Shift Planning */}
        <Card>
          <CardHeader>
            <CardTitle>Shift Planning</CardTitle>
            <CardDescription>Upcoming shifts and coverage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Current Coverage</h3>
                  <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs">Adequate</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <div>
                    <div className="font-medium">Morning</div>
                    <div>6/6</div>
                  </div>
                  <div>
                    <div className="font-medium">Afternoon</div>
                    <div>4/5</div>
                  </div>
                  <div>
                    <div className="font-medium">Evening</div>
                    <div>5/5</div>
                  </div>
                </div>
              </div>
              
              <h3 className="font-medium text-sm">Upcoming Shifts</h3>
              <div className="space-y-2">
                {upcomingShifts.map((shift, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="font-medium mb-1">{shift.date}</div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className={shift.morning < 5 ? "text-red-600" : "text-green-600"}>
                        <div>Morning</div>
                        <div>{shift.morning} agents</div>
                      </div>
                      <div className={shift.afternoon < 4 ? "text-red-600" : "text-green-600"}>
                        <div>Afternoon</div>
                        <div>{shift.afternoon} agents</div>
                      </div>
                      <div className={shift.evening < 4 ? "text-red-600" : "text-green-600"}>
                        <div>Evening</div>
                        <div>{shift.evening} agents</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <Clock className="h-4 w-4 mr-2" />
              Manage Shift Schedule
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      {/* Resource Allocation & System Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Resource Allocation */}
        <Card>
          <CardHeader>
            <CardTitle>Resource Allocation</CardTitle>
            <CardDescription>Queue management and staff forecasting</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Current Queue</div>
                  <div className="text-2xl font-semibold">12</div>
                  <div className="text-xs text-gray-500">Avg wait: 4:32</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Forecast (2hr)</div>
                  <div className="text-2xl font-semibold">18</div>
                  <div className="text-xs text-amber-500">+50% increase</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Staff Needed</div>
                  <div className="text-2xl font-semibold">6</div>
                  <div className="text-xs text-red-500">2 deficit</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Channel Split</div>
                  <div className="text-sm">
                    <span className="font-medium">Call:</span> 60%
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Chat:</span> 40%
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-amber-50 border border-amber-100 rounded-lg">
                <div className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                  <div className="font-medium">Staffing Alert</div>
                </div>
                <div className="text-sm mt-1">
                  Consider requesting additional staff for the afternoon shift due to forecast volume increase.
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <BarChart2 className="h-4 w-4 mr-2" />
              View Detailed Forecast
            </Button>
          </CardFooter>
        </Card>
        
        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Service health and compliance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-green-50 border border-green-100 rounded-lg">
                  <div className="flex items-center mb-1">
                    <Shield className="h-5 w-5 text-green-500 mr-2" />
                    <div className="font-medium">Security Status</div>
                  </div>
                  <div className="text-sm">All systems secure</div>
                  <div className="text-xs text-gray-500 mt-1">Last scan: 2 hours ago</div>
                </div>
                
                <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                  <div className="flex items-center mb-1">
                    <Settings className="h-5 w-5 text-blue-500 mr-2" />
                    <div className="font-medium">Services</div>
                  </div>
                  <div className="text-sm">All operational</div>
                  <div className="text-xs text-gray-500 mt-1">100% uptime today</div>
                </div>
              </div>
              
              <div className="p-3 border rounded-lg">
                <h3 className="font-medium mb-2">HIPAA Compliance Status</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="text-sm">Data Encryption</div>
                    <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs">
                      Compliant
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">Access Controls</div>
                    <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs">
                      Compliant
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">Audit Logs</div>
                    <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs">
                      Compliant
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">Business Associates</div>
                    <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs">
                      Compliant
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-full">
              <Button variant="outline" className="w-full">
                <FileText className="h-4 w-4 mr-2" />
                System Health Report
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AdminTools;
