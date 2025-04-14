
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { LanguageProvider } from '@/context/LanguageContext';

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
              
              <p className="text-lg mb-4">
                <strong>Key Features:</strong> Client management, health monitoring, 
                communication, education resources, and service coordination - all 
                integrated with MobileCare's supplier ecosystem.
              </p>
              
              <div className="flex justify-center mt-6">
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
