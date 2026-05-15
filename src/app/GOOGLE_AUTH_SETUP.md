# 🔐 Configuration de l'authentification Google - CCNTS

## ✅ Implémentation terminée

L'authentification Google est maintenant disponible sur votre site CCNTS !  
Les utilisateurs peuvent se connecter avec leur compte Google en un clic.

---

## 🚨 CONFIGURATION REQUISE

### Activer Google Sign-In dans Firebase

**IMPORTANT : Sans cette étape, le bouton Google ne fonctionnera pas !**

1. Allez sur [Firebase Console](https://console.firebase.google.com/project/ccnts-d3772)
2. Cliquez sur **Authentication** dans le menu de gauche
3. Cliquez sur l'onglet **Sign-in method**
4. Trouvez **Google** dans la liste des fournisseurs
5. Cliquez sur **Google** pour l'activer
6. Dans la popup :
   - **Activer** le bouton
   - **Nom public du projet** : CCNTS (ou votre nom préféré)
   - **Email d'assistance** : Votre email
7. Cliquez sur **Enregistrer**

---

## 🎨 Interface utilisateur

### Bouton Google ajouté

Le bouton "Continuer avec Google" apparaît maintenant :
- ✅ Dans l'onglet **Connexion**
- ✅ Dans l'onglet **Inscription**

### Design du bouton
- Logo Google officiel multicolore
- Texte : "Continuer avec Google"
- Style : Bordure grise, fond blanc
- Hover : Bordure bleue, fond bleu clair

---

## 🔧 Fonctionnalités implémentées

### Connexion Google
1. L'utilisateur clique sur "Continuer avec Google"
2. Une popup Google s'ouvre
3. L'utilisateur sélectionne son compte Google
4. Firebase authentifie l'utilisateur
5. Un profil est créé automatiquement dans Firestore (si nouveau)
6. L'utilisateur est connecté et redirigé

### Profil automatique
Quand un utilisateur se connecte avec Google :
- ✅ Son profil est créé dans Firestore (`profiles` collection)
- ✅ Son nom est récupéré depuis Google
- ✅ Son email est récupéré depuis Google
- ✅ Tout est automatique !

---

## 📊 Structure des données

### Collection Firestore : `profiles`

Quand un utilisateur se connecte avec Google, un profil est créé :

```javascript
{
  id: "abc123...",           // UID de Firebase Auth
  email: "user@gmail.com",   // Email Google
  full_name: "Jean Dupont",  // Nom depuis Google
  created_at: timestamp,     // Date de création
  updated_at: timestamp      // Date de mise à jour
}
```

---

## 🧪 Tester l'authentification Google

### Sur votre site local

1. Lancez votre site :
   ```bash
   npm run dev
   ```

2. Allez sur une page avec authentification (ex: un cours)

3. Cliquez sur "Se connecter" ou "Créer un compte"

4. Dans le modal, cliquez sur **"Continuer avec Google"**

5. Sélectionnez votre compte Google

6. Vérifiez :
   - Vous êtes connecté
   - Votre nom s'affiche
   - Firebase Console > Authentication > Users montre votre compte
   - Firebase Console > Firestore > profiles montre votre profil

---

## ⚠️ Problèmes fréquents

### Erreur : "auth/unauthorized-domain"
**➡️ Solution** : Allez dans Firebase Console > Authentication > Settings > Authorized domains et ajoutez votre domaine.

Pour le développement local, `localhost` doit être autorisé (c'est le cas par défaut).

### Erreur : "auth/operation-not-allowed"
**➡️ Solution** : Vous n'avez pas activé Google Sign-In dans Firebase Console. Suivez les étapes ci-dessus.

### La popup Google ne s'ouvre pas
**➡️ Solution** : Vérifiez que votre navigateur ne bloque pas les popups. Autorisez les popups pour votre site.

### L'utilisateur clique mais rien ne se passe
**➡️ Solution** : Ouvrez la console développeur (F12) et vérifiez les erreurs.

---

## 🔒 Sécurité

### ✅ Points forts
- Authentification gérée par Google (très sécurisée)
- Pas besoin de gérer les mots de passe
- Authentification multi-facteurs Google (si activée par l'utilisateur)
- Moins de risque de phishing

### ⚠️ Note
Les utilisateurs qui se connectent avec Google n'ont pas de mot de passe dans Firebase.  
S'ils veulent se connecter avec email/password plus tard, ils devront créer un mot de passe.

---

## 🎯 Avantages pour vos utilisateurs

- ✅ **Connexion rapide** : 2 clics au lieu de taper email + mot de passe
- ✅ **Pas de mot de passe à retenir**
- ✅ **Sécurisé** : Authentification Google
- ✅ **Pratique** : Si déjà connecté à Google, connexion instantanée

---

## 📱 Compatible avec

- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Mobile (Chrome, Safari, Firefox)
- ✅ Tablette

---

## 💡 Pour les développeurs

### Code d'implémentation

**Contexte d'authentification** (`/contexts/FirebaseAuthContext.tsx`) :
```typescript
const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  // Créer le profil Firestore si nouveau
};
```

**Modal d'authentification** (`/components/FirebaseAuthModal.tsx`) :
```typescript
const handleGoogleSignIn = async () => {
  const { error } = await signInWithGoogle();
  if (!error) {
    toast.success('Connexion réussie !');
    onClose();
  }
};
```

---

## 🌍 Domaines autorisés

### Pour le développement
- `localhost` (déjà autorisé par défaut)
- `127.0.0.1` (déjà autorisé par défaut)

### Pour la production
Ajoutez votre domaine dans :
**Firebase Console > Authentication > Settings > Authorized domains**

Exemples :
- `ccnts.com`
- `www.ccnts.com`
- `ccnts-app.web.app` (si hébergement Firebase)

---

## 📚 Documentation

- [Firebase Google Sign-In](https://firebase.google.com/docs/auth/web/google-signin)
- [Configuration avancée](https://firebase.google.com/docs/auth/web/google-signin#advanced)

---

## ✅ Checklist de configuration

- [ ] Google Sign-In activé dans Firebase Console
- [ ] Email d'assistance configuré
- [ ] Domaine localhost autorisé (dev)
- [ ] Domaine de production autorisé (prod)
- [ ] Authentification Google testée
- [ ] Profil Firestore créé automatiquement
- [ ] Toast de succès visible

---

## 🎉 C'est prêt !

Vos utilisateurs peuvent maintenant se connecter avec Google en un clic !

---

**Projet Firebase** : ccnts-d3772  
**Console** : https://console.firebase.google.com/project/ccnts-d3772/authentication/providers

**Développé pour CCNTS** 🌍  
Cabinet de Cartographie Numérique, de Télédétection et de Statistiques
