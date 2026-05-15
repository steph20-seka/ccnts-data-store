# 📊 Guide SEO Complet - CCNTS

## 🎯 Vue d'ensemble

Ce guide documente l'implémentation complète du SEO pour le site CCNTS. Le système est conçu pour maximiser la visibilité sur les moteurs de recherche tout en supportant 4 langues (français, anglais, allemand, espagnol).

---

## 📁 Architecture SEO

### Fichiers créés

```
/config/
  └── seo.ts                    # Configuration SEO centralisée

/components/
  └── SEOHead.tsx              # Composant SEO réutilisable

/public/
  ├── favicon.svg              # Favicon du site (existant)
  ├── og-image.jpg             # Image Open Graph par défaut (à créer)
  ├── robots.txt               # Instructions pour les robots
  ├── sitemap.xml              # Plan du site XML
  └── .htaccess                # Configuration Apache

/hooks/
  └── usePageTitle.ts          # Hook pour titres dynamiques (existant)
```

---

## 🔧 Composants clés

### 1. Configuration SEO (`/config/seo.ts`)

**Rôle** : Centralise toutes les configurations SEO pour chaque page dans les 4 langues.

**Contenu** :
- ✅ Meta descriptions optimisées par page et par langue
- ✅ Keywords ciblés pour chaque page
- ✅ Types Open Graph (website, article)
- ✅ Structured Data (JSON-LD) pour l'organisation
- ✅ Fonction helper `getPageSEO()`

**Pages configurées** :
- Accueil (`home`)
- Services (`services`)
- Académie (`academy`)
- À propos (`about`)
- Contact (`contact`)
- Data Store (`dataStore`)
- Projets (`projects`)
- Cours QGIS (`courseQGIS`)
- Mes cours (`myCourses`)
- Mes certificats (`myCertificates`)
- Connexion (`login`)
- Inscription (`signup`)

**Exemple d'utilisation** :
```typescript
import { getPageSEO } from '../config/seo';

const seoConfig = getPageSEO('home', 'fr');
// Retourne : { title, description, keywords, ogType, ogImage }
```

---

### 2. Composant SEOHead (`/components/SEOHead.tsx`)

**Rôle** : Composant React qui gère automatiquement tous les meta tags.

**Fonctionnalités** :
- ✅ Title dynamique au format "Nom de page - CCNTS"
- ✅ Meta description et keywords
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ Canonical URL
- ✅ Alternate language tags (hreflang)
- ✅ Structured Data (JSON-LD)
- ✅ Robots meta tag

**Props** :
```typescript
interface SEOHeadProps {
  pageKey: string;           // Clé de la page dans seo.ts
  customTitle?: string;       // Titre personnalisé (optionnel)
  customDescription?: string; // Description personnalisée (optionnel)
  customImage?: string;       // Image OG personnalisée (optionnel)
  noIndex?: boolean;          // Bloquer l'indexation (optionnel)
}
```

**Exemple d'utilisation dans une page** :
```tsx
import { SEOHead } from '../components/SEOHead';

export function HomePage() {
  return (
    <>
      <SEOHead pageKey="home" />
      {/* Contenu de la page */}
    </>
  );
}
```

---

## 📄 Meta Tags générés

### Tags de base
```html
<title>Accueil - CCNTS</title>
<meta name="description" content="CCNTS - Cabinet de Cartographie Numérique...">
<meta name="keywords" content="cartographie numérique, télédétection, SIG...">
<meta name="author" content="CCNTS">
<meta name="robots" content="index, follow">
```

### Open Graph (Réseaux sociaux)
```html
<meta property="og:title" content="Accueil - CCNTS">
<meta property="og:description" content="CCNTS - Cabinet de Cartographie...">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.ccnts.com/">
<meta property="og:image" content="https://www.ccnts.com/og-image.jpg">
<meta property="og:site_name" content="CCNTS">
<meta property="og:locale" content="fr_FR">
```

### Twitter Cards
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Accueil - CCNTS">
<meta name="twitter:description" content="CCNTS - Cabinet de Cartographie...">
<meta name="twitter:image" content="https://www.ccnts.com/og-image.jpg">
```

### Hreflang (Multilingue)
```html
<link rel="canonical" href="https://www.ccnts.com/">
<link rel="alternate" hreflang="fr" href="https://www.ccnts.com/?lang=fr">
<link rel="alternate" hreflang="en" href="https://www.ccnts.com/?lang=en">
<link rel="alternate" hreflang="de" href="https://www.ccnts.com/?lang=de">
<link rel="alternate" hreflang="es" href="https://www.ccnts.com/?lang=es">
<link rel="alternate" hreflang="x-default" href="https://www.ccnts.com/">
```

### Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "CCNTS",
      "legalName": "Cabinet de Cartographie Numérique...",
      "url": "https://www.ccnts.com",
      "logo": "https://www.ccnts.com/favicon.svg"
    },
    {
      "@type": "WebPage",
      "name": "Accueil - CCNTS",
      "description": "CCNTS - Cabinet de Cartographie...",
      "url": "https://www.ccnts.com/"
    }
  ]
}
```

---

## 🖼️ Favicon et Images

### Favicon
- **Fichier** : `/public/favicon.svg`
- **Format** : SVG (vectoriel, adaptatif)
- **Taille** : 32x32px viewbox
- **Design** : Globe géospatial bleu avec point orange

### Image Open Graph
- **Fichier recommandé** : `/public/og-image.jpg`
- **Dimensions** : 1200x630px (ratio 1.91:1)
- **Poids** : < 300KB
- **Format** : JPG ou PNG
- **Contenu suggéré** : Logo CCNTS + slogan + visuel cartographique

**À FAIRE** : Créer l'image `/public/og-image.jpg` avec :
- Logo CCNTS centré
- Texte : "Cabinet de Cartographie Numérique, de Télédétection et de Statistiques"
- Fond : Dégradé bleu géospatial (#1e3a8a → #2563eb)
- Élément visuel : Carte stylisée ou grille géospatiale

---

## 🤖 Robots et Sitemap

### robots.txt
**Emplacement** : `/public/robots.txt`

**Règles configurées** :
- ✅ Autoriser tous les robots sur toutes les pages publiques
- ❌ Bloquer les pages d'authentification (`/login`, `/signup`, `/reset-password`)
- ❌ Bloquer les pages privées (`/my-courses`, `/my-certificates`)
- ❌ Bloquer les quiz (redondants avec les cours)
- 📍 Référence au sitemap

### sitemap.xml
**Emplacement** : `/public/sitemap.xml`

**Pages incluses** :
- Pages principales (Accueil, Services, Académie, etc.)
- Pages de cours
- Support hreflang pour les 4 langues

**Priorités** :
- Accueil : 1.0 (priorité maximale)
- Services, Académie, Data Store : 0.9
- À propos, Contact, Projets : 0.8
- Cours : 0.7

**Fréquences de mise à jour** :
- Accueil, Académie : weekly
- Services, Data Store : weekly
- Autres pages : monthly

---

## 🔐 Configuration Apache (.htaccess)

**Emplacement** : `/public/.htaccess`

**Optimisations incluses** :

### 1. Réécriture d'URL
- Support React Router (SPA)
- Redirection HTTPS (commentée, à activer en production)
- Gestion www/non-www

### 2. Performance
- **Compression GZIP** : Tous les fichiers texte
- **Cache navigateur** :
  - Images/Fonts : 1 an
  - CSS/JS : 1 mois
  - HTML/JSON : Pas de cache (SPA)

### 3. Sécurité
- Protection XSS
- Anti-MIME-sniffing
- Anti-clickjacking
- Politique de référent
- Permissions Policy

---

## 📊 Intégration dans les pages

### Étape 1 : Importer le composant
```tsx
import { SEOHead } from '../components/SEOHead';
```

### Étape 2 : Ajouter le composant en haut du JSX
```tsx
export function HomePage() {
  return (
    <>
      <SEOHead pageKey="home" />
      <div>
        {/* Contenu de la page */}
      </div>
    </>
  );
}
```

### Exemple complet
```tsx
import { SEOHead } from '../components/SEOHead';
import { Hero } from '../components/home/Hero';

export function HomePage() {
  return (
    <>
      {/* SEO - Gère automatiquement title, meta, OG, etc. */}
      <SEOHead pageKey="home" />
      
      {/* Contenu de la page */}
      <Hero />
      {/* ... autres composants */}
    </>
  );
}
```

### Pages avec titre personnalisé
```tsx
<SEOHead 
  pageKey="courseQGIS"
  customTitle="Formation QGIS - Introduction au SIG"
  customDescription="Apprenez QGIS de A à Z : interface, outils, géotraitement et cartographie"
/>
```

### Pages à ne pas indexer (pages privées)
```tsx
<SEOHead 
  pageKey="myCourses"
  noIndex={true}
/>
```

---

## ✅ Checklist d'intégration

### Pages principales
- [ ] HomePage (`home`)
- [ ] ServicesPage (`services`)
- [ ] AcademyPage (`academy`)
- [ ] AboutPage (`about`)
- [ ] ContactPage (`contact`)
- [ ] DataStorePage (`dataStore`)
- [ ] ProjectsPage (`projects`)

### Pages d'authentification
- [ ] LoginPage (`login`, noIndex)
- [ ] SignUpPage (`signup`, noIndex)
- [ ] ResetPasswordPage (`resetPassword`, noIndex)

### Pages de cours
- [ ] CourseQGISPage (`courseQGIS`)
- [ ] CourseSentinel2Page (`courseSentinel2`)
- [ ] CourseThematicMappingPage (`courseThematicMapping`)
- [ ] CourseBufferPage (`courseBuffer`)
- [ ] CourseHistoricalMapsPage (`courseHistoricalMaps`)
- [ ] CourseGoogleEarthEnginePage (`courseGoogleEarthEngine`)

### Pages protégées
- [ ] MyCoursesPage (`myCourses`, noIndex)
- [ ] MyCertificatesPage (`myCertificates`, noIndex)

### Pages de quiz (noIndex recommandé)
- [ ] QuizQGISPage
- [ ] QuizSentinel2Page
- [ ] QuizThematicMappingPage
- [ ] QuizBufferPage
- [ ] QuizHistoricalMapsPage
- [ ] QuizGoogleEarthEnginePage

---

## 🌍 SEO Multilingue

### Stratégie
Le site utilise une approche **multilingue avec paramètres d'URL** :
- URL de base : `https://www.ccnts.com/services`
- Français : `https://www.ccnts.com/services?lang=fr`
- Anglais : `https://www.ccnts.com/services?lang=en`
- Allemand : `https://www.ccnts.com/services?lang=de`
- Espagnol : `https://www.ccnts.com/services?lang=es`

### Tags hreflang automatiques
Le composant `SEOHead` génère automatiquement :
```html
<link rel="alternate" hreflang="fr" href="...?lang=fr">
<link rel="alternate" hreflang="en" href="...?lang=en">
<link rel="alternate" hreflang="de" href="...?lang=de">
<link rel="alternate" hreflang="es" href="...?lang=es">
<link rel="alternate" hreflang="x-default" href="...">
```

### Détection automatique
- Langue détectée par i18next
- Stockée dans `localStorage`
- Les meta tags s'adaptent automatiquement

---

## 🎨 Personnalisation

### Ajouter une nouvelle page au SEO

1. **Ajouter la config dans `/config/seo.ts`** :
```typescript
export const SEO_CONFIG: SEOConfig = {
  // ... pages existantes
  
  newPage: {
    fr: {
      title: 'Nouvelle Page',
      description: 'Description de la nouvelle page...',
      keywords: ['mot-clé1', 'mot-clé2'],
      ogType: 'website',
    },
    en: {
      title: 'New Page',
      description: 'New page description...',
      keywords: ['keyword1', 'keyword2'],
      ogType: 'website',
    },
    // ... de, es
  },
};
```

2. **Intégrer dans la page** :
```tsx
<SEOHead pageKey="newPage" />
```

3. **Ajouter au sitemap** (`/public/sitemap.xml`) :
```xml
<url>
  <loc>https://www.ccnts.com/new-page</loc>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

---

## 🔍 Outils de validation

### 1. Google Search Console
- Soumettre le sitemap : `https://www.ccnts.com/sitemap.xml`
- Vérifier l'indexation
- Surveiller les erreurs

### 2. Facebook Sharing Debugger
- URL : https://developers.facebook.com/tools/debug/
- Tester les Open Graph tags
- Actualiser le cache

### 3. Twitter Card Validator
- URL : https://cards-dev.twitter.com/validator
- Vérifier les Twitter Cards

### 4. Rich Results Test (Google)
- URL : https://search.google.com/test/rich-results
- Valider le Structured Data (JSON-LD)

### 5. Lighthouse (Chrome DevTools)
- Audit SEO automatique
- Score SEO et recommandations

---

## 📈 Métriques SEO à surveiller

### Techniques
- ✅ Temps de chargement < 3s
- ✅ Score Lighthouse SEO > 90
- ✅ Toutes les pages indexées
- ✅ Pas d'erreurs 404
- ✅ HTTPS actif
- ✅ Mobile-friendly

### Contenu
- ✅ Titres uniques par page
- ✅ Meta descriptions < 160 caractères
- ✅ H1 unique par page
- ✅ Images avec alt text
- ✅ URLs propres et descriptives

### Multilingue
- ✅ Hreflang corrects
- ✅ Contenu traduit (pas de Google Translate)
- ✅ URLs cohérentes entre langues

---

## 🚀 Déploiement

### Avant de déployer

1. **Créer `/public/og-image.jpg`** (1200x630px)
2. **Vérifier tous les URL** dans `seo.ts`
3. **Remplacer** `https://www.ccnts.com` par votre domaine réel
4. **Activer HTTPS** dans `.htaccess` (décommenter les lignes)
5. **Tester** sur environnement de staging

### Après le déploiement

1. **Soumettre le sitemap** à Google Search Console
2. **Valider** les Open Graph tags (Facebook Debugger)
3. **Vérifier** les structured data (Rich Results Test)
4. **Monitorer** l'indexation (Google Search Console)
5. **Analyser** le trafic (Google Analytics)

---

## 📚 Ressources

### Documentation
- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Open Graph Protocol](https://ogp.me/)
- [Schema.org](https://schema.org/)
- [Hreflang Guide](https://developers.google.com/search/docs/advanced/crawling/localized-versions)

### Outils
- Google Search Console
- Google Analytics
- Bing Webmaster Tools
- Screaming Frog SEO Spider
- Ahrefs / SEMrush

---

## ❓ FAQ

### Q: Pourquoi utiliser `?lang=fr` au lieu de `/fr/services` ?
**R** : Approche plus simple pour un SPA React. Les hreflang gèrent le SEO multilingue correctement.

### Q: Comment changer l'image Open Graph d'une page spécifique ?
**R** : Utiliser la prop `customImage` :
```tsx
<SEOHead 
  pageKey="courseQGIS"
  customImage="/images/course-qgis-og.jpg"
/>
```

### Q: Dois-je indexer les pages de quiz ?
**R** : Non recommandé. Les pages de cours suffisent pour le SEO. Ajouter `noIndex={true}`.

### Q: Comment gérer les pages 404 ?
**R** : Créer une `NotFoundPage` avec :
```tsx
<SEOHead 
  pageKey="notFound"
  noIndex={true}
/>
```

---

## 🎯 Prochaines étapes

- [ ] Créer l'image Open Graph (`/public/og-image.jpg`)
- [ ] Intégrer `<SEOHead>` dans toutes les pages (voir checklist)
- [ ] Tester localement avec React DevTools
- [ ] Valider avec Lighthouse
- [ ] Déployer en production
- [ ] Soumettre le sitemap à Google
- [ ] Monitorer les performances SEO

---

**Version** : 1.0  
**Date** : Mars 2026  
**Auteur** : Équipe CCNTS  
**Status** : ✅ Prêt pour intégration
