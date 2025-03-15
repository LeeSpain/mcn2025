
import React from 'react';
import { CheckCircle, Search, Plus, Award, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { educationAssignments, topPerformers } from '../utils/data';
import { getStatusBadge } from '../utils/helpers';

const AssignmentsTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Client Assignments</CardTitle>
              <CardDescription>
                Track educational assignments for clients
              </CardDescription>
            </div>
            <div className="relative">
              <Search className="h-4 w-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search assignments..." 
                className="pl-8 pr-4 py-2 border rounded-md w-48" 
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead>Educational Material</TableHead>
                  <TableHead>Assigned Date</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {educationAssignments.map(assignment => (
                  <TableRow key={assignment.id}>
                    <TableCell className="font-medium">{assignment.client}</TableCell>
                    <TableCell>{assignment.material}</TableCell>
                    <TableCell>{assignment.assignedDate}</TableCell>
                    <TableCell>{assignment.dueDate}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                          <div 
                            className={`h-2.5 rounded-full ${
                              assignment.progress === 100 ? 'bg-green-500' : 
                              assignment.progress > 50 ? 'bg-amber-500' : 
                              assignment.progress > 0 ? 'bg-orange-500' : 'bg-red-500'
                            }`} 
                            style={{ width: `${assignment.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-xs">{assignment.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(assignment.status)}</TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button variant="outline" size="sm">View</Button>
                        <Button variant="outline" size="sm">Remind</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full gap-1">
            <Plus className="h-4 w-4" />
            New Assignment
          </Button>
        </CardFooter>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Assignment Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Completion Rate</span>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-3 mr-2">
                    <div 
                      className="h-3 rounded-full bg-green-500" 
                      style={{ width: '50%' }}
                    ></div>
                  </div>
                  <span>50%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-center">
                  <div className="text-2xl font-bold">{educationAssignments.length}</div>
                  <div className="text-xs text-gray-500">Total Assignments</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    {educationAssignments.filter(a => a.status === 'Completed').length}
                  </div>
                  <div className="text-xs text-gray-500">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    {educationAssignments.filter(a => a.status === 'In Progress').length}
                  </div>
                  <div className="text-xs text-gray-500">In Progress</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Top Performers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {topPerformers.map((performer, idx) => (
              <div key={idx} className="flex items-center p-2 border-b last:border-0">
                <Award className="h-5 w-5 text-amber-500 mr-2" />
                <div className="flex-1">
                  <div className="text-sm font-medium">{performer.client}</div>
                  <div className="text-xs text-gray-500">{performer.assignments} assignments</div>
                </div>
                <span className="font-bold">{performer.completion}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Needs Attention</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {educationAssignments
              .filter(a => a.status !== 'Completed' && new Date(a.dueDate) < new Date('Jun 11, 2023'))
              .map(assignment => (
                <div key={assignment.id} className="flex items-center p-2 border-b last:border-0">
                  <Clock className="h-5 w-5 text-red-500 mr-2" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{assignment.client}</div>
                    <div className="text-xs text-gray-500">Due: {assignment.dueDate}</div>
                  </div>
                  <Button variant="ghost" size="sm">Remind</Button>
                </div>
              ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Export tab icon component for use in tab headers
AssignmentsTab.Icon = () => <CheckCircle className="h-4 w-4" />;

export default AssignmentsTab;
