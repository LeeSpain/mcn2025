
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Plus, Filter, Clock, CheckCircle } from 'lucide-react';
import { getStatusBadge } from '../utils/helpers';
import { educationAssignments } from '../utils/data';

const AssignmentsTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>Client Assignments</CardTitle>
              <CardDescription>
                Track and manage educational materials assigned to clients
              </CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search assignments..." 
                  className="pl-8 pr-4 py-2 border rounded-md w-full sm:w-48"
                />
              </div>
              <Button size="sm" className="gap-1">
                <Plus className="h-4 w-4" />
                New Assignment
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Client</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Resource</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Assigned Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Progress</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Due Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {educationAssignments.map((assignment) => (
                  <tr key={assignment.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{assignment.client}</td>
                    <td className="py-3 px-4">{assignment.material}</td>
                    <td className="py-3 px-4">{assignment.assignedDate}</td>
                    <td className="py-3 px-4">{getStatusBadge(assignment.status)}</td>
                    <td className="py-3 px-4">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${
                            assignment.status === 'Completed' ? 'bg-green-500' : 
                            assignment.status === 'In Progress' ? 'bg-amber-500' : 'bg-gray-300'
                          }`} 
                          style={{ width: `${assignment.progress}%` }}
                        ></div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1 text-gray-400" />
                        {assignment.dueDate}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Review
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssignmentsTab;
