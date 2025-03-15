
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const PageTwoContent: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <div className="bg-mcn-blue/5 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-mcn-blue-dark mb-4 font-display">Mobile Care Nexus: The Comprehensive Healthcare Platform</h2>
        
        <h3 className="font-semibold text-lg mt-4 mb-2 font-display text-mcn-blue-dark">Overview</h3>
        <p className="mb-3 text-foreground">Mobile Care Nexus (MCN) is a revolutionary healthcare platform designed to unify care management, monitoring, communication, and support in one seamless environment. Our solution empowers clients to live independently while providing caregivers and healthcare professionals with powerful tools to deliver better care with greater efficiency.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2 font-display text-mcn-blue-dark">Platform Architecture</h3>
        <p className="mb-3 text-foreground">The MCN platform integrates four specialized portals, each designed with the unique needs of its users in mind:</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">1. Member Portal</h4>
        <p className="mb-2 text-foreground">A personalized interface where clients can manage their health information, track appointments, access medication reminders, communicate with care providers, and monitor safety status—all through an intuitive dashboard with BBrain Assistant support.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">2. Nurse Portal</h4>
        <p className="mb-2 text-foreground">Healthcare professionals benefit from a streamlined workspace featuring prioritized client management, clinical alerts, remote care capabilities, and comprehensive documentation tools—enabling more efficient and effective patient care.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">3. Customer Service Portal</h4>
        <p className="mb-2 text-foreground">Support staff access a unified interface combining voice and video communication tools, messaging functions, remote assistance capabilities, and performance analytics—all designed to enhance client interactions.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">4. AI Healthcare Agents</h4>
        <p className="mb-2 text-foreground">Advanced artificial intelligence solutions provide instant health information, 24/7 companionship, personalized health insights, and automated monitoring—creating a responsive support system that complements human care.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2 font-display text-mcn-blue-dark">Coming Soon</h3>
        <p className="mb-3 text-foreground">Administrative, financial, and management dashboards are currently under construction and will be added to the platform soon—expanding MCN's capabilities to encompass all aspects of healthcare operations and business intelligence.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2 font-display text-mcn-blue-dark">Commercial Partner Platform Access</h3>
        <p className="mb-3 text-foreground">Mobile Care Nexus strengthens existing relationships with our commercial partners through dedicated platform access—providing real-time analytics, comprehensive client reports, and performance insights. Partners already working with Mobile Care benefit from enhanced visibility into service delivery, creating unprecedented transparency and accountability. This integration enables commercial stakeholders to monitor care quality, track outcomes, and verify service fulfillment with confidence—all while maintaining strict privacy protocols. The partner interface transforms traditional reporting delays into instantaneous data access, building stronger business relationships through shared insights and collaborative care approaches.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2 font-display text-mcn-blue-dark">Key Features</h3>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">For Clients</h4>
        <p className="mb-2 text-foreground">Our intuitive interface combines health monitoring, safety systems, communication tools, and shopping access—all supported by an intelligent assistant that helps manage daily tasks and medication schedules.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">For Healthcare Professionals</h4>
        <p className="mb-2 text-foreground">Caregivers benefit from prioritized client management, integrated monitoring tools, remote care capabilities, and streamlined documentation—enabling quality care delivery with reduced administrative burden.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">For Support Staff</h4>
        <p className="mb-2 text-foreground">Support teams utilize unified communication systems, performance tracking, and educational resources—all within an analytics-driven environment that promotes continuous service improvement.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2 font-display text-mcn-blue-dark">Technical Specifications</h3>
        <p className="mb-3 text-foreground">The platform delivers multi-language support, responsive design, and secure authentication—all wrapped in an intuitive interface with real-time alerts and seamless data synchronization between modules.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2 font-display text-mcn-blue-dark">Benefits</h3>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">For Clients</h4>
        <p className="mb-2 text-foreground">Enhanced independence through integrated safety monitoring, simplified health management, and improved communication—creating a supportive environment for medication adherence and emergency assistance.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">For Healthcare Organizations</h4>
        <p className="mb-2 text-foreground">Streamlined operations with optimized staff utilization and reduced administrative burden—driving improved outcomes, enhanced service quality, and data-informed decision making.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">For Care Providers</h4>
        <p className="mb-2 text-foreground">A transformative approach to workload management that reduces documentation time while providing better client insights—enabling proactive care interventions through streamlined communication channels.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2 font-display text-mcn-blue-dark">Implementation</h3>
        <p className="mb-3 text-foreground">MCN can be rapidly deployed within your existing infrastructure, with customizable modules to match your organization's specific needs. The platform scales from small practices to large healthcare networks, with enterprise-level solutions available.</p>
        
        <p className="font-medium text-center mt-5 text-mcn-blue-dark font-display">Mobile Care Nexus: Unifying Care for Independence & Connection</p>
        <p className="italic text-center text-foreground">MCN combines monitoring, communication, and support in one seamless platform, helping clients live independently while giving caregivers powerful tools to provide better care.</p>
      </div>
      
      <div className="h-20 flex items-end justify-center text-center text-muted-foreground">
        <p>{t('popup.scrollPrompt', 'Please scroll to the bottom to continue')}</p>
      </div>
    </>
  );
};

export default PageTwoContent;
