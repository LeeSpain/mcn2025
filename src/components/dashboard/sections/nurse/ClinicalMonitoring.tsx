
import React from 'react';
import { 
  Activity, 
  HeartPulse, 
  Thermometer, 
  Drop, 
  Dumbbell, 
  Pill, 
  Scale,
  BarChart,
  Target,
  AlertTriangle,
  Users
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

// Mock data for vital signs
const vitalSignsData = [
  { time: '6:00 AM', systolic: 138, diastolic: 88, pulse: 72 },
  { time: '12:00 PM', systolic: 142, diastolic: 90, pulse: 78 },
  { time: '6:00 PM', systolic: 145, diastolic: 92, pulse: 76 },
  { time: '10:00 PM', systolic: 140, diastolic: 88, pulse: 74 }
];

// Mock data for blood glucose readings
const glucoseReadings = [
  { time: '7:00 AM', value: 130, status: 'Fasting', notes: 'Before breakfast' },
  { time: '10:00 AM', value: 145, status: 'Post-meal', notes: 'After breakfast' },
  { time: '1:00 PM', value: 125, status: 'Pre-meal', notes: 'Before lunch' },
  { time: '3:00 PM', value: 160, status: 'Post-meal', notes: 'After lunch' }
];

// Mock data for medication tracking
const medicationTracking = [
  { 
    medication: 'Lisinopril 10mg', 
    schedule: 'Once daily', 
    timesDue: ['8:00 AM'], 
    status: 'Taken',
    lastTaken: '8:15 AM today'
  },
  { 
    medication: 'Metformin 500mg', 
    schedule: 'Twice daily', 
    timesDue: ['8:00 AM', '8:00 PM'], 
    status: 'Partial',
    lastTaken: '8:10 AM today'
  },
  { 
    medication: 'Aspirin 81mg', 
    schedule: 'Once daily', 
    timesDue: ['8:00 AM'], 
    status: 'Taken',
    lastTaken: '8:05 AM today'
  },
  { 
    medication: 'Atorvastatin 20mg', 
    schedule: 'Once daily', 
    timesDue: ['8:00 PM'], 
    status: 'Due',
    lastTaken: '8:30 PM yesterday'
  }
];

const ClinicalMonitoring: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Clinical Monitoring</h1>
          <p className="text-muted-foreground">
            Monitor vital signs, medication adherence, and health trends
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex space-x-2">
          <select className="border rounded-md px-3 py-2 text-sm">
            <option>Select Client</option>
            <option selected>Jan de Vries</option>
            <option>Anna Koster</option>
            <option>Pieter Bakker</option>
          </select>
          <button className="flex items-center gap-1.5 px-3 py-2 bg-mcn-blue text-white rounded-md text-sm">
            <AlertTriangle className="h-4 w-4" />
            <span>Set Alert</span>
          </button>
        </div>
      </div>
      
      <Tabs defaultValue="vital-signs" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="vital-signs" className="flex items-center gap-1">
            <HeartPulse className="h-4 w-4" />
            <span>Vital Signs</span>
          </TabsTrigger>
          <TabsTrigger value="glucose" className="flex items-center gap-1">
            <Drop className="h-4 w-4" />
            <span>Blood Glucose</span>
          </TabsTrigger>
          <TabsTrigger value="medications" className="flex items-center gap-1">
            <Pill className="h-4 w-4" />
            <span>Medications</span>
          </TabsTrigger>
          <TabsTrigger value="activity" className="flex items-center gap-1">
            <Activity className="h-4 w-4" />
            <span>Activity</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="vital-signs">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Blood Pressure & Heart Rate</CardTitle>
                  <CardDescription>Last 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center border-2 border-dashed rounded-lg">
                    <div className="text-center">
                      <BarChart className="h-12 w-12 mx-auto text-gray-300" />
                      <p className="mt-2 text-gray-500">Chart visualization would appear here</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-4 bg-gray-50 p-3 text-sm font-medium text-gray-500">
                      <div>Time</div>
                      <div>Systolic</div>
                      <div>Diastolic</div>
                      <div>Pulse</div>
                    </div>
                    {vitalSignsData.map((reading, idx) => (
                      <div 
                        key={idx} 
                        className={`grid grid-cols-4 p-3 text-sm ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                      >
                        <div>{reading.time}</div>
                        <div className={reading.systolic > 140 ? 'text-red-600 font-medium' : 'text-gray-900'}>
                          {reading.systolic} mmHg
                        </div>
                        <div className={reading.diastolic > 90 ? 'text-red-600 font-medium' : 'text-gray-900'}>
                          {reading.diastolic} mmHg
                        </div>
                        <div className="text-gray-900">{reading.pulse} bpm</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Latest Readings</CardTitle>
                    <CardDescription>
                      {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-lg p-3 flex justify-between items-center">
                        <div>
                          <div className="text-xs text-gray-500">Blood Pressure</div>
                          <div className="text-xl font-medium">140/88 <span className="text-xs text-gray-500">mmHg</span></div>
                        </div>
                        <div className="bg-blue-100 p-2 rounded-full">
                          <HeartPulse className="h-6 w-6 text-blue-700" />
                        </div>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-3 flex justify-between items-center">
                        <div>
                          <div className="text-xs text-gray-500">Heart Rate</div>
                          <div className="text-xl font-medium">74 <span className="text-xs text-gray-500">bpm</span></div>
                        </div>
                        <div className="bg-green-100 p-2 rounded-full">
                          <Activity className="h-6 w-6 text-green-700" />
                        </div>
                      </div>
                      
                      <div className="bg-amber-50 rounded-lg p-3 flex justify-between items-center">
                        <div>
                          <div className="text-xs text-gray-500">Temperature</div>
                          <div className="text-xl font-medium">36.7 <span className="text-xs text-gray-500">°C</span></div>
                        </div>
                        <div className="bg-amber-100 p-2 rounded-full">
                          <Thermometer className="h-6 w-6 text-amber-700" />
                        </div>
                      </div>
                      
                      <div className="bg-purple-50 rounded-lg p-3 flex justify-between items-center">
                        <div>
                          <div className="text-xs text-gray-500">Weight</div>
                          <div className="text-xl font-medium">78.2 <span className="text-xs text-gray-500">kg</span></div>
                        </div>
                        <div className="bg-purple-100 p-2 rounded-full">
                          <Scale className="h-6 w-6 text-purple-700" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Health Goals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Target className="h-5 w-5 text-mcn-blue mr-2" />
                          <span>BP below 140/90</span>
                        </div>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                          In Progress
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Target className="h-5 w-5 text-mcn-blue mr-2" />
                          <span>Weight management</span>
                        </div>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800">
                          On Track
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Target className="h-5 w-5 text-mcn-blue mr-2" />
                          <span>Daily steps (5,000)</span>
                        </div>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-800">
                          Off Track
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="glucose">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Blood Glucose Readings</CardTitle>
                  <CardDescription>Last 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center border-2 border-dashed rounded-lg">
                    <div className="text-center">
                      <BarChart className="h-12 w-12 mx-auto text-gray-300" />
                      <p className="mt-2 text-gray-500">Glucose chart visualization would appear here</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-4 bg-gray-50 p-3 text-sm font-medium text-gray-500">
                      <div>Time</div>
                      <div>Value</div>
                      <div>Status</div>
                      <div>Notes</div>
                    </div>
                    {glucoseReadings.map((reading, idx) => (
                      <div 
                        key={idx} 
                        className={`grid grid-cols-4 p-3 text-sm ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                      >
                        <div>{reading.time}</div>
                        <div className={reading.value > 140 ? 'text-amber-600 font-medium' : 'text-gray-900'}>
                          {reading.value} mg/dL
                        </div>
                        <div>{reading.status}</div>
                        <div className="text-gray-500">{reading.notes}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Glucose Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="flex justify-between">
                        <div className="text-sm font-medium">Average Glucose</div>
                        <div className="text-sm font-medium">140 mg/dL</div>
                      </div>
                      <div className="mt-2 h-2 bg-blue-100 rounded-full">
                        <div className="bg-amber-500 h-2 rounded-full w-3/4"></div>
                      </div>
                      <div className="mt-1 text-xs text-gray-500">Target: &lt;130 mg/dL</div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="flex justify-between">
                        <div className="text-sm font-medium">Fasting Glucose</div>
                        <div className="text-sm font-medium">130 mg/dL</div>
                      </div>
                      <div className="mt-2 h-2 bg-blue-100 rounded-full">
                        <div className="bg-amber-500 h-2 rounded-full w-2/3"></div>
                      </div>
                      <div className="mt-1 text-xs text-gray-500">Target: &lt;120 mg/dL</div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="flex justify-between">
                        <div className="text-sm font-medium">Post-meal</div>
                        <div className="text-sm font-medium">152 mg/dL</div>
                      </div>
                      <div className="mt-2 h-2 bg-blue-100 rounded-full">
                        <div className="bg-red-500 h-2 rounded-full w-4/5"></div>
                      </div>
                      <div className="mt-1 text-xs text-gray-500">Target: &lt;140 mg/dL</div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-sm font-medium mb-2">Recommendations</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="h-5 w-5 bg-amber-100 rounded-full text-amber-700 flex items-center justify-center text-xs mr-2 mt-0.5">!</span>
                          <span>Consider adjusting insulin dosage before meals</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-5 w-5 bg-blue-100 rounded-full text-blue-700 flex items-center justify-center text-xs mr-2 mt-0.5">i</span>
                          <span>Review carbohydrate intake with client</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-5 w-5 bg-blue-100 rounded-full text-blue-700 flex items-center justify-center text-xs mr-2 mt-0.5">i</span>
                          <span>Increase monitoring frequency before next visit</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="medications">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Medication Adherence</CardTitle>
                <CardDescription>Today's schedule and compliance tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {medicationTracking.map((med, idx) => (
                    <div key={idx} className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 p-3">
                        <div className="flex justify-between items-center">
                          <div className="font-medium">{med.medication}</div>
                          <span className={`text-xs px-2 py-0.5 rounded-full
                            ${med.status === 'Taken' ? 'bg-green-100 text-green-800' : 
                              med.status === 'Partial' ? 'bg-amber-100 text-amber-800' : 
                              'bg-blue-100 text-blue-800'}`}
                          >
                            {med.status}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">{med.schedule}</div>
                      </div>
                      <div className="p-3">
                        <div className="mb-2">
                          <div className="text-xs text-gray-500">SCHEDULED TIMES</div>
                          <div className="flex gap-2 mt-1">
                            {med.timesDue.map((time, i) => (
                              <span 
                                key={i} 
                                className={`text-xs px-2 py-1 rounded
                                  ${med.status === 'Taken' || (med.status === 'Partial' && i === 0) ? 
                                    'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
                              >
                                {time}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">
                          Last taken: {med.lastTaken}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="flex justify-end space-x-2 mt-4">
                    <button className="text-sm px-4 py-2 bg-mcn-blue text-white rounded-md hover:bg-mcn-blue/90 transition-colors">
                      Update Medication Log
                    </button>
                    <button className="text-sm px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                      Medication History
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="activity">
          <Card className="text-center p-8 border border-dashed">
            <div className="mx-auto w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-3">
              <Activity className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-medium">Activity Monitoring</h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">
              Track client physical activity, steps, and exercise
            </p>
            <div className="w-1/2 mx-auto h-10 bg-gray-100 rounded-full mt-4 overflow-hidden">
              <div className="h-full bg-green-500 w-3/5 flex items-center justify-center text-white text-sm">
                3,512 / 5,000 steps
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClinicalMonitoring;
