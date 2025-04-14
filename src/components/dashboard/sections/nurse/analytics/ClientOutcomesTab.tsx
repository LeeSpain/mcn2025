
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  HeartPulse, 
  Thermometer, 
  Activity, 
  Pill, 
  Brain,
  AlarmClock,
  Users
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ClientOutcomesTab: React.FC = () => {
  const { t } = useLanguage();
  
  // Sample client health outcomes data
  const clientOutcomes = [
    {
      category: 'Chronic Disease Management',
      improvement: 65,
      clientCount: 8,
      icon: HeartPulse,
      color: 'blue'
    },
    {
      category: 'Medication Adherence',
      improvement: 82,
      clientCount: 12,
      icon: Pill,
      color: 'green'
    },
    {
      category: 'Physical Mobility',
      improvement: 58,
      clientCount: 7,
      icon: Activity,
      color: 'indigo'
    },
    {
      category: 'Cognitive Function',
      improvement: 42,
      clientCount: 5,
      icon: Brain,
      color: 'purple'
    },
    {
      category: 'Self-Care Independence',
      improvement: 70,
      clientCount: 10,
      icon: AlarmClock,
      color: 'orange'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">
          {t('nurseAnalytics.clients.title', 'Client Outcomes')}
        </h2>
        <p className="text-muted-foreground">
          {t('nurseAnalytics.clients.subtitle', 'Health outcomes for clients under your care')}
        </p>
      </div>
      
      {/* Client Outcome Summary */}
      <Card className="border shadow-sm mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-600" />
            Client Health Improvement Summary
          </CardTitle>
          <CardDescription>Overall health improvements across all clients</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-72 bg-gray-50 rounded-md flex items-center justify-center">
            <p className="text-gray-500">Client improvement summary visualization</p>
          </div>
        </CardContent>
      </Card>
      
      {/* Health Outcomes by Category */}
      <h3 className="text-lg font-medium mb-3">Outcomes by Health Category</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {clientOutcomes.map((outcome, index) => (
          <Card key={index} className="border shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-start">
                <div className={`p-2 rounded-full bg-${outcome.color}-100 mr-3`}>
                  <outcome.icon className={`h-5 w-5 text-${outcome.color}-600`} />
                </div>
                <div>
                  <h4 className="font-medium">{outcome.category}</h4>
                  <div className="flex items-center mt-2">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1 text-xs">
                        <span>Improvement</span>
                        <span className="font-medium">{outcome.improvement}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div 
                          className={`h-1.5 rounded-full bg-${outcome.color}-500`} 
                          style={{ width: `${outcome.improvement}%` }}>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Based on {outcome.clientCount} client{outcome.clientCount !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Client-Specific Outcomes */}
      <Card className="border shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Client-Specific Outcomes</CardTitle>
          <CardDescription>Individual client health progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {[1, 2, 3, 4, 5].map((client) => (
              <div key={client} className="py-3 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                    <span className="text-sm font-medium">C{client}</span>
                  </div>
                  <div>
                    <h5 className="font-medium">Client {client}</h5>
                    <p className="text-xs text-gray-500">Last assessment: {7 * client} days ago</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium 
                    ${client % 3 === 0 ? 'bg-amber-100 text-amber-800' : 
                      client % 3 === 1 ? 'bg-green-100 text-green-800' : 
                      'bg-blue-100 text-blue-800'}`}>
                    {client % 3 === 0 ? 'Needs Attention' : 
                     client % 3 === 1 ? 'Improving' : 'Stable'}
                  </div>
                  <button className="ml-3 text-blue-600 text-sm">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientOutcomesTab;
