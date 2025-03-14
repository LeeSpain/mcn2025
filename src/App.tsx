
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import FeaturesPage from "./pages/Features";
import ClientsPage from "./pages/ClientsPage";
import StaffPage from "./pages/StaffPage";
import ContactPage from "./pages/ContactPage";
import PricingPlansPage from "./pages/PricingPlansPage";
import EnterprisePage from "./pages/EnterprisePage";
import MembershipDetailsPage from "./pages/MembershipDetailsPage";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/staff" element={<StaffPage />} />
            <Route path="/enterprise" element={<EnterprisePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pricing" element={<PricingPlansPage />} />
            <Route path="/pricing/:planId" element={<PricingPlansPage />} />
            <Route path="/membership-details" element={<MembershipDetailsPage />} />
            <Route path="/dashboard/*" element={<DashboardPage />} />
            {/* Member Dashboard Routes */}
            <Route path="/dashboard/home" element={<Navigate to="/dashboard#home" replace />} />
            <Route path="/dashboard/care" element={<Navigate to="/dashboard#care" replace />} />
            <Route path="/dashboard/health" element={<Navigate to="/dashboard#health" replace />} />
            <Route path="/dashboard/safety" element={<Navigate to="/dashboard#safety" replace />} />
            <Route path="/dashboard/connect" element={<Navigate to="/dashboard#connect" replace />} />
            <Route path="/dashboard/shop" element={<Navigate to="/dashboard#shop" replace />} />
            <Route path="/dashboard/bbrain" element={<Navigate to="/dashboard#bbrain" replace />} />
            <Route path="/dashboard/account" element={<Navigate to="/dashboard#account" replace />} />
            <Route path="/dashboard/help" element={<Navigate to="/dashboard#help" replace />} />
            <Route path="/dashboard/family" element={<Navigate to="/dashboard#family" replace />} />
            {/* Staff Dashboard Routes */}
            <Route path="/dashboard/staff" element={<Navigate to="/dashboard#staff" replace />} />
            <Route path="/dashboard/chat" element={<Navigate to="/dashboard#chat" replace />} />
            <Route path="/dashboard/clients" element={<Navigate to="/dashboard#clients" replace />} />
            <Route path="/dashboard/support" element={<Navigate to="/dashboard#support" replace />} />
            <Route path="/dashboard/health-monitoring" element={<Navigate to="/dashboard#health-monitoring" replace />} />
            <Route path="/dashboard/education" element={<Navigate to="/dashboard#education" replace />} />
            <Route path="/dashboard/analytics" element={<Navigate to="/dashboard#analytics" replace />} />
            <Route path="/dashboard/knowledge" element={<Navigate to="/dashboard#knowledge" replace />} />
            {/* Nurse Dashboard Routes */}
            <Route path="/dashboard/nurse-dashboard" element={<Navigate to="/dashboard#nurse-dashboard" replace />} />
            <Route path="/dashboard/client-caseload" element={<Navigate to="/dashboard#client-caseload" replace />} />
            <Route path="/dashboard/visit-schedule" element={<Navigate to="/dashboard#visit-schedule" replace />} />
            <Route path="/dashboard/care-plans" element={<Navigate to="/dashboard#care-plans" replace />} />
            <Route path="/dashboard/clinical-monitoring" element={<Navigate to="/dashboard#clinical-monitoring" replace />} />
            {/* Legacy redirects */}
            <Route path="/staff-portal" element={<Navigate to="/dashboard#staff" replace />} />
            <Route path="/staff-dashboard" element={<Navigate to="/dashboard#staff" replace />} />
            <Route path="/client-management" element={<Navigate to="/dashboard#clients" replace />} />
            <Route path="/support-center" element={<Navigate to="/dashboard#support" replace />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
