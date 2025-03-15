
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const PageOneContent: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <div className="bg-mcn-blue/5 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-mcn-blue-dark mb-4">Welcome, Martijn, to Mobile Care Nexus</h2>
        <p className="mb-3">I'm excited to introduce you to Mobile Care Nexus (MCN), my vision for transforming how we deliver care in today's digital landscape. What you're about to explore represents my solution to the challenges we've discussed, particularly in customer service and operational efficiency.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2">The Vision</h3>
        <p className="mb-3">MCN integrates all aspects of care delivery into one cohesive platform, connecting clients, caregivers, and support staff through intuitive digital interfaces. Rather than simply hiring more staff, this approach leverages technology to enhance service while reducing costs.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2">What You'll See Today</h3>
        <p className="mb-2">As you explore the platform, you'll find four specialized portals:</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1">Member Portal</h4>
        <p className="mb-2">Clients enjoy a personalized dashboard for managing health information, tracking appointments, and communicating with care providers—all designed for intuitive navigation and independence.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1">Nurse Portal</h4>
        <p className="mb-2">Healthcare professionals access a streamlined workspace with prioritized client management, clinical alerts, and documentation tools—enabling more efficient and effective care delivery.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1">Customer Service Portal</h4>
        <p className="mb-2">Support staff benefit from unified communication tools, remote assistance capabilities, and performance analytics—all enhancing client interactions while simplifying workflows.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1">AI Healthcare Agents</h4>
        <p className="mb-2">Our innovative AI solutions provide instant health information, 24/7 support, and personalized insights—creating a responsive system that complements human care and reduces staffing requirements.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2">Future Developments</h3>
        <p className="mb-3">Administrative, financial, and management dashboards are currently under development—these will complete the ecosystem by addressing all aspects of our business operations.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2">Commercial Partner Benefits</h3>
        <p className="mb-3">The platform provides our commercial partners with real-time analytics and comprehensive reporting—creating unprecedented transparency and strengthening business relationships through shared insights.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2">Why This Matters Now</h3>
        <p className="mb-2">This approach directly addresses our current challenges:</p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>Reduced operational costs through automation of routine tasks</li>
          <li>Enhanced client experience with 24/7 support availability</li>
          <li>Improved staff efficiency by focusing human resources on complex tasks</li>
          <li>Better decision-making through comprehensive data analytics</li>
          <li>Competitive differentiation in an increasingly digital marketplace</li>
        </ul>
      </div>
      
      <div className="h-20 flex items-end justify-center text-center text-muted-foreground">
        <p>{t('popup.scrollPrompt', 'Please scroll to the bottom to continue')}</p>
      </div>
    </>
  );
};

export default PageOneContent;
