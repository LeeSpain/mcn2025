
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CheckSquare, 
  FileText, 
  ClipboardEdit, 
  PhoneCall, 
  Clipboard 
} from 'lucide-react';

// Mock data for tasks
const pendingTasks = [
  {
    id: 1,
    title: 'Complete Assessment Documentation',
    client: 'Jan de Vries',
    dueDate: 'Today',
    priority: 'high',
    type: 'documentation'
  },
  {
    id: 2,
    title: 'Medication Reconciliation',
    client: 'Anna Koster',
    dueDate: 'Today',
    priority: 'high',
    type: 'medication'
  },
  {
    id: 3,
    title: 'Care Plan Update',
    client: 'Pieter Bakker',
    dueDate: 'Tomorrow',
    priority: 'medium',
    type: 'care-plan'
  },
  {
    id: 4,
    title: 'Physician Call Back',
    client: 'Maria Jansen',
    dueDate: 'Today',
    priority: 'medium',
    type: 'communication'
  }
];

const PendingTasks: React.FC = () => {
  // Get icon based on task type
  const getTaskIcon = (type: string) => {
    switch(type) {
      case 'documentation':
        return <FileText className="h-4 w-4" />;
      case 'medication':
        return <ClipboardEdit className="h-4 w-4" />;
      case 'care-plan':
        return <Clipboard className="h-4 w-4" />;
      case 'communication':
        return <PhoneCall className="h-4 w-4" />;
      default:
        return <CheckSquare className="h-4 w-4" />;
    }
  };
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <CheckSquare className="h-5 w-5 text-mcn-blue" />
          <span>Pending Tasks</span>
          <span className="ml-2 bg-mcn-blue/10 text-mcn-blue text-xs px-2 py-0.5 rounded-full">
            {pendingTasks.length}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-3">
          {pendingTasks.map(task => (
            <div 
              key={task.id}
              className="p-3 border rounded-lg cursor-pointer hover:shadow-sm transition-all"
            >
              <div className="flex justify-between">
                <div className="flex items-start">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3
                    bg-mcn-blue/10 text-mcn-blue`}
                  >
                    {getTaskIcon(task.type)}
                  </div>
                  <div>
                    <div className="font-medium">{task.title}</div>
                    <div className="text-xs text-gray-500">Client: {task.client}</div>
                  </div>
                </div>
                <div>
                  <span className={`text-xs px-2 py-0.5 rounded-full
                    ${task.dueDate === 'Today' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'}`}
                  >
                    Due: {task.dueDate}
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          <button className="w-full text-center text-sm text-mcn-blue hover:underline mt-2">
            View all tasks
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PendingTasks;
