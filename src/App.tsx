
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/context/LanguageContext';
import Index from './pages/Index';
import DashboardPage from './pages/DashboardPage';
import Features from './pages/Features';
import ClientsPage from './pages/ClientsPage';
import EnterprisePage from './pages/EnterprisePage';
import ContactPage from './pages/ContactPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AIAgentPage from './pages/AIAgentPage';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/enterprise" element={<EnterprisePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ai-agent" element={<AIAgentPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
