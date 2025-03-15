
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Activity, Thermometer, Stethoscope, Droplets, ArrowUp, ArrowDown } from 'lucide-react';

const VitalsSummaryCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      <Card className="bg-white">
        <CardContent className="p-4 flex flex-col items-center justify-center">
          <Heart className="h-8 w-8 text-red-500 mb-2" />
          <div className="text-sm text-gray-500">Heart Rate</div>
          <div className="text-2xl font-bold">72 bpm</div>
          <div className="text-xs text-green-600 flex items-center">
            <ArrowDown className="h-3 w-3 mr-1" />
            3 from last reading
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-white">
        <CardContent className="p-4 flex flex-col items-center justify-center">
          <Activity className="h-8 w-8 text-blue-500 mb-2" />
          <div className="text-sm text-gray-500">Blood Pressure</div>
          <div className="text-2xl font-bold">120/80</div>
          <div className="text-xs text-amber-600 flex items-center">
            <ArrowUp className="h-3 w-3 mr-1" />
            2/1 from last reading
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-white">
        <CardContent className="p-4 flex flex-col items-center justify-center">
          <Thermometer className="h-8 w-8 text-orange-500 mb-2" />
          <div className="text-sm text-gray-500">Temperature</div>
          <div className="text-2xl font-bold">98.6°F</div>
          <div className="text-xs text-gray-500 flex items-center">
            No change
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-white">
        <CardContent className="p-4 flex flex-col items-center justify-center">
          <Stethoscope className="h-8 w-8 text-purple-500 mb-2" />
          <div className="text-sm text-gray-500">Oxygen Saturation</div>
          <div className="text-2xl font-bold">98%</div>
          <div className="text-xs text-green-600 flex items-center">
            <ArrowUp className="h-3 w-3 mr-1" />
            1% from last reading
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-white">
        <CardContent className="p-4 flex flex-col items-center justify-center">
          <Droplets className="h-8 w-8 text-teal-500 mb-2" />
          <div className="text-sm text-gray-500">Glucose</div>
          <div className="text-2xl font-bold">92 mg/dL</div>
          <div className="text-xs text-amber-600 flex items-center">
            <ArrowUp className="h-3 w-3 mr-1" />
            4 from last reading
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VitalsSummaryCards;
