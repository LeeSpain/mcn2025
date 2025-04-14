
import React, { useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
import YouTubePlayer from './video/YouTubePlayer';
import ThankYouView from './video/ThankYouView';
import { useYouTubeAPI } from './video/useYouTubeAPI';

const FixedVideo: React.FC = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  
  // Initialize YouTube API
  const { isAPIReady } = useYouTubeAPI(() => {
    // API is ready, we can use it now
    setIsLoaded(true);
  });

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  const handlePlayerReady = () => {
    setIsLoaded(true);
  };

  const handlePlayerError = (errorMessage: string) => {
    setError(errorMessage);
  };

  const handleWatchAgain = () => {
    if (isAPIReady()) {
      setVideoEnded(false);
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
  
  // Ensure we scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed-video-container fixed top-24 right-6 z-30 md:right-8 lg:right-12 w-64 md:w-80 xl:w-96 shadow-xl rounded-xl overflow-hidden border-2 border-mcn-blue/30">
      {!videoEnded ? (
        <>
          {error ? (
            <div className="p-4 bg-red-50 text-red-500 text-center">
              {error}
            </div>
          ) : (
            <YouTubePlayer
              videoId="rRqZZwZuw4M"
              onVideoEnd={handleVideoEnd}
              onPlayerReady={handlePlayerReady}
              onError={handlePlayerError}
            />
          )}
        </>
      ) : (
        <ThankYouView 
          onWatchAgain={handleWatchAgain}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default FixedVideo;
