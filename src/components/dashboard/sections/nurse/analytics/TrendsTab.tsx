
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  TrendingUp, 
  BarChart, 
  Calendar,
  LineChart,
  ArrowUpRight,
  ArrowDownRight,
  Dices
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const TrendsTab: React.FC = () => {
  const { t } = useLanguage();
  const [timeRange, setTimeRange] = useState('6m');
  
  // Sample trend metrics
  const trendMetrics = [
    {
      name: 'Client Engagement',
      value: '↑ 12%',
      trend: 'up',
      description: 'More clients actively participating in care'
    },
    {
      name: 'Treatment Adherence',
      value: '↑ 8%',
      trend: 'up',
      description: 'Improved medication and therapy adherence'
    },
    {
      name: 'Hospitalization Rate',
      value: '↓ 15%',
      trend: 'down',
      description: 'Fewer emergency admissions'
    },
    {
      name: 'Health Self-Management',
      value: '↑ 10%',
      trend: 'up',
      description: 'Better client self-care capabilities'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            {t('nurseAnalytics.trends.title', 'Trend Analysis')}
          </h2>
          <p className="text-muted-foreground">
            {t('nurseAnalytics.trends.subtitle', 'Long-term trends and patterns')}
          </p>
        </div>
        <div className="mt-3 sm:mt-0">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1m">Last Month</SelectItem>
              <SelectItem value="3m">Last 3 Months</SelectItem>
              <SelectItem value="6m">Last 6 Months</SelectItem>
              <SelectItem value="1y">Last Year</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Key Trend Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {trendMetrics.map((metric, index) => (
          <Card key={index} className="border shadow-sm">
            <CardContent className="p-4 flex flex-col h-full">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{metric.name}</h3>
                {metric.trend === 'up' ? (
                  <ArrowUpRight className="h-5 w-5 text-green-600" />
                ) : (
                  <ArrowDownRight className="h-5 w-5 text-blue-600" />
                )}
              </div>
              <div className="mt-auto">
                <p className={`text-lg font-bold ${
                  metric.trend === 'up' && !metric.name.includes('Rate') ? 'text-green-600' : 
                  metric.trend === 'down' && metric.name.includes('Rate') ? 'text-green-600' : 'text-blue-600'
                }`}>{metric.value}</p>
                <p className="text-xs text-gray-500 mt-1">{metric.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Main Trend Charts */}
      <Card className="border shadow-sm mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <LineChart className="h-5 w-5 text-blue-600" />
            Long-term Health Outcome Trends
          </CardTitle>
          <CardDescription>Aggregate client health metrics over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 bg-gray-50 rounded-md flex items-center justify-center">
            <p className="text-gray-500">Long-term health trends visualization</p>
          </div>
        </CardContent>
      </Card>
      
      {/* Comparative Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <BarChart className="h-5 w-5 text-purple-600" />
              Comparative Analysis
            </CardTitle>
            <CardDescription>Your performance vs. team average</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-50 rounded-md flex items-center justify-center">
              <p className="text-gray-500">Comparative analysis visualization</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Dices className="h-5 w-5 text-orange-600" />
              Predictive Insights
            </CardTitle>
            <CardDescription>AI-powered outcome predictions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-50 rounded-md flex items-center justify-center">
              <p className="text-gray-500">Predictive insights visualization</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Seasonal Patterns */}
      <Card className="border shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5 text-green-600" />
            Seasonal Patterns
          </CardTitle>
          <CardDescription>Identify recurring patterns in health metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-72 bg-gray-50 rounded-md flex items-center justify-center">
            <p className="text-gray-500">Seasonal patterns visualization</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrendsTab;
