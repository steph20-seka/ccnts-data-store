export const historicalMapsQuiz = {
  courseId: 'historical-maps',
  courseName: 'Comprendre, acquérir et produire des cartes historiques',
  passingScore: 80, // 24/30 requis
  maxAttempts: 3,
  
  questions: [
    // SECTION 1 : DÉFINITIONS ET CONCEPTS DE BASE (Questions 1-8, Facile)
    {
      id: 1,
      difficulty: 'facile',
      type: 'qcm-unique',
      question: "Qu'est-ce qu'une carte historique ?",
      options: [
        "Une carte très ancienne sans valeur scientifique",
        "Une représentation cartographique d'un territoire à une époque donnée",
        "Une carte dessinée à la main obligatoirement",
        "Une carte qui contient des erreurs d'échelle"
      ],
      correctAnswer: 1,
      explanation: "Une carte historique est une représentation cartographique d'un territoire tel qu'il était à une époque donnée. Elle témoigne des connaissances géographiques, des frontières, et de l'occupation du sol à un moment précis du passé. Ce n'est pas une simple curiosité mais un document scientifique."
    },

    {
      id: 2,
      difficulty: 'facile',
      type: 'vrai-faux',
      question: "Vrai ou Faux : Une carte historique est toujours objective et neutre.",
      options: ["Vrai", "Faux"],
      correctAnswer: 1,
      explanation: "FAUX. Aucune carte n'est neutre. Toute carte historique reflète une vision du monde influencée par des enjeux politiques, religieux, économiques ou culturels de son époque. L'auteur, le commanditaire et le contexte de production influencent toujours la représentation."
    },

    {
      id: 3,
      difficulty: 'facile',
      type: 'qcm-unique',
      question: "Quelle est la différence entre une 'carte d'époque' et une 'carte rétrospective' ?",
      options: [
        "Il n'y a aucune différence, ce sont des synonymes",
        "Une carte d'époque a été produite à l'époque qu'elle représente, une carte rétrospective est produite ultérieurement",
        "Une carte rétrospective est toujours plus fiable",
        "Une carte d'époque est obligatoirement numérisée"
      ],
      correctAnswer: 1,
      explanation: "Une carte D'ÉPOQUE a été créée à l'époque qu'elle représente (ex: carte de Cassini au 18e siècle). Une carte RÉTROSPECTIVE est produite ultérieurement pour reconstituer le passé (ex: carte du Paris médiéval faite au 20e siècle). Les deux ont des valeurs différentes pour la recherche."
    },

    {
      id: 4,
      difficulty: 'facile',
      type: 'qcm-unique',
      question: "Quel est le principal danger dans l'analyse d'une carte historique ?",
      options: [
        "La taille du document",
        "L'anachronisme : projeter des concepts modernes sur le passé",
        "La langue utilisée",
        "Le coût d'acquisition de la carte"
      ],
      correctAnswer: 1,
      explanation: "L'ANACHRONISME est le danger majeur : il consiste à projeter nos connaissances, concepts et jugements actuels sur les représentations du passé. Par exemple, critiquer une carte du 16e siècle pour des 'erreurs' que seuls les outils du 21e siècle permettent d'éviter."
    },

    {
      id: 5,
      difficulty: 'moyen',
      type: 'qcm-multiple',
      question: "Quels sont les types d'informations qu'une carte historique peut révéler ? (Plusieurs réponses possibles)",
      options: [
        "L'évolution des frontières politiques",
        "Les transformations environnementales",
        "Les représentations mentales d'une époque",
        "La météo du jour de création de la carte",
        "Les anciennes routes commerciales"
      ],
      correctAnswers: [0, 1, 2, 4],
      explanation: "Les cartes historiques révèlent : les frontières politiques, les transformations environnementales, les représentations mentales (vision du monde), les routes commerciales, l'urbanisation, etc. En revanche, elles ne documentent PAS la météo ponctuelle."
    },

    {
      id: 6,
      difficulty: 'moyen',
      type: 'qcm-unique',
      question: "Pourquoi est-il important de 'croiser plusieurs sources' lors de l'analyse d'une carte historique ?",
      options: [
        "Pour gagner du temps",
        "Parce qu'une seule source peut contenir des erreurs, biais ou informations incomplètes",
        "C'est une obligation légale",
        "Pour remplir les pages d'un rapport"
      ],
      correctAnswer: 1,
      explanation: "Croiser plusieurs sources permet de vérifier la fiabilité des informations, d'identifier les biais spécifiques à chaque document, de combler les lacunes, et d'obtenir une vision plus complète et nuancée. Une seule carte peut être biaisée, incomplète ou erronée."
    },

    {
      id: 7,
      difficulty: 'facile',
      type: 'vrai-faux',
      question: "Vrai ou Faux : Il est acceptable de dire 'Je ne sais pas' quand on analyse une carte historique.",
      options: ["Vrai", "Faux"],
      correctAnswer: 0,
      explanation: "VRAI. Reconnaître ses limites et les zones d'incertitude est une preuve de rigueur scientifique et d'honnêteté intellectuelle. Un professionnel compétent sait identifier ce qu'il ne peut pas affirmer avec certitude."
    },

    {
      id: 8,
      difficulty: 'facile',
      type: 'qcm-unique',
      question: "Qu'est-ce qu'un 'biais de représentation' dans une carte historique ?",
      options: [
        "Une erreur technique de dessin",
        "Une influence politique, culturelle ou idéologique qui affecte la manière dont le territoire est représenté",
        "Une déformation due au vieillissement du papier",
        "Un problème d'imprimerie"
      ],
      correctAnswer: 1,
      explanation: "Un biais de représentation est une influence (politique, culturelle, religieuse, idéologique) qui affecte la façon dont le cartographe représente le territoire. Exemples : exagérer ses territoires, minimiser ceux de l'ennemi, placer sa capitale au centre, etc."
    },

    // SECTION 2 : HISTOIRE DE LA CARTOGRAPHIE (Questions 9-14, Facile-Moyen)
    {
      id: 9,
      difficulty: 'facile',
      type: 'qcm-unique',
      question: "Quelle période historique a vu l'apparition des projections cartographiques mathématiques modernes ?",
      options: [
        "Antiquité",
        "Moyen Âge",
        "Renaissance",
        "XXe siècle"
      ],
      correctAnswer: 2,
      explanation: "La Renaissance (15e-16e siècles) a marqué une révolution cartographique avec l'apparition des projections mathématiques modernes, notamment grâce à Mercator (1569). Cette période coïncide avec les grandes découvertes et le développement des sciences."
    },

    {
      id: 10,
      difficulty: 'moyen',
      type: 'qcm-unique',
      question: "Qu'est-ce que la 'carte de Cassini' et pourquoi est-elle importante ?",
      options: [
        "Une carte du ciel pour l'astronomie",
        "La première carte topographique générale et systématique d'un pays (France, 18e siècle)",
        "Une carte maritime italienne",
        "Un atlas scolaire moderne"
      ],
      correctAnswer: 1,
      explanation: "La carte de Cassini (1756-1789) est la première carte topographique générale et systématique d'un pays entier (la France). Elle a été réalisée par triangulation géodésique, une méthode scientifique révolutionnaire qui a permis une précision sans précédent."
    },

    {
      id: 11,
      difficulty: 'moyen',
      type: 'qcm-unique',
      question: "Quel rôle ont joué les savants arabes durant le Moyen Âge européen ?",
      options: [
        "Ils n'ont eu aucun rôle dans la cartographie",
        "Ils ont préservé et développé l'héritage grec (Ptolémée) pendant que l'Europe stagnait",
        "Ils ont copié exactement les cartes européennes",
        "Ils ont uniquement fait des cartes religieuses"
      ],
      correctAnswer: 1,
      explanation: "Durant le Moyen Âge européen (période de déclin scientifique en Europe), les savants arabes ont préservé, traduit et enrichi l'héritage grec, notamment les travaux de Ptolémée. Al-Idrisi (12e siècle) a produit des cartes remarquables qui surpassaient celles de l'Europe médiévale."
    },

    {
      id: 12,
      difficulty: 'facile',
      type: 'qcm-unique',
      question: "Qu'est-ce qu'une 'mappemonde' (mappa mundi) médiévale ?",
      options: [
        "Une carte scientifique très précise",
        "Une carte du monde avec une vision religieuse (Jérusalem au centre, représentations symboliques)",
        "La première carte satellite",
        "Un globe terrestre"
      ],
      correctAnswer: 1,
      explanation: "Les mappae mundi médiévales étaient des représentations symboliques et religieuses du monde connu. Jérusalem était souvent placée au centre (vision christocentrique), et les cartes contenaient des éléments mythologiques. Leur but n'était pas la précision géographique mais la représentation d'une vision du monde."
    },

    {
      id: 13,
      difficulty: 'moyen',
      type: 'mise-en-situation',
      question: "Vous trouvez une carte sans date qui montre l'Afrique avec des zones marquées 'Terra Incognita' (terres inconnues) à l'intérieur du continent. De quelle période peut-elle dater ?",
      options: [
        "Antiquité (avant J.-C.)",
        "15e-19e siècle (avant l'exploration complète de l'intérieur africain)",
        "20e siècle",
        "21e siècle"
      ],
      correctAnswer: 1,
      explanation: "Les zones 'Terra Incognita' à l'intérieur de l'Afrique indiquent que la carte date probablement du 15e au 19e siècle. Bien que les côtes africaines fussent connues dès l'Antiquité, l'intérieur du continent n'a été exploré et cartographié par les Européens qu'au 19e siècle. Cela reflète un état des connaissances de cette période."
    },

    {
      id: 14,
      difficulty: 'moyen',
      type: 'qcm-unique',
      question: "Quelle innovation technique du 20e siècle a révolutionné la cartographie ?",
      options: [
        "L'invention du papier",
        "La photographie aérienne et la télédétection satellitaire",
        "L'imprimerie",
        "La boussole"
      ],
      correctAnswer: 1,
      explanation: "La photographie aérienne (début 20e siècle) puis la télédétection par satellite (années 1960-70) ont révolutionné la cartographie en permettant une couverture systématique, rapide et précise de vastes territoires. Le GPS et les SIG ont ensuite démocratisé l'accès à la cartographie."
    },

    // SECTION 3 : SOURCES ET ACQUISITION (Questions 15-20, Moyen-Difficile)
    {
      id: 15,
      difficulty: 'moyen',
      type: 'qcm-unique',
      question: "Quelle plateforme numérique française offre un accès gratuit à plus de 80 000 cartes historiques en haute résolution ?",
      options: [
        "Google Maps Historical",
        "Gallica (Bibliothèque nationale de France)",
        "OpenStreetMap",
        "Wikipedia Commons"
      ],
      correctAnswer: 1,
      explanation: "Gallica (gallica.bnf.fr) est la bibliothèque numérique de la BnF qui offre un accès gratuit à plus de 80 000 cartes et plans historiques numérisés en haute résolution. C'est une ressource incontournable pour la cartographie historique, notamment pour la France et ses anciennes colonies."
    },

    {
      id: 16,
      difficulty: 'moyen',
      type: 'qcm-multiple',
      question: "Quels critères devez-vous OBLIGATOIREMENT vérifier avant d'utiliser une carte historique pour un travail professionnel ? (Plusieurs réponses)",
      options: [
        "La source et l'institution conservatrice",
        "La couleur du papier original",
        "La date de création et l'auteur",
        "Le prix d'achat de la carte",
        "L'échelle et l'état de conservation"
      ],
      correctAnswers: [0, 2, 4],
      explanation: "Les critères OBLIGATOIRES sont : la source/institution (fiabilité), la date de création (contexte), l'auteur (crédibilité), l'échelle (précision) et l'état de conservation (lisibilité). La couleur du papier et le prix ne sont pas des critères de validité scientifique."
    },

    {
      id: 17,
      difficulty: 'difficile',
      type: 'mise-en-situation',
      question: "Vous trouvez sur Internet une magnifique carte ancienne de votre ville, mais sans aucune information sur sa provenance. Quelle doit être votre réaction professionnelle ?",
      options: [
        "L'utiliser immédiatement car elle est belle",
        "Ne PAS l'utiliser tant que la source, la date et l'auteur ne sont pas vérifiés auprès d'une institution reconnue",
        "L'utiliser mais sans citer la source",
        "Demander l'avis de vos amis sur les réseaux sociaux"
      ],
      correctAnswer: 1,
      explanation: "RÉPONSE PROFESSIONNELLE : Ne JAMAIS utiliser un document sans source vérifiée. Cette carte pourrait être un faux, une copie altérée, ou comporter des erreurs. Il faut retrouver l'original dans une archive ou bibliothèque reconnue, vérifier les métadonnées, et documenter la chaîne de conservation."
    },

    {
      id: 18,
      difficulty: 'moyen',
      type: 'qcm-unique',
      question: "Qu'est-ce qu'une 'cote d'archivage' et pourquoi est-elle importante ?",
      options: [
        "Le prix de la carte",
        "Une note de qualité esthétique",
        "Un identifiant unique qui permet de retrouver le document original dans une archive",
        "La date de numérisation"
      ],
      correctAnswer: 2,
      explanation: "Une cote d'archivage est un identifiant unique (exemple : GE D-14822) qui permet de localiser précisément un document dans une archive ou bibliothèque. C'est essentiel pour la traçabilité, la vérification des sources, et pour permettre à d'autres chercheurs de consulter le même document."
    },

    {
      id: 19,
      difficulty: 'difficile',
      type: 'qcm-unique',
      question: "Quelle est la hiérarchie de fiabilité des sources pour les cartes historiques (du plus fiable au moins fiable) ?",
      options: [
        "Internet → Collections privées → Archives nationales → Bibliothèques",
        "Archives nationales → Bibliothèques universitaires → Collections privées documentées → Images Internet sans source",
        "Collections privées → Internet → Bibliothèques → Archives",
        "Toutes les sources ont la même fiabilité"
      ],
      correctAnswer: 1,
      explanation: "Hiérarchie de fiabilité : 1) Archives nationales (conservation professionnelle, traçabilité) 2) Bibliothèques universitaires reconnues 3) Collections privées documentées 4) Images Internet SANS source (non fiable). Toujours privilégier les institutions officielles."
    },

    {
      id: 20,
      difficulty: 'moyen',
      type: 'vrai-faux',
      question: "Vrai ou Faux : Une carte historique trouvée sur Wikipedia Commons peut être utilisée directement sans vérification supplémentaire.",
      options: ["Vrai", "Faux"],
      correctAnswer: 1,
      explanation: "FAUX. Même sur des plateformes comme Wikipedia Commons, il faut TOUJOURS vérifier la source originale, la date, l'auteur et l'institution conservatrice. Des erreurs de datation, d'attribution ou de qualité de numérisation peuvent exister. Remontez toujours à la source primaire."
    },

    // SECTION 4 : GÉORÉFÉRENCEMENT (Questions 21-25, Moyen-Difficile)
    {
      id: 21,
      difficulty: 'moyen',
      type: 'qcm-unique',
      question: "Qu'est-ce que le 'géoréférencement' d'une carte historique ?",
      options: [
        "La numérisation de la carte",
        "Le processus de calage d'une carte ancienne sur un système de coordonnées géographiques modernes",
        "L'ajout de légendes sur la carte",
        "La restauration numérique des couleurs"
      ],
      correctAnswer: 1,
      explanation: "Le géoréférencement est le processus technique qui consiste à caler (aligner) une carte historique sur un système de coordonnées géographiques modernes (ex: WGS84). Cela permet de superposer la carte ancienne avec des données actuelles et d'analyser les changements."
    },

    {
      id: 22,
      difficulty: 'difficile',
      type: 'qcm-unique',
      question: "Combien de points de calage (GCP - Ground Control Points) sont MINIMUMS recommandés pour un géoréférencement de qualité ?",
      options: [
        "2-3 points suffisent",
        "5-6 points",
        "10-15 points minimum",
        "Aucun point n'est nécessaire"
      ],
      correctAnswer: 2,
      explanation: "Pour un géoréférencement de qualité professionnelle, il faut au MINIMUM 10-15 points de calage (GCP) bien répartis sur toute la carte. Plus il y a de points, meilleure sera la précision. Utiliser seulement 3-4 points conduit à des déformations importantes."
    },

    {
      id: 23,
      difficulty: 'moyen',
      type: 'qcm-multiple',
      question: "Quels types d'éléments sont les MEILLEURS choix pour des points de calage (GCP) ? (Plusieurs réponses)",
      options: [
        "Des confluences de rivières (généralement stables)",
        "Des bâtiments modernes",
        "Des carrefours de routes anciennes",
        "Des arbres isolés",
        "Des sommets de montagnes"
      ],
      correctAnswers: [0, 2, 4],
      explanation: "Les MEILLEURS GCP sont des éléments STABLES dans le temps : confluences de rivières, carrefours anciens, sommets de montagnes. ÉVITER : bâtiments modernes (n'existaient pas), arbres (déplacés/coupés), littoraux (érosion), zones urbanisées récemment."
    },

    {
      id: 24,
      difficulty: 'difficile',
      type: 'qcm-unique',
      question: "Qu'est-ce que le RMSE (Root Mean Square Error) dans le contexte du géoréférencement ?",
      options: [
        "Le nombre total de points utilisés",
        "Un indicateur statistique de la précision du géoréférencement (marge d'erreur moyenne)",
        "Le temps nécessaire pour géoréférencer",
        "Le format de fichier de sortie"
      ],
      correctAnswer: 1,
      explanation: "Le RMSE (Root Mean Square Error = Erreur quadratique moyenne) est un indicateur statistique qui mesure la précision du géoréférencement. Il exprime la marge d'erreur moyenne en mètres ou pixels. Un RMSE faible (<10m pour cartes anciennes) indique un bon géoréférencement. Il DOIT être publié avec la carte géoréférencée."
    },

    {
      id: 25,
      difficulty: 'difficile',
      type: 'mise-en-situation',
      question: "Après géoréférencement, vous constatez que votre RMSE est de 150 mètres sur une carte du 18e siècle. Que devez-vous faire ?",
      options: [
        "C'est parfait, publier immédiatement",
        "Analyser les causes (trop peu de GCP ? mauvais choix de points ? déformations du support ?) et améliorer le processus",
        "Ignorer le RMSE car ce n'est pas important",
        "Changer de logiciel uniquement"
      ],
      correctAnswer: 1,
      explanation: "Un RMSE de 150m sur une carte ancienne n'est pas catastrophique mais peut être amélioré. Il faut ANALYSER les causes : nombre insuffisant de GCP ? Mauvais choix de points ? Déformations du papier ? Puis DOCUMENTER ce RMSE et ses limites dans la publication, et si possible, améliorer le géoréférencement."
    },

    // SECTION 5 : MÉTHODOLOGIE PROFESSIONNELLE (Questions 26-30, Difficile)
    {
      id: 26,
      difficulty: 'difficile',
      type: 'mise-en-situation',
      question: "Un collègue vous présente une carte coloniale de 1920 montrant l'Afrique avec des frontières 'tribales' très simplifiées. Il l'utilise pour affirmer que 'les tribus étaient clairement séparées'. Quelle est votre réaction professionnelle ?",
      options: [
        "Accepter l'analyse sans question",
        "Alerter sur le BIAIS COLONIAL : ces cartes simplifiaient les réalités complexes pour des besoins administratifs européens",
        "Dire que toutes les cartes de 1920 sont fausses",
        "Proposer d'utiliser Google Maps à la place"
      ],
      correctAnswer: 1,
      explanation: "RÉPONSE CRITIQUE : Les cartes coloniales avaient des BIAIS énormes. Elles simplifiaient les réalités sociales complexes (ethnies, royaumes, migrations) pour des besoins administratifs européens. Les 'frontières tribales' étaient souvent des inventions coloniales. Il faut CONTEXTUALISER, croiser avec d'autres sources (témoignages, recherches anthropologiques), et éviter l'anachronisme."
    },

    {
      id: 27,
      difficulty: 'moyen',
      type: 'qcm-unique',
      question: "Quelle est la PREMIÈRE étape avant toute analyse d'une carte historique ?",
      options: [
        "Commencer immédiatement l'analyse visuelle",
        "Identifier et documenter les métadonnées : source, date, auteur, contexte",
        "Géoréférencer la carte",
        "Publier la carte sur les réseaux sociaux"
      ],
      correctAnswer: 1,
      explanation: "La PREMIÈRE étape est toujours : IDENTIFIER et DOCUMENTER les métadonnées (source, date, auteur, échelle, institution, cote, contexte historique). Sans ces informations, toute analyse sera biaisée ou impossible à vérifier. Le contexte AVANT l'analyse."
    },

    {
      id: 28,
      difficulty: 'difficile',
      type: 'qcm-multiple',
      question: "Vous devez documenter une carte historique pour un projet scientifique. Quelles informations sont OBLIGATOIRES dans la fiche métadonnée ? (Plusieurs réponses)",
      options: [
        "Titre et description de la carte",
        "La couleur préférée du cartographe",
        "Date de création et auteur/cartographe",
        "Institution conservatrice + cote d'archivage",
        "Votre opinion personnelle sur la beauté de la carte",
        "Résolution de numérisation et traitements appliqués"
      ],
      correctAnswers: [0, 2, 3, 5],
      explanation: "Métadonnées OBLIGATOIRES : Titre, date, auteur, institution+cote, échelle, système de coordonnées (si géoréf.), résolution de numérisation, traitements appliqués, bibliographie. PAS OBLIGATOIRE : opinions personnelles, préférences esthétiques, informations non-scientifiques."
    },

    {
      id: 29,
      difficulty: 'difficile',
      type: 'mise-en-situation',
      question: "Vous géoréférencez une carte de 1850 d'une ville. Certaines zones urbaines de l'époque n'existent plus aujourd'hui (quartiers rasés). Comment gérez-vous ces zones pour les GCP ?",
      options: [
        "Inventer des coordonnées approximatives",
        "Ignorer complètement ces zones et ne placer aucun GCP",
        "Utiliser des éléments STABLES proches (rivières, carrefours anciens conservés, relief) et DOCUMENTER les zones d'incertitude",
        "Abandonner le géoréférencement"
      ],
      correctAnswer: 2,
      explanation: "MÉTHODE PROFESSIONNELLE : Concentrez les GCP sur les éléments STABLES encore identifiables (cours d'eau, carrefours anciens, sommets). Documentez explicitement les zones où le géoréférencement est incertain (quartiers disparus). Indiquez le RMSE et les limites de précision. Ne JAMAIS inventer des données."
    },

    {
      id: 30,
      difficulty: 'difficile',
      type: 'qcm-unique',
      question: "Un étudiant vous demande : 'Pourquoi passer autant de temps à vérifier les sources et documenter, au lieu d'analyser directement la carte ?' Quelle est la meilleure réponse ?",
      options: [
        "'C'est une perte de temps, tu as raison'",
        "'Parce que c'est obligatoire dans les règles académiques'",
        "'Parce que sans contexte et vérification, ton analyse sera probablement fausse, biaisée et impossible à vérifier. La rigueur méthodologique est la BASE de la science.'",
        "'Pour faire des rapports plus longs'"
      ],
      correctAnswer: 2,
      explanation: "RÉPONSE FONDAMENTALE : La vérification des sources et la documentation ne sont PAS des étapes 'administratives' ennuyeuses. Elles sont la FONDATION de toute recherche scientifique sérieuse. Sans elles, vous risquez d'analyser un faux, de mal interpréter le contexte, de propager des erreurs, et votre travail ne pourra pas être vérifié ou reproduit par d'autres. La rigueur méthodologique est ce qui distingue la science de l'opinion."
    },
  ]
};
