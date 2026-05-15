# 🔥 Migration Firebase - CCNTS

## ✅ Implémentation terminée

Le site CCNTS utilise maintenant **Firebase** au lieu de Supabase pour l'authentification et le stockage des données.

---

## 📦 Fichiers créés

### 1. Configuration Firebase
**Fichier** : `/lib/firebaseClient.ts`

Contient :
- Configuration Firebase avec vos credentials
- Initialisation des services : Auth, Firestore, Storage
- Types TypeScript pour les données (Profile, CourseProgress, QuizResult, Certificate)

### 2. Contexte d'authentification Firebase
**Fichier** : `/contexts/FirebaseAuthContext.tsx`

Fonctionnalités :
- `signUp(email, password, fullName)` - Créer un compte
- `signIn(email, password)` - Se connecter
- `signOut()` - Se déconnecter
- `resetPassword(email)` - Réinitialiser le mot de passe
- `updatePassword(newPassword)` - Changer le mot de passe
- Gestion automatique de la session utilisateur

### 3. Services Firestore
**Fichier** : `/lib/firestoreServices.ts`

Fonctions disponibles :
- `getUserProfile(userId)` - Récupérer le profil utilisateur
- `getCourseProgress(userId, courseId)` - Progression du cours
- `updateCourseProgress(userId, courseId, percent, lastModule)` - Mettre à jour la progression
- `getQuizResult(userId, courseId)` - Résultat du quiz
- `saveQuizResult(userId, courseId, score, passed, total, correct)` - Sauvegarder le résultat
- `canGenerateCertificate(userId, courseId, requiresQuiz)` - Vérifier l'éligibilité au certificat
- `saveCertificate(...)` - Sauvegarder un certificat
- `getUserCertificates(userId)` - Liste des certificats de l'utilisateur
- `verifyCertificate(verifyCode)` - Vérifier un certificat par code

### 4. Modal d'authentification Firebase
**Fichier** : `/components/FirebaseAuthModal.tsx`

Composant React avec :
- Onglet Connexion
- Onglet Inscription (avec indicateur de force du mot de passe)
- Onglet Réinitialisation du mot de passe
- Messages d'erreur en français
- Interface utilisateur moderne avec Tailwind CSS

### 5. Wrapper de compatibilité
**Fichier** : `/contexts/AuthContext.tsx` (réécrit)

Wrapper autour de `FirebaseAuthContext` pour maintenir la compatibilité avec les composants existants qui utilisent l'ancien `useAuth()`.

---

## 🗑️ Fichiers supprimés

- `/lib/supabaseClient.ts`
- `/contexts/SupabaseAuthContext.tsx`
- `/components/SupabaseAuthModal.tsx`
- `/supabase/schema.sql`

**Note** : Les fichiers `/supabase/functions/server/*` sont protégés et n'ont pas pu être supprimés automatiquement.

---

## 🔥 Structure Firestore

### Collections Firebase

#### 1. **profiles**
Document ID : `{userId}`
```json
{
  "id": "string",
  "email": "string",
  "full_name": "string | null",
  "created_at": "timestamp",
  "updated_at": "timestamp"
}
```

#### 2. **course_progress**
Document ID : `{userId}_{courseId}`
```json
{
  "id": "string",
  "user_id": "string",
  "course_id": "string",
  "percent_complete": "number",
  "last_module": "string | null",
  "updated_at": "string"
}
```

#### 3. **quiz_results**
Document ID : `{userId}_{courseId}`
```json
{
  "id": "string",
  "user_id": "string",
  "course_id": "string",
  "score": "number",
  "passed": "boolean",
  "total_questions": "number",
  "correct_answers": "number",
  "completed_at": "string"
}
```

#### 4. **certificates**
Document ID : `{certificateId}`
```json
{
  "certificate_id": "string",
  "user_id": "string",
  "course_id": "string",
  "course_name": "string",
  "user_name": "string",
  "issued_at": "string",
  "verify_code": "string",
  "pdf_url": "string | null",
  "is_valid": "boolean"
}
```

---

## 🔒 Configuration des règles de sécurité Firebase

**IMPORTANT** : Vous devez configurer les règles de sécurité Firestore dans la console Firebase pour protéger vos données.

### Règles recommandées

Allez dans **Firebase Console** > **Firestore Database** > **Règles** et ajoutez :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Profils utilisateur
    match /profiles/{userId} {
      // Lecture : l'utilisateur peut lire son propre profil
      allow read: if request.auth != null && request.auth.uid == userId;
      
      // Écriture : l'utilisateur peut créer/modifier son propre profil
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Progression des cours
    match /course_progress/{progressId} {
      // Lecture : l'utilisateur peut lire sa propre progression
      allow read: if request.auth != null && 
                     request.auth.uid == resource.data.user_id;
      
      // Écriture : l'utilisateur peut modifier sa propre progression
      allow write: if request.auth != null && 
                      request.auth.uid == request.resource.data.user_id;
    }
    
    // Résultats des quiz
    match /quiz_results/{quizId} {
      // Lecture : l'utilisateur peut lire ses propres résultats
      allow read: if request.auth != null && 
                     request.auth.uid == resource.data.user_id;
      
      // Écriture : l'utilisateur peut créer/modifier ses propres résultats
      allow write: if request.auth != null && 
                      request.auth.uid == request.resource.data.user_id;
    }
    
    // Certificats
    match /certificates/{certId} {
      // Lecture : tout le monde peut lire (pour vérification publique)
      allow read: if true;
      
      // Écriture : seulement l'utilisateur propriétaire
      allow create: if request.auth != null && 
                       request.auth.uid == request.resource.data.user_id;
      
      // Modification/Suppression : interdit (certificats immuables)
      allow update, delete: if false;
    }
  }
}
```

---

## 🚀 Utilisation dans le code

### Authentification

```typescript
import { useFirebaseAuth } from '../contexts/FirebaseAuthContext';

function MyComponent() {
  const { user, signIn, signUp, signOut } = useFirebaseAuth();
  
  // Se connecter
  const handleLogin = async () => {
    const { error } = await signIn(email, password);
    if (!error) {
      console.log('Connecté !');
    }
  };
  
  // Créer un compte
  const handleSignup = async () => {
    const { error } = await signUp(email, password, fullName);
    if (!error) {
      console.log('Compte créé !');
    }
  };
  
  // Se déconnecter
  const handleLogout = async () => {
    await signOut();
  };
  
  return <div>Email: {user?.email}</div>;
}
```

### Sauvegarder des données Firestore

```typescript
import { updateCourseProgress, saveQuizResult } from '../lib/firestoreServices';

// Mettre à jour la progression
await updateCourseProgress(userId, 'qgis-intro', 75, 'module-3');

// Sauvegarder un résultat de quiz
await saveQuizResult(userId, 'qgis-intro', 85, true, 20, 17);
```

### Récupérer des données

```typescript
import { getUserProfile, getCourseProgress, getUserCertificates } from '../lib/firestoreServices';

// Profil utilisateur
const profile = await getUserProfile(userId);

// Progression d'un cours
const progress = await getCourseProgress(userId, 'qgis-intro');

// Certificats de l'utilisateur
const certificates = await getUserCertificates(userId);
```

---

## ⚠️ Sécurité

### Credentials exposés
Les credentials Firebase (apiKey, etc.) sont **visibles dans le code source** car ils sont dans le frontend. Ce n'est **pas un problème de sécurité** si vous configurez correctement les règles Firestore.

### Protection des données
- ✅ Les règles Firestore contrôlent qui peut lire/écrire les données
- ✅ Firebase Auth sécurise l'authentification
- ✅ Les mots de passe sont automatiquement hashés par Firebase
- ⚠️ **IMPORTANT** : Configurez les règles Firestore comme indiqué ci-dessus

### Domaines autorisés
Dans **Firebase Console** > **Authentication** > **Settings** > **Authorized domains**, ajoutez :
- `localhost` (pour développement)
- Votre domaine de production (ex: `ccnts.com`)

---

## 📊 Console Firebase

Pour gérer vos données :
1. Allez sur [Firebase Console](https://console.firebase.google.com/)
2. Sélectionnez le projet **ccnts-d3772**
3. Utilisez les sections :
   - **Authentication** : Voir les utilisateurs inscrits
   - **Firestore Database** : Voir/modifier les données
   - **Storage** : Gérer les fichiers uploadés (certificats PDF, etc.)

---

## ✅ Prochaines étapes recommandées

1. **Tester l'authentification**
   - Créer un compte
   - Se connecter
   - Réinitialiser le mot de passe

2. **Configurer les règles Firestore**
   - Copier les règles ci-dessus dans la console Firebase
   - Tester que les utilisateurs ne peuvent accéder qu'à leurs propres données

3. **Mettre à jour les composants**
   - Remplacer `AuthModal` par `FirebaseAuthModal` dans les pages
   - Utiliser `firestoreServices` pour sauvegarder les données

4. **Activer Firebase Storage** (optionnel)
   - Pour stocker les certificats PDF
   - Configurer les règles de sécurité Storage

---

## 🆘 Support

En cas de problème :
- Vérifier la console Firebase pour les erreurs
- Vérifier les règles Firestore
- Consulter la [documentation Firebase](https://firebase.google.com/docs)
