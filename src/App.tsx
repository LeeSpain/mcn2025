
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/context/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import './App.css'; // Make sure CSS is imported

// Lazy load pages to reduce initial bundle size
const Index = lazy(() => import('./pages/Index'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const Features = lazy(() => import('./pages/Features'));
const ClientsPage = lazy(() => import('./pages/ClientsPage'));
const EnterprisePage = lazy(() => import('./pages/EnterprisePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const NotFound = lazy(() => import('./pages/NotFound'));
const AIAgentsPage = lazy(() => import('./pages/AIAgentsPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const CareManagerPage = lazy(() => import('./pages/CareManagerPage'));
const SafetyMonitorPage = lazy(() => import('./pages/SafetyMonitorPage'));
const ConnectHubPage = lazy(() => import('./pages/ConnectHubPage'));
const ShopGatewayPage = lazy(() => import('./pages/ShopGatewayPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));

// MCN Implementation Pages
const MCNImplementationDashboard = lazy(() => import('./pages/MCNImplementationDashboard'));
const MCNComponentDetailPage = lazy(() => import('./pages/MCNComponentDetailPage'));
const StaffDemoPage = lazy(() => import('./pages/StaffDemoPage'));

// Simple loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-mcn-blue border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/features" element={<Features />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/enterprise" element={<EnterprisePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/ai-agents" element={<AIAgentsPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/care-manager" element={<CareManagerPage />} />
            <Route path="/safety-monitor" element={<SafetyMonitorPage />} />
            <Route path="/connect-hub" element={<ConnectHubPage />} />
            <Route path="/shop-gateway" element={<ShopGatewayPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/blog" element={<BlogPage />} />
            
            {/* MCN Implementation Routes */}
            <Route path="/mcn-implementation-dashboard" element={<MCNImplementationDashboard />} />
            <Route path="/mcn-component/:componentId" element={<MCNComponentDetailPage />} />
            <Route path="/staff-demo" element={<StaffDemoPage />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
