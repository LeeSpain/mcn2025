
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  ArrowUpCircle, 
  ArrowDownCircle, 
  Clock, 
  AlertCircle, 
  Users,
  HeartPulse,
  Building2,
} from 'lucide-react';

// Mock data
const clientStats = {
  totalClients: 24,
  highPriority: 4,
  mediumPriority: 12,
  lowPriority: 8,
  newAssignments: 2,
  recentDischarges: 3
};

// Mock client data
const priorityClients = [
  { 
    id: 1, 
    name: 'Jan de Vries', 
    priority: 'high', 
    issues: 'Missed medication (2), BP spike', 
    lastVisit: '1 day ago',
    nextVisit: 'Today, 10:00 AM'
  },
  { 
    id: 2, 
    name: 'Anna Koster', 
    priority: 'high', 
    issues: 'Hospital discharge, new medications', 
    lastVisit: '2 days ago',
    nextVisit: 'Today, 2:00 PM'
  },
  { 
    id: 3, 
    name: 'Pieter Bakker', 
    priority: 'medium', 
    issues: 'Pain management, mobility issues', 
    lastVisit: '3 days ago',
    nextVisit: 'Tomorrow, 11:00 AM'
  },
  { 
    id: 4, 
    name: 'Maria Jansen', 
    priority: 'medium', 
    issues: 'Blood glucose monitoring', 
    lastVisit: '2 days ago',
    nextVisit: 'Tomorrow, 3:30 PM'
  },
  { 
    id: 5, 
    name: 'Thomas Visser', 
    priority: 'low', 
    issues: 'Regular checkup', 
    lastVisit: '1 week ago',
    nextVisit: 'Next week, Tuesday'
  },
  { 
    id: 6, 
    name: 'Sophie Klein', 
    priority: 'low', 
    issues: 'Medication review', 
    lastVisit: '5 days ago',
    nextVisit: 'Next week, Thursday'
  }
];

interface ClientCaseloadOverviewProps {
  fullView?: boolean;
  filterByRisk?: string;
}

const ClientCaseloadOverview: React.FC<ClientCaseloadOverviewProps> = ({ 
  fullView = false,
  filterByRisk
}) => {
  // Filter clients by risk level if specified
  let filteredClients = priorityClients;
  if (filterByRisk) {
    const riskLevel = filterByRisk.toLowerCase();
    filteredClients = priorityClients.filter(client => client.priority === riskLevel);
  }
  
  // Limit the number of clients shown unless in full view
  const displayedClients = fullView ? filteredClients : filteredClients.slice(0, 3);
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl">
              {filterByRisk 
                ? `${filterByRisk} Priority Clients`
                : 'Client Caseload'
              }
            </CardTitle>
            <CardDescription>
              {filterByRisk 
                ? `Clients requiring ${filterByRisk.toLowerCase()} attention`
                : 'Prioritized by clinical need'
              }
            </CardDescription>
          </div>
          {!fullView && (
            <button className="text-sm text-mcn-blue hover:underline">
              View all clients
            </button>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        {/* Client Stats Summary */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Total Clients</p>
                <p className="text-xl font-semibold">{clientStats.totalClients}</p>
              </div>
              <Users className="h-8 w-8 text-mcn-blue opacity-70" />
            </div>
          </div>
          
          <div className="bg-red-50 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">High Priority</p>
                <p className="text-xl font-semibold">{clientStats.highPriority}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-500 opacity-70" />
            </div>
          </div>
          
          <div className="bg-green-50 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Recent Discharges</p>
                <p className="text-xl font-semibold">{clientStats.recentDischarges}</p>
              </div>
              <Building2 className="h-8 w-8 text-green-600 opacity-70" />
            </div>
          </div>
        </div>
        
        {/* Priority Clients List */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-500 mb-2">
            {filterByRisk ? `${filterByRisk.toUpperCase()} PRIORITY CLIENTS` : 'PRIORITY CLIENTS'}
          </h3>
          
          {displayedClients.length > 0 ? (
            displayedClients.map(client => (
              <div 
                key={client.id} 
                className="p-3 bg-white border rounded-lg flex items-start hover:shadow-sm transition-shadow cursor-pointer"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 
                  ${client.priority === 'high' ? 'bg-red-100 text-red-600' : 
                    client.priority === 'medium' ? 'bg-amber-100 text-amber-600' : 
                    'bg-green-100 text-green-600'}`}
                >
                  {client.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium">{client.name}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{client.issues}</div>
                    </div>
                    <div className={`text-xs px-2 py-0.5 rounded-full font-medium
                      ${client.priority === 'high' ? 'bg-red-100 text-red-800' : 
                        client.priority === 'medium' ? 'bg-amber-100 text-amber-800' : 
                        'bg-green-100 text-green-800'}`}
                    >
                      {client.priority.charAt(0).toUpperCase() + client.priority.slice(1)}
                    </div>
                  </div>
                  <div className="flex mt-2 text-xs text-gray-500">
                    <div className="flex items-center mr-4">
                      <ArrowDownCircle className="h-3 w-3 mr-1" />
                      <span>Last: {client.lastVisit}</span>
                    </div>
                    <div className="flex items-center">
                      <ArrowUpCircle className="h-3 w-3 mr-1" />
                      <span>Next: {client.nextVisit}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-6 text-center text-gray-500">
              No clients in this priority level
            </div>
          )}
          
          {fullView && displayedClients.length > 0 && (
            <div className="flex justify-center mt-4">
              <button className="text-sm text-mcn-blue border border-mcn-blue rounded-md px-4 py-2 hover:bg-mcn-blue/5 transition-colors">
                Load more clients
              </button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientCaseloadOverview;
