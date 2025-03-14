
import React from 'react';
import { Users, Bookmark, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { clientHealthTopics, topicTrendsData, clientRecommendations } from '../utils/data';
import { getTypeIcon } from '../utils/helpers';
import { useLanguage } from '@/context/LanguageContext';

const ClientTopicsTab: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('patientEd.clientTopics.title')}</CardTitle>
          <CardDescription>
            {t('patientEd.clientTopics.subtitle')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t('patientEd.clientTopics.client')}</TableHead>
                  <TableHead>{t('patientEd.clientTopics.healthTopics')}</TableHead>
                  <TableHead>{t('patientEd.clientTopics.recentAssignments')}</TableHead>
                  <TableHead>{t('patientEd.clientTopics.preferredFormat')}</TableHead>
                  <TableHead>{t('patientEd.clientTopics.actions')}</TableHead>
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
                        <Button variant="outline" size="sm">{t('patientEd.clientTopics.recommend')}</Button>
                        <Button variant="outline" size="sm">{t('patientEd.clientTopics.editTopics')}</Button>
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
            <CardTitle>{t('patientEd.clientTopics.recommendedResources')}</CardTitle>
            <CardDescription>
              {t('patientEd.clientTopics.basedOnProfiles')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {clientRecommendations.map((rec, idx) => (
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
                  <Button variant="outline" size="sm" className="mt-2 w-full">{t('patientEd.clientTopics.assignAll')}</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('patientEd.clientTopics.topicTrends')}</CardTitle>
            <CardDescription>
              {t('patientEd.clientTopics.mostCommon')}
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
                <span className="text-sm">{t('patientEd.clientTopics.educationalResources')}</span>
              </div>
              <div className="p-2 border rounded-md flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm">{t('patientEd.clientTopics.assignedTopics')}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClientTopicsTab;
