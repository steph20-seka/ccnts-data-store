# 🎨 Guide Visuel - Wireframes ASCII Détaillés

## Vue d'ensemble des écrans

Ce guide complète le brief Figma avec des wireframes ASCII détaillés pour chaque écran.

---

## 📱 ÉCRAN 1 : CONNEXION - Default

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                   Container 480px                ┃
┃              ┌────────────────────┐              ┃
┃              │                    │              ┃
┃              │   🌍 Globe Icon    │              ┃
┃              │     Logo CCNTS     │              ┃
┃              │                    │              ┃
┃              └────────────────────┘              ┃
┃                                                  ┃
┃              Académie CCNTS                      ┃
┃              24px • Bold • #1e3a8a               ┃
┃                                                  ┃
┃      Connecte-toi pour accéder aux cours         ┃
┃      14px • Regular • #6b7280                    ┃
┃                                                  ┃
┃  ┌──────────────────────────────────────────┐   ┃
┃  │  [G]  Continuer avec Google             │   ┃
┃  │  48px height • Border 2px #e5e7eb       │   ┃
┃  │  Hover: Border #3b82f6 • BG #eff6ff     │   ┃
┃  └──────────────────────────────────────────┘   ┃
┃                                                  ┃
┃  ─────────  Ou avec email  ─────────            ┃
┃  12px • #9ca3af • uppercase                      ┃
┃                                                  ┃
┃  Email                                           ┃
┃  14px • Semi-bold • #374151                      ┃
┃  ┌──────────────────────────────────────────┐   ┃
┃  │ ✉️  ton-email@exemple.com                │   ┃
┃  │                                          │   ┃
┃  │ 48px height • Border 1px #d1d5db        │   ┃
┃  │ Focus: Border 2px #3b82f6               │   ┃
┃  │ Box-shadow: 0 0 0 3px rgba(59,130,246,.1)│   ┃
┃  └──────────────────────────────────────────┘   ┃
┃                                                  ┃
┃  Mot de passe                                    ┃
┃  14px • Semi-bold • #374151                      ┃
┃  ┌──────────────────────────────────────────┐   ┃
┃  │ 🔒  ••••••••                        👁️ │   ┃
┃  │                                          │   ┃
┃  │ 48px height • Border 1px #d1d5db        │   ┃
┃  │ Eye icon: 20px • #6b7280 • Right 12px   │   ┃
┃  └──────────────────────────────────────────┘   ┃
┃                                                  ┃
┃  ┌──────────────────────────────────────────┐   ┃
┃  │         Se connecter                     │   ┃
┃  │                                          │   ┃
┃  │ 48px height • BG #1e3a8a • Text White   │   ┃
┃  │ 16px • Semi-bold                         │   ┃
┃  │ Hover: BG #1e40af • Cursor pointer      │   ┃
┃  └──────────────────────────────────────────┘   ┃
┃                                                  ┃
┃  Mot de passe oublié ? Réinitialiser             ┃
┃  14px • #6b7280 • Link #3b82f6 • Underline hover ┃
┃                                                  ┃
┃  Pas encore de compte ? S'inscrire               ┃
┃  14px • #6b7280 • Link #3b82f6 • Underline hover ┃
┃                                                  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

Espacements verticaux :
- Logo → Titre : 16px
- Titre → Description : 8px
- Description → Google btn : 32px
- Google btn → Séparateur : 24px
- Séparateur → Label Email : 24px
- Label → Input : 8px
- Input Email → Label Password : 16px
- Label → Input : 8px
- Input Password → Bouton : 24px
- Bouton → Lien oublié : 16px
- Lien oublié → Lien inscription : 8px
```

---

## 📱 ÉCRAN 2 : CONNEXION - Error (Identifiants incorrects)

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                   Container 480px                ┃
┃              [Logo CCNTS] + Titre                ┃
┃                                                  ┃
┃  [Bouton Google]                                 ┃
┃                                                  ┃
┃  ─────────  Ou avec email  ─────────            ┃
┃                                                  ┃
┃  ┌──────────────────────────────────────────┐   ┃
┃  │ ❌  Email ou mot de passe incorrect      │   ┃
┃  │     Vérifie tes identifiants.            │   ┃
┃  │                                          │   ┃
┃  │ BG #fef2f2 • Border 1px #fecaca         │   ┃
┃  │ Padding 12px 16px • Radius 8px          │   ┃
┃  │ Icon ❌ 20px #ef4444                     │   ┃
┃  │ Title 14px Semi-bold #991b1b            │   ┃
┃  │ Desc 14px Regular #7f1d1d               │   ┃
┃  └──────────────────────────────────────────┘   ┃
┃                                                  ┃
┃  Email                                           ┃
┃  ┌──────────────────────────────────────────┐   ┃
┃  │ ✉️  utilisateur@example.com              │   ┃
┃  │                                          │   ┃
┃  │ ⚠️ Border 2px #ef4444 (Rouge)           │   ┃
┃  │ BG #fef2f2                               │   ┃
┃  └──────────────────────────────────────────┘   ┃
┃                                                  ┃
┃  Mot de passe                                    ┃
┃  ┌──────────────────────────────────────────┐   ┃
┃  │ 🔒  •••••                           👁️ │   ┃
┃  │                                          │   ┃
┃  │ ⚠️ Border 2px #ef4444 (Rouge)           │   ┃
┃  │ BG #fef2f2                               │   ┃
┃  └──────────────────────────────────────────┘   ┃
┃                                                  ┃
┃  [Bouton Se connecter]                           ┃
┃  [Liens secondaires]                             ┃
┃                                                  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

Notes :
- Alert Error : margin-bottom 16px
- Inputs invalides : border rouge + background rouge très clair
- Le reste du layout reste identique
```

---

## 📱 ÉCRAN 3 : VÉRIFIER VOTRE EMAIL - Default

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                   Container 480px                ┃
┃                   Padding 48px                   ┃
┃                                                  ┃
┃                 ┌──────────┐                     ┃
┃                 │          │                     ┃
┃                 │  📧 64px │                     ┃
┃                 │  #3b82f6 │                     ┃
┃                 │          │                     ┃
┃                 └──────────┘                     ┃
┃                                                  ┃
┃              Vérifie ton email                   ┃
┃              28px • Bold • #111827               ┃
┃                                                  ┃
┃   Un email de confirmation a été envoyé à :      ┃
┃   16px • Regular • #6b7280 • Line-height 1.6    ┃
┃                                                  ┃
┃       ┌──────────────────────────────┐           ┃
┃       │  jean.dupont@gmail.com      │           ┃
┃       │  16px • Semi-bold • #1e3a8a │           ┃
┃       │  BG #eff6ff • Padding 8-16  │           ┃
┃       │  Radius 6px                 │           ┃
┃       └──────────────────────────────┘           ┃
┃                                                  ┃
┃   Clique sur le lien dans l'email pour          ┃
┃   activer ton compte et accéder aux cours.      ┃
┃   16px • Regular • #6b7280                       ┃
┃                                                  ┃
┃  ┌──────────────────────────────────────────┐   ┃
┃  │  📧  Ouvrir ma boîte mail               │   ┃
┃  │                                          │   ┃
┃  │  48px • BG #1e3a8a • Text White         │   ┃
┃  │  Icon 20px • Margin-right 8px           │   ┃
┃  └──────────────────────────────────────────┘   ┃
┃                                                  ┃
┃  ┌──────────────────────────────────────────┐   ┃
┃  │  🔄  Renvoyer l'email                   │   ┃
┃  │                                          │   ┃
┃  │  48px • BG Transparent • Border 2px     │   ┃
┃  │  Border #e5e7eb • Text #6b7280          │   ┃
┃  │  Hover: Border #d1d5db • BG #f9fafb     │   ┃
┃  └──────────────────────────────────────────┘   ┃
┃                                                  ┃
┃  ┌────────────────────────────────────────────┐ ┃
┃  │ ℹ️  Tu n'as rien reçu ?                   │ ┃
┃  │                                            │ ┃
┃  │ • Vérifie ton dossier Spam                │ ┃
┃  │ • Vérifie ton dossier Promotions          │ ┃
┃  │ • Attends 2-3 minutes                     │ ┃
┃  │                                            │ ┃
┃  │ Changer d'adresse email                   │ ┃
┃  │ 14px • Medium • #3b82f6 • Underline hover │ ┃
┃  │                                            │ ┃
┃  │ BG #eff6ff • Border 1px #dbeafe           │ ┃
┃  │ Radius 8px • Padding 16px                 │ ┃
┃  │ Liste 14px Regular #475569                │ ┃
┃  └────────────────────────────────────────────┘ ┃
┃                                                  ┃
┃  ← Retour à la connexion                         ┃
┃  14px • Regular • #6b7280                        ┃
┃  Icon ← 16px • Margin-right 4px                  ┃
┃                                                  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

Espacements :
- Icon → Titre : 16px
- Titre → Description : 24px
- Description → Email display : 16px
- Email → Description 2 : 16px
- Description → Bouton 1 : 32px
- Bouton 1 → Bouton 2 : 12px
- Bouton 2 → Info bloc : 24px
- Info bloc → Lien retour : 24px
```

---

## 📱 ÉCRAN 4 : EMAIL NON VÉRIFIÉ (Blocage)

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                   Container 480px                ┃
┃                                                  ┃
┃                 ┌──────────┐                     ┃
┃                 │          │                     ┃
┃                 │  ⚠️ 64px │                     ┃
┃                 │  #f59e0b │                     ┃
┃                 │          │                     ┃
┃                 └──────────┘                     ┃
┃                                                  ┃
┃            Email non vérifié                     ┃
┃            28px • Bold • #92400e                 ┃
┃                                                  ┃
┃   Ton compte a été créé mais n'est pas           ┃
┃   encore activé.                                 ┃
┃   16px • Regular • #78350f                       ┃
┃                                                  ┃
┃   Vérifie ton email et clique sur le lien        ┃
┃   de confirmation pour activer ton compte.       ┃
┃                                                  ┃
┃   Email envoyé à :                               ┃
┃       ┌──────────────────────────────┐           ┃
┃       │  jean.dupont@gmail.com      │           ┃
┃       │  16px • Semi-bold • #92400e │           ┃
┃       │  BG #fffbeb • Padding 8-16  │           ┃
┃       └──────────────────────────────┘           ┃
┃                                                  ┃
┃  ┌──────────────────────────────────────────┐   ┃
┃  │  📧  Renvoyer l'email                   │   ┃
┃  │  48px • BG #f59e0b • Text White         │   ┃
┃  └──────────────────────────────────────────┘   ┃
┃                                                  ┃
┃  ┌──────────────────────────────────────────┐   ┃
┃  │  🚪  Se déconnecter                     │   ┃
┃  │  48px • BG Transparent • Border 2px     │   ┃
┃  │  Border #e5e7eb • Text #6b7280          │   ┃
┃  └──────────────────────────────────────────┘   ┃
┃                                                  ┃
┃  ┌────────────────────────────────────────────┐ ┃
┃  │ ℹ️  Besoin d'aide ?                       │ ┃
┃  │                                            │ ┃
┃  │ • Vérifie tes Spams                       │ ┃
┃  │ • Changer d'adresse email                 │ ┃
┃  │ • Contacter le support                    │ ┃
┃  │                                            │ ┃
┃  │ BG #fffbeb • Border 1px #fde68a           │ ┃
┃  └────────────────────────────────────────────┘ ┃
┃                                                  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

Theme : Warning/Orange (#f59e0b, #fffbeb)
Action primaire : Renvoyer email
Action secondaire : Se déconnecter
```

---

## 📱 ÉCRAN 5 : INSCRIPTION avec Password Strength

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                   Container 480px                ┃
┃              [Logo + Titre + Google]             ┃
┃              ─── Ou avec email ───               ┃
┃                                                  ┃
┃  Nom complet                                     ┃
┃  ┌──────────────────────────────────────────┐   ┃
┃  │ 👤  Jean Dupont                          │   ┃
┃  └──────────────────────────────────────────┘   ┃
┃                                                  ┃
┃  Email                                           ┃
┃  ┌──────────────────────────────────────────┐   ┃
┃  │ ✉️  jean.dupont@gmail.com                │   ┃
┃  └──────────────────────────────────────────┘   ┃
┃                                                  ┃
┃  Mot de passe                                    ┃
┃  ┌──────────────────────────────────────────┐   ┃
┃  │ 🔒  MyPassword123!                  👁️ │   ┃
┃  └──────────────────────────────────────────┘   ┃
┃                                                  ┃
┃  ┌─ Password Strength Checker ──────────────┐   ┃
┃  │                                           │   ┃
┃  │  ✓ Au moins 8 caractères                │   ┃
┃  │    12px • #22c55e • Check icon 14px     │   ┃
┃  │                                           │   ┃
┃  │  ✓ Une lettre majuscule                 │   ┃
┃  │    12px • #22c55e                        │   ┃
┃  │                                           │   ┃
┃  │  ○ Un chiffre                            │   ┃
┃  │    12px • #d1d5db • Circle icon 14px    │   ┃
┃  │                                           │   ┃
┃  │  ✓ Un caractère spécial                 │   ┃
┃  │    12px • #22c55e                        │   ┃
┃  │                                           │   ┃
┃  │  Animation : Fade in + Scale (150ms)    │   ┃
┃  │  Spacing : 8px entre chaque règle       │   ┃
┃  └───────────────────────────────────────────┘   ┃
┃                                                  ┃
┃  Confirmer le mot de passe                       ┃
┃  ┌──────────────────────────────────────────┐   ┃
┃  │ 🔒  MyPassword123!                  👁️ │   ┃
┃  └──────────────────────────────────────────┘   ┃
┃                                                  ┃
┃  ⚠️ Les mots de passe ne correspondent pas       ┃
┃  12px • #ef4444 • Affiché si différent           ┃
┃                                                  ┃
┃  ┌──────────────────────────────────────────┐   ┃
┃  │         Créer mon compte                 │   ┃
┃  └──────────────────────────────────────────┘   ┃
┃                                                  ┃
┃  Déjà un compte ? Se connecter                   ┃
┃                                                  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

Password Strength Checker :
- Pas de border, pas de background
- Margin-top 8px sous l'input
- Check ✓ vert (#22c55e) si validé
- Circle ○ gris (#d1d5db) si non validé
- Animation smooth sur chaque validation
```

---

## 📱 ÉCRAN 6 : SUCCESS BANNER (Email renvoyé)

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  ┌────────────────────────────────────────────┐ ┃
┃  │  ✓  Email renvoyé avec succès !           │ ┃
┃  │     Vérifie ta boîte mail.                │ ┃
┃  │                                            │ ┃
┃  │  BG #f0fdf4 (vert très clair)             │ ┃
┃  │  Border 1px #bbf7d0                       │ ┃
┃  │  Border-radius 8px                        │ ┃
┃  │  Padding 12px 16px                        │ ┃
┃  │  Icon ✓ 20px #22c55e                     │ ┃
┃  │  Text 14px Semi-bold #166534              │ ┃
┃  │  Animation : Slide down + Fade in (300ms)│ ┃
┃  │  Auto-hide : 5 secondes                  │ ┃
┃  └────────────────────────────────────────────┘ ┃
┃                                                  ┃
┃                [Reste du contenu]                ┃
┃                                                  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

Position : En haut de l'écran, 16px margin-bottom
Utilisable sur : "Vérifier email", "Email envoyé", etc.
```

---

## 📱 ÉCRAN 7 : MOT DE PASSE OUBLIÉ - Default

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                   Container 480px                ┃
┃                                                  ┃
┃              [Logo CCNTS + Globe]                ┃
┃                                                  ┃
┃          Mot de passe oublié ?                   ┃
┃          24px • Bold • #111827                   ┃
┃                                                  ┃
┃   Entre ton adresse email pour recevoir un      ┃
┃   lien de réinitialisation.                      ┃
┃   14px • Regular • #6b7280                       ┃
┃                                                  ┃
┃  Email                                           ┃
┃  ┌──────────────────────────────────────────┐   ┃
┃  │ ✉️  ton-email@exemple.com                │   ┃
┃  │  48px height • Border 1px #d1d5db        │   ┃
┃  └──────────────────────────────────────────┘   ┃
┃                                                  ┃
┃  ┌──────────────────────────────────────────┐   ┃
┃  │  📨  Envoyer le lien                     │   ┃
┃  │  48px • BG #1e3a8a • Text White         │   ┃
┃  └──────────────────────────────────────────┘   ┃
┃                                                  ┃
┃  ← Retour à la connexion                         ┃
┃  14px • Regular • #6b7280                        ┃
┃                                                  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

Écran plus simple :
- Un seul input (Email)
- Un seul bouton primaire
- Un lien retour
- Pas de Google sign-in
```

---

## 📱 ÉCRAN 8 : EMAIL ENVOYÉ - Reset Password

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                   Container 480px                ┃
┃                                                  ┃
┃                 ┌──────────┐                     ┃
┃                 │  ✉️ 64px │                     ┃
┃                 │  #22c55e │                     ┃
┃                 └──────────┘                     ┃
┃                                                  ┃
┃              Email envoyé !                      ┃
┃              28px • Bold • #111827               ┃
┃                                                  ┃
┃   Un lien de réinitialisation a été envoyé à :  ┃
┃                                                  ┃
┃       ┌──────────────────────────────┐           ┃
┃       │  jean.dupont@gmail.com      │           ┃
┃       └──────────────────────────────┘           ┃
┃                                                  ┃
┃   Clique sur le lien dans l'email pour          ┃
┃   créer un nouveau mot de passe.                ┃
┃                                                  ┃
┃   ┌────────────────────────────────────────┐    ┃
┃   │  ⚠️  Le lien expire dans 1 heure       │    ┃
┃   │                                        │    ┃
┃   │  BG #fffbeb • Border 1px #fde68a      │    ┃
┃   │  Padding 8px 12px • Radius 6px        │    ┃
┃   │  Icon ⚠️ 16px • Text 12px Medium      │    ┃
┃   │  Color #92400e                        │    ┃
┃   └────────────────────────────────────────┘    ┃
┃                                                  ┃
┃  ┌─────────────���────────────────────────────┐   ┃
┃  │  📧  Ouvrir ma boîte mail               │   ┃
┃  └──────────────────────────────────────────┘   ┃
┃                                                  ┃
┃  ┌──────────────────────────────────────────┐   ┃
┃  │  🔄  Renvoyer l'email                   │   ┃
┃  └──────────────────────────────────────────┘   ┃
┃                                                  ┃
┃  ┌────────────────────────────────────────────┐ ┃
┃  │ ℹ️  Tu n'as rien reçu ?                   │ ┃
┃  │ • Vérifie ton dossier Spam                │ ┃
┃  │ • Attends 2-3 minutes                     │ ┃
┃  └────────────────────────────────────────────┘ ┃
┃                                                  ┃
┃  ← Retour à la connexion                         ┃
┃                                                  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

Similaire à "Vérifier email" mais :
- Icon success vert (pas bleu)
- Warning "Expire dans 1h"
- Contexte : Reset password (pas inscription)
```

---

## 📱 RESPONSIVE MOBILE (375px)

### Adaptations clés

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃   [16px padding left]   ┃
┃                         ┃
┃    [Logo 40x40]        ┃
┃                         ┃
┃  Académie CCNTS         ┃
┃  20px • Bold            ┃
┃                         ┃
┃  Connecte-toi           ┃
┃  14px • Regular         ┃
┃                         ┃
┃ ┌─────────────────────┐ ┃
┃ │ [G] Google         │ ┃
┃ │ 44px height        │ ┃
┃ │ Full width         │ ┃
┃ └─────────────────────┘ ┃
┃                         ┃
┃ ── Ou avec email ──    ┃
┃                         ┃
┃ Email                   ┃
┃ ┌─────────────────────┐ ┃
┃ │ ✉ email@...        │ ┃
┃ │ 44px height        │ ┃
┃ └─────────────────────┘ ┃
┃                         ┃
┃ Mot de passe            ┃
┃ ┌─────────────────────┐ ┃
┃ │ 🔒 ••••••     👁️ │ ┃
┃ │ 44px height        │ ┃
┃ └─────────────────────┘ ┃
┃                         ┃
┃ ┌─────────────────────┐ ┃
┃ │  Se connecter      │ ┃
┃ │  44px height       │ ┃
┃ │  Full width        │ ┃
┃ └─────────────────────┘ ┃
┃                         ┃
┃ Mot de passe oublié ?   ┃
┃ S'inscrire              ┃
┃                         ┃
┃   [16px padding right] ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━┛

Changements :
- Width : 100vw - 32px
- Padding : 24px (au lieu de 48px)
- Logo : 40px (au lieu de 48px)
- Titres : 20px (au lieu de 24px)
- Text : 14px partout
- Buttons/Inputs : 44px height minimum
- Buttons : Full width
- Vertical spacing : -8px partout
```

---

## 🎨 COMPOSANTS - Spécifications

### AuthInput Component

```
Variante 1 : Default
┌──────────────────────────────────────┐
│ ✉️  Placeholder...                  │
│ Border 1px #d1d5db                  │
│ BG white • Radius 8px               │
└──────────────────────────────────────┘

Variante 2 : Focus
┌══════════════════════════════════════┐
│ ✉️  user@example.com                │
│ Border 2px #3b82f6                  │
│ Box-shadow 0 0 0 3px rgba(59,130,.1)│
└══════════════════════════════════════┘

Variante 3 : Error
┌──────────────────────────────────────┐
│ ✉️  invalid@                        │
│ Border 2px #ef4444                  │
│ BG #fef2f2                          │
└──────────────────────────────────────┘
⚠️ Email invalide

Variante 4 : Disabled
┌──────────────────────────────────────┐
│ ✉️  user@example.com                │
│ Border 1px #e5e7eb                  │
│ BG #f9fafb • Opacity 0.6            │
└──────────────────────────────────────┘

Properties :
- Label (string)
- Placeholder (string)
- Value (string)
- Icon left (component/icon)
- Icon right (component/icon)
- State (default/focus/error/disabled)
- Error message (string)
- Type (text/email/password)
```

---

### AuthButton Component

```
Variante 1 : Primary Default
┌──────────────────────────────────────┐
│        Se connecter                  │
│ BG #1e3a8a • Text white             │
│ 16px Semi-bold • Height 48px        │
└──────────────────────────────────────┘

Variante 2 : Primary Hover
┌──────────────────────────────────────┐
│        Se connecter                  │
│ BG #1e40af • Cursor pointer         │
│ Transform: scale(0.98) on active    │
└──────────────────────────────────────┘

Variante 3 : Primary Loading
┌──────────────────────────────────────┐
│  ⏳  Connexion...                    │
│ BG #93c5fd • Cursor not-allowed     │
│ Disabled • Spinner 16px             │
└──────────────────────────────────────┘

Variante 4 : Secondary
┌──────────────────────────────────────┐
│        Renvoyer l'email              │
│ BG transparent • Border 2px #e5e7eb │
│ Text #6b7280 • Hover: BG #f9fafb    │
└──────────────────────────────────────┘

Variante 5 : Google
┌──────────────────────────────────────┐
│  [G]  Continuer avec Google         │
│ BG white • Border 2px #e5e7eb       │
│ Text #111827 • Logo 20px            │
│ Hover: Border #3b82f6 • BG #eff6ff  │
└──────────────────────────────────────┘

Variante 6 : Success (temporaire)
┌──────────────────────────────────────┐
│  ✓  Compte créé !                   │
│ BG #22c55e • Text white             │
│ Animation: Scale in                 │
└──────────────────────────────────────┘

Properties :
- Text (string)
- Icon (component/icon)
- Icon position (left/right)
- Variant (primary/secondary/google)
- State (default/hover/loading/disabled/success)
- Size (small/medium/large)
- Full width (boolean)
```

---

### AlertBox Component

```
Type : Success
┌────────────────────────────────────────┐
│ ✓  Opération réussie                  │
│    Le processus s'est bien déroulé.   │
│                                        │
│ BG #f0fdf4 • Border #bbf7d0           │
│ Icon ✓ 20px #22c55e                  │
│ Title 14px Semi-bold #166534          │
│ Desc 14px Regular #14532d             │
└────────────────────────────────────────┘

Type : Error
┌────────────────────────────────────────┐
│ ❌  Une erreur est survenue            │
│    Vérifie tes informations.          │
│                                        │
│ BG #fef2f2 • Border #fecaca           │
│ Icon ❌ 20px #ef4444                  │
│ Title 14px Semi-bold #991b1b          │
│ Desc 14px Regular #7f1d1d             │
└────────────────────────────────────────┘

Type : Warning
┌────────────────────────────────────────┐
│ ⚠️  Attention                          │
│    Cette action nécessite confirmation│
│                                        │
│ BG #fffbeb • Border #fde68a           │
│ Icon ⚠️ 20px #f59e0b                  │
│ Title 14px Semi-bold #92400e          │
│ Desc 14px Regular #78350f             │
└────────────────────────────────────────┘

Type : Info
┌────────────────────────────────────────┐
│ ℹ️  Information                        │
│    Voici un détail important.         │
│                                        │
│ BG #eff6ff • Border #dbeafe           │
│ Icon ℹ️ 20px #3b82f6                  │
│ Title 14px Semi-bold #1e40af          │
│ Desc 14px Regular #1e3a8a             │
└────────────────────────────────────────┘

Properties :
- Type (success/error/warning/info)
- Title (string)
- Description (string)
- Icon (component/icon)
- Dismissible (boolean)
- Action button (optional)
```

---

## 🎬 ANIMATIONS & TRANSITIONS

### Transitions standards

```
Button Hover :
- transition: all 150ms ease-in-out
- transform: scale(0.98) on active

Input Focus :
- transition: border-color 150ms ease-in-out
- transition: box-shadow 150ms ease-in-out

Alert Appear :
- animation: slideDown 300ms ease-out
- animation: fadeIn 200ms ease-in

Success Banner Auto-hide :
- animation: fadeOut 300ms ease-in (at 4.7s)
- animation: slideUp 300ms ease-out (at 4.7s)

Loading Spinner :
- animation: spin 1s linear infinite
- keyframes: 0% { transform: rotate(0deg) }
            100% { transform: rotate(360deg) }

Password Rule Validation :
- animation: scaleIn 150ms ease-out
- animation: fadeIn 150ms ease-in
```

---

## ✅ RÉSUMÉ DES DELIVERABLES

### Fichier Figma doit contenir :

1. ✅ **16 écrans** (tous les états)
2. ✅ **7 composants** (réutilisables)
3. ✅ **Version Desktop** (480px container)
4. ✅ **Version Mobile** (375px viewport)
5. ✅ **5 flows prototypés** (interactions)
6. ✅ **Design tokens** (couleurs, typo, spacing)
7. ✅ **Documentation** (cover page + annotations)
8. ✅ **Variantes** pour chaque composant
9. ✅ **Accessibilité** (contrastes WCAG AA)
10. ✅ **Animations** specs (durées, easings)

---

**Guide créé le** : 3 février 2026  
**Pour compléter** : FIGMA_AUTH_BRIEF.md  
**Projet** : CCNTS - Cabinet de Cartographie Numérique
