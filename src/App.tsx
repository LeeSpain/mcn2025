
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/context/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import Index from './pages/Index';
import DashboardPage from './pages/DashboardPage';
import Features from './pages/Features';
import ClientsPage from './pages/ClientsPage';
import EnterprisePage from './pages/EnterprisePage';
import ContactPage from './pages/ContactPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import AIAgentsPage from './pages/AIAgentsPage';
import SolutionsPage from './pages/SolutionsPage';
import CareManagerPage from './pages/CareManagerPage';
import SafetyMonitorPage from './pages/SafetyMonitorPage';
import ConnectHubPage from './pages/ConnectHubPage';
import ShopGatewayPage from './pages/ShopGatewayPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import BlogPage from './pages/BlogPage';

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
