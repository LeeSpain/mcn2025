
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Phone,
  Video,
  MessageSquare,
  Mic,
  MicOff,
  Monitor,
  Share2,
  Languages,
  HelpingHand,
  ScreenShare,
  FileCog,
  ShieldCheck,
  Headphones
} from 'lucide-react';

const LiveAssistance: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Live Assistance Tools</CardTitle>
        <CardDescription>Communication and support options</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Communication Options */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-blue-50 pb-2">
              <CardTitle className="text-base">Communication</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Phone className="mr-2 h-4 w-4" />
                <span>Start Call</span>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Video className="mr-2 h-4 w-4" />
                <span>Video Session</span>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MessageSquare className="mr-2 h-4 w-4" />
                <span>Chat Support</span>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Languages className="mr-2 h-4 w-4" />
                <span>Translator</span>
              </Button>
            </CardContent>
          </Card>

          {/* Remote Assistance */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-purple-50 pb-2">
              <CardTitle className="text-base">Remote Assistance</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Monitor className="mr-2 h-4 w-4" />
                <span>Device View</span>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Share2 className="mr-2 h-4 w-4" />
                <span>Screen Share</span>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <HelpingHand className="mr-2 h-4 w-4" />
                <span>Guided Navigation</span>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <ScreenShare className="mr-2 h-4 w-4" />
                <span>Co-browsing</span>
              </Button>
            </CardContent>
          </Card>

          {/* Technical Support */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-amber-50 pb-2">
              <CardTitle className="text-base">Technical Support</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <FileCog className="mr-2 h-4 w-4" />
                <span>Diagnostics</span>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <ShieldCheck className="mr-2 h-4 w-4" />
                <span>Security Check</span>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Headphones className="mr-2 h-4 w-4" />
                <span>Escalate Issue</span>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Active Session UI (Hidden by default, would be shown when a call/chat is active) */}
        <div className="mt-6 border rounded-lg p-4">
          <div className="text-center text-muted-foreground">
            No active assistance session. 
            <br />
            Use the tools above to initiate support.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveAssistance;
