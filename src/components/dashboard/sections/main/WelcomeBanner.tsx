
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, AlertTriangle, Bell, Calendar, Sparkles, HandHeart, Gift, CheckCheck } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const WelcomeBanner: React.FC = () => {
  const location = useLocation();
  const isStaffDashboard = location.pathname.includes('staff') || location.hash === '#staff';
  const isNurseDashboard = location.hash === '#nurse-dashboard' || location.hash.includes('nurse');
  
  // Set the name based on the dashboard type
  let userName = 'Sarah'; // Default for member dashboard
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
      setGreeting('Good Morning');
    } else if (hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
    
    // Update time every minute
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);
  
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
    <Card className="border-none overflow-hidden shadow-lg">
      <div className="relative bg-gradient-to-r from-indigo-500/90 via-purple-500/90 to-pink-500/90 text-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-white animate-pulse" style={{ animationDuration: '3s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full bg-white animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-white animate-pulse" style={{ animationDuration: '5s' }}></div>
        </div>
        
        <CardHeader className="pb-2 relative z-10">
          <div className="flex items-center">
            <Sparkles className="mr-2 h-5 w-5 text-yellow-200" />
            <CardTitle className="text-2xl font-bold">
              {greeting}, {userName}!
            </CardTitle>
          </div>
          <CardDescription className="text-white/90 flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            {currentDate} • {formattedTime}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="relative z-10">
          <div className="mb-4">
            <p className="text-white/90">We hope you're having a wonderful day. Here's your personal dashboard.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <Button variant="secondary" size="sm" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white/10 transition-all hover:scale-105">
              <Phone size={16} />
              Call Family
            </Button>
            <Button variant="secondary" size="sm" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white/10 transition-all hover:scale-105">
              <Phone size={16} />
              Call Support
            </Button>
            <Button variant="secondary" size="sm" className="flex items-center gap-2 bg-red-500/80 hover:bg-red-600/90 text-white border-red-400/30 transition-all hover:scale-105">
              <AlertTriangle size={16} />
              Emergency
            </Button>
          </div>
        </CardContent>
        
        <div className="absolute bottom-0 right-0 p-4 opacity-20">
          <HandHeart size={80} />
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-3 flex items-center justify-between">
        <div className="flex items-center text-sm text-indigo-700">
          <Gift className="mr-2 h-4 w-4" />
          <span>3 new features available</span>
        </div>
        <div className="flex items-center text-sm text-purple-700">
          <Bell className="mr-2 h-4 w-4" />
          <span>2 notifications</span>
        </div>
        <div className="flex items-center text-sm text-pink-700">
          <CheckCheck className="mr-2 h-4 w-4" />
          <span>All systems operational</span>
        </div>
      </div>
    </Card>
  );
};

export default WelcomeBanner;
