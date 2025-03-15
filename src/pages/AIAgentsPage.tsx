
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import HeroSection from '@/components/ai-agents/HeroSection';
import FeaturesGrid from '@/components/ai-agents/FeaturesGrid';
import AICallAgentsSection from '@/components/ai-agents/AICallAgentsSection';
import StaffingEfficiencySection from '@/components/ai-agents/StaffingEfficiencySection';
import HowItWorksSection from '@/components/ai-agents/HowItWorksSection';
import CallRecordingSection from '@/components/ai-agents/CallRecordingSection';
import CTASection from '@/components/ai-agents/CTASection';

const AIAgentsPage: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      
      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Hero Section */}
          <HeroSection />

          {/* Enhanced Features Grid */}
          <FeaturesGrid />

          {/* AI Call Agents Section with Flow Diagram */}
          <AICallAgentsSection />

          {/* Staffing Efficiency Section */}
          <StaffingEfficiencySection />

          {/* How It Works Section */}
          <HowItWorksSection />

          {/* Detailed AI Call Processing Section */}
          <CallRecordingSection />

          {/* CTA Section */}
          <CTASection />
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AIAgentsPage;
