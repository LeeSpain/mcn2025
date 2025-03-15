
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
        
        <h3 className="font-semibold text-lg mt-4 mb-2 font-display text-mcn-blue-dark">Commercial Advantages</h3>
        <p className="mb-2 text-foreground">For Mobile Care as a business, MCN creates substantial competitive advantages:</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">Operational Efficiency</h4>
        <p className="mb-3 text-foreground">By automating routine tasks and optimizing workflows, MCN allows your teams to accomplish more with fewer resources. The intelligent prioritization ensures your staff focus on high-value activities while technology handles repetitive processes.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">Enhanced Client Experience</h4>
        <p className="mb-3 text-foreground">Clients benefit from unprecedented accessibility, with support available 24/7 through multiple channels. The personalized interface adapts to individual preferences and needs, creating a more engaging and satisfying experience.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">Data-Driven Decision Making</h4>
        <p className="mb-3 text-foreground">Every interaction generates valuable insights that inform strategic decisions. The comprehensive analytics dashboard provides real-time visibility into service delivery, client satisfaction, and operational performance.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">Competitive Differentiation</h4>
        <p className="mb-3 text-foreground">In an increasingly crowded market, MCN positions Mobile Care as an innovation leader with capabilities that traditional providers cannot match. The integrated approach creates barriers to entry that protect your market position.</p>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">Scalable Growth Model</h4>
        <p className="mb-3 text-foreground">Unlike traditional care models that require linear staffing increases to support growth, MCN breaks this pattern by creating a scalable infrastructure where technology handles routine tasks and human resources focus on complex, high-value interactions.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2 font-display text-mcn-blue-dark">Implementation and Next Steps</h3>
        <p className="mb-3 text-foreground">The platform you're exploring is fully functional and ready for implementation. Our suggested approach follows three phases:</p>
        <ol className="list-decimal pl-6 mb-4 text-foreground">
          <li className="mb-2">Initial Deployment (4-6 weeks): Launch core functionality with select client groups to demonstrate immediate value and gather feedback</li>
          <li className="mb-2">Full Implementation (8-12 weeks): Roll out complete platform capabilities across all service areas with comprehensive training and change management</li>
          <li className="mb-2">Optimization (Ongoing): Continuously refine based on performance data and emerging business requirements</li>
        </ol>
        
        <h4 className="font-medium text-mcn-blue-dark mt-3 mb-1 font-display">Why This Matters Now</h4>
        <p className="mb-3 text-foreground">Mobile Care stands at a pivotal moment in its growth trajectory. Client expectations are evolving rapidly, operational costs continue to rise, and competition is intensifying. MCN provides the strategic platform to address these challenges while positioning the company for sustainable growth and market leadership.</p>
        
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
