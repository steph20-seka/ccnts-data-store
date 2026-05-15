# ✅ Checklist Design Figma - Auth Flow Firebase

## 📋 Checklist complète pour le designer

Utilisez cette checklist pour vous assurer que le design Figma est 100% complet.

---

## 🎨 1. ÉCRANS PRINCIPAUX

### A) Connexion
- [ ] Connexion - Default (avec Google)
- [ ] Connexion - Loading (spinner + disabled)
- [ ] Connexion - Error identifiants incorrects (alert rouge)
- [ ] Connexion - Error email non vérifié (alert orange)

**Total : 4 écrans**

---

### B) Inscription  
- [ ] Inscription - Default (avec Google + password strength)
- [ ] Inscription - Loading (spinner + disabled)
- [ ] Inscription - Error email existant (alert rouge)
- [ ] Inscription - Success transition (bouton vert ✓)

**Total : 4 écrans**

---

### C) Vérification Email
- [ ] Vérifier votre email - Default (première fois)
- [ ] Vérifier votre email - Email renvoyé (banner success)
- [ ] Email non vérifié - Blocage connexion (warning orange)

**Total : 3 écrans**

---

### D) Mot de passe oublié
- [ ] Mot de passe oublié - Default (simple input)
- [ ] Mot de passe oublié - Loading (spinner)
- [ ] Email envoyé - Success reset (confirmation)

**Total : 3 écrans**

---

### E) Google Sign-In
- [ ] Modal Google - Default (focus sur bouton Google)
- [ ] Modal Google - Loading (overlay + spinner)

**Total : 2 écrans**

---

## 🧩 2. COMPOSANTS RÉUTILISABLES

### Inputs
- [ ] AuthInput - Variante Default
- [ ] AuthInput - Variante Focus (border bleu + shadow)
- [ ] AuthInput - Variante Error (border rouge + bg rouge clair)
- [ ] AuthInput - Variante Disabled (bg gris + opacity)
- [ ] AuthInput - Avec icon gauche
- [ ] AuthInput - Avec icon droite (eye password)

**Properties configurées** :
- [ ] Label (text)
- [ ] Placeholder (text)
- [ ] Icon left (component)
- [ ] Icon right (component)
- [ ] State (default/focus/error/disabled)
- [ ] Error message (text)

---

### Boutons
- [ ] AuthButton - Primary Default
- [ ] AuthButton - Primary Hover
- [ ] AuthButton - Primary Active/Press
- [ ] AuthButton - Primary Loading (avec spinner)
- [ ] AuthButton - Primary Disabled
- [ ] AuthButton - Primary Success (vert temporaire)
- [ ] AuthButton - Secondary Default (outlined)
- [ ] AuthButton - Secondary Hover
- [ ] AuthButton - Google (avec logo)
- [ ] AuthButton - Google Hover

**Properties configurées** :
- [ ] Text (string)
- [ ] Icon (component)
- [ ] Icon position (left/right)
- [ ] Variant (primary/secondary/google)
- [ ] State (default/hover/active/loading/disabled/success)
- [ ] Size (small/medium/large)
- [ ] Full width (boolean)

---

### Alerts
- [ ] AlertBox - Success (vert #f0fdf4)
- [ ] AlertBox - Error (rouge #fef2f2)
- [ ] AlertBox - Warning (orange #fffbeb)
- [ ] AlertBox - Info (bleu #eff6ff)

**Properties configurées** :
- [ ] Type (success/error/warning/info)
- [ ] Title (text)
- [ ] Description (text)
- [ ] Icon (component)
- [ ] Dismissible (boolean)
- [ ] CTA button (optional)

---

### Autres composants
- [ ] InfoBanner - "Tu n'as rien reçu ?" (bloc bleu clair)
- [ ] PasswordStrengthChecker - Règles avec ✓/○
- [ ] EmailDisplay - Email stylisé (bg bleu clair)
- [ ] AuthLayout - Container principal (slots)

---

## 📐 3. DESIGN TOKENS

### Couleurs
- [ ] Couleurs principales définies (bleu #1e3a8a, orange #f97316)
- [ ] Couleurs d'état (success, error, warning, info)
- [ ] Couleurs de texte (primaire, secondaire, tertiaire)
- [ ] Couleurs de border (#d1d5db, #e5e7eb, etc.)
- [ ] Couleurs de background (#f9fafb, #eff6ff, etc.)

---

### Typographie
- [ ] Police : Inter / SF Pro / System-ui
- [ ] Titres : Bold 700 - 24-32px
- [ ] Sous-titres : Semi-bold 600 - 18-20px
- [ ] Corps : Regular 400 - 14-16px
- [ ] Small : Regular 400 - 12-14px
- [ ] Line-heights définis (1.2 pour titres, 1.6 pour texte)

---

### Espacements
- [ ] Système 8pt utilisé : 8, 16, 24, 32, 40, 48, 64px
- [ ] Vertical rhythm cohérent
- [ ] Padding containers : 48px desktop, 24px mobile
- [ ] Margin entre sections cohérent

---

### Autres tokens
- [ ] Border-radius : 6px, 8px, 16px
- [ ] Box-shadows définis (cards, focus states)
- [ ] Transitions : 150ms, 300ms (ease-in-out)

---

## 📱 4. RESPONSIVE

### Desktop (480px container)
- [ ] Tous les écrans créés en 480px width
- [ ] Padding 48px
- [ ] Inputs/Buttons 48px height
- [ ] Typographie complète (24px titres, 16px texte)

---

### Mobile (375px viewport)
- [ ] Tous les écrans adaptés mobile
- [ ] Width : 100vw - 32px
- [ ] Padding 24px
- [ ] Inputs/Buttons 44px height minimum (touch target)
- [ ] Typographie réduite (20px titres, 14px texte)
- [ ] Boutons full width
- [ ] Espacements réduits (-8px)

---

## 🎬 5. PROTOTYPE & INTERACTIONS

### Flow 1 : Inscription complète
- [ ] Connexion : Inscription → Inscription Loading → Success → Vérifier email
- [ ] Transition animée (300ms)
- [ ] Bouton "Renvoyer" → Email renvoyé (banner success)

---

### Flow 2 : Connexion normale
- [ ] Connexion Default → Loading → Home/Dashboard
- [ ] Transition simple (fade out)

---

### Flow 3 : Email non vérifié
- [ ] Connexion → Loading → Error email non vérifié
- [ ] Clic "Renvoyer email" → Vérifier email

---

### Flow 4 : Reset password
- [ ] Connexion → "Réinitialiser" → Mot de passe oublié
- [ ] Mot de passe oublié → Loading → Email envoyé
- [ ] Email envoyé → "Retour" → Connexion

---

### Flow 5 : Google Sign-In
- [ ] Connexion → "Google" → Modal loading → Home
- [ ] Ou : Inscription → "Google" → Modal loading → Home

---

### Interactions micro
- [ ] Hover states sur tous les boutons
- [ ] Focus states sur tous les inputs
- [ ] Eye icon : toggle password visibility
- [ ] Password strength : animation des règles validées
- [ ] Alert dismissible : bouton X (si applicable)
- [ ] Loading states : spinner animation

---

## ♿ 6. ACCESSIBILITÉ

### Contrastes
- [ ] Texte principal : ratio ≥ 4.5:1 (WCAG AA)
- [ ] Texte large : ratio ≥ 3:1
- [ ] Liens : ratio ≥ 4.5:1 + underline au hover
- [ ] Icons : taille minimum 16px
- [ ] Focus states : border visible (2px minimum)

---

### Touch targets (mobile)
- [ ] Tous les boutons : 44x44px minimum
- [ ] Tous les liens cliquables : 44x44px
- [ ] Espacement entre éléments cliquables : 8px minimum

---

### Lisibilité
- [ ] Font size minimum : 12px
- [ ] Line-height : 1.5 minimum pour texte
- [ ] Max-width paragraphes : 65-75 caractères
- [ ] Messages d'erreur visibles sans scroll

---

## 🎨 7. DESIGN SYSTEM

### Organisation Figma
- [ ] Page "Cover" avec description du projet
- [ ] Page "Design Tokens" (couleurs, typo, spacing)
- [ ] Page "Components" (tous les composants)
- [ ] Page "Screens - Desktop"
- [ ] Page "Screens - Mobile"
- [ ] Page "Prototype" (flows)

---

### Nommage
- [ ] Écrans : "01 - Connexion - Default"
- [ ] Composants : "AuthButton/Primary/Default"
- [ ] Couleurs : "Blue/900", "Gray/500", etc.
- [ ] Espacings : "Spacing/16", "Spacing/24"
- [ ] Nommage cohérent partout

---

### Components
- [ ] Auto-layout utilisé (flex)
- [ ] Contraintes définies (resize behavior)
- [ ] Variants créées (pas de copies manuelles)
- [ ] Properties bien nommées

---

## 📝 8. DOCUMENTATION

### Cover page
- [ ] Titre du projet
- [ ] Description du flux Auth
- [ ] Date de création
- [ ] Version
- [ ] Contact/Owner

---

### Annotations
- [ ] Mesures importantes annotées
- [ ] Interactions spéciales expliquées
- [ ] Cas d'usage des composants documentés
- [ ] Notes pour les développeurs (timings, behaviors)

---

### Guide de style
- [ ] Section couleurs avec codes hex
- [ ] Section typographie avec sizes
- [ ] Section espacements avec valeurs
- [ ] Section icons (source, taille standard)

---

## 🔍 9. MESSAGES D'ERREUR

### Messages créés et stylisés
- [ ] "Email invalide. Vérifie le format."
- [ ] "Le mot de passe doit contenir au moins 6 caractères."
- [ ] "Les mots de passe ne correspondent pas."
- [ ] "Email ou mot de passe incorrect."
- [ ] "Ton email n'est pas encore vérifié."
- [ ] "Cet email est déjà utilisé."
- [ ] "Trop de tentatives. Réessaie dans quelques minutes."
- [ ] "Problème de connexion. Vérifie ta connexion internet."
- [ ] "La connexion Google a été annulée."

---

## 🖼️ 10. ASSETS

### Icônes (20px et 24px)
- [ ] Mail / Envelope (✉️)
- [ ] Lock (🔒)
- [ ] User (👤)
- [ ] Eye / Eye-off (👁️)
- [ ] Check / Checkmark (✓)
- [ ] X / Close (❌)
- [ ] Alert Triangle (⚠️)
- [ ] Info Circle (ℹ️)
- [ ] Arrow Left (←)
- [ ] Refresh / Reload (🔄)
- [ ] Envelope-send (📧)
- [ ] Logo Google ([G] SVG officiel)
- [ ] Globe CCNTS (🌍)
- [ ] Spinner / Loader (⏳)

**Source** : Lucide Icons / Heroicons

---

### Images
- [ ] Logo CCNTS (SVG)
- [ ] Globe icon (SVG)
- [ ] Illustrations (optionnel)

---

## ✨ 11. POLISH

### Détails visuels
- [ ] Ombres cohérentes (cards, modals)
- [ ] Coins arrondis cohérents
- [ ] Alignements parfaits (grille 8pt)
- [ ] Espacements symétriques
- [ ] Hiérarchie visuelle claire

---

### Animations
- [ ] Durées définies (150ms, 300ms)
- [ ] Easing défini (ease-in-out)
- [ ] Transitions fluides
- [ ] Pas d'animations brusques

---

### Cohérence
- [ ] Même style partout (buttons, inputs)
- [ ] Même comportement hover partout
- [ ] Même système de couleurs
- [ ] Même typographie
- [ ] Même système d'espacement

---

## 🚀 12. VALIDATION FINALE

### Tests
- [ ] Tous les flows prototypés fonctionnent
- [ ] Tous les states sont visuellement distincts
- [ ] Tous les messages d'erreur sont lisibles
- [ ] Version mobile scrollable complète
- [ ] Pas d'éléments coupés
- [ ] Pas de texte tronqué

---

### Exports (optionnel)
- [ ] Composants exportables (SVG)
- [ ] Design tokens exportables (JSON)
- [ ] Icônes exportables (SVG)
- [ ] Specs exportables (PDF)

---

### Livraison
- [ ] Lien Figma partagé (view only)
- [ ] Permissions développeurs accordées
- [ ] Documentation jointe
- [ ] Fichier organisé et clean

---

## 📊 RÉSUMÉ

**Écrans totaux** : 16  
**Composants réutilisables** : 7  
**Variantes par composant** : 4-10  
**Flows interactifs** : 5  
**Versions** : Desktop + Mobile  

---

## ✅ VALIDATION FINALE

- [ ] Tous les écrans créés (16/16)
- [ ] Tous les composants créés (7/7)
- [ ] Toutes les variantes créées
- [ ] Tous les flows prototypés (5/5)
- [ ] Version mobile complète
- [ ] Documentation complète
- [ ] Accessibilité validée (WCAG AA)
- [ ] Design tokens définis
- [ ] Prêt pour développement

---

**Checklist validée le** : __________  
**Validée par** : __________  
**Prêt pour dev** : ☐ Oui ☐ Non  

---

**Projet** : CCNTS - Cabinet de Cartographie Numérique  
**Version** : 1.0  
**Date** : 3 février 2026
