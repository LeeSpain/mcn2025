
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { MessageSquare } from 'lucide-react';

type MessageProps = {
  avatar: string;
  fallback: string;
  fallbackBg: string;
  fallbackColor: string;
  name: string;
  message: string;
  time: string;
};

const Message: React.FC<MessageProps> = ({ 
  avatar, 
  fallback, 
  fallbackBg, 
  fallbackColor, 
  name, 
  message, 
  time 
}) => {
  return (
    <li className="flex gap-3 items-start">
      <Avatar>
        <AvatarImage src={avatar} />
        <AvatarFallback className={`${fallbackBg} ${fallbackColor}`}>{fallback}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">{message}</p>
        <p className="text-xs text-muted-foreground mt-1">{time}</p>
      </div>
    </li>
  );
};

const ChatMessages: React.FC = () => {
  const messages = [
    {
      avatar: "/placeholder.svg",
      fallback: "MS",
      fallbackBg: "bg-mcn-blue",
      fallbackColor: "text-white",
      name: "Dr. Smith (MCN Staff)",
      message: "How are you feeling today? Any improvements?",
      time: "12:45 PM"
    },
    {
      avatar: "/placeholder.svg",
      fallback: "JD",
      fallbackBg: "bg-green-100",
      fallbackColor: "text-green-800",
      name: "John (Son)",
      message: "We'll stop by tomorrow around 2pm.",
      time: "10:23 AM"
    },
    {
      avatar: "/placeholder.svg",
      fallback: "ML",
      fallbackBg: "bg-purple-100",
      fallbackColor: "text-purple-800",
      name: "Mary (Daughter)",
      message: "Did you take your medicine this morning?",
      time: "Yesterday"
    }
  ];

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-mcn-blue" />
            Chat Messages
          </CardTitle>
          <Button variant="link" size="sm" className="text-mcn-blue">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {messages.map((msg, index) => (
            <Message
              key={index}
              avatar={msg.avatar}
              fallback={msg.fallback}
              fallbackBg={msg.fallbackBg}
              fallbackColor={msg.fallbackColor}
              name={msg.name}
              message={msg.message}
              time={msg.time}
            />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ChatMessages;
