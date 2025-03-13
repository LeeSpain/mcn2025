
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity } from 'lucide-react';

type StatItemProps = {
  label: string;
  value: string;
  status: string;
  statusColor: string;
  statusBgColor: string;
};

const StatItem: React.FC<StatItemProps> = ({ label, value, status, statusColor, statusBgColor }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
      <span className={`${statusColor} ${statusBgColor} px-2 py-1 rounded text-xs`}>{status}</span>
    </div>
  );
};

const HealthStats: React.FC = () => {
  const statItems = [
    {
      label: "Blood Pressure",
      value: "120/80 mmHg",
      status: "Normal",
      statusColor: "text-green-600",
      statusBgColor: "bg-green-100"
    },
    {
      label: "Heart Rate",
      value: "72 BPM",
      status: "Normal",
      statusColor: "text-green-600",
      statusBgColor: "bg-green-100"
    },
    {
      label: "Steps Today",
      value: "2,345 steps",
      status: "Below Goal",
      statusColor: "text-amber-600",
      statusBgColor: "bg-amber-100"
    }
  ];

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Activity className="h-5 w-5 text-mcn-blue" />
          Health Stats
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {statItems.map((item, index) => (
            <StatItem
              key={index}
              label={item.label}
              value={item.value}
              status={item.status}
              statusColor={item.statusColor}
              statusBgColor={item.statusBgColor}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthStats;
