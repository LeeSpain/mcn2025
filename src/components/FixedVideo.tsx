
import React, { useState, useEffect, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { X, RefreshCw } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// Define the YouTube API types for TypeScript before using them
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
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const youtubeAPILoaded = useRef<boolean>(false);
  const apiCallbackQueue = useRef<(() => void)[]>([]);

  // Safe DOM clearing function
  const safeRemoveAllChildren = (element: HTMLElement | null) => {
    if (!element) return;
    
    // Use a safer approach that doesn't cause DOM exceptions
    while (element.firstChild) {
      element.firstChild.remove();
    }
  };

  // Load YouTube API if not already loaded
  const loadYouTubeAPI = () => {
    if (document.getElementById('youtube-iframe-api')) {
      return;
    }
    
    const tag = document.createElement('script');
    tag.id = 'youtube-iframe-api';
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    
    window.onYouTubeIframeAPIReady = () => {
      youtubeAPILoaded.current = true;
      // Process any pending callbacks
      while (apiCallbackQueue.current.length > 0) {
        const callback = apiCallbackQueue.current.shift();
        callback && callback();
      }
    };
  };

  const loadYouTubePlayer = () => {
    if (!containerRef.current) return;
    
    // Clear previous player if it exists
    if (playerRef.current) {
      try {
        playerRef.current.destroy();
        playerRef.current = null;
      } catch (error) {
        console.error('Error destroying previous player:', error);
      }
    }
    
    // Reset states
    setIsLoaded(false);
    setVideoEnded(false);
    setError(null);
    
    // Create a new div for the player
    const playerElement = document.createElement('div');
    playerElement.id = 'youtube-player-' + Math.random().toString(36).substring(2, 9); // Unique ID
    
    // Clear container safely before appending
    safeRemoveAllChildren(containerRef.current);
    
    // Append the new player element
    containerRef.current.appendChild(playerElement);
    
    const initPlayer = () => {
      if (!playerElement.isConnected) {
        console.warn('Player element no longer in DOM, aborting player initialization');
        return;
      }
      
      try {
        console.log('YouTube API ready, initializing player');
        playerRef.current = new window.YT.Player(playerElement.id, {
          videoId: 'rRqZZwZuw4M',
          playerVars: {
            autoplay: 0,
            controls: 1,
            modestbranding: 1,
            rel: 0, // Don't show related videos
            fs: 1, // Allow fullscreen
            origin: window.location.origin,
            enablejsapi: 1
          },
          events: {
            onReady: (event) => {
              console.log('Player ready');
              setIsLoaded(true);
              // Make sure iframe still exists before trying to adjust it
              const iframe = event.target.getIframe();
              if (iframe && iframe.isConnected) {
                iframe.style.width = '100%';
                iframe.style.height = '100%';
              }
            },
            onStateChange: (event) => {
              console.log('Player state changed:', event.data);
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
    
    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      if (youtubeAPILoaded.current) {
        initPlayer();
      } else {
        // Queue the initialization for when the API loads
        apiCallbackQueue.current.push(initPlayer);
        // Load YouTube API if not already loading
        loadYouTubeAPI();
      }
    }
  };

  const handleWatchAgain = () => {
    loadYouTubePlayer();
    toast({
      title: "Restarting video",
      description: "The video will play from the beginning.",
      duration: 3000,
    });
  };

  const handleClose = () => {
    // Hide the entire component by removing it from DOM flow
    const videoElement = document.querySelector('.fixed-video-container');
    if (videoElement) {
      videoElement.classList.add('hidden');
      toast({
        title: "Video closed",
        description: "You can reload the page to show it again.",
        duration: 3000,
      });
    }
  };

  useEffect(() => {
    // Load YouTube API first, then the player
    loadYouTubeAPI();
    loadYouTubePlayer();

    // Cleanup function
    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
          playerRef.current = null;
        } catch (error) {
          console.error('Error destroying player:', error);
        }
      }
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  return (
    <div className="fixed-video-container fixed top-24 right-6 z-30 md:right-8 lg:right-12 w-64 md:w-80 xl:w-96 shadow-xl rounded-xl overflow-hidden border-2 border-mcn-blue/30">
      {!videoEnded ? (
        <div className="relative w-full pb-[56.25%]">
          {/* The container div that holds our YouTube player */}
          <div 
            ref={containerRef}
            className="absolute inset-0 w-full h-full"
            style={{ overflow: 'hidden' }}
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
