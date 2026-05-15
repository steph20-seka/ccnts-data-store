import { useState } from 'react';
import { Card } from '../ui/card';
import { Lightbulb, TrendingUp, AlertCircle, Info, MapPin, Eye, Layers } from 'lucide-react';

interface MapInsight {
  id: number;
  insights: {
    key: {
      icon: typeof Lightbulb;
      title: string;
      description: string;
      color: string;
    };
    pattern: {
      icon: typeof TrendingUp;
      title: string;
      description: string;
      color: string;
    };
    attention: {
      icon: typeof AlertCircle;
      title: string;
      description: string;
      color: string;
    };
  };
  legend: {
    title: string;
    items: Array<{
      label: string;
      color?: string;
      symbol?: string;
      description: string;
    }>;
  };
  readingGuide: {
    title: string;
    steps: Array<{
      order: number;
      instruction: string;
      focus: string;
    }>;
  };
  methodology: {
    dataSource: string;
    technique: string;
    scale: string;
    projection: string;
  };
  hotspots: Array<{
    label: string;
    description: string;
    coordinates?: string;
  }>;
}

export const mapInsightsData: MapInsight[] = [
  {
    // Carte 1 : Démographie Côte d'Ivoire
    id: 1,
    insights: {
      key: {
        icon: Lightbulb,
        title: 'Concentration urbaine Sud',
        description: 'Abidjan concentre à elle seule plus de 20% de la population nationale, créant un pôle économique dominant.',
        color: 'blue',
      },
      pattern: {
        icon: TrendingUp,
        title: 'Gradient Nord-Sud',
        description: 'La densité de population décroît régulièrement du Sud (>200 hab/km²) vers le Nord (<40 hab/km²).',
        color: 'orange',
      },
      attention: {
        icon: AlertCircle,
        title: 'Disparités régionales',
        description: 'Les districts du Nord présentent un sous-développement infrastructurel nécessitant des politiques d\'équilibrage territorial.',
        color: 'red',
      },
    },
    legend: {
      title: 'Légende démographique',
      items: [
        {
          label: 'Densité très élevée',
          color: '#0a1e3d',
          description: '> 200 hab/km² (districts du Sud)',
        },
        {
          label: 'Densité élevée',
          color: '#1e3a8a',
          description: '100-200 hab/km² (zones périurbaines)',
        },
        {
          label: 'Densité moyenne',
          color: '#3b82f6',
          description: '50-100 hab/km² (villes moyennes)',
        },
        {
          label: 'Densité faible',
          color: '#93c5fd',
          description: '< 50 hab/km² (zones rurales Nord)',
        },
        {
          symbol: '●',
          label: 'Taille de la bulle',
          description: 'Proportionnelle à la population totale du district',
        },
      ],
    },
    readingGuide: {
      title: 'Comment lire cette carte ?',
      steps: [
        {
          order: 1,
          instruction: 'Observer les dégradés de couleur',
          focus: 'Les tons sombres (bleu profond) indiquent les densités élevées concentrées au Sud.',
        },
        {
          order: 2,
          instruction: 'Analyser la taille des bulles',
          focus: 'Plus la bulle est grande, plus la population du district est importante (Abidjan = bulle maximale).',
        },
        {
          order: 3,
          instruction: 'Identifier la structure par sexe',
          focus: 'Les diagrammes circulaires montrent 52% d\'hommes (bleu) et 48% de femmes (rose) dans la plupart des districts.',
        },
        {
          order: 4,
          instruction: 'Repérer les contrastes spatiaux',
          focus: 'Tracer mentalement une ligne horizontale : le Sud est densément peuplé, le Nord faiblement peuplé.',
        },
      ],
    },
    methodology: {
      dataSource: 'Recensement Général de la Population et de l\'Habitat (RGPH 2021) - Institut National de la Statistique',
      technique: 'Cartographie thématique proportionnelle avec dégradés de couleurs (méthode des seuils naturels de Jenks)',
      scale: 'Échelle nationale - Unité administrative : District',
      projection: 'WGS 84 / UTM Zone 30N (EPSG:32630)',
    },
    hotspots: [
      {
        label: 'Abidjan',
        description: 'Pôle démographique majeur avec >5 millions d\'habitants, moteur économique national.',
      },
      {
        label: 'Districts du Sud-Ouest',
        description: 'Forte croissance démographique liée à l\'agriculture commerciale (cacao, café).',
      },
      {
        label: 'Districts du Nord',
        description: 'Faible densité et exode rural vers les centres urbains du Sud.',
      },
    ],
  },
  {
    // Carte 2 : Éclairage public Séguéla
    id: 2,
    insights: {
      key: {
        icon: Lightbulb,
        title: 'Couverture partielle',
        description: 'L\'éclairage actuel couvre seulement les axes principaux, laissant de grandes zones résidentielles non éclairées.',
        color: 'blue',
      },
      pattern: {
        icon: TrendingUp,
        title: 'Distribution linéaire',
        description: 'Les lampadaires suivent les routes principales, créant un motif en réseau non maillé.',
        color: 'orange',
      },
      attention: {
        icon: AlertCircle,
        title: 'Zones prioritaires',
        description: 'Les quartiers périphériques et les voies secondaires nécessitent une densification urgente pour la sécurité nocturne.',
        color: 'red',
      },
    },
    legend: {
      title: 'Symboles cartographiques',
      items: [
        {
          symbol: '💡',
          label: 'Lampadaire fonctionnel',
          description: 'Point d\'éclairage public opérationnel (géolocalisé par GPS)',
        },
        {
          label: 'Routes éclairées',
          color: '#f97316',
          description: 'Axes principaux bénéficiant d\'un éclairage continu',
        },
        {
          label: 'Zones non éclairées',
          color: '#f3f4f6',
          description: 'Quartiers résidentiels sans lampadaires (zones d\'ombre)',
        },
        {
          symbol: '─',
          label: 'Réseau viaire',
          description: 'Routes et chemins du quartier Batesti',
        },
      ],
    },
    readingGuide: {
      title: 'Guide de lecture technique',
      steps: [
        {
          order: 1,
          instruction: 'Localiser les points lumineux',
          focus: 'Chaque symbole de lampadaire représente un équipement d\'éclairage géolocalisé avec précision.',
        },
        {
          order: 2,
          instruction: 'Évaluer la continuité',
          focus: 'Observer les espaces vides entre les lampadaires : plus l\'écart est grand, moins l\'éclairage est efficace.',
        },
        {
          order: 3,
          instruction: 'Identifier le réseau viaire',
          focus: 'Les routes sont le support de l\'éclairage : repérer celles qui sont éclairées (lignes oranges) vs non éclairées (gris).',
        },
        {
          order: 4,
          instruction: 'Détecter les zones d\'ombre',
          focus: 'Les quartiers périphériques sans points lumineux sont les priorités pour l\'extension du réseau.',
        },
      ],
    },
    methodology: {
      dataSource: 'Enquête terrain BTP/SCP - Géolocalisation GPS différentiel (précision ±2m)',
      technique: 'Cartographie participative + Analyse de densité de points (Kernel Density)',
      scale: 'Échelle locale - Quartier Batesti (1:5 000)',
      projection: 'WGS 84 / UTM Zone 30N (EPSG:32630)',
    },
    hotspots: [
      {
        label: 'Axe principal Nord-Sud',
        description: 'Éclairage continu sur l\'artère principale traversant le quartier.',
        coordinates: 'Zone centrale',
      },
      {
        label: 'Quartiers périphériques Est',
        description: 'Zone critique sans éclairage, nécessitant 12-15 nouveaux lampadaires.',
        coordinates: 'Secteur résidentiel Est',
      },
      {
        label: 'Carrefours stratégiques',
        description: 'Points de convergence nécessitant un éclairage renforcé pour la sécurité.',
        coordinates: 'Intersections principales',
      },
    ],
  },
  {
    // Carte 3 : Types de sols Côte d'Ivoire
    id: 3,
    insights: {
      key: {
        icon: Lightbulb,
        title: 'Diversité pédologique',
        description: 'La Côte d\'Ivoire présente 8 grands types de sols, reflétant la variété climatique du pays (équatorial au Sud, soudanien au Nord).',
        color: 'blue',
      },
      pattern: {
        icon: TrendingUp,
        title: 'Zonation climatique',
        description: 'La répartition des sols suit les gradients pluviométriques : ferralsols au Sud humide, lixisols au Centre, luvisols au Nord sec.',
        color: 'orange',
      },
      attention: {
        icon: AlertCircle,
        title: 'Dégradation des sols',
        description: 'Les sols ferrallitiques du Sud, bien que fertiles, sont menacés par l\'érosion et la déforestation intensive.',
        color: 'red',
      },
    },
    legend: {
      title: 'Classification FAO des sols',
      items: [
        {
          label: 'Ferralsols',
          color: '#dc2626',
          description: 'Sols tropicaux profonds, bien drainés, dominants au Sud (zone forestière)',
        },
        {
          label: 'Acrisols',
          color: '#ea580c',
          description: 'Sols acides, pauvres en nutriments, zone de transition Centre-Sud',
        },
        {
          label: 'Lixisols',
          color: '#f59e0b',
          description: 'Sols lessivés, modérément fertiles, région centrale',
        },
        {
          label: 'Luvisols',
          color: '#fbbf24',
          description: 'Sols limoneux, zone soudanienne du Nord',
        },
        {
          label: 'Gleysols',
          color: '#3b82f6',
          description: 'Sols hydromorphes, zones inondables et bas-fonds',
        },
        {
          label: 'Plinthosols',
          color: '#a855f7',
          description: 'Sols à cuirasse latéritique, plateaux du Centre',
        },
      ],
    },
    readingGuide: {
      title: 'Interpréter la carte pédologique',
      steps: [
        {
          order: 1,
          instruction: 'Observer la distribution colorée',
          focus: 'Chaque couleur représente un type de sol selon la classification internationale FAO.',
        },
        {
          order: 2,
          instruction: 'Corréler avec le climat',
          focus: 'Les tons rouges (ferralsols) dominent au Sud pluvieux, les jaunes (luvisols) au Nord sec.',
        },
        {
          order: 3,
          instruction: 'Identifier les potentialités agricoles',
          focus: 'Ferralsols = cultures pérennes (cacao, café) ; Lixisols = cultures annuelles (maïs, coton).',
        },
        {
          order: 4,
          instruction: 'Repérer les zones à risque',
          focus: 'Gleysols (bleus) = risque d\'inondation ; Plinthosols (violets) = sols durs, peu cultivables.',
        },
      ],
    },
    methodology: {
      dataSource: 'Base de données mondiale des sols FAO - Harmonized World Soil Database v1.2',
      technique: 'Cartographie pédologique par classification supervisée + validation terrain',
      scale: 'Échelle nationale (1:1 000 000)',
      projection: 'WGS 84 (EPSG:4326) - Système géographique non projeté',
    },
    hotspots: [
      {
        label: 'Zone forestière Sud',
        description: 'Ferralsols profonds, excellents pour le cacao et l\'hévéa, mais menacés par la déforestation.',
      },
      {
        label: 'Région des savanes Centre-Nord',
        description: 'Lixisols et luvisols adaptés aux cultures céréalières et à l\'arachide.',
      },
      {
        label: 'Vallées et bas-fonds',
        description: 'Gleysols propices à la riziculture inondée, nécessitant un drainage contrôlé.',
      },
    ],
  },
  {
    // Carte 4 : Mobilités économiques Bouaké-Burkina Faso
    id: 4,
    insights: {
      key: {
        icon: Lightbulb,
        title: 'Complémentarité économique',
        description: 'Bouaké exporte des produits agricoles (manioc) et importe du bétail (bœufs), illustrant une interdépendance Côte d\'Ivoire-Burkina Faso.',
        color: 'blue',
      },
      pattern: {
        icon: TrendingUp,
        title: 'Asymétrie des flux',
        description: 'Les flux de bœufs (6 000-24 000 têtes) sont 30 à 100 fois supérieurs aux flux de manioc (200-570 tonnes), révélant le poids de l\'élevage sahélien.',
        color: 'orange',
      },
      attention: {
        icon: AlertCircle,
        title: 'Dépendance ferroviaire',
        description: 'Le réseau SITARAIL est crucial : toute perturbation (grèves, pannes) impacte directement les échanges transfrontaliers.',
        color: 'red',
      },
    },
    legend: {
      title: 'Symboles de flux et infrastructure',
      items: [
        {
          symbol: '➔',
          label: 'Flèche noire (épaisse)',
          description: 'Flux de manioc exporté de Bouaké vers le Burkina Faso (en tonnes)',
        },
        {
          symbol: '➔',
          label: 'Flèche rouge (très épaisse)',
          description: 'Flux de bœufs importés du Burkina Faso vers Bouaké (en têtes)',
        },
        {
          symbol: '─────',
          label: 'Ligne ferroviaire SITARAIL',
          description: 'Réseau ferré facilitant le transport transfrontalier rapide',
        },
        {
          symbol: '●',
          label: 'Villes-nœuds',
          description: 'Pôles commerciaux (Bouaké, Bobo-Dioulasso, Ouagadougou, Banfora)',
        },
      ],
    },
    readingGuide: {
      title: 'Décrypter les flux économiques',
      steps: [
        {
          order: 1,
          instruction: 'Identifier les directions des flèches',
          focus: 'Flèches noires = sortie de manioc (Bouaké → Burkina) ; Flèches rouges = entrée de bœufs (Burkina → Bouaké).',
        },
        {
          order: 2,
          instruction: 'Évaluer l\'épaisseur des flèches',
          focus: 'Plus la flèche est épaisse, plus le volume de marchandise est important (proportionnalité visuelle).',
        },
        {
          order: 3,
          instruction: 'Localiser les villes partenaires',
          focus: 'Bobo-Dioulasso = hub principal ; Ouagadougou = marché de consommation ; Banfora = zone d\'élevage.',
        },
        {
          order: 4,
          instruction: 'Suivre le réseau ferroviaire',
          focus: 'SITARAIL relie Bouaké à Bobo-Dioulasso, facilitant les échanges rapides (alternative au transport routier).',
        },
      ],
    },
    methodology: {
      dataSource: 'Enquête exploratoire SCR + Données douanières transfrontalières',
      technique: 'Cartographie des flux (Flow Mapping) avec flèches proportionnelles',
      scale: 'Échelle régionale transfrontalière (1:2 000 000)',
      projection: 'WGS 84 (EPSG:4326)',
    },
    hotspots: [
      {
        label: 'Bouaké',
        description: 'Hub de transformation du manioc et marché central pour la viande bovine importée.',
        coordinates: 'Centre Côte d\'Ivoire',
      },
      {
        label: 'Bobo-Dioulasso',
        description: 'Principal point d\'entrée des bœufs burkinabè (24 356 têtes), relié par rail à Bouaké.',
        coordinates: 'Sud-Ouest Burkina Faso',
      },
      {
        label: 'Axe SITARAIL',
        description: 'Corridor économique stratégique facilitant 70% des échanges agropastoraux.',
        coordinates: 'Abidjan-Ouagadougou',
      },
    ],
  },
  {
    // Carte 5 : Isohyètes Ghana 2023
    id: 5,
    insights: {
      key: {
        icon: Lightbulb,
        title: 'Gradient pluviométrique',
        description: 'Le Ghana présente un gradient net des précipitations : >2 000 mm/an au Sud-Ouest vs <1 200 mm/an au Nord.',
        color: 'blue',
      },
      pattern: {
        icon: TrendingUp,
        title: 'Influence océanique',
        description: 'Les zones côtières bénéficient des vents humides du golfe de Guinée, créant une zone hyperhumide propice aux cultures tropicales.',
        color: 'orange',
      },
      attention: {
        icon: AlertCircle,
        title: 'Stress hydrique Nord',
        description: 'Le Nord soudano-sahélien (<1 200 mm) est exposé aux déficits pluviométriques, nécessitant des stratégies d\'irrigation.',
        color: 'red',
      },
    },
    legend: {
      title: 'Isohyètes et zones pluviométriques',
      items: [
        {
          label: 'Zone hyperhumide',
          color: '#0a4a2e',
          description: '> 2 000 mm/an (Sud-Ouest côtier)',
        },
        {
          label: 'Zone très humide',
          color: '#15803d',
          description: '1 600-2 000 mm/an (zone forestière)',
        },
        {
          label: 'Zone humide',
          color: '#22c55e',
          description: '1 200-1 600 mm/an (transition forêt-savane)',
        },
        {
          label: 'Zone subhumide',
          color: '#86efac',
          description: '800-1 200 mm/an (savanes soudaniennes)',
        },
        {
          symbol: '——',
          label: 'Ligne isohyète',
          description: 'Relie les points de précipitations égales (ex : ligne 1 500 mm)',
        },
      ],
    },
    readingGuide: {
      title: 'Lire une carte d\'isohyètes',
      steps: [
        {
          order: 1,
          instruction: 'Comprendre les isohyètes',
          focus: 'Chaque ligne relie les points recevant la même quantité de pluie annuelle (comme les courbes de niveau pour l\'altitude).',
        },
        {
          order: 2,
          instruction: 'Observer le dégradé de couleur',
          focus: 'Du vert foncé (très pluvieux) au vert clair (moins pluvieux), suivant un axe Sud-Ouest → Nord-Est.',
        },
        {
          order: 3,
          instruction: 'Identifier les zones agricoles optimales',
          focus: 'Zone >1 600 mm = cacao, café ; Zone 1 200-1 600 mm = maïs, igname ; Zone <1 200 mm = mil, sorgho.',
        },
        {
          order: 4,
          instruction: 'Repérer les anomalies',
          focus: 'Les resserrements d\'isohyètes indiquent des variations brutales (effet du relief ou de la proximité océanique).',
        },
      ],
    },
    methodology: {
      dataSource: 'NCEI/NOAA - National Centers for Environmental Information (données satellitaires + stations météo)',
      technique: 'Interpolation spatiale (méthode Kriging) + Analyse de séries temporelles 2023',
      scale: 'Échelle nationale Ghana (1:1 500 000)',
      projection: 'WGS 84 (EPSG:4326)',
    },
    hotspots: [
      {
        label: 'Sud-Ouest côtier',
        description: 'Maximum pluviométrique (>2 000 mm) dû à la mousson et au relief. Idéal pour cacao et hévéa.',
        coordinates: 'Région de Takoradi-Cape Coast',
      },
      {
        label: 'Centre-Nord (Tamale)',
        description: 'Zone de transition (1 200-1 400 mm) avec risque de sécheresse en saison sèche prolongée.',
        coordinates: 'Northern Region',
      },
      {
        label: 'Extrême-Nord',
        description: 'Zone la plus sèche (<1 200 mm), nécessitant des cultures résistantes à la sécheresse (mil, niébé).',
        coordinates: 'Upper East/West Regions',
      },
    ],
  },
];
