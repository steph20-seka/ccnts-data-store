# 📘 Exemples d'utilisation - Firebase CCNTS

Ce guide montre comment utiliser Firebase dans votre application CCNTS.

---

## 🔐 Authentification

### Se connecter avec email/password

```typescript
import { useFirebaseAuth } from './contexts/FirebaseAuthContext';
import { toast } from 'sonner@2.0.3';

function LoginButton() {
  const { signIn } = useFirebaseAuth();
  
  const handleLogin = async () => {
    const { error } = await signIn('user@example.com', 'password123');
    
    if (error) {
      toast.error('Erreur de connexion', {
        description: error.message
      });
    } else {
      toast.success('Connecté avec succès !');
    }
  };
  
  return <button onClick={handleLogin}>Se connecter</button>;
}
```

### Créer un compte

```typescript
import { useFirebaseAuth } from './contexts/FirebaseAuthContext';

function SignupButton() {
  const { signUp } = useFirebaseAuth();
  
  const handleSignup = async () => {
    const { error } = await signUp(
      'newuser@example.com',
      'SecurePassword123!',
      'Jean Dupont' // Nom complet optionnel
    );
    
    if (!error) {
      console.log('Compte créé !');
    }
  };
  
  return <button onClick={handleSignup}>Créer un compte</button>;
}
```

### Vérifier si l'utilisateur est connecté

```typescript
import { useFirebaseAuth } from './contexts/FirebaseAuthContext';

function UserProfile() {
  const { user, loading } = useFirebaseAuth();
  
  if (loading) {
    return <div>Chargement...</div>;
  }
  
  if (!user) {
    return <div>Non connecté</div>;
  }
  
  return (
    <div>
      <p>Email : {user.email}</p>
      <p>Nom : {user.displayName}</p>
      <p>ID : {user.uid}</p>
    </div>
  );
}
```

### Se déconnecter

```typescript
import { useFirebaseAuth } from './contexts/FirebaseAuthContext';

function LogoutButton() {
  const { signOut } = useFirebaseAuth();
  
  return <button onClick={signOut}>Se déconnecter</button>;
}
```

### Réinitialiser le mot de passe

```typescript
import { useFirebaseAuth } from './contexts/FirebaseAuthContext';

function ResetPasswordButton() {
  const { resetPassword } = useFirebaseAuth();
  
  const handleReset = async () => {
    const { error } = await resetPassword('user@example.com');
    
    if (!error) {
      alert('Email de réinitialisation envoyé !');
    }
  };
  
  return <button onClick={handleReset}>Mot de passe oublié</button>;
}
```

---

## 💾 Firestore - Sauvegarder et lire des données

### Sauvegarder la progression d'un cours

```typescript
import { updateCourseProgress } from './lib/firestoreServices';
import { useFirebaseAuth } from './contexts/FirebaseAuthContext';

function CourseProgressTracker() {
  const { user } = useFirebaseAuth();
  
  const saveProgress = async () => {
    if (!user) return;
    
    await updateCourseProgress(
      user.uid,              // ID utilisateur
      'qgis-intro',          // ID du cours
      75,                    // Pourcentage de complétion (0-100)
      'module-3'             // Dernier module visité
    );
    
    console.log('Progression sauvegardée !');
  };
  
  return <button onClick={saveProgress}>Sauvegarder ma progression</button>;
}
```

### Lire la progression d'un cours

```typescript
import { useEffect, useState } from 'react';
import { getCourseProgress } from './lib/firestoreServices';
import { useFirebaseAuth } from './contexts/FirebaseAuthContext';

function MyProgress() {
  const { user } = useFirebaseAuth();
  const [progress, setProgress] = useState(null);
  
  useEffect(() => {
    if (!user) return;
    
    async function loadProgress() {
      const data = await getCourseProgress(user.uid, 'qgis-intro');
      setProgress(data);
    }
    
    loadProgress();
  }, [user]);
  
  if (!progress) {
    return <div>Aucune progression</div>;
  }
  
  return (
    <div>
      <p>Cours : qgis-intro</p>
      <p>Progression : {progress.percent_complete}%</p>
      <p>Dernier module : {progress.last_module}</p>
    </div>
  );
}
```

### Sauvegarder un résultat de quiz

```typescript
import { saveQuizResult } from './lib/firestoreServices';
import { useFirebaseAuth } from './contexts/FirebaseAuthContext';

function QuizSubmit() {
  const { user } = useFirebaseAuth();
  
  const submitQuiz = async () => {
    if (!user) return;
    
    const totalQuestions = 20;
    const correctAnswers = 17;
    const score = (correctAnswers / totalQuestions) * 100; // 85%
    const passed = score >= 70; // Seuil de réussite : 70%
    
    await saveQuizResult(
      user.uid,
      'qgis-intro',
      score,
      passed,
      totalQuestions,
      correctAnswers
    );
    
    if (passed) {
      console.log('Bravo ! Quiz réussi !');
    }
  };
  
  return <button onClick={submitQuiz}>Soumettre le quiz</button>;
}
```

### Vérifier si l'utilisateur peut obtenir un certificat

```typescript
import { canGenerateCertificate } from './lib/firestoreServices';
import { useFirebaseAuth } from './contexts/FirebaseAuthContext';

function CertificateButton() {
  const { user } = useFirebaseAuth();
  
  const checkEligibility = async () => {
    if (!user) return;
    
    const eligible = await canGenerateCertificate(
      user.uid,
      'qgis-intro',
      true  // true = quiz requis, false = pas de quiz
    );
    
    if (eligible) {
      console.log('✅ Éligible au certificat !');
    } else {
      console.log('❌ Terminez le cours et réussissez le quiz');
    }
  };
  
  return <button onClick={checkEligibility}>Vérifier mon éligibilité</button>;
}
```

### Sauvegarder un certificat

```typescript
import { saveCertificate } from './lib/firestoreServices';
import { useFirebaseAuth } from './contexts/FirebaseAuthContext';

function GenerateCertificate() {
  const { user } = useFirebaseAuth();
  
  const generate = async () => {
    if (!user) return;
    
    const certificateId = `CERT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const verifyCode = Math.random().toString(36).substr(2, 12).toUpperCase();
    
    await saveCertificate(
      certificateId,
      user.uid,
      'qgis-intro',
      'Introduction à QGIS',
      user.displayName || user.email,
      verifyCode,
      'https://example.com/cert.pdf' // URL du PDF (optionnel)
    );
    
    console.log(`Certificat généré ! Code : ${verifyCode}`);
  };
  
  return <button onClick={generate}>Générer mon certificat</button>;
}
```

### Récupérer tous les certificats de l'utilisateur

```typescript
import { useEffect, useState } from 'react';
import { getUserCertificates } from './lib/firestoreServices';
import { useFirebaseAuth } from './contexts/FirebaseAuthContext';

function MyCertificates() {
  const { user } = useFirebaseAuth();
  const [certificates, setCertificates] = useState([]);
  
  useEffect(() => {
    if (!user) return;
    
    async function loadCertificates() {
      const certs = await getUserCertificates(user.uid);
      setCertificates(certs);
    }
    
    loadCertificates();
  }, [user]);
  
  return (
    <div>
      <h2>Mes certificats ({certificates.length})</h2>
      {certificates.map((cert) => (
        <div key={cert.certificate_id}>
          <p>Cours : {cert.course_name}</p>
          <p>Date : {new Date(cert.issued_at).toLocaleDateString()}</p>
          <p>Code : {cert.verify_code}</p>
        </div>
      ))}
    </div>
  );
}
```

### Vérifier un certificat par code

```typescript
import { verifyCertificate } from './lib/firestoreServices';

function VerifyCertificate() {
  const verify = async () => {
    const code = 'ABC123XYZ789'; // Code saisi par l'utilisateur
    
    const cert = await verifyCertificate(code);
    
    if (cert) {
      console.log('✅ Certificat valide !');
      console.log(`Émis pour : ${cert.user_name}`);
      console.log(`Cours : ${cert.course_name}`);
    } else {
      console.log('❌ Certificat invalide ou introuvable');
    }
  };
  
  return <button onClick={verify}>Vérifier un certificat</button>;
}
```

---

## 🎨 Utiliser le modal d'authentification

### Dans un composant

```typescript
import { useState } from 'react';
import { FirebaseAuthModal } from './components/FirebaseAuthModal';
import { Button } from './components/ui/button';

function MyComponent() {
  const [showAuth, setShowAuth] = useState(false);
  
  return (
    <>
      <Button onClick={() => setShowAuth(true)}>
        Se connecter
      </Button>
      
      <FirebaseAuthModal
        open={showAuth}
        onClose={() => setShowAuth(false)}
        defaultTab="login"  // 'login', 'signup', ou 'reset'
        courseName="Introduction à QGIS"  // Optionnel
      />
    </>
  );
}
```

### Ouvrir directement sur l'inscription

```typescript
<FirebaseAuthModal
  open={showAuth}
  onClose={() => setShowAuth(false)}
  defaultTab="signup"  // Ouvre directement sur l'onglet inscription
  courseName="Introduction à QGIS"
/>
```

---

## 🔄 Utiliser le contexte AuthContext (compatibilité)

Si vous avez du code existant utilisant l'ancien `AuthContext`, il continuera de fonctionner :

```typescript
import { useAuth } from './contexts/AuthContext';

function MyComponent() {
  const { user, isAuthenticated, login, signup, logout } = useAuth();
  
  // user.id        → UID Firebase
  // user.fullName  → Nom complet
  // user.email     → Email
  
  return isAuthenticated ? (
    <div>Bonjour {user.fullName}</div>
  ) : (
    <button onClick={() => login('email', 'password')}>Se connecter</button>
  );
}
```

---

## 🎯 Exemple complet : Page de cours avec progression

```typescript
import { useEffect, useState } from 'react';
import { useFirebaseAuth } from './contexts/FirebaseAuthContext';
import { getCourseProgress, updateCourseProgress } from './lib/firestoreServices';

function CoursePage() {
  const { user } = useFirebaseAuth();
  const [progress, setProgress] = useState(0);
  const courseId = 'qgis-intro';
  
  // Charger la progression au montage
  useEffect(() => {
    if (!user) return;
    
    async function load() {
      const data = await getCourseProgress(user.uid, courseId);
      if (data) {
        setProgress(data.percent_complete);
      }
    }
    
    load();
  }, [user]);
  
  // Sauvegarder la progression
  const saveProgress = async (newProgress: number) => {
    if (!user) return;
    
    await updateCourseProgress(user.uid, courseId, newProgress);
    setProgress(newProgress);
  };
  
  return (
    <div>
      <h1>Cours QGIS</h1>
      <div>Progression : {progress}%</div>
      
      <button onClick={() => saveProgress(25)}>Module 1</button>
      <button onClick={() => saveProgress(50)}>Module 2</button>
      <button onClick={() => saveProgress(75)}>Module 3</button>
      <button onClick={() => saveProgress(100)}>Terminé</button>
    </div>
  );
}
```

---

## 🧪 Tester localement

1. Créer un compte :
   - Email : `test@example.com`
   - Password : `Test123!`

2. Vérifier dans Firebase Console :
   - **Authentication** > **Users** : voir l'utilisateur
   - **Firestore** > **Data** > **profiles** : voir le profil

3. Sauvegarder des données et vérifier dans Firestore

---

## 🆘 Résolution de problèmes

### "Missing or insufficient permissions"
➡️ Les règles Firestore ne sont pas configurées. Voir [FIREBASE_SETUP.md](./FIREBASE_SETUP.md)

### "User is null"
➡️ L'utilisateur n'est pas connecté. Vérifier avec `useFirebaseAuth().user`

### Les données ne se sauvegardent pas
➡️ Vérifier la console développeur (F12) pour voir les erreurs Firebase

---

## 📚 Plus d'exemples

Voir les fichiers existants :
- `/components/FirebaseAuthModal.tsx` - Modal d'authentification complet
- `/components/CourseAccessGate.tsx` - Exemple de protection de contenu
- `/contexts/FirebaseAuthContext.tsx` - Implémentation du contexte
- `/lib/firestoreServices.ts` - Tous les services Firestore

---

**Bonne chance avec Firebase ! 🔥**
