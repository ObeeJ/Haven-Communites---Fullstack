/**
 * useIsMobile - Responsive design hook
 * Detects mobile breakpoint (768px) with SSR-safe handling
 * Replaces duplicated mobile detection logic across components
 */

import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 768;

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Avoid hydration mismatch - only run on client
    setIsHydrated(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Check on mount
    checkMobile();

    // Listen to resize events
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Return false during hydration to prevent mismatch
  return isHydrated ? isMobile : false;
}

/**
 * useIsMobileExact - Get exact breakpoint detection
 * Returns object with multiple breakpoints for more control
 */
export function useIsBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<'sm' | 'md' | 'lg' | 'xl' | '2xl'>('md');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);

    const checkBreakpoint = () => {
      const width = window.innerWidth;

      if (width < 375) setBreakpoint('sm');
      else if (width < 768) setBreakpoint('md');
      else if (width < 1024) setBreakpoint('lg');
      else if (width < 1280) setBreakpoint('xl');
      else setBreakpoint('2xl');
    };

    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint);

    return () => window.removeEventListener('resize', checkBreakpoint);
  }, []);

  return { isHydrated, breakpoint };
}
