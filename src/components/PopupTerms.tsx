
import React, { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle 
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

  // Reset states when dialog opens
  useEffect(() => {
    if (isOpen) {
      setCurrentPage(1);
      setCanProceed(false);
    }
  }, [isOpen]);

  // Handler for when user scrolls to bottom
  const handleScrollToBottom = () => {
    setCanProceed(true);
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
              ? t('popup.terms.title', 'The Future Is Now') 
              : t('popup.privacy.title', 'Understand The Platform')}
          </DialogTitle>
        </DialogHeader>
        
        <ScrollableContent onScroll={handleScrollToBottom}>
          {currentPage === 1 ? <PageOneContent /> : <PageTwoContent />}
        </ScrollableContent>
        
        <DialogFooter>
          <Button 
            onClick={handleNext} 
            disabled={!canProceed}
            className="w-full sm:w-auto"
          >
            {currentPage === 1 
              ? t('popup.next', 'Next: Understand The Platform') 
              : t('popup.accept', 'I Accept & Continue')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PopupTerms;
