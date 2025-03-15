
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Filter, Plus, LucideIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

import ResourceLibraryTab from './tabs/ResourceLibraryTab';
import AssignmentsTab from './tabs/AssignmentsTab';
import ClientTopicsTab from './tabs/ClientTopicsTab';

// Import the icon components directly
import { BookOpen, CheckCircle, Users } from 'lucide-react';

const PatientEducation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('library');
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Patient Education</h1>
          <p className="text-muted-foreground">
            Manage and assign educational resources to clients
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex items-center space-x-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button size="sm" className="gap-1">
            <Plus className="h-4 w-4" />
            New Resource
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="library" className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            Resource Library
          </TabsTrigger>
          <TabsTrigger value="assignments" className="flex items-center gap-1">
            <CheckCircle className="h-4 w-4" />
            Assignments
          </TabsTrigger>
          <TabsTrigger value="clients" className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            Client Topics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="library">
          <ResourceLibraryTab />
        </TabsContent>

        <TabsContent value="assignments">
          <AssignmentsTab />
        </TabsContent>

        <TabsContent value="clients">
          <ClientTopicsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PatientEducation;
