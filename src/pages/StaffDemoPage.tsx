import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { LanguageProvider } from '@/context/LanguageContext';
import { Check, Users, ShieldCheck, Heart, MessageCircle, BookOpen, BarChart, Activity, PieChart, TrendingUp, Database, GraduationCap, FileText, FolderCheck, Video, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from "@/hooks/use-toast";

const StaffDemoPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('features');
  
  // Ensure scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set initial hash for staff dashboard view
    if (!window.location.hash) {
      window.location.hash = 'staff';
    }
  }, []);
  
  // Staff portal features with icons
  const staffFeatures = [
    { 
      icon: Users, 
      title: "Client Management",
      description: "Comprehensive client profiles, caseload management, and service coordination."
    },
    { 
      icon: Heart, 
      title: "Health Monitoring",
      description: "Real-time health data tracking, alerts, and trend analysis across devices."
    },
    { 
      icon: MessageCircle, 
      title: "Communication Hub",
      description: "Secure messaging with clients, families, and the care team."
    },
    { 
      icon: BookOpen, 
      title: "Education Resources",
      description: "Client education materials and staff training modules."
    },
    { 
      icon: ShieldCheck, 
      title: "Safety & Security",
      description: "Advanced fall detection, location services, and emergency response."
    },
    { 
      icon: BarChart, 
      title: "Analytics & Reporting",
      description: "Performance metrics, client outcomes, and operational insights."
    }
  ];
  
  // Analytics dashboard example data
  const clientMetrics = [
    { title: "Total Clients", value: "1,248", change: "+5.3%", icon: Users, trend: "up" },
    { title: "Active Monitors", value: "876", change: "+12.8%", icon: Activity, trend: "up" },
    { title: "Compliance Rate", value: "94.2%", change: "+2.1%", icon: Check, trend: "up" },
    { title: "Avg. Response Time", value: "2.4 min", change: "-18.2%", icon: TrendingUp, trend: "down" }
  ];

  // Education resources data
  const educationCategories = [
    {
      title: "Self-Care Management",
      resources: [
        { title: "Daily Health Routines", type: "guide", audience: "all", popularity: "high", new: true },
        { title: "Medication Management", type: "video", audience: "seniors", popularity: "high" },
        { title: "Home Exercise Programs", type: "interactive", audience: "all", popularity: "medium" },
        { title: "Nutrition Guidelines", type: "guide", audience: "all", popularity: "medium" }
      ]
    },
    {
      title: "Chronic Condition Management",
      resources: [
        { title: "Diabetes Daily Care", type: "guide", audience: "adults", popularity: "high" },
        { title: "Heart Health Essentials", type: "video", audience: "seniors", popularity: "high", new: true },
        { title: "COPD Management", type: "interactive", audience: "seniors", popularity: "medium" },
        { title: "Arthritis Pain Relief", type: "guide", audience: "seniors", popularity: "high" }
      ]
    },
    {
      title: "Mental Health & Wellness",
      resources: [
        { title: "Stress Management Techniques", type: "video", audience: "all", popularity: "high" },
        { title: "Anxiety Coping Strategies", type: "interactive", audience: "all", popularity: "medium" },
        { title: "Depression Awareness", type: "guide", audience: "all", popularity: "medium", new: true },
        { title: "Sleep Improvement Guide", type: "guide", audience: "all", popularity: "high" }
      ]
    },
    {
      title: "Technology Tutorials",
      resources: [
        { title: "Using Your Health Wearable", type: "video", audience: "seniors", popularity: "high" },
        { title: "Mobile App Navigation Guide", type: "interactive", audience: "seniors", popularity: "high" },
        { title: "Virtual Visit Setup", type: "guide", audience: "all", popularity: "medium", new: true },
        { title: "BBrain Assistant Tutorial", type: "video", audience: "all", popularity: "medium" }
      ]
    }
  ];
  
  const handleResourceClick = (resourceTitle: string) => {
    toast({
      title: "Resource Selected",
      description: `${resourceTitle} has been added to your client's curriculum.`,
      duration: 3000,
    });
  };
  
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="pt-20 pb-6">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold mb-4">MCN Staff Portal Demo</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Experience the unified care platform for healthcare providers and support staff
              </p>
            </div>
            
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
              <TabsList className="w-full max-w-md mx-auto mb-6">
                <TabsTrigger value="features" className="flex-1">Features</TabsTrigger>
                <TabsTrigger value="analytics" className="flex-1">Analytics Dashboard</TabsTrigger>
                <TabsTrigger value="education" className="flex-1">Education Resources</TabsTrigger>
                <TabsTrigger value="improvements" className="flex-1">Improvements</TabsTrigger>
              </TabsList>
              
              <TabsContent value="features" className="mt-4">
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                  <p className="text-lg mb-4">
                    This demo showcases the staff-facing components of Mobile Care Nexus, 
                    allowing healthcare providers and support teams to manage client care, 
                    monitor health data, and coordinate services in a unified platform.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                    {staffFeatures.map((feature, index) => (
                      <div key={index} className="bg-blue-50 rounded-lg p-5 flex flex-col">
                        <div className="mb-3 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <feature.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="analytics" className="mt-4">
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold">Enterprise Analytics Dashboard</h2>
                    <p className="text-gray-600">
                      Comprehensive analytics to monitor client outcomes, operational efficiency, and service delivery across your organization.
                    </p>
                  </div>
                  
                  {/* Key Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {clientMetrics.map((metric, index) => (
                      <Card key={index} className="border-none shadow-sm">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-sm font-medium text-gray-500 mb-1">{metric.title}</p>
                              <h3 className="text-2xl font-bold">{metric.value}</h3>
                            </div>
                            <div className={`p-2 rounded-full ${metric.trend === 'up' ? 'bg-green-100' : 'bg-blue-100'}`}>
                              <metric.icon className={`h-5 w-5 ${metric.trend === 'up' ? 'text-green-600' : 'text-blue-600'}`} />
                            </div>
                          </div>
                          <p className={`text-sm mt-2 ${metric.trend === 'up' ? 'text-green-600' : 'text-blue-600'}`}>
                            {metric.change} from last month
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  {/* Analytics Charts Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <PieChart className="h-5 w-5 text-blue-600" />
                          Client Distribution
                        </CardTitle>
                        <CardDescription>By service type and region</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64 bg-gray-50 rounded-md flex items-center justify-center">
                          <p className="text-gray-500">Client distribution chart visualization</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-green-600" />
                          Service Utilization
                        </CardTitle>
                        <CardDescription>30-day rolling usage patterns</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64 bg-gray-50 rounded-md flex items-center justify-center">
                          <p className="text-gray-500">Service utilization trend visualization</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <Card className="lg:col-span-2">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Activity className="h-5 w-5 text-indigo-600" />
                          Health Metrics
                        </CardTitle>
                        <CardDescription>Client health outcomes and trends</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-80 bg-gray-50 rounded-md flex items-center justify-center">
                          <p className="text-gray-500">Health metrics trend visualization</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Database className="h-5 w-5 text-purple-600" />
                          Data Completeness
                        </CardTitle>
                        <CardDescription>Client record quality metrics</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-80 bg-gray-50 rounded-md flex items-center justify-center">
                          <p className="text-gray-500">Data quality visualization</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="education" className="mt-4">
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold">Patient Education Resources</h2>
                    <p className="text-gray-600">
                      Comprehensive educational content for clients and their families, organized by category and optimized for different learning styles.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                    {educationCategories.map((category, index) => (
                      <Card key={index} className="border shadow-sm">
                        <CardHeader className="pb-2 bg-blue-50">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <GraduationCap className="h-5 w-5 text-blue-600" />
                            {category.title}
                          </CardTitle>
                          <CardDescription>
                            {category.resources.length} resources available
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <div className="space-y-3">
                            {category.resources.map((resource, idx) => (
                              <div 
                                key={idx} 
                                className="p-3 bg-gray-50 rounded-md flex items-center justify-between hover:bg-blue-50 cursor-pointer transition-colors"
                                onClick={() => handleResourceClick(resource.title)}
                              >
                                <div className="flex items-center gap-3">
                                  {resource.type === 'guide' && <FileText className="h-4 w-4 text-blue-600" />}
                                  {resource.type === 'video' && <Video className="h-4 w-4 text-red-600" />}
                                  {resource.type === 'interactive' && <Activity className="h-4 w-4 text-green-600" />}
                                  <div>
                                    <span className="font-medium">{resource.title}</span>
                                    {resource.new && (
                                      <span className="ml-2 text-xs font-medium text-white bg-green-500 px-1.5 py-0.5 rounded-full">
                                        NEW
                                      </span>
                                    )}
                                    <div className="text-xs text-gray-500 mt-0.5">
                                      <span className="capitalize">{resource.type}</span> • {resource.audience === 'all' ? 'All Audiences' : resource.audience === 'seniors' ? 'Senior Focus' : 'Adult Focus'}
                                    </div>
                                  </div>
                                </div>
                                <Button variant="ghost" size="sm" className="h-8 text-xs">
                                  <FileCheck className="h-3.5 w-3.5 mr-1" />
                                  Assign
                                </Button>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-blue-50 rounded-lg p-5 mt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <FolderCheck className="h-5 w-5 mr-2 text-blue-600" />
                      Resource Management Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Assign educational content directly to client portals</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Track completion and engagement metrics</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Create custom learning paths based on client needs</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Filter resources by condition, format, and audience</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Schedule automated content delivery</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Generate progress reports for care teams</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="improvements" className="mt-4">
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                  <div className="mt-6 bg-gray-50 rounded-lg p-5 border border-gray-200">
                    <h3 className="text-lg font-semibold mb-3">Key Integration Improvements</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Customizable alarm protocols for different client needs</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Integrated return processes for device management</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Enhanced client data management with healthcare provider integrations</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Unified service coordination across all supplier integrations</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>WhatsApp integration for client and family reminders</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Wristband vibration reminders for medication and appointments</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>12-week ADL Independence Program integration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-center">
              <Button 
                onClick={() => navigate('/dashboard#staff')}
                className="px-6 py-3 bg-mcn-blue text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Launch Staff Portal Demo
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default StaffDemoPage;
