
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Thermometer } from 'lucide-react';

type ForecastDayProps = {
  day: string;
  temperature: number;
};

const ForecastDay: React.FC<ForecastDayProps> = ({ day, temperature }) => {
  return (
    <div className="text-center">
      <p className="text-sm font-medium">{day}</p>
      <p className="text-lg font-medium">{temperature}°</p>
    </div>
  );
};

const WeatherForecast: React.FC = () => {
  const forecastDays = [
    { day: 'Thu', temperature: 18 },
    { day: 'Fri', temperature: 19 },
    { day: 'Sat', temperature: 20 },
    { day: 'Sun', temperature: 21 }
  ];

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Thermometer className="h-5 w-5 text-mcn-blue" />
          Weather Forecast
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-3xl font-bold">19°C</p>
            <p className="text-muted-foreground">Amsterdam, NL</p>
          </div>
          <div className="text-right">
            <p className="font-medium">Partly Cloudy</p>
            <p className="text-sm text-muted-foreground">Humidity: 65%</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {forecastDays.map((forecast, index) => (
            <ForecastDay 
              key={index}
              day={forecast.day}
              temperature={forecast.temperature}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherForecast;
