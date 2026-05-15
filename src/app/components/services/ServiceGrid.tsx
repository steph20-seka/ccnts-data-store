import { Map, Layers, Satellite, Globe, Database, FileImage } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    icon: Map,
    title: 'Cartographie numérique',
    description: 'Création de cartes professionnelles et précises pour tous vos besoins.',
    features: [
      'Cartes topographiques',
      'Plans de localisation',
      'Atlas thématiques',
      'Webmapping interactif',
    ],
    color: 'blue',
  },
  {
    icon: Layers,
    title: 'Analyse spatiale SIG',
    description: 'Analyses géospatiales avancées avec les meilleurs outils du marché.',
    features: [
      'Analyses multi-critères',
      'Géotraitement de données',
      'Création de bases de données spatiales',
      'Optimisation de parcours',
    ],
    color: 'green',
  },
  {
    icon: Satellite,
    title: 'Télédétection (satellite & drone)',
    description: 'Exploitation d\'images satellites et drones pour surveiller votre territoire.',
    features: [
      'Traitement d\'images satellites',
      'Acquisition et traitement de données drone',
      'Détection de changements',
      'Classification d\'occupation du sol',
    ],
    color: 'purple',
  },
  {
    icon: Globe,
    title: 'Modélisation territoriale',
    description: 'Modèles et simulations pour l\'aménagement et la planification.',
    features: [
      'Modèles prédictifs spatiaux',
      'Simulations d\'aménagement',
      'Analyses de scénarios',
      'Cartographie prospective',
    ],
    color: 'orange',
  },
  {
    icon: Database,
    title: 'Statistiques & Data science',
    description: 'Analyses statistiques et machine learning sur données géographiques.',
    features: [
      'Analyses statistiques spatiales',
      'Machine learning géospatial',
      'Visualisation de données',
      'Tableaux de bord interactifs',
    ],
    color: 'teal',
  },
  {
    icon: FileImage,
    title: 'Production de cartes thématiques',
    description: 'Cartographies sur mesure pour communiquer et décider efficacement.',
    features: [
      'Cartes pour rapports et études',
      'Infographies cartographiques',
      'Cartes pour le web',
      'Design cartographique personnalisé',
    ],
    color: 'indigo',
  },
];

export function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
}