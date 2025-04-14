
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Laptop, 
  ActivitySquare, 
  Clock, 
  ShieldCheck, 
  Video, 
  ShoppingCart, 
  HeartPulse, 
  Users, 
  CheckSquare, 
  AlertCircle 
} from 'lucide-react';

// Implementation status types
type Status = 'planned' | 'in-progress' | 'completed' | 'blocked';

interface ComponentStatus {
  name: string;
  description: string;
  status: Status;
  progress: number;
  icon: React.ReactNode;
  gaps: string[];
  suppliers: string[];
}

const MCNImplementationDashboard = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  // Status data for all MCN components
  const componentsStatus: ComponentStatus[] = [
    {
      name: "Care Manager",
      description: "Tasks, medications, and appointments tracking with voice reminders",
      status: "in-progress",
      progress: 40,
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      gaps: [
        "MyPIA's WhatsApp-Based Reminders",
        "Exercise Coach's 12-Week ADL Program",
        "Nettie Well-Organized Joint Agenda"
      ],
      suppliers: ["BBrain", "Spencer/Dosell", "Nettie"]
    },
    {
      name: "Safety Monitor",
      description: "Monitors activity/vitals, auto-alerts caregivers",
      status: "planned",
      progress: 15,
      icon: <ShieldCheck className="h-8 w-8 text-red-500" />,
      gaps: [
        "Vivago Watch's Specialized Alarms",
        "BlueLine Fall Detection's Room Limitations",
        "Mint 3D Sensor's Video Analysis"
      ],
      suppliers: ["Vivago", "BlueLine", "Mint", "Sidly", "WISBI"]
    },
    {
      name: "Connect Hub",
      description: "Unlimited video calls/messaging with family/providers",
      status: "planned",
      progress: 10,
      icon: <Video className="h-8 w-8 text-purple-500" />,
      gaps: [
        "Google Home/Hub's Translation Feature",
        "SeniorsTAB Dementia-Friendly Design"
      ],
      suppliers: ["Google", "SeniorsTAB", "OZO Connected Care"]
    },
    {
      name: "Shop Gateway",
      description: "Marketplace for safety equipment/services",
      status: "planned",
      progress: 5,
      icon: <ShoppingCart className="h-8 w-8 text-green-500" />,
      gaps: [
        "HelpSoq Compression Stocking Aid",
        "Lavicta Body Dryer",
        "Demo Packages with Return Conditions",
        "Testing Opportunities for New Tools"
      ],
      suppliers: ["HelpSoq", "Lavicta", "SUP"]
    },
    {
      name: "Health View",
      description: "Visualizes health stats, shareable with providers",
      status: "planned",
      progress: 20,
      icon: <HeartPulse className="h-8 w-8 text-pink-500" />,
      gaps: [
        "FreeStyle Libre Non-Reimbursed Supply Model",
        "Manual Saturation Meter Support",
        "WAIT App for Digital Content"
      ],
      suppliers: ["Abbott", "Withings", "Amiko", "Fitbit/Swisstone"]
    },
    {
      name: "ClientSync",
      description: "Unified caregiver dashboard",
      status: "planned",
      progress: 25,
      icon: <Users className="h-8 w-8 text-amber-500" />,
      gaps: [
        "NCare Medication Sign-Off/Double Checks",
        "Alarm Protocols (Flowchart and Text)",
        "Secure Email for Manual Data Sharing"
      ],
      suppliers: ["Nedap", "cBoards"]
    },
    {
      name: "Technical Support",
      description: "24/7 Technical Support and Remote Setup Assistance",
      status: "in-progress",
      progress: 30,
      icon: <Laptop className="h-8 w-8 text-sky-500" />,
      gaps: [
        "Thermometer Wi-Fi Setup",
        "Specific Return Processes",
        "Dedicated Customer Service Channels",
        "DigitalHome's Municipal Partnership Model"
      ],
      suppliers: ["VodafoneZiggo", "KPN IoT"]
    },
    {
      name: "Certifications & Operations",
      description: "Security, partnerships, and onboarding",
      status: "planned",
      progress: 10,
      icon: <ActivitySquare className="h-8 w-8 text-indigo-500" />,
      gaps: [
        "NEN7510/ISO Certifications",
        "Partnerships for Connectivity",
        "Client Registration Process"
      ],
      suppliers: ["ZorgDomein", "Municipalities/Organizations"]
    }
  ];
  
  // Calculate overall implementation progress
  const overallProgress = Math.round(
    componentsStatus.reduce((acc, component) => acc + component.progress, 0) / componentsStatus.length
  );
  
  // Filter components by status
  const getComponentsByStatus = (status: Status) => {
    return componentsStatus.filter(component => component.status === status);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="pt-20 md:pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Mobile Care Nexus Implementation Dashboard</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tracking the progress of transitioning from MobileCare to Mobile Care Nexus (MCN)
            </p>
            
            {/* Overall Progress Indicator */}
            <div className="mt-8 max-w-lg mx-auto">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Overall Implementation Progress</span>
                <span className="font-semibold">{overallProgress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full"
                  style={{ width: `${overallProgress}%` }}
                ></div>
              </div>
              
              {/* Status Legend */}
              <div className="flex flex-wrap justify-center mt-4 gap-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span>Planned</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                  <span>In Progress</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span>Completed</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <span>Blocked</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Components Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {componentsStatus.map((component) => (
              <div 
                key={component.name} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigate(`/mcn-component/${component.name.toLowerCase().replace(/\s+/g, '-')}`)}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 rounded-full bg-gray-100">
                      {component.icon}
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium 
                      ${component.status === 'planned' ? 'bg-blue-100 text-blue-800' : 
                        component.status === 'in-progress' ? 'bg-amber-100 text-amber-800' : 
                        component.status === 'completed' ? 'bg-green-100 text-green-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {component.status.charAt(0).toUpperCase() + component.status.slice(1)}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{component.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{component.description}</p>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div 
                      className={`h-2 rounded-full 
                        ${component.status === 'blocked' ? 'bg-red-500' : 'bg-blue-500'}`}
                      style={{ width: `${component.progress}%` }}
                    ></div>
                  </div>
                  
                  {/* Gaps to address */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1 text-amber-500" />
                      Gaps to Address ({component.gaps.length})
                    </h4>
                    <ul className="mt-2 text-xs text-gray-600">
                      {component.gaps.slice(0, 2).map((gap, index) => (
                        <li key={index} className="flex items-start mb-1">
                          <span className="mr-1">•</span>
                          <span>{gap}</span>
                        </li>
                      ))}
                      {component.gaps.length > 2 && (
                        <li className="text-blue-500 hover:underline">+ {component.gaps.length - 2} more</li>
                      )}
                    </ul>
                  </div>
                  
                  {/* Suppliers */}
                  <div>
                    <h4 className="text-sm font-medium flex items-center">
                      <CheckSquare className="h-4 w-4 mr-1 text-green-500" />
                      Suppliers ({component.suppliers.length})
                    </h4>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {component.suppliers.slice(0, 3).map((supplier, index) => (
                        <span key={index} className="px-2 py-0.5 bg-gray-100 text-gray-800 rounded-full text-xs">
                          {supplier}
                        </span>
                      ))}
                      {component.suppliers.length > 3 && (
                        <span className="px-2 py-0.5 bg-gray-100 text-blue-500 rounded-full text-xs">
                          +{component.suppliers.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Implementation Phases */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Implementation Phases</h2>
            <div className="space-y-6">
              {[
                {
                  phase: "1. Platform Architecture & Foundation",
                  description: "Establish core architecture, security standards, and data integration layer",
                  status: "in-progress",
                  timeline: "Current - Week 6"
                },
                {
                  phase: "2. Measurement Devices & Monitors",
                  description: "Integrate all medical devices and monitoring systems",
                  status: "planned",
                  timeline: "Week 4 - Week 10"
                },
                {
                  phase: "3. Daily Structure & Reminders",
                  description: "Implement reminders and daily structure capabilities",
                  status: "planned",
                  timeline: "Week 8 - Week 12"
                },
                {
                  phase: "4. Lifestyle & Wellbeing",
                  description: "Implement lifestyle tools and wellbeing features",
                  status: "planned",
                  timeline: "Week 10 - Week 16"
                },
                {
                  phase: "5. Data Management & Services",
                  description: "Implement data sharing and additional services",
                  status: "planned",
                  timeline: "Week 14 - Week 20"
                },
                {
                  phase: "6. Staff Support & Operations",
                  description: "Implement staff support and operational capabilities",
                  status: "planned",
                  timeline: "Week 18 - Week 24"
                },
                {
                  phase: "7. Supplier Integration",
                  description: "Rebrand and integrate all suppliers under MCN",
                  status: "planned",
                  timeline: "Week 22 - Week 28"
                },
                {
                  phase: "8. Testing & Validation",
                  description: "Ensure all components work seamlessly together",
                  status: "planned",
                  timeline: "Week 26 - Week 32"
                },
                {
                  phase: "9. Migration & Transition",
                  description: "Ensure smooth transition from MobileCare to MCN",
                  status: "planned",
                  timeline: "Week 30 - Week 36"
                },
                {
                  phase: "10. Launch & Monitoring",
                  description: "Launch platform and monitor performance",
                  status: "planned",
                  timeline: "Week 34 - Week 40"
                }
              ].map((phase, index) => (
                <div key={index} className="bg-white p-5 rounded-lg shadow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">{phase.phase}</h3>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                      <span className="text-sm text-gray-500">{phase.timeline}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap
                        ${phase.status === 'planned' ? 'bg-blue-100 text-blue-800' : 
                          phase.status === 'in-progress' ? 'bg-amber-100 text-amber-800' : 
                          phase.status === 'completed' ? 'bg-green-100 text-green-800' : 
                          'bg-red-100 text-red-800'}`}>
                        {phase.status.charAt(0).toUpperCase() + phase.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gap Analysis Summary */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Gap Analysis Summary</h2>
            <div className="overflow-x-auto shadow rounded-lg">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Gap</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">MCN Component</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Priority</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { gap: "FreeStyle Libre Non-Reimbursed Supply", component: "Health View", priority: "High", status: "Planned" },
                    { gap: "Manual Saturation Meter Support", component: "Health View", priority: "High", status: "Planned" },
                    { gap: "Thermometer Wi-Fi Setup", component: "Technical Support", priority: "Medium", status: "In Progress" },
                    { gap: "Vivago Watch's Specialized Alarms", component: "Safety Monitor", priority: "High", status: "Planned" },
                    { gap: "BlueLine Fall Detection's Room Limitations", component: "Safety Monitor", priority: "Medium", status: "Planned" },
                    { gap: "Google Home/Hub's Translation Feature", component: "Connect Hub", priority: "Medium", status: "Planned" },
                    { gap: "MyPIA's WhatsApp-Based Reminders", component: "Care Manager", priority: "Medium", status: "In Progress" },
                    { gap: "UF Wristband's Vibration-Based Reminders", component: "Care Manager", priority: "Medium", status: "Planned" },
                    { gap: "HelpSoq Compression Stocking Aid", component: "Shop Gateway", priority: "Medium", status: "Planned" },
                    { gap: "Lavicta Body Dryer", component: "Shop Gateway", priority: "Medium", status: "Planned" }
                  ].map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm">{item.gap}</td>
                      <td className="py-3 px-4 text-sm">{item.component}</td>
                      <td className="py-3 px-4 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium
                          ${item.priority === 'High' ? 'bg-red-100 text-red-800' : 
                            item.priority === 'Medium' ? 'bg-amber-100 text-amber-800' : 
                            'bg-blue-100 text-blue-800'}`}>
                          {item.priority}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium
                          ${item.status === 'Planned' ? 'bg-blue-100 text-blue-800' : 
                            item.status === 'In Progress' ? 'bg-amber-100 text-amber-800' : 
                            item.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                            'bg-red-100 text-red-800'}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-2 text-right">
              <button className="text-blue-500 hover:underline text-sm">View all 26 gaps</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MCNImplementationDashboard;
