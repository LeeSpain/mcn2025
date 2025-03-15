
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component that automatically scrolls to the top of the page
 * whenever the route changes.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't render anything
  return null;
}
