
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';

const TechnicalSupport: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('dashboard.technical.title')}</CardTitle>
          <CardDescription>{t('dashboard.technical.description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{t('dashboard.loading')}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechnicalSupport;
