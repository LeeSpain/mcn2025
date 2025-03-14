
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import { Laptop, Wrench, Database, HelpCircle } from 'lucide-react';

const TechnicalSupport: React.FC = () => {
  const { t } = useLanguage();
  
  const supportTools = [
    {
      icon: <Laptop className="h-5 w-5 text-blue-600" />,
      title: t('dashboard.technical.tools.deviceTroubleshooting'),
      description: t('dashboard.technical.tools.deviceDescription')
    },
    {
      icon: <Wrench className="h-5 w-5 text-green-600" />,
      title: t('dashboard.technical.tools.softwareManagement'),
      description: t('dashboard.technical.tools.softwareDescription')
    },
    {
      icon: <Database className="h-5 w-5 text-purple-600" />,
      title: t('dashboard.technical.tools.systemDiagnostics'),
      description: t('dashboard.technical.tools.diagnosticsDescription')
    },
    {
      icon: <HelpCircle className="h-5 w-5 text-amber-600" />,
      title: t('dashboard.technical.tools.remoteSupport'),
      description: t('dashboard.technical.tools.remoteSupportDescription')
    }
  ];
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('dashboard.technical.title')}</CardTitle>
          <CardDescription>{t('dashboard.technical.description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {supportTools.map((tool, index) => (
              <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">{tool.icon}</div>
                    <div>
                      <h3 className="font-medium">{tool.title}</h3>
                      <p className="text-sm text-muted-foreground">{tool.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechnicalSupport;
