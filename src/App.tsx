
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';

import Index from '@/pages/Index';
import Features from '@/pages/Features';
import ClientsPage from '@/pages/ClientsPage';
import StaffPage from '@/pages/StaffPage';
import EnterprisePage from '@/pages/EnterprisePage';
import ContactPage from '@/pages/ContactPage';
import NotFound from '@/pages/NotFound';
import DashboardPage from '@/pages/DashboardPage';
import MembershipDetailsPage from '@/pages/MembershipDetailsPage';
import PricingPlansPage from '@/pages/PricingPlansPage';
import { LanguageProvider } from '@/context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/staff" element={<StaffPage />} />
          <Route path="/enterprise" element={<EnterprisePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/membership-details" element={<MembershipDetailsPage />} />
          <Route path="/pricing/:planId" element={<PricingPlansPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </LanguageProvider>
  );
}

export default App;
