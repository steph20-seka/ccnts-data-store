# 📝 Changelog - CCNTS Website

## 🔥 Version 2.1.0 - Authentification Google (Février 2026)

### 🎉 Nouveautés

#### Authentification Google
- ✅ **Connexion avec Google** ajoutée
  - Bouton "Continuer avec Google" dans les onglets Connexion et Inscription
  - Popup Google pour sélection de compte
  - Création automatique du profil Firestore
  - Logo Google officiel avec design moderne

#### Améliorations UX
- ✅ Séparateur visuel "Ou avec email" entre Google et formulaire classique
- ✅ Messages d'erreur pour Google (popup fermée, domaine non autorisé, etc.)
- ✅ Gestion automatique des utilisateurs nouveaux et existants

#### Nouveaux fichiers
- `GOOGLE_AUTH_SETUP.md` - Guide de configuration Google Sign-In

---

## 🔥 Version 2.0.0 - Migration Firebase (Février 2026)

### 🎉 Changements majeurs

#### Backend et base de données
- ✅ **Migration de Supabase vers Firebase**
  - Authentification maintenant gérée par Firebase Auth
  - Données stockées dans Firestore (NoSQL)
  - Configuration complète avec règles de sécurité

#### Nouveaux fichiers

**Configuration Firebase**
- `lib/firebaseClient.ts` - Configuration Firebase centralisée
- `lib/firestoreServices.ts` - Services pour interagir avec Firestore
- `lib/firebase.ts` - Exports centralisés

**Authentification**
- `contexts/FirebaseAuthContext.tsx` - Contexte d'authentification Firebase
- `components/FirebaseAuthModal.tsx` - Modal moderne de connexion/inscription
- Réécrit `contexts/AuthContext.tsx` - Wrapper pour compatibilité

**Configuration**
- `.firebaserc` - Configuration du projet Firebase
- `firestore.rules` - Règles de sécurité Firestore

**Documentation**
- `README.md` - Documentation principale du projet
- `FIREBASE_SETUP.md` - Guide de configuration Firebase
- `FIREBASE_SUMMARY.md` - Résumé de la migration
- `USAGE_EXAMPLES.md` - Exemples de code détaillés
- `CHANGELOG.md` - Ce fichier
- `guidelines/FirebaseMigration.md` - Guide de migration détaillé

**Assets**
- `public/favicon.svg` - Favicon CCNTS avec design géospatial
- `public/site.webmanifest` - Manifest PWA

#### Fichiers supprimés
- ❌ `lib/supabaseClient.ts`
- ❌ `contexts/SupabaseAuthContext.tsx`
- ❌ `components/SupabaseAuthModal.tsx`
- ❌ `supabase/schema.sql`

#### Composants mis à jour
- `App.tsx` - Utilise maintenant `FirebaseAuthProvider`
- `components/CourseAccessGate.tsx` - Utilise `FirebaseAuthModal`
- `components/CertificateGate.tsx` - Utilise `FirebaseAuthModal`

---

## 📋 Version 1.5.0 - Titres de page et traductions (Février 2026)

### Ajouts
- ✅ Hook personnalisé `usePageTitle` pour titres dynamiques
- ✅ Format professionnel : "CCNTS – [Nom de la page]"
- ✅ Traductions complètes en allemand (DE)
- ✅ Traductions complètes en espagnol (ES)
- ✅ Internationalisation à 100% sur toutes les pages

### Documentation
- `guidelines/PageTitleAndTranslationUpdate.md`
- `guidelines/FaviconGuide.md`

---

## 🎨 Version 1.4.0 - Design System Géospatial

### Design
- ✅ Palette de couleurs géospatiales cohérente
- ✅ Variables CSS personnalisées dans `styles/globals.css`
- ✅ Composants UI cohérents (Tailwind CSS v4)

### Documentation
- `guidelines/ColorSystem.md`

---

## 🎓 Version 1.3.0 - Académie CCNTS

### Fonctionnalités
- ✅ Système de cours avec progression
- ✅ Quiz interactifs
- ✅ Génération de certificats PDF
- ✅ Suivi de progression utilisateur
- ✅ Protection du contenu par authentification

### Cours disponibles
- Introduction à QGIS
- Analyse Sentinel-2
- Cartographie thématique
- Analyse de zones tampons
- Cartes historiques
- Google Earth Engine

---

## 🛒 Version 1.2.0 - Data Store

### Fonctionnalités
- ✅ Catalogue de 100+ villes ivoiriennes
- ✅ Filtres avancés (ville, type, format, prix)
- ✅ Système d'achat (intégration Chariow prévue)
- ✅ Téléchargement de données géospatiales

---

## 🌐 Version 1.1.0 - Internationalisation

### Langues supportées
- 🇫🇷 Français (par défaut)
- 🇬🇧 Anglais
- 🇩🇪 Allemand
- 🇪🇸 Espagnol

### Implémentation
- `lib/i18n.ts` - Configuration i18next
- Fichiers de traduction dans `/locales/`

---

## 🏠 Version 1.0.0 - Site vitrine initial

### Pages principales
- Page d'accueil avec Hero animé
- Services géospatiaux
- À propos
- Contact
- Projets

### Composants
- Header avec navigation
- Footer complet
- TopBar avec changement de langue
- Animations avec Framer Motion
- Design responsive

---

## 🔄 Structure des données Firebase

### Collections Firestore

#### `profiles`
```javascript
{
  id: string,              // UID de Firebase Auth
  email: string,
  full_name: string | null,
  created_at: timestamp,
  updated_at: timestamp
}
```

#### `course_progress`
```javascript
{
  id: string,              // {userId}_{courseId}
  user_id: string,
  course_id: string,
  percent_complete: number,
  last_module: string | null,
  updated_at: string
}
```

#### `quiz_results`
```javascript
{
  id: string,              // {userId}_{courseId}
  user_id: string,
  course_id: string,
  score: number,
  passed: boolean,
  total_questions: number,
  correct_answers: number,
  completed_at: string
}
```

#### `certificates`
```javascript
{
  certificate_id: string,  // UUID
  user_id: string,
  course_id: string,
  course_name: string,
  user_name: string,
  issued_at: string,
  verify_code: string,
  pdf_url: string | null,
  is_valid: boolean
}
```

---

## 🔐 Sécurité

### Firebase Authentication
- Email/Password activé
- Sessions persistantes
- Réinitialisation de mot de passe
- Mots de passe automatiquement hashés

### Firestore Rules
- Utilisateurs peuvent lire/écrire leurs propres données uniquement
- Certificats lisibles publiquement (pour vérification)
- Certificats immuables (pas de modification après création)

---

## 🎯 Prochaines versions prévues

### Version 2.1.0 (à venir)
- [ ] Intégration paiement Chariow pour Data Store
- [ ] Upload de certificats PDF vers Firebase Storage
- [ ] Système de notification par email
- [ ] Tableau de bord utilisateur amélioré

### Version 2.2.0 (à venir)
- [ ] Mode sombre
- [ ] Système de recherche global
- [ ] Blog/Actualités
- [ ] Forum communautaire

### Version 3.0.0 (futur)
- [ ] Application mobile (React Native)
- [ ] API publique
- [ ] Système de badges et gamification
- [ ] Intégration avec plateformes SIG externes

---

## 📞 Support

Pour toute question sur les changements ou la migration :
- Voir `FIREBASE_SETUP.md` pour la configuration
- Voir `USAGE_EXAMPLES.md` pour des exemples de code
- Consulter la documentation Firebase : https://firebase.google.com/docs

---

**Développé avec ❤️ pour CCNTS**  
Cabinet de Cartographie Numérique, de Télédétection et de Statistiques