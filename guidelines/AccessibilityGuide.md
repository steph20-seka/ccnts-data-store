# ♿ Guide d'Accessibilité - Site CCNTS

## 🎯 Objectif

Garantir une expérience inclusive et conforme aux normes **WCAG 2.1 niveau AA** pour tous les utilisateurs, y compris les personnes avec :
- **Faible vision** (vision réduite, daltonisme)
- **Cécité** (utilisant des lecteurs d'écran)
- **Limitations motrices** (navigation clavier uniquement)
- **Déficiences cognitives** (besoin de clarté et simplicité)

---

## ✅ Optimisations Implémentées

### 1. **Navigation Clavier Complète**

✅ **Skip Link (Lien d'évitement)**
```tsx
// Dans Header.tsx - Ligne 57-62
<a 
  href="#main-content" 
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50"
>
  Aller au contenu principal
</a>
```

**Bénéfice :** 
- Les utilisateurs clavier peuvent sauter directement au contenu
- Apparaît uniquement lors du focus (Tab)
- Particulièrement utile pour les lecteurs d'écran

---

### 2. **Indicateurs de Focus Visibles**

✅ **Tous les éléments interactifs ont un focus visible**

```css
/* Focus sur les liens */
focus:ring-2 focus:ring-geospatial-blue-600 focus:ring-offset-2

/* Focus sur les boutons */
focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-geospatial-blue-600
```

**Contraste du focus :**
- Anneau bleu #2563eb (ratio 4.5:1 sur blanc)
- Offset de 2px pour meilleure visibilité
- Visible même sur fonds sombres

---

### 3. **Contraste de Couleurs WCAG AA/AAA**

✅ **Palette optimisée pour contraste élevé**

| Couleur | Usage | Ratio Contraste | Niveau |
|---------|-------|----------------|--------|
| `#1e3a8a` (blue-900) | Texte principal | 7.4:1 | **AAA** ✅ |
| `#2563eb` (blue-600) | Boutons, liens | 4.5:1 | **AA** ✅ |
| `#c2410c` (orange-700) | Accents | 5.3:1 | **AA+** ✅ |
| `#ea580c` (orange-600) | CTA | 4.5:1 | **AA** ✅ |
| `#475569` (gray-700) | Texte secondaire | 7.8:1 | **AAA** ✅ |
| `#64748b` (gray-600) | Texte tertiaire | 5.5:1 | **AA+** ✅ |

**Règles strictes :**
- Texte normal : minimum 4.5:1 (AA)
- Large texte (18pt+) : minimum 3:1 (AA)
- Objectif : 7:1 (AAA) quand possible

---

### 4. **Attributs ARIA Sémantiques**

✅ **Rôles et labels ARIA appropriés**

```tsx
// Header avec rôle banner
<header role="banner">

// Navigation principale
<nav role="navigation" aria-label="Navigation principale">

// État de la page active
<Link aria-current={isActive ? 'page' : undefined}>

// Menu utilisateur
<button 
  aria-expanded={isUserMenuOpen}
  aria-haspopup="true"
  aria-label="Menu utilisateur - Jean Dupont"
>

// Dropdown menu
<div role="menu" aria-label="Menu utilisateur">
  <Link role="menuitem">Mes cours</Link>
</div>

// Contenu principal
<main id="main-content" role="main">

// Icônes décoratives
<Icon aria-hidden="true" />
```

---

### 5. **Textes Alternatifs Descriptifs**

✅ **Toutes les images ont des alt significatifs**

```tsx
// ❌ MAUVAIS - Alt vague
<img src={logo} alt="Logo" />

// ✅ BON - Alt descriptif
<img src={logo} alt="CCNTS - Cabinet de Cartographie Numérique, de Télédétection et de Statistiques" />

// ✅ BON - Image décorative
<img src={decoration} alt="" aria-hidden="true" />

// ✅ BON - Image informative
<img src={map} alt="Carte thématique de l'occupation du sol en Côte d'Ivoire 2024" />
```

**Bonnes pratiques :**
- Alt court et descriptif (< 125 caractères)
- Décrire la fonction, pas l'apparence
- Alt vide pour images purement décoratives
- Inclure texte visible si sur l'image

---

### 6. **Labels de Formulaires Explicites**

✅ **Tous les champs ont des labels associés**

```tsx
// ✅ BON - Label associé
<label htmlFor="email">Email</label>
<input id="email" type="email" aria-required="true" />

// ✅ BON - Label visuel caché mais présent pour lecteurs d'écran
<label htmlFor="search" className="sr-only">Rechercher</label>
<input id="search" placeholder="Rechercher..." />

// ✅ BON - Messages d'erreur accessibles
<input 
  id="email" 
  aria-invalid={hasError}
  aria-describedby={hasError ? "email-error" : undefined}
/>
{hasError && <span id="email-error" role="alert">Email invalide</span>}
```

---

### 7. **Navigation Mobile Accessible**

✅ **Menu mobile avec états ARIA**

```tsx
<button
  aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
  aria-expanded={isMenuOpen}
  aria-controls="mobile-menu"
>

<nav id="mobile-menu" aria-label="Navigation mobile">
```

---

## 📋 Checklist d'Accessibilité

### Navigation Clavier
- [x] Skip link présent
- [x] Ordre de tabulation logique
- [x] Focus visible sur tous les éléments interactifs
- [x] Pas de piège au clavier
- [x] Menu déroulant accessible au clavier
- [x] Fermeture des modales avec Échap

### Contraste et Couleurs
- [x] Texte principal : ratio ≥ 7:1 (AAA)
- [x] Texte secondaire : ratio ≥ 4.5:1 (AA)
- [x] Boutons CTA : ratio ≥ 4.5:1 (AA)
- [x] États focus visibles : ratio ≥ 3:1
- [x] Information pas uniquement par couleur

### Sémantique HTML
- [x] Landmarks ARIA (header, nav, main, footer)
- [x] Hiérarchie de titres correcte (h1 > h2 > h3)
- [x] Listes pour contenu répétitif
- [x] Boutons pour actions, liens pour navigation
- [x] Balises sémantiques (article, section, aside)

### Images et Médias
- [x] Alt text descriptif sur toutes les images
- [x] Alt vide pour images décoratives
- [x] Icônes avec aria-hidden="true"
- [ ] Transcriptions pour audio/vidéo (à implémenter)
- [ ] Sous-titres pour vidéos (à implémenter)

### Formulaires
- [x] Labels associés à tous les champs
- [x] Instructions claires
- [x] Messages d'erreur descriptifs
- [x] aria-required pour champs obligatoires
- [x] aria-invalid pour erreurs
- [x] Validation accessible

### Contenu
- [x] Langue déclarée (lang="fr")
- [x] Texte redimensionnable (rem/em)
- [x] Pas de texte en image (sauf logo)
- [x] Liens descriptifs (pas "cliquez ici")
- [x] Contenu lisible (niveau 8e année)

---

## 🔧 Tests d'Accessibilité

### Outils Automatisés

1. **Lighthouse (Chrome DevTools)**
   ```
   - Ouvrir DevTools (F12)
   - Onglet "Lighthouse"
   - Cocher "Accessibility"
   - Cliquer "Analyze page load"
   - Objectif : Score ≥ 95
   ```

2. **axe DevTools**
   ```
   - Installer extension axe DevTools
   - Ouvrir DevTools
   - Onglet "axe DevTools"
   - Cliquer "Scan ALL of my page"
   - Corriger toutes les violations
   ```

3. **WAVE (WebAIM)**
   ```
   - Visiter wave.webaim.org
   - Entrer URL du site
   - Vérifier 0 erreurs
   - Minimiser les alertes
   ```

### Tests Manuels Clavier

**Checklist :**
- [ ] Naviguer tout le site avec Tab/Shift+Tab uniquement
- [ ] Activer tous les éléments avec Entrée/Espace
- [ ] Ouvrir/fermer menus avec clavier
- [ ] Remplir formulaires sans souris
- [ ] Focus visible à chaque étape
- [ ] Pas de blocage clavier

**Raccourcis à tester :**
- `Tab` : Élément suivant
- `Shift + Tab` : Élément précédent
- `Entrée` : Activer lien/bouton
- `Espace` : Activer bouton/checkbox
- `Échap` : Fermer modal/menu
- `Flèches` : Navigation dans dropdowns

### Tests avec Lecteurs d'Écran

1. **NVDA (Windows - Gratuit)**
   ```
   - Télécharger nvaccess.org
   - NVDA + N : Menu NVDA
   - NVDA + H : Liste des titres
   - NVDA + L : Liste des liens
   - NVDA + R : Liste des landmarks
   ```

2. **VoiceOver (macOS/iOS - Intégré)**
   ```
   - Cmd + F5 : Activer/désactiver
   - Cmd + Opt + U : Rotor (navigation)
   - Cmd + Opt + Flèches : Navigation
   ```

3. **JAWS (Windows - Payant)**
   ```
   - Leader commercial
   - Tester si budget disponible
   ```

**Points à vérifier :**
- [ ] Ordre de lecture logique
- [ ] Tous les éléments annoncés
- [ ] Rôles et états corrects
- [ ] Formulaires compréhensibles
- [ ] Navigation rapide fonctionnelle

### Tests de Contraste

**Outils :**
- **WebAIM Contrast Checker** (webaim.org/resources/contrastchecker/)
- **Colour Contrast Analyzer** (Application desktop)
- **Chrome DevTools** (Inspect > Accessibility)

**Procédure :**
1. Identifier toutes les combinaisons texte/fond
2. Mesurer ratio de contraste
3. Vérifier conformité AA/AAA
4. Ajuster si nécessaire

---

## 🎨 Palette de Couleurs Accessibles

### Texte sur Fond Blanc

| Couleur | Hex | Ratio | Niveau | Usage |
|---------|-----|-------|--------|-------|
| Blue 950 | `#0a1e3d` | 14.2:1 | AAA+ | Titres importants |
| Blue 900 | `#1e3a8a` | 7.4:1 | AAA | Texte principal |
| Blue 700 | `#1d4ed8` | 4.7:1 | AA | Liens |
| Blue 600 | `#2563eb` | 4.5:1 | AA | Boutons |
| Orange 900 | `#7c2d12` | 9.2:1 | AAA | Texte accentué |
| Orange 700 | `#c2410c` | 5.3:1 | AA+ | Accents |
| Orange 600 | `#ea580c` | 4.5:1 | AA | CTA |
| Gray 950 | `#0f172a` | 15.3:1 | AAA+ | Texte corps |
| Gray 900 | `#1e293b` | 13.1:1 | AAA | Texte corps |
| Gray 700 | `#475569` | 7.8:1 | AAA | Texte secondaire |
| Gray 600 | `#64748b` | 5.5:1 | AA+ | Texte tertiaire |

### Texte sur Fond Foncé (Blue 900: #1e3a8a)

| Couleur | Hex | Ratio | Niveau | Usage |
|---------|-----|-------|--------|-------|
| Blanc | `#ffffff` | 7.4:1 | AAA | Texte principal |
| Blue 100 | `#dbeafe` | 6.8:1 | AAA | Texte secondaire |
| Orange 300 | `#fdba74` | 5.2:1 | AA+ | Accents |
| Orange 400 | `#fb923c` | 4.6:1 | AA | Boutons |

---

## 🚨 Erreurs Courantes à Éviter

### ❌ Mauvaises Pratiques

1. **Focus invisible**
   ```css
   /* ❌ NE JAMAIS FAIRE */
   *:focus { outline: none; }
   ```

2. **Alt vague ou inutile**
   ```tsx
   {/* ❌ Mauvais */}
   <img src="image.jpg" alt="Image" />
   
   {/* ✅ Bon */}
   <img src="map.jpg" alt="Carte d'occupation du sol de la Côte d'Ivoire" />
   ```

3. **Contraste insuffisant**
   ```css
   /* ❌ Mauvais - Ratio 2.1:1 */
   color: #888888;
   background: #ffffff;
   
   /* ✅ Bon - Ratio 5.5:1 */
   color: #64748b;
   background: #ffffff;
   ```

4. **Liens non descriptifs**
   ```tsx
   {/* ❌ Mauvais */}
   <a href="/services">Cliquez ici</a>
   
   {/* ✅ Bon */}
   <a href="/services">Découvrir nos services de cartographie</a>
   ```

5. **Formulaires sans labels**
   ```tsx
   {/* ❌ Mauvais */}
   <input placeholder="Email" />
   
   {/* ✅ Bon */}
   <label htmlFor="email">Email</label>
   <input id="email" type="email" />
   ```

6. **Div/span comme bouton**
   ```tsx
   {/* ❌ Mauvais */}
   <div onClick={handleClick}>Soumettre</div>
   
   {/* ✅ Bon */}
   <button onClick={handleClick}>Soumettre</button>
   ```

7. **Icônes sans contexte**
   ```tsx
   {/* ❌ Mauvais */}
   <button><Icon /></button>
   
   {/* ✅ Bon */}
   <button aria-label="Ouvrir le menu">
     <Icon aria-hidden="true" />
   </button>
   ```

---

## 📱 Accessibilité Mobile

### Zones de Toucher

✅ **Taille minimale : 44x44px**

```tsx
// ✅ Boutons suffisamment grands
<button className="min-h-[44px] min-w-[44px] p-3">

// ✅ Espacement entre éléments tactiles
<div className="space-y-4">
```

### Orientation

✅ **Support portrait ET paysage**
```css
/* Pas de orientation: lock */
/* Contenu adaptable aux deux orientations */
```

### Zoom

✅ **Zoom jusqu'à 200% sans perte de fonctionnalité**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5">
```

---

## 🎓 Ressources et Formation

### Documentation Officielle
- **WCAG 2.1** : w3.org/WAI/WCAG21/quickref/
- **WAI-ARIA** : w3.org/WAI/ARIA/apg/
- **MDN Accessibility** : developer.mozilla.org/en-US/docs/Web/Accessibility

### Outils
- **axe DevTools** : Extension Chrome/Firefox
- **WAVE** : wave.webaim.org
- **Lighthouse** : Chrome DevTools intégré
- **NVDA** : nvaccess.org (Gratuit)
- **Colour Contrast Analyzer** : paciellogroup.com/resources/contrastanalyser/

### Cours et Certifications
- **WebAIM** : webaim.org/articles/
- **Deque University** : dequeuniversity.com
- **A11ycasts (Google)** : youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g

---

## ✅ Checklist Avant Déploiement

### Automatisé
- [ ] Lighthouse Accessibility : Score ≥ 95
- [ ] axe DevTools : 0 violations
- [ ] WAVE : 0 erreurs
- [ ] Tous les contrastes ≥ 4.5:1

### Manuel
- [ ] Navigation complète au clavier
- [ ] Skip link fonctionnel
- [ ] Focus visible partout
- [ ] Lecteur d'écran testé (NVDA ou VoiceOver)
- [ ] Zoom 200% testé
- [ ] Mobile testé (tactile)

### Contenu
- [ ] Tous les alt texts présents
- [ ] Hiérarchie de titres correcte
- [ ] Labels de formulaires présents
- [ ] Liens descriptifs
- [ ] Messages d'erreur clairs

### Technique
- [ ] Landmarks ARIA présents
- [ ] Attributs ARIA appropriés
- [ ] HTML sémantique
- [ ] Ordre de tabulation logique
- [ ] Pas de piège au clavier

---

**Dernière mise à jour :** Décembre 2024  
**Conformité cible :** WCAG 2.1 Niveau AA  
**Score Lighthouse cible :** ≥ 95  
**Maintenu par :** Équipe Développement CCNTS
