
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Video, MessageSquare, Users, CalendarClock, PhoneCall, Headphones, UserPlus, FileText } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const ConnectHub: React.FC = () => {
  return (
    <div className="space-y-6 w-full">
      <div className="flex flex-col space-y-1.5">
        <h2 className="text-2xl font-semibold tracking-tight">Connect Hub</h2>
        <p className="text-muted-foreground">Stay connected with family, caregivers, and your community</p>
      </div>

      <Tabs defaultValue="video" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="video" className="flex items-center gap-2">
            <Video className="h-4 w-4" />
            Video Calls
          </TabsTrigger>
          <TabsTrigger value="messaging" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Messaging
          </TabsTrigger>
          <TabsTrigger value="care-circle" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Care Circle
          </TabsTrigger>
          <TabsTrigger value="community" className="flex items-center gap-2">
            <CalendarClock className="h-4 w-4" />
            Community
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="video" className="w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Video Call Center</CardTitle>
              <CardDescription>Make video calls to your family and caregivers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="p-4 hover:bg-slate-50 cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>MG</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-medium">Mary Gardner</h4>
                        <p className="text-sm text-muted-foreground">Primary Caregiver</p>
                      </div>
                      <Button variant="outline" size="icon">
                        <PhoneCall className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                  
                  <Card className="p-4 hover:bg-slate-50 cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>JW</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-medium">James Wilson</h4>
                        <p className="text-sm text-muted-foreground">Primary Care Doctor</p>
                      </div>
                      <Button variant="outline" size="icon">
                        <PhoneCall className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                  
                  <Card className="p-4 hover:bg-slate-50 cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>ER</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-medium">Emma Roberts</h4>
                        <p className="text-sm text-muted-foreground">Physical Therapist</p>
                      </div>
                      <Button variant="outline" size="icon">
                        <PhoneCall className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                </div>
                
                <div className="w-full rounded-lg bg-slate-50 p-6">
                  <h3 className="text-lg font-medium mb-4">Upcoming Scheduled Calls</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded-md shadow-sm">
                      <div>
                        <p className="font-medium">Weekly Check-in with Dr. Wilson</p>
                        <p className="text-sm text-muted-foreground">Thursday, 2:00 PM</p>
                      </div>
                      <Button variant="outline">Join Call</Button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-md shadow-sm">
                      <div>
                        <p className="font-medium">Family Group Call</p>
                        <p className="text-sm text-muted-foreground">Saturday, 6:00 PM</p>
                      </div>
                      <Button variant="outline">Join Call</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="messaging" className="w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Messaging Center</CardTitle>
              <CardDescription>Send and receive messages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 border rounded-lg">
                  <div className="p-4 border-b">
                    <h3 className="font-medium">Recent Conversations</h3>
                  </div>
                  <div className="divide-y">
                    <div className="p-4 hover:bg-slate-50 cursor-pointer bg-slate-50">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback>MG</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Mary Gardner</p>
                          <p className="text-sm text-muted-foreground">I'll bring your medication...</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 hover:bg-slate-50 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback>CC</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Care Coordinator</p>
                          <p className="text-sm text-muted-foreground">Your appointment is confirmed...</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 hover:bg-slate-50 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Emma Roberts</p>
                          <p className="text-sm text-muted-foreground">Don't forget your exercises...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2 border rounded-lg flex flex-col">
                  <div className="p-4 border-b">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>MG</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Mary Gardner</p>
                        <p className="text-xs text-muted-foreground">Online now</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-[400px]">
                    <div className="flex items-start space-x-3">
                      <Avatar className="mt-1">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>MG</AvatarFallback>
                      </Avatar>
                      <div className="bg-slate-100 p-3 rounded-lg">
                        <p>Hi there! I'll be dropping by at 3 PM to bring your new medication and help set up the pill organizer.</p>
                        <p className="text-xs text-muted-foreground mt-1">10:30 AM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start justify-end space-x-3">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <p>Thank you, Mary! That works perfectly. I'll be here.</p>
                        <p className="text-xs text-muted-foreground mt-1">10:45 AM</p>
                      </div>
                      <Avatar className="mt-1">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>ME</AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Avatar className="mt-1">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>MG</AvatarFallback>
                      </Avatar>
                      <div className="bg-slate-100 p-3 rounded-lg">
                        <p>Great! Do you need anything else while I'm there? I can pick up some groceries if needed.</p>
                        <p className="text-xs text-muted-foreground mt-1">11:15 AM</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border-t">
                    <div className="flex space-x-2">
                      <input 
                        type="text" 
                        className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        placeholder="Type your message..." 
                      />
                      <Button>Send</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="care-circle" className="w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Care Circle Management</CardTitle>
              <CardDescription>Manage your care circle members and their permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Your Care Circle</h3>
                  <Button className="flex items-center gap-2">
                    <UserPlus className="h-4 w-4" />
                    Add Member
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>MG</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Mary Gardner</h4>
                        <p className="text-sm text-muted-foreground">Primary Caregiver</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Access Level:</span>
                        <span className="font-medium">Full Access</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Last Active:</span>
                        <span>Today, 11:15 AM</span>
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                        <Button variant="outline" size="sm" className="flex-1">Message</Button>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>JW</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">James Wilson</h4>
                        <p className="text-sm text-muted-foreground">Primary Care Doctor</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Access Level:</span>
                        <span className="font-medium">Health Data Only</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Last Active:</span>
                        <span>Yesterday, 4:30 PM</span>
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                        <Button variant="outline" size="sm" className="flex-1">Message</Button>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>SR</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Sarah Reynolds</h4>
                        <p className="text-sm text-muted-foreground">Family Member</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Access Level:</span>
                        <span className="font-medium">Limited Access</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Last Active:</span>
                        <span>2 days ago</span>
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                        <Button variant="outline" size="sm" className="flex-1">Message</Button>
                      </div>
                    </div>
                  </Card>
                </div>
                
                <Card className="p-4 mt-6">
                  <h3 className="font-medium mb-3">Care Circle Permissions</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Health Data Sharing</span>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Medication Management</span>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Calendar Access</span>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Emergency Contact Settings</span>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                  </div>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="community" className="w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Community Connection</CardTitle>
              <CardDescription>Discover local events and connect with your community</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Upcoming Community Events</h3>
                  <Button variant="outline">View All Events</Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="overflow-hidden">
                    <div className="h-40 bg-slate-200 flex items-center justify-center">
                      <CalendarClock className="h-10 w-10 text-slate-400" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Senior Health Workshop</h4>
                      <p className="text-sm text-muted-foreground">Thursday, 10:00 AM - 12:00 PM</p>
                      <p className="text-sm mt-2">Learn about managing chronic conditions and preventive care.</p>
                      <div className="flex space-x-2 mt-4">
                        <Button size="sm" className="flex-1">RSVP</Button>
                        <Button variant="outline" size="sm" className="flex-1">Details</Button>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <div className="h-40 bg-slate-200 flex items-center justify-center">
                      <CalendarClock className="h-10 w-10 text-slate-400" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Community Game Night</h4>
                      <p className="text-sm text-muted-foreground">Friday, 6:00 PM - 8:00 PM</p>
                      <p className="text-sm mt-2">Join fellow community members for a fun evening of board games.</p>
                      <div className="flex space-x-2 mt-4">
                        <Button size="sm" className="flex-1">RSVP</Button>
                        <Button variant="outline" size="sm" className="flex-1">Details</Button>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <div className="h-40 bg-slate-200 flex items-center justify-center">
                      <CalendarClock className="h-10 w-10 text-slate-400" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Virtual Wellness Class</h4>
                      <p className="text-sm text-muted-foreground">Monday, 9:00 AM - 10:00 AM</p>
                      <p className="text-sm mt-2">Gentle yoga and meditation session via video conference.</p>
                      <div className="flex space-x-2 mt-4">
                        <Button size="sm" className="flex-1">RSVP</Button>
                        <Button variant="outline" size="sm" className="flex-1">Details</Button>
                      </div>
                    </div>
                  </Card>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-4">Community Groups</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Users className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">Wellness Warriors</h4>
                          <p className="text-sm text-muted-foreground">124 members</p>
                        </div>
                        <Button variant="outline" size="sm">Join</Button>
                      </div>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-green-100 p-2 rounded-full">
                          <Headphones className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">Book Club</h4>
                          <p className="text-sm text-muted-foreground">87 members</p>
                        </div>
                        <Button variant="outline" size="sm">Join</Button>
                      </div>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <FileText className="h-5 w-5 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">Tech Learning Group</h4>
                          <p className="text-sm text-muted-foreground">56 members</p>
                        </div>
                        <Button variant="outline" size="sm">Join</Button>
                      </div>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-amber-100 p-2 rounded-full">
                          <Video className="h-5 w-5 text-amber-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">Virtual Coffee Chat</h4>
                          <p className="text-sm text-muted-foreground">92 members</p>
                        </div>
                        <Button variant="outline" size="sm">Join</Button>
                      </div>
                    </Card>
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

export default ConnectHub;
