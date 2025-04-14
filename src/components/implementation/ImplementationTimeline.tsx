
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';

interface TimelinePhase {
  phase: string;
  description: string;
  status: 'planned' | 'in-progress' | 'completed' | 'blocked';
  timeline: string;
}

interface ImplementationTimelineProps {
  phases: TimelinePhase[];
}

const ImplementationTimeline: React.FC<ImplementationTimelineProps> = ({ phases }) => {
  const { t } = useLanguage();

  // Helper function to determine status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-amber-500" />;
      case 'blocked':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <HelpCircle className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{t('implementation.timeline.title', 'Implementation Timeline')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline connector line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 z-0"></div>
          
          {/* Timeline phases */}
          <div className="space-y-8 relative z-10">
            {phases.map((phase, index) => (
              <div key={index} className="flex gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center z-10 
                  ${phase.status === 'completed' ? 'bg-green-100' : 
                    phase.status === 'in-progress' ? 'bg-amber-100' : 
                    phase.status === 'blocked' ? 'bg-red-100' : 'bg-blue-100'}`}
                >
                  {getStatusIcon(phase.status)}
                </div>
                <div className="flex-grow pt-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                    <h3 className="font-semibold text-lg">{phase.phase}</h3>
                    <span className="text-sm text-gray-500">{phase.timeline}</span>
                  </div>
                  <p className="text-gray-600">{phase.description}</p>
                  <div className="mt-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${phase.status === 'completed' ? 'bg-green-100 text-green-800' : 
                        phase.status === 'in-progress' ? 'bg-amber-100 text-amber-800' : 
                        phase.status === 'blocked' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}
                    >
                      {t(`implementation.status.${phase.status}`, phase.status)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImplementationTimeline;
