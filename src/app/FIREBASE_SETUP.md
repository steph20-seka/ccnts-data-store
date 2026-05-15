# 🔥 Configuration Firebase pour CCNTS

## ⚡ Démarrage rapide

Votre site CCNTS utilise maintenant Firebase pour l'authentification et le stockage des données.

**Projet Firebase** : `ccnts-d3772`

---

## 🔐 Étape 1 : Configurer les règles de sécurité Firestore

**OBLIGATOIRE pour protéger vos données !**

1. Allez sur [Firebase Console](https://console.firebase.google.com/)
2. Sélectionnez le projet **ccnts-d3772**
3. Dans le menu de gauche, cliquez sur **Firestore Database**
4. Cliquez sur l'onglet **Règles**
5. Remplacez le contenu par :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Profils utilisateur
    match /profiles/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Progression des cours
    match /course_progress/{progressId} {
      allow read: if request.auth != null && 
                     request.auth.uid == resource.data.user_id;
      allow write: if request.auth != null && 
                      request.auth.uid == request.resource.data.user_id;
    }
    
    // Résultats des quiz
    match /quiz_results/{quizId} {
      allow read: if request.auth != null && 
                     request.auth.uid == resource.data.user_id;
      allow write: if request.auth != null && 
                      request.auth.uid == request.resource.data.user_id;
    }
    
    // Certificats
    match /certificates/{certId} {
      allow read: if true; // Public pour vérification
      allow create: if request.auth != null && 
                       request.auth.uid == request.resource.data.user_id;
      allow update, delete: if false; // Certificats immuables
    }
  }
}
```

6. Cliquez sur **Publier**

---

## 🌐 Étape 2 : Autoriser votre domaine

1. Dans la console Firebase, allez sur **Authentication**
2. Cliquez sur l'onglet **Settings**
3. Allez dans **Authorized domains**
4. Ajoutez vos domaines :
   - `localhost` (pour développement local)
   - Votre domaine de production (ex: `ccnts.com` ou `ccnts-site.web.app`)

---

## 📧 Étape 3 : Activer l'authentification par email

1. Dans **Authentication** > **Sign-in method**
2. Activez **Email/Password**
3. (Optionnel) Personnalisez les templates d'emails :
   - Vérification d'email
   - Réinitialisation de mot de passe
   - Changement d'email

---

## 📦 Structure des collections Firestore

Vos données seront stockées dans ces collections :

### `profiles`
- Document ID : `{userId}` (UID de Firebase Auth)
- Contenu : Informations utilisateur (nom, email, dates)

### `course_progress`
- Document ID : `{userId}_{courseId}`
- Contenu : Progression dans chaque cours (%, dernier module)

### `quiz_results`
- Document ID : `{userId}_{courseId}`
- Content : Résultats des quiz (score, réussi/échoué)

### `certificates`
- Document ID : `{certificateId}` (UUID)
- Contenu : Certificats émis (nom du cours, code de vérification)

---

## 🧪 Tester l'authentification

### Sur votre site local :

1. Allez sur la page d'inscription
2. Créez un compte avec :
   - Nom complet : `Test User`
   - Email : `test@example.com`
   - Mot de passe : `Test123!`

3. Vérifiez dans **Firebase Console** > **Authentication** > **Users** que l'utilisateur apparaît

4. Vérifiez dans **Firestore Database** > **Data** qu'un document `profiles/{userId}` a été créé

---

## 🔒 Sécurité

### ✅ Ce qui est sécurisé :
- Les mots de passe sont automatiquement hashés par Firebase
- Les règles Firestore empêchent les utilisateurs d'accéder aux données des autres
- Firebase Auth gère les sessions de manière sécurisée

### ⚠️ Important :
- Les credentials Firebase (apiKey, etc.) sont **visibles dans le code frontend** - c'est normal !
- La sécurité est assurée par les **règles Firestore**, pas par la clé API
- Configurez **TOUJOURS** les règles Firestore avant de mettre en production

---

## 📊 Monitoring

### Voir les utilisateurs connectés
**Authentication** > **Users** : Liste de tous les comptes créés

### Voir les données stockées
**Firestore Database** > **Data** : Parcourir toutes les collections

### Voir les erreurs
**Firestore Database** > **Usage** : Nombre de lectures/écritures et erreurs

---

## 🆘 Dépannage

### Erreur : "Missing or insufficient permissions"
➡️ Les règles Firestore ne sont pas configurées correctement. Retournez à l'étape 1.

### Erreur : "auth/unauthorized-domain"
➡️ Votre domaine n'est pas autorisé. Retournez à l'étape 2.

### Les utilisateurs ne peuvent pas s'inscrire
➡️ Vérifiez que **Email/Password** est activé dans **Authentication** > **Sign-in method**

### Les données ne sont pas sauvegardées
➡️ Vérifiez les règles Firestore et la console développeur du navigateur (F12) pour voir les erreurs

---

## 📚 Documentation

- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Cloud Firestore](https://firebase.google.com/docs/firestore)
- [Règles de sécurité Firestore](https://firebase.google.com/docs/firestore/security/get-started)

---

## ✅ Checklist de mise en production

- [ ] Règles Firestore configurées
- [ ] Domaine de production autorisé
- [ ] Email/Password activé
- [ ] Templates d'emails personnalisés (optionnel)
- [ ] Authentification testée (inscription, connexion, réinitialisation)
- [ ] Données testées (progression cours, quiz, certificats)
- [ ] Monitoring activé

---

**Projet Firebase** : ccnts-d3772  
**Console** : https://console.firebase.google.com/project/ccnts-d3772
