# Configuration Firebase Storage pour les Photos de Profil

## Problème résolu
Les utilisateurs rencontraient une erreur lors de l'enregistrement de leur photo de profil. Ce problème était dû à l'absence de règles de sécurité Firebase Storage.

## Solutions (choisir l'une des deux)

### Option 1 : Déploiement via Firebase CLI (Recommandé)

Si vous avez Firebase CLI installé sur votre machine locale :

```bash
# Se connecter à Firebase (si ce n'est pas déjà fait)
firebase login

# Déployer uniquement les règles Storage
firebase deploy --only storage

# Ou déployer toutes les règles (Firestore + Storage)
firebase deploy --only firestore,storage
```

### Option 2 : Configuration manuelle via la Console Firebase

Si vous préférez configurer manuellement :

1. Allez sur [Firebase Console](https://console.firebase.google.com/)
2. Sélectionnez votre projet : **ccnts-d3772**
3. Dans le menu latéral, cliquez sur **Storage**
4. Cliquez sur l'onglet **Rules**
5. Copiez et collez les règles suivantes :

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {

    // Photos de profil
    // Les utilisateurs peuvent uploader, lire et supprimer uniquement leur propre photo
    match /profile-photos/{userId} {
      allow read: if true; // Les photos de profil sont publiques (pour affichage)
      allow write: if request.auth != null && request.auth.uid == userId;
      allow delete: if request.auth != null && request.auth.uid == userId;
    }

    // Par défaut : refuser tout accès
    match /{allPaths=**} {
      allow read, write: if false;
    }
  }
}
```

6. Cliquez sur **Publier**

## Vérification

Après avoir déployé les règles :

1. Connectez-vous à votre application
2. Ouvrez la modal "Modifier le profil"
3. Sélectionnez une photo de profil
4. Cliquez sur "Enregistrer les modifications"
5. La photo devrait maintenant être enregistrée avec succès

## Modifications apportées au code

Les fichiers suivants ont été modifiés pour corriger le problème :

1. **storage.rules** (nouveau fichier) : Règles de sécurité Firebase Storage
2. **firebase.json** (nouveau fichier) : Configuration Firebase
3. **FirebaseAuthContext.tsx** : Ajout de la fonction `deleteProfilePhoto`
4. **AuthContext.tsx** : Exposition de `deleteProfilePhoto` et amélioration des messages d'erreur
5. **EditProfileModal.tsx** : 
   - Gestion de la suppression de photo
   - Rechargement de l'utilisateur après modification de photo
   - Messages d'erreur plus précis
   - Meilleur feedback de chargement

## Fonctionnalités ajoutées

- ✅ Upload de photo de profil
- ✅ Suppression de photo de profil
- ✅ Aperçu instantané de la photo
- ✅ Validation du format (JPG, PNG, WebP)
- ✅ Limitation de taille (5 Mo)
- ✅ Messages d'erreur précis et conviviaux
- ✅ État de chargement détaillé
- ✅ Mise à jour automatique de l'avatar partout dans l'interface
