
import React, { memo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Phone,
  Video,
  MessageSquare,
  Mail,
  Eye,
  Monitor,
  MousePointer
} from 'lucide-react';

// Extract card components to reduce re-renders
const CommunicationCard = memo(({ title, icon, color, buttons }: {
  title: string;
  icon: React.ReactNode;
  color: string;
  buttons: { icon: React.ReactNode, label: string }[];
}) => (
  <Card>
    <CardHeader className="pb-2">
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="flex justify-center">
          <div className={`w-20 h-20 rounded-full ${color} flex items-center justify-center`}>
            {icon}
          </div>
        </div>
        <div className="flex justify-center gap-2">
          {buttons.map((button, idx) => (
            <Button key={idx} size="sm" variant="outline">
              {button.icon}
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
));

CommunicationCard.displayName = 'CommunicationCard';

const LiveAssistance: React.FC = memo(() => {
  const communicationCards = [
    {
      title: 'Voice Communication',
      icon: <Phone className="h-8 w-8 text-blue-600" />,
      color: 'bg-blue-100',
      buttons: [
        { icon: <Phone className="h-4 w-4 mr-2" />, label: 'Call' },
        { icon: <Video className="h-4 w-4 mr-2" />, label: 'Video' }
      ]
    },
    {
      title: 'Text Communication',
      icon: <MessageSquare className="h-8 w-8 text-green-600" />,
      color: 'bg-green-100',
      buttons: [
        { icon: <MessageSquare className="h-4 w-4 mr-2" />, label: 'Chat' },
        { icon: <Mail className="h-4 w-4 mr-2" />, label: 'Email' }
      ]
    },
    {
      title: 'Remote Assistance',
      icon: <Monitor className="h-8 w-8 text-purple-600" />,
      color: 'bg-purple-100',
      buttons: [
        { icon: <Eye className="h-4 w-4 mr-2" />, label: 'View' },
        { icon: <MousePointer className="h-4 w-4 mr-2" />, label: 'Control' }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Live Client Assistance</CardTitle>
          <CardDescription>Communication tools and remote assistance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {communicationCards.map((card, idx) => (
              <CommunicationCard
                key={idx}
                title={card.title}
                icon={card.icon}
                color={card.color}
                buttons={card.buttons}
              />
            ))}
          </div>
          
          <p className="text-center text-muted-foreground">Select a client from the client list to initiate assistance</p>
        </CardContent>
      </Card>
    </div>
  );
});

LiveAssistance.displayName = 'LiveAssistance';

export default LiveAssistance;
