
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Search, 
  Filter, 
  Plus,
  FolderOpen,
  FileUp,
  Clock,
  Calendar,
  CheckCircle,
  FileCheck,
  FilePen,
  FilePlus2,
  FileWarning,
  FileQuestion,
  User
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

// Sample documents data
const documents = [
  { 
    id: 1, 
    title: 'Care Plan - Jan de Vries', 
    type: 'Care Plan',
    client: 'Jan de Vries',
    created: 'April 15, 2023',
    updated: '2 days ago',
    status: 'Current',
    author: 'Monique N.'
  },
  { 
    id: 2, 
    title: 'Medical Assessment - Anna Koster', 
    type: 'Assessment',
    client: 'Anna Koster',
    created: 'May 2, 2023',
    updated: '1 week ago',
    status: 'Current',
    author: 'Dr. Martin V.'
  },
  { 
    id: 3, 
    title: 'Medication Review - Pieter Bakker', 
    type: 'Medication',
    client: 'Pieter Bakker',
    created: 'March 10, 2023',
    updated: '1 month ago',
    status: 'Needs Review',
    author: 'Monique N.'
  },
  { 
    id: 4, 
    title: 'Visit Notes - Maria Jansen', 
    type: 'Visit Notes',
    client: 'Maria Jansen',
    created: 'June 1, 2023',
    updated: '3 days ago',
    status: 'Current',
    author: 'Monique N.'
  },
  { 
    id: 5, 
    title: 'Hospital Discharge - Anna Koster', 
    type: 'Hospital',
    client: 'Anna Koster',
    created: 'May 28, 2023',
    updated: '5 days ago',
    status: 'Current',
    author: 'Hospital Staff'
  },
];

// Sample templates
const templates = [
  { id: 1, name: 'Initial Assessment', category: 'Assessment', usageCount: 45 },
  { id: 2, name: 'Care Plan Template', category: 'Care Plan', usageCount: 78 },
  { id: 3, name: 'Visit Notes Template', category: 'Visit Notes', usageCount: 124 },
  { id: 4, name: 'Medication Review Form', category: 'Medication', usageCount: 36 },
  { id: 5, name: 'Client Education Record', category: 'Education', usageCount: 28 },
];

// Recent document activities
const documentActivity = [
  { id: 1, action: 'Created', document: 'Visit Notes - Thomas Visser', user: 'Monique N.', time: '1 hour ago' },
  { id: 2, action: 'Updated', document: 'Care Plan - Jan de Vries', user: 'Monique N.', time: '2 days ago' },
  { id: 3, action: 'Reviewed', document: 'Medication Review - Pieter Bakker', user: 'Dr. Smit', time: '3 days ago' },
  { id: 4, action: 'Approved', document: 'Care Plan - Maria Jansen', user: 'Supervisor', time: '1 week ago' },
];

const DocumentManagement: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredDocuments = documents.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    doc.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Current':
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Current</Badge>;
      case 'Needs Review':
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Needs Review</Badge>;
      case 'Expired':
        return <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">Expired</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  
  const getDocumentIcon = (type: string) => {
    switch(type) {
      case 'Care Plan':
        return <FilePen className="h-4 w-4 text-blue-500" />;
      case 'Assessment':
        return <FileCheck className="h-4 w-4 text-green-500" />;
      case 'Medication':
        return <FilePlus2 className="h-4 w-4 text-purple-500" />;
      case 'Visit Notes':
        return <FileText className="h-4 w-4 text-amber-500" />;
      case 'Hospital':
        return <FileWarning className="h-4 w-4 text-red-500" />;
      default:
        return <FileQuestion className="h-4 w-4 text-gray-500" />;
    }
  };
  
  return (
    <div className="space-y-6 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Document Management</h1>
          <p className="text-muted-foreground">
            Create, manage, and access client documentation
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex space-x-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search documents..."
              className="pl-9 pr-4 py-2 text-sm w-full sm:w-auto min-w-[220px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="sm" className="flex items-center gap-1.5">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Button className="flex items-center gap-1.5 bg-mcn-blue text-white">
            <Plus className="h-4 w-4" />
            <span>New Document</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="documents" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="documents" className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            <span>Documents</span>
          </TabsTrigger>
          <TabsTrigger value="templates" className="flex items-center gap-1">
            <FilePen className="h-4 w-4" />
            <span>Templates</span>
          </TabsTrigger>
          <TabsTrigger value="recent" className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>Recent Activity</span>
          </TabsTrigger>
          <TabsTrigger value="upload" className="flex items-center gap-1">
            <FileUp className="h-4 w-4" />
            <span>Upload Documents</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="documents" className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Client Documents</CardTitle>
              <CardDescription>Access and manage all client-related documentation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDocuments.map(doc => (
                      <TableRow key={doc.id}>
                        <TableCell className="font-medium flex items-center gap-2">
                          {getDocumentIcon(doc.type)}
                          {doc.title}
                        </TableCell>
                        <TableCell>{doc.type}</TableCell>
                        <TableCell>{doc.client}</TableCell>
                        <TableCell className="whitespace-nowrap">{doc.created}</TableCell>
                        <TableCell className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {doc.updated}
                        </TableCell>
                        <TableCell>{getStatusBadge(doc.status)}</TableCell>
                        <TableCell>{doc.author}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">View</Button>
                            <Button variant="outline" size="sm">Edit</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Showing {filteredDocuments.length} of {documents.length} documents
              </div>
              <Button variant="outline">Export Documents</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="templates" className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Document Templates</CardTitle>
              <CardDescription>Standardized templates for efficient documentation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {templates.map(template => (
                  <Card key={template.id} className="border hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader className="p-4">
                      <CardTitle className="text-base flex items-center gap-2">
                        <FilePen className="h-4 w-4" />
                        {template.name}
                      </CardTitle>
                      <CardDescription>{template.category}</CardDescription>
                    </CardHeader>
                    <CardContent className="px-4 pb-4 pt-0">
                      <div className="text-sm text-muted-foreground">
                        Used {template.usageCount} times
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">Preview</Button>
                        <Button size="sm" className="flex-1">Use Template</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Create New Template</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="recent" className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Recent Document Activity</CardTitle>
              <CardDescription>Track document creation, updates, and reviews</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {documentActivity.map(activity => (
                  <div key={activity.id} className="p-3 border rounded-md flex items-start">
                    <div className="mr-3">
                      {activity.action === 'Created' ? (
                        <div className="bg-green-100 p-2 rounded-full">
                          <FilePlus2 className="h-5 w-5 text-green-500" />
                        </div>
                      ) : activity.action === 'Updated' ? (
                        <div className="bg-blue-100 p-2 rounded-full">
                          <FilePen className="h-5 w-5 text-blue-500" />
                        </div>
                      ) : activity.action === 'Reviewed' ? (
                        <div className="bg-amber-100 p-2 rounded-full">
                          <FileCheck className="h-5 w-5 text-amber-500" />
                        </div>
                      ) : (
                        <div className="bg-purple-100 p-2 rounded-full">
                          <CheckCircle className="h-5 w-5 text-purple-500" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div className="font-medium">{activity.document}</div>
                        <span className="text-xs text-gray-500">{activity.time}</span>
                      </div>
                      <div className="text-sm">{activity.action} by {activity.user}</div>
                      <div className="mt-2">
                        <Button size="sm" variant="outline">View Document</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="upload" className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Upload Documents</CardTitle>
              <CardDescription>Upload and categorize external documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed rounded-lg p-10 text-center">
                <FileUp className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium mb-2">Drop files here or click to upload</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Support for PDF, DOC, DOCX, JPG, PNG files up to 10MB
                </p>
                <Button>Select Files</Button>
              </div>
              
              <div className="mt-6">
                <h3 className="text-sm font-medium mb-2">RECENTLY UPLOADED</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-500" />
                      <div>
                        <div className="text-sm font-medium">Hospital_Discharge_AK.pdf</div>
                        <div className="text-xs text-gray-500">Uploaded 5 days ago</div>
                      </div>
                    </div>
                    <Badge>Processed</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-green-500" />
                      <div>
                        <div className="text-sm font-medium">Lab_Results_JV.pdf</div>
                        <div className="text-xs text-gray-500">Uploaded 1 week ago</div>
                      </div>
                    </div>
                    <Badge>Processed</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DocumentManagement;
