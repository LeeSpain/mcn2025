
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Heart,
  AlertCircle,
  Bell,
  Shield,
  Phone,
  MapPin,
  Activity,
  List,
  Pill,
  Calendar
} from 'lucide-react';

const HealthMonitoring: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Health Data Visualization</CardTitle>
          <CardDescription>Current client health information (with permission)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Heart className="h-5 w-5 mr-2 text-red-500" />
                <span>Heart Rate</span>
              </div>
              <div className="font-medium">78 bpm <span className="text-xs text-muted-foreground">(Normal: 60-100)</span></div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Activity className="h-5 w-5 mr-2 text-blue-500" />
                <span>Blood Pressure</span>
              </div>
              <div className="font-medium">142/88 mmHg <span className="text-xs text-amber-500">(Elevated)</span></div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Pill className="h-5 w-5 mr-2 text-purple-500" />
                <span>Medication Compliance</span>
              </div>
              <div className="font-medium">3/4 taken today <span className="text-xs text-amber-500">(1 missed)</span></div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-green-500" />
                <span>Next Appointment</span>
              </div>
              <div className="font-medium">May 28, 14:30 <span className="text-xs text-muted-foreground">(Dr. Jansen)</span></div>
            </div>
          </div>
          
          <div className="pt-3 border-t">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Health Trends</h3>
              <Button variant="ghost" size="sm">View Details</Button>
            </div>
            
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="font-medium text-amber-800 mb-1">Blood Pressure Rising</div>
              <div className="text-sm text-amber-700">Steady increase over last 2 weeks. Last 3 readings above normal range.</div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Safety Alert Management</CardTitle>
          <CardDescription>Recent alerts and emergency information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
                  <span className="font-medium text-red-800">Fall Alert</span>
                </div>
                <span className="text-xs text-muted-foreground">Yesterday, 16:42</span>
              </div>
              <div className="text-sm text-red-700 mb-2">Motion sensor detected potential fall. Client confirmed false alarm.</div>
              <div className="flex justify-end">
                <Button variant="outline" size="sm" className="bg-red-100 border-red-300 text-red-800 hover:bg-red-200">View Details</Button>
              </div>
            </div>
            
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-amber-500" />
                  <span className="font-medium text-amber-800">Medication Alert</span>
                </div>
                <span className="text-xs text-muted-foreground">Today, 09:15</span>
              </div>
              <div className="text-sm text-amber-700 mb-2">Evening blood pressure medication missed. Second occurrence this week.</div>
              <div className="flex justify-end">
                <Button variant="outline" size="sm" className="bg-amber-100 border-amber-300 text-amber-800 hover:bg-amber-200">Follow Up</Button>
              </div>
            </div>
          </div>
          
          <div className="pt-3 border-t">
            <h3 className="font-medium mb-2">Emergency Contacts</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-blue-500" />
                  <span>Maria de Vries (Daughter)</span>
                </div>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Phone className="h-3 w-3" />
                </Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                  <span>Local Emergency Services</span>
                </div>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Phone className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Remote Device Diagnostics</CardTitle>
          <CardDescription>Device health and connectivity status</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-green-500" />
                <span>Main Hub</span>
              </div>
              <div className="font-medium text-green-600">Online (98% uptime)</div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-amber-500" />
                <span>Emergency Pendant</span>
              </div>
              <div className="font-medium text-amber-600">Battery Low (42%)</div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-red-500" />
                <span>Bathroom Motion Sensor</span>
              </div>
              <div className="font-medium text-red-600">Offline (2 days)</div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-green-500" />
                <span>Medication Dispenser</span>
              </div>
              <div className="font-medium text-green-600">Online (100% uptime)</div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button variant="outline" size="sm">Run Diagnostics</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Health Recommendations</CardTitle>
          <CardDescription>AI-generated suggestions based on data patterns</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="font-medium text-blue-800 mb-1">Blood Pressure Management</div>
            <div className="text-sm text-blue-700">
              Recommend daily medication reminder call until compliance improves. Schedule follow-up 
              appointment with primary care physician regarding rising blood pressure readings.
            </div>
          </div>
          
          <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
            <div className="font-medium text-purple-800 mb-1">Activity Recommendation</div>
            <div className="text-sm text-purple-700">
              Activity levels decreased by 20% in past month. Consider recommending light walking 
              program and evaluation of mobility aids during next check-in call.
            </div>
          </div>
          
          <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
            <div className="font-medium text-green-800 mb-1">Device Maintenance</div>
            <div className="text-sm text-green-700">
              Schedule technician visit to replace bathroom motion sensor and check pendant battery charging routine.
              Current maintenance due date: 3 weeks overdue.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HealthMonitoring;
