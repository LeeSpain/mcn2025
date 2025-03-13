
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  User,
  MapPin,
  Phone,
  Mail,
  Calendar,
} from 'lucide-react';

const ClientInformation: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Client Profile</CardTitle>
            <CardDescription>Currently viewing</CardDescription>
          </div>
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium text-xl">
            JV
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Jan de Vries</h3>
          <div className="text-sm text-muted-foreground">Premium Membership • Since Apr 2022</div>
        </div>
        
        <div className="grid grid-cols-1 gap-3 text-sm">
          <div className="flex items-start">
            <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
            <span>Amstelstraat 24, 1017 DA Amsterdam</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>+31 6 12345678</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>j.devries@example.com</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>DOB: 12 May 1945 (78 years)</span>
          </div>
        </div>

        <div className="border-t pt-3">
          <h4 className="font-medium mb-2">Special Notes</h4>
          <div className="bg-amber-50 border border-amber-200 rounded p-2 text-sm">
            <div className="font-medium text-amber-800">Hearing impairment</div>
            <div className="text-amber-700">Prefers video calls with captions or written communication</div>
          </div>
        </div>

        <div className="border-t pt-3">
          <h4 className="font-medium mb-2">Care Circle</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs mr-2">
                  M
                </div>
                <span className="text-sm">Maria de Vries (Daughter)</span>
              </div>
              <Button variant="ghost" size="sm" className="h-7 px-2">
                <Phone className="h-3 w-3" />
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs mr-2">
                  P
                </div>
                <span className="text-sm">Peter de Vries (Son)</span>
              </div>
              <Button variant="ghost" size="sm" className="h-7 px-2">
                <Phone className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientInformation;
