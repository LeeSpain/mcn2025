
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Calendar, BookOpen, BarChart } from 'lucide-react';

const AdminTools: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Administrative Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="team">
            <TabsList className="mb-4">
              <TabsTrigger value="team" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Team Management
              </TabsTrigger>
              <TabsTrigger value="resources" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Resource Allocation
              </TabsTrigger>
              <TabsTrigger value="policy" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Policy & Procedures
              </TabsTrigger>
              <TabsTrigger value="reporting" className="flex items-center gap-2">
                <BarChart className="h-4 w-4" />
                Reporting Suite
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="team" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Scheduling & Attendance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-gray-100 rounded-md">
                    <p className="text-muted-foreground">Team scheduling calendar</p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Skill & Certification</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] flex items-center justify-center bg-gray-100 rounded-md">
                      <p className="text-muted-foreground">Agent skills matrix</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Performance Evaluation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] flex items-center justify-center bg-gray-100 rounded-md">
                      <p className="text-muted-foreground">Evaluation tools</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="resources">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Queue Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-gray-100 rounded-md">
                    <p className="text-muted-foreground">Resource allocation dashboard</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="policy">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Policy Database</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-gray-100 rounded-md">
                    <p className="text-muted-foreground">Searchable policy database</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reporting">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Custom Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-gray-100 rounded-md">
                    <p className="text-muted-foreground">Report building interface</p>
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

export default AdminTools;
