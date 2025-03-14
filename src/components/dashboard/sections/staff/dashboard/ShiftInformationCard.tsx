
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ShiftInformationCard: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Shift Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="text-sm flex justify-between mb-1">
              <span>Scheduled Break:</span>
              <span className="font-medium">15:30 - 16:00</span>
            </div>
            <div className="text-sm flex justify-between mb-1">
              <span>Shift Ends:</span>
              <span className="font-medium">18:00</span>
            </div>
            <div className="text-sm flex justify-between">
              <span>Team Meeting:</span>
              <span className="font-medium">14:00 - 14:30</span>
            </div>
          </div>
          
          <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
            <div className="font-medium mb-1">Team Status</div>
            <div className="text-sm flex justify-between">
              <span>Available Agents:</span>
              <span className="font-medium">8/12</span>
            </div>
            <div className="text-sm flex justify-between">
              <span>Queue Load:</span>
              <span className="font-medium">Medium</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShiftInformationCard;
