
import React, { useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
import YouTubePlayer from './video/YouTubePlayer';
import ThankYouView from './video/ThankYouView';
import { useYouTubeAPI } from './video/useYouTubeAPI';
import { useLanguage } from '@/context/LanguageContext';

const FixedVideo: React.FC = () => {
  const { language } = useLanguage();
  const [videoEnded, setVideoEnded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [apiInitialized, setApiInitialized] = useState(false);
  
  // Define video IDs based on language
  const videoId = language === 'en' ? 'rRqZZwZuw4M' : 'mVbXuomTEGU';
  
  // Initialize YouTube API
  const { isAPIReady, apiLoaded } = useYouTubeAPI(() => {
    // API is ready, we can use it now
    console.log('YouTube API ready callback executed');
    setApiInitialized(true);
  });

  useEffect(() => {
    if (apiLoaded) {
      console.log('API loaded state changed to true');
      setApiInitialized(true);
    }
  }, [apiLoaded]);

  // Reset video when language changes
  useEffect(() => {
    if (videoEnded) {
      setVideoEnded(false);
    }
  }, [language]);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    console.log('Video ended, showing thank you view');
  };

  const handlePlayerReady = () => {
    setIsLoaded(true);
    console.log('Player marked as ready');
    
    // Remove any previous error
    if (error) {
      setError(null);
    }
  };

  const handlePlayerError = (errorMessage: string) => {
    console.error('Player error:', errorMessage);
    setError(errorMessage);
    
    // Show toast for better user feedback
    toast({
      title: "Video Player Error",
      description: errorMessage,
      variant: "destructive",
      duration: 5000,
    });
  };

  const handleWatchAgain = () => {
    if (isAPIReady()) {
      setVideoEnded(false);
      console.log('Restarting video');
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
            <div className="p-4 bg-red-50 text-red-500 text-center rounded">
              <p className="mb-2 font-medium">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="text-sm bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded transition-colors"
              >
                Refresh Page
              </button>
            </div>
          ) : (
            <YouTubePlayer
              videoId={videoId}
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
