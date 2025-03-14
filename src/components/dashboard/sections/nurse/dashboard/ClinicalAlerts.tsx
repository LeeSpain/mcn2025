
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Heart, Pill, HeartPulse, Activity } from 'lucide-react';

// Mock data for clinical alerts
const clinicalAlerts = [
  {
    id: 1,
    clientName: 'Jan de Vries',
    issue: 'Missed medication - Blood pressure medication (2 doses)',
    severity: 'high',
    time: '2 hours ago',
    type: 'medication'
  },
  {
    id: 2,
    clientName: 'Anna Koster',
    issue: 'Elevated blood pressure (160/95 mmHg)',
    severity: 'high',
    time: '4 hours ago',
    type: 'vitals'
  },
  {
    id: 3,
    clientName: 'Pieter Bakker',
    issue: 'Reported increased pain level (7/10)',
    severity: 'medium',
    time: '1 day ago',
    type: 'symptom'
  },
  {
    id: 4, 
    clientName: 'Maria Jansen',
    issue: 'Blood glucose level outside normal range (250 mg/dL)',
    severity: 'medium',
    time: '6 hours ago',
    type: 'vitals'
  }
];

const ClinicalAlerts: React.FC = () => {
  // Icon mapping based on alert type
  const getAlertIcon = (type: string) => {
    switch(type) {
      case 'medication':
        return <Pill className="h-4 w-4" />;
      case 'vitals':
        return <HeartPulse className="h-4 w-4" />;
      case 'symptom':
        return <Activity className="h-4 w-4" />;
      default:
        return <AlertTriangle className="h-4 w-4" />;
    }
  };
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          <span>Clinical Alerts</span>
          <span className="ml-2 bg-amber-100 text-amber-800 text-xs px-2 py-0.5 rounded-full">
            {clinicalAlerts.length} new
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-3">
          {clinicalAlerts.map(alert => (
            <div 
              key={alert.id}
              className={`p-3 border rounded-lg cursor-pointer hover:shadow-sm transition-all
                ${alert.severity === 'high' ? 'border-l-4 border-l-red-500' : 
                  alert.severity === 'medium' ? 'border-l-4 border-l-amber-500' : 
                  'border-l-4 border-l-green-500'}`}
            >
              <div className="flex items-start">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3
                  ${alert.severity === 'high' ? 'bg-red-100 text-red-600' : 
                    alert.severity === 'medium' ? 'bg-amber-100 text-amber-600' : 
                    'bg-green-100 text-green-600'}`}
                >
                  {getAlertIcon(alert.type)}
                </div>
                <div>
                  <div className="font-medium">{alert.clientName}</div>
                  <div className="text-sm text-gray-700">{alert.issue}</div>
                  <div className="text-xs text-gray-500 mt-1">{alert.time}</div>
                </div>
              </div>
            </div>
          ))}
          
          <button className="w-full text-center text-sm text-mcn-blue hover:underline mt-2">
            View all alerts
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClinicalAlerts;
