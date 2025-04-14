
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
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
  AlertCircle,
  ArrowRight,
  BarChart,
  Calendar
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<string>('overview');
  
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

  // All gaps collected from all components
  const allGaps = componentsStatus.flatMap(component => 
    component.gaps.map(gap => ({
      gap,
      component: component.name,
      priority: gap.includes("NEN7510") || gap.includes("NCare") || gap.includes("Vivago") || gap.includes("FreeStyle") 
        ? "High" 
        : gap.includes("MyPIA") || gap.includes("Thermometer") || gap.includes("BlueLine") 
          ? "Medium" 
          : "Low",
      status: component.status === 'in-progress' ? "In Progress" : "Planned"
    }))
  );

  // Implementation phases with their status
  const implementationPhases = [
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
  ];

  // Handler for launching the staff demo
  const handleLaunchStaffDemo = () => {
    toast({
      title: "Launching Staff Portal Demo",
      description: "Redirecting to the MCN Staff Portal demonstration",
    });
    setTimeout(() => navigate('/staff-demo'), 1000);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <Toaster />
      <div className="pt-20 md:pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Mobile Care Nexus Implementation Dashboard</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tracking the progress of transitioning from MobileCare to Mobile Care Nexus (MCN)
            </p>
            
            {/* Demo Access Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              <button 
                onClick={handleLaunchStaffDemo} 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-mcn-blue text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Users className="h-4 w-4" />
                Launch Staff Portal Demo
              </button>
              
              <button 
                onClick={() => navigate('/dashboard')} 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                <ShieldCheck className="h-4 w-4" />
                Access Member Portal
              </button>
            </div>
            
            {/* Tabs Navigation */}
            <div className="mt-8">
              <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-3 mb-6 max-w-lg mx-auto">
                  <TabsTrigger value="overview" className="data-[state=active]:bg-mcn-blue data-[state=active]:text-white">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="gaps" className="data-[state=active]:bg-mcn-blue data-[state=active]:text-white">
                    Gaps Analysis
                  </TabsTrigger>
                  <TabsTrigger value="suppliers" className="data-[state=active]:bg-mcn-blue data-[state=active]:text-white">
                    Supplier Integration
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  {/* Overall Progress Indicator */}
                  <div className="max-w-lg mx-auto mb-8">
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
                  
                  {/* Components Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
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
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Implementation Phases</h2>
                    <div className="space-y-6">
                      {implementationPhases.map((phase, index) => (
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
                </TabsContent>
                
                <TabsContent value="gaps">
                  {/* Gap Analysis Summary */}
                  <div className="mb-8">
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
                          {allGaps.slice(0, 10).map((item, index) => (
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
                      <button 
                        onClick={() => setActiveTab("fullGapsList")}
                        className="text-blue-500 hover:underline text-sm flex items-center justify-end ml-auto"
                      >
                        View all 26 gaps
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Gap Categories */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[
                      { title: "Measurement Devices", count: 3, icon: <HeartPulse className="h-5 w-5 text-red-500" /> },
                      { title: "Monitors", count: 3, icon: <ShieldCheck className="h-5 w-5 text-blue-500" /> },
                      { title: "Daily Structure", count: 3, icon: <Calendar className="h-5 w-5 text-green-500" /> },
                      { title: "Lifestyle & Wellbeing", count: 6, icon: <Users className="h-5 w-5 text-purple-500" /> },
                      { title: "Data Management", count: 1, icon: <BarChart className="h-5 w-5 text-indigo-500" /> },
                      { title: "Additional Services", count: 4, icon: <ShoppingCart className="h-5 w-5 text-amber-500" /> },
                      { title: "Staff Support", count: 3, icon: <Laptop className="h-5 w-5 text-teal-500" /> },
                      { title: "Operations", count: 3, icon: <ActivitySquare className="h-5 w-5 text-gray-500" /> }
                    ].map((category, index) => (
                      <div key={index} className="bg-white p-5 rounded-lg shadow-md">
                        <div className="flex items-center gap-3 mb-3">
                          {category.icon}
                          <h3 className="font-semibold">{category.title}</h3>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold">{category.count}</span>
                          <span className="text-sm text-gray-500">gaps to address</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="suppliers">
                  {/* Supplier Integration Overview */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-6">Supplier Integration Plan</h2>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                      <h3 className="text-lg font-semibold mb-3">Rebranding Strategy</h3>
                      <p className="mb-4">
                        All MobileCare suppliers will be integrated under the MCN brand to maintain service 
                        continuity while enhancing the unified platform experience.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold mb-2 flex items-center">
                            <CheckSquare className="h-4 w-4 mr-2 text-green-500" />
                            Device Suppliers
                          </h4>
                          <p className="text-sm text-gray-600 mb-2">
                            All devices rebranded under MCN (e.g., "MCN FreeStyle Libre")
                          </p>
                          <div className="text-xs text-gray-500">17 suppliers to integrate</div>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold mb-2 flex items-center">
                            <CheckSquare className="h-4 w-4 mr-2 text-blue-500" />
                            Connectivity Partners
                          </h4>
                          <p className="text-sm text-gray-600 mb-2">
                            Rebranded as "MCN Connectivity Partners" with fallback options
                          </p>
                          <div className="text-xs text-gray-500">3 partners to integrate</div>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold mb-2 flex items-center">
                            <CheckSquare className="h-4 w-4 mr-2 text-purple-500" />
                            Platform Partners
                          </h4>
                          <p className="text-sm text-gray-600 mb-2">
                            Platforms integrated into MCN components (e.g., Nedap into ClientSync)
                          </p>
                          <div className="text-xs text-gray-500">6 platforms to integrate</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Supplier Categories */}
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Device Suppliers (17)</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                          {[
                            "Abbott (FreeStyle Libre)",
                            "Sidly",
                            "Withings",
                            "Amiko",
                            "Vivago",
                            "Lifewatcher",
                            "BlueLine",
                            "WISBI",
                            "Mintt (Mint)",
                            "Fitbit/Swisstone",
                            "Spencer/Dosell",
                            "BBrain",
                            "Google (Home/Hub)",
                            "HelpSoq",
                            "Lavicta",
                            "SeniorsTAB",
                            "iPhone/iPad"
                          ].map((supplier, index) => (
                            <div key={index} className="bg-gray-50 px-3 py-2 rounded-md text-sm">
                              {supplier}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Connectivity Partners (3)</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {[
                            "VodafoneZiggo",
                            "KPN IoT",
                            "Vivago Connectivity"
                          ].map((partner, index) => (
                            <div key={index} className="bg-gray-50 px-3 py-2 rounded-md text-sm">
                              {partner}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Platform Partners (6)</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {[
                            "Nedap (ONS, NCare)",
                            "SUP",
                            "OZO Connected Care",
                            "cBoards",
                            "ZorgDomein",
                            "Nettie"
                          ].map((platform, index) => (
                            <div key={index} className="bg-gray-50 px-3 py-2 rounded-md text-sm">
                              {platform}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Other Partners (2)</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            "Municipalities/Organizations",
                            "Regional Healthcare Providers"
                          ].map((other, index) => (
                            <div key={index} className="bg-gray-50 px-3 py-2 rounded-md text-sm">
                              {other}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="fullGapsList">
                  {/* Full List of 26 Gaps */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold">Complete Gap Analysis (26 Gaps)</h2>
                      <button 
                        onClick={() => setActiveTab("gaps")}
                        className="text-blue-500 hover:underline text-sm flex items-center"
                      >
                        Back to summary
                      </button>
                    </div>
                    
                    <div className="overflow-x-auto shadow rounded-lg">
                      <table className="min-w-full bg-white">
                        <thead>
                          <tr className="bg-gray-100 border-b">
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">#</th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Gap</th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Category</th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">MCN Component</th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Priority</th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {allGaps.map((item, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                              <td className="py-3 px-4 text-sm font-medium">{index + 1}</td>
                              <td className="py-3 px-4 text-sm">{item.gap}</td>
                              <td className="py-3 px-4 text-sm">
                                {item.gap.includes("Libre") || item.gap.includes("Saturation") || item.gap.includes("Thermometer") 
                                  ? "Measurement Devices" 
                                  : item.gap.includes("Vivago") || item.gap.includes("BlueLine") || item.gap.includes("Mint") 
                                    ? "Monitors"
                                    : item.gap.includes("Google") || item.gap.includes("MyPIA") || item.gap.includes("UF Wristband") 
                                      ? "Daily Structure"
                                      : item.gap.includes("HelpSoq") || item.gap.includes("Lavicta") || item.gap.includes("Exercise") || item.gap.includes("Nettie") || item.gap.includes("SeniorsTAB") || item.gap.includes("WAIT") 
                                        ? "Lifestyle & Wellbeing"
                                        : item.gap.includes("Email") 
                                          ? "Data Management"
                                          : item.gap.includes("DigitalHome") || item.gap.includes("NCare") || item.gap.includes("Demo") || item.gap.includes("Testing") 
                                            ? "Additional Services"
                                            : item.gap.includes("Alarm") || item.gap.includes("Return") || item.gap.includes("Customer") 
                                              ? "Staff Support"
                                              : "Operations"
                                }
                              </td>
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
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MCNImplementationDashboard;
