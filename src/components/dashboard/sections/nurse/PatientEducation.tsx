
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  BookOpen, 
  FileText, 
  Video, 
  Users, 
  Search, 
  Plus, 
  Share2, 
  CheckCircle, 
  Clock, 
  Filter,
  Download,
  ArrowUpRight,
  ThumbsUp,
  Award,
  Bookmark,
  GraduationCap,
  Lightbulb,
  Heart
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { toast } from 'sonner';
import { useLanguage } from '@/context/LanguageContext';

// Sample education materials
const educationMaterials = [
  { 
    id: 1, 
    title: 'Understanding Diabetes Management', 
    type: 'Video', 
    category: 'Chronic Disease', 
    duration: '8 min', 
    lastUpdated: '2 weeks ago',
    popular: true
  },
  { 
    id: 2, 
    title: 'Medication Adherence Tips', 
    type: 'Article', 
    category: 'Medication', 
    duration: '5 min read', 
    lastUpdated: '1 month ago',
    popular: true
  },
  { 
    id: 3, 
    title: 'Heart Health Basics', 
    type: 'Interactive', 
    category: 'Cardiovascular', 
    duration: '10 min', 
    lastUpdated: '2 months ago',
    popular: false
  },
  { 
    id: 4, 
    title: 'Fall Prevention at Home', 
    type: 'PDF Guide', 
    category: 'Safety', 
    duration: '7 min read', 
    lastUpdated: '3 weeks ago',
    popular: true
  },
  { 
    id: 5, 
    title: 'Nutrition for Seniors', 
    type: 'Video', 
    category: 'Nutrition', 
    duration: '12 min', 
    lastUpdated: '1 week ago',
    popular: false
  },
  { 
    id: 6, 
    title: 'Managing Blood Pressure', 
    type: 'Article', 
    category: 'Cardiovascular', 
    duration: '6 min read', 
    lastUpdated: '2 weeks ago',
    popular: false
  },
];

// Sample education assignments
const educationAssignments = [
  { 
    id: 1, 
    client: 'Elizabeth Wilson', 
    material: 'Understanding Diabetes Management', 
    assignedDate: 'Jun 2, 2023', 
    status: 'Completed', 
    progress: 100,
    dueDate: 'Jun 8, 2023'
  },
  { 
    id: 2, 
    client: 'Robert Johnson', 
    material: 'Medication Adherence Tips', 
    assignedDate: 'Jun 3, 2023', 
    status: 'In Progress', 
    progress: 60,
    dueDate: 'Jun 10, 2023'
  },
  { 
    id: 3, 
    client: 'Patricia Davis', 
    material: 'Heart Health Basics', 
    assignedDate: 'Jun 5, 2023', 
    status: 'Not Started', 
    progress: 0,
    dueDate: 'Jun 12, 2023'
  },
  { 
    id: 4, 
    client: 'James Miller', 
    material: 'Fall Prevention at Home', 
    assignedDate: 'Jun 1, 2023', 
    status: 'Completed', 
    progress: 100,
    dueDate: 'Jun 8, 2023'
  },
];

// Sample client health topics
const clientHealthTopics = [
  {
    client: 'Elizabeth Wilson',
    topics: ['Diabetes', 'Hypertension', 'Medication Management'],
    recentAssignments: 3,
    preferredFormat: 'Video'
  },
  {
    client: 'Robert Johnson',
    topics: ['Heart Health', 'Fall Prevention', 'Pain Management'],
    recentAssignments: 2,
    preferredFormat: 'Article'
  },
  {
    client: 'Patricia Davis',
    topics: ['Arthritis', 'Nutrition', 'Sleep Management'],
    recentAssignments: 1,
    preferredFormat: 'Interactive'
  },
  {
    client: 'James Miller',
    topics: ['COPD', 'Oxygen Therapy', 'Exercise'],
    recentAssignments: 2,
    preferredFormat: 'PDF Guide'
  },
];

// Sample data for charts
const topicTrendsData = [
  { topic: 'Diabetes', count: 4 },
  { topic: 'Heart Health', count: 3 },
  { topic: 'Medication', count: 5 },
  { topic: 'Fall Prevention', count: 2 },
  { topic: 'Nutrition', count: 3 },
  { topic: 'Exercise', count: 2 }
];

const PatientEducation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('library');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const { t } = useLanguage();

  const handleAssignResource = (title: string) => {
    toast.success(`Resource Assigned: ${title}`, {
      description: "The resource has been assigned to the client.",
    });
  };

  const handleViewResource = (title: string) => {
    toast.info(`Viewing Resource: ${title}`, {
      description: "Opening resource viewer...",
    });
  };

  const getTypeIcon = (type: string) => {
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

  const getStatusBadge = (status: string) => {
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

  // Get unique categories for filter
  const categories = ['All Categories', ...new Set(educationMaterials.map(item => item.category))];

  // Filter materials based on search and category
  const filteredMaterials = educationMaterials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          material.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || material.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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

        <TabsContent value="library" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <CardTitle>Educational Resources</CardTitle>
                  <CardDescription>
                    Browse and manage client education materials
                  </CardDescription>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative">
                    <Search className="h-4 w-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Search resources..." 
                      className="pl-8 pr-4 py-2 border rounded-md w-full sm:w-48" 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <select 
                    className="pl-3 pr-8 py-2 border rounded-md appearance-none"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredMaterials.map(material => (
                  <div 
                    key={material.id} 
                    className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className={`p-2 ${
                      material.type === 'Video' ? 'bg-blue-50' : 
                      material.type === 'Article' ? 'bg-green-50' : 
                      material.type === 'Interactive' ? 'bg-purple-50' : 
                      'bg-red-50'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          material.type === 'Video' ? 'bg-blue-100 text-blue-800' : 
                          material.type === 'Article' ? 'bg-green-100 text-green-800' : 
                          material.type === 'Interactive' ? 'bg-purple-100 text-purple-800' : 
                          'bg-red-100 text-red-800'
                        }`}>
                          {material.type}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {material.duration}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-start mb-2">
                        {getTypeIcon(material.type)}
                        <h3 className="font-medium ml-2">{material.title}</h3>
                      </div>
                      <div className="text-xs text-gray-500 mb-3 flex justify-between">
                        <span>Category: {material.category}</span>
                        <span>Updated: {material.lastUpdated}</span>
                      </div>
                      <div className="flex justify-between mt-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-1"
                          onClick={() => handleViewResource(material.title)}
                        >
                          <ArrowUpRight className="h-4 w-4" />
                          View
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-1"
                          onClick={() => handleAssignResource(material.title)}
                        >
                          <Share2 className="h-4 w-4" />
                          Assign
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                {filteredMaterials.length === 0 && (
                  <div className="col-span-full text-center p-8 text-gray-500">
                    <BookOpen className="h-12 w-12 mx-auto text-gray-300 mb-2" />
                    <p>No resources found matching your search criteria</p>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-4 w-4" />
                Export List
              </Button>
              <Button size="sm" className="gap-1">
                <Plus className="h-4 w-4" />
                Upload New Resource
              </Button>
            </CardFooter>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Popular Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {educationMaterials
                  .filter(material => material.popular)
                  .map(material => (
                    <div key={material.id} className="flex items-center p-2 border-b last:border-0">
                      {getTypeIcon(material.type)}
                      <div className="ml-2 flex-1">
                        <div className="text-sm font-medium">{material.title}</div>
                        <div className="text-xs text-gray-500">{material.category}</div>
                      </div>
                      <ThumbsUp className="h-4 w-4 text-blue-500" />
                    </div>
                  ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Recently Updated</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {educationMaterials
                  .sort((a, b) => a.lastUpdated.localeCompare(b.lastUpdated))
                  .slice(0, 4)
                  .map(material => (
                    <div key={material.id} className="flex items-center p-2 border-b last:border-0">
                      {getTypeIcon(material.type)}
                      <div className="ml-2 flex-1">
                        <div className="text-sm font-medium">{material.title}</div>
                        <div className="text-xs text-gray-500">{material.lastUpdated}</div>
                      </div>
                    </div>
                  ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Resource Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[...new Set(educationMaterials.map(item => item.category))].map(category => (
                  <div key={category} className="flex items-center justify-between p-2 border-b last:border-0">
                    <span>{category}</span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                      {educationMaterials.filter(item => item.category === category).length} resources
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="assignments" className="space-y-6">
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
                {[
                  { client: 'Elizabeth Wilson', completion: '100%', assignments: 3 },
                  { client: 'James Miller', completion: '100%', assignments: 2 },
                  { client: 'Robert Johnson', completion: '75%', assignments: 4 }
                ].map((performer, idx) => (
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
        </TabsContent>

        <TabsContent value="clients" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Client Health Topics</CardTitle>
              <CardDescription>
                Manage educational topics based on client health needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Client</TableHead>
                      <TableHead>Health Topics</TableHead>
                      <TableHead>Recent Assignments</TableHead>
                      <TableHead>Preferred Format</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {clientHealthTopics.map((client, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="font-medium">{client.client}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {client.topics.map(topic => (
                              <span 
                                key={topic}
                                className="bg-blue-50 text-blue-800 px-2 py-1 rounded-full text-xs"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>{client.recentAssignments}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            client.preferredFormat === 'Video' ? 'bg-blue-100 text-blue-800' : 
                            client.preferredFormat === 'Article' ? 'bg-green-100 text-green-800' : 
                            client.preferredFormat === 'Interactive' ? 'bg-purple-100 text-purple-800' : 
                            'bg-red-100 text-red-800'
                          }`}>
                            {client.preferredFormat}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-1">
                            <Button variant="outline" size="sm">Recommend</Button>
                            <Button variant="outline" size="sm">Edit Topics</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recommended Resources</CardTitle>
                <CardDescription>
                  Based on client health profiles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      client: 'Elizabeth Wilson',
                      resources: [
                        { title: 'Diabetes Management Daily Routine', type: 'Video' },
                        { title: 'Medication Adherence Tips', type: 'Article' }
                      ]
                    },
                    {
                      client: 'Robert Johnson',
                      resources: [
                        { title: 'Heart Health Basics', type: 'Interactive' },
                        { title: 'Fall Prevention at Home', type: 'PDF Guide' }
                      ]
                    }
                  ].map((rec, idx) => (
                    <div key={idx} className="p-3 border rounded-lg">
                      <h3 className="font-medium mb-2">{rec.client}</h3>
                      <div className="space-y-2">
                        {rec.resources.map((resource, i) => (
                          <div key={i} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                            <div className="flex items-center">
                              {getTypeIcon(resource.type)}
                              <span className="ml-2 text-sm">{resource.title}</span>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Bookmark className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="mt-2 w-full">Assign All</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Topic Trends</CardTitle>
                <CardDescription>
                  Most common health education topics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={topicTrendsData}
                      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="topic" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="p-2 border rounded-md flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-sm">Educational Resources</span>
                  </div>
                  <div className="p-2 border rounded-md flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm">Assigned Topics</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PatientEducation;
