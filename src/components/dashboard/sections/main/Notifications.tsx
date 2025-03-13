
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, AlertTriangle, Calendar } from 'lucide-react';

type NotificationProps = {
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
  title: string;
  message: string;
};

const Notification: React.FC<NotificationProps> = ({ icon, bgColor, iconColor, title, message }) => {
  return (
    <li className="flex gap-3 items-start">
      <div className={`w-8 h-8 rounded-full ${bgColor} ${iconColor} flex items-center justify-center`}>
        {icon}
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
    </li>
  );
};

const Notifications: React.FC = () => {
  const notifications = [
    {
      icon: <AlertTriangle size={16} />,
      bgColor: "bg-amber-100",
      iconColor: "text-amber-600",
      title: "Medication Reminder",
      message: "Blood pressure medication at 8:00 PM"
    },
    {
      icon: <Calendar size={16} />,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Upcoming Appointment",
      message: "Dr. Johnson on Thursday at 11:30 AM"
    }
  ];

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Bell className="h-5 w-5 text-mcn-blue" />
          Alerts & Notifications
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {notifications.map((notification, index) => (
            <Notification
              key={index}
              icon={notification.icon}
              bgColor={notification.bgColor}
              iconColor={notification.iconColor}
              title={notification.title}
              message={notification.message}
            />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Notifications;
