
import { useRef, useEffect } from 'react';

export const useYouTubeAPI = (onAPIReady?: () => void) => {
  const apiReadyRef = useRef<boolean>(false);
  const apiLoadingRef = useRef<boolean>(false);
  
  // Load YouTube API
  const loadYouTubeAPI = () => {
    if (apiLoadingRef.current) return;
    
    apiLoadingRef.current = true;
    
    // Check if the API script is already loaded
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
      if (onAPIReady) {
        onAPIReady();
      }
    };
  };
  
  useEffect(() => {
    // Load API on component mount
    loadYouTubeAPI();
    
    // Check if API is already loaded
    if (window.YT && window.YT.Player) {
      apiReadyRef.current = true;
      if (onAPIReady) {
        onAPIReady();
      }
    }
    
    // Cleanup function
    return () => {
      // Clean up the global callback to avoid memory leaks
      window.onYouTubeIframeAPIReady = null;
    };
  }, [onAPIReady]);
  
  return {
    isAPIReady: () => apiReadyRef.current
  };
};
