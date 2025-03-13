
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Activity, MessageSquare, AlertTriangle, ArrowRight } from 'lucide-react';

type QuickAccessItemProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  bgColor: string;
  iconColor: string;
  hoverBgColor: string;
};

const QuickAccessItem: React.FC<QuickAccessItemProps> = ({ 
  icon, 
  title, 
  subtitle, 
  bgColor, 
  iconColor, 
  hoverBgColor 
}) => {
  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer group">
      <CardContent className="p-4 flex flex-col items-center text-center">
        <div className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center mb-3 group-hover:${hoverBgColor} transition-colors`}>
          {icon}
        </div>
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{subtitle}</p>
        <ArrowRight className="h-4 w-4 text-mcn-blue opacity-0 group-hover:opacity-100 transition-opacity" />
      </CardContent>
    </Card>
  );
};

const QuickAccess: React.FC = () => {
  const quickAccessItems = [
    {
      icon: <Calendar className="h-6 w-6 text-blue-600" />,
      title: "Appointments",
      subtitle: "View upcoming",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      hoverBgColor: "bg-blue-200"
    },
    {
      icon: <Activity className="h-6 w-6 text-green-600" />,
      title: "Health Stats",
      subtitle: "Check vitals",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      hoverBgColor: "bg-green-200"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-purple-600" />,
      title: "Messages",
      subtitle: "2 unread",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      hoverBgColor: "bg-purple-200"
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-amber-600" />,
      title: "Safety",
      subtitle: "All systems normal",
      bgColor: "bg-amber-100",
      iconColor: "text-amber-600",
      hoverBgColor: "bg-amber-200"
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickAccessItems.map((item, index) => (
          <QuickAccessItem 
            key={index}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            bgColor={item.bgColor}
            iconColor={item.iconColor}
            hoverBgColor={item.hoverBgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default QuickAccess;
