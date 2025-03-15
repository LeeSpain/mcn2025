
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const PageTwoContent: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <div className="bg-mcn-blue/5 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-mcn-blue-dark mb-4 font-display">Commercial Advantages</h2>
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
        
        <h3 className="font-semibold text-lg mt-4 mb-2 font-display text-mcn-blue-dark">Administrative Dashboards Coming Soon</h3>
        <p className="mb-3 text-foreground">Administrative, financial, and management dashboards are currently in final development and will complete the ecosystem by addressing all aspects of business operations and performance management.</p>
        
        <h3 className="font-semibold text-lg mt-4 mb-2 font-display text-mcn-blue-dark">Why This Matters Now</h3>
        <p className="mb-3 text-foreground">Mobile Care stands at a pivotal moment in its growth trajectory. Client expectations are evolving rapidly, operational costs continue to rise, and competition is intensifying. MCN provides the strategic platform to address these challenges while positioning the company for sustainable growth and market leadership.</p>
        
        <p className="mb-3 text-foreground">I welcome your exploration of Mobile Care Nexus and look forward to discussing how this evolution can transform both the client experience and your business operations. Please feel free to test different features and language options—the system is fully operational and ready for your evaluation.</p>
        
        <p className="font-medium text-center mt-5 text-mcn-blue-dark font-display">Mobile Care Nexus: Unifying Care for Independence & Connection</p>
      </div>
      
      <div className="h-20 flex items-end justify-center text-center text-muted-foreground">
        <p>{t('popup.scrollPrompt', 'Please scroll to the bottom to continue')}</p>
      </div>
    </>
  );
};

export default PageTwoContent;
