
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface ServiceGap {
  name: string;
  solution: string;
  tier: string;
}

const serviceGaps: ServiceGap[] = [
  {
    name: "FreeStyle Libre Supply",
    solution: "Shop Gateway specifies MCN supply model",
    tier: "Tier 2/3, Add-On for Tier 1"
  },
  {
    name: "Manual Saturation Meter",
    solution: "Health View accepts manual inputs, Connect Hub for coach",
    tier: "Tier 2/3, Add-On for Tier 1"
  },
  {
    name: "Thermometer Wi-Fi Setup",
    solution: "Remote Setup Assistance, 24/7 Technical Support guides",
    tier: "All tiers"
  },
  {
    name: "Vivago Alarms",
    solution: "Safety Monitor supports unconsciousness/hypothermia/epilepsy",
    tier: "Tier 3, Add-On for Tier 2"
  },
  // Add all 26 gaps here
  {
    name: "Return Processes",
    solution: "24/7 Technical Support, includes mail/pickup/regional pilot",
    tier: "All tiers"
  },
  {
    name: "Customer Service Channels",
    solution: "24/7 Technical Support adds email (support@mcncare.com), phone (+31 numbers)",
    tier: "All tiers"
  },
];

const ServiceGapAnalysis: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>MCN Service Gap Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {serviceGaps.map((gap, index) => (
            <div key={index} className="border rounded-lg p-4 flex items-center space-x-4">
              <CheckCircle className="text-green-500 h-6 w-6" />
              <div>
                <h3 className="font-semibold">{gap.name}</h3>
                <p className="text-sm text-gray-600">{gap.solution}</p>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mt-2 inline-block">
                  {gap.tier}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceGapAnalysis;
