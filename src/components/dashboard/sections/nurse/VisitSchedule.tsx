
import React, { useState } from 'react';
import { Video, Filter, PlusCircle, Calendar as CalendarIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import UpcomingVisits from './dashboard/UpcomingVisits';
import { useLanguage } from '@/context/LanguageContext';

const VisitSchedule: React.FC = () => {
  const [viewType, setViewType] = useState<'day' | 'week' | 'month'>('day');
  const { t } = useLanguage();
  
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
            <UpcomingVisits fullView={true} />
          )}
          {viewType === 'week' && (
            <div className="text-center p-12 border border-dashed rounded-lg">
              <CalendarIcon className="h-12 w-12 mx-auto text-gray-300" />
              <h3 className="mt-4 text-lg font-medium">{t('nurse.schedule.weekly')}</h3>
              <p className="text-sm text-gray-500 mt-1">{t('nurse.schedule.weeklyDescription')}</p>
            </div>
          )}
          {viewType === 'month' && (
            <div className="text-center p-12 border border-dashed rounded-lg">
              <CalendarIcon className="h-12 w-12 mx-auto text-gray-300" />
              <h3 className="mt-4 text-lg font-medium">{t('nurse.schedule.monthly')}</h3>
              <p className="text-sm text-gray-500 mt-1">{t('nurse.schedule.monthlyDescription')}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default VisitSchedule;
