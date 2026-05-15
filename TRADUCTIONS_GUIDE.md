# Guide Complet du Système de Traduction CCNTS

## ✅ Travaux Terminés

### 1. Extension des Fichiers de Traduction

Tous les fichiers de traduction ont été étendus avec les clés manquantes :

**Français (`src/app/locales/fr/translation.ts`)** ✅ COMPLET
- Section `common` étendue (projects, dataStore, saveChanges, account)
- Section `header` étendue (editProfile, accountSecurity, verified, notVerified, notProvided)
- Section `validation` étendue (minLength, invalidPhone)
- Nouvelle section `profile` complète (46 clés)

**Anglais (`src/app/locales/en/translation.ts`)** ✅ COMPLET
- Toutes les mêmes sections ajoutées en anglais

**Allemand (`src/app/locales/de/translation.ts`)** ✅ COMPLET
- Toutes les sections ajoutées en allemand

**Espagnol (`src/app/locales/es/translation.ts`)** ✅ COMPLET
- Toutes les sections ajoutées en espagnol

### 2. Conversion du Header

**Fichier : `src/app/components/layout/Header.tsx`** ✅ COMPLET

Tous les textes en dur ont été remplacés par des clés de traduction :
- Navigation principale (Accueil, Services, Projets, etc.)
- Boutons d'authentification (Connexion, Créer un compte)
- Menu utilisateur (Modifier le profil, Sécurité du compte, Mes cours, Mes certificats)
- États de vérification (Vérifié, Non vérifié)
- Version mobile et desktop

---

## 🔧 Travaux Restants

### 3. Conversion du Footer

**Fichier à modifier : `src/app/components/layout/Footer.tsx`**

**Étapes :**
1. Ajouter l'import en haut du fichier :
```typescript
import { useTranslation } from 'react-i18next';
```

2. Ajouter le hook dans le composant :
```typescript
export function Footer() {
  const { t } = useTranslation();
  // ... reste du code
```

3. Remplacer les textes en dur :
```typescript
// AVANT :
const navigationLinks = [
  { path: '/', label: 'Accueil' },
  { path: '/services', label: 'Services' },
  // ...
];

// APRÈS :
const navigationLinks = [
  { path: '/', label: t('common.home') },
  { path: '/', label: t('common.services') },
  { path: '/projects', label: t('common.projects') },
  { path: '/academy', label: t('common.academy') },
  { path: '/about', label: t('common.about') },
  { path: '/contact', label: t('common.contact') },
];
```

4. Remplacer les autres textes :
```typescript
// "Cabinet de Cartographie..." → t('footerExtended.aboutSection.description')
// "Excellence scientifique..." → t('footerExtended.aboutSection.tagline')
// Tous les labels de services, contact, réseaux sociaux, etc.
```

### 4. Conversion de EditProfileModal

**Fichier à modifier : `src/app/components/user/EditProfileModal.tsx`**

**Étapes :**
1. Ajouter l'import :
```typescript
import { useTranslation } from 'react-i18next';
```

2. Ajouter le hook :
```typescript
export function EditProfileModal({ isOpen, onClose }: EditProfileModalProps) {
  const { t } = useTranslation();
  // ... reste du code
```

3. Remplacer les textes en dur (exemples) :
```typescript
// "Modifier le profil" → t('profile.editProfile')
// "Photo de profil" → t('profile.profilePhoto')
// "Choisir une photo" → t('profile.choosePhoto')
// "Remplacer la photo" → t('profile.replacePhoto')
// "Supprimer la photo" → t('profile.removePhoto')
// "Téléchargement de la photo…" → t('profile.uploadingPhoto')
// "Suppression de la photo…" → t('profile.deletingPhoto')
// "Enregistrement en cours…" → t('profile.savingChanges')
// "Profil mis à jour avec succès" → t('profile.profileUpdated')
// "Informations principales" → t('profile.mainInfo')
// "Informations complémentaires" → t('profile.additionalInfo')
// "Nom complet" → t('profile.fullName')
// "Prénom Nom" → t('profile.fullNamePlaceholder')
// "Adresse email" → t('profile.email')
// "Modifiable dans la section Sécurité du compte" → t('profile.emailNotEditable')
// "Téléphone" → t('profile.phone')
// "Date de naissance" → t('profile.birthdate')
// "Adresse" → t('profile.address')
// "Ville / Commune" → t('profile.city')
// "Pays" → t('profile.country')
// "Localisation / Adresse géographique" → t('profile.location')
// "Enregistrer les modifications" → t('common.saveChanges')
// "Annuler" → t('common.cancel')

// Messages d'erreur :
// "Format non accepté..." → t('profile.photoFormatError')
// "Fichier trop volumineux..." → t('profile.photoSizeError', { size: MAX_SIZE_MB })
// etc.
```

### 5. Conversion des Pages

**Fichiers à modifier :**
- `src/app/pages/HomePage.tsx`
- `src/app/pages/ServicesPage.tsx`
- `src/app/pages/AboutPage.tsx`
- `src/app/pages/ContactPage.tsx`
- `src/app/pages/AcademyPage.tsx`
- `src/app/pages/DataStorePage.tsx`

**Pour chaque page :**
1. Ajouter `import { useTranslation } from 'react-i18next';`
2. Ajouter `const { t } = useTranslation();`
3. Remplacer tous les textes en dur par les clés correspondantes

**Exemples de clés disponibles :**

**HomePage :**
- `t('home.hero.title')`
- `t('home.hero.subtitle')`
- `t('home.hero.cta')`
- `t('home.expertises.title')`
- etc.

**ServicesPage :**
- `t('servicesPage.title')`
- `t('servicesPage.subtitle')`
- `t('servicesPage.cartography.title')`
- etc.

**AboutPage :**
- `t('aboutPage.title')`
- `t('aboutPage.subtitle')`
- `t('aboutPage.mission.title')`
- etc.

**ContactPage :**
- `t('contactPage.title')`
- `t('contactPage.form.name')`
- `t('contactPage.form.email')`
- etc.

**DataStorePage :**
- `t('dataStore.title')`
- `t('dataStore.subtitle')`
- `t('dataStore.filters.searchPlaceholder')`
- `t('dataStore.buyOnChariow')`
- etc.

### 6. Conversion des Autres Composants

**Composants potentiellement concernés :**
- `src/app/components/user/AccountSecurityModal.tsx`
- `src/app/components/auth/*` (pages d'authentification)
- Tous les composants qui affichent des textes en dur

**Méthode :**
1. Chercher les textes en dur dans les composants
2. Vérifier si la clé de traduction existe dans les fichiers de traduction
3. Si la clé n'existe pas, l'ajouter dans les 4 fichiers de traduction (fr, en, de, es)
4. Remplacer le texte en dur par `t('cle.de.traduction')`

---

## 📝 Clés de Traduction Principales Disponibles

### Common
- `common.home`, `common.services`, `common.academy`, `common.about`, `common.contact`
- `common.projects`, `common.dataStore`
- `common.login`, `common.logout`, `common.signup`
- `common.save`, `common.saveChanges`, `common.cancel`, `common.confirm`
- `common.delete`, `common.edit`, `common.close`, `common.search`

### Header
- `header.welcome`, `header.myAccount`, `header.myProfile`
- `header.myCourses`, `header.myCertificates`, `header.settings`
- `header.editProfile`, `header.accountSecurity`
- `header.verified`, `header.notVerified`, `header.notProvided`

### Profile
- `profile.editProfile`, `profile.updateInfo`, `profile.profilePhoto`
- `profile.choosePhoto`, `profile.replacePhoto`, `profile.removePhoto`
- `profile.uploadingPhoto`, `profile.deletingPhoto`, `profile.savingChanges`
- `profile.profileUpdated`, `profile.profileUpdateError`
- `profile.mainInfo`, `profile.additionalInfo`
- `profile.fullName`, `profile.email`, `profile.phone`
- `profile.birthdate`, `profile.address`, `profile.city`, `profile.country`, `profile.location`
- `profile.accountSecurity`, `profile.securitySettings`
- `profile.errors.permissionDenied`, `profile.errors.networkError`, etc.

### Auth
- `auth.connection`, `auth.registration`, `auth.forgotPassword`
- `auth.email`, `auth.password`, `auth.confirmPassword`
- `auth.signIn`, `auth.signUp`
- `auth.errors.invalidCredentials`, `auth.errors.emailAlreadyUsed`, etc.

### Validation
- `validation.required`, `validation.invalidEmail`
- `validation.passwordTooShort`, `validation.passwordMismatch`
- `validation.minLength`, `validation.invalidPhone`

### Messages
- `messages.welcomeBack`, `messages.updateSuccess`
- `messages.networkError`, `messages.tryAgainLater`

---

## 🔍 Recherche de Textes en Dur

Pour trouver les textes en dur restants, utilisez :

```bash
# Rechercher les chaînes en français
grep -r "Accueil\|Services\|Académie\|Connexion\|profil\|compte" src/app/components src/app/pages --include="*.tsx" --include="*.ts"

# Rechercher les patterns de textes non traduits
grep -r "\"[A-ZÀ-Ü][a-zà-ü ]\+\"" src/app/components src/app/pages --include="*.tsx"
```

---

## ✅ Test du Système de Traduction

### 1. Vérification Locale

```typescript
// Dans n'importe quel composant, testez :
const { t, i18n } = useTranslation();

console.log('Langue actuelle :', i18n.language);
console.log('Traduction test :', t('common.home'));
```

### 2. Changement de Langue

Le composant `LanguageSwitcher` permet de changer la langue.
La langue est sauvegardée dans `localStorage` sous la clé `ccnts_language`.

### 3. Vérification Visuelle

1. Démarrez l'application
2. Changez de langue via le menu langue
3. Vérifiez que TOUT le site change de langue :
   - Header (navigation, menus)
   - Footer
   - Pages (titres, descriptions, boutons)
   - Modals (profil, sécurité)
   - Messages d'erreur et de succès
   - Formulaires et placeholders

### 4. Points de Contrôle

- [ ] Header : Navigation, menus utilisateur
- [ ] Footer : Liens, réseaux sociaux, copyright
- [ ] Page d'accueil : Hero, expertises, témoignages
- [ ] Page Services : Titres, descriptions
- [ ] Page À propos : Mission, vision, valeurs
- [ ] Page Contact : Formulaire, informations
- [ ] Page Académie : Cours, certificats
- [ ] Page Data Store : Filtres, catégories, prix
- [ ] Modal Profil : Tous les champs et messages
- [ ] Modal Sécurité : Changement de mot de passe
- [ ] Pages d'authentification : Login, signup, forgot password
- [ ] Messages d'erreur et de succès

---

## 🚨 Problèmes Courants

### 1. Traduction non affichée

**Cause :** Clé de traduction incorrecte ou manquante

**Solution :**
```typescript
// Vérifiez la clé dans les fichiers de traduction
// src/app/locales/fr/translation.ts
// src/app/locales/en/translation.ts
// src/app/locales/de/translation.ts
// src/app/locales/es/translation.ts
```

### 2. Langue ne change pas

**Cause :** Composant non re-rendu après changement de langue

**Solution :**
```typescript
// Assurez-vous d'utiliser le hook useTranslation
const { t } = useTranslation();
// Le composant se re-rendra automatiquement au changement de langue
```

### 3. Traduction avec variables

**Exemple :**
```typescript
// Dans le fichier de traduction :
"photoSizeError": "Fichier trop volumineux (max {{size}} Mo)."

// Dans le composant :
t('profile.photoSizeError', { size: MAX_SIZE_MB })
```

---

## 📚 Ressources

- Documentation i18next : https://www.i18next.com/
- Documentation react-i18next : https://react.i18next.com/
- Fichier de configuration : `src/app/lib/i18n.ts`
- Langues supportées : Français (fr), English (en), Deutsch (de), Español (es)

---

## 🎯 Résumé des Modifications

### Fichiers Modifiés ✅
1. `src/app/locales/fr/translation.ts` - Étendu avec nouvelles clés
2. `src/app/locales/en/translation.ts` - Étendu avec nouvelles clés
3. `src/app/locales/de/translation.ts` - Étendu avec nouvelles clés
4. `src/app/locales/es/translation.ts` - Étendu avec nouvelles clés
5. `src/app/components/layout/Header.tsx` - Converti pour utiliser les traductions

### Fichiers à Modifier 🔧
1. `src/app/components/layout/Footer.tsx`
2. `src/app/components/user/EditProfileModal.tsx`
3. `src/app/pages/HomePage.tsx`
4. `src/app/pages/ServicesPage.tsx`
5. `src/app/pages/AboutPage.tsx`
6. `src/app/pages/ContactPage.tsx`
7. `src/app/pages/AcademyPage.tsx`
8. `src/app/pages/DataStorePage.tsx`
9. Autres composants avec textes en dur

---

## ✨ Prochaines Étapes

1. **Convertir Footer.tsx** (suivre les instructions ci-dessus)
2. **Convertir EditProfileModal.tsx** (suivre les instructions ci-dessus)
3. **Convertir toutes les pages** une par une
4. **Tester le changement de langue** sur chaque page convertie
5. **Rechercher et corriger** les textes en dur restants
6. **Test final** : Parcourir tout le site dans les 4 langues

---

Bonne continuation ! 🚀
