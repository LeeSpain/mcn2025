
import React, { useRef, ReactNode } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ScrollableContentProps {
  children: ReactNode;
  onScroll: () => void;
}

const ScrollableContent: React.FC<ScrollableContentProps> = ({ children, onScroll }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

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
