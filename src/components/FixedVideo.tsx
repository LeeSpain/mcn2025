
import React, { useState, useEffect, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

// Define the YouTube API types for TypeScript before using them
declare global {
  interface Window {
    onYouTubeIframeAPIReady: (() => void) | null;
    YT: {
      Player: new (
        container: HTMLElement,
        options: {
          videoId: string;
          playerVars?: {
            autoplay?: number;
            controls?: number;
            modestbranding?: number;
            rel?: number;
            fs?: number;
          };
          events?: {
            onStateChange?: (event: { data: number }) => void;
            onReady?: (event: any) => void;
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
  const playerRef = useRef<YT.Player | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the YouTube API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Initialize the player once the API is ready
    window.onYouTubeIframeAPIReady = () => {
      if (!containerRef.current) return;

      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: 'rRqZZwZuw4M',
        playerVars: {
          autoplay: 0,
          controls: 1,
          modestbranding: 1,
          rel: 0, // Don't show related videos
          fs: 1, // Allow fullscreen
        },
        events: {
          onStateChange: (event) => {
            // Video ended (state 0)
            if (event.data === 0) {
              setVideoEnded(true);
            }
          }
        }
      });
    };

    // Cleanup function
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  return (
    <div className="fixed top-24 right-6 z-30 md:right-8 lg:right-12 w-64 md:w-80 xl:w-96 shadow-xl rounded-xl overflow-hidden border-2 border-mcn-blue/30">
      {!videoEnded ? (
        <div className="relative w-full pb-[56.25%]">
          <div 
            ref={containerRef}
            className="absolute inset-0 w-full h-full"
          />
          
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
          <p className="text-sm text-gray-600 text-center mt-2">
            Learn more about Mobile Care Nexus
          </p>
        </div>
      )}
    </div>
  );
};

export default FixedVideo;
