
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

type AgendaItemProps = {
  title: string;
  time: string;
  borderColor: string;
};

const AgendaItem: React.FC<AgendaItemProps> = ({ title, time, borderColor }) => {
  return (
    <li className={`border-l-4 ${borderColor} pl-3 py-1`}>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-muted-foreground">{time}</p>
    </li>
  );
};

const DailyAgenda: React.FC = () => {
  const agendaItems = [
    {
      title: "Blood Pressure Medication",
      time: "8:00 AM",
      borderColor: "border-blue-500"
    },
    {
      title: "Doctor Johnson Appointment",
      time: "11:30 AM",
      borderColor: "border-green-500"
    },
    {
      title: "Video Call with Family",
      time: "4:00 PM",
      borderColor: "border-purple-500"
    }
  ];

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5 text-mcn-blue" />
            Daily Agenda
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {agendaItems.map((item, index) => (
            <AgendaItem
              key={index}
              title={item.title}
              time={item.time}
              borderColor={item.borderColor}
            />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default DailyAgenda;
