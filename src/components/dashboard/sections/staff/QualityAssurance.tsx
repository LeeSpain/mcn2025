
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ShieldAlert,
  MessageCircle,
  FileCheck,
  CheckCircle,
  Clock,
  ThumbsUp,
  ThumbsDown,
  Headphones,
  Star,
  BarChart,
  ArrowUp,
  ArrowDown,
  ListChecks
} from 'lucide-react';

const QualityAssurance: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Call Quality Monitoring</CardTitle>
          <CardDescription>Performance evaluation and training tools</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-3 border rounded-lg">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                  <Headphones className="h-5 w-5 mr-2 text-blue-600" />
                  <div className="font-medium">Recent Call Recordings</div>
                </div>
                <Button variant="outline" size="sm">Filter</Button>
              </div>
              
              <div className="space-y-2 mt-2">
                <div className="p-2 hover:bg-gray-50 rounded flex justify-between items-center">
                  <div>
                    <div className="text-sm">Technical Support • May 12</div>
                    <div className="text-xs text-muted-foreground">Duration: 12:48 • Agent: Sophie</div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-7">
                    <MessageCircle className="h-3 w-3" />
                  </Button>
                </div>
                
                <div className="p-2 hover:bg-gray-50 rounded flex justify-between items-center">
                  <div>
                    <div className="text-sm">Account Setup • May 8</div>
                    <div className="text-xs text-muted-foreground">Duration: 18:22 • Agent: Thomas</div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-7">
                    <MessageCircle className="h-3 w-3" />
                  </Button>
                </div>
                
                <div className="p-2 hover:bg-gray-50 rounded flex justify-between items-center">
                  <div>
                    <div className="text-sm">Billing Question • April 30</div>
                    <div className="text-xs text-muted-foreground">Duration: 5:14 • Agent: Marc</div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-7">
                    <MessageCircle className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="p-3 border rounded-lg">
              <div className="font-medium mb-2">Quality Score Framework</div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span>Solution Accuracy</span>
                  <div className="flex">
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span>Communication Skills</span>
                  <div className="flex">
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span>Resolution Speed</span>
                  <div className="flex">
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-gray-300" />
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span>Client Satisfaction</span>
                  <div className="flex">
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Customer Satisfaction Tracking</CardTitle>
          <CardDescription>Feedback analysis and satisfaction metrics</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 border rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium">Recent Feedback</h3>
              <div className="text-xs bg-green-100 text-green-700 py-1 px-2 rounded-full">
                94% Positive
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="p-2 border border-green-200 bg-green-50 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <ThumbsUp className="h-4 w-4 mr-1 text-green-600" />
                    <span className="text-sm font-medium text-green-700">Video Call Support</span>
                  </div>
                  <div className="text-xs text-muted-foreground">2 days ago</div>
                </div>
                <div className="text-sm text-green-700 ml-5">
                  "Sophie was extremely patient and helpful in setting up my video calls with my grandchildren."
                </div>
              </div>
              
              <div className="p-2 border border-green-200 bg-green-50 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <ThumbsUp className="h-4 w-4 mr-1 text-green-600" />
                    <span className="text-sm font-medium text-green-700">Medication Reminder Setup</span>
                  </div>
                  <div className="text-xs text-muted-foreground">1 week ago</div>
                </div>
                <div className="text-sm text-green-700 ml-5">
                  "The technician explained everything clearly and made sure I understood how to use the system."
                </div>
              </div>
              
              <div className="p-2 border border-red-200 bg-red-50 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <ThumbsDown className="h-4 w-4 mr-1 text-red-600" />
                    <span className="text-sm font-medium text-red-700">App Navigation</span>
                  </div>
                  <div className="text-xs text-muted-foreground">2 weeks ago</div>
                </div>
                <div className="text-sm text-red-700 ml-5">
                  "Found the app confusing to navigate. Would appreciate simpler instructions."
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <div className="p-3 border rounded-lg flex flex-col items-center">
              <div className="text-3xl font-bold text-green-600 flex items-center">
                4.8 <Star className="h-4 w-4 ml-1 text-amber-500 fill-amber-500" />
              </div>
              <div className="text-xs text-center text-muted-foreground">Average Rating</div>
            </div>
            
            <div className="p-3 border rounded-lg flex flex-col items-center">
              <div className="text-3xl font-bold text-blue-600 flex items-center">
                92% <ArrowUp className="h-4 w-4 ml-1 text-green-500" />
              </div>
              <div className="text-xs text-center text-muted-foreground">Would Recommend</div>
            </div>
            
            <div className="p-3 border rounded-lg flex flex-col items-center">
              <div className="text-3xl font-bold text-purple-600 flex items-center">
                88% <ArrowDown className="h-4 w-4 ml-1 text-red-500" />
              </div>
              <div className="text-xs text-center text-muted-foreground">First-Call Resolution</div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Issue Resolution Tracking</CardTitle>
          <CardDescription>Problem categorization and analytics</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-3 border rounded-lg">
              <div className="font-medium mb-2">Resolution Metrics</div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>First-Call Resolution</span>
                    <span className="font-medium">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Average Resolution Time</span>
                    <span className="font-medium">12:24 min</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Escalation Rate</span>
                    <span className="font-medium">8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: '8%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-3 border rounded-lg">
              <div className="font-medium mb-2">Top Issue Categories</div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <span>Device Connectivity</span>
                  </div>
                  <span>32%</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                    <span>App Navigation</span>
                  </div>
                  <span>24%</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                    <span>Account Access</span>
                  </div>
                  <span>18%</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span>Billing Questions</span>
                  </div>
                  <span>15%</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <span>Other</span>
                  </div>
                  <span>11%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Continuous Improvement</CardTitle>
          <CardDescription>Process enhancement and suggestion management</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-3 border rounded-lg">
            <div className="font-medium mb-2">Improvement Initiatives</div>
            <div className="space-y-2">
              <div className="p-2 border border-blue-200 bg-blue-50 rounded">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium text-blue-700">App Navigation Tutorial</div>
                  <div className="text-xs bg-blue-100 text-blue-700 py-0.5 px-1.5 rounded">In Progress</div>
                </div>
                <div className="text-xs text-blue-600 mt-1">
                  Based on client feedback, creating simplified tutorials for mobile app navigation.
                </div>
              </div>
              
              <div className="p-2 border border-purple-200 bg-purple-50 rounded">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium text-purple-700">Sensor Setup Guide</div>
                  <div className="text-xs bg-green-100 text-green-700 py-0.5 px-1.5 rounded">Completed</div>
                </div>
                <div className="text-xs text-purple-600 mt-1">
                  Created visual installation guide for safety sensors based on common technical support calls.
                </div>
              </div>
              
              <div className="p-2 border border-amber-200 bg-amber-50 rounded">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium text-amber-700">Call Script Enhancement</div>
                  <div className="text-xs bg-amber-100 text-amber-700 py-0.5 px-1.5 rounded">Planning</div>
                </div>
                <div className="text-xs text-amber-600 mt-1">
                  Reviewing call scripts for technical troubleshooting to improve first-call resolution.
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="font-medium">Submit Improvement Ideas</div>
            <textarea
              placeholder="Share your suggestions for improving service quality..."
              className="w-full rounded-md border border-input p-3 h-24"
            ></textarea>
            <div className="flex items-center space-x-2">
              <select className="rounded-md border border-input p-2 text-sm">
                <option>Process Improvement</option>
                <option>Knowledge Base</option>
                <option>Tool Enhancement</option>
                <option>Training Suggestion</option>
              </select>
              <Button size="sm">Submit</Button>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-2 border-t">
            <div className="text-sm text-muted-foreground">
              Last quality review: May 10, 2023
            </div>
            <Button variant="outline" size="sm">
              <FileCheck className="h-4 w-4 mr-1" /> Request Review
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QualityAssurance;
