
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  BarChart, 
  LineChart, 
  PieChart,
  Activity, 
  TrendingUp, 
  Users, 
  Clock,
  CheckSquare,
  HeartPulse
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import OverviewTab from './analytics/OverviewTab';
import PerformanceTab from './analytics/PerformanceTab';
import ClientOutcomesTab from './analytics/ClientOutcomesTab';
import TrendsTab from './analytics/TrendsTab';

const NurseAnalytics: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="nurse-analytics space-y-6 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{t('nurseAnalytics.title', 'Nurse Analytics')}</h1>
          <p className="text-muted-foreground">
            {t('nurseAnalytics.subtitle', 'Track performance metrics and client outcomes')}
          </p>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 mb-6 w-full">
          <TabsTrigger value="overview" className="flex items-center gap-1">
            <Activity className="h-4 w-4" />
            <span>{t('nurseAnalytics.tab.overview', 'Overview')}</span>
          </TabsTrigger>
          <TabsTrigger value="performance" className="flex items-center gap-1">
            <TrendingUp className="h-4 w-4" />
            <span>{t('nurseAnalytics.tab.performance', 'Performance')}</span>
          </TabsTrigger>
          <TabsTrigger value="clients" className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{t('nurseAnalytics.tab.clients', 'Client Outcomes')}</span>
          </TabsTrigger>
          <TabsTrigger value="trends" className="flex items-center gap-1">
            <LineChart className="h-4 w-4" />
            <span>{t('nurseAnalytics.tab.trends', 'Trends')}</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 w-full">
          <OverviewTab />
        </TabsContent>
        
        <TabsContent value="performance" className="space-y-6 w-full">
          <PerformanceTab />
        </TabsContent>
        
        <TabsContent value="clients" className="space-y-6 w-full">
          <ClientOutcomesTab />
        </TabsContent>
        
        <TabsContent value="trends" className="space-y-6 w-full">
          <TrendsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NurseAnalytics;
