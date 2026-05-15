# 🎨 Brief Design Figma - Flux Auth Firebase CCNTS

## 📋 Vue d'ensemble

**Projet** : CCNTS - Cabinet de Cartographie Numérique  
**Objectif** : Design complet du flux d'authentification Firebase avec vérification email  
**Plateformes** : Desktop (prioritaire) + Mobile responsive  

---

## 🎯 Objectifs du design

1. ✅ **Flux complet** : De l'inscription à la vérification email
2. ✅ **Tous les états** : Default, Loading, Error, Success
3. ✅ **Clarté** : Utilisateur sait toujours où il en est
4. ✅ **Firebase-ready** : Prêt pour email verification + reset password
5. ✅ **Professionnel** : Identité CCNTS (géospatial, scientifique)

---

## 🎨 Charte graphique CCNTS

### Palette de couleurs

**Couleurs principales**
- Bleu profond : `#1e3a8a` (bleu scientifique)
- Orange/Terre : `#f97316` (accents cartographie)
- Blanc : `#ffffff`
- Gris clair : `#f9fafb`

**Couleurs d'état**
- Success : `#22c55e` (vert)
- Error : `#ef4444` (rouge)
- Warning : `#f59e0b` (orange/ambre)
- Info : `#3b82f6` (bleu clair)

**Couleurs de texte**
- Primaire : `#111827` (noir doux)
- Secondaire : `#6b7280` (gris moyen)
- Tertiaire : `#9ca3af` (gris clair)

### Typographie

**Police principale** : Inter / SF Pro / System-ui
- Titres : Bold (700) - 24-32px
- Sous-titres : Semi-bold (600) - 18-20px
- Corps : Regular (400) - 14-16px
- Small : Regular (400) - 12-14px

### Espacements

**Système 8pt** : 8, 16, 24, 32, 40, 48, 64px

---

## 📱 Écrans à créer

### Liste complète (16 écrans/variantes)

#### A) Connexion
1. Connexion - Default
2. Connexion - Loading
3. Connexion - Error (identifiants incorrects)
4. Connexion - Error (email non vérifié)

#### B) Inscription
5. Inscription - Default
6. Inscription - Loading
7. Inscription - Error (email existe déjà)
8. Inscription - Success + Redirection vérification

#### C) Vérification email
9. Vérifier votre email - Default
10. Vérifier votre email - Email renvoyé (succès)
11. Email non vérifié (blocage connexion)

#### D) Mot de passe oublié
12. Mot de passe oublié - Default
13. Mot de passe oublié - Loading
14. Email envoyé - Succès (reset password)

#### E) Google Sign-In
15. Modal avec Google - Default
16. Modal avec Google - Loading

---

## 🎨 Spécifications détaillées par écran

---

## 1️⃣ CONNEXION - Default

### Layout

```
┌─────────────────────────────────────────────┐
│                                             │
│         [Logo CCNTS + Globe Icon]          │
│                                             │
│            Académie CCNTS                   │
│     Connecte-toi pour accéder aux cours     │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │ [G] Continuer avec Google             │ │
│  └───────────────────────────────────────┘ │
│                                             │
│         ─── Ou avec email ───              │
│                                             │
│  Email                                      │
│  ┌───────────────────────────────────────┐ │
│  │ [✉] ton-email@exemple.com             │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  Mot de passe                               │
│  ┌───────────────────────────────────────┐ │
│  │ [🔒] ••••••••                    [👁]│ │
│  └───────────────────────────────────────┘ │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │         Se connecter                   │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  Mot de passe oublié ? [Réinitialiser]     │
│                                             │
│  Pas encore de compte ? [S'inscrire]       │
│                                             │
└─────────────────────────────────────────────┘
```

### Spécifications précises

**Container**
- Largeur : 480px (desktop) / 100% -32px (mobile)
- Padding : 48px
- Border-radius : 16px
- Background : White
- Box-shadow : 0 10px 40px rgba(0,0,0,0.1)

**Logo + Titre**
- Logo : 48x48px
- Titre : 24px, Bold, #1e3a8a
- Description : 14px, Regular, #6b7280
- Espacement : 8px entre titre et description

**Bouton Google**
- Height : 48px
- Border : 2px solid #e5e7eb
- Border-radius : 8px
- Hover : Border #3b82f6, Background #eff6ff
- Logo Google : 20x20px à gauche
- Texte : 14px, Medium, #111827

**Séparateur "Ou avec email"**
- Lignes : 1px, #e5e7eb
- Texte : 12px, Regular, #9ca3af, uppercase
- Margin : 24px top/bottom

**Inputs (Email & Password)**
- Height : 48px
- Border : 1px solid #d1d5db
- Border-radius : 8px
- Focus : Border 2px #3b82f6, Box-shadow 0 0 0 3px rgba(59,130,246,0.1)
- Padding : 12px 16px
- Icon size : 16x16px, color #6b7280
- Placeholder : #9ca3af

**Icône "Afficher/Masquer"**
- Taille : 20x20px
- Couleur : #6b7280
- Hover : #111827
- Position : Absolute right 12px

**Bouton "Se connecter"**
- Height : 48px
- Background : #1e3a8a
- Border-radius : 8px
- Text : 16px, Semi-bold, White
- Hover : Background #1e40af
- Active : Background #1e3a8a + scale(0.98)

**Liens secondaires**
- Taille : 14px, Regular
- Couleur texte : #6b7280
- Couleur lien : #3b82f6
- Hover lien : Underline + #1e40af

**Espacements verticaux**
- Logo → Titre : 16px
- Titre → Description : 8px
- Description → Google button : 32px
- Google button → Séparateur : 24px
- Séparateur → Email input : 24px
- Email → Password : 16px
- Password → Bouton : 24px
- Bouton → Lien oublié : 16px
- Lien oublié → Lien inscription : 8px

---

## 2️⃣ CONNEXION - Loading

### Modifications par rapport à Default

**Bouton "Se connecter"**
- Background : #93c5fd (bleu clair)
- Cursor : not-allowed
- Disabled state : true

**Contenu du bouton**
```
┌─────────────────────────────┐
│  [⏳ Spinner] Connexion...  │
└─────────────────────────────┘
```

**Spinner**
- Taille : 16x16px
- Couleur : White
- Animation : Rotation 360° en 1s (infinite)
- Position : À gauche du texte, 8px de marge

**Inputs**
- Disabled : true
- Background : #f9fafb
- Border : #e5e7eb

**Tous les autres éléments**
- Opacity : 0.5
- Pointer-events : none

---

## 3️⃣ CONNEXION - Error (Identifiants incorrects)

### Ajout d'une alerte Error

**Position** : En haut du formulaire, après le séparateur

```
┌─────────────────────────────────────────────┐
│  ❌  Email ou mot de passe incorrect        │
│      Vérifie tes identifiants.              │
└─────────────────────────────────────────────┘
```

**Spécifications Alert Error**
- Background : #fef2f2 (rouge très clair)
- Border : 1px solid #fecaca
- Border-radius : 8px
- Padding : 12px 16px
- Icon : ❌ ou AlertCircle (20x20px, #ef4444)
- Titre : 14px, Semi-bold, #991b1b
- Description : 14px, Regular, #7f1d1d
- Margin-bottom : 16px

**Input Email & Password**
- Border : 2px solid #ef4444 (rouge)
- Background : #fef2f2

---

## 4️⃣ CONNEXION - Error (Email non vérifié)

### Alerte spéciale "Email non vérifié"

```
┌─────────────────────────────────────────────┐
│  ⚠️  Ton email n'est pas encore vérifié     │
│                                             │
│  Vérifie ta boîte mail et clique sur le    │
│  lien de confirmation.                      │
│                                             │
│  Tu n'as rien reçu ?                        │
│  [Renvoyer l'email de vérification]        │
└─────────────────────────────────────────────┘
```

**Spécifications Alert Warning**
- Background : #fffbeb (orange/ambre clair)
- Border : 1px solid #fde68a
- Border-radius : 8px
- Padding : 16px
- Icon : ⚠️ (24x24px, #f59e0b)
- Titre : 14px, Semi-bold, #92400e
- Description : 14px, Regular, #78350f
- Margin-bottom : 16px

**Bouton "Renvoyer l'email"**
- Height : 40px
- Background : #f59e0b
- Border-radius : 6px
- Text : 14px, Medium, White
- Margin-top : 12px

---

## 5️⃣ INSCRIPTION - Default

### Layout similaire à Connexion avec champs supplémentaires

```
┌─────────────────────────────────────────────┐
│                                             │
│         [Logo CCNTS + Globe Icon]          │
│                                             │
│            Académie CCNTS                   │
│      Crée ton compte pour commencer         │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │ [G] Continuer avec Google             │ │
│  └───────────────────────────────────────┘ │
│                                             │
│         ─── Ou avec email ───              │
│                                             │
│  Nom complet                                │
│  ┌───────────────────────────────────────┐ │
│  │ [👤] Jean Dupont                      │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  Email                                      │
│  ┌───────────────────────────────────────┐ │
│  │ [✉] ton-email@exemple.com             │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  Mot de passe                               │
│  ┌───────────────────────────────────────┐ │
│  │ [🔒] ••••••••                    [👁]│ │
│  └───────────────────────────────────────┘ │
│                                             │
│  ✓ Au moins 8 caractères                   │
│  ○ Une lettre majuscule                    │
│  ○ Un chiffre                               │
│                                             │
│  Confirmer le mot de passe                  │
│  ┌───────────────────────────────────────┐ │
│  │ [🔒] ••••••••                    [👁]│ │
│  └───────────────────────────────────────┘ │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │         Créer mon compte               │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  Déjà un compte ? [Se connecter]           │
│                                             │
└─────────────────────────────────────────────┘
```

### Nouveautés spécifiques

**Checklist force du mot de passe**
- Position : Sous l'input password
- Spacing : 8px entre chaque règle
- Règle validée : ✓ + #22c55e (vert)
- Règle non validée : ○ + #d1d5db (gris)
- Texte : 12px, Regular
- Animation : Fade in + scale quand validé

**Input "Confirmer mot de passe"**
- Identique à "Mot de passe"
- Si différent : Border rouge + message "Les mots de passe ne correspondent pas" en dessous

---

## 6️⃣ INSCRIPTION - Loading

### État pendant la création du compte

**Similaire à Connexion - Loading** :
- Bouton disabled avec spinner
- Texte : "Création du compte..."
- Tous les inputs disabled

---

## 7️⃣ INSCRIPTION - Error (Email existe déjà)

### Alerte Error spécifique

```
┌─────────────────────────────────────────────┐
│  ❌  Cet email est déjà utilisé             │
│                                             │
│  Un compte existe avec cette adresse.       │
│  [Se connecter] ou utilise un autre email.  │
└─────────────────────────────────────────────┘
```

**Input Email**
- Border : 2px solid #ef4444
- Background : #fef2f2

**Lien "Se connecter"**
- Dans l'alerte
- Couleur : #3b82f6
- Underline au hover

---

## 8️⃣ INSCRIPTION - Success + Redirection

### Transition après inscription réussie

**Animation** : 
1. Bouton devient vert avec ✓
2. Fade out de tout le formulaire (300ms)
3. Fade in de l'écran "Vérifier votre email" (300ms)

**Bouton Success (temporaire 1s)**
```
┌─────────────────────────────┐
│  ✓ Compte créé !            │
└─────────────────────────────┘
```
- Background : #22c55e (vert)
- Icon : ✓ (20x20px)

---

## 9️⃣ VÉRIFIER VOTRE EMAIL - Default

### Écran principal après inscription

```
┌─────────────────────────────────────────────┐
│                                             │
│              [📧 Icon 64x64]               │
│                                             │
│          Vérifie ton email                  │
│                                             │
│  Un email de confirmation a été envoyé à :  │
│                                             │
│          jean.dupont@gmail.com              │
│                                             │
│  Clique sur le lien dans l'email pour       │
│  activer ton compte et accéder aux cours.   │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │       Ouvrir ma boîte mail             │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │       Renvoyer l'email                 │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ ℹ️  Tu n'as rien reçu ?             │   │
│  │                                     │   │
│  │ • Vérifie ton dossier Spam         │   │
│  │ • Vérifie ton dossier Promotions   │   │
│  │ • Attends 2-3 minutes              │   │
│  │                                     │   │
│  │ [Changer d'adresse email]          │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  [← Retour à la connexion]                 │
│                                             │
└─────────────────────────────────────────────┘
```

### Spécifications

**Icône email**
- Taille : 64x64px
- Couleur : #3b82f6 (bleu)
- Style : Outlined ou filled
- Centré

**Titre**
- Taille : 28px, Bold
- Couleur : #111827
- Margin : 16px top, 24px bottom

**Description**
- Taille : 16px, Regular
- Couleur : #6b7280
- Line-height : 1.6
- Max-width : 400px
- Centré

**Email affiché**
- Taille : 16px, Semi-bold
- Couleur : #1e3a8a (bleu CCNTS)
- Background : #eff6ff (bleu très clair)
- Padding : 8px 16px
- Border-radius : 6px
- Margin : 16px 0

**Bouton primaire "Ouvrir ma boîte mail"**
- Height : 48px
- Background : #1e3a8a
- Icon : 📧 ou ExternalLink
- Lien : `mailto:` ou `https://mail.google.com`

**Bouton secondaire "Renvoyer l'email"**
- Height : 48px
- Background : Transparent
- Border : 2px solid #e5e7eb
- Text color : #6b7280
- Hover : Border #d1d5db, Background #f9fafb

**Bloc info "Tu n'as rien reçu ?"**
- Background : #eff6ff (bleu très clair)
- Border : 1px solid #dbeafe
- Border-radius : 8px
- Padding : 16px
- Icon : ℹ️ (20x20px, #3b82f6)
- Liste : 14px, Regular, #475569
- Margin : 24px 0

**Lien "Changer d'adresse email"**
- Taille : 14px, Medium
- Couleur : #3b82f6
- Underline au hover

**Lien "Retour connexion"**
- Taille : 14px, Regular
- Couleur : #6b7280
- Icon : ← (arrow-left)

---

## 🔟 VÉRIFIER VOTRE EMAIL - Email renvoyé

### Variante avec confirmation de renvoi

**Ajout en haut de l'écran** :

```
┌─────────────────────────────────────────────┐
│  ✓  Email renvoyé avec succès !             │
│     Vérifie ta boîte mail.                  │
└─────────────────────────────────────────────┘
```

**Spécifications Success Banner**
- Background : #f0fdf4 (vert très clair)
- Border : 1px solid #bbf7d0
- Border-radius : 8px
- Padding : 12px 16px
- Icon : ✓ (20x20px, #22c55e)
- Text : 14px, Semi-bold, #166534
- Animation : Slide down + fade in
- Disparaît après 5 secondes

**Bouton "Renvoyer l'email"**
- Disabled pendant 60 secondes
- Texte change : "Renvoyer (58s)" avec compte à rebours
- Background : #f3f4f6
- Couleur : #9ca3af

---

## 1️⃣1️⃣ EMAIL NON VÉRIFIÉ (Blocage connexion)

### Écran bloquant si tentative de connexion sans vérification

```
┌─────────────────────────────────────────────┐
│                                             │
│              [⚠️ Icon 64x64]               │
│                                             │
│       Email non vérifié                     │
│                                             │
│  Ton compte a été créé mais n'est pas       │
│  encore activé.                             │
│                                             │
│  Vérifie ton email et clique sur le lien   │
│  de confirmation pour activer ton compte.   │
│                                             │
│  Email envoyé à :                           │
│          jean.dupont@gmail.com              │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │       Renvoyer l'email                 │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │       Se déconnecter                   │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ ℹ️  Besoin d'aide ?                 │   │
│  │                                     │   │
│  │ • Vérifie tes Spams                │   │
│  │ • [Changer d'adresse email]        │   │
│  │ • [Contacter le support]           │   │
│  └─────────────────────────────────────┘   │
│                                             │
└─────────────────────────────────────────────┘
```

### Spécifications

**Icône Warning**
- Taille : 64x64px
- Couleur : #f59e0b (orange)
- Style : Triangle avec !

**Titre**
- Taille : 28px, Bold
- Couleur : #92400e (orange foncé)

**Bouton "Se déconnecter"**
- Bouton secondaire (outlined)
- Permet de retourner à l'écran de connexion

---

## 1️⃣2️⃣ MOT DE PASSE OUBLIÉ - Default

### Formulaire de réinitialisation

```
┌─────────────────────────────────────────────┐
│                                             │
│         [Logo CCNTS + Globe Icon]          │
│                                             │
│        Mot de passe oublié ?                │
│                                             │
│  Entre ton adresse email pour recevoir un  │
│  lien de réinitialisation.                  │
│                                             │
│  Email                                      │
│  ┌───────────────────────────────────────┐ │
│  │ [✉] ton-email@exemple.com             │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │       Envoyer le lien                  │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  [← Retour à la connexion]                 │
│                                             │
└─────────────────────────────────────────────┘
```

### Spécifications

**Layout**
- Plus simple que connexion/inscription
- Un seul input : Email
- Container : 480px, padding 48px

**Titre**
- Taille : 24px, Bold
- Couleur : #111827

**Description**
- Taille : 14px, Regular
- Couleur : #6b7280
- Margin-bottom : 24px

---

## 1️⃣3️⃣ MOT DE PASSE OUBLIÉ - Loading

### État pendant l'envoi

**Bouton "Envoyer le lien"**
- Disabled avec spinner
- Texte : "Envoi..."

**Input**
- Disabled
- Background : #f9fafb

---

## 1️⃣4️⃣ EMAIL ENVOYÉ - Succès (Reset password)

### Confirmation d'envoi du lien

```
┌─────────────────────────────────────────────┐
│                                             │
│              [✉️ Icon 64x64]               │
│                                             │
│          Email envoyé !                     │
│                                             │
│  Un lien de réinitialisation a été envoyé  │
│  à :                                        │
│                                             │
│          jean.dupont@gmail.com              │
│                                             │
│  Clique sur le lien dans l'email pour      │
│  créer un nouveau mot de passe.             │
│                                             │
│  ⚠️  Le lien expire dans 1 heure            │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │       Ouvrir ma boîte mail             │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │       Renvoyer l'email                 │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ ℹ️  Tu n'as rien reçu ?             │   │
│  │                                     │   │
│  │ • Vérifie ton dossier Spam         │   │
│  │ • Attends 2-3 minutes              │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  [← Retour à la connexion]                 │
│                                             │
└─────────────────────────────────────────────┘
```

### Spécifications

**Icône Success**
- Taille : 64x64px
- Couleur : #22c55e (vert)
- Style : Checkmark in circle ou envelope-check

**Warning "Lien expire"**
- Background : #fffbeb
- Border : 1px solid #fde68a
- Padding : 8px 12px
- Border-radius : 6px
- Icon : ⚠️ (16x16px)
- Text : 12px, Medium, #92400e

---

## 1️⃣5️⃣ MODAL GOOGLE - Default

### Modal avec Google (même layout que Connexion)

Identique à "Connexion - Default" mais :
- Focus visuel sur le bouton Google
- Peut être dans une modal overlay ou page pleine

---

## 1️⃣6️⃣ MODAL GOOGLE - Loading

### État pendant l'authentification Google

**Overlay complet** :
```
┌─────────────────────────────────────────────┐
│                                             │
│              [⏳ Spinner 32px]             │
│                                             │
│        Connexion avec Google...             │
│                                             │
│     Une fenêtre Google va s'ouvrir          │
│                                             │
└─────────────────────────────────────────────┘
```

**Spécifications**
- Background : rgba(0, 0, 0, 0.5) (overlay sombre)
- Card : White, 400px, centré
- Padding : 48px
- Spinner : 32x32px, couleurs Google
- Text : 16px, Regular, #6b7280

---

## 🧩 COMPOSANTS RÉUTILISABLES

### À créer dans Figma comme composants

---

### 1. AuthInput (Input avec variantes)

**Variantes** :
- Default
- Focus
- Error
- Disabled
- With icon left
- With icon right (password eye)

**Properties** :
- Label (text)
- Placeholder (text)
- Icon left (component)
- Icon right (component)
- Error message (text)
- State (default/focus/error/disabled)

---

### 2. AuthButton (Bouton avec états)

**Variantes** :
- Primary
- Secondary
- Google
- Loading
- Disabled
- Success

**Properties** :
- Text (string)
- Icon left (component)
- State (default/hover/active/disabled/loading)
- Size (small/medium/large)

---

### 3. AlertBox (Alert avec types)

**Variantes** :
- Success (vert)
- Error (rouge)
- Warning (orange)
- Info (bleu)

**Properties** :
- Type (success/error/warning/info)
- Title (text)
- Description (text)
- Icon (component)
- Dismissible (boolean)

---

### 4. InfoBanner (Bloc "Tu n'as rien reçu ?")

**Properties** :
- Title (text)
- Items (list)
- CTA text (text)
- Type (info/warning)

---

### 5. AuthLayout (Container principal)

**Structure** :
```
┌─────────────────────────────────────────────┐
│           [Slot: Logo + Header]            │
│                                             │
│           [Slot: Content]                   │
│                                             │
│           [Slot: Footer Links]             │
└─────────────────────────────────────────────┘
```

**Properties** :
- Logo (component)
- Title (text)
- Description (text)
- Content (slot)
- Footer (slot)

---

### 6. PasswordStrengthChecker

**Variantes** :
- Rule passed (vert)
- Rule not passed (gris)

**Properties** :
- Rules (array)
- Password value (hidden, for simulation)

---

### 7. EmailDisplay

**Affichage stylisé de l'email**

**Properties** :
- Email (text)
- Editable (boolean)

---

## 🎬 PROTOTYPE & INTERACTIONS

### Flows à créer dans Figma Prototype

---

### Flow 1 : Inscription complète

```
Inscription (Default)
    ↓ [Clic "Créer mon compte"]
Inscription (Loading)
    ↓ [Après 1s]
Inscription (Success) ✓
    ↓ [Auto transition 300ms]
Vérifier votre email (Default)
    ↓ [Clic "Renvoyer"]
Vérifier votre email (Email renvoyé) ✓
```

---

### Flow 2 : Connexion normale

```
Connexion (Default)
    ↓ [Clic "Se connecter"]
Connexion (Loading)
    ↓ [Après 1s]
Home / Dashboard ✓
```

---

### Flow 3 : Connexion email non vérifié

```
Connexion (Default)
    ↓ [Clic "Se connecter"]
Connexion (Loading)
    ↓ [Après 1s]
Connexion (Error - Email non vérifié)
    ↓ [Clic "Renvoyer email"]
Vérifier votre email (Default)
```

---

### Flow 4 : Mot de passe oublié

```
Connexion (Default)
    ↓ [Clic "Réinitialiser"]
Mot de passe oublié (Default)
    ↓ [Clic "Envoyer le lien"]
Mot de passe oublié (Loading)
    ↓ [Après 1s]
Email envoyé (Succès)
    ↓ [Clic "Retour connexion"]
Connexion (Default)
```

---

### Flow 5 : Google Sign-In

```
Connexion (Default)
    ↓ [Clic "Continuer avec Google"]
Modal Google (Loading)
    ↓ [Après 2s]
Home / Dashboard ✓
```

---

## 📐 RESPONSIVE - Mobile (375px)

### Adaptations pour mobile

**Layout mobile** :
- Width : 100% viewport - 16px padding
- Container padding : 24px (au lieu de 48px)
- Font sizes : -2px partout
- Buttons : Full width
- Inputs : Height 44px minimum (touch target)

**Espacements réduits** :
- Vertical spacing : -8px partout
- Entre inputs : 12px (au lieu de 16px)

**Typographie** :
- Titres : 20px (au lieu de 24px)
- Descriptions : 14px (au lieu de 16px)
- Inputs/Buttons : 14px (au lieu de 16px)

**Bouton Google** :
- Texte plus court : "Google" au lieu de "Continuer avec Google"

---

## ✅ CHECKLIST DESIGN

### Avant de livrer le Figma

- [ ] 16 écrans créés (tous les états)
- [ ] 7 composants réutilisables créés
- [ ] Variantes pour chaque composant
- [ ] Properties configurées
- [ ] Prototype avec 5 flows interactifs
- [ ] Version Desktop (480px container)
- [ ] Version Mobile (375px viewport)
- [ ] Animations/Transitions (300ms ease-in-out)
- [ ] Couleurs CCNTS respectées
- [ ] Typographie cohérente (Inter/SF Pro)
- [ ] Espacements système 8pt
- [ ] Contrastes accessibles (WCAG AA)
- [ ] Focus states visibles
- [ ] Touch targets minimum 44px (mobile)
- [ ] Messages d'erreur clairs
- [ ] Loading states sur tous les boutons
- [ ] Icons cohérents (Lucide ou Heroicons)
- [ ] Documentation dans Figma (Cover page)

---

## 📝 MESSAGES D'ERREUR STANDARD

### Liste complète à intégrer dans les designs

**Erreurs de validation** :
- "Email invalide. Vérifie le format."
- "Le mot de passe doit contenir au moins 6 caractères."
- "Les mots de passe ne correspondent pas."
- "Le nom complet est requis."

**Erreurs d'authentification** :
- "Email ou mot de passe incorrect."
- "Cet email n'existe pas. Crée un compte ?"
- "Ton email n'est pas encore vérifié."
- "Trop de tentatives. Réessaie dans quelques minutes."

**Erreurs d'inscription** :
- "Cet email est déjà utilisé."
- "L'inscription a échoué. Réessaie."

**Erreurs réseau** :
- "Problème de connexion. Vérifie ta connexion internet."
- "Le serveur ne répond pas. Réessaie plus tard."

**Erreurs Google** :
- "La connexion Google a été annulée."
- "Erreur Google. Réessaie avec email/password."

---

## 🎨 ASSETS À PRÉPARER

### Icônes nécessaires (20x20px et 24x24px)

**Navigation & Actions**
- ✉️ Mail / Envelope
- 🔒 Lock
- 👤 User
- 👁 Eye / Eye-off
- ✓ Check / Checkmark
- ❌ X / Close
- ⚠️ Alert Triangle
- ℹ️ Info Circle
- ← Arrow Left
- 🔄 Refresh / Reload

**Spécifiques Firebase**
- 📧 Envelope-open (email sent)
- ✉️📤 Envelope-send
- [G] Logo Google (SVG officiel)
- 🌍 Globe (logo CCNTS)

**États**
- ⏳ Spinner / Loader
- ✓ Success Circle
- ❌ Error Circle
- ⚠️ Warning Triangle

---

## 📦 LIVRABLES FINAUX

### Structure du fichier Figma

```
📁 CCNTS - Auth Flow Firebase
│
├── 📄 Cover (Description du projet)
│
├── 📄 Design Tokens
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   └── Shadows
│
├── 📄 Components
│   ├── AuthInput (avec variantes)
│   ├── AuthButton (avec variantes)
│   ├── AlertBox (avec variantes)
│   ├── InfoBanner
│   ├── AuthLayout
│   ├── PasswordStrengthChecker
│   └── EmailDisplay
│
├── 📄 Screens - Desktop
│   ├── 01 - Connexion (+ variantes)
│   ├── 02 - Inscription (+ variantes)
│   ├── 03 - Vérifier email (+ variantes)
│   ├── 04 - Mot de passe oublié (+ variantes)
│   └── 05 - Email envoyé
│
├── 📄 Screens - Mobile
│   └── (Mêmes écrans adaptés)
│
└── 📄 Prototype
    ├── Flow 1: Inscription complète
    ├── Flow 2: Connexion normale
    ├── Flow 3: Email non vérifié
    ├── Flow 4: Reset password
    └── Flow 5: Google Sign-In
```

---

## 🔗 RESSOURCES UTILES

### Inspirations design
- Firebase Auth UI : https://firebase.google.com/docs/auth/web/firebaseui
- Notion Sign In
- Linear Sign In
- Vercel Sign In
- Stripe Sign In

### Librairies d'icônes
- Lucide Icons : https://lucide.dev
- Heroicons : https://heroicons.com
- Phosphor Icons : https://phosphoricons.com

### Plugins Figma recommandés
- Unsplash (images)
- Iconify (icônes)
- Content Reel (textes de remplissage)
- Stark (contraste accessibilité)

---

## 🎯 RÉSULTAT ATTENDU

Un design Figma qui :

✅ Couvre **100%** du flux d'authentification Firebase  
✅ Inclut **tous les états** (default/loading/error/success)  
✅ Est **professionnel** et cohérent avec l'identité CCNTS  
✅ Est **prêt pour le développement** (pas de design manquant)  
✅ Gère **l'email verification** de manière claire  
✅ Explique **clairement chaque étape** à l'utilisateur  
✅ Inclut des **messages d'aide** ("Tu n'as rien reçu ?")  
✅ Est **responsive** (desktop + mobile)  
✅ A des **interactions prototypées**  
✅ Utilise des **composants réutilisables**  

---

**Brief créé le** : 3 février 2026  
**Projet** : CCNTS - Cabinet de Cartographie Numérique, de Télédétection et de Statistiques  
**Version** : 1.0
