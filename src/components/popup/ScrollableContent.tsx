
import React, { useEffect, useRef, ReactNode, forwardRef, memo } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ScrollableContentProps {
  children: ReactNode;
  onScroll: () => void;
}

const ScrollableContent = memo(forwardRef<HTMLDivElement, ScrollableContentProps>(({ children, onScroll }, ref) => {
  const innerRef = useRef<HTMLDivElement>(null);
  
  // Combine the forwarded ref with our internal ref
  const setRefs = (element: HTMLDivElement | null) => {
    innerRef.current = element;
    
    // Handle forwarded ref
    if (typeof ref === 'function') {
      ref(element);
    } else if (ref) {
      ref.current = element;
    }
  };

  // Force reset scroll position when the component mounts or is re-rendered
  useEffect(() => {
    if (innerRef.current) {
      innerRef.current.scrollTop = 0;
    }
  }, [children]); // Re-run when children change, which happens on page change

  // Force enable the "Next" button if the content is not scrollable
  useEffect(() => {
    const checkIfScrollable = () => {
      if (!innerRef.current) return;
      
      const { scrollHeight, clientHeight } = innerRef.current;
      
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
    if (!innerRef.current) return;
    
    const { scrollTop, scrollHeight, clientHeight } = innerRef.current;
    const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 10;
    
    if (isAtBottom) {
      onScroll();
    }
  };

  return (
    <ScrollArea 
      className="h-[60vh] pr-4" 
      onScroll={handleScroll}
      ref={setRefs}
    >
      <div className="space-y-4">
        {children}
      </div>
    </ScrollArea>
  );
}));

ScrollableContent.displayName = 'ScrollableContent';

export default ScrollableContent;
