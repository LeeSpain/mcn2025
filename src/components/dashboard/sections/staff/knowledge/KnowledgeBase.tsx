
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';

const KnowledgeBase: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>Knowledge Base</span>
          <div className="relative">
            <Search className="h-4 w-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search articles..."
              className="pl-8 h-8 rounded-md text-sm border border-input bg-background hover:bg-accent hover:text-accent-foreground px-3" 
            />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="p-2 hover:bg-slate-50 rounded cursor-pointer">
            <div className="font-medium">How to reset BBrain devices</div>
            <div className="text-xs text-muted-foreground">Last updated: 2 days ago • Used 128 times this week</div>
          </div>
          <div className="p-2 hover:bg-slate-50 rounded cursor-pointer">
            <div className="font-medium">Troubleshooting network connectivity</div>
            <div className="text-xs text-muted-foreground">Last updated: 1 day ago • Used 96 times this week</div>
          </div>
          <div className="p-2 hover:bg-slate-50 rounded cursor-pointer">
            <div className="font-medium">Setting up family access permissions</div>
            <div className="text-xs text-muted-foreground">Last updated: 3 days ago • Used 87 times this week</div>
          </div>
          <div className="p-2 hover:bg-slate-50 rounded cursor-pointer">
            <div className="font-medium">Medication reminder configuration</div>
            <div className="text-xs text-muted-foreground">Last updated: 5 days ago • Used 74 times this week</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default KnowledgeBase;
