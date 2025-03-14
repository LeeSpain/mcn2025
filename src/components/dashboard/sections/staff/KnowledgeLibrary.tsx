
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, FileText, Star, Clock, Search, BookmarkIcon } from 'lucide-react';

const KnowledgeLibrary: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Knowledge Library</CardTitle>
          <CardDescription>Access training, procedures, and reference materials</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search knowledge base..." 
                className="pl-10 w-full rounded-md border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mcn-blue/50"
              />
            </div>
          </div>
          
          <Tabs defaultValue="procedures">
            <TabsList className="mb-4">
              <TabsTrigger value="procedures" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Procedures
              </TabsTrigger>
              <TabsTrigger value="training" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Training
              </TabsTrigger>
              <TabsTrigger value="favorites" className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                Favorites
              </TabsTrigger>
              <TabsTrigger value="recent" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Recent
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="procedures">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Client Onboarding', category: 'Procedures', updated: '2 days ago' },
                  { title: 'Emergency Response Protocol', category: 'Procedures', updated: '1 week ago' },
                  { title: 'Device Troubleshooting', category: 'Procedures', updated: '3 days ago' },
                  { title: 'Medication Management', category: 'Procedures', updated: '5 days ago' },
                  { title: 'Care Plan Development', category: 'Procedures', updated: '1 day ago' },
                  { title: 'Client Data Security', category: 'Procedures', updated: '2 weeks ago' }
                ].map((doc, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium text-mcn-blue">{doc.title}</h3>
                          <p className="text-sm text-gray-500 mt-1">{doc.category}</p>
                          <p className="text-xs text-gray-400 mt-1">Updated: {doc.updated}</p>
                        </div>
                        <button className="text-gray-400 hover:text-mcn-blue">
                          <BookmarkIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="training">
              <div className="space-y-4">
                <h3 className="font-medium">Required Training</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: 'Client Communication Skills', progress: 60, duration: '45 min' },
                    { title: 'Health Data Privacy', progress: 100, duration: '30 min', completed: true },
                    { title: 'Remote Health Monitoring', progress: 0, duration: '60 min' },
                    { title: 'Emergency Response', progress: 25, duration: '50 min' }
                  ].map((course, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <div className="flex items-start justify-between">
                            <h3 className="font-medium">{course.title}</h3>
                            {course.completed && (
                              <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                                Completed
                              </span>
                            )}
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-mcn-blue h-2 rounded-full" 
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>{course.progress}% complete</span>
                            <span>{course.duration}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <h3 className="font-medium mt-6">Professional Development</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: 'Advanced Client Care', level: 'Intermediate', duration: '2 hours' },
                    { title: 'Mental Health Support', level: 'Advanced', duration: '3 hours' },
                    { title: 'Geriatric Care Specialization', level: 'Advanced', duration: '4 hours' },
                    { title: 'Remote Monitoring Technologies', level: 'Intermediate', duration: '1.5 hours' }
                  ].map((course, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <h3 className="font-medium">{course.title}</h3>
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Level: {course.level}</span>
                            <span>{course.duration}</span>
                          </div>
                          <button className="w-full mt-2 text-sm text-mcn-blue border border-mcn-blue rounded-md py-1 hover:bg-mcn-blue/5">
                            Start Course
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="favorites">
              <div className="space-y-4">
                <p className="text-gray-500">Your saved documents and training materials will appear here.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: 'Client Crisis Management', category: 'Procedures', updated: '1 week ago' },
                    { title: 'Data Privacy Guidelines', category: 'Reference', updated: '3 weeks ago' }
                  ].map((doc, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium text-mcn-blue">{doc.title}</h3>
                            <p className="text-sm text-gray-500 mt-1">{doc.category}</p>
                            <p className="text-xs text-gray-400 mt-1">Updated: {doc.updated}</p>
                          </div>
                          <button className="text-mcn-blue">
                            <BookmarkIcon className="h-4 w-4 fill-current" />
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="recent">
              <div className="space-y-4">
                <h3 className="font-medium">Recently Viewed</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { title: 'Medication Administration', category: 'Procedures', viewed: 'Today, 11:30 AM' },
                    { title: 'Remote Health Monitoring', category: 'Training', viewed: 'Today, 9:15 AM' },
                    { title: 'Client Communication Skills', category: 'Training', viewed: 'Yesterday, 4:20 PM' },
                    { title: 'Emergency Response Protocol', category: 'Procedures', viewed: 'Yesterday, 2:45 PM' }
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50">
                      <div>
                        <h3 className="font-medium">{doc.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-gray-500">{doc.category}</span>
                          <span className="text-xs text-gray-400">Viewed: {doc.viewed}</span>
                        </div>
                      </div>
                      <button className="text-sm text-mcn-blue hover:underline">Open</button>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default KnowledgeLibrary;
