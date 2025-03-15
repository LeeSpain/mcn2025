
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const PageTwoContent: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <div className="bg-mcn-blue/5 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-mcn-blue-dark mb-4 font-display">Mobile Care Nexus: The Comprehensive Healthcare Platform</h2>
        
        <h3 className="font-semibold text-lg mt-4 mb-2 font-display text-mcn-blue-dark">For Our Commercial Partners</h3>
        <p className="mb-3 text-foreground">MCN strengthens our business relationships through unprecedented transparency and collaboration. Partners gain access to real-time analytics on service delivery and performance, allowing immediate visibility into how care is being delivered and experienced. Our platform generates comprehensive client reports with actionable insights that highlight trends, successes, and areas for potential improvement or expansion. The system provides detailed verification of service fulfillment with precise metrics that demonstrate contractual compliance and value delivery. All stakeholders benefit from streamlined communication channels that reduce delays and misunderstandings while creating a documented history of all interactions. Partners leverage data-driven decision support for program optimization, utilizing aggregate information to refine service offerings and resource allocation. Each partner enjoys customizable dashboards tailored to their specific business needs, ensuring they can quickly access the most relevant information for their unique objectives.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2 font-display text-mcn-blue-dark">Enterprise Capabilities</h3>
        <p className="mb-3 text-foreground">The platform scales effortlessly to meet diverse organizational requirements. Our security and compliance framework provides robust authentication, encryption, and regulatory compliance built into every module, ensuring protected health information remains secure while meeting all relevant legislative requirements. The seamless integration capability leverages API-driven architecture to connect with existing healthcare information systems, eliminating data silos and reducing duplicate entry requirements. Our scalable infrastructure utilizes cloud-based deployment that supports organizations of any size, from small practices to large healthcare networks, with the ability to expand resources as needed. Comprehensive data analytics deliver actionable reporting and business intelligence tools that transform raw data into strategic insights for operational excellence. The platform's customization options are made possible through a modular design that allows for precise tailoring to specific organizational needs without compromising system integrity. Throughout implementation and beyond, dedicated support teams ensure smooth deployment and adoption, providing training, troubleshooting, and ongoing optimization services.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2 font-display text-mcn-blue-dark">Transforming Healthcare Delivery</h3>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">For Clients</h4>
        <p className="mb-3 text-foreground">Clients experience enhanced independence through integrated support systems that provide assistance when needed while respecting autonomy and dignity. Health management becomes significantly simpler with intuitive tools designed for users of all technological comfort levels. Communication improves dramatically with all care providers through unified messaging that eliminates the frustration of navigating multiple channels. Proactive safety monitoring with rapid response capabilities provides peace of mind for both clients and their loved ones. Comprehensive medication adherence support and targeted health education empower individuals to participate actively in their wellness journey.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">For Healthcare Organizations</h4>
        <p className="mb-3 text-foreground">Organizations achieve optimized staff utilization through intelligent workflows that direct resources to where they create the most value. Administrative burdens decrease substantially with automated documentation that captures essential information without excessive data entry. Client outcomes improve through coordinated care that eliminates contradictory interventions and treatment gaps. Service quality reaches new levels with performance analytics that identify both excellence and opportunities for improvement. Leadership gains data-informed strategic decision-making capabilities that reduce uncertainty and increase confidence in organizational direction.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">For Care Providers</h4>
        <p className="mb-3 text-foreground">Care providers benefit from reduced documentation time and administrative tasks, allowing more focus on direct client interaction and clinical care. Enhanced client insights through integrated data provide a comprehensive view of each individual's health status and needs. Proactive intervention capabilities through continuous monitoring allow earlier detection and treatment of emerging issues. Streamlined communication across care teams eliminates information gaps and conflicting messages. Overall work satisfaction increases significantly through a renewed focus on meaningful care rather than paperwork and process management.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2 font-display text-mcn-blue-dark">Implementation Pathway</h3>
        <p className="mb-3 text-foreground">MCN can be deployed rapidly within your existing infrastructure, with customizable modules to match your specific organizational needs. Our implementation specialists ensure seamless integration, comprehensive training, and ongoing support to maximize adoption and return on investment.</p>
        
        <p className="font-medium text-center mt-5 text-mcn-blue-dark font-display">Mobile Care Nexus: Unifying Care for Independence & Connection</p>
        <p className="italic text-center text-foreground">By bringing together monitoring, communication, and support in one cohesive platform, MCN helps clients live independently while giving healthcare professionals and support teams the tools they need to provide exceptional care efficiently.</p>
        
        <p className="mt-4 text-foreground"><strong>Coming Soon:</strong> Administrative, financial, and management dashboards are currently in development and will complete our ecosystem by addressing all aspects of healthcare operations and business intelligence.</p>
      </div>
      
      <div className="h-20 flex items-end justify-center text-center text-muted-foreground">
        <p>{t('popup.scrollPrompt', 'Please scroll to the bottom to continue')}</p>
      </div>
    </>
  );
};

export default PageTwoContent;
