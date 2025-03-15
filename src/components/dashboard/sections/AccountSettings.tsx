
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Lock, CreditCard, Bell, Globe, UserCog, Shield } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const AccountSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Account Settings</h1>
        <p className="text-muted-foreground">
          Manage your account preferences and settings
        </p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid grid-cols-6 w-full lg:w-auto">
          <TabsTrigger value="profile" className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>Profile</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-1">
            <Lock className="h-4 w-4" />
            <span>Security</span>
          </TabsTrigger>
          <TabsTrigger value="privacy" className="flex items-center gap-1">
            <Shield className="h-4 w-4" />
            <span>Privacy</span>
          </TabsTrigger>
          <TabsTrigger value="billing" className="flex items-center gap-1">
            <CreditCard className="h-4 w-4" />
            <span>Billing</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-1">
            <Bell className="h-4 w-4" />
            <span>Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="preferences" className="flex items-center gap-1">
            <UserCog className="h-4 w-4" />
            <span>Preferences</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>View and update your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 mx-auto md:mx-0">
                  <User className="w-10 h-10" />
                </div>
                <div className="flex-1 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border rounded-md" 
                        defaultValue="John" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border rounded-md" 
                        defaultValue="Doe" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <input 
                        type="email" 
                        className="w-full p-2 border rounded-md" 
                        defaultValue="john.doe@example.com" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone</label>
                      <input 
                        type="tel" 
                        className="w-full p-2 border rounded-md" 
                        defaultValue="(555) 123-4567" 
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="font-medium">Address Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Street Address</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md" 
                      defaultValue="123 Main St" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">City</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md" 
                      defaultValue="Boston" 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">State</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md" 
                      defaultValue="Massachusetts" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Postal Code</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md" 
                      defaultValue="02101" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Country</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md" 
                      defaultValue="United States" 
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button className="bg-mcn-blue hover:bg-mcn-blue-dark text-white">
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your account security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Change Password</h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Current Password</label>
                    <input 
                      type="password" 
                      className="w-full p-2 border rounded-md" 
                      placeholder="Enter current password" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">New Password</label>
                    <input 
                      type="password" 
                      className="w-full p-2 border rounded-md" 
                      placeholder="Enter new password" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Confirm New Password</label>
                    <input 
                      type="password" 
                      className="w-full p-2 border rounded-md" 
                      placeholder="Confirm new password" 
                    />
                  </div>
                  <Button className="bg-mcn-blue hover:bg-mcn-blue-dark text-white">
                    Update Password
                  </Button>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="font-medium">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Enable Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch />
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="font-medium">Devices & Sessions</h3>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg flex justify-between items-center">
                    <div>
                      <p className="font-medium">MacBook Pro - Chrome</p>
                      <p className="text-xs text-muted-foreground">Last active: Today at 10:45 AM</p>
                    </div>
                    <Button variant="outline" size="sm">Log Out</Button>
                  </div>
                  <div className="p-3 border rounded-lg flex justify-between items-center">
                    <div>
                      <p className="font-medium">iPhone 13 - Safari</p>
                      <p className="text-xs text-muted-foreground">Last active: Yesterday at 7:30 PM</p>
                    </div>
                    <Button variant="outline" size="sm">Log Out</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="privacy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>Control your privacy preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Data Sharing</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Share health data with care providers</p>
                      <p className="text-sm text-muted-foreground">Allow your healthcare providers to access your health information</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Share health data with family members</p>
                      <p className="text-sm text-muted-foreground">Allow family members to view your health information</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Share anonymized data for research</p>
                      <p className="text-sm text-muted-foreground">Contribute anonymized data to improve healthcare research</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="font-medium">Account Visibility</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Show profile to verified healthcare providers</p>
                      <p className="text-sm text-muted-foreground">Allow healthcare providers to find your profile</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Show profile in member directory</p>
                      <p className="text-sm text-muted-foreground">Make your profile discoverable to other members</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-3">
                <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                  Download My Data
                </Button>
                <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                  Delete My Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
              <CardDescription>Manage your payment methods and billing history</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Current Plan</h3>
                <div className="p-4 bg-mcn-blue/5 border border-mcn-blue/20 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-lg">Premium Family Plan</p>
                      <p className="text-sm text-muted-foreground">Billed annually</p>
                    </div>
                    <p className="font-bold text-xl">$199/year</p>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <Button className="bg-mcn-blue hover:bg-mcn-blue-dark text-white">
                      Upgrade Plan
                    </Button>
                    <Button variant="outline">
                      Cancel Plan
                    </Button>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Payment Methods</h3>
                  <Button variant="outline" size="sm">
                    Add Payment Method
                  </Button>
                </div>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-6 bg-blue-500 rounded mr-3"></div>
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-xs text-muted-foreground">Expires 04/2025</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="font-medium">Billing History</h3>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg flex justify-between items-center">
                    <div>
                      <p className="font-medium">Premium Family Plan - Annual</p>
                      <p className="text-xs text-muted-foreground">January 15, 2023</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="font-medium">$199.00</p>
                      <Button variant="ghost" size="sm">Receipt</Button>
                    </div>
                  </div>
                  
                  <div className="p-3 border rounded-lg flex justify-between items-center">
                    <div>
                      <p className="font-medium">Premium Family Plan - Annual</p>
                      <p className="text-xs text-muted-foreground">January 15, 2022</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="font-medium">$199.00</p>
                      <Button variant="ghost" size="sm">Receipt</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Control how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Health Alerts</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Critical health alerts</p>
                        <p className="text-sm text-muted-foreground">Immediate notifications for urgent health issues</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Medication reminders</p>
                        <p className="text-sm text-muted-foreground">Get reminders when it's time to take medication</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Health goal updates</p>
                        <p className="text-sm text-muted-foreground">Notifications about your health goal progress</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-medium">System Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">New messages</p>
                        <p className="text-sm text-muted-foreground">Get notified when you receive new messages</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Appointment reminders</p>
                        <p className="text-sm text-muted-foreground">Get reminders about upcoming appointments</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Account updates</p>
                        <p className="text-sm text-muted-foreground">Get notified about important account changes</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Product updates and news</p>
                        <p className="text-sm text-muted-foreground">Learn about new features and improvements</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-medium">Notification Delivery</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email notifications</p>
                        <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Push notifications</p>
                        <p className="text-sm text-muted-foreground">Receive notifications on your devices</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">SMS notifications</p>
                        <p className="text-sm text-muted-foreground">Receive important notifications via text message</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="preferences" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>Customize your user experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Language & Region</h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Language</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>English (US)</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                      <option>Chinese (Simplified)</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Time Zone</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Eastern Time (US & Canada)</option>
                      <option>Central Time (US & Canada)</option>
                      <option>Mountain Time (US & Canada)</option>
                      <option>Pacific Time (US & Canada)</option>
                      <option>UTC</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="font-medium">Interface Preferences</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Enable dark mode</p>
                      <p className="text-sm text-muted-foreground">Switch to a darker color scheme</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Show help tips</p>
                      <p className="text-sm text-muted-foreground">Display tooltips and help information</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Enable animations</p>
                      <p className="text-sm text-muted-foreground">Show interface animations and transitions</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="font-medium">Accessibility</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Increase text size</p>
                      <p className="text-sm text-muted-foreground">Use larger text throughout the application</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">High contrast mode</p>
                      <p className="text-sm text-muted-foreground">Enhance visual contrast for better readability</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Reduce motion</p>
                      <p className="text-sm text-muted-foreground">Minimize animations and motion effects</p>
                    </div>
                    <Switch />
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

export default AccountSettings;
