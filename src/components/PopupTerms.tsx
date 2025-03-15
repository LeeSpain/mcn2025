
import React, { useState, useEffect, useRef } from 'react';
import { 
  Dialog, 
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import ScrollableContent from './popup/ScrollableContent';
import PageOneContent from './popup/PageOneContent';
import PageTwoContent from './popup/PageTwoContent';

interface PopupTermsProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupTerms: React.FC<PopupTermsProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState<1 | 2>(1);
  const [canProceed, setCanProceed] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const dialogDescriptionId = "popup-terms-description";

  // Reset states when dialog opens
  useEffect(() => {
    if (isOpen) {
      setCurrentPage(1);
      setCanProceed(false);
    }
  }, [isOpen]);

  // Scroll to top when changing pages
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = 0;
      setCanProceed(false);
    }
  }, [currentPage]);

  // Handler for when user scrolls to bottom
  const handleScrollToBottom = () => {
    setCanProceed(true);
  };

  const handleNext = () => {
    if (currentPage === 1) {
      setCurrentPage(2);
      // Explicitly ensure scroll position is reset when moving to page 2
      setTimeout(() => {
        if (scrollAreaRef.current) {
          scrollAreaRef.current.scrollTop = 0;
        }
      }, 0);
    } else {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className="max-w-3xl" 
        aria-describedby={dialogDescriptionId}
      >
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-display text-mcn-blue-dark">
            {currentPage === 1 
              ? t('popup.terms.title', 'The Future Is Now') 
              : t('popup.privacy.title', 'Understand The Platform')}
          </DialogTitle>
          <DialogDescription id={dialogDescriptionId} className="sr-only">
            {currentPage === 1 
              ? 'Information about Mobile Care Nexus platform' 
              : 'Privacy and platform details'}
          </DialogDescription>
        </DialogHeader>
        
        <ScrollableContent onScroll={handleScrollToBottom} ref={scrollAreaRef}>
          {currentPage === 1 ? <PageOneContent /> : <PageTwoContent />}
        </ScrollableContent>
        
        <DialogFooter>
          <Button 
            onClick={handleNext} 
            disabled={!canProceed}
            className="w-full sm:w-auto bg-mcn-blue hover:bg-mcn-blue-dark text-white"
          >
            {currentPage === 1 
              ? t('popup.next', 'Next: Understand The Platform') 
              : t('popup.accept', 'Discover MCN Now')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PopupTerms;
