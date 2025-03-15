
import React from 'react';
import { Video, FileText, Lightbulb, BookOpen } from 'lucide-react';
import { toast } from 'sonner';

export const getTypeIcon = (type: string) => {
  switch(type) {
    case 'Video':
      return <Video className="h-5 w-5 text-blue-500" />;
    case 'Article':
      return <FileText className="h-5 w-5 text-green-500" />;
    case 'Interactive':
      return <Lightbulb className="h-5 w-5 text-purple-500" />;
    case 'PDF Guide':
      return <BookOpen className="h-5 w-5 text-red-500" />;
    default:
      return <FileText className="h-5 w-5 text-gray-500" />;
  }
};

export const getStatusBadge = (status: string) => {
  switch(status) {
    case 'Completed':
      return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Completed</span>;
    case 'In Progress':
      return <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs">In Progress</span>;
    case 'Not Started':
      return <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Not Started</span>;
    default:
      return <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">{status}</span>;
  }
};

export const handleAssignResource = (title: string) => {
  toast.success(`Resource Assigned: ${title}`, {
    description: "The resource has been assigned to the client.",
  });
};

export const handleViewResource = (title: string) => {
  toast.info(`Viewing Resource: ${title}`, {
    description: "Opening resource viewer...",
  });
};
