
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const PageOneContent: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <div className="bg-mcn-blue/5 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-mcn-blue-dark mb-4 font-display">Welcome to Mobile Care Nexus</h2>
        <p className="mb-3 text-foreground">Transforming Healthcare Through Integrated Digital Solutions</p>
        
        <p className="mb-4 text-foreground">Mobile Care Nexus (MCN) is revolutionizing healthcare delivery by unifying care management, monitoring, communication, and support in one comprehensive platform. Our solution empowers clients to maintain independence while providing healthcare professionals and support teams with powerful tools to deliver exceptional care with unprecedented efficiency.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2 font-display text-mcn-blue-dark">Our Unified Platform Approach</h3>
        <p className="mb-3 text-foreground">MCN represents a paradigm shift in healthcare technology—rather than developing isolated solutions, we've created an integrated ecosystem where all stakeholders can collaborate seamlessly. This approach leverages advanced technology to enhance service quality while optimizing operational costs.</p>
        <p className="mb-4 text-foreground">The platform is fully available in both English and Dutch, with intuitive language switching that demonstrates our commitment to accessibility and inclusivity in healthcare delivery.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2 font-display text-mcn-blue-dark">The MCN Ecosystem</h3>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">Client Portal</h4>
        <p className="mb-3 text-foreground">Our client-centered interface provides a personalized health dashboard with intuitive navigation that empowers users to take control of their healthcare journey. Clients benefit from comprehensive appointment and medication management tools that send timely reminders and track adherence. The integrated safety monitoring and alert systems ensure peace of mind for both clients and their loved ones, automatically detecting potential emergencies and triggering appropriate responses. Secure communication channels connect clients directly with their care providers, enabling questions and concerns to be addressed promptly. The innovative BBrain Assistant offers intelligent support for daily task management, helping clients maintain independence through gentle reminders and guidance. Additionally, simplified access to shopping and essential services eliminates barriers to obtaining necessities, all within the same user-friendly platform.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">Healthcare Professional Portal</h4>
        <p className="mb-3 text-foreground">Our streamlined clinical workspace offers healthcare professionals a revolutionary approach to care delivery. The prioritized client management system utilizes intelligent algorithms to sort and highlight patients requiring immediate attention, optimizing workflow efficiency. Practitioners receive real-time clinical alerts and access comprehensive monitoring capabilities that track vital health metrics, ensuring timely interventions when needed. The portal features intuitive documentation tools with customizable templates that reduce administrative burden while meeting compliance requirements. Advanced remote care capabilities, including seamless telehealth integration, allow professionals to deliver quality care regardless of physical location. Healthcare decisions are supported by an extensive library of evidence-based assessment resources and clinical decision support tools that provide guidance aligned with best practices. The collaborative care planning environment enables multidisciplinary teams to coordinate efforts effectively, ensuring holistic care delivery with improved outcomes.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">Support Hub</h4>
        <p className="mb-3 text-foreground">Our unified support environment features a comprehensive communication ecosystem that seamlessly blends voice, video, and messaging tools to meet clients where they are most comfortable. Support specialists can provide remote assistance through intuitive screen sharing capabilities, allowing for visual guidance that solves problems quickly and effectively. The sophisticated case management system tracks each interaction from initiation to resolution, ensuring accountability and continuity across multiple touchpoints. Managers gain valuable insights through real-time performance analytics and quality metrics that highlight opportunities for service improvement and staff development. Team members access continually updated educational resources and guided support workflows that standardize service excellence while allowing for personalized care. The system automatically schedules follow-up communications and monitors client satisfaction, creating a continuous feedback loop that drives ongoing service refinement and relationship building.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">AI Healthcare Companions</h4>
        <p className="mb-3 text-foreground">Our advanced artificial intelligence solutions deliver round-the-clock health information and guidance, providing immediate responses to inquiries at any hour without staffing constraints. Each client receives personalized wellness insights and recommendations tailored to their unique health profile, preferences, and goals. The system performs automated health monitoring with intelligent alerting that detects subtle changes and potential concerns before they become serious issues. Clients enjoy natural conversation capabilities that provide both practical assistance and genuine companionship, reducing feelings of isolation and enhancing emotional wellbeing. The AI recognizes its limitations and implements seamless escalation to human support when situations require a personal touch or complex problem-solving. Throughout all interactions, the system engages in continuous learning that improves user experiences over time, becoming increasingly attuned to individual communication styles and preferences.</p>
      </div>
      
      <div className="h-20 flex items-end justify-center text-center text-muted-foreground">
        <p>{t('popup.scrollPrompt', 'Please scroll to the bottom to continue')}</p>
      </div>
    </>
  );
};

export default PageOneContent;
