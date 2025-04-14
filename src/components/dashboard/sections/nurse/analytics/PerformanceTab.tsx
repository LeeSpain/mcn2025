
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  Clock, 
  CheckSquare, 
  AlertTriangle, 
  Clipboard, 
  Users,
  TrendingUp
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const PerformanceTab: React.FC = () => {
  const { t } = useLanguage();
  
  // Sample performance metrics
  const performanceMetrics = [
    {
      title: t('nurseAnalytics.metric.visitCount', 'Visit Count'),
      current: 48,
      target: 45,
      progress: 106, // percentage
      icon: Users,
      status: 'above-target'
    },
    {
      title: t('nurseAnalytics.metric.clientSatisfaction', 'Client Satisfaction'),
      current: 94,
      target: 90,
      progress: 104, // percentage
      icon: CheckSquare,
      status: 'above-target'
    },
    {
      title: t('nurseAnalytics.metric.responseTime', 'Response Time'),
      current: 22, // minutes
      target: 30,
      progress: 126, // percentage (lower is better)
      icon: Clock,
      status: 'above-target'
    },
    {
      title: t('nurseAnalytics.metric.caseCompletion', 'Case Completion'),
      current: 85,
      target: 90,
      progress: 94, // percentage
      icon: Clipboard,
      status: 'below-target'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">
          {t('nurseAnalytics.performance.title', 'Performance Metrics')}
        </h2>
        <p className="text-muted-foreground">
          {t('nurseAnalytics.performance.subtitle', 'Track your nursing performance over time')}
        </p>
      </div>
      
      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {performanceMetrics.map((metric, index) => (
          <Card key={index} className="border shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <metric.icon className="h-5 w-5 text-blue-600" />
                  {metric.title}
                </CardTitle>
                <div className={`px-2 py-1 rounded-full text-xs font-medium 
                  ${metric.status === 'above-target' ? 'bg-green-100 text-green-800' : 
                    metric.status === 'on-target' ? 'bg-blue-100 text-blue-800' : 
                    'bg-amber-100 text-amber-800'}`}>
                  {metric.status === 'above-target' ? 'Above Target' : 
                   metric.status === 'on-target' ? 'On Target' : 'Below Target'}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mt-2">
                <div className="flex justify-between mb-1">
                  <span className="text-lg font-bold">{metric.current}</span>
                  <span className="text-gray-500">Target: {metric.target}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      metric.status === 'above-target' ? 'bg-green-500' : 
                      metric.status === 'on-target' ? 'bg-blue-500' : 
                      'bg-amber-500'
                    }`} 
                    style={{ width: `${Math.min(metric.progress, 100)}%` }}>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-sm font-medium mb-2">Trend (Last 30 days)</h4>
                <div className="h-20 bg-gray-50 rounded-md flex items-center justify-center">
                  <p className="text-gray-500 text-xs">Performance trend visualization</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Historical Performance */}
      <Card className="border shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            Performance History
          </CardTitle>
          <CardDescription>6-month performance trends</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 bg-gray-50 rounded-md flex items-center justify-center">
            <p className="text-gray-500">Performance history visualization</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceTab;
