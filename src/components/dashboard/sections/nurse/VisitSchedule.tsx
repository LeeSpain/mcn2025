
import React, { useState } from 'react';
import { Video, Filter, PlusCircle, Calendar as CalendarIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import UpcomingVisits from './dashboard/UpcomingVisits';

const VisitSchedule: React.FC = () => {
  const [viewType, setViewType] = useState<'day' | 'week' | 'month'>('day');
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Remote Schedule</h1>
          <p className="text-muted-foreground">
            Manage your remote video and call sessions with clients
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex space-x-2">
          <button className="flex items-center gap-1.5 px-3 py-2 bg-white border rounded-md text-sm">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 bg-mcn-blue text-white rounded-md text-sm">
            <PlusCircle className="h-4 w-4" />
            <span>New Session</span>
          </button>
        </div>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl">Remote Schedule</CardTitle>
            <div className="flex border rounded-md overflow-hidden">
              <button 
                className={`px-3 py-1.5 text-sm font-medium ${viewType === 'day' ? 'bg-mcn-blue text-white' : 'bg-white'}`}
                onClick={() => setViewType('day')}
              >
                Day
              </button>
              <button 
                className={`px-3 py-1.5 text-sm font-medium ${viewType === 'week' ? 'bg-mcn-blue text-white' : 'bg-white'}`}
                onClick={() => setViewType('week')}
              >
                Week
              </button>
              <button 
                className={`px-3 py-1.5 text-sm font-medium ${viewType === 'month' ? 'bg-mcn-blue text-white' : 'bg-white'}`}
                onClick={() => setViewType('month')}
              >
                Month
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-2">
          {viewType === 'day' && (
            <UpcomingVisits fullView={true} />
          )}
          {viewType === 'week' && (
            <div className="text-center p-12 border border-dashed rounded-lg">
              <CalendarIcon className="h-12 w-12 mx-auto text-gray-300" />
              <h3 className="mt-4 text-lg font-medium">Weekly Remote Calendar</h3>
              <p className="text-sm text-gray-500 mt-1">Weekly schedule would be displayed here</p>
            </div>
          )}
          {viewType === 'month' && (
            <div className="text-center p-12 border border-dashed rounded-lg">
              <CalendarIcon className="h-12 w-12 mx-auto text-gray-300" />
              <h3 className="mt-4 text-lg font-medium">Monthly Remote Calendar</h3>
              <p className="text-sm text-gray-500 mt-1">Monthly schedule would be displayed here</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default VisitSchedule;
