
import React from 'react';
import WelcomeBanner from './main/WelcomeBanner';
import QuickAccess from './main/QuickAccess';
import DailyAgenda from './main/DailyAgenda';
import HealthStats from './main/HealthStats';
import ChatMessages from './main/ChatMessages';
import Notifications from './main/Notifications';
import ConnectedDevices from './main/ConnectedDevices';
import WeatherForecast from './main/WeatherForecast';

const MainDashboard: React.FC = () => {
  return (
    <div className="space-y-6 w-full max-w-full">
      {/* Welcome Banner */}
      <WelcomeBanner />

      {/* Quick Access Section */}
      <QuickAccess />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {/* Daily Agenda */}
        <DailyAgenda />

        {/* Health Stats */}
        <HealthStats />

        {/* Family Messages - Quick Chat Preview */}
        <ChatMessages />

        {/* Notifications */}
        <Notifications />

        {/* Device Status */}
        <ConnectedDevices />

        {/* Weather Information */}
        <WeatherForecast />
      </div>
    </div>
  );
};

export default MainDashboard;
