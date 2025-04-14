
import { useRef, useEffect, useState } from 'react';

export const useYouTubeAPI = (onAPIReady?: () => void) => {
  const apiReadyRef = useRef<boolean>(false);
  const apiLoadingRef = useRef<boolean>(false);
  const [apiLoaded, setApiLoaded] = useState(false);
  
  // Load YouTube API
  const loadYouTubeAPI = () => {
    if (apiLoadingRef.current) return;
    
    apiLoadingRef.current = true;
    console.log('Starting YouTube API load process');
    
    // Check if the API script is already loaded
    if (document.getElementById('youtube-iframe-api')) {
      console.log('YouTube API script tag already exists');
      return;
    }
    
    // Create API script
    const tag = document.createElement('script');
    tag.id = 'youtube-iframe-api';
    tag.src = 'https://www.youtube.com/iframe_api';
    tag.async = true;
    
    // Set up global callback before appending script
    window.onYouTubeIframeAPIReady = () => {
      console.log('YouTube API is ready');
      apiReadyRef.current = true;
      setApiLoaded(true);
      if (onAPIReady) {
        onAPIReady();
      }
    };
    
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      console.log('YouTube API script added to document');
    }
  };
  
  useEffect(() => {
    // Check if API is already loaded
    if (window.YT && window.YT.Player) {
      console.log('YouTube API already loaded on mount');
      apiReadyRef.current = true;
      setApiLoaded(true);
      if (onAPIReady) {
        onAPIReady();
      }
      return;
    }
    
    // Load API on component mount
    loadYouTubeAPI();
    
    // Cleanup function
    return () => {
      // Store previous callback
      const previousCallback = window.onYouTubeIframeAPIReady;
      
      // Clean up the global callback to avoid memory leaks
      window.onYouTubeIframeAPIReady = null;
      
      console.log('Cleaned up YouTube API callback');
      
      // If we're unmounting during API load, restore previous callback
      if (!apiReadyRef.current && previousCallback) {
        window.onYouTubeIframeAPIReady = previousCallback;
      }
    };
  }, [onAPIReady]);
  
  return {
    isAPIReady: () => apiReadyRef.current,
    apiLoaded
  };
};
