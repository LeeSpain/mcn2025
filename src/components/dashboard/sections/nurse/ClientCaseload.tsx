
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  UserPlus, 
  Filter, 
  Search, 
  ListFilter,
  HeartPulse,
  AlertCircle,
  CheckCircle,
  ArrowDown,
  Clock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import ClientCaseloadOverview from './dashboard/ClientCaseloadOverview';

// Sample client data
const clients = [
  { 
    id: 1, 
    name: 'Jan de Vries', 
    age: 72,
    lastVisit: '1 day ago',
    nextVisit: 'Today, 10:00 AM',
    risk: 'High',
    conditions: 'Hypertension, Diabetes',
    status: 'Active Monitoring'
  },
  { 
    id: 2, 
    name: 'Anna Koster', 
    age: 68,
    lastVisit: '2 days ago',
    nextVisit: 'Today, 2:00 PM',
    risk: 'High',
    conditions: 'COPD, Post-Surgery',
    status: 'Hospital Discharge'
  },
  { 
    id: 3, 
    name: 'Pieter Bakker', 
    age: 81,
    lastVisit: '3 days ago',
    nextVisit: 'Tomorrow, 11:00 AM',
    risk: 'Medium',
    conditions: 'Arthritis, Pain Management',
    status: 'Stable'
  },
  { 
    id: 4, 
    name: 'Maria Jansen', 
    age: 75,
    lastVisit: '2 days ago',
    nextVisit: 'Tomorrow, 3:30 PM',
    risk: 'Medium',
    conditions: 'Diabetes, Heart Disease',
    status: 'Stable'
  },
  { 
    id: 5, 
    name: 'Thomas Visser', 
    age: 79,
    lastVisit: '4 days ago',
    nextVisit: 'Friday, 9:00 AM',
    risk: 'Low',
    conditions: 'Blood Pressure Monitoring',
    status: 'Stable'
  },
];

const ClientCaseload: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    client.conditions.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const getRiskBadgeClass = (risk: string) => {
    switch(risk) {
      case 'High':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Client Caseload</h1>
          <p className="text-muted-foreground">
            Manage and monitor your assigned clients
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex space-x-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search clients..."
              className="pl-9 pr-4 py-2 text-sm w-full sm:w-auto min-w-[200px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="sm" className="flex items-center gap-1.5">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Button className="flex items-center gap-1.5 bg-mcn-blue text-white">
            <UserPlus className="h-4 w-4" />
            <span>Add Client</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all" className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>All Clients ({clients.length})</span>
          </TabsTrigger>
          <TabsTrigger value="high-risk" className="flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            <span>High Risk ({clients.filter(c => c.risk === 'High').length})</span>
          </TabsTrigger>
          <TabsTrigger value="medium-risk" className="flex items-center gap-1">
            <HeartPulse className="h-4 w-4" />
            <span>Medium Risk ({clients.filter(c => c.risk === 'Medium').length})</span>
          </TabsTrigger>
          <TabsTrigger value="stable" className="flex items-center gap-1">
            <CheckCircle className="h-4 w-4" />
            <span>Stable ({clients.filter(c => c.risk === 'Low').length})</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Complete Client List</CardTitle>
              <CardDescription>View and manage all clients in your caseload</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Age</TableHead>
                      <TableHead>Risk Level</TableHead>
                      <TableHead>Conditions</TableHead>
                      <TableHead>Last Visit</TableHead>
                      <TableHead>Next Visit</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredClients.map(client => (
                      <TableRow key={client.id}>
                        <TableCell className="font-medium">{client.name}</TableCell>
                        <TableCell>{client.age}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskBadgeClass(client.risk)}`}>
                            {client.risk}
                          </span>
                        </TableCell>
                        <TableCell>{client.conditions}</TableCell>
                        <TableCell className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {client.lastVisit}
                        </TableCell>
                        <TableCell>{client.nextVisit}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">View</Button>
                            <Button variant="outline" size="sm">Visit</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="high-risk">
          <ClientCaseloadOverview fullView={true} filterByRisk="High" />
        </TabsContent>
        
        <TabsContent value="medium-risk">
          <ClientCaseloadOverview fullView={true} filterByRisk="Medium" />
        </TabsContent>
        
        <TabsContent value="stable">
          <ClientCaseloadOverview fullView={true} filterByRisk="Low" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClientCaseload;
