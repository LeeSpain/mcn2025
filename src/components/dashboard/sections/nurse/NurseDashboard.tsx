
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  Calendar, 
  Clipboard, 
  Activity, 
  FileText, 
  BookOpen, 
  Shield, 
  BarChart2,
  AlertTriangle,
  Bell,
  Heart,
  Video
} from 'lucide-react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import ClientCaseloadOverview from './dashboard/ClientCaseloadOverview';
import UpcomingVisits from './dashboard/UpcomingVisits';
import ClinicalAlerts from './dashboard/ClinicalAlerts';
import PendingTasks from './dashboard/PendingTasks';
import QuickActions from './dashboard/QuickActions';
import { format } from 'date-fns';
import { useLanguage } from '@/context/LanguageContext';

const NurseDashboard: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  // Handle calendar date selection
  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      // Navigate to visit schedule with the selected date
      window.location.hash = 'visit-schedule';
    }
  };

  return (
    <div className="nurse-dashboard space-y-6 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{t('nurse.dashboard.title', 'Nurse Dashboard')}</h1>
          <p className="text-muted-foreground">
            {t('nurse.dashboard.welcome', 'Welcome, Monique! Manage your client caseload, remote sessions, and clinical interventions')}
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex space-x-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-mcn-blue text-white rounded-md text-sm">
            <Bell className="h-4 w-4" />
            <span>{t('nurse.dashboard.clinicalAlerts', 'Clinical Alerts')}</span>
            <span className="ml-1 bg-white text-mcn-blue rounded-full h-5 w-5 flex items-center justify-center text-xs font-medium">5</span>
          </button>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-6 w-full">
          <TabsTrigger value="overview" className="flex items-center gap-1">
            <Activity className="h-4 w-4" />
            <span>{t('nurse.dashboard.tabs.overview', 'Overview')}</span>
          </TabsTrigger>
          <TabsTrigger value="clients" className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{t('nurse.dashboard.tabs.clientCaseload', 'Client Caseload')}</span>
          </TabsTrigger>
          <TabsTrigger value="visits" className="flex items-center gap-1">
            <Video className="h-4 w-4" />
            <span>{t('nurse.dashboard.tabs.todaysRelex', 'Today\'s Relex')}</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Client Caseload Overview */}
              <ClientCaseloadOverview />
              
              {/* Upcoming Visits Section */}
              <UpcomingVisits />
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              {/* Quick Calendar */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-md">{t('nurse.dashboard.calendar', 'Calendar')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CalendarComponent
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    className="pointer-events-auto border rounded-md"
                    modifiers={{
                      booked: (date) => {
                        // Highlight dates with appointments (sample data)
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
                  <div className="mt-2 space-y-1">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full justify-start gap-2"
                      onClick={() => window.location.hash = 'visit-schedule'}
                    >
                      <Calendar className="h-4 w-4" />
                      {t('nurse.dashboard.scheduleManager', 'Schedule Manager')}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full justify-start gap-2"
                      onClick={() => window.location.hash = 'appointments'}
                    >
                      <Video className="h-4 w-4" />
                      {t('nurse.dashboard.viewAppointments', 'View Appointments')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Clinical Alerts */}
              <ClinicalAlerts />
              
              {/* Pending Tasks */}
              <PendingTasks />
              
              {/* Quick Actions */}
              <QuickActions />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="clients" className="space-y-6 w-full">
          <div className="grid grid-cols-1 gap-6 w-full">
            <ClientCaseloadOverview fullView={true} />
          </div>
        </TabsContent>
        
        <TabsContent value="visits" className="space-y-6 w-full">
          <div className="grid grid-cols-1 gap-6 w-full">
            <UpcomingVisits fullView={true} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NurseDashboard;
