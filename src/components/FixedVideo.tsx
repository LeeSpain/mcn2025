
import React, { useState, useEffect, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { X, RefreshCw } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
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

const FixedVideo: React.FC = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isPlayerDestroyed, setIsPlayerDestroyed] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerContainerId = useRef(`youtube-player-container-${Math.random().toString(36).substring(2, 9)}`);
  const apiReadyRef = useRef<boolean>(false);
  const apiLoadingRef = useRef<boolean>(false);

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

  // Load YouTube API
  const loadYouTubeAPI = () => {
    if (apiLoadingRef.current) return;
    
    apiLoadingRef.current = true;
    
    if (document.getElementById('youtube-iframe-api')) {
      return;
    }
    
    // Create API script
    const tag = document.createElement('script');
    tag.id = 'youtube-iframe-api';
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    
    // Set up global callback
    window.onYouTubeIframeAPIReady = () => {
      apiReadyRef.current = true;
      initializePlayer();
    };
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

    setIsPlayerDestroyed(true);
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
    
    // Reset states
    setIsLoaded(false);
    setVideoEnded(false);
    setError(null);
    setIsPlayerDestroyed(false);
    
    try {
      if (!window.YT || !window.YT.Player) {
        console.log('YouTube API not yet loaded, will retry when ready');
        return;
      }
      
      console.log('Initializing YouTube player with container ID:', playerContainerId.current);
      
      // Create new player with correct aspect ratio settings
      playerRef.current = new window.YT.Player(playerContainerId.current, {
        videoId: 'rRqZZwZuw4M',
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
              setVideoEnded(true);
            }
          },
          onError: (event) => {
            console.error('YouTube player error:', event);
            setError('Failed to load video');
          }
        }
      });
    } catch (error) {
      console.error('Error initializing YouTube player:', error);
      setError('Failed to initialize video player');
    }
  };

  const handleWatchAgain = () => {
    if (apiReadyRef.current) {
      initializePlayer();
      toast({
        title: "Restarting video",
        description: "The video will play from the beginning.",
        duration: 3000,
      });
    } else {
      setError('Video player not ready. Please refresh the page.');
      toast({
        title: "Player not ready",
        description: "Please refresh the page to try again.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    toast({
      title: "Video closed",
      description: "You can reload the page to show it again.",
      duration: 3000,
    });
  };
  
  // Initialize player when component mounts
  useEffect(() => {
    // Load API and set up player
    loadYouTubeAPI();
    
    // Only initialize player if API is already loaded
    if (window.YT && window.YT.Player) {
      apiReadyRef.current = true;
      initializePlayer();
    }
    
    // Cleanup function
    return () => {
      cleanupPreviousPlayer();
      
      // Clean up the global callback to avoid memory leaks
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed-video-container fixed top-24 right-6 z-30 md:right-8 lg:right-12 w-64 md:w-80 xl:w-96 shadow-xl rounded-xl overflow-hidden border-2 border-mcn-blue/30">
      {!videoEnded ? (
        <div className="relative w-full">
          <AspectRatio ratio={16/9} className="overflow-hidden">
            <div 
              ref={containerRef}
              className="absolute inset-0 w-full h-full bg-gray-100"
              style={{ position: 'relative' }}
            >
              {!isLoaded && !error && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="animate-spin h-8 w-8 border-4 border-mcn-blue border-t-transparent rounded-full"></div>
                </div>
              )}
              
              {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-red-50">
                  <p className="text-red-500">{error}</p>
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
      ) : (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex flex-col items-center justify-center h-full aspect-video">
          <Avatar className="h-32 w-32 border-4 border-mcn-blue shadow-lg mb-4">
            <AvatarImage src="/placeholder.svg" alt="MCN Avatar" />
            <AvatarFallback className="bg-mcn-blue text-white text-xl">MCN</AvatarFallback>
          </Avatar>
          <h3 className="text-lg font-semibold text-mcn-blue text-center">Thanks for watching!</h3>
          <p className="text-sm text-gray-600 text-center mt-2 mb-6">
            Learn more about Mobile Care Nexus
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
            <Button 
              variant="outline" 
              className="flex-1 gap-2" 
              onClick={handleWatchAgain}
            >
              <RefreshCw className="h-4 w-4" />
              Watch Again
            </Button>
            <Button 
              variant="secondary"
              className="flex-1 gap-2"
              onClick={handleClose}
            >
              <X className="h-4 w-4" />
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FixedVideo;
