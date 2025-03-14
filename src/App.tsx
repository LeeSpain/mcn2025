
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
            {/* Redirects to staff portal section of dashboard */}
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
