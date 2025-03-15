
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, TrendingUp, Footprints, Target, Activity, Droplet, Thermometer, Wind } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

const HealthView: React.FC = () => {
  // Sample data for the charts
  const vitalHistory = [
    { date: 'Mon', heartRate: 75, bloodPressure: 135, bloodSugar: 110 },
    { date: 'Tue', heartRate: 72, bloodPressure: 138, bloodSugar: 115 },
    { date: 'Wed', heartRate: 78, bloodPressure: 133, bloodSugar: 108 },
    { date: 'Thu', heartRate: 74, bloodPressure: 130, bloodSugar: 105 },
    { date: 'Fri', heartRate: 76, bloodPressure: 129, bloodSugar: 112 },
    { date: 'Sat', heartRate: 73, bloodPressure: 132, bloodSugar: 109 },
    { date: 'Sun', heartRate: 71, bloodPressure: 128, bloodSugar: 106 },
  ];
  
  const activityData = [
    { day: 'Mon', steps: 5400, activeMinutes: 35 },
    { day: 'Tue', steps: 7200, activeMinutes: 45 },
    { day: 'Wed', steps: 6300, activeMinutes: 40 },
    { day: 'Thu', steps: 8100, activeMinutes: 50 },
    { day: 'Fri', steps: 6800, activeMinutes: 42 },
    { day: 'Sat', steps: 7500, activeMinutes: 48 },
    { day: 'Sun', steps: 4900, activeMinutes: 30 },
  ];

  const healthGoals = [
    { id: 1, name: 'Daily Steps', current: 7200, target: 10000, unit: 'steps', progress: 72 },
    { id: 2, name: 'Active Minutes', current: 42, target: 60, unit: 'minutes', progress: 70 },
    { id: 3, name: 'Weight Loss', current: 6, target: 15, unit: 'lbs', progress: 40 },
    { id: 4, name: 'Water Intake', current: 6, target: 8, unit: 'glasses', progress: 75 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-1.5">
        <h2 className="text-2xl font-semibold tracking-tight">Health View</h2>
        <p className="text-muted-foreground">Monitor your health metrics and track progress</p>
      </div>

      {/* Vital Signs Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg font-medium">
              <Heart className="h-5 w-5 text-red-500" />
              Heart Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold">72</span>
              <span className="text-sm text-muted-foreground mb-1">BPM</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Normal range: 60-100 BPM</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg font-medium">
              <Activity className="h-5 w-5 text-blue-500" />
              Blood Pressure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold">128/82</span>
              <span className="text-sm text-muted-foreground mb-1">mmHg</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Normal range: Below 120/80 mmHg</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg font-medium">
              <Droplet className="h-5 w-5 text-purple-500" />
              Blood Sugar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold">110</span>
              <span className="text-sm text-muted-foreground mb-1">mg/dL</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Normal range: 70-130 mg/dL</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg font-medium">
              <Wind className="h-5 w-5 text-teal-500" />
              Oxygen Level
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold">98</span>
              <span className="text-sm text-muted-foreground mb-1">%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Normal range: 95-100%</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="vitals" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="vitals" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            Vital Signs
          </TabsTrigger>
          <TabsTrigger value="trends" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Health Trends
          </TabsTrigger>
          <TabsTrigger value="activity" className="flex items-center gap-2">
            <Footprints className="h-4 w-4" />
            Activity
          </TabsTrigger>
          <TabsTrigger value="goals" className="flex items-center gap-2">
            <Target className="h-4 w-4" />
            Goals
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="vitals">
          <Card>
            <CardHeader>
              <CardTitle>Vital Signs Dashboard</CardTitle>
              <CardDescription>View your current health metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Today's Readings</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Heart className="h-5 w-5 mr-2 text-red-500" />
                        <span>Heart Rate</span>
                      </div>
                      <div className="font-medium">72 BPM</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Activity className="h-5 w-5 mr-2 text-blue-500" />
                        <span>Blood Pressure</span>
                      </div>
                      <div className="font-medium">128/82 mmHg</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Droplet className="h-5 w-5 mr-2 text-purple-500" />
                        <span>Blood Sugar</span>
                      </div>
                      <div className="font-medium">110 mg/dL</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Wind className="h-5 w-5 mr-2 text-teal-500" />
                        <span>Oxygen Saturation</span>
                      </div>
                      <div className="font-medium">98%</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Thermometer className="h-5 w-5 mr-2 text-orange-500" />
                        <span>Temperature</span>
                      </div>
                      <div className="font-medium">98.6°F</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Measurement Schedule</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Heart className="h-5 w-5 mr-2 text-red-500" />
                        <span>Heart Rate</span>
                      </div>
                      <div className="text-sm">Morning & Evening</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Activity className="h-5 w-5 mr-2 text-blue-500" />
                        <span>Blood Pressure</span>
                      </div>
                      <div className="text-sm">Morning & Evening</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Droplet className="h-5 w-5 mr-2 text-purple-500" />
                        <span>Blood Sugar</span>
                      </div>
                      <div className="text-sm">Before meals</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Wind className="h-5 w-5 mr-2 text-teal-500" />
                        <span>Oxygen Level</span>
                      </div>
                      <div className="text-sm">As needed</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Thermometer className="h-5 w-5 mr-2 text-orange-500" />
                        <span>Temperature</span>
                      </div>
                      <div className="text-sm">When feeling ill</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle>Health Trends</CardTitle>
              <CardDescription>Track your health metrics over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={vitalHistory} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="heartRate" stroke="#ef4444" name="Heart Rate (BPM)" activeDot={{ r: 8 }} />
                    <Line yAxisId="left" type="monotone" dataKey="bloodPressure" stroke="#3b82f6" name="Systolic BP (mmHg)" />
                    <Line yAxisId="right" type="monotone" dataKey="bloodSugar" stroke="#8b5cf6" name="Blood Sugar (mg/dL)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-4">
                <h3 className="text-lg font-medium mb-2">Analysis</h3>
                <p className="text-muted-foreground">Your vital signs have been relatively stable over the past week with no concerning patterns identified. Continue monitoring regularly.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Activity Tracking</CardTitle>
              <CardDescription>Monitor your daily activity levels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={activityData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis yAxisId="left" orientation="left" stroke="#10b981" />
                    <YAxis yAxisId="right" orientation="right" stroke="#8b5cf6" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="steps" name="Steps" fill="#10b981" />
                    <Bar yAxisId="right" dataKey="activeMinutes" name="Active Minutes" fill="#8b5cf6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Daily Average</h4>
                    <div className="flex items-center">
                      <Footprints className="h-5 w-5 mr-2 text-teal-500" />
                      <span className="text-lg font-bold">6,600</span>
                      <span className="text-sm ml-1">steps</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Weekly Total</h4>
                    <div className="flex items-center">
                      <Footprints className="h-5 w-5 mr-2 text-teal-500" />
                      <span className="text-lg font-bold">46,200</span>
                      <span className="text-sm ml-1">steps</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Active Minutes</h4>
                    <div className="flex items-center">
                      <Activity className="h-5 w-5 mr-2 text-purple-500" />
                      <span className="text-lg font-bold">290</span>
                      <span className="text-sm ml-1">minutes</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="goals">
          <Card>
            <CardHeader>
              <CardTitle>Health Goals</CardTitle>
              <CardDescription>Set and track your health goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {healthGoals.map(goal => (
                  <div key={goal.id} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{goal.name}</span>
                      <span className="text-sm">
                        {goal.current} / {goal.target} {goal.unit}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-mcn-blue rounded-full" 
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Achievements</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-full mb-2">
                      <Target className="h-6 w-6 text-green-600" />
                    </div>
                    <p className="text-sm font-medium">7 Day Streak</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-2">
                      <Footprints className="h-6 w-6 text-blue-600" />
                    </div>
                    <p className="text-sm font-medium">10k Steps</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center p-2 bg-purple-100 rounded-full mb-2">
                      <Heart className="h-6 w-6 text-purple-600" />
                    </div>
                    <p className="text-sm font-medium">BP Improved</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center p-2 bg-gray-100 rounded-full mb-2">
                      <Target className="h-6 w-6 text-gray-400" />
                    </div>
                    <p className="text-sm font-medium text-gray-400">Locked</p>
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

export default HealthView;
