
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, LineChart, PieChart } from 'lucide-react';

const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Analytics & Reporting Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="performance">
            <TabsList className="mb-4">
              <TabsTrigger value="performance" className="flex items-center gap-2">
                <BarChart className="h-4 w-4" />
                Performance
              </TabsTrigger>
              <TabsTrigger value="quality" className="flex items-center gap-2">
                <LineChart className="h-4 w-4" />
                Service Quality
              </TabsTrigger>
              <TabsTrigger value="usage" className="flex items-center gap-2">
                <PieChart className="h-4 w-4" />
                Client Usage
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="performance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Agent Performance Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-gray-100 rounded-md">
                    <p className="text-muted-foreground">Performance metrics visualization</p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Team Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] flex items-center justify-center bg-gray-100 rounded-md">
                      <p className="text-muted-foreground">Team stats visualization</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">SLA Compliance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] flex items-center justify-center bg-gray-100 rounded-md">
                      <p className="text-muted-foreground">SLA metrics visualization</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="quality">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Customer Satisfaction Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-gray-100 rounded-md">
                    <p className="text-muted-foreground">CSAT visualization</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="usage">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Client Usage Patterns</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-gray-100 rounded-md">
                    <p className="text-muted-foreground">Usage analytics visualization</p>
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

export default Analytics;
