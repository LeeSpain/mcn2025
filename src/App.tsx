
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

// Solution pages
import CareManagerPage from '@/pages/CareManagerPage';
import SafetyMonitorPage from '@/pages/SafetyMonitorPage';
import ConnectHubPage from '@/pages/ConnectHubPage';
import ShopGatewayPage from '@/pages/ShopGatewayPage';
import HealthViewPage from '@/pages/HealthViewPage';

// Company pages
import AboutPage from '@/pages/AboutPage';
import CareersPage from '@/pages/CareersPage';
import BlogPage from '@/pages/BlogPage';
import PressPage from '@/pages/PressPage';

// Legal pages
import TermsPage from '@/pages/TermsPage';
import PrivacyPage from '@/pages/PrivacyPage';
import CookiesPage from '@/pages/CookiesPage';
import AccessibilityPage from '@/pages/AccessibilityPage';

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
          
          {/* Solution pages */}
          <Route path="/care-manager" element={<CareManagerPage />} />
          <Route path="/safety-monitor" element={<SafetyMonitorPage />} />
          <Route path="/connect-hub" element={<ConnectHubPage />} />
          <Route path="/shop-gateway" element={<ShopGatewayPage />} />
          <Route path="/health-view" element={<HealthViewPage />} />
          
          {/* Company pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/press" element={<PressPage />} />
          
          {/* Legal pages */}
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </LanguageProvider>
  );
}

export default App;
