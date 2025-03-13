
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  User,
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Heart,
  AlertCircle,
  CheckCircle,
  XCircle,
  Smartphone,
  Wifi,
  BatteryMedium,
  Shield
} from 'lucide-react';

const ClientProfile: React.FC = () => {
  return (
    <>
      {/* Client Information */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Client Profile</CardTitle>
              <CardDescription>Currently viewing</CardDescription>
            </div>
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium text-xl">
              JV
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Jan de Vries</h3>
            <div className="text-sm text-muted-foreground">Premium Membership • Since Apr 2022</div>
          </div>
          
          <div className="grid grid-cols-1 gap-3 text-sm">
            <div className="flex items-start">
              <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
              <span>Amstelstraat 24, 1017 DA Amsterdam</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>+31 6 12345678</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>j.devries@example.com</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>DOB: 12 May 1945 (78 years)</span>
            </div>
          </div>

          <div className="border-t pt-3">
            <h4 className="font-medium mb-2">Special Notes</h4>
            <div className="bg-amber-50 border border-amber-200 rounded p-2 text-sm">
              <div className="font-medium text-amber-800">Hearing impairment</div>
              <div className="text-amber-700">Prefers video calls with captions or written communication</div>
            </div>
          </div>

          <div className="border-t pt-3">
            <h4 className="font-medium mb-2">Care Circle</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs mr-2">
                    M
                  </div>
                  <span className="text-sm">Maria de Vries (Daughter)</span>
                </div>
                <Button variant="ghost" size="sm" className="h-7 px-2">
                  <Phone className="h-3 w-3" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs mr-2">
                    P
                  </div>
                  <span className="text-sm">Peter de Vries (Son)</span>
                </div>
                <Button variant="ghost" size="sm" className="h-7 px-2">
                  <Phone className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Client Health Data */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Health Overview</CardTitle>
          <CardDescription>Latest data with permission</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Heart className="h-5 w-5 mr-2 text-red-500" />
                <span>Heart Rate</span>
              </div>
              <div className="font-medium">78 bpm</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 text-amber-500" />
                <span>Blood Pressure</span>
              </div>
              <div className="font-medium">142/88 mmHg</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                <span>Medications</span>
              </div>
              <div className="font-medium">3/4 taken today</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <XCircle className="h-5 w-5 mr-2 text-red-500" />
                <span>Missed Alerts</span>
              </div>
              <div className="font-medium">2 in last 24h</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Device Status */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Device Status</CardTitle>
          <CardDescription>Connected devices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Smartphone className="h-5 w-5 mr-2 text-blue-500" />
                <span>BBrain Hub</span>
              </div>
              <div className="font-medium text-green-600">Online</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Wifi className="h-5 w-5 mr-2 text-blue-500" />
                <span>WiFi Strength</span>
              </div>
              <div className="font-medium">Good (87%)</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <BatteryMedium className="h-5 w-5 mr-2 text-amber-500" />
                <span>Pendant Battery</span>
              </div>
              <div className="font-medium">42% (2 days)</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-red-500" />
                <span>Safety Sensors</span>
              </div>
              <div className="font-medium text-red-600">Check needed</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Interactions */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Recent Interactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="border-l-4 border-blue-400 pl-3 py-1">
              <div className="flex justify-between">
                <div className="font-medium">Chat Support</div>
                <div className="text-xs text-muted-foreground">2 days ago</div>
              </div>
              <div className="text-sm">App navigation assistance</div>
            </div>
            <div className="border-l-4 border-purple-400 pl-3 py-1">
              <div className="flex justify-between">
                <div className="font-medium">Video Call</div>
                <div className="text-xs text-muted-foreground">1 week ago</div>
              </div>
              <div className="text-sm">Device setup walkthrough</div>
            </div>
            <div className="border-l-4 border-amber-400 pl-3 py-1">
              <div className="flex justify-between">
                <div className="font-medium">Phone Support</div>
                <div className="text-xs text-muted-foreground">2 weeks ago</div>
              </div>
              <div className="text-sm">Medication reminder issue</div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <Button variant="outline" size="sm" className="w-full">
            View Full History
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ClientProfile;
