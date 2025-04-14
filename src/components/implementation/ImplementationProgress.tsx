
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface ComponentStatus {
  name: string;
  progress: number;
  status: 'planned' | 'in-progress' | 'completed' | 'blocked';
}

interface ImplementationProgressProps {
  components: ComponentStatus[];
}

const ImplementationProgress: React.FC<ImplementationProgressProps> = ({ components }) => {
  const { t } = useLanguage();
  
  // Calculate overall progress
  const overallProgress = Math.round(
    components.reduce((acc, component) => acc + component.progress, 0) / components.length
  );
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{t('implementation.progress.title', 'Overall Implementation Progress')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Overall progress bar */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">
                {t('implementation.progress.title', 'Overall Progress')}
              </span>
              <span className="font-semibold">{overallProgress}%</span>
            </div>
            <Progress value={overallProgress} className="h-4" />
          </div>
          
          {/* Status Legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
              <span>{t('implementation.status.planned', 'Planned')}</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
              <span>{t('implementation.status.inProgress', 'In Progress')}</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span>{t('implementation.status.completed', 'Completed')}</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <span>{t('implementation.status.blocked', 'Blocked')}</span>
            </div>
          </div>
          
          {/* Component progress bars */}
          <div className="space-y-4 mt-6">
            {components.map((component, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <span className="font-medium">{component.name}</span>
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium
                      ${component.status === 'planned' ? 'bg-blue-100 text-blue-800' : 
                        component.status === 'in-progress' ? 'bg-amber-100 text-amber-800' : 
                        component.status === 'completed' ? 'bg-green-100 text-green-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {t(`implementation.status.${component.status}`, component.status)}
                    </span>
                  </div>
                  <span>{component.progress}%</span>
                </div>
                <Progress value={component.progress} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImplementationProgress;
