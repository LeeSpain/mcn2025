
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { Toaster } from '@/components/ui/toaster';
import PageHeader from '@/components/implementation/PageHeader';
import ImplementationTabs from '@/components/implementation/ImplementationTabs';
import { ComponentStatus, ImplementationPhase, GapAnalysisItem, ServiceCategory } from '@/types/implementation-types';

const MCNImplementationPlan: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('overview');

  // Component status data
  const componentsStatus: ComponentStatus[] = [
    {
      name: "Care Manager",
      progress: 40,
      status: "in-progress",
    },
    {
      name: "Safety Monitor",
      progress: 15,
      status: "planned",
    },
    {
      name: "Connect Hub",
      progress: 10,
      status: "planned",
    },
    {
      name: "Shop Gateway",
      progress: 5,
      status: "planned",
    },
    {
      name: "Health View",
      progress: 20,
      status: "planned",
    },
    {
      name: "ClientSync",
      progress: 25,
      status: "planned",
    },
    {
      name: "Technical Support",
      progress: 30,
      status: "in-progress",
    },
    {
      name: "Certifications & Operations",
      progress: 10,
      status: "planned",
    }
  ];

  // Implementation phases
  const implementationPhases: ImplementationPhase[] = [
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

  // Gap analysis data
  const gapAnalysisData: GapAnalysisItem[] = [
    {
      gap: "MyPIA's WhatsApp-Based Reminders",
      component: "Care Manager",
      priority: "Medium",
      status: "In Progress"
    },
    {
      gap: "Vivago Watch's Specialized Alarms",
      component: "Safety Monitor",
      priority: "High",
      status: "Planned"
    },
    {
      gap: "NEN7510/ISO Certifications",
      component: "Certifications & Operations",
      priority: "High",
      status: "Planned"
    },
    {
      gap: "FreeStyle Libre Non-Reimbursed Supply Model",
      component: "Health View",
      priority: "High",
      status: "Planned"
    },
    {
      gap: "NCare Medication Sign-Off/Double Checks",
      component: "ClientSync",
      priority: "High",
      status: "Planned"
    },
    {
      gap: "Google Home/Hub's Translation Feature",
      component: "Connect Hub",
      priority: "Low",
      status: "Planned"
    },
    {
      gap: "HelpSoq Compression Stocking Aid",
      component: "Shop Gateway",
      priority: "Low",
      status: "Planned"
    },
    {
      gap: "Thermometer Wi-Fi Setup",
      component: "Technical Support",
      priority: "Medium",
      status: "In Progress"
    }
  ];

  // Supplier categories
  const supplierCategories: ServiceCategory[] = [
    {
      title: "Device Suppliers",
      description: "All devices rebranded under MCN (e.g., \"MCN FreeStyle Libre\")",
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
      description: "Rebranded as \"MCN Connectivity Partners\" with fallback options",
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

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <Toaster />
      
      <div className="pt-20 md:pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader />
          
          <ImplementationTabs 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            componentsStatus={componentsStatus}
            implementationPhases={implementationPhases}
            gapAnalysisData={gapAnalysisData}
            supplierCategories={supplierCategories}
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MCNImplementationPlan;
