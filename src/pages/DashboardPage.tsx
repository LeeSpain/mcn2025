
import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import DashboardLayout from '../components/dashboard/DashboardLayout';

// This would normally check authentication status
const isAuthenticated = true; // Placeholder for actual auth logic

const DashboardPage: React.FC = () => {
  const location = useLocation();
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <DashboardLayout />;
};

export default DashboardPage;
