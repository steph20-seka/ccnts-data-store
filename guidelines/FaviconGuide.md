# Guide d'ajout du Favicon CCNTS

## 📋 Objectif
Ajouter le logo CCNTS comme favicon (icône d'onglet de navigateur) pour donner une identité professionnelle au site.

## 🎯 Format du titre de page
Les titres de page sont maintenant au format professionnel : **"CCNTS – [Nom de la page]"**

Exemples :
- `CCNTS – Accueil` (français)
- `CCNTS – Home` (anglais)
- `CCNTS – Startseite` (allemand)
- `CCNTS – Inicio` (espagnol)

## 🖼️ Ajout du Favicon

### Étape 1 : Préparer l'icône
1. Créer une version simplifiée du logo CCNTS (idéalement sans texte, juste le pictogramme)
2. Dimensions recommandées : **32x32 px** ou **16x16 px**
3. Formats supportés :
   - **ICO** (recommandé, compatible tous navigateurs)
   - **PNG** (moderne, supporté par les navigateurs récents)
   - **SVG** (vectoriel, pour une qualité parfaite à toutes les tailles)

### Étape 2 : Placer le fichier
Le fichier favicon doit être placé dans le dossier public de votre projet (généralement `/public/`).

Noms de fichiers recommandés :
- `/public/favicon.ico` (standard)
- `/public/favicon.png`
- `/public/favicon.svg`

### Étape 3 : Ajouter dans le HTML
Dans le fichier `index.html` (ou équivalent), ajouter les balises suivantes dans la section `<head>` :

```html
<head>
  <!-- Favicon standard -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  
  <!-- Favicon PNG (navigateurs modernes) -->
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  
  <!-- Favicon SVG (navigateurs modernes) -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  
  <!-- Apple Touch Icon (iOS) -->
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  
  <!-- Android Chrome -->
  <link rel="manifest" href="/site.webmanifest">
</head>
```

### Étape 4 : Créer un manifest (optionnel mais recommandé)
Créer un fichier `/public/site.webmanifest` :

```json
{
  "name": "CCNTS",
  "short_name": "CCNTS",
  "description": "Cabinet de Cartographie Numérique, de Télédétection et de Statistiques",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#1e40af",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

## 🎨 Recommandations de design

### Couleurs
- Utiliser les couleurs de la palette CCNTS (bleu profond, blanc, orange)
- Assurer un bon contraste pour la lisibilité à petite taille

### Simplicité
- Éviter les détails trop fins (ils seront invisibles à 16x16 px)
- Privilégier un symbole reconnaissable (logo simplifié, initiales, pictogramme)

### Exemples d'icônes professionnelles :
- Initiales "CCNTS" stylisées
- Pictogramme de carte ou satellite
- Symbole géospatial (globe, marqueur, grille cartographique)

## 🔧 Outils recommandés

### Générateurs de favicon en ligne :
- [Favicon.io](https://favicon.io/) - Génère tous les formats automatiquement
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Génère un kit complet

### Logiciels de design :
- Adobe Illustrator / Photoshop
- Figma
- Inkscape (gratuit)
- GIMP (gratuit)

## ✅ Test et validation
Après l'ajout du favicon :
1. Vider le cache du navigateur (Ctrl+F5)
2. Recharger la page
3. Vérifier l'affichage dans :
   - Onglet du navigateur
   - Favoris / Bookmarks
   - Historique
   - Application mobile (si PWA)

## 📱 Format des onglets de navigateur
Avec le favicon et le titre dynamique, chaque onglet affichera :

```
[Logo CCNTS] CCNTS – Accueil
[Logo CCNTS] CCNTS – Services
[Logo CCNTS] CCNTS – Data Store
[Logo CCNTS] CCNTS – Contact
```

Cela reproduit le standard professionnel des grands sites web (YouTube, Google, etc.).

## 🌍 Internationalisation
Les titres de page sont traduits automatiquement selon la langue active :
- 🇫🇷 Français : "CCNTS – Accueil"
- 🇬🇧 Anglais : "CCNTS – Home"
- 🇩🇪 Allemand : "CCNTS – Startseite"
- 🇪🇸 Espagnol : "CCNTS – Inicio"

Le favicon reste le même pour toutes les langues.
