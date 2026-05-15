# 🖼️ Guide : Créer l'image Open Graph pour CCNTS

## 📐 Spécifications techniques

### Dimensions et format
- **Taille** : 1200 x 630 pixels (ratio 1.91:1)
- **Format** : JPG (recommandé) ou PNG
- **Poids** : < 300 KB (idéalement < 150 KB)
- **Résolution** : 72 DPI (web)
- **Profil couleur** : sRGB

### Zone de sécurité
- **Zone visible sur Facebook** : toute l'image
- **Zone visible sur Twitter** : 1.91:1 (toute l'image)
- **Zone visible sur LinkedIn** : centre de l'image
- **Conseil** : Garder les éléments importants au centre (900x500px)

---

## 🎨 Design recommandé pour CCNTS

### Palette de couleurs (identité CCNTS)
```
Bleu principal : #1e3a8a (blue-900)
Bleu secondaire : #2563eb (blue-600)
Orange accent : #f97316 (orange-500)
Blanc : #ffffff
Gris foncé : #1f2937 (gray-800)
```

### Éléments à inclure

1. **Fond** :
   - Dégradé bleu : de #1e3a8a (en haut) à #2563eb (en bas)
   - Texture subtile : grille géospatiale ou lignes de contour

2. **Logo** :
   - Utiliser le favicon agrandi (globe géospatial)
   - Position : centre ou haut gauche
   - Taille : 150-200px

3. **Texte principal** :
   - "CCNTS" (gros titre, police bold)
   - Taille : 80-100px
   - Couleur : Blanc
   - Police : Inter, Poppins ou Montserrat

4. **Slogan** :
   - "Cabinet de Cartographie Numérique,"
   - "de Télédétection et de Statistiques"
   - Taille : 36-42px
   - Couleur : Blanc avec opacité 90%

5. **Élément visuel** :
   - Carte stylisée (contours de la Côte d'Ivoire)
   - Points géolocalisés (orange)
   - Lignes de latitude/longitude en arrière-plan
   - Opacité : 10-20% pour ne pas surcharger

---

## 🛠️ Méthode 1 : Canva (Le plus simple - 5 minutes)

### Étapes :

1. **Accéder à Canva** : https://www.canva.com
   - Créer un compte gratuit si nécessaire

2. **Créer un design personnalisé** :
   - Cliquer sur "Créer un design"
   - Choisir "Taille personnalisée"
   - Entrer : 1200 x 630 px
   - Cliquer "Créer un design"

3. **Appliquer le fond** :
   - Cliquer sur "Éléments" (à gauche)
   - Chercher "Gradient"
   - Choisir un dégradé bleu
   - Ajuster les couleurs : #1e3a8a → #2563eb
   - Étirer sur toute la zone

4. **Ajouter le logo** :
   - Cliquer sur "Importer"
   - Télécharger le `favicon.svg` (depuis /public/)
   - Convertir en PNG si nécessaire
   - Placer au centre, taille ~180px

5. **Ajouter le texte** :
   - Cliquer sur "Texte"
   - Ajouter "CCNTS" (Police : Poppins Bold, 90px, Blanc)
   - Ajouter le slogan (Police : Poppins Regular, 38px, Blanc 90%)
   - Centrer verticalement et horizontalement

6. **Ajouter un élément visuel** :
   - Chercher "map lines" ou "grid" dans Éléments
   - Ajouter en arrière-plan avec opacité réduite
   - OU utiliser une image de carte en filigrane

7. **Télécharger** :
   - Cliquer sur "Partager" → "Télécharger"
   - Format : JPG
   - Qualité : Recommandée (85%)
   - Télécharger

8. **Renommer et placer** :
   - Renommer le fichier en `og-image.jpg`
   - Placer dans `/public/og-image.jpg`

---

## 🛠️ Méthode 2 : Figma (Pour designers - 10 minutes)

### Étapes :

1. **Créer un nouveau fichier Figma**
   - Frame : 1200 x 630 px

2. **Créer le fond** :
   ```
   Rectangle 1200x630
   Fill : Linear Gradient
     Stop 1 (0%) : #1e3a8a
     Stop 2 (100%) : #2563eb
   Angle : 135° (diagonale)
   ```

3. **Ajouter la grille géospatiale** (optionnel) :
   ```
   Effet : Grille
   Opacity : 5-10%
   Color : Blanc
   ```

4. **Importer et placer le logo** :
   - Importer `favicon.svg`
   - Redimensionner : 180x180px
   - Centrer

5. **Ajouter le texte** :
   ```
   "CCNTS"
     Font : Inter Bold / 90px
     Color : #ffffff
     Letter spacing : -2%
   
   "Cabinet de Cartographie Numérique,"
   "de Télédétection et de Statistiques"
     Font : Inter Regular / 38px
     Color : #ffffff 90%
     Line height : 1.3
   ```

6. **Exporter** :
   - Sélectionner le frame
   - Export settings : JPG, 2x quality
   - Export
   - Renommer en `og-image.jpg`
   - Placer dans `/public/`

---

## 🛠️ Méthode 3 : HTML/CSS (Pour développeurs - 15 minutes)

Créer une page HTML temporaire et faire une capture d'écran :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      margin: 0;
      padding: 0;
      width: 1200px;
      height: 630px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
      font-family: 'Inter', -apple-system, sans-serif;
      position: relative;
      overflow: hidden;
    }
    
    /* Grille de fond */
    body::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
      background-size: 50px 50px;
    }
    
    .container {
      text-align: center;
      z-index: 1;
      padding: 60px;
    }
    
    .logo {
      width: 180px;
      height: 180px;
      margin: 0 auto 40px;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    h1 {
      font-size: 90px;
      font-weight: 800;
      color: white;
      margin: 0 0 20px;
      letter-spacing: -2px;
    }
    
    p {
      font-size: 38px;
      font-weight: 400;
      color: rgba(255,255,255,0.95);
      line-height: 1.3;
      margin: 0;
      max-width: 900px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">
      <!-- Insérer le SVG du logo ici -->
      <svg width="140" height="140" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#1e3a8a"/>
        <g stroke="#ffffff" stroke-width="1.5" fill="none">
          <path d="M 16 4 Q 16 16 16 28" stroke-opacity="0.9"/>
          <path d="M 10 4 Q 12 16 10 28" stroke-opacity="0.6"/>
          <path d="M 22 4 Q 20 16 22 28" stroke-opacity="0.6"/>
          <ellipse cx="16" cy="10" rx="10" ry="2.5" stroke-opacity="0.6"/>
          <ellipse cx="16" cy="16" rx="11" ry="3" stroke-opacity="0.9"/>
          <ellipse cx="16" cy="22" rx="10" ry="2.5" stroke-opacity="0.6"/>
        </g>
        <g fill="#f97316" stroke="#ffffff" stroke-width="0.5">
          <circle cx="20" cy="12" r="2.5"/>
          <path d="M 20 14.5 L 20 18" stroke="#f97316" stroke-width="1.5" stroke-linecap="round"/>
        </g>
      </svg>
    </div>
    <h1>CCNTS</h1>
    <p>
      Cabinet de Cartographie Numérique,<br>
      de Télédétection et de Statistiques
    </p>
  </div>
</body>
</html>
```

**Capture d'écran** :
1. Ouvrir dans un navigateur
2. Zoom à 100%
3. Utiliser un outil de capture (Awesome Screenshot, Chrome DevTools)
4. Ou utiliser un service comme https://htmlcsstoimage.com/

---

## ✅ Vérification de l'image

### Checklist qualité :
- [ ] Dimensions exactes : 1200 x 630 px
- [ ] Poids < 300 KB
- [ ] Texte lisible (même en miniature)
- [ ] Logo visible et centré
- [ ] Couleurs cohérentes avec la charte CCNTS
- [ ] Pas de texte coupé sur les bords
- [ ] Format JPG ou PNG
- [ ] Nom du fichier : `og-image.jpg`

### Test visuel :

**Aperçu Facebook** : https://developers.facebook.com/tools/debug/
- Coller l'URL de votre site
- L'image doit apparaître correctement
- Le titre et la description doivent être visibles

**Aperçu Twitter** : https://cards-dev.twitter.com/validator
- Vérifier l'affichage de la carte
- L'image doit remplir tout l'espace

---

## 📊 Variantes (optionnelles)

### Pour les pages spécifiques

Vous pouvez créer des images OG différentes pour chaque section :

**Services** : `/public/og-image-services.jpg`
- Focus sur icônes de services
- Texte : "Solutions géospatiales complètes"

**Académie** : `/public/og-image-academy.jpg`
- Focus sur éducation
- Texte : "Formation en ligne en géomatique"

**Data Store** : `/public/og-image-datastore.jpg`
- Focus sur données
- Texte : "Données géospatiales de qualité"

Puis dans le composant :
```tsx
<SEOHead 
  pageKey="services" 
  customImage="/og-image-services.jpg"
/>
```

---

## 🎯 Exemples d'inspiration

### Sites similaires géospatiaux :
- Esri : Grand logo + texte simple sur fond bleu
- MapBox : Carte stylisée + logo
- QGIS : Logo + texte descriptif

### Bonnes pratiques :
✅ Logo visible et reconnaissable
✅ Texte court et impactant
✅ Couleurs de marque respectées
✅ Équilibre visuel (pas surchargé)
✅ Lisible en petit format

❌ Éviter :
- Texte trop petit
- Trop d'éléments
- Couleurs flashy
- Logo pixelisé
- Dégradés complexes

---

## 📱 Rendu final attendu

Quand quelqu'un partage https://www.ccnts.com sur Facebook/LinkedIn/Twitter :

```
┌─────────────────────────────────────┐
│  [IMAGE : 1200x630]                │
│  ┌───────────────────────────────┐ │
│  │  Fond bleu dégradé            │ │
│  │  [Logo CCNTS centré]          │ │
│  │                               │ │
│  │       CCNTS                   │ │
│  │                               │ │
│  │  Cabinet de Cartographie      │ │
│  │  Numérique, de Télédétection  │ │
│  │  et de Statistiques           │ │
│  └───────────────────────────────┘ │
│                                     │
│  CCNTS – Accueil                   │
│  Cabinet de Cartographie Numérique,│
│  de Télédétection et de Statistiques│
│  ccnts.com                          │
└─────────────────────────────────────┘
```

---

## 🚀 Action immédiate

**Temps estimé : 5-10 minutes avec Canva**

1. [ ] Aller sur Canva
2. [ ] Créer 1200x630px
3. [ ] Fond bleu dégradé (#1e3a8a → #2563eb)
4. [ ] Ajouter logo/globe stylisé
5. [ ] Texte "CCNTS" + slogan
6. [ ] Télécharger en JPG
7. [ ] Placer dans `/public/og-image.jpg`
8. [ ] Tester sur Facebook Debugger

**C'est fait !** ✅

---

## 💡 Alternative rapide (30 secondes)

Si vous n'avez vraiment pas le temps maintenant :

Utilisez temporairement une image de placeholder :
```bash
# Télécharger une image géospatiale libre de droits
https://unsplash.com/s/photos/gis-mapping

# Redimensionner à 1200x630
# Renommer en og-image.jpg
# Placer dans /public/
```

Puis créer la vraie image CCNTS plus tard.

---

**Note** : L'image Open Graph est TRÈS importante pour le SEO social. Les liens avec image génèrent **3x plus de clics** que sans !
