
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HelpCircle, BookOpen, MessageSquare } from 'lucide-react';

const HelpSupport: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-1.5">
        <h2 className="text-2xl font-semibold tracking-tight">Help & Support</h2>
        <p className="text-muted-foreground">Find help and resources for using MCN services</p>
      </div>

      <Tabs defaultValue="support" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="support" className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4" />
            Support Center
          </TabsTrigger>
          <TabsTrigger value="learning" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Learning Resources
          </TabsTrigger>
          <TabsTrigger value="feedback" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Feedback
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="support">
          <Card>
            <CardHeader>
              <CardTitle>Support Center</CardTitle>
              <CardDescription>Get help with MCN services</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Support center functionality will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="learning">
          <Card>
            <CardHeader>
              <CardTitle>Learning Resources</CardTitle>
              <CardDescription>Tutorials and guides for using MCN services</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Learning resources will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="feedback">
          <Card>
            <CardHeader>
              <CardTitle>Feedback System</CardTitle>
              <CardDescription>Share your feedback and suggestions</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Feedback submission functionality will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HelpSupport;
