
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, AlertTriangle, Bell, Calendar, Sparkles, HandHeart, Gift, CheckCheck } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const WelcomeBanner: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const isStaffDashboard = location.pathname.includes('staff') || location.hash === '#staff';
  const isNurseDashboard = location.hash === '#nurse-dashboard' || location.hash.includes('nurse');
  
  // Set the name based on the dashboard type
  let userName = 'Anna'; // Changed from Sarah to Anna for member dashboard
  if (isStaffDashboard) {
    userName = 'Daisy';
  } else if (isNurseDashboard) {
    userName = 'Monique';
  }
  
  const [greeting, setGreeting] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    // Set greeting based on time of day
    const hour = currentTime.getHours();
    if (hour < 12) {
      setGreeting(t('dashboard.greeting.morning', 'Good Morning'));
    } else if (hour < 18) {
      setGreeting(t('dashboard.greeting.afternoon', 'Good Afternoon'));
    } else {
      setGreeting(t('dashboard.greeting.evening', 'Good Evening'));
    }
    
    // Update time every minute
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => clearInterval(interval);
  }, [currentTime, t]);
  
  const currentDate = currentTime.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  return (
    <Card className="border-none overflow-hidden shadow-md">
      <div className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-100 text-gray-800">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-blue-200 animate-pulse" style={{ animationDuration: '3s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full bg-blue-200 animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-blue-200 animate-pulse" style={{ animationDuration: '5s' }}></div>
        </div>
        
        <CardHeader className="pb-2 relative z-10">
          <div className="flex items-center">
            <Sparkles className="mr-2 h-5 w-5 text-mcn-blue" />
            <CardTitle className="text-2xl font-bold text-gray-800">
              {greeting}, {userName}!
            </CardTitle>
          </div>
          <CardDescription className="text-gray-600 flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            {currentDate} • {formattedTime}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="relative z-10">
          <div className="mb-4">
            <p className="text-gray-600">{t('dashboard.welcome.message', 'We hope you\'re having a wonderful day. Here\'s your personal dashboard.')}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <Button variant="secondary" size="sm" className="flex items-center gap-2 bg-white/60 hover:bg-white/80 text-mcn-blue border-mcn-blue/20 transition-all hover:scale-105">
              <Phone size={16} />
              {t('dashboard.welcome.callFamily', 'Call Family')}
            </Button>
            <Button variant="secondary" size="sm" className="flex items-center gap-2 bg-white/60 hover:bg-white/80 text-mcn-blue border-mcn-blue/20 transition-all hover:scale-105">
              <Phone size={16} />
              {t('dashboard.welcome.callSupport', 'Call Support')}
            </Button>
            <Button variant="secondary" size="sm" className="flex items-center gap-2 bg-red-100 hover:bg-red-200 text-red-600 border-red-200 transition-all hover:scale-105">
              <AlertTriangle size={16} />
              {t('dashboard.welcome.emergency', 'Emergency')}
            </Button>
          </div>
        </CardContent>
        
        <div className="absolute bottom-0 right-0 p-4 opacity-20">
          <HandHeart size={80} className="text-mcn-blue" />
        </div>
      </div>
      
      <div className="bg-white p-3 flex items-center justify-between border-t border-gray-100">
        <div className="flex items-center text-sm text-gray-600">
          <Gift className="mr-2 h-4 w-4 text-mcn-blue-light" />
          <span>{t('dashboard.welcome.newFeatures', '3 new features available')}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Bell className="mr-2 h-4 w-4 text-mcn-blue-light" />
          <span>{t('dashboard.welcome.notifications', '2 notifications')}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <CheckCheck className="mr-2 h-4 w-4 text-mcn-blue-light" />
          <span>{t('dashboard.welcome.systemStatus', 'All systems operational')}</span>
        </div>
      </div>
    </Card>
  );
};

export default WelcomeBanner;
