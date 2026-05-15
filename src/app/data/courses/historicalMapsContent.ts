export const historicalMapsContent = {
  courseId: 'historical-maps',
  title: 'Comprendre, acquérir et produire des cartes historiques',
  description: 'Formation complète et approfondie sur la cartographie historique, de la théorie à la pratique professionnelle',
  duration: '8-10 heures',
  level: 'Intermédiaire',
  
  modules: [
    {
      number: 1,
      title: 'Introduction aux cartes historiques',
      icon: 'MapPin',
      duration: '90 min',
      
      introduction: {
        text: `Les cartes historiques sont bien plus que de simples représentations géographiques du passé. Elles constituent des documents scientifiques majeurs qui témoignent de l'évolution des sociétés, des territoires, des connaissances et des représentations mentales à travers les époques.

Ce module vous permettra de comprendre en profondeur ce qu'est une carte historique, pourquoi et comment l'étudier avec rigueur, et quelles précautions méthodologiques sont indispensables pour éviter les erreurs d'interprétation.`,
      },

      sections: [
        {
          title: '1.1 Définition et nature des cartes historiques',
          content: `Une carte historique est une représentation cartographique d'un territoire tel qu'il était à une époque donnée. Mais cette définition simple cache une réalité complexe :

**Ce qu'est réellement une carte historique :**
- Un document scientifique daté et contextualisé
- Le reflet des connaissances géographiques d'une époque
- Un témoignage des techniques cartographiques disponibles
- Une représentation influencée par des enjeux politiques, religieux ou économiques
- Un artefact culturel porteur de visions du monde

**Ce qu'elle n'est PAS :**
- Une simple image décorative ou nostalgique
- Une source d'information parfaitement objective
- Une représentation "vraie" au sens absolu
- Un document isolé de son contexte de production

**Types de cartes historiques :**
1. **Cartes d'époque** : produites à l'époque qu'elles représentent (carte de Cassini du 18e siècle)
2. **Cartes rétrospectives** : produites ultérieurement pour reconstituer le passé (carte de Paris au Moyen Âge faite au 20e siècle)
3. **Cartes numérisées** : versions digitales de cartes anciennes
4. **Cartes géoréférencées** : calées sur des systèmes de coordonnées modernes`,
        },

        {
          title: '1.2 Pourquoi étudier l\'histoire à travers les cartes ?',
          content: `La cartographie historique offre des perspectives uniques sur le passé :

**1. Comprendre l'évolution territoriale**
- Exemple concret : Suivre l'expansion urbaine de Abidjan de 1900 à aujourd'hui
- Observer les changements de frontières (Afrique pré et post coloniale)
- Analyser la création de nouvelles infrastructures (routes, ports, chemins de fer)
- Identifier les zones disparues (villages engloutis, anciens cours d'eau)

**2. Visualiser les changements géopolitiques**
- Étudier les empires et leurs évolutions (Empire du Ghana, Empire du Mali)
- Comprendre les recompositions territoriales
- Analyser les zones de conflits historiques
- Observer l'évolution administrative (départements, régions)

**3. Analyser les transformations environnementales**
- Cas pratique : Comparer les cartes de la lagune Ébrié sur 150 ans
- Observer la déforestation progressive
- Suivre l'évolution du trait de côte
- Identifier les anciens marécages asséchés
- Cartographier les changements climatiques historiques

**4. Reconstituer des espaces disparus**
- Villages abandonnés ou déplacés
- Anciennes routes commerciales (routes du sel, de l'or)
- Espaces religieux ou culturels transformés
- Anciens quartiers urbains rasés

**5. Étudier les représentations mentales**
- Comment les sociétés percevaient leur territoire
- Les zones "terra incognita" (terres inconnues)
- Les représentations symboliques (monstres marins, décors)
- Les biais culturels et politiques dans la représentation`,
        },

        {
          title: '1.3 Les erreurs fréquentes et comment les éviter',
          content: `**ERREUR N°1 : L'ANACHRONISME**

*Qu'est-ce que c'est ?*
Projeter des concepts, connaissances ou jugements modernes sur des documents du passé.

*Exemples concrets :*
- Critiquer une carte du 16e siècle pour ne pas montrer l'Amérique "correctement" alors que le continent venait d'être découvert
- S'étonner qu'une carte africaine du 19e siècle soit "eurocentrée" sans comprendre le contexte colonial
- Juger les imprécisions sans considérer les outils disponibles à l'époque

*Comment l'éviter :*
✓ Toujours se demander : "Quelles connaissances avait-on à cette époque ?"
✓ Étudier le contexte historique AVANT d'analyser la carte
✓ Comparer avec d'autres documents de la même période
✓ Accepter l'incertitude et l'imprécision comme normales

---

**ERREUR N°2 : IGNORER LE BIAIS DE REPRÉSENTATION**

*Qu'est-ce que c'est ?*
Croire qu'une carte est neutre et objective, alors qu'elle reflète toujours une vision du monde spécifique.

*Exemples concrets :*
- Les cartes coloniales exagéraient souvent les territoires contrôlés
- Les cartes religieuses médiévales plaçaient Jérusalem au centre
- Les cartes de propagande durant les guerres déformaient les réalités
- Les atlas scolaires reflètent les programmes nationaux

*Comment l'éviter :*
✓ Identifier l'auteur et le commanditaire de la carte
✓ Se demander : "À qui profite cette représentation ?"
✓ Comparer plusieurs cartes de la même époque/région
✓ Chercher ce qui est absent de la carte (aussi important que ce qui est présent)

---

**ERREUR N°3 : MAUVAIS GÉORÉFÉRENCEMENT**

*Qu'est-ce que c'est ?*
Caler incorrectement une carte ancienne sur un système de coordonnées moderne, créant des déformations.

*Exemples concrets :*
- Utiliser trop peu de points de calage (minimum 10-15)
- Choisir des points mal identifiés ou modifiés
- Ignorer les déformations inhérentes au support (papier gondolé)
- Ne pas documenter le processus de géoréférencement

*Comment l'éviter :*
✓ Multiplier les points de contrôle (GCP - Ground Control Points)
✓ Privilégier des éléments stables (confluences, carrefours anciens)
✓ Documenter chaque étape avec captures d'écran
✓ Calculer et publier les marges d'erreur (RMSE)
✓ Utiliser des logiciels adaptés (QGIS, ArcGIS, MapAnalyst)

---

**ERREUR N°4 : INTERPRÉTATION SANS CONTEXTE**

*Exemples :*
- Interpréter un symbole sans connaître sa signification à l'époque
- Traduire des toponymes anciens sans expertise linguistique
- Ignorer l'état de conservation (taches, déchirures)

*Comment l'éviter :*
✓ Consulter des historiens spécialistes de la période
✓ Utiliser des dictionnaires toponymiques
✓ Photographier les zones dégradées avant restauration numérique
✓ Mentionner explicitement les zones d'incertitude

---

**ERREUR N°5 : NE PAS VÉRIFIER LA SOURCE**

*Risques :*
- Utiliser une copie de mauvaise qualité
- Travailler sur un faux ou une carte modifiée
- Ignorer des métadonnées essentielles

*Comment l'éviter :*
✓ Privilégier les archives nationales et institutions reconnues
✓ Vérifier la chaîne de conservation du document
✓ Comparer avec d'autres exemplaires si possible
✓ Noter tous les métadonnées disponibles (date, auteur, échelle, orientation)`,
        },

        {
          title: '1.4 Attitudes professionnelles essentielles',
          content: `**1. ESPRIT CRITIQUE PERMANENT**

L'esprit critique ne signifie pas "tout rejeter" mais "tout questionner constructivement".

Questions à se poser systématiquement :
- Qui a produit cette carte, quand, pourquoi ?
- Quelles sources ont été utilisées ?
- Quels intérêts pouvaient influencer la représentation ?
- Qu'est-ce qui est montré ? Qu'est-ce qui est caché ?
- Cette carte a-t-elle été modifiée depuis sa création ?

---

**2. VÉRIFICATION SYSTÉMATIQUE DES SOURCES**

Hiérarchie de fiabilité des sources :
1. Archives nationales officielles (très fiable)
2. Bibliothèques universitaires reconnues (fiable)
3. Collections privées documentées (moyennement fiable)
4. Images trouvées sur Internet sans source (non fiable)

Checklist de vérification :
□ Nom complet de l'institution conservatrice
□ Cote d'archivage précise
□ Date de création vérifiée
□ Nom de l'auteur/cartographe
□ Échelle indiquée
□ État de conservation décrit

---

**3. CROISEMENT DE PLUSIEURS DOCUMENTS**

Ne jamais se fier à une seule source !

Approche recommandée :
- Comparer au moins 3 cartes de la même époque/zone
- Croiser avec des textes historiques contemporains
- Consulter des photos aériennes historiques si disponibles
- Vérifier avec des relevés de terrain anciens
- Utiliser des témoignages oraux pour périodes récentes

---

**4. CONTEXTUALISATION RIGOUREUSE**

Toute analyse de carte historique doit inclure :
- Le contexte politique (guerre, paix, colonisation...)
- Le contexte économique (commerce, ressources...)
- Le contexte technique (outils disponibles)
- Le contexte culturel (visions du monde)
- Le contexte environnemental (climat, catastrophes...)

---

**5. DOCUMENTATION EXHAUSTIVE**

Principe : "Si ce n'est pas documenté, ça n'existe pas"

À documenter obligatoirement :
- Source exacte de chaque carte utilisée
- Paramètres de numérisation (résolution, format)
- Méthode de géoréférencement (projection, points de calage)
- Corrections appliquées (restauration numérique)
- Décisions d'interprétation (pourquoi tel choix ?)
- Limites et incertitudes identifiées

Format recommandé : Fiche métadonnée par carte
- Titre/Description
- Date de création
- Auteur/Cartographe
- Institution conservatrice + cote
- Échelle originale
- Système de coordonnées (si géoréférencée)
- Résolution de numérisation
- Traitements appliqués
- Bibliographie associée

---

**6. HUMILITÉ FACE AUX INCERTITUDES**

Reconnaître ses limites est une force, pas une faiblesse.

Attitudes professionnelles :
✓ "Je ne sais pas" est une réponse acceptable
✓ Indiquer clairement les zones d'incertitude
✓ Solliciter l'avis d'experts quand nécessaire
✓ Publier les marges d'erreur
✓ Accepter la critique constructive

Vocabulaire professionnel :
- "Probablement" plutôt que "certainement"
- "D'après nos sources" plutôt que "c'est vrai que"
- "Selon notre interprétation" plutôt que "c'est comme ça"
- "Avec une marge d'erreur de..." plutôt que des affirmations absolues`,
        },
      ],

      practicalExercises: [
        {
          title: '🎯 Exercice pratique 1 : Analyse critique d\'une carte',
          task: `Prenez n'importe quelle carte historique (de votre pays ou région) et répondez :
1. Qui l'a créée ? Dans quel contexte ?
2. Quels sont les 3 biais potentiels ?
3. Quelles informations manquent ?
4. Comment vérifieriez-vous sa fiabilité ?`,
        },
        {
          title: '🎯 Exercice pratique 2 : Détection d\'anachronismes',
          task: `Imaginez que vous analysez une carte de l'Afrique de 1850. 
Identifiez 5 erreurs anachroniques qu'un débutant pourrait commettre dans son analyse.`,
        },
      ],

      keyTakeaways: [
        'Une carte historique n\'est jamais neutre : elle reflète des connaissances, techniques et idéologies d\'une époque',
        'L\'anachronisme est l\'erreur la plus fréquente : ne jugez jamais le passé avec les yeux du présent',
        'L\'esprit critique, la vérification des sources et la documentation exhaustive sont les piliers du travail professionnel',
        'Reconnaître les limites et incertitudes est une preuve de rigueur scientifique',
        'Toujours croiser plusieurs sources avant de tirer des conclusions',
      ],

      resources: [
        {
          title: 'Gallica (BnF) - Cartes et plans',
          url: 'https://gallica.bnf.fr/cartes',
          description: 'Plus de 80 000 cartes historiques numérisées en haute résolution',
        },
        {
          title: 'David Rumsey Map Collection',
          url: 'https://www.davidrumsey.com/',
          description: 'Collection privée de plus de 150 000 cartes historiques du monde entier',
        },
        {
          title: 'Old Maps Online',
          url: 'https://www.oldmapsonline.org/',
          description: 'Portail d\'accès aux cartes historiques géolocalisées',
        },
      ],
    },

    // Module 2 sera développé de la même manière...
  ],
};
