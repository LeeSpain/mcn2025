
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UsersRound, UserPlus, Shield, Calendar, FileText, MessageCircle, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const FamilyPortal: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Family Portal</h1>
        <p className="text-muted-foreground">
          Connect with and manage family members on your care plan
        </p>
      </div>

      <Tabs defaultValue="members" className="w-full">
        <TabsList className="grid grid-cols-5 w-full md:w-auto">
          <TabsTrigger value="members" className="flex items-center gap-1">
            <UsersRound className="h-4 w-4" />
            <span>Members</span>
          </TabsTrigger>
          <TabsTrigger value="permissions" className="flex items-center gap-1">
            <Shield className="h-4 w-4" />
            <span>Permissions</span>
          </TabsTrigger>
          <TabsTrigger value="calendar" className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>Calendar</span>
          </TabsTrigger>
          <TabsTrigger value="documents" className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            <span>Documents</span>
          </TabsTrigger>
          <TabsTrigger value="messages" className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            <span>Messages</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="members" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Family Members</CardTitle>
                <CardDescription>Manage who has access to your care information</CardDescription>
              </div>
              <Button className="bg-mcn-blue hover:bg-mcn-blue-dark text-white">
                <UserPlus className="h-4 w-4 mr-2" />
                Add Member
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Primary Member */}
                <div className="p-4 border rounded-lg bg-mcn-blue/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-mcn-blue text-white">JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-sm text-muted-foreground">Primary Account</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm bg-mcn-blue/10 text-mcn-blue px-2 py-1 rounded-full">
                        Owner
                      </span>
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Family Members */}
                <div className="p-4 border rounded-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg" alt="Jane Doe" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Jane Doe</p>
                        <p className="text-sm text-muted-foreground">Spouse</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        Full Access
                      </span>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg" alt="Michael Doe" />
                        <AvatarFallback>MD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Michael Doe</p>
                        <p className="text-sm text-muted-foreground">Son</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                        Limited Access
                      </span>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg" alt="Sarah Johnson" />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">Caregiver</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        Care Provider
                      </span>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Pending Invitations</CardTitle>
              <CardDescription>Family members who have been invited but haven't accepted yet</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 border rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-medium">emily.smith@example.com</p>
                    <p className="text-sm text-muted-foreground">Invited on: May 12, 2023</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Resend</Button>
                    <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="permissions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Access Permissions</CardTitle>
              <CardDescription>Control what information family members can access</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Jane Doe Permissions */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg" alt="Jane Doe" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <p className="font-medium">Jane Doe (Spouse)</p>
                    </div>
                    <div>
                      <select className="border rounded-md p-1 text-sm">
                        <option>Full Access</option>
                        <option>Limited Access</option>
                        <option>Emergency Only</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Health Records</p>
                        <p className="text-sm text-muted-foreground">Medical history, test results, and diagnoses</p>
                      </div>
                      <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Medications</p>
                        <p className="text-sm text-muted-foreground">Current medications and prescription history</p>
                      </div>
                      <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Appointments</p>
                        <p className="text-sm text-muted-foreground">Upcoming and past medical appointments</p>
                      </div>
                      <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Billing & Insurance</p>
                        <p className="text-sm text-muted-foreground">Financial information and insurance details</p>
                      </div>
                      <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Messages</p>
                        <p className="text-sm text-muted-foreground">Communication with healthcare providers</p>
                      </div>
                      <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                    </div>
                  </div>
                </div>
                
                {/* Michael Doe Permissions */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg" alt="Michael Doe" />
                        <AvatarFallback>MD</AvatarFallback>
                      </Avatar>
                      <p className="font-medium">Michael Doe (Son)</p>
                    </div>
                    <div>
                      <select className="border rounded-md p-1 text-sm">
                        <option>Full Access</option>
                        <option selected>Limited Access</option>
                        <option>Emergency Only</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Health Records</p>
                        <p className="text-sm text-muted-foreground">Medical history, test results, and diagnoses</p>
                      </div>
                      <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Medications</p>
                        <p className="text-sm text-muted-foreground">Current medications and prescription history</p>
                      </div>
                      <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Appointments</p>
                        <p className="text-sm text-muted-foreground">Upcoming and past medical appointments</p>
                      </div>
                      <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Billing & Insurance</p>
                        <p className="text-sm text-muted-foreground">Financial information and insurance details</p>
                      </div>
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Messages</p>
                        <p className="text-sm text-muted-foreground">Communication with healthcare providers</p>
                      </div>
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                    </div>
                  </div>
                </div>
                
                {/* Sarah Johnson Permissions */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg" alt="Sarah Johnson" />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <p className="font-medium">Sarah Johnson (Caregiver)</p>
                    </div>
                    <div>
                      <select className="border rounded-md p-1 text-sm">
                        <option>Full Access</option>
                        <option>Limited Access</option>
                        <option selected>Care Provider</option>
                        <option>Emergency Only</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Health Records</p>
                        <p className="text-sm text-muted-foreground">Medical history, test results, and diagnoses</p>
                      </div>
                      <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Medications</p>
                        <p className="text-sm text-muted-foreground">Current medications and prescription history</p>
                      </div>
                      <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Appointments</p>
                        <p className="text-sm text-muted-foreground">Upcoming and past medical appointments</p>
                      </div>
                      <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Daily Care Tasks</p>
                        <p className="text-sm text-muted-foreground">Assigned care tasks and completion status</p>
                      </div>
                      <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Safety Monitoring</p>
                        <p className="text-sm text-muted-foreground">Access to safety monitoring alerts and data</p>
                      </div>
                      <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button className="bg-mcn-blue hover:bg-mcn-blue-dark text-white">
                    Save Changes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Family Calendar</CardTitle>
              <CardDescription>View and manage shared family events and appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg text-center py-20">
                <Calendar className="h-16 w-16 mx-auto text-mcn-blue opacity-30 mb-4" />
                <h3 className="text-lg font-medium">Family Calendar</h3>
                <p className="text-sm text-muted-foreground mb-4">View and manage shared appointments and events</p>
                <Button className="bg-mcn-blue hover:bg-mcn-blue-dark text-white">
                  View Calendar
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Shared Documents</CardTitle>
                <CardDescription>View and manage documents shared with family members</CardDescription>
              </div>
              <Button className="bg-mcn-blue hover:bg-mcn-blue-dark text-white">
                Upload Document
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Medical History Summary</p>
                      <p className="text-xs text-muted-foreground">Uploaded on May 15, 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Share</Button>
                    <Button variant="outline" size="sm">Download</Button>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Care Plan Instructions</p>
                      <p className="text-xs text-muted-foreground">Uploaded on April 22, 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Share</Button>
                    <Button variant="outline" size="sm">Download</Button>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Power of Attorney</p>
                      <p className="text-xs text-muted-foreground">Uploaded on March 17, 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Share</Button>
                    <Button variant="outline" size="sm">Download</Button>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium">Medication Schedule</p>
                      <p className="text-xs text-muted-foreground">Uploaded on February 8, 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Share</Button>
                    <Button variant="outline" size="sm">Download</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="messages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Family Messages</CardTitle>
              <CardDescription>Communicate with your family members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 border rounded-lg h-96 flex flex-col">
                <div className="p-4 border-b">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="Jane Doe" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <p className="font-medium">Family Group Chat</p>
                  </div>
                </div>
                
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-mcn-blue text-white">JD</AvatarFallback>
                    </Avatar>
                    <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                      <p className="text-sm">I've scheduled a doctor's appointment for next Tuesday at 2pm. Can anyone drive me there?</p>
                      <p className="text-xs text-muted-foreground mt-1">10:30 AM</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="Jane Doe" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                      <p className="text-sm">I can take you. What time should I pick you up?</p>
                      <p className="text-xs text-muted-foreground mt-1">10:45 AM</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-mcn-blue text-white">JD</AvatarFallback>
                    </Avatar>
                    <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                      <p className="text-sm">Let's leave at 1:15pm to be safe. Thank you!</p>
                      <p className="text-xs text-muted-foreground mt-1">11:02 AM</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 border-t">
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Type a message..." 
                      className="flex-1 p-2 border rounded-md" 
                    />
                    <Button className="bg-mcn-blue hover:bg-mcn-blue-dark text-white">
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FamilyPortal;
