
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, LineChart, PieChart, TrendingUp, Clock, Users } from 'lucide-react';
import { 
  BarChart as RechartsBarChart,
  Bar,
  LineChart as RechartsLineChart, 
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer 
} from 'recharts';

const performanceData = [
  { name: 'Mon', interactions: 45, resolutionRate: 92 },
  { name: 'Tue', interactions: 52, resolutionRate: 88 },
  { name: 'Wed', interactions: 48, resolutionRate: 95 },
  { name: 'Thu', interactions: 61, resolutionRate: 91 },
  { name: 'Fri', interactions: 55, resolutionRate: 89 },
  { name: 'Sat', interactions: 34, resolutionRate: 94 },
  { name: 'Sun', interactions: 28, resolutionRate: 96 },
];

const issueTypeData = [
  { name: 'Technical', value: 35 },
  { name: 'Medical', value: 25 },
  { name: 'Billing', value: 20 },
  { name: 'Device', value: 15 },
  { name: 'Other', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const StaffAnalytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Staff Analytics</CardTitle>
          <CardDescription>Performance metrics and service quality analytics</CardDescription>
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
              <TabsTrigger value="trends" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Trends
              </TabsTrigger>
              <TabsTrigger value="metrics" className="flex items-center gap-2">
                <PieChart className="h-4 w-4" />
                Key Metrics
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="performance">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Daily Interactions</CardTitle>
                    <CardDescription>Number of client interactions per day</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsBarChart
                          data={performanceData}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="interactions" fill="#4f46e5" name="Interactions" />
                        </RechartsBarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Resolution Rate</CardTitle>
                    <CardDescription>First-contact resolution percentage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsLineChart
                          data={performanceData}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis domain={[80, 100]} />
                          <Tooltip />
                          <Legend />
                          <Line 
                            type="monotone" 
                            dataKey="resolutionRate" 
                            stroke="#10b981" 
                            name="Resolution Rate (%)"
                            strokeWidth={2}
                          />
                        </RechartsLineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Issue Categories</CardTitle>
                    <CardDescription>Distribution of client support issues</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsPieChart>
                          <Pie
                            data={issueTypeData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {issueTypeData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </RechartsPieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Summary</CardTitle>
                    <CardDescription>Key performance indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { title: 'Average Response Time', value: '2m 34s', icon: Clock, change: '-12%', positive: true },
                        { title: 'Client Satisfaction', value: '94%', icon: Users, change: '+3%', positive: true },
                        { title: 'Cases Resolved', value: '523', icon: BarChart, change: '+8%', positive: true },
                        { title: 'Average Handle Time', value: '8m 12s', icon: Clock, change: '-5%', positive: true }
                      ].map((metric, index) => (
                        <div key={index} className="flex items-center justify-between p-2 border-b last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue">
                              <metric.icon className="h-4 w-4" />
                            </div>
                            <span>{metric.title}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{metric.value}</span>
                            <span className={`text-xs ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                              {metric.change}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="quality">
              <Card>
                <CardHeader>
                  <CardTitle>Service Quality Metrics</CardTitle>
                  <CardDescription>Tracking client satisfaction and service quality</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Service quality metrics would appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="trends">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Trends</CardTitle>
                  <CardDescription>Long-term performance trend analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Performance trend data would appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="metrics">
              <Card>
                <CardHeader>
                  <CardTitle>Key Success Metrics</CardTitle>
                  <CardDescription>Critical performance indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Key success metrics would appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default StaffAnalytics;
