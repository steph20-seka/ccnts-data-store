# 🚀 Intégration SEO Rapide - Guide Pratique

## Pour intégrer SEO sur une nouvelle page en 2 minutes

### Étape 1 : Importer le composant

Au début du fichier `.tsx`, ajouter :

```tsx
import { SEOHead } from '../components/SEOHead';
```

### Étape 2 : Ajouter le composant dans le JSX

Dans la fonction de la page, juste après le `return` et la balise ouvrante :

```tsx
export function MaPage() {
  return (
    <>
      <SEOHead pageKey="maPage" />
      {/* Reste du contenu */}
    </>
  );
}
```

**OU si c'est un div** :

```tsx
export function MaPage() {
  return (
    <div className="...">
      <SEOHead pageKey="maPage" />
      {/* Reste du contenu */}
    </div>
  );
}
```

### Étape 3 : Ajouter la config SEO (si nouvelle page)

Dans `/config/seo.ts`, ajouter dans `SEO_CONFIG` :

```typescript
maPage: {
  fr: {
    title: 'Mon Titre',
    description: 'Ma description pour Google (max 160 caractères)',
    keywords: ['mot-clé1', 'mot-clé2', 'mot-clé3'],
    ogType: 'website', // ou 'article' pour les cours
  },
  en: {
    title: 'My Title',
    description: 'My description for Google (max 160 characters)',
    keywords: ['keyword1', 'keyword2', 'keyword3'],
    ogType: 'website',
  },
  de: {
    title: 'Mein Titel',
    description: 'Meine Beschreibung für Google (max 160 Zeichen)',
    keywords: ['stichwort1', 'stichwort2', 'stichwort3'],
    ogType: 'website',
  },
  es: {
    title: 'Mi Título',
    description: 'Mi descripción para Google (máx 160 caracteres)',
    keywords: ['palabra-clave1', 'palabra-clave2', 'palabra-clave3'],
    ogType: 'website',
  },
},
```

---

## 📋 Copy-Paste pour chaque type de page

### Page de cours (publique)

```tsx
import { SEOHead } from '../components/SEOHead';

export function CourseXPage() {
  return (
    <div className="...">
      <SEOHead 
        pageKey="courseQGIS" 
        customTitle="Formation NOM_DU_COURS"
        customDescription="Apprenez NOM_DU_COURS avec notre formation complète..."
      />
      {/* Contenu */}
    </div>
  );
}
```

### Page de quiz (privée, noIndex)

```tsx
import { SEOHead } from '../components/SEOHead';

export function QuizXPage() {
  return (
    <div className="...">
      <SEOHead 
        pageKey="courseQGIS" 
        customTitle="Quiz NOM_DU_COURS"
        noIndex={true}
      />
      {/* Contenu */}
    </div>
  );
}
```

### Page privée/authentification (noIndex)

```tsx
import { SEOHead } from '../components/SEOHead';

export function PrivatePage() {
  return (
    <div className="...">
      <SEOHead 
        pageKey="myCourses" 
        noIndex={true}
      />
      {/* Contenu */}
    </div>
  );
}
```

---

## ⚡ Intégrations à faire MAINTENANT

### Cours restants (6 fichiers)

**1. `/pages/CourseSentinel2Page.tsx`**
```tsx
// En haut du fichier, après les autres imports
import { SEOHead } from '../components/SEOHead';

// Dans le return, ligne 8-10 environ
<SEOHead 
  pageKey="courseQGIS" 
  customTitle="Formation Sentinel-2 - Télédétection Satellite"
  customDescription="Formation complète Sentinel-2 : traitement d'images satellites, indices de végétation, analyse multispectrale et applications environnementales."
/>
```

**2. `/pages/CourseThematicMappingPage.tsx`**
```tsx
import { SEOHead } from '../components/SEOHead';

<SEOHead 
  pageKey="courseQGIS" 
  customTitle="Formation Cartographie Thématique"
  customDescription="Créez des cartes thématiques professionnelles : symbologie, classification, mise en page et export pour publication."
/>
```

**3. `/pages/CourseBufferPage.tsx`**
```tsx
import { SEOHead } from '../components/SEOHead';

<SEOHead 
  pageKey="courseQGIS" 
  customTitle="Formation Analyse de Zone Tampon"
  customDescription="Maîtrisez l'analyse de zone tampon (buffer) : création, paramétrage, applications pratiques en aménagement du territoire."
/>
```

**4. `/pages/CourseHistoricalMapsPage.tsx`**
```tsx
import { SEOHead } from '../components/SEOHead';

<SEOHead 
  pageKey="courseQGIS" 
  customTitle="Formation Cartes Historiques - Géoréférencement"
  customDescription="Géoréférencez des cartes historiques : numérisation, transformation, intégration dans un SIG moderne."
/>
```

**5. `/pages/CourseGoogleEarthEnginePage.tsx`**
```tsx
import { SEOHead } from '../components/SEOHead';

<SEOHead 
  pageKey="courseQGIS" 
  customTitle="Formation Google Earth Engine"
  customDescription="Programmez avec Google Earth Engine : traitement massif d'images satellites, analyse temporelle, cloud computing géospatial."
/>
```

**6. `/pages/CourseInteractiveMapPage.tsx`**
```tsx
import { SEOHead } from '../components/SEOHead';

<SEOHead 
  pageKey="courseQGIS" 
  customTitle="Formation Cartes Interactives Web"
  customDescription="Créez des cartes interactives pour le web : Leaflet, QGIS2Web, Story Maps et visualisation de données géospatiales."
/>
```

---

### Quiz (6 fichiers) - noIndex

**1. `/pages/QuizQGISPage.tsx`**
```tsx
import { SEOHead } from '../components/SEOHead';

<SEOHead 
  pageKey="courseQGIS" 
  customTitle="Quiz QGIS"
  noIndex={true}
/>
```

**2. `/pages/QuizSentinel2Page.tsx`**
```tsx
import { SEOHead } from '../components/SEOHead';

<SEOHead 
  pageKey="courseQGIS" 
  customTitle="Quiz Sentinel-2"
  noIndex={true}
/>
```

**3. `/pages/QuizThematicMappingPage.tsx`**
```tsx
import { SEOHead } from '../components/SEOHead';

<SEOHead 
  pageKey="courseQGIS" 
  customTitle="Quiz Cartographie Thématique"
  noIndex={true}
/>
```

**4. `/pages/QuizBufferPage.tsx`**
```tsx
import { SEOHead } from '../components/SEOHead';

<SEOHead 
  pageKey="courseQGIS" 
  customTitle="Quiz Zone Tampon"
  noIndex={true}
/>
```

**5. `/pages/QuizHistoricalMapsPage.tsx`**
```tsx
import { SEOHead } from '../components/SEOHead';

<SEOHead 
  pageKey="courseQGIS" 
  customTitle="Quiz Cartes Historiques"
  noIndex={true}
/>
```

**6. `/pages/QuizGoogleEarthEnginePage.tsx`**
```tsx
import { SEOHead } from '../components/SEOHead';

<SEOHead 
  pageKey="courseQGIS" 
  customTitle="Quiz Google Earth Engine"
  noIndex={true}
/>
```

---

## 🎯 Checklist complète

Cocher au fur et à mesure :

### Pages principales ✅
- [x] HomePage
- [x] ServicesPage
- [x] AcademyPage
- [x] AboutPage
- [x] ContactPage
- [x] ProjectsPage
- [x] DataStorePage

### Pages d'authentification ✅
- [x] LoginPage (noIndex)
- [x] SignUpPage (noIndex)
- [x] ResetPasswordPage (noIndex)

### Pages protégées ✅
- [x] MyCoursesPage (noIndex)
- [x] MyCertificatesPage (noIndex)

### Pages de cours ✅
- [x] CourseQGISPage ✅ (déjà fait)
- [x] CourseSentinel2Page ✅
- [x] CourseThematicMappingPage ✅
- [x] CourseBufferPage ✅
- [x] CourseHistoricalMapsPage ✅
- [x] CourseGoogleEarthEnginePage ✅
- [x] CourseInteractiveMapPage ✅

### Pages de quiz (noIndex) ✅
- [x] QuizQGISPage ✅
- [x] QuizSentinel2Page ✅
- [x] QuizThematicMappingPage ✅
- [x] QuizBufferPage ✅
- [x] QuizHistoricalMapsPage ✅
- [x] QuizGoogleEarthEnginePage ✅

### Tâches supplémentaires ⏳
- [ ] Créer `/public/og-image.jpg` (1200x630px)
- [ ] Remplacer les URLs de test par le domaine réel
- [ ] Tester avec Lighthouse (score SEO > 90)
- [ ] Déployer
- [ ] Soumettre sitemap à Google Search Console

---

## 🎉 Intégration SEO terminée !

✅ **Toutes les pages de cours et de quiz ont été intégrées avec succès !**

Total des pages intégrées : **18 pages** (12 principales + 6 cours + 6 quiz hors QuizInteractiveMap qui n'existe pas)

---

## 🧪 Test rapide après intégration

### 1. Vérifier les titres
Ouvrir chaque page et vérifier l'onglet du navigateur :
```
✅ Accueil - CCNTS
✅ Services - CCNTS
✅ Formation QGIS - CCNTS
etc.
```

### 2. Inspecter les meta tags
Faire clic droit → Inspecter → `<head>` :
```html
✅ <title>Accueil - CCNTS</title>
✅ <meta name="description" content="...">
✅ <meta property="og:title" content="...">
✅ <link rel="canonical" href="...">
```

### 3. Lighthouse
Chrome DevTools → Lighthouse → Run SEO audit :
```
✅ Score SEO > 90
✅ Document has a meta description
✅ Document has a valid hreflang
✅ Links are crawlable
```

---

## 💡 Astuces

### Trouver rapidement où ajouter SEOHead

1. Ouvrir le fichier de la page
2. Chercher `return (` (Ctrl+F)
3. Le composant `<SEOHead>` doit être ajouté juste après
4. S'il y a plusieurs `return`, c'est le dernier (dans la fonction principale)

### Vérifier si c'est déjà intégré

```bash
# Dans le terminal
grep -r "SEOHead" pages/
```

Si le nom du fichier apparaît, c'est déjà fait ✅

### Pattern à suivre

```tsx
// AVANT
export function MaPage() {
  return (
    <div>
      <MonContenu />
    </div>
  );
}

// APRÈS
import { SEOHead } from '../components/SEOHead';

export function MaPage() {
  return (
    <div>
      <SEOHead pageKey="maPage" />
      <MonContenu />
    </div>
  );
}
```

---

## ⏱️ Estimation du temps

- **Cours restants** (6 pages) : 12 minutes (2 min/page)
- **Quiz** (6 pages) : 6 minutes (1 min/page)
- **Créer OG image** : 15 minutes
- **Tests** : 10 minutes

**Total** : ~45 minutes pour finaliser le SEO complet ! 🚀

---

**N'oubliez pas** : Chaque page = Import + Composant. C'est simple ! 😊
