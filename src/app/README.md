# 🌍 CCNTS – Cabinet de Cartographie Numérique, de Télédétection et de Statistiques

Site web professionnel vitrine pour CCNTS avec système d'académie, Data Store et authentification Firebase.

---

## 🚀 Technologies utilisées

- **React** + **TypeScript** - Framework frontend moderne
- **Tailwind CSS v4** - Styling avec design system personnalisé
- **Firebase** - Authentification et base de données Firestore
- **React Router** - Navigation SPA
- **i18next** - Internationalisation (FR, EN, DE, ES)
- **Motion (Framer Motion)** - Animations fluides
- **Recharts** - Graphiques et visualisations

---

## 🔥 Firebase

Ce site utilise Firebase pour :
- ✅ **Authentification** des utilisateurs (Email/Password)
- ✅ **Firestore** pour stocker les données (profils, progression, certificats)
- ✅ **Storage** pour les fichiers (certificats PDF)

**➡️ Voir [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) pour configurer Firebase**

**Projet Firebase** : `ccnts-d3772`

---

## 📁 Structure du projet

```
/
├── components/          # Composants React réutilisables
│   ├── layout/          # Header, Footer, TopBar
│   ├── home/            # Composants page d'accueil
│   ├── academy/         # Composants académie
│   ├── datastore/       # Composants Data Store
│   ├── FirebaseAuthModal.tsx  # Modal d'authentification
│   └── ui/              # Composants UI (buttons, cards, etc.)
├── pages/               # Pages principales
│   ├── HomePage.tsx
│   ├── ServicesPage.tsx
│   ├── AcademyPage.tsx
│   ├── DataStorePage.tsx
│   ├── AboutPage.tsx
│   └── ContactPage.tsx
├── contexts/            # Contextes React
│   ├── FirebaseAuthContext.tsx  # Authentification Firebase
│   └── AuthContext.tsx          # Wrapper de compatibilité
├── lib/                 # Bibliothèques et utilitaires
│   ├── firebaseClient.ts        # Configuration Firebase
│   ├── firestoreServices.ts     # Services Firestore
│   └── i18n.ts                  # Configuration i18n
├── locales/             # Fichiers de traduction
│   ├── fr/translation.ts
│   ├── en/translation.ts
│   ├── de/translation.ts
│   └── es/translation.ts
├── styles/              # Styles globaux
│   └── globals.css      # Tailwind + variables CSS
├── data/                # Données statiques
├── hooks/               # Hooks personnalisés
├── public/              # Assets statiques
│   ├── favicon.svg      # Favicon CCNTS
│   └── site.webmanifest # Manifest PWA
└── guidelines/          # Documentation
    ├── FirebaseMigration.md
    ├── FaviconGuide.md
    └── ...
```

---

## 🎨 Design System

Le site utilise une palette de couleurs géospatiales cohérente :

- **Bleu profond** (#1e3a8a) - Couleur principale scientifique
- **Orange/Terre** (#f97316) - Accents cartographie
- **Blanc/Gris clair** - Arrière-plans
- **Vert** - Succès, validation

Voir `/styles/globals.css` pour toutes les variables CSS personnalisées.

---

## 🌐 Internationalisation

Le site est disponible en 4 langues :
- 🇫🇷 Français (par défaut)
- 🇬🇧 Anglais
- 🇩🇪 Allemand
- 🇪🇸 Espagnol

Tous les textes sont traduits via `react-i18next`.

---

## 📚 Pages principales

### 🏠 Accueil (`/`)
- Hero avec animation satellite
- Expertises CCNTS
- Projets récents
- Témoignages clients
- Carte du jour

### 🛠️ Services (`/services`)
- Grille de services géospatiaux
- Outils et technologies
- Formations disponibles

### 🎓 Académie (`/academy`)
- Cours gratuits et payants
- Système de quiz
- Génération de certificats
- Suivi de progression (Firebase)

### 📊 Data Store (`/data-store`)
- Catalogue de 100+ villes ivoiriennes
- Filtres avancés
- Intégration paiement Chariow
- Achat de données géospatiales

### 👥 À propos (`/about`)
- Présentation CCNTS
- Équipe
- Vision et mission

### 📧 Contact (`/contact`)
- Formulaire de contact
- Informations de localisation

---

## 🔐 Authentification

### Fonctionnalités :
- ✅ Inscription avec email/password
- ✅ Connexion sécurisée
- ✅ Réinitialisation de mot de passe
- ✅ Profils utilisateur dans Firestore
- ✅ Gestion de session persistante

### Utilisation :
```typescript
import { useFirebaseAuth } from './contexts/FirebaseAuthContext';

const { user, signIn, signUp, signOut } = useFirebaseAuth();
```

---

## 💾 Stockage des données

### Collections Firestore :

**profiles** : Profils utilisateur
**course_progress** : Progression dans les cours
**quiz_results** : Résultats des quiz
**certificates** : Certificats émis

Voir [FirebaseMigration.md](./guidelines/FirebaseMigration.md) pour plus de détails.

---

## 🏆 Académie - Système de certification

1. L'utilisateur suit un cours
2. La progression est sauvegardée dans Firestore
3. L'utilisateur passe le quiz (score minimum 70%)
4. Si réussi, un certificat PDF est généré
5. Le certificat est sauvegardé avec un code de vérification unique

---

## 🛒 Data Store - Achat de données

1. L'utilisateur parcourt le catalogue
2. Filtre par ville, type de données, format
3. Ajoute au panier
4. Paiement via Chariow (intégration à venir)
5. Téléchargement des données

---

## 🎯 Titre des pages

Format professionnel : **"CCNTS – [Nom de la page]"**

Exemples :
- `CCNTS – Accueil`
- `CCNTS – Home`
- `CCNTS – Services`
- `CCNTS – Data Store`

Avec favicon géospatial (globe + pin de localisation).

---

## 📱 Responsive Design

Le site est entièrement responsive :
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

---

## ⚡ Performance

- Lazy loading des pages
- Optimisation des images
- Code splitting automatique
- Animations optimisées avec Motion

---

## 🔧 Configuration requise

### Firebase

1. Créer un projet Firebase : `ccnts-d3772`
2. Activer Authentication (Email/Password)
3. Activer Firestore Database
4. Configurer les règles de sécurité (voir FIREBASE_SETUP.md)
5. Autoriser vos domaines

### Environnement local

Les credentials Firebase sont déjà dans `/lib/firebaseClient.ts`.

---

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build
```

---

## 🆘 Support & Documentation

- **Firebase Setup** : [FIREBASE_SETUP.md](./FIREBASE_SETUP.md)
- **Migration Guide** : [guidelines/FirebaseMigration.md](./guidelines/FirebaseMigration.md)
- **Favicon Guide** : [guidelines/FaviconGuide.md](./guidelines/FaviconGuide.md)
- **Color System** : [guidelines/ColorSystem.md](./guidelines/ColorSystem.md)

---

## ✅ Checklist de déploiement

- [ ] Configurer les règles Firestore
- [ ] Autoriser le domaine de production dans Firebase
- [ ] Tester l'authentification
- [ ] Tester la sauvegarde des données
- [ ] Vérifier les traductions (FR, EN, DE, ES)
- [ ] Tester sur mobile
- [ ] Optimiser les images
- [ ] Configurer le paiement Chariow (Data Store)

---

**Développé avec ❤️ par CCNTS**

🌍 Cabinet de Cartographie Numérique, de Télédétection et de Statistiques
