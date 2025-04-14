
import React, { useEffect, useRef, useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Define the YouTube API types for TypeScript
declare global {
  interface Window {
    onYouTubeIframeAPIReady: (() => void) | null;
    YT: {
      Player: new (
        container: HTMLElement | string,
        options: {
          videoId: string;
          playerVars?: {
            autoplay?: number;
            controls?: number;
            modestbranding?: number;
            rel?: number;
            fs?: number;
            origin?: string;
            enablejsapi?: number;
            host?: string;
          };
          events?: {
            onStateChange?: (event: { data: number }) => void;
            onReady?: (event: any) => void;
            onError?: (event: any) => void;
          };
        }
      ) => {
        destroy: () => void;
      };
    };
  }
}

interface YouTubePlayerProps {
  videoId: string;
  onVideoEnd: () => void;
  onPlayerReady: () => void;
  onError: (error: string) => void;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  videoId,
  onVideoEnd,
  onPlayerReady,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadAttempts, setLoadAttempts] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const playerContainerId = useRef(`youtube-player-container-${Math.random().toString(36).substring(2, 9)}`);
  
  // Safely remove an element from the DOM
  const safeRemoveElement = (element: HTMLElement | null) => {
    if (element && element.parentNode) {
      try {
        element.parentNode.removeChild(element);
      } catch (error) {
        console.error('Error removing element:', error);
      }
    }
  };

  // Clean up previous player and container
  const cleanupPreviousPlayer = () => {
    // Destroy previous player
    if (playerRef.current) {
      try {
        console.log('Destroying previous player instance');
        playerRef.current.destroy();
      } catch (error) {
        console.error('Error destroying player:', error);
      }
      playerRef.current = null;
    }

    // Remove the previous player container if it exists
    if (containerRef.current) {
      // Find all potential player elements inside the container
      const elements = containerRef.current.querySelectorAll(`[id^="youtube-player"]`);
      elements.forEach(element => {
        safeRemoveElement(element as HTMLElement);
      });
      console.log('Removed old player elements');
    }
  };

  // Initialize YouTube player
  const initializePlayer = () => {
    // If the container ref doesn't exist, exit
    if (!containerRef.current) {
      console.error('Container ref is not available');
      return;
    }
    
    // First cleanup any previous player
    cleanupPreviousPlayer();

    // Create a new player container
    const newPlayerContainer = document.createElement('div');
    newPlayerContainer.id = playerContainerId.current;
    containerRef.current.appendChild(newPlayerContainer);
    console.log('Created new player container:', playerContainerId.current);
    
    // Reset loaded state
    setIsLoaded(false);
    
    try {
      if (!window.YT || !window.YT.Player) {
        console.log('YouTube API not yet loaded, will retry when ready');
        
        // Increment load attempts
        setLoadAttempts(prev => prev + 1);
        
        // If we've tried multiple times, inform the user
        if (loadAttempts > 3) {
          onError('YouTube player is taking longer than expected to load. Please refresh the page if video doesn\'t appear soon.');
        }
        
        // We'll try again in a moment
        setTimeout(() => {
          if (!isLoaded && window.YT && window.YT.Player) {
            console.log('Retrying player initialization after delay');
            initializePlayer();
          }
        }, 2000);
        
        return;
      }
      
      console.log('Initializing YouTube player with container ID:', playerContainerId.current);
      
      // Create new player with correct aspect ratio settings
      playerRef.current = new window.YT.Player(playerContainerId.current, {
        videoId: videoId,
        playerVars: {
          autoplay: 1,  // Auto-play to improve user experience
          controls: 1,
          modestbranding: 1,
          rel: 0,
          fs: 1,
          origin: window.location.origin,
          enablejsapi: 1
        },
        events: {
          onReady: (event) => {
            console.log('Player ready event fired');
            setIsLoaded(true);
            onPlayerReady();
            
            // Set the iframe to maintain aspect ratio correctly
            const iframe = event.target.getIframe();
            if (iframe) {
              iframe.style.width = '100%';
              iframe.style.height = '100%';
              iframe.style.position = 'absolute';
              iframe.style.top = '0';
              iframe.style.left = '0';
            }
          },
          onStateChange: (event) => {
            // Video ended (state 0)
            if (event.data === 0) {
              console.log('Video ended, showing thank you view');
              onVideoEnd();
            }
          },
          onError: (event) => {
            console.error('YouTube player error:', event);
            onError('Failed to load video. Please try refreshing the page.');
          }
        }
      });
    } catch (error) {
      console.error('Error initializing YouTube player:', error);
      onError('Failed to initialize video player. Please try refreshing the page.');
    }
  };

  // Add a listener for YouTube API ready event
  useEffect(() => {
    const checkYouTubeAPI = () => {
      if (window.YT && window.YT.Player) {
        console.log('YouTube API detected via interval check');
        initializePlayer();
        return true;
      }
      return false;
    };

    // Try initializing player immediately if API is ready
    const initialCheck = checkYouTubeAPI();
    
    // If not ready, set up an interval to check
    let intervalId: number | undefined;
    if (!initialCheck) {
      intervalId = window.setInterval(() => {
        if (checkYouTubeAPI()) {
          clearInterval(intervalId);
        }
      }, 1000); // Check every 1 second
    }

    // Clean up interval on unmount
    return () => {
      if (intervalId) clearInterval(intervalId);
      cleanupPreviousPlayer();
    };
  }, [videoId]);

  return (
    <div className="relative w-full">
      <AspectRatio ratio={16/9} className="overflow-hidden">
        <div 
          ref={containerRef}
          className="absolute inset-0 w-full h-full bg-gray-100"
          style={{ position: 'relative' }}
        >
          {!isLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100">
              <div className="animate-spin h-8 w-8 border-4 border-mcn-blue border-t-transparent rounded-full mb-2"></div>
              <p className="text-sm text-gray-600">Loading video...</p>
            </div>
          )}
        </div>
      </AspectRatio>
      
      {/* Branded overlay with subtle gradient */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-mcn-blue-dark/80 to-transparent p-3">
        <div className="text-white text-sm font-medium text-center">
          Mobile Care Nexus Overview
        </div>
      </div>
    </div>
  );
};

export default YouTubePlayer;
