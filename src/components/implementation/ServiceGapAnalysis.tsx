
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
  {
    name: "BlueLine Room Limits",
    solution: "Safety Monitoring Sensors note bedroom/bathroom scope",
    tier: "Tier 2/3, Add-On for Tier 1"
  },
  {
    name: "Mint Video Analysis",
    solution: "Safety Monitoring Sensors include video clips",
    tier: "Tier 3, Add-On for Tier 2"
  },
  {
    name: "Google Translation",
    solution: "BBrain/Connect Hub add multilingual support",
    tier: "Tier 3 (Hub), Add-On for Tier 1/2"
  },
  {
    name: "MyPIA WhatsApp",
    solution: "Care Manager integrates WhatsApp reminders",
    tier: "Tier 1/2/3"
  },
  {
    name: "UF Wristband Vibrations",
    solution: "Wearable Health Tracker adds vibrations",
    tier: "Tier 2/3, Add-On for Tier 1"
  },
  {
    name: "HelpSoq",
    solution: "Shop Gateway lists it",
    tier: "Tier 2/3, Add-On for Tier 1"
  },
  {
    name: "Lavicta Body Dryer",
    solution: "Shop Gateway/Home Automation Controls",
    tier: "Tier 3, Add-On for Tier 1/2"
  },
  {
    name: "Exercise Coach Program",
    solution: "Care Manager includes 12-week module",
    tier: "Tier 3, Add-On for Tier 1/2"
  },
  {
    name: "Nettie Well-Organized",
    solution: "Family Access/Care Manager add agenda",
    tier: "Tier 3, Add-On for Tier 1/2"
  },
  {
    name: "SeniorsTAB Dementia Design",
    solution: "Connect Hub offers dementia-friendly interface",
    tier: "Tier 3, Add-On for Tier 1/2"
  },
  {
    name: "WAIT App Content",
    solution: "Digital Photo Frame includes magazines/books",
    tier: "Tier 3, Add-On for Tier 1/2"
  },
  {
    name: "Secure Email",
    solution: "Provider Connectivity adds email export",
    tier: "Tier 3, Add-On for Tier 1/2"
  },
  {
    name: "DigitalHome Municipal Model",
    solution: "Remote Setup Assistance coordinates",
    tier: "Tier 3, Add-On for Tier 1/2"
  },
  {
    name: "NCare Medication Checks",
    solution: "ClientSync integrates NCare",
    tier: "Tier 3, Add-On for Tier 1/2"
  },
  {
    name: "Demo Packages",
    solution: "Dedicated Support offers demos",
    tier: "Tier 3, Add-On for Tier 1/2"
  },
  {
    name: "Testing Opportunities",
    solution: "Shop Gateway includes trials",
    tier: "Tier 3, Add-On for Tier 1/2"
  },
  {
    name: "Alarm Protocols",
    solution: "ClientSync provides flowchart/text templates",
    tier: "Tier 3, Add-On for Tier 1/2"
  },
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
  {
    name: "NEN7510/ISO Certifications",
    solution: "Confirmed in Privacy Policy/About Us",
    tier: "All tiers"
  },
  {
    name: "Connectivity Partnerships",
    solution: "VodafoneZiggo/KPN IoT/Vivago listed as MCN partners",
    tier: "All tiers"
  },
  {
    name: "Client Registration",
    solution: "Centralized Management uses questionnaires/Floortje AI",
    tier: "All tiers"
  }
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
