
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
                <p className="font-semibold text-lg">{t('popup.terms.welcome', 'Welcome to Mobile Care Nexus')}</p>
                
                <p>{t('popup.terms.paragraph1', 'These terms and conditions outline the rules and regulations for the use of Mobile Care Nexus\'s Website and Services.')}</p>
                
                <p>{t('popup.terms.paragraph2', 'By accessing this website we assume you accept these terms and conditions. Do not continue to use Mobile Care Nexus if you do not agree to take all of the terms and conditions stated on this page.')}</p>
                
                <h3 className="font-semibold mt-4">{t('popup.terms.section1', 'License to Use')}</h3>
                <p>{t('popup.terms.section1Text', 'Unless otherwise stated, Mobile Care Nexus and/or its licensors own the intellectual property rights for all material on Mobile Care Nexus. All intellectual property rights are reserved. You may access this from Mobile Care Nexus for your own personal use subjected to restrictions set in these terms and conditions.')}</p>
                
                <h3 className="font-semibold mt-4">{t('popup.terms.section2', 'Restrictions')}</h3>
                <p>{t('popup.terms.section2Text', 'You are specifically restricted from all of the following:')}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('popup.terms.restriction1', 'Publishing any Mobile Care Nexus material in any other media')}</li>
                  <li>{t('popup.terms.restriction2', 'Selling, sublicensing and/or otherwise commercializing any Mobile Care Nexus material')}</li>
                  <li>{t('popup.terms.restriction3', 'Publicly performing and/or showing any Mobile Care Nexus material')}</li>
                  <li>{t('popup.terms.restriction4', 'Using this website in any way that is or may be damaging to this website')}</li>
                  <li>{t('popup.terms.restriction5', 'Using this website in any way that impacts user access to this website')}</li>
                </ul>
                
                <h3 className="font-semibold mt-4">{t('popup.terms.section3', 'Your Account')}</h3>
                <p>{t('popup.terms.section3Text', 'If you create an account on the website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account.')}</p>
                
                <h3 className="font-semibold mt-4">{t('popup.terms.section4', 'Limitation of Liability')}</h3>
                <p>{t('popup.terms.section4Text', 'In no event shall Mobile Care Nexus, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website.')}</p>
                
                <div className="h-20 flex items-end justify-center text-center text-muted-foreground">
                  <p>{t('popup.scrollPrompt', 'Please scroll to the bottom to continue')}</p>
                </div>
              </>
            ) : (
              <>
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
