# 🔐 Guide d'Utilisation - Système d'Authentification Firebase CCNTS

## 📋 Table des matières
1. [Pour les utilisateurs](#pour-les-utilisateurs)
2. [Pour les développeurs](#pour-les-développeurs)
3. [Configuration Firebase](#configuration-firebase)
4. [Dépannage](#dépannage)

---

## 👥 Pour les Utilisateurs

### Comment créer un compte

1. **Accédez à la page d'inscription**
   - Cliquez sur "Créer un compte" depuis la page d'accueil
   - Ou allez directement sur `/signup`

2. **Remplissez le formulaire**
   - Nom complet (obligatoire)
   - Email (obligatoire)
   - Téléphone (optionnel)
   - Localisation (optionnel)
   - Mot de passe (minimum 8 caractères)
   - Confirmation du mot de passe

3. **Créez un mot de passe fort**
   - Au moins 8 caractères
   - Une lettre majuscule
   - Une lettre minuscule
   - Un chiffre
   - Un caractère spécial
   
   L'indicateur de force vous guide en temps réel.

4. **Validez votre email**
   - Un email de vérification est envoyé automatiquement
   - Vérifiez votre boîte de réception (et spam)
   - Cliquez sur le lien dans l'email
   - Revenez sur le site et cliquez "J'ai vérifié mon email"

5. **Accédez à votre espace**
   - Une fois vérifié, vous pouvez accéder à tous les cours
   - Votre progression est sauvegardée automatiquement

---

### Comment se connecter

1. **Page de connexion**
   - Allez sur `/login`
   - Entrez votre email et mot de passe
   - Cliquez "Se connecter"

2. **Mot de passe oublié ?**
   - Cliquez sur "Oublié ?" sous le champ mot de passe
   - Entrez votre email
   - Cliquez sur le lien reçu par email
   - Créez un nouveau mot de passe

---

### Sécurité de votre compte

#### ✅ Bonnes pratiques
- Utilisez un mot de passe unique
- Ne partagez jamais votre mot de passe
- Déconnectez-vous sur les ordinateurs partagés
- Vérifiez l'URL : `https://ccnts.com`

#### 🔒 Protections en place
- Cryptage SSL 256-bit
- Authentification Firebase sécurisée
- Vérification email obligatoire
- Limitation des tentatives de connexion
- Aucune donnée partagée avec des tiers

---

## 👨‍💻 Pour les Développeurs

### Architecture du système

```
📁 /src/app
├── 📁 components/auth/
│   ├── PasswordStrengthIndicator.tsx  # Indicateur de force
│   ├── SecurityBadge.tsx              # Badge de sécurité
│   └── SecureLoadingState.tsx         # État de chargement
├── 📁 contexts/
│   ├── FirebaseAuthContext.tsx        # Context Firebase
│   └── AuthContext.tsx                # Wrapper Auth
├── 📁 pages/
│   ├── SignUpPage.tsx                 # Inscription
│   ├── LoginPage.tsx                  # Connexion
│   ├── VerifyEmailPage.tsx            # Vérification email
│   ├── ForgotPasswordPage.tsx         # Mot de passe oublié
│   └── ResetPasswordPage.tsx          # Redirection
└── 📁 lib/
    ├── firebaseClient.ts              # Config Firebase
    └── firestoreServices.ts           # Services Firestore
```

---

### Utilisation des composants

#### PasswordStrengthIndicator
```tsx
import { PasswordStrengthIndicator } from '../components/auth/PasswordStrengthIndicator';

<PasswordStrengthIndicator password={password} />
```

#### SecurityBadge
```tsx
import { SecurityBadge } from '../components/auth/SecurityBadge';

// Badge complet
<SecurityBadge />

// Badge compact
<SecurityBadge variant="compact" />
```

#### SecureLoadingState
```tsx
import { SecureLoadingState } from '../components/auth/SecureLoadingState';

if (loading) {
  return <SecureLoadingState message="Vérification..." />;
}
```

---

### Utilisation des hooks

#### useFirebaseAuth
```tsx
import { useFirebaseAuth } from '../contexts/FirebaseAuthContext';

const { 
  user, 
  loading,
  signUp,
  signIn,
  signOut,
  sendVerificationEmail,
  checkEmailVerified,
  reloadUser
} = useFirebaseAuth();

// Inscription
const { error } = await signUp(email, password, fullName);

// Connexion
const { error } = await signIn(email, password);

// Envoyer email de vérification
const { error } = await sendVerificationEmail();

// Vérifier si email est vérifié
const isVerified = await checkEmailVerified();

// Recharger l'utilisateur
await reloadUser();
```

#### useAuth (Wrapper)
```tsx
import { useAuth } from '../contexts/AuthContext';

const { 
  user,
  login,
  signup,
  logout,
  isAuthenticated
} = useAuth();

// Connexion avec gestion d'erreur
const result = await login(email, password);
if (result.success) {
  // Succès
} else {
  // result.error contient le message d'erreur en français
}

// Inscription avec gestion d'erreur
const result = await signup({ fullName, email, password });
if (result.success) {
  // Succès
} else {
  // result.error contient le message d'erreur
}
```

---

### Gestion des erreurs

Tous les codes d'erreur Firebase sont traduits en français :

```typescript
// Exemples de traductions
'auth/invalid-credential' → "Email ou mot de passe incorrect."
'auth/email-already-in-use' → "Cette adresse email est déjà utilisée."
'auth/weak-password' → "Le mot de passe est trop faible."
'auth/too-many-requests' → "Trop de tentatives. Veuillez réessayer plus tard."
'auth/network-request-failed' → "Erreur de connexion réseau."
```

---

### Routes protégées

Pour protéger une route et exiger la vérification email :

```tsx
import { ProtectedRoute } from './components/ProtectedRoute';

<Route
  path="/my-courses"
  element={
    <ProtectedRoute requireEmailVerified={true}>
      <MyCoursesPage />
    </ProtectedRoute>
  }
/>
```

---

## ⚙️ Configuration Firebase

### 1. Console Firebase

1. **Activer Authentication**
   ```
   Authentication → Sign-in method → Email/Password → Enable
   ```

2. **Configurer les templates d'email**
   ```
   Authentication → Templates → 
   - Verification email
   - Password reset
   ```

3. **Domaines autorisés**
   ```
   Authentication → Settings → Authorized domains
   Ajouter : votre-domaine.com
   ```

4. **Firestore Database**
   ```
   Firestore Database → Créer base de données
   Mode : Production
   Règles : Voir firestore.rules
   ```

### 2. Variables d'environnement

Le fichier `/src/app/lib/firebaseClient.ts` contient déjà la configuration.

Pour la production, utilisez des variables d'environnement :

```env
VITE_FIREBASE_API_KEY=votre_api_key
VITE_FIREBASE_AUTH_DOMAIN=votre_auth_domain
VITE_FIREBASE_PROJECT_ID=votre_project_id
VITE_FIREBASE_STORAGE_BUCKET=votre_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=votre_sender_id
VITE_FIREBASE_APP_ID=votre_app_id
```

### 3. Règles Firestore

Le fichier `/src/app/firestore.rules` contient les règles de sécurité.

Déployer les règles :
```bash
firebase deploy --only firestore:rules
```

---

## 🔧 Dépannage

### Problème : Email de vérification non reçu

**Solutions :**
1. Vérifier le dossier spam
2. Attendre 5-10 minutes
3. Cliquer sur "Renvoyer l'email"
4. Vérifier que l'email est correct
5. Vérifier les templates dans Firebase Console

---

### Problème : "Too many requests"

**Cause :** Trop de tentatives de connexion/inscription

**Solution :** 
- Attendre 15-30 minutes
- Firebase limite automatiquement pour prévenir les abus

---

### Problème : Redirection infinie vers /verify-email

**Cause :** L'utilisateur n'a pas vérifié son email

**Solution :**
1. Vérifier l'email
2. Cliquer sur "J'ai vérifié mon email"
3. Si toujours bloqué, se déconnecter et reconnecter

---

### Problème : Erreur "auth/operation-not-allowed"

**Cause :** Email/Password non activé dans Firebase

**Solution :**
1. Aller dans Firebase Console
2. Authentication → Sign-in method
3. Activer "Email/Password"

---

### Problème : Toast ne s'affiche pas

**Vérifications :**
1. Le `<Toaster />` est bien dans App.tsx
2. Import correct : `import { toast } from 'sonner@2.0.3'`
3. Pas de conflit avec d'autres librairies de toast

---

## 📚 Ressources

### Documentation officielle
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Cloud Firestore](https://firebase.google.com/docs/firestore)
- [Motion (Framer Motion)](https://motion.dev/)
- [Sonner](https://sonner.emilkowal.ski/)

### Fichiers de référence
- `/src/app/FIREBASE_AUTH_ENTERPRISE.md` - Documentation complète
- `/src/app/FIREBASE_SETUP.md` - Setup Firebase
- `/src/app/firestore.rules` - Règles de sécurité

---

## 🎯 Checklist de déploiement

Avant de mettre en production :

- [ ] Activer Email/Password dans Firebase Console
- [ ] Configurer les templates d'email
- [ ] Ajouter le domaine de production aux domaines autorisés
- [ ] Déployer les règles Firestore
- [ ] Tester le parcours complet :
  - [ ] Inscription
  - [ ] Réception email de vérification
  - [ ] Vérification email
  - [ ] Connexion
  - [ ] Mot de passe oublié
  - [ ] Réinitialisation mot de passe
- [ ] Vérifier les analytics Firebase
- [ ] Configurer les alertes de sécurité
- [ ] Activer reCAPTCHA (optionnel)

---

## 🆘 Support

En cas de problème :

1. **Vérifier les logs Firebase Console**
   - Authentication → Users
   - Firestore → Data
   
2. **Console navigateur**
   - Ouvrir DevTools (F12)
   - Onglet Console
   - Chercher les erreurs en rouge

3. **Contact développeur**
   - Email : dev@ccnts.com
   - Documentation : /src/app/FIREBASE_AUTH_ENTERPRISE.md

---

**Version** : 1.0  
**Dernière mise à jour** : Mai 2026  
**Statut** : ✅ Production Ready
