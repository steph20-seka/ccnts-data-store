# 🔄 Parcours Utilisateur - Authentification Firebase CCNTS

## 📊 Diagrammes de flux

### 1. 📝 Inscription (Sign Up Flow)

```
┌─────────────────────────────────────────────────────────────────┐
│                    PARCOURS D'INSCRIPTION                        │
└─────────────────────────────────────────────────────────────────┘

    START
      │
      ▼
┌──────────────┐
│ Page d'accueil│
│   /           │
└──────┬────────┘
       │ Clic "Créer un compte"
       ▼
┌──────────────────────┐
│  SignUpPage          │
│  /signup             │
│                      │
│  ┌─────────────────┐│
│  │ Formulaire      ││
│  │ • Nom complet   ││
│  │ • Email         ││
│  │ • Téléphone     ││
│  │ • Localisation  ││
│  │ • Mot de passe  ││ ◄── Indicateur de force en temps réel
│  │ • Confirmation  ││
│  └─────────────────┘│
└──────┬───────────────┘
       │ Validation OK
       ▼
┌──────────────────────┐
│ Firebase Auth        │
│ createUser()         │
│ ✓ Compte créé        │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ Firestore            │
│ create profile       │
│ ✓ Profil sauvegardé  │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ sendVerificationEmail│
│ ✉️ Email envoyé       │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ Toast Success        │
│ "Compte créé !"      │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ VerifyEmailPage      │
│ /verify-email        │
│                      │
│ ┌─────────────────┐ │
│ │ Instructions    │ │
│ │ 1. Ouvrir email │ │
│ │ 2. Cliquer lien │ │
│ │ 3. Revenir ici  │ │
│ │ 4. Vérifier     │ │
│ └─────────────────┘ │
│                      │
│ [J'ai vérifié]       │
│ [Renvoyer email]     │
└──────┬───────────────┘
       │
       ▼
    ┌──┴──┐
    │Email│
    │vérifié?
    └──┬───┘
   OUI │ NON
       │  └──► Toast "Pas encore vérifié" ──┐
       │                                     │
       │  ┌──────────────────────────────────┘
       │  │
       ▼  ▼
┌──────────────────────┐
│ Toast Success        │
│ "Email vérifié !"    │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ Redirect /academy    │
│ ✅ Accès complet      │
└──────────────────────┘
       │
       ▼
     END
```

---

### 2. 🔑 Connexion (Login Flow)

```
┌─────────────────────────────────────────────────────────────────┐
│                     PARCOURS DE CONNEXION                        │
└─────────────────────────────────────────────────────────────────┘

    START
      │
      ▼
┌──────────────────────┐
│ LoginPage            │
│ /login               │
│                      │
│ ┌─────────────────┐ │
│ │ Email           │ │
│ │ ──────────────  │ │
│ │                 │ │
│ │ Mot de passe    │ │ ◄── Bouton show/hide
│ │ ──────────────  │ │
│ │       👁️         │ │
│ │                 │ │
│ │ [Se connecter]  │ │
│ │                 │ │
│ │ Oublié ?  ────┐ │ │
│ └───────────────│─┘ │
└──────┬──────────│────┘
       │          │
       │          └──────► Voir Flow "Mot de passe oublié"
       │ Clic connexion
       ▼
┌──────────────────────┐
│ Firebase Auth        │
│ signInWithEmail()    │
└──────┬───────────────┘
       │
    ┌──┴──┐
    │Succès?│
    └──┬───┘
   OUI │ NON
       │  │
       │  ▼
       │ ┌──────────────────────┐
       │ │ Toast Error          │
       │ │ "Email ou mot de     │
       │ │  passe incorrect"    │
       │ └──────────────────────┘
       │         │
       │         └──► STOP (reste sur /login)
       │
       ▼
┌──────────────────────┐
│ Toast Success        │
│ "Connexion réussie !"│
└──────┬───────────────┘
       │
       ▼
    ┌──┴──┐
    │Email│
    │vérifié?│
    └──┬───┘
   OUI │ NON
       │  │
       │  ▼
       │ ┌──────────────────────┐
       │ │ Redirect             │
       │ │ /verify-email        │
       │ └──────────────────────┘
       │         │
       │         └──► Voir Flow "Vérification Email"
       │
       ▼
┌──────────────────────┐
│ Redirect /academy    │
│ ✅ Accès complet      │
└──────────────────────┘
       │
       ▼
     END
```

---

### 3. 🔓 Mot de passe oublié (Password Reset Flow)

```
┌─────────────────────────────────────────────────────────────────┐
│              PARCOURS MOT DE PASSE OUBLIÉ                        │
└─────────────────────────────────────────────────────────────────┘

    START
      │
      ▼
┌──────────────────────┐
│ LoginPage            │
│ /login               │
│                      │
│ Clic "Oublié ?"      │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ ForgotPasswordPage   │
│ /forgot-password     │
│                      │
│ ┌─────────────────┐ │
│ │ Email           │ │
│ │ ──────────────  │ │
│ │                 │ │
│ │ [Envoyer lien]  │ │
│ └─────────────────┘ │
└──────┬───────────────┘
       │ Soumission
       ▼
┌──────────────────────┐
│ Firebase Auth        │
│ sendPasswordResetEmail│
└──────┬───────────────┘
       │
    ┌──┴──┐
    │Succès?│
    └──┬───┘
   OUI │ NON
       │  │
       │  ▼
       │ ┌──────────────────────┐
       │ │ Toast Error          │
       │ │ "Email non trouvé"   │
       │ └──────────────────────┘
       │         │
       │         └──► Retour au formulaire
       │
       ▼
┌──────────────────────┐
│ État "Email envoyé"  │
│ ForgotPasswordPage   │
│                      │
│ ✅ Email envoyé !     │
│                      │
│ Prochaines étapes :  │
│ 1. Ouvrir email      │
│ 2. Cliquer lien      │
│ 3. Créer nouveau MDP │
│ 4. Se connecter      │
│                      │
│ ⏱️ Expire dans 1h     │
│                      │
│ [Renvoyer email]     │
│ [Retour connexion]   │
└──────┬───────────────┘
       │
       │
       │ ┌─── Utilisateur ouvre email ───┐
       │ │                                │
       │ ▼                                │
       │ ┌──────────────────────┐         │
       │ │ Clic lien Firebase   │         │
       │ │ (ouvre navigateur)   │         │
       │ └──────┬───────────────┘         │
       │        │                         │
       │        ▼                         │
       │ ┌──────────────────────┐         │
       │ │ Page Firebase        │         │
       │ │ Nouveau mot de passe │         │
       │ │                      │         │
       │ │ Mot de passe :       │         │
       │ │ ──────────────       │         │
       │ │                      │         │
       │ │ Confirmer :          │         │
       │ │ ──────────────       │         │
       │ │                      │         │
       │ │ [Réinitialiser]      │         │
       │ └──────┬───────────────┘         │
       │        │                         │
       │        ▼                         │
       │ ┌──────────────────────┐         │
       │ │ Firebase Auth        │         │
       │ │ ✅ MDP réinitialisé   │         │
       │ └──────┬───────────────┘         │
       │        │                         │
       │        ▼                         │
       │ ┌──────────────────────┐         │
       │ │ Message Firebase     │         │
       │ │ "Mot de passe        │         │
       │ │  réinitialisé !"     │         │
       │ └──────┬───────────────┘         │
       │        │                         │
       └────────┼─────────────────────────┘
                │
                ▼
        ┌──────────────────────┐
        │ LoginPage            │
        │ /login               │
        │                      │
        │ Se connecter avec    │
        │ nouveau mot de passe │
        └──────┬───────────────┘
               │
               ▼
             END
```

---

### 4. ✉️ Vérification Email (Email Verification Flow)

```
┌─────────────────────────────────────────────────────────────────┐
│                 PARCOURS VÉRIFICATION EMAIL                      │
└─────────────────────────────────────────────────────────────────┘

    START (après inscription)
      │
      ▼
┌──────────────────────┐
│ VerifyEmailPage      │
│ /verify-email        │
│                      │
│ 📧 Vérifiez votre     │
│    email             │
│                      │
│ Email envoyé à :     │
│ user@example.com     │
│                      │
│ ┌─────────────────┐ │
│ │ Instructions    │ │
│ │ 1. Ouvrir email │ │
│ │ 2. Cliquer lien │ │
│ │ 3. Revenir ici  │ │
│ │ 4. Vérifier     │ │
│ └─────────────────┘ │
│                      │
│ [J'ai vérifié]  ◄────┼── Cooldown 60s si renvoi
│ [Renvoyer email]     │
└──────┬───────────────┘
       │
       │
       │ ┌─── Utilisateur ouvre email ───┐
       │ │                                │
       │ ▼                                │
       │ ┌──────────────────────┐         │
       │ │ Email Firebase       │         │
       │ │                      │         │
       │ │ Bienvenue chez CCNTS │         │
       │ │                      │         │
       │ │ Cliquez pour vérifier│         │
       │ │ votre email :        │         │
       │ │                      │         │
       │ │ [Vérifier email]     │         │
       │ └──────┬───────────────┘         │
       │        │                         │
       │        ▼                         │
       │ ┌──────────────────────┐         │
       │ │ Firebase Auth        │         │
       │ │ verifyEmail()        │         │
       │ │ ✅ Email vérifié      │         │
       │ └──────┬───────────────┘         │
       │        │                         │
       └────────┼─────────────────────────┘
                │
                │ Utilisateur retourne sur le site
                ▼
        ┌──────────────────────┐
        │ VerifyEmailPage      │
        │                      │
        │ Clic "J'ai vérifié"  │
        └──────┬───────────────┘
               │
               ▼
        ┌──────────────────────┐
        │ reloadUser()         │
        │ Firebase Auth        │
        └──────┬───────────────┘
               │
               ▼
        ┌──────────────────────┐
        │ checkEmailVerified() │
        └──────┬───────────────┘
               │
            ┌──┴──┐
            │Vérifié?│
            └──┬───┘
           OUI │ NON
               │  │
               │  ▼
               │ ┌──────────────────────┐
               │ │ Toast Error          │
               │ │ "Email non vérifié"  │
               │ └──────────────────────┘
               │         │
               │         └──► Rester sur /verify-email
               │
               ▼
        ┌──────────────────────┐
        │ Toast Success        │
        │ "Email vérifié !"    │
        └──────┬───────────────┘
               │
               ▼
        ┌──────────────────────┐
        │ Redirect /academy    │
        │ ✅ Accès complet      │
        └──────────────────────┘
               │
               ▼
             END
```

---

## 🎨 États des composants

### LoadingState

```
┌────────────────────────┐
│  SecureLoadingState    │
│                        │
│       🛡️  ←─ Rotation   │
│      ( )  ←─ Pulse     │
│                        │
│  Chargement sécurisé   │
│  Vérification...       │
│                        │
│      • • •  ←─ Dots    │
│                        │
│  🔒 Connexion SSL      │
└────────────────────────┘
```

### PasswordStrength

```
┌────────────────────────────────┐
│ Force du mot de passe: Bon     │
│ ▓▓▓▓▓▓▓▓░░ 80%                 │
│                                │
│ ✅ Au moins 8 caractères        │
│ ✅ Une lettre majuscule         │
│ ✅ Une lettre minuscule         │
│ ✅ Un chiffre                   │
│ ❌ Un caractère spécial         │
└────────────────────────────────┘

Couleurs:
• Rouge (0-40%): Faible
• Orange (41-60%): Moyen
• Jaune (61-80%): Bon
• Vert (81-100%): Excellent
```

### Toast Notifications

```
┌─────────────────────────────────┐
│ ✅ Connexion réussie !           │
│ Bienvenue sur votre espace CCNTS│
│                            [×]  │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ ❌ Erreur de connexion           │
│ Email ou mot de passe incorrect │
│                            [×]  │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ ℹ️ Email envoyé !                │
│ Vérifiez votre boîte de réception│
│                            [×]  │
└─────────────────────────────────┘
```

---

## 🔐 Sécurité - Points de contrôle

### Protection des routes

```
   Utilisateur accède à /my-courses
              │
              ▼
        ┌─────────┐
        │Connecté?│
        └────┬────┘
         NON │ OUI
             │  │
             │  ▼
             │ ┌──────────┐
             │ │Email     │
             │ │vérifié?  │
             │ └────┬─────┘
             │  NON │ OUI
             │      │  │
             ▼      ▼  ▼
        /login  /verify  /my-courses
                -email   (accès OK)
```

### Validation des données

```
Inscription
    │
    ▼
┌─────────────────┐
│ Validation      │
│ • Email valide? │
│ • MDP >= 8 car? │
│ • MDP = Confirm?│
│ • Nom rempli?   │
└────┬────────────┘
 NON │ OUI
     │  │
     ▼  ▼
  Toast  Firebase
  Error  Auth
```

---

## 📱 Responsive Behavior

### Mobile (< 768px)

```
┌──────────────┐
│  Logo CCNTS  │
│              │
│  Bienvenue   │
│              │
│ ┌──────────┐ │
│ │  Email   │ │
│ │  ─────   │ │
│ │          │ │
│ │ Password │ │
│ │  ─────   │ │
│ │    👁️    │ │
│ │          │ │
│ │[Connexion]│ │
│ └──────────┘ │
│              │
│ Oublié ?     │
│              │
│ Créer compte │
└──────────────┘
```

### Desktop (>= 768px)

```
┌────────────────────────────────┐
│         Logo CCNTS             │
│        Bienvenue               │
│                                │
│ ┌────────────────────────────┐ │
│ │  Email    │   Password     │ │
│ │  ─────    │   ─────   👁️   │ │
│ │           │                │ │
│ │    Oublié mot de passe ?   │ │
│ │                            │ │
│ │   [Se connecter]           │ │
│ │                            │ │
│ │   Créer un compte ──►      │ │
│ └────────────────────────────┘ │
└────────────────────────────────┘
```

---

## ⏱️ Timeline et Délais

### Cooldowns et Expirations

```
Action                  │ Délai           │ Protection
─────────────────────────────────────────────────────────
Renvoi email            │ 60 secondes     │ Anti-spam
Lien vérification       │ Pas d'expiration│ Firebase
Lien reset password     │ 1 heure         │ Sécurité
Session utilisateur     │ Permanente      │ Firebase
Rate limiting login     │ Auto Firebase   │ Brute force
```

---

## 🎯 Métriques de succès

### KPIs à tracker

```
Métrique                     │ Objectif
──────────────────────────────────────────
Taux d'inscription           │ > 70%
Vérification email           │ > 80%
Connexion réussie            │ > 95%
Reset password réussi        │ > 90%
Temps moyen inscription      │ < 2 min
Temps moyen vérification     │ < 5 min
```

---

**Version** : 1.0  
**Dernière mise à jour** : Mai 2026
