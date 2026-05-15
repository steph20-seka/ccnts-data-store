import { useEffect } from 'react';

/**
 * Hook to set the page title in the browser tab
 * Format: "CCNTS – Page Name"
 */
export function usePageTitle(pageTitle: string) {
  useEffect(() => {
    const fullTitle = pageTitle ? `CCNTS – ${pageTitle}` : 'CCNTS';
    document.title = fullTitle;

    // Cleanup: reset to default on unmount
    return () => {
      document.title = 'CCNTS';
    };
  }, [pageTitle]);
}
