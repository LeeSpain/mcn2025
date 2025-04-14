
import React, { useEffect, useRef } from 'react';
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
  const [isLoaded, setIsLoaded] = React.useState(false);
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
    }
  };

  // Initialize YouTube player
  const initializePlayer = () => {
    // If the container ref doesn't exist, exit
    if (!containerRef.current) return;
    
    // First cleanup any previous player
    cleanupPreviousPlayer();

    // Create a new player container
    const newPlayerContainer = document.createElement('div');
    newPlayerContainer.id = playerContainerId.current;
    containerRef.current.appendChild(newPlayerContainer);
    
    // Reset state
    setIsLoaded(false);
    
    try {
      if (!window.YT || !window.YT.Player) {
        console.log('YouTube API not yet loaded, will retry when ready');
        return;
      }
      
      console.log('Initializing YouTube player with container ID:', playerContainerId.current);
      
      // Create new player with correct aspect ratio settings
      playerRef.current = new window.YT.Player(playerContainerId.current, {
        videoId: videoId,
        playerVars: {
          autoplay: 0,
          controls: 1,
          modestbranding: 1,
          rel: 0,
          fs: 1,
          origin: window.location.origin,
          enablejsapi: 1
        },
        events: {
          onReady: (event) => {
            console.log('Player ready');
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
              console.log('Video ended, showing avatar');
              onVideoEnd();
            }
          },
          onError: (event) => {
            console.error('YouTube player error:', event);
            onError('Failed to load video');
          }
        }
      });
    } catch (error) {
      console.error('Error initializing YouTube player:', error);
      onError('Failed to initialize video player');
    }
  };

  useEffect(() => {
    initializePlayer();

    return () => {
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
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="animate-spin h-8 w-8 border-4 border-mcn-blue border-t-transparent rounded-full"></div>
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
