
import React, { useEffect, useRef, ReactNode } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ScrollableContentProps {
  children: ReactNode;
  onScroll: () => void;
}

const ScrollableContent: React.FC<ScrollableContentProps> = ({ children, onScroll }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Force enable the "Next" button if the content is not scrollable
  useEffect(() => {
    const checkIfScrollable = () => {
      if (!scrollRef.current) return;
      
      const { scrollHeight, clientHeight } = scrollRef.current;
      
      // If content height is less than or equal to the container height,
      // it means there's nothing to scroll, so we should enable the button
      if (scrollHeight <= clientHeight) {
        onScroll();
      }
    };
    
    // Check initially
    checkIfScrollable();
    
    // Also check on window resize
    window.addEventListener('resize', checkIfScrollable);
    return () => window.removeEventListener('resize', checkIfScrollable);
  }, [onScroll]);

  // Check if user has scrolled to bottom
  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 10;
    
    if (isAtBottom) {
      onScroll();
    }
  };

  return (
    <ScrollArea 
      className="h-[60vh] pr-4" 
      onScroll={handleScroll}
      ref={scrollRef}
    >
      <div className="space-y-4">
        {children}
      </div>
    </ScrollArea>
  );
};

export default ScrollableContent;
