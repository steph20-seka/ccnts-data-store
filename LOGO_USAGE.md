# Utilisation du Logo Officiel CCNTS

Le logo officiel CCNTS est utilisé de manière cohérente dans toute l'application.

## 📍 Emplacements du Logo

### 1. **Header/Navbar**
- **Fichier**: `src/app/components/layout/Header.tsx`
- **Import**: `import logo from 'figma:asset/0173b39ac6c5b944e67a0f675e34bdf32c0a5d74.png'`
- **Utilisation**: Logo cliquable dans le header principal
- **Taille**: `h-12 w-auto` (48px de hauteur)

### 2. **Footer**
- **Fichier**: `src/app/components/layout/Footer.tsx`
- **Import**: `import logo from 'figma:asset/0173b39ac6c5b944e67a0f675e34bdf32c0a5d74.png'`
- **Utilisation**: Logo dans le pied de page
- **Taille**: `h-16 sm:h-20 w-auto` (64-80px de hauteur)

### 3. **Pages d'Authentification**

#### Login
- **Fichier**: `src/app/pages/LoginPage.tsx`
- **Taille**: `w-12 h-12` (48px)

#### Sign Up
- **Fichier**: `src/app/pages/SignUpPage.tsx`
- **Taille**: `w-12 h-12` (48px)

#### Forgot Password
- **Fichier**: `src/app/pages/ForgotPasswordPage.tsx`
- **Taille**: `w-12 h-12` (48px)

#### Verify Email
- **Fichier**: `src/app/pages/VerifyEmailPage.tsx`
- **Taille**: `w-12 h-12` (48px)

### 4. **Favicon (Browser Tab)**
- **Fichiers**: 
  - `/public/favicon.png` (logo officiel)
  - `/public/logo.png` (copie du logo officiel)
- **Configuration**: `src/app/App.tsx` (useEffect pour initialiser les favicons)
- **Format du titre**: `CCNTS – Nom de la page`
- **Exemples**:
  - `CCNTS – Accueil`
  - `CCNTS – Services`
  - `CCNTS – Contact`

### 5. **Web Manifest (PWA)**
- **Fichier**: `/public/site.webmanifest`
- **Icônes**: Utilise `/favicon.png` pour les tailles 192x192 et 512x512

## 🎨 Caractéristiques du Logo

- **Format**: PNG avec fond transparent
- **Couleurs principales**:
  - Orange: `#f97316` (globe)
  - Noir: `#000000` (croissant et texte)
  - Blanc: `#ffffff` (fond)
- **Éléments**:
  - Globe terrestre orange (Amérique du Nord et du Sud)
  - Rose des vents au centre
  - Croissant noir à droite
  - Texte "CCNTS" intégré

## 🔄 Composant Réutilisable

Un composant `<Logo />` a été créé pour une utilisation cohérente:

**Fichier**: `src/app/components/Logo.tsx`

**Utilisation**:
```tsx
import { Logo } from '../components/Logo';

// Tailles disponibles
<Logo size="xs" /> // 24px
<Logo size="sm" /> // 32px
<Logo size="md" /> // 48px (par défaut)
<Logo size="lg" /> // 64px
<Logo size="xl" /> // 80px
```

## ✅ Cohérence Visuelle

- ✅ Même source d'image (`figma:asset/0173b39ac6c5b944e67a0f675e34bdf32c0a5d74.png`)
- ✅ Tailles cohérentes selon le contexte
- ✅ Espacement respecté
- ✅ Alt text descriptif
- ✅ Favicon correctement configuré
- ✅ Manifest PWA configuré

## 📦 Fichiers Publics

```
/public/
├── favicon.png          # Logo officiel (189KB)
├── logo.png            # Copie du logo officiel
├── site.webmanifest    # Configuration PWA
└── favicon-test.html   # Page de test pour le favicon
```

## 🌐 Browser Tab

Le favicon s'affiche dans l'onglet du navigateur avec le format:

**[Logo CCNTS] CCNTS – Nom de la page**

Résultat professionnel similaire à Vercel, Firebase, Amazon, etc.
