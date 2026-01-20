# NEO Cyber Camp - Website Specs

## Overview

**Projet** : Refonte complète du site neocc.co
**Objectif** : Site orienté B2B + B2C, optimisé SEO, rapide, moderne (style HackTheBox)
**Stack recommandée** : Next.js ou Astro (à valider avec Ralph)
**Langues** : FR + EN
**Priorité** : Home → Solutions → Catalogue formations → Blog

---

## Architecture globale

### Menu principal

| Item | Lien | Notes |
|------|------|-------|
| Formations | /formations | Catalogue filtrable |
| Solutions | /solutions | Page B2B longue avec sections ancrées |
| Plateforme | /plateforme | Fonctionnalités, labs, démo |
| Blog | /blog | Articles SEO |
| Connexion | https://app.neocc.co | Lien externe |

### Pages hors menu

| Page | URL | Notes |
|------|-----|-------|
| Home | / | Landing principale |
| Détail formation | /formations/[slug] | Page dynamique par cours |
| Détail certification | /certifications/[slug] | ISC2, CSNA, LPIC, Scaleway |
| À propos | /a-propos | Mission, équipe, partenaires |
| Contact | /contact | Embed ou lien Typeform |
| Landing pages Ads | /lp/[campagne] | Pages dédiées campagnes |
| Mentions légales | /mentions-legales | |
| CGV | /cgv | |
| CGU | /cgu | |
| Politique confidentialité | /confidentialite | |

### Footer

- Logo NEO
- Navigation rapide (Formations, Solutions, Plateforme, Blog)
- Contact (adresse Paris, email)
- Réseaux sociaux (LinkedIn, X, YouTube)
- Pages légales
- Sélecteur langue FR/EN

---

## Pages détaillées

### 1. HOME (/)

**Objectif** : Convertir visiteurs B2C ET B2B, crédibiliser immédiatement

**Structure :**

```
┌─────────────────────────────────────────────────────────────┐
│ HERO                                                         │
│ Headline : "Formez-vous à la cybersécurité"                 │
│ Subheadline : "Plateforme tout-en-un : cours, labs,         │
│               certifications. 100% en ligne."               │
│                                                              │
│ Double CTA :                                                 │
│ [Je suis un individu] → /formations                         │
│ [Je suis une organisation] → /solutions                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ LOGOS PARTENAIRES                                           │
│ "Ils nous font confiance"                                   │
│ ISC2 | Scaleway | Stormshield | LPI | French Tech Sofia     │
│ | CCI France Bulgarie                                       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ CE QU'ON PROPOSE (3 colonnes)                               │
│                                                              │
│ [Formations]        [Labs pratiques]    [Certifications]    │
│ Cours vidéo         VMs à la demande    ISC2, Stormshield   │
│ structurés          Correction auto     LPI, Scaleway       │
│ par des experts     Réseaux isolés      Incluses ou option  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ POURQUOI NEO (différenciateurs)                             │
│                                                              │
│ • 100% en ligne, asynchrone, 24/7                           │
│ • Experts cyber ET créateurs de contenu                     │
│ • Diplômes reconnus (RNCP) + certifications partenaires     │
│ • Plateforme technique intégrée (pas de setup local)        │
│ • Hébergé en UE                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ APERÇU FORMATIONS (carrousel ou grid)                       │
│                                                              │
│ [CSNA]  [SSCP]  [LPIC-1]  [Cloud Scaleway]                 │
│ Cards avec : titre, durée, certification, prix              │
│                                                              │
│ CTA : "Voir toutes les formations"                          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ SECTION ORGANISATIONS (teaser)                              │
│                                                              │
│ "Vous êtes une entreprise ou une école ?"                   │
│ • Formez vos équipes                                        │
│ • Utilisez nos cours                                        │
│ • Créez vos propres modules                                 │
│                                                              │
│ CTA : "Découvrir nos solutions B2B" → /solutions            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ CTA FINAL                                                    │
│                                                              │
│ "Prêt à commencer ?"                                        │
│ [Voir les formations]  [Nous contacter]                     │
└─────────────────────────────────────────────────────────────┘
```

---

### 2. SOLUTIONS (/solutions)

**Objectif** : Closer les prospects B2B (entreprises, écoles, partenaires)

**Structure avec sections ancrées :**

```
┌─────────────────────────────────────────────────────────────┐
│ HERO                                                         │
│                                                              │
│ "La solution complète pour former en cybersécurité"         │
│                                                              │
│ Double CTA :                                                 │
│ [Former mes équipes] → #former-equipes                      │
│ [Je suis une école] → #ecoles                               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ NAVIGATION SECTIONS (sticky ou visible)                     │
│                                                              │
│ Pourquoi nous | Cours existants | Création sur mesure |     │
│ Plateforme | Certifications | Évaluation | Espace dédié     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ SECTION 1 : POURQUOI NEO (#pourquoi-neo)                    │
│                                                              │
│ Notre différence :                                          │
│ • Experts techniques ET pédagogiques                        │
│   → Contrairement aux studios (pas de compétences cyber)    │
│   → Contrairement aux boîtes tech (pas de compétences       │
│     création/montage)                                       │
│ • Rapidité d'exécution                                      │
│ • Partenariats certifications officiels                     │
│ • Hébergement souverain (UE)                                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ SECTION 2 : UTILISEZ NOS COURS (#cours-existants)           │
│ id="former-equipes"                                         │
│                                                              │
│ Catalogue disponible :                                      │
│ • Modules prêts à l'emploi                                  │
│ • Modèle licence par classe ou par étudiant                 │
│ • Cas client : groupe IONIS                                 │
│                                                              │
│ CTA : "Voir le catalogue" → /formations                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ SECTION 3 : CRÉATION SUR MESURE (#creation-cours)           │
│ id="ecoles"                                                 │
│                                                              │
│ 2 options :                                                 │
│                                                              │
│ [Avec nos formateurs]                                       │
│ Vous fournissez le syllabus, on gère tout :                │
│ script, enregistrement, montage, exercices, projets         │
│                                                              │
│ [Avec vos formateurs]                                       │
│ On explique le process, ils préparent, on enregistre       │
│ dans nos studios (ou les vôtres)                           │
│                                                              │
│ Livrables :                                                 │
│ • Option 1 : Hébergement sur NEO (plateforme complète)     │
│ • Option 2 : Livrables seuls (vous gérez)                  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ SECTION 4 : PLATEFORME TECHNIQUE (#plateforme)              │
│                                                              │
│ • VMs à la demande (templates personnalisables)             │
│ • Réseaux isolés par étudiant                               │
│ • Environnements automatisés                                │
│ • Correction Ansible automatique                            │
│ • Correction vidéo disponible                               │
│                                                              │
│ [Screenshot ou démo de la plateforme]                       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ SECTION 5 : CERTIFICATIONS (#certifications)                │
│                                                              │
│ Partenaires officiels :                                     │
│ [Logos : ISC2, Stormshield, LPI, Scaleway]                 │
│                                                              │
│ • Tarifs négociés grâce au partenariat                     │
│ • Intégré au process de formation                          │
│ • Plus-value CV pour vos étudiants                         │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ SECTION 6 : ÉVALUATION (#evaluation)                        │
│                                                              │
│ Système complet :                                           │
│ • QCM intégrés                                              │
│ • Projets longs (plusieurs jours)                          │
│ • Vérification asynchrone (rapport + configs)              │
│ • Soutenances en ligne (évaluateurs NEO ou vos équipes)    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ SECTION 7 : ESPACE DÉDIÉ (#espace-dedie)                    │
│                                                              │
│ • Votre espace avec administrateurs                         │
│ • Invitation et gestion des étudiants                      │
│ • Filtres par classes                                       │
│ • Reporting progression                                     │
│                                                              │
│ À venir : branding personnalisé (white-label)              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ CTA FINAL                                                    │
│                                                              │
│ "Discutons de votre projet"                                 │
│ [Demander un devis] → Typeform                              │
└─────────────────────────────────────────────────────────────┘
```

---

### 3. FORMATIONS (/formations)

**Objectif** : Catalogue filtrable, SEO-friendly, conversion vers inscription

**Structure :**

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER                                                       │
│                                                              │
│ "Nos formations cybersécurité"                              │
│ Sous-titre : "Cours, certifications et parcours diplômants" │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ FILTRES                                                      │
│                                                              │
│ [Tous] [Certifications] [Parcours diplômants] [Modules]     │
│                                                              │
│ Ou filtres latéraux :                                       │
│ • Par niveau (Débutant, Intermédiaire, Avancé)             │
│ • Par certification (ISC2, Stormshield, LPI, Scaleway)     │
│ • Par durée                                                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ GRID FORMATIONS                                              │
│                                                              │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐           │
│ │  CSNA   │ │  SSCP   │ │ LPIC-1  │ │  Cloud  │           │
│ │         │ │         │ │         │ │         │           │
│ │ Logo    │ │ Logo    │ │ Logo    │ │ Logo    │           │
│ │ cert    │ │ cert    │ │ cert    │ │ cert    │           │
│ │         │ │         │ │         │ │         │           │
│ │ XX h    │ │ XX h    │ │ XX h    │ │ XX h    │           │
│ │ XXX €   │ │ XXX €   │ │ XXX €   │ │ XXX €   │           │
│ └─────────┘ └─────────┘ └─────────┘ └─────────┘           │
│                                                              │
│ Card = lien vers /formations/[slug]                         │
└─────────────────────────────────────────────────────────────┘
```

**Données par formation (fichiers MD ou JSON) :**
```yaml
title: "Sécurité réseaux - CSNA"
slug: "csna-stormshield"
certification: "CSNA Stormshield"
partner_logo: "/logos/stormshield.svg"
duration: "40 heures"
price: 1495
level: "Intermédiaire"
description: "Formation complète à la sécurité réseaux avec certification Stormshield."
objectives:
  - "Configurer un firewall Stormshield"
  - "Gérer les politiques de sécurité"
  - "..."
prerequisites:
  - "Bases en réseaux TCP/IP"
  - "..."
program:
  - module: "Introduction à la sécurité réseaux"
    duration: "4h"
  - module: "Configuration Stormshield"
    duration: "8h"
  - ...
includes:
  - "Cours vidéo HD"
  - "Labs pratiques"
  - "QCM"
  - "Passage certification inclus"
cta_text: "S'inscrire"
cta_link: "https://app.neocc.co/..."
```

---

### 4. FORMATION DÉTAIL (/formations/[slug])

**Structure :**

```
┌─────────────────────────────────────────────────────────────┐
│ BREADCRUMB                                                   │
│ Formations > Sécurité réseaux - CSNA                        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ HERO FORMATION                                               │
│                                                              │
│ [Logo certification]                                        │
│                                                              │
│ Titre : Sécurité réseaux - CSNA                            │
│ Sous-titre : Certification Stormshield incluse             │
│                                                              │
│ Infos clés :                                                │
│ • Durée : 40 heures                                        │
│ • Niveau : Intermédiaire                                   │
│ • Certification : CSNA                                     │
│                                                              │
│ Prix : 1 495 € HT                                          │
│                                                              │
│ [S'inscrire] → app.neocc.co                                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ DESCRIPTION                                                  │
│                                                              │
│ Texte de présentation de la formation...                   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ OBJECTIFS                                                    │
│                                                              │
│ À l'issue de cette formation, vous serez capable de :      │
│ • Objectif 1                                                │
│ • Objectif 2                                                │
│ • ...                                                       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ PRÉREQUIS                                                    │
│                                                              │
│ • Prérequis 1                                               │
│ • Prérequis 2                                               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ PROGRAMME                                                    │
│                                                              │
│ Accordéon ou liste des modules avec durées                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ CE QUI EST INCLUS                                           │
│                                                              │
│ ✓ Cours vidéo HD                                           │
│ ✓ Labs pratiques                                           │
│ ✓ QCM d'évaluation                                         │
│ ✓ Passage certification inclus                             │
│ ✓ Accès à vie                                              │
│ ✓ Support 24h                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ CTA FINAL                                                    │
│                                                              │
│ Prix : 1 495 € HT                                          │
│ [S'inscrire maintenant]                                     │
│                                                              │
│ "Une question ? Contactez-nous"                            │
└─────────────────────────────────────────────────────────────┘
```

---

### 5. PLATEFORME (/plateforme)

**Objectif** : Montrer la valeur technique, différencier des concurrents

**Structure :**

```
┌─────────────────────────────────────────────────────────────┐
│ HERO                                                         │
│                                                              │
│ "Une plateforme pensée pour apprendre en pratiquant"       │
│                                                              │
│ [Screenshot ou vidéo démo de la plateforme]                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ FEATURES GRID                                                │
│                                                              │
│ [Cours vidéo]         [Labs à la demande]                  │
│ HD, chapitré,         VMs générées en 1 clic               │
│ sous-titré                                                  │
│                                                              │
│ [Correction auto]     [Réseaux isolés]                     │
│ Ansible vérifie       Chaque étudiant a                    │
│ vos configs           son environnement                    │
│                                                              │
│ [QCM & évaluations]   [Certifications]                     │
│ Intégrés au           Partenaires officiels                │
│ parcours              incluses                              │
│                                                              │
│ [Progression]         [Multi-device]                       │
│ Suivi détaillé        Desktop, tablet,                     │
│ de votre avancée      mobile                               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ COMPARATIF (optionnel, style one-pager actuel)              │
│                                                              │
│                    NEO    Centres    Plateformes           │
│ 100% en ligne       ✓        ✗           ✓                 │
│ Labs intégrés       ✓        !           ✗                 │
│ Certifications      ✓        ?           ✗                 │
│ Diplômes RNCP       ✓        ✓           ✗                 │
│ Hébergé UE          ✓        -           ✗                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ CTA                                                          │
│                                                              │
│ [Voir les formations]  [Demander une démo]                 │
└─────────────────────────────────────────────────────────────┘
```

---

### 6. BLOG (/blog)

**Objectif** : SEO, autorité, acquisition organique

**Structure listing :**

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER                                                       │
│                                                              │
│ "Blog & Ressources"                                         │
│ "Actualités cybersécurité, guides, tutoriels"              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ FILTRES/CATÉGORIES                                          │
│                                                              │
│ [Tous] [Guides] [Actualités] [Tutoriels] [Carrière]        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ GRID ARTICLES                                                │
│                                                              │
│ Cards avec : image, titre, extrait, date, catégorie        │
└─────────────────────────────────────────────────────────────┘
```

**Structure article (/blog/[slug]) :**
- Titre H1
- Meta (date, auteur, catégorie, temps de lecture)
- Contenu markdown
- CTA fin d'article ("Envie d'aller plus loin ? Voir nos formations")
- Articles liés

**Données article (MD avec frontmatter) :**
```yaml
---
title: "Comment devenir analyste SOC en 2025"
slug: "devenir-analyste-soc-2025"
date: "2025-01-15"
author: "Maximilien Vohnout"
category: "Carrière"
excerpt: "Guide complet pour démarrer une carrière d'analyste SOC..."
image: "/blog/analyste-soc.jpg"
---

Contenu markdown...
```

---

### 7. À PROPOS (/a-propos)

**Structure :**

```
┌─────────────────────────────────────────────────────────────┐
│ HERO                                                         │
│                                                              │
│ "Notre mission : rendre la cybersécurité accessible"       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ HISTOIRE / VISION                                           │
│                                                              │
│ Texte sur la genèse, la vision, les valeurs                │
│ (reprendre le Manifeste)                                    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ ÉQUIPE                                                       │
│                                                              │
│ Maximilien VOHNOUT - Fondateur & CEO                       │
│ Photo + bio courte                                          │
│                                                              │
│ (Autres membres si pertinent)                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ PARTENAIRES                                                  │
│                                                              │
│ Logos + courte description de chaque partenariat           │
│ ISC2, Stormshield, LPI, Scaleway, French Tech Sofia        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ CHIFFRES (quand pertinent)                                  │
│                                                              │
│ X étudiants formés | X certifications | X partenaires      │
└─────────────────────────────────────────────────────────────┘
```

---

### 8. CONTACT (/contact)

**Simple :**
- Headline "Une question ? Un projet ?"
- Embed Typeform ou lien vers Typeform
- Infos de contact (email, adresse Paris)
- Liens réseaux sociaux

---

### 9. LANDING PAGES ADS (/lp/[campagne])

**Template réutilisable :**

```
┌─────────────────────────────────────────────────────────────┐
│ HERO spécifique à la campagne                               │
│                                                              │
│ Ex: "Formation SSCP - Certifiez-vous en cybersécurité"     │
│                                                              │
│ CTA unique et clair                                         │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ PROBLÈME / SOLUTION                                         │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ BÉNÉFICES                                                    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ SOCIAL PROOF (logos, témoignages si dispo)                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ CTA FINAL                                                    │
└─────────────────────────────────────────────────────────────┘
```

Pas de navigation complète sur les LP (éviter la fuite).

---

## Spécifications techniques

### Stack recommandée

- **Framework** : Next.js 14+ (App Router) ou Astro
- **Styling** : Tailwind CSS
- **Contenu** : Markdown (MDX) avec frontmatter pour cours et blog
- **Déploiement** : Vercel ou Cloudflare Pages
- **Analytics** : Google Analytics 4
- **Chat** : Widget Crisp (script à intégrer)
- **Formulaires** : Liens Typeform (pas d'embed nécessaire)

### SEO

**Chaque page doit avoir :**
- Title unique et optimisé
- Meta description
- Open Graph tags (og:title, og:description, og:image)
- Twitter Card tags
- URL canonique
- Schema.org markup (Organization, Course, Article selon page)

**Sitemap** : généré automatiquement
**Robots.txt** : autoriser tout sauf /lp/*

### Performance

**Objectifs :**
- Lighthouse Performance > 90
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

**Pratiques :**
- Images optimisées (WebP, lazy loading)
- Fonts optimisées (preload, subset)
- Code splitting
- Static generation (SSG) maximum

### Multilingue (FR/EN)

**Structure URL :**
- `/fr/...` pour français
- `/en/...` pour anglais
- Redirection `/` vers `/fr/` par défaut (ou détection navigateur)

**Gestion :**
- Fichiers de traduction JSON ou intégrés au framework (next-intl, etc.)
- Contenu MD dupliqué : `/content/fr/...` et `/content/en/...`

### Assets

**Logos à intégrer :**
- NEO Cyber Camp (logo principal)
- ISC2 Academic Partner
- Scaleway
- Stormshield
- LPI
- French Tech Sofia
- CCI France Bulgarie

**Images :**
- Screenshots plateforme app.neocc.co
- Photos équipe (si dispo)
- Illustrations/icônes (style HackTheBox : tech, moderne, sombre)

### Intégrations

| Service | Usage | Intégration |
|---------|-------|-------------|
| Crisp | Chat support | Script JS dans `<head>` |
| Google Analytics | Analytics | GA4 script |
| Typeform | Formulaires | Liens externes |
| app.neocc.co | Plateforme | Liens "Connexion" et "S'inscrire" |

---

## Design guidelines

### Style général

**Inspiration** : HackTheBox
- Thème sombre (dark mode par défaut)
- Accents colorés (violet/bleu NEO)
- Typography moderne, lisible
- Beaucoup d'espace
- Animations subtiles

### Couleurs (à confirmer avec charte existante)

```css
--color-background: #0a0a0f;
--color-surface: #12121a;
--color-primary: #7c3aed; /* violet */
--color-secondary: #3b82f6; /* bleu */
--color-text: #ffffff;
--color-text-muted: #a1a1aa;
--color-border: #27272a;
```

### Typography

- Headings : Inter ou équivalent (bold, moderne)
- Body : Inter ou équivalent (regular)
- Code : JetBrains Mono ou similaire

---

## Structure des fichiers contenu

```
/content
  /fr
    /formations
      csna-stormshield.md
      sscp-isc2.md
      lpic-1.md
      cloud-scaleway.md
    /blog
      devenir-analyste-soc-2025.md
      ...
    /pages
      a-propos.md
      ...
  /en
    /formations
      ...
    /blog
      ...
```

---

## Priorités de développement

### Phase 1 (MVP - Closer B2B)
1. Home page
2. Page Solutions
3. Header/Footer/Navigation
4. Page Contact
5. Pages légales
6. Intégration Crisp + GA

### Phase 2 (Catalogue)
1. Page Formations (listing)
2. Pages Formation détail
3. Page Certifications
4. Page Plateforme

### Phase 3 (SEO & Growth)
1. Blog (listing + articles)
2. Page À propos
3. Landing pages Ads (template)
4. Optimisations SEO avancées

### Phase 4 (Évolutions)
1. Version anglaise complète
2. Intégration API app.neocc.co
3. Améliorations UX basées sur analytics

---

## Notes pour Claude Code / Ralph

- Ce document est la source de vérité pour le développement
- En cas de doute sur un choix, privilégier : rapidité de chargement > esthétique
- Le contenu texte peut être placeholder dans un premier temps, Max le complétera
- Les images/screenshots peuvent être des placeholders initialement
- Tester sur mobile dès le début (mobile-first)
- Commencer par la structure, puis le style, puis les animations

---

## Liens utiles

- Site actuel : https://neocc.co
- Plateforme : https://app.neocc.co
- Inspiration : https://www.hackthebox.com
- Typeform contact : [À fournir]
- Crisp : [À fournir ID]
- GA4 : [À fournir ID]

---

*Document créé le 18/01/2025 - Version 1.0*
