// Formation data structure with all details for individual pages

export interface Formation {
  // Basic info
  slug: string;
  title: string;
  subtitle?: string;
  partner?: string;
  certification?: string;

  // Key details
  modality: string;
  price: string;
  duration: string;
  level: string;

  // Target audience
  targetAudience: string[];

  // Objectives
  objectives: string[];

  // Full description
  presentation: string;

  // Access & prerequisites
  access: string;
  prerequisites: string;
  equipment: string;

  // Pedagogy
  pedagogicalMeans: string[];
  evaluationMethods: string[];

  // Highlights
  highlights: string[];

  // Modules/Chapters (optional)
  modules?: {
    title: string;
    duration?: string;
    topics: string[];
  }[];

  // Metadata
  category: 'sensibilisation' | 'certification' | 'technique' | 'management';
  featured?: boolean;
}

export const FORMATIONS: Formation[] = [
  {
    slug: 'sensibilisation-cybersecurite',
    title: 'Sensibilisation à la cybersécurité',
    subtitle: 'Les fondamentaux pour tous les collaborateurs',
    category: 'sensibilisation',
    featured: true,

    modality: 'Distanciel, asynchrone',
    price: 'À partir de 49€ HT par participant',
    duration: '2-4h selon besoins',
    level: 'Débutant',

    targetAudience: [
      'Étudiants management, finance, marketing, droit',
      'Collaborateurs non-techniques (RH, finance, direction, commercial, administratif)',
      'Toute personne souhaitant acquérir les bases de la cybersécurité',
    ],

    objectives: [
      'Identifier les cybermenaces courantes : phishing, ingénierie sociale, ransomware, fraude aux décideurs',
      'Adopter les bons réflexes au quotidien : gestion des mots de passe, détection des emails suspects, navigation sécurisée',
      'Comprendre les enjeux réglementaires : RGPD, responsabilité individuelle, obligations légales',
      'Savoir réagir en cas d\'incident : qui alerter, quels gestes immédiats, comment limiter l\'impact',
    ],

    presentation: `Cette formation de sensibilisation permet aux collaborateurs non-techniques et aux étudiants d'acquérir les réflexes essentiels face aux menaces cyber. Elle couvre les risques les plus courants en entreprise et les bonnes pratiques à adopter au quotidien pour protéger les données sensibles.

La formation est conçue pour être accessible à tous, sans prérequis technique. Elle utilise des exemples concrets et des mises en situation réalistes pour maximiser la rétention des apprentissages.`,

    access: 'Sous 24H après validation d\'inscription. Formation accessible aux personnes en situation de handicap, pour toute question au référent pédagogique/handicap contactez-nous à l\'adresse support@neocc.co',
    prerequisites: 'Aucun - formation accessible à tous les profils.',
    equipment: 'Ordinateur avec connexion internet, navigateur web récent.',

    pedagogicalMeans: [
      'Plateforme e-learning NEO Cyber Camp accessible 24/24',
      'Vidéos de cours HD',
      'Schémas et animations interactives',
      'QCM autocorrectifs',
      'Support technique et pédagogique par email/chat',
      'Suivi individualisé de progression',
    ],

    evaluationMethods: [
      'QCM de positionnement en début de formation',
      'QCM à la fin de chaque module',
      'Attestation de fin de formation délivrée après validation',
    ],

    highlights: [
      'Contenu personnalisable selon votre secteur d\'activité',
      'Cas pratiques adaptés à votre contexte (entreprise ou école)',
      'Format flexible intégrable dans vos parcours existants',
      'Reporting de suivi des participants sur demande',
    ],

    modules: [
      {
        title: 'Introduction à la cybersécurité',
        duration: '30 min',
        topics: ['Qu\'est-ce que la cybersécurité ?', 'Panorama des menaces actuelles', 'Pourquoi tout le monde est concerné'],
      },
      {
        title: 'Reconnaître les menaces',
        duration: '45 min',
        topics: ['Le phishing et ses variantes', 'L\'ingénierie sociale', 'Les ransomwares', 'La fraude au président'],
      },
      {
        title: 'Les bons réflexes',
        duration: '45 min',
        topics: ['Gestion des mots de passe', 'Navigation sécurisée', 'Protection des données', 'Utilisation du Wi-Fi'],
      },
      {
        title: 'Réagir en cas d\'incident',
        duration: '30 min',
        topics: ['Identifier un incident', 'Les premiers gestes', 'Qui contacter', 'Limiter l\'impact'],
      },
      {
        title: 'Cadre réglementaire',
        duration: '30 min',
        topics: ['RGPD et données personnelles', 'Responsabilité individuelle', 'Obligations de l\'entreprise'],
      },
    ],
  },
  {
    slug: 'csna-stormshield',
    title: 'CSNA Stormshield',
    subtitle: 'Certification Stormshield Network Administrator',
    partner: 'stormshield',
    certification: 'CSNA',
    category: 'certification',
    featured: true,

    modality: 'Distanciel, asynchrone',
    price: '1 495€ HT',
    duration: '40h',
    level: 'Intermédiaire',

    targetAudience: [
      'Administrateurs réseau',
      'Techniciens sécurité',
      'Responsables IT souhaitant maîtriser les solutions Stormshield',
    ],

    objectives: [
      'Maîtriser l\'installation et la configuration des firewalls Stormshield',
      'Configurer les règles de filtrage et de NAT',
      'Mettre en place des VPN site-à-site et nomades',
      'Superviser et maintenir les équipements en production',
      'Préparer et réussir la certification CSNA',
    ],

    presentation: `La formation CSNA vous prépare à administrer les solutions de sécurité réseau Stormshield. En partenariat officiel avec Stormshield, cette formation couvre l'ensemble des compétences nécessaires pour configurer, déployer et maintenir les firewalls SNS.

Vous bénéficiez d'un accès à des labs virtuels avec de vrais équipements Stormshield pour pratiquer dans des conditions réelles.`,

    access: 'Sous 24H après validation d\'inscription. La certification CSNA est incluse dans le tarif.',
    prerequisites: 'Connaissances de base en réseau (TCP/IP, modèle OSI). Une expérience en administration système est recommandée.',
    equipment: 'Ordinateur avec connexion internet, navigateur web récent. Les labs sont accessibles directement depuis le navigateur.',

    pedagogicalMeans: [
      'Cours vidéo HD par des formateurs certifiés Stormshield',
      'Labs virtuels avec équipements Stormshield réels',
      'Documentation officielle Stormshield',
      'QCM d\'entraînement type certification',
      'Support technique et pédagogique dédié',
    ],

    evaluationMethods: [
      'QCM de positionnement initial',
      'Labs pratiques notés',
      'Examen blanc de préparation',
      'Passage de la certification CSNA officielle',
    ],

    highlights: [
      'Partenariat officiel Stormshield',
      'Certification incluse dans le prix',
      'Labs avec vrais équipements Stormshield',
      'Taux de réussite > 90%',
    ],

    modules: [
      {
        title: 'Prise en main de l\'environnement',
        duration: '4h',
        topics: [
          'Présentation de la gamme Stormshield Network Security',
          'Installation et première configuration',
          'Interface d\'administration',
          'Tableau de bord et monitoring',
        ],
      },
      {
        title: 'Configuration réseau',
        duration: '6h',
        topics: [
          'Objets réseau et groupes',
          'Interfaces et routage',
          'NAT statique et dynamique',
          'Policy-Based Routing',
          'DHCP et DNS',
        ],
      },
      {
        title: 'Politique de filtrage',
        duration: '8h',
        topics: [
          'Règles de filtrage',
          'Filtrage applicatif',
          'Inspection SSL',
          'Filtrage URL et protocoles',
          'Antivirus et antispam intégrés',
          'Gestion des logs et alertes',
        ],
      },
      {
        title: 'Authentification',
        duration: '5h',
        topics: [
          'Portail captif',
          'Authentification LDAP/AD',
          'SSO transparent',
          'Gestion des utilisateurs et groupes',
        ],
      },
      {
        title: 'VPN',
        duration: '10h',
        topics: [
          'VPN IPSec site-à-site',
          'VPN IPSec avec certificats',
          'VPN SSL portail',
          'VPN SSL tunnel',
          'Configuration clients nomades',
          'Troubleshooting VPN',
        ],
      },
      {
        title: 'Haute disponibilité',
        duration: '4h',
        topics: [
          'Cluster actif/passif',
          'Synchronisation de configuration',
          'Basculement et reprise',
        ],
      },
      {
        title: 'Maintenance et supervision',
        duration: '3h',
        topics: [
          'Mises à jour système',
          'Sauvegarde et restauration',
          'Supervision SNMP',
          'Préparation à la certification',
        ],
      },
    ],
  },
  {
    slug: 'sscp-isc2',
    title: 'SSCP ISC²',
    subtitle: 'Systems Security Certified Practitioner',
    partner: 'isc2',
    certification: 'SSCP',
    category: 'certification',
    featured: true,

    modality: 'Distanciel, asynchrone',
    price: '1 995€ HT',
    duration: '60h',
    level: 'Intermédiaire',

    targetAudience: [
      'Administrateurs systèmes et réseaux',
      'Analystes sécurité',
      'Professionnels IT souhaitant valider leurs compétences en sécurité',
    ],

    objectives: [
      'Maîtriser les 7 domaines du CBK SSCP',
      'Comprendre les contrôles d\'accès et la gestion des identités',
      'Mettre en œuvre les opérations de sécurité',
      'Analyser et répondre aux incidents',
      'Préparer et réussir l\'examen SSCP ISC²',
    ],

    presentation: `Le SSCP (Systems Security Certified Practitioner) est une certification reconnue internationalement, délivrée par ISC². Elle valide les compétences pratiques en sécurité des systèmes d'information.

Cette formation couvre les 7 domaines du Common Body of Knowledge (CBK) et vous prépare efficacement à l'examen officiel.`,

    access: 'Sous 24H après validation d\'inscription. Voucher d\'examen ISC² inclus.',
    prerequisites: 'Une année d\'expérience dans au moins un des 7 domaines du SSCP, ou diplôme en cybersécurité.',
    equipment: 'Ordinateur avec connexion internet, navigateur web récent.',

    pedagogicalMeans: [
      'Cours vidéo couvrant les 7 domaines du CBK',
      'Exercices pratiques et études de cas',
      'QCM d\'entraînement (500+ questions)',
      'Examens blancs chronométrés',
      'Accès à la communauté ISC²',
    ],

    evaluationMethods: [
      'QCM par domaine',
      'Examens blancs complets',
      'Passage de l\'examen officiel SSCP',
    ],

    highlights: [
      'Certification reconnue mondialement',
      'Partenariat officiel ISC²',
      'Voucher d\'examen inclus',
      'Préparation complète aux 7 domaines',
    ],

    modules: [
      {
        title: 'Domain 1: Security Operations and Administration',
        duration: '10h',
        topics: [
          'Security concepts and principles',
          'Security controls implementation',
          'Asset management and lifecycle',
          'Change management processes',
          'Security awareness and training',
          'Physical security operations',
        ],
      },
      {
        title: 'Domain 2: Access Controls',
        duration: '9h',
        topics: [
          'Authentication mechanisms',
          'Identity management lifecycle',
          'Access control models (MAC, DAC, RBAC)',
          'Access control administration',
          'Identity and access provisioning',
        ],
      },
      {
        title: 'Domain 3: Risk Identification, Monitoring and Analysis',
        duration: '8h',
        topics: [
          'Risk management concepts',
          'Security assessment activities',
          'Vulnerability management',
          'Security monitoring concepts',
          'Log management and analysis',
        ],
      },
      {
        title: 'Domain 4: Incident Response and Recovery',
        duration: '8h',
        topics: [
          'Incident handling process',
          'Forensic investigation support',
          'Business continuity planning',
          'Disaster recovery planning',
          'Incident response testing',
        ],
      },
      {
        title: 'Domain 5: Cryptography',
        duration: '8h',
        topics: [
          'Cryptographic concepts',
          'Symmetric and asymmetric encryption',
          'Public Key Infrastructure (PKI)',
          'Key management practices',
          'Secure protocols (TLS, IPSec)',
          'Cryptographic attacks',
        ],
      },
      {
        title: 'Domain 6: Network and Communications Security',
        duration: '10h',
        topics: [
          'Network architecture and design',
          'Network security devices',
          'Secure communications channels',
          'Network attacks and countermeasures',
          'Wireless security',
          'Network access control',
        ],
      },
      {
        title: 'Domain 7: Systems and Application Security',
        duration: '7h',
        topics: [
          'Malware and malicious code',
          'Endpoint security',
          'Cloud security concepts',
          'Virtualization security',
          'Secure software development',
          'Security in the development lifecycle',
        ],
      },
    ],
  },
  {
    slug: 'lpic-1',
    title: 'LPIC-1',
    subtitle: 'Linux Professional Institute Certification Level 1',
    partner: 'lpi',
    certification: 'LPIC-1',
    category: 'certification',

    modality: 'Distanciel, asynchrone',
    price: '1 295€ HT',
    duration: '50h',
    level: 'Débutant',

    targetAudience: [
      'Administrateurs système débutants',
      'Professionnels IT souhaitant maîtriser Linux',
      'Étudiants en informatique',
    ],

    objectives: [
      'Maîtriser l\'architecture et l\'installation de systèmes Linux',
      'Gérer les fichiers, processus et permissions',
      'Configurer le réseau et les services de base',
      'Administrer les utilisateurs et les groupes',
      'Préparer et réussir les examens 101 et 102',
    ],

    presentation: `La certification LPIC-1 est la première étape du programme de certification Linux Professional Institute. Elle valide les compétences fondamentales en administration de systèmes Linux.

Cette formation vous prépare aux deux examens requis (101 et 102) avec une approche pratique et des labs virtuels.`,

    access: 'Sous 24H après validation d\'inscription. Les deux vouchers d\'examen LPI sont inclus.',
    prerequisites: 'Connaissances informatiques générales. Aucune expérience Linux préalable requise.',
    equipment: 'Ordinateur avec connexion internet, navigateur web récent. Les labs Linux sont accessibles depuis le navigateur.',

    pedagogicalMeans: [
      'Cours vidéo structurés selon les objectifs LPI',
      'Labs virtuels avec environnements Linux',
      'Documentation et aide-mémoire',
      'QCM d\'entraînement par objectif',
      'Examens blancs officiels LPI',
    ],

    evaluationMethods: [
      'QCM par chapitre',
      'Labs pratiques évalués',
      'Examens blancs 101 et 102',
      'Passage des certifications officielles',
    ],

    highlights: [
      'Partenariat officiel LPI',
      '2 vouchers d\'examen inclus',
      'Labs virtuels illimités',
      'Formation de zéro à certifié',
    ],

    modules: [
      {
        title: 'Exam 101 - Topic 101: System Architecture',
        duration: '5h',
        topics: [
          'Determine and configure hardware settings',
          'Boot the system',
          'Change runlevels / boot targets and shutdown or reboot system',
        ],
      },
      {
        title: 'Exam 101 - Topic 102: Linux Installation and Package Management',
        duration: '6h',
        topics: [
          'Design hard disk layout',
          'Install a boot manager',
          'Manage shared libraries',
          'Use Debian package management',
          'Use RPM and YUM package management',
          'Linux as a virtualization guest',
        ],
      },
      {
        title: 'Exam 101 - Topic 103: GNU and Unix Commands',
        duration: '8h',
        topics: [
          'Work on the command line',
          'Process text streams using filters',
          'Perform basic file management',
          'Use streams, pipes and redirects',
          'Create, monitor and kill processes',
          'Modify process execution priorities',
          'Search text files using regular expressions',
          'Basic file editing',
        ],
      },
      {
        title: 'Exam 101 - Topic 104: Devices, Linux Filesystems, FHS',
        duration: '6h',
        topics: [
          'Create partitions and filesystems',
          'Maintain the integrity of filesystems',
          'Control mounting and unmounting of filesystems',
          'Manage file permissions and ownership',
          'Create and change hard and symbolic links',
          'Find system files and place files in the correct location',
        ],
      },
      {
        title: 'Exam 102 - Topic 105: Shells and Shell Scripting',
        duration: '5h',
        topics: [
          'Customize and use the shell environment',
          'Customize or write simple scripts',
        ],
      },
      {
        title: 'Exam 102 - Topic 106: User Interfaces and Desktops',
        duration: '3h',
        topics: [
          'Install and configure X11',
          'Graphical desktops',
          'Accessibility',
        ],
      },
      {
        title: 'Exam 102 - Topic 107: Administrative Tasks',
        duration: '5h',
        topics: [
          'Manage user and group accounts and related system files',
          'Automate system administration tasks by scheduling jobs',
          'Localisation and internationalisation',
        ],
      },
      {
        title: 'Exam 102 - Topic 108: Essential System Services',
        duration: '5h',
        topics: [
          'Maintain system time',
          'System logging',
          'Mail Transfer Agent (MTA) basics',
          'Manage printers and printing',
        ],
      },
      {
        title: 'Exam 102 - Topic 109: Networking Fundamentals',
        duration: '4h',
        topics: [
          'Fundamentals of internet protocols',
          'Persistent network configuration',
          'Basic network troubleshooting',
          'Configure client side DNS',
        ],
      },
      {
        title: 'Exam 102 - Topic 110: Security',
        duration: '3h',
        topics: [
          'Perform security administration tasks',
          'Setup host security',
          'Securing data with encryption',
        ],
      },
    ],
  },
  {
    slug: 'cloud-scaleway',
    title: 'Cloud Scaleway',
    subtitle: 'Maîtrisez l\'infrastructure cloud Scaleway',
    partner: 'scaleway',
    certification: 'Scaleway',
    category: 'technique',

    modality: 'Distanciel, asynchrone',
    price: '995€ HT',
    duration: '30h',
    level: 'Débutant',

    targetAudience: [
      'Développeurs souhaitant déployer sur le cloud',
      'Administrateurs système',
      'DevOps et SRE',
    ],

    objectives: [
      'Comprendre l\'architecture cloud Scaleway',
      'Déployer et gérer des instances compute',
      'Configurer le réseau et la sécurité',
      'Utiliser les services managés (Kubernetes, bases de données)',
      'Automatiser avec l\'API et Terraform',
    ],

    presentation: `Cette formation vous permet de maîtriser l'écosystème cloud de Scaleway, le leader français du cloud computing. Vous apprendrez à déployer et gérer des infrastructures complètes en utilisant les bonnes pratiques DevOps.

Formation pratique avec accès à des crédits Scaleway pour vos expérimentations.`,

    access: 'Sous 24H après validation d\'inscription. Crédits Scaleway inclus pour les labs.',
    prerequisites: 'Connaissances de base en Linux et réseau.',
    equipment: 'Ordinateur avec connexion internet, navigateur web récent.',

    pedagogicalMeans: [
      'Cours vidéo par des experts Scaleway',
      'Labs pratiques avec crédits cloud',
      'Projets fil rouge',
      'Documentation et templates Terraform',
      'Support communautaire',
    ],

    evaluationMethods: [
      'QCM par module',
      'Projets pratiques évalués',
      'Projet final de déploiement',
    ],

    highlights: [
      'Partenariat officiel Scaleway',
      'Crédits cloud inclus',
      'Cloud souverain européen',
      'Templates et ressources réutilisables',
    ],
  },
];

// Helper to get formation by slug
export const getFormationBySlug = (slug: string): Formation | undefined => {
  return FORMATIONS.find((f) => f.slug === slug);
};

// Get all formation slugs for static generation
export const getAllFormationSlugs = (): string[] => {
  return FORMATIONS.map((f) => f.slug);
};

// Get formations by category
export const getFormationsByCategory = (category: Formation['category']): Formation[] => {
  return FORMATIONS.filter((f) => f.category === category);
};

// Get featured formations
export const getFeaturedFormations = (): Formation[] => {
  return FORMATIONS.filter((f) => f.featured);
};
