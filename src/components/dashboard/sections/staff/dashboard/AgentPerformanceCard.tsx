
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// Sample data for charts
const performanceData = [
  { name: 'Mon', calls: 24, chats: 18, resolved: 38 },
  { name: 'Tue', calls: 28, chats: 16, resolved: 42 },
  { name: 'Wed', calls: 26, chats: 20, resolved: 45 },
  { name: 'Thu', calls: 30, chats: 22, resolved: 48 },
  { name: 'Fri', calls: 27, chats: 18, resolved: 43 },
  { name: 'Sat', calls: 18, chats: 12, resolved: 26 },
  { name: 'Sun', calls: 14, chats: 8, resolved: 19 },
];

const AgentPerformanceCard: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Agent Performance</CardTitle>
        <CardDescription>Your weekly metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={performanceData}
              margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="calls" fill="#8884d8" name="Calls" />
              <Bar dataKey="chats" fill="#82ca9d" name="Chats" />
              <Bar dataKey="resolved" fill="#ffc658" name="Resolved" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 bg-gray-50 rounded-md">
            <div className="text-sm text-gray-500">Today's Calls</div>
            <div className="text-xl font-semibold">12</div>
          </div>
          <div className="p-2 bg-gray-50 rounded-md">
            <div className="text-sm text-gray-500">Avg Handle Time</div>
            <div className="text-xl font-semibold">8:42</div>
          </div>
          <div className="p-2 bg-gray-50 rounded-md">
            <div className="text-sm text-gray-500">Resolution Rate</div>
            <div className="text-xl font-semibold">92%</div>
          </div>
          <div className="p-2 bg-gray-50 rounded-md">
            <div className="text-sm text-gray-500">Client Rating</div>
            <div className="text-xl font-semibold">4.8/5</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AgentPerformanceCard;
