# Système de Couleurs CCNTS

## 🎨 Palette de Couleurs Officielle

Le site CCNTS utilise une palette de couleurs géospatiales cohérente reflétant l'expertise scientifique et professionnelle du cabinet.

### Couleurs Principales

#### 🔵 Bleus Profonds (Deep Blues)
**Usage:** Couleur principale pour les sections hero, en-têtes, éléments de navigation actifs, boutons primaires

```css
--geospatial-blue-950: #0a1e3d  /* Bleu très foncé - Gradients de fond */
--geospatial-blue-900: #1e3a8a  /* Bleu foncé principal - Héros, titres */
--geospatial-blue-800: #1e40af  /* Bleu moyen - Hover states, gradients */
--geospatial-blue-700: #1d4ed8  /* Bleu vif - Accents, liens */
--geospatial-blue-600: #2563eb  /* Bleu lumineux - Boutons, badges */
--geospatial-blue-500: #3b82f6  /* Bleu clair - Icônes, accents */
--geospatial-blue-400: #60a5fa  /* Très clair */
--geospatial-blue-300: #93c5fd  /* Ultra clair */
--geospatial-blue-200: #bfdbfe  /* Bordures subtiles */
--geospatial-blue-100: #dbeafe  /* Backgrounds légers */
--geospatial-blue-50: #eff6ff   /* Très subtil */
```

#### 🟠 Orange Terre (Earth Tones)
**Usage:** Accent chaleureux, boutons CTA principaux, icônes importantes, hover states

```css
--geospatial-orange-700: #c2410c  /* Orange foncé - Hover states */
--geospatial-orange-600: #ea580c  /* Orange principal - CTAs */
--geospatial-orange-500: #f97316  /* Orange vif - Accents */
--geospatial-orange-400: #fb923c  /* Orange clair - Icônes, badges */
--geospatial-orange-300: #fdba74  /* Orange très clair */
```

#### ⚪ Gris Neutres (Neutral Grays)
**Usage:** Textes secondaires, bordures, arrière-plans, footer

```css
--geospatial-gray-900: #111827  /* Footer, textes très sombres */
--geospatial-gray-800: #1f2937  /* Textes importants */
--geospatial-gray-700: #374151  /* Textes standards */
--geospatial-gray-600: #4b5563  /* Textes secondaires */
--geospatial-gray-500: #6b7280  /* Textes discrets */
--geospatial-gray-400: #9ca3af  /* Textes très discrets */
--geospatial-gray-300: #d1d5db  /* Bordures */
--geospatial-gray-200: #e5e7eb  /* Bordures légères */
--geospatial-gray-100: #f3f4f6  /* Backgrounds clairs */
--geospatial-gray-50: #f9fafb   /* Backgrounds très clairs */
```

## 🎯 Règles d'Utilisation

### Hiérarchie des Couleurs

1. **Couleur Dominante:** Bleu profond (#1e3a8a à #0a1e3d)
   - Utilisé pour 60% du design
   - Sections hero, headers, navigation active

2. **Couleur Secondaire:** Orange terre (#ea580c)
   - Utilisé pour 30% du design
   - CTAs, icônes importantes, accents visuels

3. **Couleurs Neutres:** Gris (#111827 à #f9fafb)
   - Utilisé pour 10% du design
   - Textes, bordures, backgrounds

### Classes Tailwind Personnalisées

Utilisez toujours les classes personnalisées pour garantir la cohérence :

```jsx
// ✅ CORRECT - Classes cohérentes
<div className="bg-geospatial-blue-900">
<button className="bg-geospatial-orange-600 hover:bg-geospatial-orange-700">
<p className="text-geospatial-gray-700">

// ❌ INCORRECT - Classes Tailwind génériques
<div className="bg-blue-900">
<button className="bg-orange-600 hover:bg-orange-700">
<p className="text-gray-700">
```

## 📝 Exemples d'Application

### Section Hero
```jsx
<section className="bg-gradient-to-br from-geospatial-blue-950 via-geospatial-blue-900 to-geospatial-blue-800">
  <h1 className="text-white">Titre</h1>
  <p className="text-geospatial-blue-100">Description</p>
  <button className="bg-geospatial-orange-600 hover:bg-geospatial-orange-700">
    CTA Principal
  </button>
</section>
```

### Navigation
```jsx
<nav>
  <Link className="bg-geospatial-blue-50 text-geospatial-blue-900"> {/* Active */}
  <Link className="text-geospatial-gray-700 hover:bg-geospatial-gray-50"> {/* Inactive */}
</nav>
```

### Footer
```jsx
<footer className="bg-geospatial-gray-900 text-geospatial-gray-300">
  <a className="text-geospatial-gray-400 hover:text-geospatial-orange-400">
</footer>
```

## 🚀 Accessibilité

- **Contraste minimum:** Toutes les combinaisons respectent WCAG AA (4.5:1)
- **Texte sur bleu foncé:** Toujours utiliser blanc ou blue-100
- **Texte sur orange:** Toujours utiliser blanc
- **CTAs:** Contraste minimum de 7:1 pour visibilité maximale

## 📐 Typographie

**Police unique:** Inter (Google Fonts)
- Utilisée pour tous les textes (titres, corps, labels)
- Poids disponibles: 400, 500, 600, 700, 800
- Excellente lisibilité à toutes les tailles
- Moderne et scientifique

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

## ✅ Checklist de Cohérence

Avant de créer ou modifier un composant :

- [ ] Utilise uniquement les classes `geospatial-*`
- [ ] Respecte la hiérarchie 60/30/10
- [ ] Les CTAs utilisent orange-600/700
- [ ] Les backgrounds clairs utilisent gray-50
- [ ] Le texte sur fond foncé est blanc ou blue-100
- [ ] Les icônes importantes sont en orange-400
- [ ] La navigation active utilise blue-50 + blue-900
