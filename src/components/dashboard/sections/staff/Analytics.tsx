
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, LineChart, PieChart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Analytics: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('dashboard.analytics.title')}</CardTitle>
          <CardDescription>{t('dashboard.analytics.description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="performance">
            <TabsList className="mb-4">
              <TabsTrigger value="performance" className="flex items-center gap-2">
                <BarChart className="h-4 w-4" />
                {t('dashboard.performance')}
              </TabsTrigger>
              <TabsTrigger value="quality" className="flex items-center gap-2">
                <LineChart className="h-4 w-4" />
                {t('dashboard.quality')}
              </TabsTrigger>
              <TabsTrigger value="usage" className="flex items-center gap-2">
                <PieChart className="h-4 w-4" />
                {t('dashboard.usage')}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="performance">
              <p>{t('dashboard.loading')}</p>
            </TabsContent>
            
            <TabsContent value="quality">
              <p>{t('dashboard.loading')}</p>
            </TabsContent>
            
            <TabsContent value="usage">
              <p>{t('dashboard.loading')}</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
