
import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import { LanguageProvider } from '@/context/LanguageContext';

// This would normally check authentication status
const isAuthenticated = true; // Placeholder for actual auth logic

const DashboardPage: React.FC = () => {
  const location = useLocation();
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If no hash is present, default to home (member dashboard)
  useEffect(() => {
    if (!location.hash) {
      window.location.hash = 'home';
    }
    // Scroll to top when dashboard page loads
    window.scrollTo(0, 0);
  }, [location.hash]);

  return (
    <LanguageProvider>
      <div className="w-full">
        <DashboardLayout />
      </div>
    </LanguageProvider>
  );
};

export default DashboardPage;
