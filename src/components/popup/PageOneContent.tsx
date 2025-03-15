
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const PageOneContent: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <div className="bg-mcn-blue/5 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-mcn-blue-dark mb-4 font-display">Welcome, Martijn, to Mobile Care Nexus</h2>
        <h3 className="font-semibold text-lg mb-2 font-display text-mcn-blue-dark">Elevating the Mobile Care Vision</h3>
        
        <p className="mb-4 text-foreground">I'm excited to introduce you to Mobile Care Nexus (MCN), my vision for transforming how we deliver care in today's digital landscape. What you're about to explore represents the evolution of Mobile Care into a comprehensive digital ecosystem that addresses the challenges we've discussed, particularly in customer service and operational efficiency.</p>
        
        <p className="mb-4 text-foreground">MCN isn't a replacement for Mobile Care but rather a strategic rebranding and enhancement that builds upon the strong foundation you've established. It integrates all aspects of care delivery into one cohesive platform, connecting clients, caregivers, and support staff through intuitive digital interfaces. Rather than simply hiring more staff, this approach leverages technology to enhance service while reducing operational costs.</p>
        
        <p className="mb-4 text-foreground">The platform is already fully available in both English and Dutch languages—I invite you to try switching between them as you explore to experience the seamless multilingual capabilities we can offer our clients.</p>
        
        <h3 className="font-semibold text-lg mt-6 mb-2 font-display text-mcn-blue-dark">The Complete Mobile Care Nexus Ecosystem</h3>
        
        <p className="mb-4 text-foreground">As you navigate through the platform, you'll discover four specialized portals designed to transform how we deliver and manage care:</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-5 mb-2 font-display">Client Portal</h4>
        <p className="mb-3 text-foreground">We've redesigned the client experience to provide a personalized dashboard where users can easily manage their health information, track appointments, and communicate with care providers. The intuitive navigation supports independence while providing the security of knowing help is always available. Features include:</p>
        <ul className="list-disc pl-8 mb-4 text-foreground">
          <li>Comprehensive health information management</li>
          <li>Intelligent medication and appointment reminders</li>
          <li>Integrated safety monitoring and alert systems</li>
          <li>Multi-channel communication with care teams</li>
          <li>BBrain Assistant for daily support and companionship</li>
          <li>Simplified access to services and resources</li>
        </ul>
        
        <h4 className="font-medium text-mcn-blue-dark mt-5 mb-2 font-display">Healthcare Professional Portal</h4>
        <p className="mb-3 text-foreground">Your clinical teams will benefit from a workspace engineered to maximize efficiency and minimize administrative burden. The intelligent prioritization ensures urgent needs receive immediate attention, while comprehensive documentation tools capture essential information without excessive data entry. Key capabilities include:</p>
        <ul className="list-disc pl-8 mb-4 text-foreground">
          <li>AI-powered client prioritization and workload management</li>
          <li>Real-time alerts and critical information highlighting</li>
          <li>Template-driven documentation with voice input options</li>
          <li>Integrated remote care and telehealth capabilities</li>
          <li>Evidence-based assessment and decision support tools</li>
          <li>Collaborative care planning across disciplines</li>
        </ul>
        
        <h4 className="font-medium text-mcn-blue-dark mt-5 mb-2 font-display">Support Operations Center</h4>
        <p className="mb-3 text-foreground">This revolutionary approach to customer service consolidates all communication channels, case management, and performance analytics into one unified workspace. Your support teams can now interact with clients through their preferred methods—voice, video, or messaging—while having complete context for each interaction. The center features:</p>
        <ul className="list-disc pl-8 mb-4 text-foreground">
          <li>Unified multi-channel communication dashboard</li>
          <li>Remote assistance capabilities with screen sharing</li>
          <li>Comprehensive case history and resolution tracking</li>
          <li>Real-time performance metrics and quality assurance tools</li>
          <li>Guided support workflows for consistent service delivery</li>
          <li>Automated follow-up scheduling and satisfaction monitoring</li>
        </ul>
        
        <h4 className="font-medium text-mcn-blue-dark mt-5 mb-2 font-display">AI Healthcare Companions</h4>
        <p className="mb-3 text-foreground">Perhaps the most transformative element is our integrated artificial intelligence system. These advanced digital agents provide instant information, health monitoring, and companionship while seamlessly escalating complex issues to your human staff. This creates a responsive, always-available support system that:</p>
        <ul className="list-disc pl-8 mb-4 text-foreground">
          <li>Delivers 24/7 health information and guidance</li>
          <li>Provides personalized wellness recommendations</li>
          <li>Monitors health patterns and alerts to potential concerns</li>
          <li>Offers natural conversation and companionship</li>
          <li>Intelligently routes complex needs to appropriate human staff</li>
          <li>Continuously improves through machine learning</li>
        </ul>
      </div>
      
      <div className="h-20 flex items-end justify-center text-center text-muted-foreground">
        <p>{t('popup.scrollPrompt', 'Please scroll to the bottom to continue')}</p>
      </div>
    </>
  );
};

export default PageOneContent;
