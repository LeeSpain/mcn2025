
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  MessageSquare,
  Users,
  AlertTriangle,
  ArrowUpRight,
  UserCog,
  Heart,
  Stethoscope,
  Shield,
  Clock,
  ScrollText,
  BarChart,
  User
} from 'lucide-react';

const EscalationSupport: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Escalation Pathway</CardTitle>
          <CardDescription>Issue elevation and specialized support</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-3 border rounded-lg">
            <div className="font-medium mb-2">Specialist Availability</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 border border-green-200 bg-green-50 rounded">
                <div className="flex items-center">
                  <UserCog className="h-4 w-4 mr-2 text-green-600" />
                  <div>
                    <div className="text-sm font-medium">Technical Support</div>
                    <div className="text-xs text-green-600">3 specialists available</div>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="bg-green-100 border-green-300 text-green-700 hover:bg-green-200">
                  Escalate
                </Button>
              </div>
              
              <div className="flex justify-between items-center p-2 border border-amber-200 bg-amber-50 rounded">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-amber-600" />
                  <div>
                    <div className="text-sm font-medium">Safety & Security</div>
                    <div className="text-xs text-amber-600">1 specialist available</div>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="bg-amber-100 border-amber-300 text-amber-700 hover:bg-amber-200">
                  Escalate
                </Button>
              </div>
              
              <div className="flex justify-between items-center p-2 border border-red-200 bg-red-50 rounded">
                <div className="flex items-center">
                  <Heart className="h-4 w-4 mr-2 text-red-600" />
                  <div>
                    <div className="text-sm font-medium">Health Monitoring</div>
                    <div className="text-xs text-red-600">Unavailable until 14:30</div>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="bg-red-100 border-red-300 text-red-700 hover:bg-red-200" disabled>
                  Escalate
                </Button>
              </div>
              
              <div className="flex justify-between items-center p-2 border border-blue-200 bg-blue-50 rounded">
                <div className="flex items-center">
                  <BarChart className="h-4 w-4 mr-2 text-blue-600" />
                  <div>
                    <div className="text-sm font-medium">Billing & Accounts</div>
                    <div className="text-xs text-blue-600">2 specialists available</div>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="bg-blue-100 border-blue-300 text-blue-700 hover:bg-blue-200">
                  Escalate
                </Button>
              </div>
            </div>
          </div>
          
          <div className="p-3 border rounded-lg">
            <div className="font-medium mb-2">Current Escalations</div>
            <div className="space-y-2">
              <div className="p-2 border border-purple-200 bg-purple-50 rounded">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-sm font-medium text-purple-700">Hub Connectivity Issue</div>
                  <div className="flex items-center text-xs text-purple-600">
                    <Clock className="h-3 w-3 mr-1" /> 15:23 open
                  </div>
                </div>
                <div className="text-xs text-purple-600 mb-1">Escalated to: Technical Support</div>
                <div className="flex justify-end">
                  <Button size="sm" variant="ghost" className="h-6 text-xs">Track Progress</Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-3 border-t">
            <div className="font-medium mb-2">Create New Escalation</div>
            <div className="space-y-3">
              <select className="w-full rounded-md border border-input p-2 text-sm">
                <option>Select Issue Category</option>
                <option>Technical Support</option>
                <option>Safety & Security</option>
                <option>Health Monitoring</option>
                <option>Billing & Accounts</option>
              </select>
              <textarea
                placeholder="Describe the issue requiring escalation..."
                className="w-full rounded-md border border-input p-2 h-20 text-sm"
              ></textarea>
              <div className="flex justify-between">
                <select className="rounded-md border border-input p-2 text-sm">
                  <option>Priority: Normal</option>
                  <option>Priority: High</option>
                  <option>Priority: Urgent</option>
                </select>
                <Button>
                  <ArrowUpRight className="h-4 w-4 mr-1" /> Create Escalation
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Healthcare Provider Liaison</CardTitle>
          <CardDescription>Medical inquiry handling and provider coordination</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-3 border rounded-lg">
            <div className="font-medium mb-2">Connected Healthcare Providers</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                <div className="flex items-center">
                  <Stethoscope className="h-4 w-4 mr-2 text-blue-600" />
                  <div>
                    <div className="text-sm font-medium">Dr. Anna Visser</div>
                    <div className="text-xs text-muted-foreground">Primary Care • Amsterdam Medical Center</div>
                  </div>
                </div>
                <Button size="sm" variant="ghost" className="h-7">
                  <MessageSquare className="h-3 w-3" />
                </Button>
              </div>
              
              <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                <div className="flex items-center">
                  <Heart className="h-4 w-4 mr-2 text-red-600" />
                  <div>
                    <div className="text-sm font-medium">Dr. Johan Bakker</div>
                    <div className="text-xs text-muted-foreground">Cardiologist • Heart Center Rotterdam</div>
                  </div>
                </div>
                <Button size="sm" variant="ghost" className="h-7">
                  <MessageSquare className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="p-3 border rounded-lg">
            <div className="font-medium mb-2">Recent Medical Communications</div>
            <div className="space-y-2">
              <div className="p-2 border border-blue-200 bg-blue-50 rounded">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-sm font-medium text-blue-700">Medication Schedule Update</div>
                  <div className="text-xs text-muted-foreground">3 days ago</div>
                </div>
                <div className="text-xs text-blue-600">
                  Updated medication reminder schedule based on Dr. Visser's new prescription.
                </div>
              </div>
              
              <div className="p-2 border border-amber-200 bg-amber-50 rounded">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-sm font-medium text-amber-700">Health Data Report Sent</div>
                  <div className="text-xs text-muted-foreground">1 week ago</div>
                </div>
                <div className="text-xs text-amber-600">
                  Transmitted 30-day blood pressure monitoring data to Dr. Bakker per request.
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-3 border rounded-lg">
            <div className="font-medium mb-2">Healthcare Communication Tools</div>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" className="justify-start">
                <ScrollText className="h-4 w-4 mr-1" /> Send Health Report
              </Button>
              <Button variant="outline" size="sm" className="justify-start">
                <MessageSquare className="h-4 w-4 mr-1" /> Provider Message
              </Button>
              <Button variant="outline" size="sm" className="justify-start">
                <AlertTriangle className="h-4 w-4 mr-1" /> Medical Alert
              </Button>
              <Button variant="outline" size="sm" className="justify-start">
                <Users className="h-4 w-4 mr-1" /> Care Conference
              </Button>
            </div>
          </div>
          
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center mb-1">
              <Shield className="h-4 w-4 mr-1 text-blue-700" />
              <span className="font-medium text-blue-800">HIPAA Compliance Reminder</span>
            </div>
            <div className="text-sm text-blue-700">
              All healthcare communications must follow privacy protocols. Client has signed ROI for 
              current connected providers only.
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Technical Specialist Access</CardTitle>
          <CardDescription>Advanced troubleshooting and engineering support</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-3 border rounded-lg">
            <div className="font-medium mb-2">Specialist Resources</div>
            <div className="space-y-2">
              <div className="p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="text-sm font-medium">Advanced Diagnostic Tools</div>
                <div className="text-xs text-muted-foreground">
                  Remote device analysis and advanced troubleshooting utilities
                </div>
              </div>
              
              <div className="p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="text-sm font-medium">Engineering Knowledge Base</div>
                <div className="text-xs text-muted-foreground">
                  Technical documentation and known issue workarounds
                </div>
              </div>
              
              <div className="p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="text-sm font-medium">Development Environment</div>
                <div className="text-xs text-muted-foreground">
                  Test environment for replicating and resolving client issues
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-3 border rounded-lg">
            <div className="font-medium mb-2">Connect with Engineering</div>
            <div className="space-y-3">
              <select className="w-full rounded-md border border-input p-2 text-sm">
                <option>Select Technical Area</option>
                <option>Hub Hardware</option>
                <option>Mobile Application</option>
                <option>Sensor Network</option>
                <option>Cloud Infrastructure</option>
                <option>API Integration</option>
              </select>
              <textarea
                placeholder="Describe the technical issue requiring engineering support..."
                className="w-full rounded-md border border-input p-2 h-20 text-sm"
              ></textarea>
              <div className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  <span>For critical issues only</span>
                </div>
                <Button variant="outline">Request Support</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>VIP Client Handling</CardTitle>
          <CardDescription>Enhanced service protocols for priority clients</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center p-3 bg-amber-50 border border-amber-200 rounded-lg mb-4">
            <User className="h-5 w-5 mr-2 text-amber-600" />
            <div className="text-sm text-amber-700">
              This client is not currently flagged for VIP service protocols.
            </div>
          </div>
          
          <div className="p-3 border rounded-lg">
            <div className="font-medium mb-2">VIP Service Protocols</div>
            <div className="space-y-2">
              <div className="p-2 bg-gray-50 border border-gray-200 rounded">
                <div className="text-sm font-medium mb-1">Priority Response</div>
                <div className="text-xs text-muted-foreground">
                  Guaranteed response within 15 minutes for all support channels
                </div>
              </div>
              
              <div className="p-2 bg-gray-50 border border-gray-200 rounded">
                <div className="text-sm font-medium mb-1">Dedicated Support Agent</div>
                <div className="text-xs text-muted-foreground">
                  Assigned personal support specialist for all interactions
                </div>
              </div>
              
              <div className="p-2 bg-gray-50 border border-gray-200 rounded">
                <div className="text-sm font-medium mb-1">Proactive Monitoring</div>
                <div className="text-xs text-muted-foreground">
                  Enhanced system monitoring and preventative support
                </div>
              </div>
              
              <div className="p-2 bg-gray-50 border border-gray-200 rounded">
                <div className="text-sm font-medium mb-1">Executive Escalation</div>
                <div className="text-xs text-muted-foreground">
                  Direct access to senior management for unresolved issues
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-3 border-t">
            <div className="font-medium mb-2">Request VIP Status</div>
            <div className="space-y-3">
              <select className="w-full rounded-md border border-input p-2 text-sm">
                <option>Select Reason</option>
                <option>Enterprise Client</option>
                <option>Complex Healthcare Needs</option>
                <option>Multiple Service Subscriptions</option>
                <option>Partner Organization</option>
                <option>Other (specify)</option>
              </select>
              <textarea
                placeholder="Provide justification for VIP service designation..."
                className="w-full rounded-md border border-input p-2 h-20 text-sm"
              ></textarea>
              <Button variant="outline" className="w-full">
                Submit VIP Request
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EscalationSupport;
