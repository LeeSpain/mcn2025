
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, UserPlus, UserCheck, Search } from 'lucide-react';
import ClientProfile from './ClientProfile';

const ClientManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Client Management</CardTitle>
          <CardDescription>Manage client profiles, care plans, and communications</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="clients">
            <TabsList className="mb-4">
              <TabsTrigger value="clients" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Active Clients
              </TabsTrigger>
              <TabsTrigger value="new" className="flex items-center gap-2">
                <UserPlus className="h-4 w-4" />
                New Clients
              </TabsTrigger>
              <TabsTrigger value="pending" className="flex items-center gap-2">
                <UserCheck className="h-4 w-4" />
                Pending Reviews
              </TabsTrigger>
              <TabsTrigger value="search" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Search
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="clients">
              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Active Clients</CardTitle>
                    <CardDescription>All currently active clients in your care</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Sample client list */}
                      {['John Doe', 'Mary Smith', 'Robert Johnson', 'Emma Wilson', 'James Brown'].map((name, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-mcn-blue/20 flex items-center justify-center text-mcn-blue font-medium">
                              {name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <p className="font-medium">{name}</p>
                              <p className="text-sm text-gray-500">ID: MCN-{1000 + index}</p>
                            </div>
                          </div>
                          <button className="text-sm text-mcn-blue hover:underline">View Profile</button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <ClientProfile />
              </div>
            </TabsContent>
            
            <TabsContent value="new">
              <Card>
                <CardHeader>
                  <CardTitle>New Client Registrations</CardTitle>
                  <CardDescription>Recent client registrations requiring setup</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>New client registration data would appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="pending">
              <Card>
                <CardHeader>
                  <CardTitle>Pending Reviews</CardTitle>
                  <CardDescription>Clients with pending care plan reviews</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Pending client reviews would appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="search">
              <Card>
                <CardHeader>
                  <CardTitle>Client Search</CardTitle>
                  <CardDescription>Search for clients by name, ID, or other criteria</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input 
                        type="text" 
                        placeholder="Search clients..." 
                        className="pl-10 w-full rounded-md border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mcn-blue/50"
                      />
                    </div>
                    <p className="text-sm text-gray-500">Enter a client name, ID, or phone number to search</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientManagement;
