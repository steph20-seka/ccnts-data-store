/**
 * Configuration SEO pour toutes les pages du site CCNTS
 * Inclut les meta descriptions, keywords et informations Open Graph
 * pour chaque page dans toutes les langues supportées
 */

export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  ogType?: string;
  ogImage?: string;
}

export interface SEOConfig {
  [key: string]: {
    fr: PageSEO;
    en: PageSEO;
    de: PageSEO;
    es: PageSEO;
  };
}

// Image par défaut pour Open Graph (à personnaliser avec votre logo)
const DEFAULT_OG_IMAGE = '/og-image.jpg';

export const SEO_CONFIG: SEOConfig = {
  // Page d'accueil
  home: {
    fr: {
      title: 'Accueil',
      description:
        'CCNTS - Cabinet de Cartographie Numérique, de Télédétection et de Statistiques. Expertise géospatiale en Côte d\'Ivoire : SIG, télédétection, analyse spatiale et formation professionnelle.',
      keywords: [
        'cartographie numérique',
        'télédétection',
        'SIG',
        'géomatique',
        'Côte d\'Ivoire',
        'analyse spatiale',
        'QGIS',
        'formation géospatiale',
      ],
      ogType: 'website',
      ogImage: DEFAULT_OG_IMAGE,
    },
    en: {
      title: 'Home',
      description:
        'CCNTS - Digital Mapping, Remote Sensing and Statistics Firm. Geospatial expertise in Ivory Coast: GIS, remote sensing, spatial analysis and professional training.',
      keywords: [
        'digital mapping',
        'remote sensing',
        'GIS',
        'geomatics',
        'Ivory Coast',
        'spatial analysis',
        'QGIS',
        'geospatial training',
      ],
      ogType: 'website',
      ogImage: DEFAULT_OG_IMAGE,
    },
    de: {
      title: 'Startseite',
      description:
        'CCNTS - Büro für digitale Kartographie, Fernerkundung und Statistik. Geospatiale Expertise in der Elfenbeinküste: GIS, Fernerkundung, Raumanalyse und professionelle Schulung.',
      keywords: [
        'digitale Kartographie',
        'Fernerkundung',
        'GIS',
        'Geomatik',
        'Elfenbeinküste',
        'Raumanalyse',
        'QGIS',
        'Geodaten-Schulung',
      ],
      ogType: 'website',
      ogImage: DEFAULT_OG_IMAGE,
    },
    es: {
      title: 'Inicio',
      description:
        'CCNTS - Gabinete de Cartografía Digital, Teledetección y Estadísticas. Experiencia geoespacial en Costa de Marfil: SIG, teledeteccion, análisis espacial y formación profesional.',
      keywords: [
        'cartografía digital',
        'teledeteccion',
        'SIG',
        'geomática',
        'Costa de Marfil',
        'análisis espacial',
        'QGIS',
        'formación geoespacial',
      ],
      ogType: 'website',
      ogImage: DEFAULT_OG_IMAGE,
    },
  },

  // Page Services
  services: {
    fr: {
      title: 'Services',
      description:
        'Nos services en cartographie numérique et télédétection : SIG, analyse spatiale, cartographie thématique, formation QGIS, études environnementales et aménagement du territoire.',
      keywords: [
        'services SIG',
        'cartographie thématique',
        'analyse spatiale',
        'télédétection satellite',
        'formation QGIS',
        'études environnementales',
        'aménagement territoire',
      ],
      ogType: 'website',
    },
    en: {
      title: 'Services',
      description:
        'Our digital mapping and remote sensing services: GIS, spatial analysis, thematic mapping, QGIS training, environmental studies and land planning.',
      keywords: [
        'GIS services',
        'thematic mapping',
        'spatial analysis',
        'satellite remote sensing',
        'QGIS training',
        'environmental studies',
        'land planning',
      ],
      ogType: 'website',
    },
    de: {
      title: 'Dienstleistungen',
      description:
        'Unsere Dienstleistungen in digitaler Kartographie und Fernerkundung: GIS, Raumanalyse, thematische Kartierung, QGIS-Schulung, Umweltstudien und Raumplanung.',
      keywords: [
        'GIS-Dienstleistungen',
        'thematische Kartierung',
        'Raumanalyse',
        'Satellitenfernerkundung',
        'QGIS-Schulung',
        'Umweltstudien',
        'Raumplanung',
      ],
      ogType: 'website',
    },
    es: {
      title: 'Servicios',
      description:
        'Nuestros servicios de cartografía digital y teledetección: SIG, análisis espacial, cartografía temática, formación QGIS, estudios ambientales y ordenación territorial.',
      keywords: [
        'servicios SIG',
        'cartografía temática',
        'análisis espacial',
        'teledetección satelital',
        'formación QGIS',
        'estudios ambientales',
        'ordenación territorial',
      ],
      ogType: 'website',
    },
  },

  // Page Académie
  academy: {
    fr: {
      title: 'Académie',
      description:
        'CCNTS Academy - Formation en ligne en géomatique : cours gratuits et certifiants en QGIS, télédétection Sentinel-2, Google Earth Engine, cartographie thématique et analyse spatiale.',
      keywords: [
        'formation SIG',
        'cours QGIS',
        'formation télédétection',
        'Sentinel-2',
        'Google Earth Engine',
        'certification géomatique',
        'e-learning géospatial',
      ],
      ogType: 'website',
    },
    en: {
      title: 'Academy',
      description:
        'CCNTS Academy - Online geomatics training: free and certified courses in QGIS, Sentinel-2 remote sensing, Google Earth Engine, thematic mapping and spatial analysis.',
      keywords: [
        'GIS training',
        'QGIS courses',
        'remote sensing training',
        'Sentinel-2',
        'Google Earth Engine',
        'geomatics certification',
        'geospatial e-learning',
      ],
      ogType: 'website',
    },
    de: {
      title: 'Akademie',
      description:
        'CCNTS Akademie - Online-Geomatik-Schulung: kostenlose und zertifizierte Kurse in QGIS, Sentinel-2 Fernerkundung, Google Earth Engine, thematischer Kartierung und Raumanalyse.',
      keywords: [
        'GIS-Schulung',
        'QGIS-Kurse',
        'Fernerkundungsschulung',
        'Sentinel-2',
        'Google Earth Engine',
        'Geomatik-Zertifizierung',
        'Geodaten-E-Learning',
      ],
      ogType: 'website',
    },
    es: {
      title: 'Academia',
      description:
        'CCNTS Academy - Formación en línea en geomática: cursos gratuitos y certificados en QGIS, teledetección Sentinel-2, Google Earth Engine, cartografía temática y análisis espacial.',
      keywords: [
        'formación SIG',
        'cursos QGIS',
        'formación teledetección',
        'Sentinel-2',
        'Google Earth Engine',
        'certificación geomática',
        'e-learning geoespacial',
      ],
      ogType: 'website',
    },
  },

  // Page À propos
  about: {
    fr: {
      title: 'À propos',
      description:
        'Découvrez CCNTS : notre expertise en géomatique, notre équipe d\'experts en cartographie et télédétection, nos valeurs et notre engagement pour l\'excellence géospatiale.',
      keywords: [
        'cabinet géomatique',
        'experts SIG',
        'télédétection Côte d\'Ivoire',
        'entreprise cartographie',
        'équipe géospatiale',
      ],
      ogType: 'website',
    },
    en: {
      title: 'About',
      description:
        'Discover CCNTS: our geomatics expertise, our team of mapping and remote sensing experts, our values and commitment to geospatial excellence.',
      keywords: [
        'geomatics firm',
        'GIS experts',
        'remote sensing Ivory Coast',
        'mapping company',
        'geospatial team',
      ],
      ogType: 'website',
    },
    de: {
      title: 'Über uns',
      description:
        'Entdecken Sie CCNTS: unsere Geomatik-Expertise, unser Team von Kartierungs- und Fernerkundungsexperten, unsere Werte und unser Engagement für geospatiale Exzellenz.',
      keywords: [
        'Geomatik-Büro',
        'GIS-Experten',
        'Fernerkundung Elfenbeinküste',
        'Kartierungsunternehmen',
        'Geodaten-Team',
      ],
      ogType: 'website',
    },
    es: {
      title: 'Acerca de',
      description:
        'Descubra CCNTS: nuestra experiencia en geomática, nuestro equipo de expertos en cartografía y teledeteccion, nuestros valores y compromiso con la excelencia geoespacial.',
      keywords: [
        'gabinete geomática',
        'expertos SIG',
        'teledeteccion Costa de Marfil',
        'empresa cartografía',
        'equipo geoespacial',
      ],
      ogType: 'website',
    },
  },

  // Page Contact
  contact: {
    fr: {
      title: 'Contact',
      description:
        'Contactez CCNTS pour vos projets de cartographie et télédétection. Demandez un devis, posez vos questions ou discutez de vos besoins en analyse géospatiale.',
      keywords: [
        'contact CCNTS',
        'devis cartographie',
        'demande SIG',
        'consultation géomatique',
        'Abidjan',
      ],
      ogType: 'website',
    },
    en: {
      title: 'Contact',
      description:
        'Contact CCNTS for your mapping and remote sensing projects. Request a quote, ask questions or discuss your geospatial analysis needs.',
      keywords: [
        'contact CCNTS',
        'mapping quote',
        'GIS request',
        'geomatics consultation',
        'Abidjan',
      ],
      ogType: 'website',
    },
    de: {
      title: 'Kontakt',
      description:
        'Kontaktieren Sie CCNTS für Ihre Kartierungs- und Fernerkundungsprojekte. Fordern Sie ein Angebot an, stellen Sie Fragen oder besprechen Sie Ihre Geodatenanalysebedürfnisse.',
      keywords: [
        'Kontakt CCNTS',
        'Kartierungsangebot',
        'GIS-Anfrage',
        'Geomatik-Beratung',
        'Abidjan',
      ],
      ogType: 'website',
    },
    es: {
      title: 'Contacto',
      description:
        'Contacte con CCNTS para sus proyectos de cartografía y teledeteccion. Solicite presupuesto, haga preguntas o discuta sus necesidades de análisis geoespacial.',
      keywords: [
        'contacto CCNTS',
        'presupuesto cartografía',
        'solicitud SIG',
        'consultoría geomática',
        'Abidjan',
      ],
      ogType: 'website',
    },
  },

  // Page Data Store
  dataStore: {
    fr: {
      title: 'Data Store',
      description:
        'CCNTS Data Store - Achetez des données géospatiales de qualité : cartes urbaines, données SIG, imagerie satellite de plus de 100 villes ivoiriennes. Téléchargement instantané.',
      keywords: [
        'achat données SIG',
        'cartes Côte d\'Ivoire',
        'données géospatiales',
        'imagerie satellite',
        'shapefile',
        'données urbaines',
      ],
      ogType: 'website',
    },
    en: {
      title: 'Data Store',
      description:
        'CCNTS Data Store - Buy quality geospatial data: urban maps, GIS data, satellite imagery of over 100 Ivorian cities. Instant download.',
      keywords: [
        'buy GIS data',
        'Ivory Coast maps',
        'geospatial data',
        'satellite imagery',
        'shapefile',
        'urban data',
      ],
      ogType: 'website',
    },
    de: {
      title: 'Datenspeicher',
      description:
        'CCNTS Datenspeicher - Kaufen Sie qualitativ hochwertige Geodaten: Stadtkarten, GIS-Daten, Satellitenbilder von über 100 ivorischen Städten. Sofortiger Download.',
      keywords: [
        'GIS-Daten kaufen',
        'Karten Elfenbeinküste',
        'Geodaten',
        'Satellitenbilder',
        'Shapefile',
        'Stadtdaten',
      ],
      ogType: 'website',
    },
    es: {
      title: 'Tienda de Datos',
      description:
        'CCNTS Data Store - Compre datos geoespaciales de calidad: mapas urbanos, datos SIG, imágenes satelitales de más de 100 ciudades marfileñas. Descarga instantánea.',
      keywords: [
        'comprar datos SIG',
        'mapas Costa de Marfil',
        'datos geoespaciales',
        'imágenes satelitales',
        'shapefile',
        'datos urbanos',
      ],
      ogType: 'website',
    },
  },

  // Page Projets
  projects: {
    fr: {
      title: 'Projets',
      description:
        'Découvrez nos projets de cartographie et télédétection : études d\'impact environnemental, planification urbaine, agriculture de précision et gestion des ressources naturelles.',
      keywords: [
        'projets cartographie',
        'études environnementales',
        'planification urbaine',
        'agriculture précision',
        'gestion ressources',
      ],
      ogType: 'website',
    },
    en: {
      title: 'Projects',
      description:
        'Discover our mapping and remote sensing projects: environmental impact studies, urban planning, precision agriculture and natural resource management.',
      keywords: [
        'mapping projects',
        'environmental studies',
        'urban planning',
        'precision agriculture',
        'resource management',
      ],
      ogType: 'website',
    },
    de: {
      title: 'Projekte',
      description:
        'Entdecken Sie unsere Kartierungs- und Fernerkundungsprojekte: Umweltverträglichkeitsstudien, Stadtplanung, Präzisionslandwirtschaft und Verwaltung natürlicher Ressourcen.',
      keywords: [
        'Kartierungsprojekte',
        'Umweltstudien',
        'Stadtplanung',
        'Präzisionslandwirtschaft',
        'Ressourcenverwaltung',
      ],
      ogType: 'website',
    },
    es: {
      title: 'Proyectos',
      description:
        'Descubra nuestros proyectos de cartografía y teledeteccion: estudios de impacto ambiental, planificación urbana, agricultura de precisión y gestión de recursos naturales.',
      keywords: [
        'proyectos cartografía',
        'estudios ambientales',
        'planificación urbana',
        'agricultura precisión',
        'gestión recursos',
      ],
      ogType: 'website',
    },
  },

  // Pages de cours (exemples)
  courseQGIS: {
    fr: {
      title: 'Cours QGIS - Académie',
      description:
        'Formation gratuite QGIS : apprenez les bases du SIG open source, création de cartes, analyse spatiale et géotraitement. Certification disponible.',
      keywords: ['cours QGIS', 'formation SIG gratuite', 'QGIS débutant', 'certification QGIS'],
      ogType: 'article',
    },
    en: {
      title: 'QGIS Course - Academy',
      description:
        'Free QGIS training: learn open source GIS basics, map creation, spatial analysis and geoprocessing. Certification available.',
      keywords: ['QGIS course', 'free GIS training', 'QGIS beginner', 'QGIS certification'],
      ogType: 'article',
    },
    de: {
      title: 'QGIS-Kurs - Akademie',
      description:
        'Kostenlose QGIS-Schulung: Lernen Sie Open-Source-GIS-Grundlagen, Kartenerstellung, Raumanalyse und Geoverarbeitung. Zertifizierung verfügbar.',
      keywords: [
        'QGIS-Kurs',
        'kostenlose GIS-Schulung',
        'QGIS-Anfänger',
        'QGIS-Zertifizierung',
      ],
      ogType: 'article',
    },
    es: {
      title: 'Curso QGIS - Academia',
      description:
        'Formación QGIS gratuita: aprenda los fundamentos de SIG de código abierto, creación de mapas, análisis espacial y geoprocesamiento. Certificación disponible.',
      keywords: [
        'curso QGIS',
        'formación SIG gratuita',
        'QGIS principiante',
        'certificación QGIS',
      ],
      ogType: 'article',
    },
  },

  // Mes cours
  myCourses: {
    fr: {
      title: 'Mes Cours',
      description:
        'Accédez à vos cours de géomatique inscrits : suivez votre progression, complétez les modules et obtenez vos certifications CCNTS Academy.',
      keywords: ['mes cours', 'progression formation', 'espace étudiant', 'CCNTS Academy'],
      ogType: 'website',
    },
    en: {
      title: 'My Courses',
      description:
        'Access your enrolled geomatics courses: track your progress, complete modules and earn your CCNTS Academy certifications.',
      keywords: ['my courses', 'training progress', 'student portal', 'CCNTS Academy'],
      ogType: 'website',
    },
    de: {
      title: 'Meine Kurse',
      description:
        'Zugriff auf Ihre eingeschriebenen Geomatik-Kurse: Verfolgen Sie Ihren Fortschritt, schließen Sie Module ab und erhalten Sie Ihre CCNTS Academy-Zertifizierungen.',
      keywords: ['meine Kurse', 'Schulungsfortschritt', 'Studentenportal', 'CCNTS Academy'],
      ogType: 'website',
    },
    es: {
      title: 'Mis Cursos',
      description:
        'Acceda a sus cursos de geomática inscritos: realice un seguimiento de su progreso, complete módulos y obtenga sus certificaciones de CCNTS Academy.',
      keywords: ['mis cursos', 'progreso formación', 'portal estudiante', 'CCNTS Academy'],
      ogType: 'website',
    },
  },

  // Mes certificats
  myCertificates: {
    fr: {
      title: 'Mes Certificats',
      description:
        'Vos certificats de formation CCNTS Academy : téléchargez, partagez et valorisez vos compétences en géomatique et SIG.',
      keywords: ['certificats géomatique', 'diplômes SIG', 'attestations formation', 'CCNTS'],
      ogType: 'website',
    },
    en: {
      title: 'My Certificates',
      description:
        'Your CCNTS Academy training certificates: download, share and showcase your geomatics and GIS skills.',
      keywords: ['geomatics certificates', 'GIS diplomas', 'training certificates', 'CCNTS'],
      ogType: 'website',
    },
    de: {
      title: 'Meine Zertifikate',
      description:
        'Ihre CCNTS Academy-Schulungszertifikate: Laden Sie herunter, teilen Sie und zeigen Sie Ihre Geomatik- und GIS-Fähigkeiten.',
      keywords: [
        'Geomatik-Zertifikate',
        'GIS-Diplome',
        'Schulungszertifikate',
        'CCNTS',
      ],
      ogType: 'website',
    },
    es: {
      title: 'Mis Certificados',
      description:
        'Sus certificados de formación de CCNTS Academy: descargue, comparta y destaque sus habilidades en geomática y SIG.',
      keywords: [
        'certificados geomática',
        'diplomas SIG',
        'certificados formación',
        'CCNTS',
      ],
      ogType: 'website',
    },
  },

  // Pages d'authentification
  login: {
    fr: {
      title: 'Connexion',
      description:
        'Connectez-vous à votre compte CCNTS Academy pour accéder à vos cours de géomatique, suivre votre progression et obtenir vos certifications.',
      keywords: ['connexion', 'login', 'compte CCNTS', 'espace membre'],
      ogType: 'website',
    },
    en: {
      title: 'Login',
      description:
        'Log in to your CCNTS Academy account to access your geomatics courses, track your progress and earn certifications.',
      keywords: ['login', 'sign in', 'CCNTS account', 'member area'],
      ogType: 'website',
    },
    de: {
      title: 'Anmeldung',
      description:
        'Melden Sie sich bei Ihrem CCNTS Academy-Konto an, um auf Ihre Geomatik-Kurse zuzugreifen, Ihren Fortschritt zu verfolgen und Zertifizierungen zu erhalten.',
      keywords: ['Anmeldung', 'Login', 'CCNTS-Konto', 'Mitgliederbereich'],
      ogType: 'website',
    },
    es: {
      title: 'Iniciar sesión',
      description:
        'Inicie sesión en su cuenta de CCNTS Academy para acceder a sus cursos de geomática, seguir su progreso y obtener certificaciones.',
      keywords: ['iniciar sesión', 'login', 'cuenta CCNTS', 'área miembros'],
      ogType: 'website',
    },
  },

  signup: {
    fr: {
      title: 'Inscription',
      description:
        'Créez votre compte CCNTS Academy gratuit : accédez à des cours de géomatique, obtenez des certifications et développez vos compétences en SIG.',
      keywords: ['inscription', 'créer compte', 'rejoindre CCNTS', 'formation gratuite'],
      ogType: 'website',
    },
    en: {
      title: 'Sign Up',
      description:
        'Create your free CCNTS Academy account: access geomatics courses, earn certifications and develop your GIS skills.',
      keywords: ['sign up', 'create account', 'join CCNTS', 'free training'],
      ogType: 'website',
    },
    de: {
      title: 'Registrieren',
      description:
        'Erstellen Sie Ihr kostenloses CCNTS Academy-Konto: Zugriff auf Geomatik-Kurse, Zertifizierungen erhalten und GIS-Fähigkeiten entwickeln.',
      keywords: ['Registrieren', 'Konto erstellen', 'CCNTS beitreten', 'kostenlose Schulung'],
      ogType: 'website',
    },
    es: {
      title: 'Registrarse',
      description:
        'Cree su cuenta gratuita de CCNTS Academy: acceda a cursos de geomática, obtenga certificaciones y desarrolle sus habilidades en SIG.',
      keywords: ['registrarse', 'crear cuenta', 'unirse CCNTS', 'formación gratuita'],
      ogType: 'website',
    },
  },

  'reset-password': {
    title: {
      fr: 'Réinitialiser le mot de passe',
      en: 'Reset Password',
      de: 'Passwort zurücksetzen',
      es: 'Restablecer contraseña',
    },
    description: {
      fr: 'Réinitialisez votre mot de passe CCNTS',
      en: 'Reset your CCNTS password',
      de: 'Setzen Sie Ihr CCNTS-Passwort zurück',
      es: 'Restablezca su contraseña de CCNTS',
    },
  },
  'verify-email': {
    title: {
      fr: 'Vérifier votre email',
      en: 'Verify Your Email',
      de: 'E-Mail verifizieren',
      es: 'Verificar su correo electrónico',
    },
    description: {
      fr: 'Vérifiez votre adresse email pour activer votre compte CCNTS',
      en: 'Verify your email address to activate your CCNTS account',
      de: 'Verifizieren Sie Ihre E-Mail-Adresse, um Ihr CCNTS-Konto zu aktivieren',
      es: 'Verifique su dirección de correo electrónico para activar su cuenta CCNTS',
    },
  },
  'forgot-password': {
    title: {
      fr: 'Mot de passe oublié',
      en: 'Forgot Password',
      de: 'Passwort vergessen',
      es: 'Contraseña olvidada',
    },
    description: {
      fr: 'Récupérez votre compte CCNTS en réinitialisant votre mot de passe',
      en: 'Recover your CCNTS account by resetting your password',
      de: 'Stellen Sie Ihr CCNTS-Konto wieder her, indem Sie Ihr Passwort zurücksetzen',
      es: 'Recupere su cuenta CCNTS restableciendo su contraseña',
    },
  },
};

// Informations de l'organisation pour le Structured Data
export const ORGANIZATION_DATA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CCNTS',
  legalName: 'Cabinet de Cartographie Numérique, de Télédétection et de Statistiques',
  url: 'https://www.ccnts.com',
  logo: 'https://www.ccnts.com/favicon.svg',
  foundingDate: '2020',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CI',
    addressLocality: 'Abidjan',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'contact@ccnts.com',
  },
  sameAs: [
    // Ajoutez vos liens de réseaux sociaux ici
    // 'https://twitter.com/ccnts',
    // 'https://linkedin.com/company/ccnts',
    // 'https://facebook.com/ccnts',
  ],
  description:
    'Cabinet de Cartographie Numérique, de Télédétection et de Statistiques offrant des services professionnels en SIG, télédétection et formation géospatiale en Côte d\'Ivoire.',
};

// Fonction helper pour obtenir la configuration SEO d'une page
export function getPageSEO(pageKey: string, language: string = 'fr'): PageSEO {
  const defaultSEO: PageSEO = {
    title: 'CCNTS',
    description: 'Cabinet de Cartographie Numérique, de Télédétection et de Statistiques',
    keywords: ['cartographie', 'télédétection', 'SIG', 'géomatique'],
    ogType: 'website',
  };

  const pageSEO = SEO_CONFIG[pageKey];
  if (!pageSEO) return defaultSEO;

  const langSEO = pageSEO[language as keyof typeof pageSEO];
  return langSEO || pageSEO.fr || defaultSEO;
}