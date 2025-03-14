
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Plus, 
  ClipboardEdit, 
  FileText, 
  Calendar, 
  MessageSquare, 
  Phone,
  Clock
} from 'lucide-react';

const QuickActions: React.FC = () => {
  const actions = [
    {
      id: 1,
      title: 'Document Visit',
      icon: FileText,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 2,
      title: 'Schedule Visit',
      icon: Calendar,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 3,
      title: 'Update Care Plan',
      icon: ClipboardEdit,
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 4,
      title: 'Team Message',
      icon: MessageSquare,
      color: 'bg-amber-100 text-amber-600'
    },
    {
      id: 5,
      title: 'Start Call',
      icon: Phone,
      color: 'bg-red-100 text-red-600'
    },
    {
      id: 6,
      title: 'Log Time',
      icon: Clock,
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="grid grid-cols-2 gap-2">
          {actions.map(action => (
            <button
              key={action.id}
              className="p-3 border rounded-lg flex flex-col items-center justify-center hover:shadow-sm transition-all hover:border-mcn-blue"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${action.color}`}>
                <action.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">{action.title}</span>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
