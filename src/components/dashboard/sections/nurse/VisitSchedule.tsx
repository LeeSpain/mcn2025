
import React, { useState } from 'react';
import { Video, Filter, PlusCircle, Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import UpcomingVisits from './dashboard/UpcomingVisits';
import { useLanguage } from '@/context/LanguageContext';
import { format, addMonths, subMonths } from 'date-fns';

const VisitSchedule: React.FC = () => {
  const [viewType, setViewType] = useState<'day' | 'week' | 'month'>('day');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const { t } = useLanguage();
  
  // Navigate between months
  const previousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const resetToToday = () => {
    setSelectedDate(new Date());
    setCurrentMonth(new Date());
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{t('nurse.schedule.title')}</h1>
          <p className="text-muted-foreground">
            {t('nurse.schedule.subtitle')}
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex space-x-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-1.5">
                <CalendarIcon className="h-4 w-4" />
                <span>{format(selectedDate, 'MMM d, yyyy')}</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <div className="p-2 flex items-center justify-between">
                <Button variant="ghost" size="sm" onClick={previousMonth}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="text-sm font-medium">
                  {format(currentMonth, 'MMMM yyyy')}
                </div>
                <Button variant="ghost" size="sm" onClick={nextMonth}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  if (date) {
                    setSelectedDate(date);
                  }
                }}
                month={currentMonth}
                onMonthChange={setCurrentMonth}
                className="pointer-events-auto"
                modifiers={{
                  booked: (date) => {
                    // Highlight dates with appointments
                    // This is a simplified example - in a real app
                    // you would check against actual appointment dates
                    return [1, 5, 10, 15, 20, 25].includes(date.getDate());
                  }
                }}
                modifiersStyles={{
                  booked: {
                    fontWeight: 'bold',
                    border: '2px solid currentColor',
                    color: 'var(--mcn-blue)'
                  }
                }}
              />
              <div className="p-2 border-t">
                <Button variant="ghost" size="sm" onClick={resetToToday} className="w-full">
                  Today
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          <button className="flex items-center gap-1.5 px-3 py-2 bg-white border rounded-md text-sm">
            <Filter className="h-4 w-4" />
            <span>{t('nurse.schedule.filter')}</span>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 bg-mcn-blue text-white rounded-md text-sm">
            <PlusCircle className="h-4 w-4" />
            <span>{t('nurse.schedule.newSession')}</span>
          </button>
        </div>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl">{t('nurse.schedule.title')}</CardTitle>
            <div className="flex border rounded-md overflow-hidden">
              <button 
                className={`px-3 py-1.5 text-sm font-medium ${viewType === 'day' ? 'bg-mcn-blue text-white' : 'bg-white'}`}
                onClick={() => setViewType('day')}
              >
                {t('nurse.schedule.day')}
              </button>
              <button 
                className={`px-3 py-1.5 text-sm font-medium ${viewType === 'week' ? 'bg-mcn-blue text-white' : 'bg-white'}`}
                onClick={() => setViewType('week')}
              >
                {t('nurse.schedule.week')}
              </button>
              <button 
                className={`px-3 py-1.5 text-sm font-medium ${viewType === 'month' ? 'bg-mcn-blue text-white' : 'bg-white'}`}
                onClick={() => setViewType('month')}
              >
                {t('nurse.schedule.month')}
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-2">
          {viewType === 'day' && (
            <div>
              <div className="mb-4 flex justify-between items-center">
                <h3 className="text-lg font-medium">{format(selectedDate, 'EEEE, MMMM d, yyyy')}</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => setSelectedDate(prev => new Date(prev.setDate(prev.getDate() - 1)))}>
                    <ChevronLeft className="h-4 w-4" />
                    Previous Day
                  </Button>
                  <Button variant="outline" size="sm" onClick={resetToToday}>Today</Button>
                  <Button variant="outline" size="sm" onClick={() => setSelectedDate(prev => new Date(prev.setDate(prev.getDate() + 1)))}>
                    Next Day
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <UpcomingVisits fullView={true} selectedDate={selectedDate} />
            </div>
          )}
          {viewType === 'week' && (
            <div className="text-center p-12 border border-dashed rounded-lg">
              <CalendarIcon className="h-12 w-12 mx-auto text-gray-300" />
              <h3 className="mt-4 text-lg font-medium">{t('nurse.schedule.weekly')}</h3>
              <p className="text-sm text-gray-500 mt-1">{t('nurse.schedule.weeklyDescription')}</p>
              <Button className="mt-4" onClick={() => window.location.hash = 'appointments'}>
                Go to Weekly Schedule
              </Button>
            </div>
          )}
          {viewType === 'month' && (
            <div>
              <div className="mb-6 flex justify-between items-center">
                <h3 className="text-lg font-medium">{format(currentMonth, 'MMMM yyyy')}</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={previousMonth}>
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setCurrentMonth(new Date())}>
                    Current Month
                  </Button>
                  <Button variant="outline" size="sm" onClick={nextMonth}>
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="max-w-3xl mx-auto">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => date && setSelectedDate(date)}
                  month={currentMonth}
                  onMonthChange={setCurrentMonth}
                  className="pointer-events-auto rounded border"
                  modifiers={{
                    booked: (date) => {
                      return [1, 5, 10, 15, 20, 25].includes(date.getDate());
                    }
                  }}
                  modifiersStyles={{
                    booked: {
                      fontWeight: 'bold',
                      border: '2px solid currentColor',
                      color: 'var(--mcn-blue)'
                    }
                  }}
                />
                <div className="mt-4 flex justify-center space-x-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Video Call</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Phone Call</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">In-Person</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default VisitSchedule;
