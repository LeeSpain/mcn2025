
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, FileText } from 'lucide-react';

const KnowledgeBaseCard: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Knowledge Base</CardTitle>
        <CardDescription>Quick access resources</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-3 bg-blue-50 border border-blue-100 rounded-md flex items-center justify-between">
          <div className="flex items-center">
            <FileText className="h-5 w-5 text-blue-500 mr-2" />
            <span>Device Troubleshooting Guide</span>
          </div>
          <ChevronRight className="h-4 w-4 text-blue-500" />
        </div>
        
        <div className="p-3 bg-blue-50 border border-blue-100 rounded-md flex items-center justify-between">
          <div className="flex items-center">
            <FileText className="h-5 w-5 text-blue-500 mr-2" />
            <span>Medication Alert FAQs</span>
          </div>
          <ChevronRight className="h-4 w-4 text-blue-500" />
        </div>
        
        <div className="p-3 bg-blue-50 border border-blue-100 rounded-md flex items-center justify-between">
          <div className="flex items-center">
            <FileText className="h-5 w-5 text-blue-500 mr-2" />
            <span>App Navigation Tutorial</span>
          </div>
          <ChevronRight className="h-4 w-4 text-blue-500" />
        </div>
        
        <div className="p-3 bg-blue-50 border border-blue-100 rounded-md flex items-center justify-between">
          <div className="flex items-center">
            <FileText className="h-5 w-5 text-blue-500 mr-2" />
            <span>Service Plan Comparison</span>
          </div>
          <ChevronRight className="h-4 w-4 text-blue-500" />
        </div>

        <Button variant="outline" className="w-full">
          Search Knowledge Base
        </Button>
      </CardContent>
    </Card>
  );
};

export default KnowledgeBaseCard;
