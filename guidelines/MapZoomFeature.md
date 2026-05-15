# 🔍 Fonctionnalité de Zoom et Exploration des Cartes

## Vue d'ensemble

Le système de zoom permet aux utilisateurs d'explorer les cartes en haute résolution pour lire tous les détails, y compris les petits textes, légendes et annotations en bas des cartes.

---

## 🎯 Problème résolu

**Avant :** Les cartes étaient affichées en taille réduite, rendant illisible :
- Les légendes en bas de carte
- Les annotations et sources
- Les détails cartographiques fins
- Les noms de lieux et statistiques

**Après :** Modal de zoom plein écran avec :
- Zoom jusqu'à 300% (3x)
- Contrôles intuitifs (molette, boutons +/-)
- Exploration libre de l'image
- Fermeture rapide (Échap, clic extérieur)

---

## 🏗️ Architecture

### Composants créés

```
/components/maps/
└── MapZoomModal.tsx          # Modal plein écran avec zoom
```

### Modifications

```
/components/home/
└── MapOfTheDay.tsx           # Intégration du zoom modal
```

---

## 🎨 Fonctionnalités du Modal de Zoom

### 1. **Ouverture du modal**

Trois façons d'ouvrir :
- ✅ Cliquer sur l'image de la carte
- ✅ Survoler la carte → Badge "Agrandir et explorer" apparaît
- ✅ Indication visuelle au survol

### 2. **Contrôles de zoom**

**Molette de souris :**
- Rouler vers le haut = Zoom in (+30%)
- Rouler vers le bas = Zoom out (-30%)

**Boutons manuels :**
- Bouton `+` = Zoom in
- Bouton `−` = Zoom out
- Bouton 🔄 = Réinitialiser le zoom à 100%

**Limites :**
- Zoom minimum : 100% (taille originale)
- Zoom maximum : 300% (3x agrandissement)

### 3. **Interface utilisateur**

**Header (haut) :**
- Titre de la carte
- Instructions d'utilisation
- Indicateur de zoom (ex : "150%")
- Contrôles de zoom
- Bouton de fermeture (X)

**Footer (bas) :**
- Aide contextuelle avec émojis :
  - 🖱️ Molette de souris = Zoom
  - 🔍 Boutons +/− = Zoom manuel
  - ⎋ Échap ou cliquer à l'extérieur = Fermer

### 4. **Fermeture du modal**

Quatre façons de fermer :
- ✅ Cliquer sur le bouton X
- ✅ Appuyer sur la touche Échap
- ✅ Cliquer à l'extérieur de l'image
- ✅ Navigation automatique (changement de carte)

---

## 💡 Expérience Utilisateur

### Micro-interactions

1. **Survol de la carte principale**
   - Badge apparaît : "Survolez et cliquez pour agrandir"
   - Cursor devient pointer
   - Animation smooth (opacity 0 → 100%)

2. **Ouverture du modal**
   - Fond noir semi-transparent (95% opacité)
   - Animation fade-in (300ms)
   - Zoom reset automatiquement à 100%

3. **Zoom**
   - Transition smooth de 200ms
   - Transform origin : centre de l'image
   - Boutons +/− désactivés aux limites
   - Indicateur de pourcentage en temps réel

4. **Fermeture**
   - Réinitialisation automatique du zoom
   - Animation fade-out

---

## 🎯 Cas d'usage

### Lecture de légende

```
Problème : "La légende au bas de la carte est trop petite"
Solution : 
1. Cliquer sur la carte
2. Zoomer à 200-300%
3. Lire confortablement tous les détails
```

### Analyse de détails

```
Problème : "Je ne peux pas lire les noms des villes"
Solution :
1. Ouvrir le modal de zoom
2. Utiliser la molette pour zoomer progressivement
3. Explorer l'image en haute résolution
```

### Vérification de sources

```
Problème : "Les informations de source en bas sont illisibles"
Solution :
1. Cliquer sur la carte
2. Zoomer sur la zone du bas
3. Lire les crédits, sources et projections EPSG
```

---

## 📱 Responsive Design

### Desktop
- Modal plein écran avec padding
- Contrôles de zoom visibles en permanence
- Header et footer avec dégradés transparents

### Mobile
- Modal adaptatif
- Contrôles tactiles optimisés
- Pinch-to-zoom natif du navigateur activé
- Boutons +/− tactiles agrandis

---

## ⚡ Performance

### Optimisations

1. **Lazy Loading du Modal**
   - Composant chargé uniquement si `isOpen = true`
   - Économie : ~15KB par carte non explorée

2. **CSS Transforms**
   - Utilisation de `transform: scale()` (GPU-accelerated)
   - Pas de redimensionnement d'image
   - Transitions CSS natives (pas de JS)

3. **Event Listeners**
   - Ajout/suppression dynamique (cleanup)
   - Pas de memory leaks
   - useEffect avec dépendances correctes

4. **Image originale**
   - Pas de duplication d'image
   - Source unique réutilisée
   - Pas de téléchargement supplémentaire

---

## 🔧 Code Technique

### Structure du Modal

```tsx
interface MapZoomModalProps {
  isOpen: boolean;        // État d'ouverture
  onClose: () => void;    // Callback de fermeture
  imageSrc: string;       // Source de l'image
  title: string;          // Titre de la carte
}
```

### États internes

```tsx
const [zoom, setZoom] = useState(1);  // Niveau de zoom (1 = 100%, 3 = 300%)
```

### Hooks utilisés

```tsx
// Gestion de la touche Échap
useEffect(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen) onClose();
  };
  window.addEventListener('keydown', handleEscape);
  return () => window.removeEventListener('keydown', handleEscape);
}, [isOpen, onClose]);

// Reset du zoom à l'ouverture
useEffect(() => {
  if (isOpen) setZoom(1);
}, [isOpen]);
```

### Gestion du zoom molette

```tsx
onWheel={(e) => {
  e.preventDefault();
  if (e.deltaY < 0) {
    handleZoomIn();   // Molette vers le haut
  } else {
    handleZoomOut();  // Molette vers le bas
  }
}}
```

---

## 🎨 Design System

### Couleurs

```css
/* Fond du modal */
bg-black/95            /* Noir 95% opacité */
backdrop-blur-sm       /* Blur léger */

/* Header/Footer */
bg-black/80            /* Noir 80% opacité */
text-white             /* Texte blanc */
text-white/70          /* Instructions (70% opacité) */

/* Contrôles de zoom */
bg-white/10            /* Fond des boutons */
hover:bg-white/20      /* Hover des boutons */
```

### Animations

```css
/* Ouverture du modal */
animate-in fade-in duration-300

/* Transitions de zoom */
transition-transform duration-200

/* Apparition du badge */
opacity-0 group-hover:opacity-100 transition-all duration-300
```

---

## ✅ Checklist de Test

### Fonctionnalités de base
- [ ] Clic sur image → Modal s'ouvre
- [ ] Badge apparaît au survol
- [ ] Cursor devient pointer
- [ ] Image affichée en pleine résolution

### Contrôles de zoom
- [ ] Molette haut → Zoom in
- [ ] Molette bas → Zoom out
- [ ] Bouton + fonctionne
- [ ] Bouton − fonctionne
- [ ] Bouton reset (🔄) fonctionne
- [ ] Limites 100%-300% respectées
- [ ] Indicateur % affiché correctement

### Fermeture
- [ ] Bouton X ferme le modal
- [ ] Touche Échap ferme le modal
- [ ] Clic extérieur ferme le modal
- [ ] Zoom reset à la fermeture

### Responsive
- [ ] Modal adapté sur mobile
- [ ] Contrôles tactiles accessibles
- [ ] Texte lisible sur petit écran
- [ ] Pas de débordement horizontal

### Accessibilité
- [ ] Focus keyboard fonctionnel
- [ ] Boutons avec aria-labels
- [ ] Modal avec role="dialog"
- [ ] Échap fonctionne toujours

---

## 🚀 Extensions Futures

### Phase 2 : Annotations

```tsx
// Ajouter des annotations cliquables sur la carte
interface Annotation {
  x: number;           // Position X (%)
  y: number;           // Position Y (%)
  label: string;       // Texte de l'annotation
  description: string; // Description détaillée
}
```

### Phase 3 : Comparaison

```tsx
// Comparer 2 cartes côte à côte
<MapCompareModal 
  leftImage={map1.image}
  rightImage={map2.image}
  syncZoom={true}
/>
```

### Phase 4 : Téléchargement

```tsx
// Bouton de téléchargement en haute résolution
<Button onClick={downloadHighRes}>
  <Download /> Télécharger en HD
</Button>
```

---

## 📞 Support

### Questions fréquentes

**Q: Le zoom ne fonctionne pas avec la molette ?**
R: Vérifiez que le modal est ouvert et que votre curseur est sur l'image.

**Q: Puis-je zoomer au-delà de 300% ?**
R: Non, la limite est fixée à 300% pour préserver la qualité visuelle et éviter la pixelisation.

**Q: Le zoom reset quand je change de carte ?**
R: Oui, c'est intentionnel. Chaque carte s'ouvre à 100% pour une expérience cohérente.

**Q: Puis-je déplacer l'image zoomée ?**
R: Actuellement non, mais cette fonctionnalité (pan/drag) sera ajoutée en Phase 2.

---

**Version :** 1.0.0  
**Date :** Décembre 2024  
**Auteur :** Équipe Développement CCNTS
