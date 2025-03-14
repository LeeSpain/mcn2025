
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

// Sample client data
const clientsList = [
  { id: 1, name: 'Sarah Johnson', plan: 'Premium', status: 'Active', lastActive: '2 hours ago', health: 'Good', priority: 'High' },
  { id: 2, name: 'Robert Williams', plan: 'Family', status: 'Active', lastActive: '1 day ago', health: 'Attention', priority: 'Medium' },
  { id: 3, name: 'Emma Davis', plan: 'Basic', status: 'Active', lastActive: '5 hours ago', health: 'Good', priority: 'Low' },
  { id: 4, name: 'James Miller', plan: 'Enterprise', status: 'Inactive', lastActive: '5 days ago', health: 'Review', priority: 'High' },
  { id: 5, name: 'Patricia Brown', plan: 'Premium', status: 'Active', lastActive: '1 hour ago', health: 'Good', priority: 'Low' },
  { id: 6, name: 'Thomas Wilson', plan: 'Family', status: 'Active', lastActive: '3 hours ago', health: 'Good', priority: 'Medium' },
  { id: 7, name: 'Linda Moore', plan: 'Basic', status: 'Active', lastActive: '2 days ago', health: 'Attention', priority: 'High' },
  { id: 8, name: 'Michael Taylor', plan: 'Enterprise', status: 'Active', lastActive: '6 hours ago', health: 'Good', priority: 'Medium' },
];

const ClientManagementCard: React.FC = () => {
  const getHealthStatusClass = (status: string) => {
    switch(status) {
      case 'Good':
        return 'text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs';
      case 'Attention':
        return 'text-amber-600 bg-amber-100 px-2 py-1 rounded-full text-xs';
      case 'Review':
        return 'text-red-600 bg-red-100 px-2 py-1 rounded-full text-xs';
      default:
        return 'text-gray-600 bg-gray-100 px-2 py-1 rounded-full text-xs';
    }
  };

  const getPriorityClass = (priority: string) => {
    switch(priority) {
      case 'High':
        return 'text-red-600 bg-red-100 px-2 py-1 rounded-full text-xs';
      case 'Medium':
        return 'text-amber-600 bg-amber-100 px-2 py-1 rounded-full text-xs';
      case 'Low':
        return 'text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs';
      default:
        return 'text-blue-600 bg-blue-100 px-2 py-1 rounded-full text-xs';
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Client Management</CardTitle>
        <CardDescription>Overview of all clients and their status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead>Health</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientsList.map((client) => (
                <TableRow key={client.id}>
                  <TableCell className="font-medium">{client.id}</TableCell>
                  <TableCell>{client.name}</TableCell>
                  <TableCell>{client.plan}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      client.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {client.status}
                    </span>
                  </TableCell>
                  <TableCell>{client.lastActive}</TableCell>
                  <TableCell>
                    <span className={getHealthStatusClass(client.health)}>
                      {client.health}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={getPriorityClass(client.priority)}>
                      {client.priority}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" className="mr-2">View</Button>
                    <Button variant="outline" size="sm">Assist</Button>
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

export default ClientManagementCard;
