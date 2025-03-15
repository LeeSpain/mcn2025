
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const PageOneContent: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <div className="bg-mcn-blue/5 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-mcn-blue-dark mb-4 font-display">Welcome to Mobile Care Nexus, Martijn</h2>
        
        <h3 className="font-semibold text-lg mt-4 mb-2 font-display text-mcn-blue-dark">The Platform</h3>
        <h3 className="font-semibold text-lg mt-4 mb-2 font-display text-mcn-blue-dark">My Vision for Our Future</h3>
        <p className="mb-3 text-foreground">Welcome to Mobile Care Nexus, my personal initiative to transform our approach to care delivery. This platform represents my solution to the challenges we've discussed, particularly in customer service and operational efficiency.</p>
        <p className="mb-3 text-foreground">I chose the name "Nexus" deliberately—it means a connection linking multiple things, perfectly capturing this central point where all elements of care converge. The platform maintains our trusted Mobile Care identity while signaling our evolution.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2 font-display text-mcn-blue-dark">What You're Seeing</h3>
        <p className="mb-2 text-foreground">The platform integrates four specialized portals:</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">1. Member Portal</h4>
        <p className="mb-2 text-foreground">Clients access a personalized dashboard for health information, appointments, and communication with care providers—all with intuitive navigation and intelligent assistance.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">2. Nurse Portal</h4>
        <p className="mb-2 text-foreground">Healthcare professionals utilize prioritized client management, clinical alerts, and streamlined documentation—improving efficiency and care delivery.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">3. Customer Service Portal</h4>
        <p className="mb-2 text-foreground">Support staff benefit from unified communication tools, remote assistance capabilities, and performance analytics—enhancing client interactions.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">4. AI Healthcare Agents</h4>
        <p className="mb-2 text-foreground">Artificial intelligence provides instant information, personalized insights, and monitoring—complementing human care and reducing staffing requirements.</p>
        
        <p className="mb-3 text-foreground">Administrative, financial, and management dashboards are coming soon, along with commercial partner access providing real-time analytics and reporting.</p>
      </div>
      
      <div className="h-20 flex items-end justify-center text-center text-muted-foreground">
        <p>{t('popup.scrollPrompt', 'Please scroll to the bottom to continue')}</p>
      </div>
    </>
  );
};

export default PageOneContent;
