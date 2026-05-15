import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { getPageSEO, ORGANIZATION_DATA, type PageSEO } from '../config/seo';
import faviconSrc from '../../imports/t_l_chargement-2.png';

interface SEOHeadProps {
  pageKey: string;
  customTitle?: string;
  customDescription?: string;
  customImage?: string;
  noIndex?: boolean;
}

/**
 * Composant SEO complet pour toutes les pages
 * Gère :
 * - Les meta tags de base (title, description, keywords)
 * - Les Open Graph tags pour les réseaux sociaux
 * - Les Twitter Card tags
 * - Les meta tags pour les langues
 * - Le Structured Data (JSON-LD)
 * - Les canonical URLs
 */
export function SEOHead({
  pageKey,
  customTitle,
  customDescription,
  customImage,
  noIndex = false,
}: SEOHeadProps) {
  const { i18n } = useTranslation();
  const location = useLocation();
  const currentLang = i18n.language || 'fr';

  // Obtenir la configuration SEO pour la page et la langue actuelles
  const seoConfig: PageSEO = getPageSEO(pageKey, currentLang);

  // Construction de l'URL complète
  const baseUrl = window.location.origin;
  const currentUrl = `${baseUrl}${location.pathname}`;
  const canonicalUrl = currentUrl;

  // Image Open Graph (utiliser l'image custom, celle de la config, ou l'image par défaut)
  const ogImage = customImage || seoConfig.ogImage || `${baseUrl}/og-image.jpg`;

  // Titre final - Format: CCNTS – Nom de la page
  const finalTitle = customTitle || seoConfig.title;
  const fullTitle = `CCNTS – ${finalTitle}`;

  // Description finale
  const finalDescription = customDescription || seoConfig.description;

  useEffect(() => {
    // Mettre à jour le titre de la page
    document.title = fullTitle;

    // Nettoyer les anciennes meta tags
    const removeMetaTag = (selector: string) => {
      const existing = document.querySelector(selector);
      if (existing) existing.remove();
    };

    // Fonction helper pour créer/mettre à jour une meta tag
    const setMetaTag = (
      type: 'name' | 'property',
      identifier: string,
      content: string
    ) => {
      const selector = `meta[${type}="${identifier}"]`;
      let tag = document.querySelector(selector) as HTMLMetaElement;

      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(type, identifier);
        document.head.appendChild(tag);
      }

      tag.setAttribute('content', content);
    };

    // Meta tags de base
    setMetaTag('name', 'description', finalDescription);
    setMetaTag('name', 'keywords', seoConfig.keywords.join(', '));
    setMetaTag('name', 'author', 'CCNTS');

    // Langue
    const htmlTag = document.documentElement;
    htmlTag.setAttribute('lang', currentLang);

    // Robots
    if (noIndex) {
      setMetaTag('name', 'robots', 'noindex, nofollow');
    } else {
      setMetaTag('name', 'robots', 'index, follow');
    }

    // Open Graph tags
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', finalDescription);
    setMetaTag('property', 'og:type', seoConfig.ogType || 'website');
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:site_name', 'CCNTS');
    setMetaTag('property', 'og:locale', getLocaleCode(currentLang));

    // Twitter Card tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', finalDescription);
    setMetaTag('name', 'twitter:image', ogImage);
    // setMetaTag('name', 'twitter:site', '@ccnts'); // Décommenter si vous avez un compte Twitter

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Alternate language tags
    const alternateLanguages = ['fr', 'en', 'de', 'es'];
    
    // Supprimer les anciens alternate tags
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(link => link.remove());
    
    alternateLanguages.forEach((lang) => {
      const alternate = document.createElement('link');
      alternate.rel = 'alternate';
      alternate.hreflang = lang;
      alternate.href = `${baseUrl}${location.pathname}?lang=${lang}`;
      document.head.appendChild(alternate);
    });

    // x-default pour le multilingue
    const xDefault = document.createElement('link');
    xDefault.rel = 'alternate';
    xDefault.hreflang = 'x-default';
    xDefault.href = currentUrl;
    document.head.appendChild(xDefault);

    // Structured Data (JSON-LD)
    let structuredDataScript = document.getElementById('structured-data');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.id = 'structured-data';
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }

    // Créer le JSON-LD approprié selon le type de page
    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        ORGANIZATION_DATA,
        {
          '@type': 'WebPage',
          '@id': currentUrl,
          url: currentUrl,
          name: fullTitle,
          description: finalDescription,
          isPartOf: {
            '@type': 'WebSite',
            '@id': `${baseUrl}/#website`,
            url: baseUrl,
            name: 'CCNTS',
            description: 'Cabinet de Cartographie Numérique, de Télédétection et de Statistiques',
            publisher: {
              '@id': `${baseUrl}/#organization`,
            },
          },
          inLanguage: currentLang,
        },
      ],
    };

    // Ajouter des données spécifiques pour les articles (cours)
    if (seoConfig.ogType === 'article') {
      structuredData['@graph'].push({
        '@type': 'Article',
        headline: finalTitle,
        description: finalDescription,
        image: ogImage,
        author: ORGANIZATION_DATA,
        publisher: ORGANIZATION_DATA,
        inLanguage: currentLang,
      });
    }

    structuredDataScript.textContent = JSON.stringify(structuredData);

    // Favicon - injecter le logo officiel CCNTS
    const setFavicon = (href: string, sizes?: string) => {
      const rel = sizes === '32x32' || sizes === '64x64' ? 'icon' : 'shortcut icon';
      const existingSelector = sizes
        ? `link[rel="icon"][sizes="${sizes}"]`
        : `link[rel="shortcut icon"]`;
      let link = document.querySelector(existingSelector) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        if (sizes) {
          link.rel = 'icon';
          link.setAttribute('sizes', sizes);
        } else {
          link.rel = 'shortcut icon';
        }
        document.head.appendChild(link);
      }
      link.type = 'image/png';
      link.href = href;
    };

    // Favicon apple-touch-icon
    const setAppleFavicon = (href: string) => {
      let link = document.querySelector('link[rel="apple-touch-icon"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'apple-touch-icon';
        document.head.appendChild(link);
      }
      link.href = href;
    };

    setFavicon(faviconSrc, '32x32');
    setFavicon(faviconSrc, '64x64');
    setFavicon(faviconSrc);
    setAppleFavicon(faviconSrc);

    // Cleanup function
    return () => {
      // Les meta tags sont persistants entre les pages pour éviter les flashs
    };
  }, [
    pageKey,
    currentLang,
    fullTitle,
    finalDescription,
    seoConfig,
    currentUrl,
    canonicalUrl,
    ogImage,
    noIndex,
    location.pathname,
  ]);

  // Ce composant ne rend rien visuellement
  return null;
}

/**
 * Convertit le code de langue en locale Open Graph
 */
function getLocaleCode(lang: string): string {
  const locales: Record<string, string> = {
    fr: 'fr_FR',
    en: 'en_US',
    de: 'de_DE',
    es: 'es_ES',
  };
  return locales[lang] || 'fr_FR';
}
