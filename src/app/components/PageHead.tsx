import { useEffect } from 'react';

interface PageHeadProps {
  title: string;
}

/**
 * Component to manage page title and favicon
 * Format: "CCNTS – Page Title"
 */
export function PageHead({ title }: PageHeadProps) {
  useEffect(() => {
    // Set page title
    const fullTitle = title ? `CCNTS – ${title}` : 'CCNTS';
    document.title = fullTitle;

    // Set favicon if not already set
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = '/favicon.png';

    // Set apple touch icon
    let appleTouchIcon = document.querySelector("link[rel~='apple-touch-icon']") as HTMLLinkElement;
    if (!appleTouchIcon) {
      appleTouchIcon = document.createElement('link');
      appleTouchIcon.rel = 'apple-touch-icon';
      document.head.appendChild(appleTouchIcon);
    }
    appleTouchIcon.href = '/favicon.png';
  }, [title]);

  return null;
}
