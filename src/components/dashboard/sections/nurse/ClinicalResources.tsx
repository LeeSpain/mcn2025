
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  FileText, 
  Search, 
  Plus, 
  Filter, 
  Bookmark, 
  Download, 
  Share2, 
  ExternalLink,
  File,
  Folder,
  Star,
  Clock,
  Tag,
  ChevronRight,
  BookOpen,
  Heart,
  Stethoscope,
  Pill,
  FolderPlus,
  FolderArchive,
  Library
} from 'lucide-react';
import { toast } from 'sonner';

// Sample clinical resources
const clinicalResources = [
  {
    id: 1,
    title: 'Diabetes Management Protocol 2023',
    type: 'Protocol',
    category: 'Chronic Disease',
    dateAdded: '2023-05-10',
    lastUpdated: '2023-05-10',
    author: 'Dr. Sarah Johnson',
    format: 'PDF',
    bookmarked: true
  },
  {
    id: 2,
    title: 'Heart Failure Guidelines',
    type: 'Guidelines',
    category: 'Cardiovascular',
    dateAdded: '2023-04-15',
    lastUpdated: '2023-04-15',
    author: 'American Heart Association',
    format: 'PDF',
    bookmarked: false
  },
  {
    id: 3,
    title: 'Wound Care Best Practices',
    type: 'Protocol',
    category: 'Wound Care',
    dateAdded: '2023-03-22',
    lastUpdated: '2023-06-01',
    author: 'Dr. Michael Chen',
    format: 'PDF',
    bookmarked: true
  },
  {
    id: 4,
    title: 'Pain Management Reference Guide',
    type: 'Reference',
    category: 'Pain Management',
    dateAdded: '2023-02-10',
    lastUpdated: '2023-02-10',
    author: 'American Pain Society',
    format: 'PDF',
    bookmarked: false
  },
  {
    id: 5,
    title: 'Mental Health Screening Tools',
    type: 'Assessment',
    category: 'Mental Health',
    dateAdded: '2023-01-05',
    lastUpdated: '2023-01-05',
    author: 'Dr. Lisa Rodriguez',
    format: 'PDF',
    bookmarked: false
  },
  {
    id: 6,
    title: 'Medication Reconciliation Procedure',
    type: 'Procedure',
    category: 'Medication',
    dateAdded: '2022-12-12',
    lastUpdated: '2023-05-20',
    author: 'National Patient Safety Foundation',
    format: 'PDF',
    bookmarked: true
  },
];

// Sample recent resources
const recentResources = [
  {
    id: 101,
    title: 'COVID-19 Home Care Guidelines Update',
    type: 'Guidelines',
    accessDate: '2023-06-05',
    format: 'PDF'
  },
  {
    id: 102,
    title: 'Telehealth Assessment Toolkit',
    type: 'Assessment',
    accessDate: '2023-06-04',
    format: 'PDF'
  },
  {
    id: 103,
    title: 'Hypertension Management Algorithm',
    type: 'Protocol',
    accessDate: '2023-06-03',
    format: 'PDF'
  },
  {
    id: 104,
    title: 'Fall Risk Assessment Tool',
    type: 'Assessment',
    accessDate: '2023-06-02',
    format: 'PDF'
  },
];

// Resource categories with counts
const resourceCategories = [
  { name: 'Chronic Disease', count: 12 },
  { name: 'Cardiovascular', count: 8 },
  { name: 'Wound Care', count: 5 },
  { name: 'Medication', count: 10 },
  { name: 'Mental Health', count: 7 },
  { name: 'Pain Management', count: 6 },
  { name: 'Respiratory', count: 4 },
  { name: 'Palliative Care', count: 3 },
];

const ClinicalResources: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleResourceAction = (action: string, title: string) => {
    toast.success(`${action}: ${title}`, {
      description: `The resource has been ${action.toLowerCase()}ed.`,
    });
  };

  const filteredResources = clinicalResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'Protocol':
        return <FileText className="h-5 w-5 text-blue-500" />;
      case 'Guidelines':
        return <BookOpen className="h-5 w-5 text-green-500" />;
      case 'Assessment':
        return <Stethoscope className="h-5 w-5 text-purple-500" />;
      case 'Reference':
        return <Library className="h-5 w-5 text-amber-500" />;
      case 'Procedure':
        return <FileText className="h-5 w-5 text-red-500" />;
      default:
        return <File className="h-5 w-5 text-gray-500" />;
    }
  };

  const getFormatBadge = (format: string) => {
    switch(format) {
      case 'PDF':
        return <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">PDF</span>;
      case 'DOC':
        return <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">DOC</span>;
      case 'XLS':
        return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">XLS</span>;
      default:
        return <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">{format}</span>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Clinical Resources</h1>
          <p className="text-muted-foreground">
            Access evidence-based protocols, guidelines, and reference materials
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex items-center space-x-2">
          <Button variant="outline" size="sm" className="gap-1">
            <FolderPlus className="h-4 w-4" />
            Create Folder
          </Button>
          <Button size="sm" className="gap-1">
            <Plus className="h-4 w-4" />
            Upload Resource
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="all" className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            All Resources
          </TabsTrigger>
          <TabsTrigger value="bookmarked" className="flex items-center gap-1">
            <Bookmark className="h-4 w-4" />
            Bookmarked
          </TabsTrigger>
          <TabsTrigger value="recent" className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            Recently Used
          </TabsTrigger>
        </TabsList>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="relative mr-2">
              <Search className="h-4 w-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="pl-8 pr-4 py-2 border rounded-md w-64" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select 
              className="pl-3 pr-8 py-2 border rounded-md appearance-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              {resourceCategories.map(category => (
                <option key={category.name} value={category.name}>{category.name}</option>
              ))}
            </select>
          </div>
          <Button variant="outline" size="sm" className="gap-1">
            <Filter className="h-4 w-4" />
            Advanced Filters
          </Button>
        </div>

        <TabsContent value="all" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Clinical Resource Library</CardTitle>
              <CardDescription>
                Evidence-based protocols, guidelines, and reference materials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Resource</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Format</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredResources.map(resource => (
                      <TableRow key={resource.id}>
                        <TableCell>
                          <div className="flex items-center">
                            {getTypeIcon(resource.type)}
                            <div className="ml-2">
                              <div className="font-medium">{resource.title}</div>
                              <div className="text-xs text-gray-500">By {resource.author}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{resource.type}</TableCell>
                        <TableCell>{resource.category}</TableCell>
                        <TableCell>{resource.lastUpdated}</TableCell>
                        <TableCell>{getFormatBadge(resource.format)}</TableCell>
                        <TableCell>
                          <div className="flex space-x-1">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleResourceAction('View', resource.title)}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleResourceAction('Download', resource.title)}
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant={resource.bookmarked ? "default" : "outline"} 
                              size="sm"
                              onClick={() => handleResourceAction(resource.bookmarked ? 'Unbookmark' : 'Bookmark', resource.title)}
                            >
                              <Bookmark className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-4 w-4" />
                Export List
              </Button>
              <div className="text-sm text-gray-500">
                Showing {filteredResources.length} of {clinicalResources.length} resources
              </div>
            </CardFooter>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Resource Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {resourceCategories.map(category => (
                  <div key={category.name} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                    <span>{category.name}</span>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-2">{category.count}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Recently Accessed</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {recentResources.map(resource => (
                  <div key={resource.id} className="flex items-center p-2 border-b last:border-0">
                    {getTypeIcon(resource.type)}
                    <div className="ml-2 flex-1">
                      <div className="text-sm font-medium">{resource.title}</div>
                      <div className="text-xs text-gray-500">{resource.accessDate}</div>
                    </div>
                    {getFormatBadge(resource.format)}
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-sm" size="sm">
                  View All Recent Resources
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Quick Access</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="justify-start gap-2 h-auto py-3">
                    <Heart className="h-4 w-4 text-red-500" />
                    <div className="text-left">
                      <div className="text-sm font-medium">Cardiac</div>
                      <div className="text-xs text-gray-500">Protocols</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="justify-start gap-2 h-auto py-3">
                    <Pill className="h-4 w-4 text-green-500" />
                    <div className="text-left">
                      <div className="text-sm font-medium">Medication</div>
                      <div className="text-xs text-gray-500">References</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="justify-start gap-2 h-auto py-3">
                    <Stethoscope className="h-4 w-4 text-blue-500" />
                    <div className="text-left">
                      <div className="text-sm font-medium">Assessment</div>
                      <div className="text-xs text-gray-500">Tools</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="justify-start gap-2 h-auto py-3">
                    <BookOpen className="h-4 w-4 text-amber-500" />
                    <div className="text-left">
                      <div className="text-sm font-medium">Treatment</div>
                      <div className="text-xs text-gray-500">Guidelines</div>
                    </div>
                  </Button>
                </div>
                <Button variant="ghost" className="w-full text-sm" size="sm">
                  Customize Quick Access
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="bookmarked">
          <Card>
            <CardHeader>
              <CardTitle>Bookmarked Resources</CardTitle>
              <CardDescription>
                Your saved clinical resources for quick access
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Resource</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {clinicalResources
                      .filter(resource => resource.bookmarked)
                      .map(resource => (
                        <TableRow key={resource.id}>
                          <TableCell>
                            <div className="flex items-center">
                              {getTypeIcon(resource.type)}
                              <div className="ml-2">
                                <div className="font-medium">{resource.title}</div>
                                <div className="text-xs text-gray-500">By {resource.author}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{resource.type}</TableCell>
                          <TableCell>{resource.category}</TableCell>
                          <TableCell>{resource.lastUpdated}</TableCell>
                          <TableCell>
                            <div className="flex space-x-1">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleResourceAction('View', resource.title)}
                              >
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleResourceAction('Download', resource.title)}
                              >
                                <Download className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="default" 
                                size="sm"
                                onClick={() => handleResourceAction('Unbookmark', resource.title)}
                              >
                                <Bookmark className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recent">
          <Card>
            <CardHeader>
              <CardTitle>Recently Used Resources</CardTitle>
              <CardDescription>
                Your recently accessed clinical resources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentResources.map(resource => (
                  <div 
                    key={resource.id} 
                    className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-2 bg-gray-50">
                      <div className="flex items-center justify-between">
                        {getFormatBadge(resource.format)}
                        <span className="text-xs text-gray-500 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {resource.accessDate}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-start mb-2">
                        {getTypeIcon(resource.type)}
                        <h3 className="font-medium ml-2">{resource.title}</h3>
                      </div>
                      <div className="text-xs text-gray-500 mb-3">
                        Type: {resource.type}
                      </div>
                      <div className="flex justify-between mt-4">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-1"
                          onClick={() => handleResourceAction('View', resource.title)}
                        >
                          <ExternalLink className="h-4 w-4" />
                          View
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-1"
                          onClick={() => handleResourceAction('Download', resource.title)}
                        >
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">
                View All Access History
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClinicalResources;
