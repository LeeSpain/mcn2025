
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { clientHealthTopics, clientRecommendations, topicTrendsData } from '../utils/data';
import { Tags, Edit, Lightbulb, BarChart } from 'lucide-react';

const ClientTopicsTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Client Health Topics</CardTitle>
          <CardDescription>
            Manage educational topics based on client health needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Client</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Health Topics</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Recent Assignments</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Preferred Format</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {clientHealthTopics.map((client, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{client.client}</td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-1">
                        {client.topics.map((topic, i) => (
                          <Badge key={i} variant="outline" className="bg-blue-50">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">{client.recentAssignments}</td>
                    <td className="py-3 px-4">{client.preferredFormat}</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Lightbulb className="h-4 w-4" />
                          Recommend
                        </Button>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Edit className="h-4 w-4" />
                          Edit
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-amber-500" />
              <CardTitle>Recommended Resources</CardTitle>
            </div>
            <CardDescription>Based on client health profiles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {clientRecommendations.map((rec, idx) => (
                <div key={idx} className="border rounded-md p-3">
                  <div className="font-medium mb-2">{rec.client}</div>
                  <div className="space-y-2">
                    {rec.resources.map((resource, i) => (
                      <div key={i} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                        <div className="flex items-center">
                          <span className="text-sm">{resource.title}</span>
                          <Badge className="ml-2 text-xs" variant="outline">{resource.type}</Badge>
                        </div>
                        <Button size="sm" variant="ghost">Assign</Button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Generate More Recommendations</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <BarChart className="h-5 w-5 text-blue-500" />
              <CardTitle>Topic Trends</CardTitle>
            </div>
            <CardDescription>Most common health education topics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <div className="w-full">
                {topicTrendsData.map((topic, idx) => (
                  <div key={idx} className="mb-2">
                    <div className="flex justify-between mb-1 text-sm">
                      <span>{topic.topic}</span>
                      <span>{topic.count} clients</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${(topic.count / 5) * 100}%` }}>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClientTopicsTab;
