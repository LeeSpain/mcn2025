
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { LanguageProvider } from '@/context/LanguageContext';
import { Check, Users, ShieldCheck, Heart, MessageCircle, BookOpen, BarChart } from 'lucide-react';

const StaffDemoPage: React.FC = () => {
  const navigate = useNavigate();
  
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
                </ul>
              </div>
              
              <div className="flex justify-center mt-8">
                <button 
                  onClick={() => navigate('/dashboard#staff')}
                  className="px-6 py-3 bg-mcn-blue text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Launch Staff Portal Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default StaffDemoPage;
