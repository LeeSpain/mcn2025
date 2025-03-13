
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, AlertTriangle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const WelcomeBanner: React.FC = () => {
  const location = useLocation();
  const isStaffDashboard = location.pathname.includes('staff') || location.hash === '#staff';
  const userName = isStaffDashboard ? 'Daisy' : 'Sarah';
  
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <Card className="border-none shadow-md bg-gradient-to-r from-mcn-blue/80 to-mcn-blue">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl text-white">Welcome Back, {userName}!</CardTitle>
        <CardDescription className="text-white/90">{currentDate}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4">
          <Button variant="secondary" size="sm" className="flex items-center gap-2">
            <Phone size={16} />
            Call Family
          </Button>
          <Button variant="secondary" size="sm" className="flex items-center gap-2">
            <Phone size={16} />
            Call Support
          </Button>
          <Button variant="destructive" size="sm" className="flex items-center gap-2">
            <AlertTriangle size={16} />
            Emergency
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeBanner;
