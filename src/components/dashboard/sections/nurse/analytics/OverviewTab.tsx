
import React from 'react';
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

const OverviewTab: React.FC = () => {
  const { t } = useLanguage();

  // Sample KPI data
  const kpiData = [
    { 
      id: 'caseload', 
      title: t('nurseAnalytics.kpi.caseload', 'Active Caseload'), 
      value: 12, 
      change: '+2', 
      icon: Users,
      trend: 'up'
    },
    { 
      id: 'visits', 
      title: t('nurseAnalytics.kpi.visits', 'Completed Visits'), 
      value: 48, 
      change: '+5', 
      icon: CheckSquare,
      trend: 'up'
    },
    { 
      id: 'satisfaction', 
      title: t('nurseAnalytics.kpi.satisfaction', 'Client Satisfaction'), 
      value: '94%', 
      change: '+2%', 
      icon: HeartPulse,
      trend: 'up'
    },
    { 
      id: 'documentation', 
      title: t('nurseAnalytics.kpi.documentation', 'Documentation Compliance'), 
      value: '97%', 
      change: '+3%', 
      icon: Clock,
      trend: 'up'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">
          {t('nurseAnalytics.overview.title', 'Analytics Dashboard')}
        </h2>
        <p className="text-muted-foreground">
          {t('nurseAnalytics.overview.subtitle', 'Key performance indicators and metrics')}
        </p>
      </div>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {kpiData.map((kpi) => (
          <Card key={kpi.id} className="border shadow-sm">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">{kpi.title}</p>
                  <h3 className="text-2xl font-bold">{kpi.value}</h3>
                </div>
                <div className={`p-2 rounded-full ${kpi.trend === 'up' ? 'bg-green-100' : 'bg-blue-100'}`}>
                  <kpi.icon className={`h-5 w-5 ${kpi.trend === 'up' ? 'text-green-600' : 'text-blue-600'}`} />
                </div>
              </div>
              <p className={`text-sm mt-2 ${kpi.trend === 'up' ? 'text-green-600' : 'text-blue-600'}`}>
                {kpi.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <BarChart className="h-5 w-5 text-blue-600" />
              Visit Distribution
            </CardTitle>
            <CardDescription>By type and duration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-50 rounded-md flex items-center justify-center">
              <p className="text-gray-500">Visit distribution chart visualization</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <LineChart className="h-5 w-5 text-green-600" />
              Client Interactions
            </CardTitle>
            <CardDescription>30-day trend</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-50 rounded-md flex items-center justify-center">
              <p className="text-gray-500">Client interactions trend visualization</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Additional Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Activity className="h-5 w-5 text-indigo-600" />
              Health Outcomes
            </CardTitle>
            <CardDescription>Client improvements by condition</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-72 bg-gray-50 rounded-md flex items-center justify-center">
              <p className="text-gray-500">Health outcomes visualization</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <PieChart className="h-5 w-5 text-purple-600" />
              Time Allocation
            </CardTitle>
            <CardDescription>How your time is spent</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-72 bg-gray-50 rounded-md flex items-center justify-center">
              <p className="text-gray-500">Time allocation visualization</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OverviewTab;
