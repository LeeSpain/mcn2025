
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  Clock, 
  MapPin, 
  ChevronRight, 
  Calendar,
  CheckCircle,
  Video
} from 'lucide-react';

// Mock data for upcoming remote sessions
const upcomingVisits = [
  {
    id: 1,
    clientName: 'Jan de Vries',
    time: '10:00 AM',
    duration: '45 min',
    address: 'Video Session',
    visitType: 'Medication Review',
    status: 'Scheduled',
    isCompleted: false,
    isVideo: true
  },
  {
    id: 2,
    clientName: 'Anna Koster',
    time: '2:00 PM',
    duration: '60 min',
    address: 'Phone Call',
    visitType: 'Hospital Discharge Follow-up',
    status: 'Scheduled',
    isCompleted: false,
    isVideo: false
  },
  {
    id: 3,
    clientName: 'Willem Janssen',
    time: '8:30 AM',
    duration: '30 min',
    address: 'Video Session',
    visitType: 'Vital Signs Check',
    status: 'Completed',
    isCompleted: true,
    isVideo: true
  },
  {
    id: 4,
    clientName: 'Sofia Peters',
    time: '4:30 PM',
    duration: '45 min',
    address: 'Video Session',
    visitType: 'Wound Care',
    status: 'Scheduled',
    isCompleted: false,
    isVideo: true
  }
];

interface UpcomingVisitsProps {
  fullView?: boolean;
}

const UpcomingVisits: React.FC<UpcomingVisitsProps> = ({ fullView = false }) => {
  // For non-full view, only show incomplete visits and limit to 3
  const visitsToDisplay = fullView 
    ? upcomingVisits 
    : upcomingVisits.filter(v => !v.isCompleted).slice(0, 3);
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl">Today's Relex Schedule</CardTitle>
            <CardDescription>
              {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </CardDescription>
          </div>
          {!fullView && (
            <button className="text-sm text-mcn-blue hover:underline">
              View full schedule
            </button>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-4">
          {visitsToDisplay.map(visit => (
            <div 
              key={visit.id}
              className={`p-3 bg-white border rounded-lg hover:shadow-sm transition-shadow cursor-pointer
                ${visit.isCompleted ? 'bg-gray-50 border-gray-200' : 'border-gray-200'}`}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-start">
                  <div className={`w-10 h-10 rounded-md flex items-center justify-center mr-3
                    ${visit.isCompleted 
                      ? 'bg-gray-100 text-gray-500' 
                      : 'bg-mcn-blue/10 text-mcn-blue'}`}
                  >
                    {visit.isCompleted ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <Video className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium">{visit.clientName}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{visit.visitType}</div>
                    <div className="flex items-center mt-2 text-xs">
                      <Clock className="h-3 w-3 mr-1 text-gray-400" />
                      <span className="text-gray-600 mr-2">{visit.time} ({visit.duration})</span>
                      <MapPin className="h-3 w-3 mr-1 text-gray-400" />
                      <span className="text-gray-600">{visit.address}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className={`text-xs px-2 py-0.5 rounded-full
                    ${visit.isCompleted 
                      ? 'bg-gray-100 text-gray-800' 
                      : 'bg-blue-100 text-blue-800'}`}
                  >
                    {visit.status}
                  </span>
                </div>
              </div>
              {!visit.isCompleted && (
                <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end space-x-2">
                  <button className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded hover:bg-blue-100 transition-colors">
                    Start {visit.isVideo ? 'Video' : 'Call'}
                  </button>
                  <button className="text-xs bg-gray-50 text-gray-700 px-2 py-1 rounded hover:bg-gray-100 transition-colors">
                    Reschedule
                  </button>
                </div>
              )}
            </div>
          ))}
          
          {fullView && (
            <div className="flex justify-center mt-4">
              <button className="flex items-center gap-2 text-sm text-mcn-blue border border-mcn-blue rounded-md px-4 py-2 hover:bg-mcn-blue/5 transition-colors">
                <Calendar className="h-4 w-4" />
                <span>View Weekly Schedule</span>
              </button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingVisits;
