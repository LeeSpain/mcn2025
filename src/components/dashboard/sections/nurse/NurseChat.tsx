
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageSquare, Send, Users, User, Search } from 'lucide-react';

const NurseChat: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Chat Hub</h1>
          <p className="text-muted-foreground">
            Connect with patients, families, and healthcare team members through secure messaging
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex space-x-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border rounded-md text-sm">
            <Users className="h-4 w-4" />
            <span>Contacts</span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Conversations</CardTitle>
                <Button variant="ghost" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="relative flex-1">
                  <Input placeholder="Search conversations..." className="pr-8" />
                  <Search className="h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>
              
              <Tabs defaultValue="all">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="patients">Patients</TabsTrigger>
                  <TabsTrigger value="team">Team</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            
            <CardContent className="flex-1 overflow-y-auto">
              <div className="space-y-2">
                {/* Patient chat */}
                <div className="flex items-center gap-3 p-2 rounded-md cursor-pointer bg-mcn-blue/10 border border-mcn-blue/20">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-green-100 text-green-800">JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <p className="font-medium text-sm">John Doe (Patient)</p>
                      <span className="text-xs text-muted-foreground">12:45 PM</span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">I've been feeling much better today after...</p>
                  </div>
                </div>
                
                {/* Team member chat */}
                <div className="flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-slate-100">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-mcn-blue text-white">DR</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <p className="font-medium text-sm">Dr. Roberts (Staff)</p>
                      <span className="text-xs text-muted-foreground">10:32 AM</span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">Please review the updated care plan for...</p>
                  </div>
                </div>
                
                {/* Family member chat */}
                <div className="flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-slate-100">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-purple-100 text-purple-800">ML</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <p className="font-medium text-sm">Mary Lange (Family)</p>
                      <span className="text-xs text-muted-foreground">Yesterday</span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">Has my mother been taking her medications?</p>
                  </div>
                </div>
                
                {/* Another team member chat */}
                <div className="flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-slate-100">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-mcn-blue text-white">CN</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <p className="font-medium text-sm">Claire Nguyen (Nurse)</p>
                      <span className="text-xs text-muted-foreground">2 days ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">Can you cover my shift next Thursday?</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="pb-2 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-green-100 text-green-800">JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">John Doe (Patient)</CardTitle>
                    <CardDescription>Last active: 5 min ago</CardDescription>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Users className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Message from patient */}
              <div className="flex gap-3 max-w-[80%]">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-green-100 text-green-800 text-xs">JD</AvatarFallback>
                </Avatar>
                <div className="bg-slate-100 p-3 rounded-lg">
                  <p className="text-sm">Good morning, Nurse. I've been feeling much better today after taking the new medication. The pain has subsided significantly.</p>
                  <p className="text-xs text-muted-foreground mt-1">10:30 AM</p>
                </div>
              </div>
              
              {/* Message from nurse (user) */}
              <div className="flex gap-3 max-w-[80%] ml-auto justify-end">
                <div className="bg-mcn-blue text-white p-3 rounded-lg">
                  <p className="text-sm">That's great to hear, John! Have you experienced any side effects that I should know about?</p>
                  <p className="text-xs text-white/70 mt-1">10:35 AM</p>
                </div>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-mcn-blue text-white text-xs">ME</AvatarFallback>
                </Avatar>
              </div>
              
              {/* Another message from patient */}
              <div className="flex gap-3 max-w-[80%]">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-green-100 text-green-800 text-xs">JD</AvatarFallback>
                </Avatar>
                <div className="bg-slate-100 p-3 rounded-lg">
                  <p className="text-sm">No side effects so far. I've also been able to sleep better at night. The only concern I have is whether I should continue with my physical therapy exercises or wait until next week?</p>
                  <p className="text-xs text-muted-foreground mt-1">10:40 AM</p>
                </div>
              </div>
              
              {/* Message from nurse (user) */}
              <div className="flex gap-3 max-w-[80%] ml-auto justify-end">
                <div className="bg-mcn-blue text-white p-3 rounded-lg">
                  <p className="text-sm">I'd recommend continuing with the gentle exercises we discussed, but avoid any that cause discomfort. We can reassess during our Relex session on Friday.</p>
                  <p className="text-xs text-white/70 mt-1">10:45 AM</p>
                </div>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-mcn-blue text-white text-xs">ME</AvatarFallback>
                </Avatar>
              </div>
              
              {/* Current time indicator */}
              <div className="flex justify-center">
                <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full">Today, 12:45 PM</span>
              </div>
              
              {/* Another message from patient */}
              <div className="flex gap-3 max-w-[80%]">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-green-100 text-green-800 text-xs">JD</AvatarFallback>
                </Avatar>
                <div className="bg-slate-100 p-3 rounded-lg">
                  <p className="text-sm">I've been feeling much better today after taking the new medication. Should I take my blood pressure reading now or wait until this evening?</p>
                  <p className="text-xs text-muted-foreground mt-1">12:45 PM</p>
                </div>
              </div>
            </CardContent>
            
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input placeholder="Type your message..." className="flex-1" />
                <Button className="bg-mcn-blue hover:bg-mcn-blue-dark">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NurseChat;
