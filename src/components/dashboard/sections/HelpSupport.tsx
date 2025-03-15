
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HelpCircle, FileText, MessageCircle, Video, Phone, Mail } from 'lucide-react';

const HelpSupport: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Help & Support</h1>
        <p className="text-muted-foreground">
          Find answers to common questions or reach out for assistance
        </p>
      </div>

      <Tabs defaultValue="faq" className="w-full">
        <TabsList className="grid grid-cols-4 w-full md:w-auto">
          <TabsTrigger value="faq" className="flex items-center gap-1">
            <HelpCircle className="h-4 w-4" />
            <span>FAQs</span>
          </TabsTrigger>
          <TabsTrigger value="guides" className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            <span>Guides</span>
          </TabsTrigger>
          <TabsTrigger value="contact" className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            <span>Contact</span>
          </TabsTrigger>
          <TabsTrigger value="videos" className="flex items-center gap-1">
            <Video className="h-4 w-4" />
            <span>Videos</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="faq" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Find answers to common questions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">How do I update my health information?</h3>
                <p className="text-sm text-muted-foreground">
                  You can update your health information by navigating to the Health View section and 
                  selecting "Update Profile" in the top right corner.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium">How do I connect a new device?</h3>
                <p className="text-sm text-muted-foreground">
                  To connect a new device, go to the Settings page and select "Manage Devices." Click on 
                  "Add New Device" and follow the on-screen instructions.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium">How can I invite family members to my account?</h3>
                <p className="text-sm text-muted-foreground">
                  You can invite family members by going to the Family Portal and clicking "Add Member" 
                  in the top right corner. Enter their email address, and they will receive an invitation.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium">How do I schedule a telehealth appointment?</h3>
                <p className="text-sm text-muted-foreground">
                  To schedule a telehealth appointment, navigate to the Connect Hub section and select 
                  "Schedule Appointment." Choose your preferred provider and select an available time slot.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium">How do I reset my password?</h3>
                <p className="text-sm text-muted-foreground">
                  To reset your password, go to the Account Settings page and select "Security." Click on 
                  "Change Password" and follow the prompts.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="guides" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Guides</CardTitle>
              <CardDescription>Step-by-step guides for using MCN Healthcare</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-base">Getting Started Guide</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm">A complete walkthrough of setting up your account and basic features.</p>
                  <button className="text-sm text-mcn-blue mt-2">Download PDF</button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-base">Health Monitoring</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm">Learn how to track and manage your health metrics effectively.</p>
                  <button className="text-sm text-mcn-blue mt-2">Download PDF</button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-base">Family Management</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm">A guide to managing family members and sharing information securely.</p>
                  <button className="text-sm text-mcn-blue mt-2">Download PDF</button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-base">Device Connectivity</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm">How to connect and manage health monitoring devices with your account.</p>
                  <button className="text-sm text-mcn-blue mt-2">Download PDF</button>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Reach out to our support team for assistance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start space-x-4 p-4 border rounded-lg">
                  <Phone className="h-6 w-6 text-mcn-blue" />
                  <div>
                    <h3 className="font-medium">Phone Support</h3>
                    <p className="text-sm text-muted-foreground mb-2">Available Mon-Fri, 8am-8pm</p>
                    <p className="text-sm font-medium">+1 (800) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 border rounded-lg">
                  <Mail className="h-6 w-6 text-mcn-blue" />
                  <div>
                    <h3 className="font-medium">Email Support</h3>
                    <p className="text-sm text-muted-foreground mb-2">24/7 response within 24 hours</p>
                    <p className="text-sm font-medium">support@mcnhealthcare.com</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium mb-2">Send a Message</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium">Subject</label>
                    <select className="w-full border rounded-md p-2 mt-1">
                      <option>Technical Issue</option>
                      <option>Account Question</option>
                      <option>Billing Inquiry</option>
                      <option>Feature Request</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Message</label>
                    <textarea 
                      className="w-full border rounded-md p-2 mt-1 min-h-[100px]" 
                      placeholder="Describe your issue or question..."
                    ></textarea>
                  </div>
                  
                  <button className="bg-mcn-blue text-white px-4 py-2 rounded-md hover:bg-mcn-blue-dark transition-colors">
                    Send Message
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="videos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Video Tutorials</CardTitle>
              <CardDescription>Watch step-by-step video guides</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <div className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center">
                  <Video className="h-10 w-10 text-mcn-blue/60" />
                </div>
                <h3 className="font-medium">Getting Started with MCN Healthcare</h3>
                <p className="text-sm text-muted-foreground">3:45 min</p>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center">
                  <Video className="h-10 w-10 text-mcn-blue/60" />
                </div>
                <h3 className="font-medium">Using the Health View Dashboard</h3>
                <p className="text-sm text-muted-foreground">4:12 min</p>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center">
                  <Video className="h-10 w-10 text-mcn-blue/60" />
                </div>
                <h3 className="font-medium">Setting Up the Safety Monitor</h3>
                <p className="text-sm text-muted-foreground">5:30 min</p>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center">
                  <Video className="h-10 w-10 text-mcn-blue/60" />
                </div>
                <h3 className="font-medium">Connecting with Care Providers</h3>
                <p className="text-sm text-muted-foreground">3:18 min</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HelpSupport;
