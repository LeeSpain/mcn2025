
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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

const performanceData = [
  { name: 'Mon', calls: 24, chats: 18, resolved: 38 },
  { name: 'Tue', calls: 28, chats: 16, resolved: 42 },
  { name: 'Wed', calls: 26, chats: 20, resolved: 45 },
  { name: 'Thu', calls: 30, chats: 22, resolved: 48 },
  { name: 'Fri', calls: 27, chats: 18, resolved: 43 },
  { name: 'Sat', calls: 18, chats: 12, resolved: 26 },
  { name: 'Sun', calls: 14, chats: 8, resolved: 19 },
];

const AgentPerformance: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Agent Performance</CardTitle>
        <CardDescription>Weekly overview of interactions and resolutions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={performanceData}
              margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="calls" fill="#8884d8" name="Calls" />
              <Bar dataKey="chats" fill="#82ca9d" name="Chats" />
              <Bar dataKey="resolved" fill="#ffc658" name="Resolved" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default AgentPerformance;
