
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const PageTwoContent: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <div className="bg-mcn-blue/5 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-mcn-blue-dark mb-4">Mobile Care Nexus: The Comprehensive Healthcare Platform</h2>
        
        <h3 className="font-semibold text-lg mt-4 mb-2">Overview</h3>
        <p className="mb-3">Mobile Care Nexus (MCN) is a revolutionary healthcare platform designed to unify care management, monitoring, communication, and support in one seamless environment. Our solution empowers clients to live independently while providing caregivers and healthcare professionals with powerful tools to deliver better care with greater efficiency.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2">Platform Architecture</h3>
        <p className="mb-3">The MCN platform integrates four specialized portals, each designed with the unique needs of its users in mind:</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1">1. Member Portal</h4>
        <p className="mb-2">A personalized interface where clients can manage their health information, track appointments, access medication reminders, communicate with care providers, and monitor safety status—all through an intuitive dashboard with BBrain Assistant support.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1">2. Nurse Portal</h4>
        <p className="mb-2">Healthcare professionals benefit from a streamlined workspace featuring prioritized client management, clinical alerts, remote care capabilities, and comprehensive documentation tools—enabling more efficient and effective patient care.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1">3. Customer Service Portal</h4>
        <p className="mb-2">Support staff access a unified interface combining voice and video communication tools, messaging functions, remote assistance capabilities, and performance analytics—all designed to enhance client interactions.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1">4. AI Healthcare Agents</h4>
        <p className="mb-2">Advanced artificial intelligence solutions provide instant health information, 24/7 companionship, personalized health insights, and automated monitoring—creating a responsive support system that complements human care.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2">Coming Soon</h3>
        <p className="mb-3">Administrative, financial, and management dashboards are currently under construction and will be added to the platform soon—expanding MCN's capabilities to encompass all aspects of healthcare operations and business intelligence.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2">Commercial Partner Platform Access</h3>
        <p className="mb-3">Mobile Care Nexus strengthens existing relationships with our commercial partners through dedicated platform access—providing real-time analytics, comprehensive client reports, and performance insights. Partners already working with Mobile Care benefit from enhanced visibility into service delivery, creating unprecedented transparency and accountability. This integration enables commercial stakeholders to monitor care quality, track outcomes, and verify service fulfillment with confidence—all while maintaining strict privacy protocols. The partner interface transforms traditional reporting delays into instantaneous data access, building stronger business relationships through shared insights and collaborative care approaches.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2">Key Features</h3>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1">For Clients</h4>
        <p className="mb-2">Our intuitive interface combines health monitoring, safety systems, communication tools, and shopping access—all supported by an intelligent assistant that helps manage daily tasks and medication schedules.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1">For Healthcare Professionals</h4>
        <p className="mb-2">Caregivers benefit from prioritized client management, integrated monitoring tools, remote care capabilities, and streamlined documentation—enabling quality care delivery with reduced administrative burden.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1">For Support Staff</h4>
        <p className="mb-2">Support teams utilize unified communication systems, performance tracking, and educational resources—all within an analytics-driven environment that promotes continuous service improvement.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2">Technical Specifications</h3>
        <p className="mb-3">The platform delivers multi-language support, responsive design, and secure authentication—all wrapped in an intuitive interface with real-time alerts and seamless data synchronization between modules.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2">Benefits</h3>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1">For Clients</h4>
        <p className="mb-2">Enhanced independence through integrated safety monitoring, simplified health management, and improved communication—creating a supportive environment for medication adherence and emergency assistance.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1">For Healthcare Organizations</h4>
        <p className="mb-2">Streamlined operations with optimized staff utilization and reduced administrative burden—driving improved outcomes, enhanced service quality, and data-informed decision making.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1">For Care Providers</h4>
        <p className="mb-2">A transformative approach to workload management that reduces documentation time while providing better client insights—enabling proactive care interventions through streamlined communication channels.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2">Implementation</h3>
        <p className="mb-3">MCN can be rapidly deployed within your existing infrastructure, with customizable modules to match your organization's specific needs. The platform scales from small practices to large healthcare networks, with enterprise-level solutions available.</p>
        
        <p className="font-medium text-center mt-5">Mobile Care Nexus: Unifying Care for Independence & Connection</p>
        <p className="italic text-center">MCN combines monitoring, communication, and support in one seamless platform, helping clients live independently while giving caregivers powerful tools to provide better care.</p>
      </div>
      
      <div className="h-20 flex items-end justify-center text-center text-muted-foreground">
        <p>{t('popup.scrollPrompt', 'Please scroll to the bottom to continue')}</p>
      </div>
    </>
  );
};

export default PageTwoContent;
