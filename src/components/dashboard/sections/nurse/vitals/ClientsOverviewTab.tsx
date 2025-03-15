
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';
import { clientsList } from './vitalsData';

const ClientsOverviewTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Client Vitals Overview</CardTitle>
        <CardDescription>
          Summary of current vital statuses for all clients
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client Name</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Reading</TableHead>
                <TableHead>Heart Rate</TableHead>
                <TableHead>Blood Pressure</TableHead>
                <TableHead>Temperature</TableHead>
                <TableHead>O2 Sat</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientsList.map(client => (
                <TableRow key={client.id}>
                  <TableCell className="font-medium">{client.name}</TableCell>
                  <TableCell>{client.age}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs
                      ${client.status === 'Stable' ? 'bg-green-100 text-green-800' : 
                       client.status === 'Needs Attention' ? 'bg-red-100 text-red-800' : 
                       'bg-blue-100 text-blue-800'}`}>
                      {client.status}
                    </span>
                  </TableCell>
                  <TableCell className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-gray-500" />
                    {client.lastReading}
                  </TableCell>
                  <TableCell>72 bpm</TableCell>
                  <TableCell>120/80</TableCell>
                  <TableCell>98.6°F</TableCell>
                  <TableCell>98%</TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Button variant="outline" size="sm">History</Button>
                      <Button variant="outline" size="sm">Add</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientsOverviewTab;
