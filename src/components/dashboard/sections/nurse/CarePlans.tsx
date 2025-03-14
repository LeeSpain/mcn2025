
import React from 'react';
import { 
  Clipboard, 
  ClipboardPlus, 
  ClipboardEdit, 
  ClipboardCheck, 
  Search, 
  Filter, 
  Plus,
  User,
  CalendarClock,
  Check,
  X
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Mock data for care plans
const carePlans = [
  {
    id: 1,
    clientName: 'Jan de Vries',
    diagnoses: ['Hypertension', 'Type 2 Diabetes'],
    lastUpdated: '2 days ago',
    nextReview: 'In 5 days',
    status: 'Active',
    goals: [
      { title: 'Blood pressure control', status: 'In progress' },
      { title: 'Blood glucose management', status: 'Not started' },
      { title: 'Medication adherence', status: 'Achieved' }
    ]
  },
  {
    id: 2,
    clientName: 'Anna Koster',
    diagnoses: ['CHF', 'Post-Hospital Care'],
    lastUpdated: '1 day ago',
    nextReview: 'In 2 days',
    status: 'Needs Review',
    goals: [
      { title: 'Fluid management', status: 'In progress' },
      { title: 'Activity tolerance', status: 'In progress' },
      { title: 'Medication reconciliation', status: 'Achieved' }
    ]
  },
  {
    id: 3,
    clientName: 'Pieter Bakker',
    diagnoses: ['Chronic Pain', 'Mobility Issues'],
    lastUpdated: '5 days ago',
    nextReview: 'Tomorrow',
    status: 'Active',
    goals: [
      { title: 'Pain management', status: 'In progress' },
      { title: 'Improved mobility', status: 'In progress' },
      { title: 'Sleep quality', status: 'Not started' }
    ]
  }
];

const CarePlans: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Care Plans</h1>
          <p className="text-muted-foreground">
            Manage and update client care plans
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex space-x-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search care plans..."
              className="pl-9 pr-4 py-2 text-sm border rounded-md w-full sm:w-auto min-w-[200px]"
            />
          </div>
          <button className="flex items-center gap-1.5 px-3 py-2 bg-white border rounded-md text-sm">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 bg-mcn-blue text-white rounded-md text-sm">
            <Plus className="h-4 w-4" />
            <span>New Care Plan</span>
          </button>
        </div>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all" className="flex items-center gap-1">
            <Clipboard className="h-4 w-4" />
            <span>All Care Plans</span>
          </TabsTrigger>
          <TabsTrigger value="pending-review" className="flex items-center gap-1">
            <ClipboardEdit className="h-4 w-4" />
            <span>Pending Review</span>
          </TabsTrigger>
          <TabsTrigger value="recently-updated" className="flex items-center gap-1">
            <ClipboardPlus className="h-4 w-4" />
            <span>Recently Updated</span>
          </TabsTrigger>
          <TabsTrigger value="completed" className="flex items-center gap-1">
            <ClipboardCheck className="h-4 w-4" />
            <span>Completed</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="space-y-4">
            {carePlans.map(plan => (
              <Card key={plan.id} className="hover:shadow-sm transition-shadow cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-mcn-blue/10 text-mcn-blue flex items-center justify-center mr-3">
                        <User className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{plan.clientName}</CardTitle>
                        <div className="text-sm text-gray-500">
                          {plan.diagnoses.join(', ')}
                        </div>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full
                      ${plan.status === 'Active' ? 'bg-green-100 text-green-800' : 
                        plan.status === 'Needs Review' ? 'bg-amber-100 text-amber-800' : 
                        'bg-blue-100 text-blue-800'}`}
                    >
                      {plan.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-sm">
                      <ClipboardEdit className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-gray-700">Last updated: {plan.lastUpdated}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CalendarClock className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-gray-700">Next review: {plan.nextReview}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-gray-500">GOALS & INTERVENTIONS</h4>
                    {plan.goals.map((goal, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center">
                          {goal.status === 'Achieved' ? (
                            <Check className="h-4 w-4 text-green-500 mr-2" />
                          ) : goal.status === 'In progress' ? (
                            <div className="h-4 w-4 border-2 border-amber-500 rounded-full mr-2"></div>
                          ) : (
                            <div className="h-4 w-4 border-2 border-gray-300 rounded-full mr-2"></div>
                          )}
                          <span className="text-sm">{goal.title}</span>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full
                          ${goal.status === 'Achieved' ? 'bg-green-100 text-green-800' : 
                            goal.status === 'In progress' ? 'bg-amber-100 text-amber-800' : 
                            'bg-gray-100 text-gray-800'}`}
                        >
                          {goal.status}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t flex justify-end space-x-2">
                    <button className="text-xs bg-mcn-blue text-white px-3 py-1.5 rounded hover:bg-mcn-blue/90 transition-colors">
                      Review Care Plan
                    </button>
                    <button className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded hover:bg-gray-200 transition-colors">
                      View Details
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="pending-review">
          <div className="space-y-4">
            {carePlans.filter(plan => plan.status === 'Needs Review').map(plan => (
              // Same card structure as above, just filtered
              <Card key={plan.id} className="hover:shadow-sm transition-shadow cursor-pointer">
                {/* Card content would be the same as above */}
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-mcn-blue/10 text-mcn-blue flex items-center justify-center mr-3">
                        <User className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{plan.clientName}</CardTitle>
                        <div className="text-sm text-gray-500">
                          {plan.diagnoses.join(', ')}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800">
                      {plan.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Same content as above */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-sm">
                      <ClipboardEdit className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-gray-700">Last updated: {plan.lastUpdated}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CalendarClock className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-gray-700">Next review: {plan.nextReview}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-gray-500">GOALS & INTERVENTIONS</h4>
                    {plan.goals.map((goal, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center">
                          {goal.status === 'Achieved' ? (
                            <Check className="h-4 w-4 text-green-500 mr-2" />
                          ) : goal.status === 'In progress' ? (
                            <div className="h-4 w-4 border-2 border-amber-500 rounded-full mr-2"></div>
                          ) : (
                            <div className="h-4 w-4 border-2 border-gray-300 rounded-full mr-2"></div>
                          )}
                          <span className="text-sm">{goal.title}</span>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full
                          ${goal.status === 'Achieved' ? 'bg-green-100 text-green-800' : 
                            goal.status === 'In progress' ? 'bg-amber-100 text-amber-800' : 
                            'bg-gray-100 text-gray-800'}`}
                        >
                          {goal.status}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t flex justify-end space-x-2">
                    <button className="text-xs bg-mcn-blue text-white px-3 py-1.5 rounded hover:bg-mcn-blue/90 transition-colors">
                      Review Care Plan
                    </button>
                    <button className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded hover:bg-gray-200 transition-colors">
                      View Details
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="recently-updated">
          <div className="space-y-4">
            {/* Similar card structure, filtered for recently updated */}
            <Card className="text-center p-8 border border-dashed">
              <div className="mx-auto w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                <ClipboardEdit className="h-6 w-6 text-mcn-blue" />
              </div>
              <h3 className="text-lg font-medium">Recently Updated Care Plans</h3>
              <p className="text-sm text-gray-500 mt-1 mb-4">
                Care plans that have been updated in the last 7 days
              </p>
              <button className="mt-2 text-sm bg-mcn-blue/10 text-mcn-blue px-4 py-2 rounded hover:bg-mcn-blue/20 transition-colors">
                View All Updates
              </button>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="completed">
          <div className="space-y-4">
            {/* Placeholder for completed care plans */}
            <Card className="text-center p-8 border border-dashed">
              <div className="mx-auto w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-3">
                <ClipboardCheck className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-lg font-medium">Completed Care Plans</h3>
              <p className="text-sm text-gray-500 mt-1 mb-4">
                Care plans that have been completed and archived
              </p>
              <button className="mt-2 text-sm bg-green-100 text-green-700 px-4 py-2 rounded hover:bg-green-200 transition-colors">
                View Archive
              </button>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CarePlans;
