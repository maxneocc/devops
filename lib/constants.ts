// Navigation links for B2B focused site
export const NAV_LINKS = [
  { label: 'Formations', href: '/formations' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Plateforme', href: '/plateforme' },
  { label: 'Blog', href: '/blog' },
];

// Main features for "Ce qu'on propose" section
export const OFFERINGS = [
  {
    title: 'Formations',
    description: 'Cours vidéo structurés par des experts',
    features: ['100% en ligne', 'À votre rythme', 'HD sous-titré'],
    icon: 'video',
  },
  {
    title: 'Labs pratiques',
    description: 'VMs à la demande avec correction auto',
    features: ['Réseaux isolés', 'Environnements réels', 'Feedback instantané'],
    icon: 'terminal',
  },
  {
    title: 'Certifications',
    description: 'Partenariats officiels ISC2, Stormshield, LPI',
    features: ['Tarifs négociés', 'Incluses ou en option', 'Reconnues mondialement'],
    icon: 'badge',
  },
];

// Differentiators for "Pourquoi NEO" section
export const DIFFERENTIATORS = [
  {
    title: '100% en ligne',
    description: 'Asynchrone, 24/7, depuis n\'importe où',
  },
  {
    title: 'Experts cyber ET créateurs',
    description: 'Nos formateurs sont des professionnels du terrain et des créateurs de contenu',
  },
  {
    title: 'Diplômes reconnus',
    description: 'RNCP + certifications partenaires officiels',
  },
  {
    title: 'Plateforme intégrée',
    description: 'Pas de setup local, tout dans le navigateur',
  },
  {
    title: 'Hébergé en UE',
    description: 'Données souveraines, RGPD compliant',
  },
];

// Partner logos
export const PARTNERS = [
  { name: 'ISC²', slug: 'isc2', logo: '/images/partners/isc2.svg' },
  { name: 'Scaleway', slug: 'scaleway', logo: '/images/partners/scaleway.svg' },
  { name: 'Stormshield', slug: 'stormshield', logo: '/images/partners/stormshield.svg' },
  { name: 'LPI', slug: 'lpi', logo: '/images/partners/lpi.svg' },
  { name: 'French Tech Sofia', slug: 'french-tech', logo: '/images/partners/french-tech.svg' },
  { name: 'CCI France Bulgarie', slug: 'ccifb', logo: '/images/partners/ccifb.svg' },
];

// Sample training courses for preview
export const TRAINING_PREVIEW = [
  {
    title: 'CSNA Stormshield',
    slug: 'csna-stormshield',
    certification: 'CSNA',
    duration: '40h',
    price: 1495,
    level: 'Intermédiaire',
    partner: 'stormshield',
  },
  {
    title: 'SSCP ISC²',
    slug: 'sscp-isc2',
    certification: 'SSCP',
    duration: '60h',
    price: 1995,
    level: 'Intermédiaire',
    partner: 'isc2',
  },
  {
    title: 'LPIC-1',
    slug: 'lpic-1',
    certification: 'LPIC-1',
    duration: '50h',
    price: 1295,
    level: 'Débutant',
    partner: 'lpi',
  },
  {
    title: 'Cloud Scaleway',
    slug: 'cloud-scaleway',
    certification: 'Scaleway',
    duration: '30h',
    price: 995,
    level: 'Débutant',
    partner: 'scaleway',
  },
];

// Solutions page sections for navigation
export const SOLUTIONS_SECTIONS = [
  { label: 'Pourquoi nous', href: '#pourquoi-neo' },
  { label: 'Cours existants', href: '#cours-existants' },
  { label: 'Création sur mesure', href: '#creation-cours' },
  { label: 'Plateforme', href: '#plateforme' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Évaluation', href: '#evaluation' },
  { label: 'Espace dédié', href: '#espace-dedie' },
];

// FAQ items
export const FAQ_ITEMS = [
  {
    question: 'Qu\'est-ce qui différencie NEO des autres plateformes ?',
    answer: 'NEO combine des parcours structurés avec des labs virtuels pratiques, accessibles 24/7 depuis votre navigateur. Notre programme est conçu par des professionnels du secteur et aligné sur les certifications reconnues.',
  },
  {
    question: 'Faut-il une expérience préalable en cybersécurité ?',
    answer: 'Non, aucune expérience préalable n\'est requise. Nos cours commencent par les fondamentaux et progressent vers des sujets avancés. Que vous soyez débutant ou souhaitiez faire évoluer votre carrière, nous avons un parcours pour vous.',
  },
  {
    question: 'À quelles certifications peut-on se préparer ?',
    answer: 'Notre plateforme vous prépare aux certifications reconnues internationalement : CSNA Stormshield, SSCP ISC², LPIC Linux, et les certifications Scaleway Cloud.',
  },
  {
    question: 'Comment fonctionnent les labs virtuels ?',
    answer: 'Nos labs virtuels fonctionnent entièrement dans votre navigateur - aucune installation requise. Vous accédez à des environnements réalistes où vous pouvez pratiquer en toute sécurité, avec des scénarios mis à jour régulièrement.',
  },
  {
    question: 'Y a-t-il un accompagnement humain ?',
    answer: 'Absolument ! Notre plateforme est disponible 24/7, et vous avez aussi accès à des webinaires live, des forums communautaires, et un mentorat direct avec des experts du secteur.',
  },
];

// Footer links
export const FOOTER_LINKS = {
  navigation: [
    { label: 'Formations', href: '/formations' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Plateforme', href: '/plateforme' },
    { label: 'Blog', href: '/blog' },
  ],
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'CGV', href: '/cgv' },
    { label: 'CGU', href: '/cgu' },
    { label: 'Confidentialité', href: '/confidentialite' },
  ],
};

// Contact information
export const CONTACT_INFO = {
  address: 'Paris, France',
  email: 'contact@neocc.co',
  typeformUrl: 'https://typeform.com/to/neo-contact', // Placeholder
  socials: {
    linkedin: 'https://linkedin.com/company/neo-cyber-camp',
    twitter: 'https://twitter.com/neocybercamp',
    youtube: 'https://youtube.com/@neocybercamp',
  },
};

// External links
export const EXTERNAL_LINKS = {
  app: 'https://app.neocc.co',
  typeform: 'https://typeform.com/to/neo-contact', // Placeholder
};

// Analytics IDs - loaded from environment variables for security
// Set NEXT_PUBLIC_GA4_ID and NEXT_PUBLIC_CRISP_ID in your .env.local file
export const ANALYTICS = {
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID || '',
  crispId: process.env.NEXT_PUBLIC_CRISP_ID || '',
};

// Helper to check if analytics is properly configured
export const isAnalyticsConfigured = () => ({
  ga4: Boolean(ANALYTICS.ga4Id && !ANALYTICS.ga4Id.includes('XXXX')),
  crisp: Boolean(ANALYTICS.crispId && !ANALYTICS.crispId.includes('XXXX')),
});
