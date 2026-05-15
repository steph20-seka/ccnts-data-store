# 📚 Index de la documentation CCNTS

## 🚀 Démarrage rapide

**Nouveau sur le projet ?** Commencez par :
1. [NOUVEAU_GOOGLE_AUTH.md](../NOUVEAU_GOOGLE_AUTH.md) - 🆕 Connexion avec Google (nouvelle fonctionnalité)
2. [QUOI_DE_NEUF.md](../QUOI_DE_NEUF.md) - Derniers changements en français simple
3. [FIREBASE_SETUP.md](../FIREBASE_SETUP.md) - Configuration Firebase (OBLIGATOIRE)
4. [README.md](../README.md) - Documentation principale du projet

---

## 📖 Documentation principale

### Pour tous
- [README.md](../README.md) - Vue d'ensemble complète du projet
- [QUOI_DE_NEUF.md](../QUOI_DE_NEUF.md) - Ce qui vient d'être fait (en français simple)
- [CHANGELOG.md](../CHANGELOG.md) - Historique détaillé de toutes les versions

### Configuration Firebase
- [FIREBASE_SETUP.md](../FIREBASE_SETUP.md) ⭐ **À LIRE EN PREMIER** - Guide de configuration
- [GOOGLE_AUTH_SETUP.md](../GOOGLE_AUTH_SETUP.md) 🆕 **NOUVEAU** - Connexion avec Google
- [FIREBASE_SUMMARY.md](../FIREBASE_SUMMARY.md) - Résumé de la migration
- [USAGE_EXAMPLES.md](../USAGE_EXAMPLES.md) - Exemples de code Firebase

---

## 🗂️ Documentation technique (dossier /guidelines)

### Migration et nouveautés
- [FirebaseMigration.md](./FirebaseMigration.md) - Guide détaillé de la migration Supabase → Firebase
- [PageTitleAndTranslationUpdate.md](./PageTitleAndTranslationUpdate.md) - Titres de page et traductions
- [FaviconGuide.md](./FaviconGuide.md) - Guide d'ajout du favicon CCNTS

### Design et architecture
- [Guidelines.md](./Guidelines.md) - Lignes directrices générales du projet
- [ColorSystem.md](./ColorSystem.md) - Palette de couleurs géospatiales
- [AccessibilityGuide.md](./AccessibilityGuide.md) - Guide d'accessibilité

### Fonctionnalités avancées
- [IntelligentMappingSystem.md](./IntelligentMappingSystem.md) - Système cartographique intelligent
- [SystemeCartographiqueIntelligent_Recap.md](./SystemeCartographiqueIntelligent_Recap.md) - Récapitulatif
- [MapZoomFeature.md](./MapZoomFeature.md) - Fonctionnalité de zoom de carte

### Performance
- [PerformanceOptimization.md](./PerformanceOptimization.md) - Guide d'optimisation détaillé
- [PerformanceOptimization-Summary.md](./PerformanceOptimization-Summary.md) - Résumé

---

## 🔥 Firebase - Documentation complète

### Configuration (IMPORTANT)
1. **[FIREBASE_SETUP.md](../FIREBASE_SETUP.md)** ⚠️ **OBLIGATOIRE**
   - Configurer les règles de sécurité Firestore
   - Activer Email/Password
   - Autoriser votre domaine

2. **[FIREBASE_SUMMARY.md](../FIREBASE_SUMMARY.md)**
   - Résumé de la migration
   - Actions requises
   - Checklist de déploiement

### Pour les développeurs
3. **[USAGE_EXAMPLES.md](../USAGE_EXAMPLES.md)**
   - Exemples d'authentification
   - Exemples de sauvegarde de données
   - Exemples de récupération de données
   - Code prêt à copier-coller

4. **[FirebaseMigration.md](./FirebaseMigration.md)**
   - Guide technique détaillé
   - Structure Firestore
   - Services disponibles
   - Migration depuis Supabase

---

## 📂 Fichiers de configuration

### Firebase
- `.firebaserc` - Configuration du projet Firebase
- `firestore.rules` - Règles de sécurité Firestore ⚠️ À déployer

### Projet
- `.gitignore` - Fichiers exclus de Git
- `/public/favicon.svg` - Favicon CCNTS
- `/public/site.webmanifest` - Manifest PWA

---

## 🎯 Par cas d'usage

### Je veux configurer Firebase pour la première fois
1. [FIREBASE_SETUP.md](../FIREBASE_SETUP.md)
2. [QUOI_DE_NEUF.md](../QUOI_DE_NEUF.md)

### Je veux comprendre comment utiliser Firebase dans le code
1. [USAGE_EXAMPLES.md](../USAGE_EXAMPLES.md)
2. [FirebaseMigration.md](./FirebaseMigration.md)

### Je veux comprendre la structure du projet
1. [README.md](../README.md)
2. [Guidelines.md](./Guidelines.md)

### Je veux personnaliser le design
1. [ColorSystem.md](./ColorSystem.md)
2. [AccessibilityGuide.md](./AccessibilityGuide.md)

### Je veux optimiser les performances
1. [PerformanceOptimization-Summary.md](./PerformanceOptimization-Summary.md)
2. [PerformanceOptimization.md](./PerformanceOptimization.md)

### Je veux comprendre le système cartographique
1. [IntelligentMappingSystem.md](./IntelligentMappingSystem.md)
2. [MapZoomFeature.md](./MapZoomFeature.md)

---

## 🆘 Résolution de problèmes

### Firebase ne fonctionne pas
➡️ [FIREBASE_SETUP.md](../FIREBASE_SETUP.md) - Section "Dépannage"

### Erreur "Missing permissions"
➡️ [FIREBASE_SETUP.md](../FIREBASE_SETUP.md) - Étape 1 (Règles Firestore)

### Comment traduire le site ?
➡️ [PageTitleAndTranslationUpdate.md](./PageTitleAndTranslationUpdate.md)

### Le favicon ne s'affiche pas
➡️ [FaviconGuide.md](./FaviconGuide.md)

### Le site est lent
➡️ [PerformanceOptimization-Summary.md](./PerformanceOptimization-Summary.md)

---

## 📞 Ressources externes

### Firebase
- Console Firebase : https://console.firebase.google.com/project/ccnts-d3772
- Documentation Firebase : https://firebase.google.com/docs
- Firestore Rules : https://firebase.google.com/docs/firestore/security

### Technologies utilisées
- React : https://react.dev
- Tailwind CSS : https://tailwindcss.com
- i18next : https://www.i18next.com
- Framer Motion : https://www.framer.com/motion

---

## ✅ Checklist de mise en production

Avant de déployer le site :

### Configuration Firebase
- [ ] Règles Firestore configurées (`firestore.rules` déployé)
- [ ] Email/Password activé dans Authentication
- [ ] Domaine de production autorisé
- [ ] Templates d'emails personnalisés (optionnel)

### Tests
- [ ] Authentification testée (inscription, connexion, déconnexion)
- [ ] Sauvegarde de données testée
- [ ] Progression de cours testée
- [ ] Quiz testés
- [ ] Génération de certificats testée

### Design et contenu
- [ ] Favicon visible dans tous les navigateurs
- [ ] Traductions vérifiées (FR, EN, DE, ES)
- [ ] Responsive design vérifié (mobile, tablet, desktop)
- [ ] Images optimisées

### Performance
- [ ] Lighthouse score > 90
- [ ] Temps de chargement < 3 secondes
- [ ] Pas d'erreurs dans la console

---

## 🎯 Prochaines fonctionnalités

Voir [CHANGELOG.md](../CHANGELOG.md) - Section "Prochaines versions prévues"

---

**📚 Documentation maintenue à jour le 3 février 2026**

_Développé pour CCNTS - Cabinet de Cartographie Numérique, de Télédétection et de Statistiques_