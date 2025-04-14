
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ImplementationProgress from '@/components/implementation/ImplementationProgress';
import ImplementationTimeline from '@/components/implementation/ImplementationTimeline';
import GapAnalysisSummary from '@/components/implementation/GapAnalysisSummary';
import SupplierIntegration from '@/components/implementation/SupplierIntegration';
import { 
  Users, 
  Clock, 
  ShieldCheck, 
  Video, 
  ShoppingCart, 
  HeartPulse, 
  ActivitySquare, 
  Laptop
} from 'lucide-react';

const MCNImplementationPlan: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<string>('overview');

  // Component status data
  const componentsStatus = [
    {
      name: "Care Manager",
      progress: 40,
      status: "in-progress" as const,
    },
    {
      name: "Safety Monitor",
      progress: 15,
      status: "planned" as const,
    },
    {
      name: "Connect Hub",
      progress: 10,
      status: "planned" as const,
    },
    {
      name: "Shop Gateway",
      progress: 5,
      status: "planned" as const,
    },
    {
      name: "Health View",
      progress: 20,
      status: "planned" as const,
    },
    {
      name: "ClientSync",
      progress: 25,
      status: "planned" as const,
    },
    {
      name: "Technical Support",
      progress: 30,
      status: "in-progress" as const,
    },
    {
      name: "Certifications & Operations",
      progress: 10,
      status: "planned" as const,
    }
  ];

  // Implementation phases
  const implementationPhases = [
    {
      phase: "1. Platform Architecture & Foundation",
      description: "Establish core architecture, security standards, and data integration layer",
      status: "in-progress" as const,
      timeline: "Current - Week 6"
    },
    {
      phase: "2. Measurement Devices & Monitors",
      description: "Integrate all medical devices and monitoring systems",
      status: "planned" as const,
      timeline: "Week 4 - Week 10"
    },
    {
      phase: "3. Daily Structure & Reminders",
      description: "Implement reminders and daily structure capabilities",
      status: "planned" as const,
      timeline: "Week 8 - Week 12"
    },
    {
      phase: "4. Lifestyle & Wellbeing",
      description: "Implement lifestyle tools and wellbeing features",
      status: "planned" as const,
      timeline: "Week 10 - Week 16"
    },
    {
      phase: "5. Data Management & Services",
      description: "Implement data sharing and additional services",
      status: "planned" as const,
      timeline: "Week 14 - Week 20"
    },
    {
      phase: "6. Staff Support & Operations",
      description: "Implement staff support and operational capabilities",
      status: "planned" as const,
      timeline: "Week 18 - Week 24"
    },
    {
      phase: "7. Supplier Integration",
      description: "Rebrand and integrate all suppliers under MCN",
      status: "planned" as const,
      timeline: "Week 22 - Week 28"
    },
    {
      phase: "8. Testing & Validation",
      description: "Ensure all components work seamlessly together",
      status: "planned" as const,
      timeline: "Week 26 - Week 32"
    },
    {
      phase: "9. Migration & Transition",
      description: "Ensure smooth transition from MobileCare to MCN",
      status: "planned" as const,
      timeline: "Week 30 - Week 36"
    },
    {
      phase: "10. Launch & Monitoring",
      description: "Launch platform and monitor performance",
      status: "planned" as const,
      timeline: "Week 34 - Week 40"
    }
  ];

  // Gap analysis data
  const gapAnalysisData = [
    {
      gap: "MyPIA's WhatsApp-Based Reminders",
      component: "Care Manager",
      priority: "Medium" as const,
      status: "In Progress"
    },
    {
      gap: "Vivago Watch's Specialized Alarms",
      component: "Safety Monitor",
      priority: "High" as const,
      status: "Planned"
    },
    {
      gap: "NEN7510/ISO Certifications",
      component: "Certifications & Operations",
      priority: "High" as const,
      status: "Planned"
    },
    {
      gap: "FreeStyle Libre Non-Reimbursed Supply Model",
      component: "Health View",
      priority: "High" as const,
      status: "Planned"
    },
    {
      gap: "NCare Medication Sign-Off/Double Checks",
      component: "ClientSync",
      priority: "High" as const,
      status: "Planned"
    },
    {
      gap: "Google Home/Hub's Translation Feature",
      component: "Connect Hub",
      priority: "Low" as const,
      status: "Planned"
    },
    {
      gap: "HelpSoq Compression Stocking Aid",
      component: "Shop Gateway",
      priority: "Low" as const,
      status: "Planned"
    },
    {
      gap: "Thermometer Wi-Fi Setup",
      component: "Technical Support",
      priority: "Medium" as const,
      status: "In Progress"
    }
  ];

  // Supplier categories
  const supplierCategories = [
    {
      title: "Device Suppliers",
      description: "All devices rebranded under MCN (e.g., "MCN FreeStyle Libre")",
      suppliers: [
        "Abbott (FreeStyle Libre)",
        "Sidly",
        "Withings",
        "Amiko",
        "Vivago",
        "BlueLine",
        "WISBI",
        "Mintt"
      ]
    },
    {
      title: "Connectivity Partners",
      description: "Rebranded as "MCN Connectivity Partners" with fallback options",
      suppliers: [
        "VodafoneZiggo",
        "KPN IoT",
        "Vivago Connectivity"
      ]
    },
    {
      title: "Platform Partners",
      description: "Platforms integrated into MCN components (e.g., Nedap into ClientSync)",
      suppliers: [
        "Nedap (ONS, NCare)",
        "SUP",
        "OZO Connected Care",
        "cBoards",
        "ZorgDomein",
        "Nettie"
      ]
    }
  ];

  // Handler for viewing all gaps
  const handleViewAllGaps = () => {
    setActiveTab('gaps');
  };

  // Handler for launching demo
  const handleLaunchDemo = () => {
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
            <h1 className="text-3xl font-bold mb-4">
              {t('implementation.title', 'MCN Implementation Plan')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('implementation.subtitle', 'Tracking the progress of transitioning from MobileCare to Mobile Care Nexus')}
            </p>

            {/* Demo Access Button */}
            <div className="mt-6">
              <button 
                onClick={handleLaunchDemo} 
                className="px-5 py-2.5 bg-mcn-blue text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Launch Staff Portal Demo
              </button>
            </div>
          </div>

          {/* Main Content Tabs */}
          <Tabs 
            defaultValue="overview" 
            value={activeTab} 
            onValueChange={setActiveTab} 
            className="w-full"
          >
            <TabsList className="grid grid-cols-4 mb-6 max-w-lg mx-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="gaps">Gaps</TabsTrigger>
              <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <ImplementationProgress components={componentsStatus} />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <ImplementationTimeline phases={implementationPhases.slice(0, 5)} />
                </div>
                <div>
                  <GapAnalysisSummary 
                    gaps={gapAnalysisData.slice(0, 5)} 
                    onViewAllClick={handleViewAllGaps} 
                  />
                </div>
              </div>
            </TabsContent>

            {/* Timeline Tab */}
            <TabsContent value="timeline" className="space-y-8">
              <ImplementationTimeline phases={implementationPhases} />
            </TabsContent>

            {/* Gaps Tab */}
            <TabsContent value="gaps" className="space-y-8">
              <GapAnalysisSummary 
                gaps={gapAnalysisData} 
                onViewAllClick={() => {}} 
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Measurement Devices", count: 3, icon: <HeartPulse className="h-5 w-5 text-red-500" /> },
                  { title: "Monitors", count: 3, icon: <ShieldCheck className="h-5 w-5 text-blue-500" /> },
                  { title: "Daily Structure", count: 3, icon: <Clock className="h-5 w-5 text-green-500" /> },
                  { title: "Lifestyle & Wellbeing", count: 6, icon: <Users className="h-5 w-5 text-purple-500" /> }
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

            {/* Suppliers Tab */}
            <TabsContent value="suppliers" className="space-y-8">
              <SupplierIntegration categories={supplierCategories} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MCNImplementationPlan;
