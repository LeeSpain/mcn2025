
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  Play,
  FileText,
  Calendar,
  Video,
  Clock,
  CheckSquare,
  Users,
  Award,
  Star
} from 'lucide-react';

const ClientEducation: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Tutorial Library</CardTitle>
          <CardDescription>Interactive guides and walkthroughs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-3 border rounded-lg flex items-start">
              <div className="bg-blue-100 rounded-lg p-2 mr-3">
                <Play className="h-5 w-5 text-blue-700" />
              </div>
              <div className="flex-1">
                <div className="font-medium">Getting Started with BBrain Hub</div>
                <div className="text-xs text-muted-foreground mb-1">3 videos • 12 min total</div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-blue-600">Most popular for new users</div>
                  <Button variant="outline" size="sm">Share</Button>
                </div>
              </div>
            </div>
            
            <div className="p-3 border rounded-lg flex items-start">
              <div className="bg-purple-100 rounded-lg p-2 mr-3">
                <FileText className="h-5 w-5 text-purple-700" />
              </div>
              <div className="flex-1">
                <div className="font-medium">Setting Up Medication Reminders</div>
                <div className="text-xs text-muted-foreground mb-1">Step-by-step guide • PDF available</div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-purple-600">Relevant for this client</div>
                  <Button variant="outline" size="sm">Share</Button>
                </div>
              </div>
            </div>
            
            <div className="p-3 border rounded-lg flex items-start">
              <div className="bg-amber-100 rounded-lg p-2 mr-3">
                <Video className="h-5 w-5 text-amber-700" />
              </div>
              <div className="flex-1">
                <div className="font-medium">Using the Emergency Pendant</div>
                <div className="text-xs text-muted-foreground mb-1">Interactive demo • 5 min</div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-amber-600">Safety essential</div>
                  <Button variant="outline" size="sm">Share</Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button variant="outline">View Full Library</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Setup Assistance</CardTitle>
          <CardDescription>Device configuration and account setup</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-2">Client Onboarding Checklist</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="h-5 w-5 border rounded mr-2 flex items-center justify-center bg-green-100 text-green-700">
                  <CheckSquare className="h-3 w-3" />
                </div>
                <span className="text-sm">Account creation completed</span>
              </div>
              
              <div className="flex items-center">
                <div className="h-5 w-5 border rounded mr-2 flex items-center justify-center bg-green-100 text-green-700">
                  <CheckSquare className="h-3 w-3" />
                </div>
                <span className="text-sm">BBrain Hub installed</span>
              </div>
              
              <div className="flex items-center">
                <div className="h-5 w-5 border rounded mr-2 flex items-center justify-center bg-green-100 text-green-700">
                  <CheckSquare className="h-3 w-3" />
                </div>
                <span className="text-sm">Mobile app downloaded</span>
              </div>
              
              <div className="flex items-center">
                <div className="h-5 w-5 border rounded mr-2"></div>
                <span className="text-sm">Family access configured</span>
              </div>
              
              <div className="flex items-center">
                <div className="h-5 w-5 border rounded mr-2"></div>
                <span className="text-sm">Safety sensors installed</span>
              </div>
              
              <div className="flex items-center">
                <div className="h-5 w-5 border rounded mr-2"></div>
                <span className="text-sm">Healthcare integrations setup</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="justify-start">
              <Calendar className="h-4 w-4 mr-1" /> Schedule Setup
            </Button>
            <Button variant="outline" className="justify-start">
              <FileText className="h-4 w-4 mr-1" /> Setup Guide
            </Button>
            <Button variant="outline" className="justify-start">
              <Users className="h-4 w-4 mr-1" /> Family Access
            </Button>
            <Button variant="outline" className="justify-start">
              <Video className="h-4 w-4 mr-1" /> Remote Setup
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Training Session Management</CardTitle>
          <CardDescription>Schedule and track client training</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-3 border rounded-lg">
              <div className="flex justify-between items-center mb-1">
                <div className="font-medium">Basic Navigation Training</div>
                <div className="text-xs bg-green-100 text-green-700 py-1 px-2 rounded">Completed</div>
              </div>
              <div className="text-xs text-muted-foreground">Apr 15, 2023 • Trainer: Sophie Bakker</div>
              <div className="mt-2 text-sm">
                Client demonstrated good understanding of hub navigation and basic features.
              </div>
            </div>
            
            <div className="p-3 border rounded-lg">
              <div className="flex justify-between items-center mb-1">
                <div className="font-medium">Safety Features Overview</div>
                <div className="text-xs bg-blue-100 text-blue-700 py-1 px-2 rounded">Scheduled</div>
              </div>
              <div className="text-xs text-muted-foreground">May 28, 2023 • Trainer: Marc Visser</div>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-1 text-blue-600" /> 14:30 - 15:30
                </div>
                <Button variant="outline" size="sm">Reschedule</Button>
              </div>
            </div>
            
            <div className="p-3 border rounded-lg">
              <div className="flex justify-between items-center mb-1">
                <div className="font-medium">Advanced Features</div>
                <div className="text-xs bg-gray-100 text-gray-700 py-1 px-2 rounded">Recommended</div>
              </div>
              <div className="text-xs text-muted-foreground">Not scheduled</div>
              <div className="flex justify-end mt-2">
                <Button variant="outline" size="sm">Schedule</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Adoption & Engagement</CardTitle>
          <CardDescription>Feature usage and personalized recommendations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-2">Feature Usage</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Medication Reminders</span>
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                  <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                  <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                  <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                  <Star className="h-3 w-3 text-gray-300" />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Video Calls</span>
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                  <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                  <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                  <Star className="h-3 w-3 text-gray-300" />
                  <Star className="h-3 w-3 text-gray-300" />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Health Monitoring</span>
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                  <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                  <Star className="h-3 w-3 text-gray-300" />
                  <Star className="h-3 w-3 text-gray-300" />
                  <Star className="h-3 w-3 text-gray-300" />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Voice Commands</span>
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                  <Star className="h-3 w-3 text-gray-300" />
                  <Star className="h-3 w-3 text-gray-300" />
                  <Star className="h-3 w-3 text-gray-300" />
                  <Star className="h-3 w-3 text-gray-300" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center mb-1">
                <Award className="h-4 w-4 mr-1 text-blue-700" />
                <span className="font-medium text-blue-800">Recommended Focus</span>
              </div>
              <div className="text-sm text-blue-700">
                Encourage voice command usage through personalized tutorial during next check-in.
                Client shows interest but lacks confidence.
              </div>
            </div>
            
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center mb-1">
                <Award className="h-4 w-4 mr-1 text-green-700" />
                <span className="font-medium text-green-800">Usage Milestone</span>
              </div>
              <div className="text-sm text-green-700">
                Client has used video calls 15 times this month! Send congratulatory message 
                and introduce advanced video features.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientEducation;
