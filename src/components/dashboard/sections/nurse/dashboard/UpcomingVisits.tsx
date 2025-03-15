
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
import { useLanguage } from '@/context/LanguageContext';
import { format, isToday, isSameDay } from 'date-fns';

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
    isVideo: true,
    date: new Date()
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
    isVideo: false,
    date: new Date()
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
    isVideo: true,
    date: new Date()
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
    isVideo: true,
    date: new Date(new Date().setDate(new Date().getDate() + 1))
  },
  {
    id: 5,
    clientName: 'Pieter Bakker',
    time: '11:15 AM',
    duration: '30 min',
    address: 'Video Session',
    visitType: 'Medication Adjustment',
    status: 'Scheduled',
    isCompleted: false,
    isVideo: true,
    date: new Date(new Date().setDate(new Date().getDate() + 2))
  }
];

interface UpcomingVisitsProps {
  fullView?: boolean;
  selectedDate?: Date;
}

const UpcomingVisits: React.FC<UpcomingVisitsProps> = ({ fullView = false, selectedDate }) => {
  const activeDate = selectedDate || new Date();
  
  // Filter visits for the selected date
  const filteredVisits = upcomingVisits.filter(visit => 
    selectedDate ? isSameDay(visit.date, activeDate) : !visit.isCompleted
  );
  
  // For non-full view, only show incomplete visits and limit to 3
  const visitsToDisplay = fullView 
    ? filteredVisits 
    : filteredVisits.filter(v => !v.isCompleted).slice(0, 3);
  
  const { t, language } = useLanguage();
  
  // Get today's date in the current language format
  const getDateFormatted = (date: Date) => {
    return date.toLocaleDateString(language === 'nl' ? 'nl-NL' : 'en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl">
              {isToday(activeDate) 
                ? t('nurse.today.schedule') 
                : t('nurse.selected.schedule')}
            </CardTitle>
            <CardDescription>
              {getDateFormatted(activeDate)}
            </CardDescription>
          </div>
          {!fullView && (
            <button 
              className="text-sm text-mcn-blue hover:underline"
              onClick={() => window.location.hash = 'visit-schedule'}
            >
              {t('nurse.viewFull.schedule')}
            </button>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-4">
          {visitsToDisplay.length > 0 ? (
            visitsToDisplay.map(visit => (
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
                      {visit.isCompleted ? t('nurse.visit.completed') : t('nurse.visit.scheduled')}
                    </span>
                  </div>
                </div>
                {!visit.isCompleted && (
                  <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end space-x-2">
                    <button className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded hover:bg-blue-100 transition-colors">
                      {t(visit.isVideo ? 'nurse.visit.startVideo' : 'nurse.visit.startCall')}
                    </button>
                    <button className="text-xs bg-gray-50 text-gray-700 px-2 py-1 rounded hover:bg-gray-100 transition-colors">
                      {t('nurse.visit.reschedule')}
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center p-8 text-gray-500">
              <Calendar className="h-12 w-12 mx-auto text-gray-300 mb-2" />
              <p>{t('nurse.noSessions')}</p>
              <button className="mt-4 text-sm bg-mcn-blue text-white px-3 py-1.5 rounded hover:bg-blue-700 transition-colors">
                {t('nurse.schedule.newSession')}
              </button>
            </div>
          )}
          
          {fullView && visitsToDisplay.length > 0 && (
            <div className="flex justify-center mt-4">
              <button 
                className="flex items-center gap-2 text-sm text-mcn-blue border border-mcn-blue rounded-md px-4 py-2 hover:bg-mcn-blue/5 transition-colors"
                onClick={() => window.location.hash = 'appointments'}
              >
                <Calendar className="h-4 w-4" />
                <span>{t('nurse.viewWeekly')}</span>
              </button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingVisits;
