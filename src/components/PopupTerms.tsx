import React, { useState, useRef, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLanguage } from '@/context/LanguageContext';

interface PopupTermsProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupTerms: React.FC<PopupTermsProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState<1 | 2>(1);
  const [canProceed, setCanProceed] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reset states when dialog opens
  useEffect(() => {
    if (isOpen) {
      setCurrentPage(1);
      setCanProceed(false);
    }
  }, [isOpen]);

  // Check if user has scrolled to bottom
  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 10;
    
    if (isAtBottom) {
      setCanProceed(true);
    }
  };

  const handleNext = () => {
    if (currentPage === 1) {
      setCurrentPage(2);
      setCanProceed(false);
    } else {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-display">
            {currentPage === 1 
              ? t('popup.terms.title', 'Terms & Conditions') 
              : t('popup.privacy.title', 'Privacy Policy')}
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea 
          className="h-[60vh] pr-4" 
          onScroll={handleScroll}
          ref={scrollRef}
        >
          <div className="space-y-4">
            {currentPage === 1 ? (
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
            ) : (
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
                
                <p className="font-semibold text-lg">{t('popup.privacy.welcome', 'Privacy Policy')}</p>
                
                <p>{t('popup.privacy.paragraph1', 'At Mobile Care Nexus, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Mobile Care Nexus and how we use it.')}</p>
                
                <h3 className="font-semibold mt-4">{t('popup.privacy.section1', 'Information We Collect')}</h3>
                <p>{t('popup.privacy.section1Text', 'When you register for an account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.')}</p>
                
                <h3 className="font-semibold mt-4">{t('popup.privacy.section2', 'How We Use Your Information')}</h3>
                <p>{t('popup.privacy.section2Text', 'We use the information we collect in various ways, including to:')}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('popup.privacy.use1', 'Provide, operate, and maintain our website')}</li>
                  <li>{t('popup.privacy.use2', 'Improve, personalize, and expand our website')}</li>
                  <li>{t('popup.privacy.use3', 'Understand and analyze how you use our website')}</li>
                  <li>{t('popup.privacy.use4', 'Develop new products, services, features, and functionality')}</li>
                  <li>{t('popup.privacy.use5', 'Communicate with you, either directly or through one of our partners, for customer service, updates and other website related purposes')}</li>
                </ul>
                
                <h3 className="font-semibold mt-4">{t('popup.privacy.section3', 'Log Files')}</h3>
                <p>{t('popup.privacy.section3Text', 'Mobile Care Nexus follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.')}</p>
                
                <h3 className="font-semibold mt-4">{t('popup.privacy.section4', 'Cookies and Web Beacons')}</h3>
                <p>{t('popup.privacy.section4Text', 'Like any other website, Mobile Care Nexus uses "cookies". These cookies are used to store information including visitors\' preferences, and the pages on the website that the visitor accessed or visited.')}</p>
                
                <h3 className="font-semibold mt-4">{t('popup.privacy.section5', 'Children\'s Information')}</h3>
                <p>{t('popup.privacy.section5Text', 'Mobile Care Nexus does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will promptly remove such information from our records.')}</p>
                
                <div className="h-20 flex items-end justify-center text-center text-muted-foreground">
                  <p>{t('popup.scrollPrompt', 'Please scroll to the bottom to continue')}</p>
                </div>
              </>
            )}
          </div>
        </ScrollArea>
        
        <DialogFooter>
          <Button 
            onClick={handleNext} 
            disabled={!canProceed}
            className="w-full sm:w-auto"
          >
            {currentPage === 1 
              ? t('popup.next', 'Next: Privacy Policy') 
              : t('popup.accept', 'I Accept & Continue')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PopupTerms;
