cli:
  backend: "claude"
event_loop:
  completion_promise: "ORCHESTRATION_COMPLETE"
  max_iterations: 50
core:
  scratchpad: ".agent/scratchpad.md"
  specs_dir: "./specs/"
# NEO Website - Phase 1 : MVP B2B

## Contexte
Refonte du site neocc.co. Priorité : closer les prospects B2B.
Voir SPECS.md pour le détail complet de chaque page.

## Objectif Sprint
Livrer les pages essentielles pour la conversion B2B :
Home → Solutions → Contact → Navigation → Légales

---

## Tasks

### Structure & Navigation

- [ ] Layout principal avec Header et Footer
- [ ] Header : logo, menu (Formations, Solutions, Plateforme, Blog), bouton Connexion → app.neocc.co
- [ ] Footer : navigation rapide, contact, réseaux, légales, sélecteur langue (placeholder)
- [ ] Mobile menu (hamburger) responsive
- [ ] Breadcrumb component réutilisable

### Home Page (/)

- [ ] Hero section avec double CTA : "Je suis un individu" / "Je suis une organisation"
- [ ] Section logos partenaires (ISC2, Scaleway, Stormshield, LPI, French Tech Sofia, CCIFB)
- [ ] Section "Ce qu'on propose" (3 colonnes : Formations, Labs, Certifications)
- [ ] Section "Pourquoi NEO" (différenciateurs)
- [ ] Section aperçu formations (grid 4 cards placeholder)
- [ ] Section teaser organisations B2B
- [ ] CTA final double bouton

### Page Solutions (/solutions)

- [ ] Hero avec double CTA ancré (#former-equipes, #ecoles)
- [ ] Navigation sections sticky ou visible
- [ ] Section 1 : Pourquoi NEO (#pourquoi-neo)
- [ ] Section 2 : Utilisez nos cours (#cours-existants, id="former-equipes")
- [ ] Section 3 : Création sur mesure (#creation-cours, id="ecoles")
- [ ] Section 4 : Plateforme technique (#plateforme)
- [ ] Section 5 : Certifications (#certifications) avec logos
- [ ] Section 6 : Évaluation (#evaluation)
- [ ] Section 7 : Espace dédié (#espace-dedie)
- [ ] CTA final → Typeform

### Page Contact (/contact)

- [ ] Headline "Une question ? Un projet ?"
- [ ] Lien ou embed Typeform (placeholder URL pour l'instant)
- [ ] Infos contact (email, adresse Paris)
- [ ] Liens réseaux sociaux

### Pages Légales

- [ ] Page Mentions légales (/mentions-legales) - contenu placeholder
- [ ] Page CGV (/cgv) - contenu placeholder
- [ ] Page CGU (/cgu) - contenu placeholder
- [ ] Page Confidentialité (/confidentialite) - contenu placeholder

### Intégrations

- [ ] Google Analytics 4 (placeholder ID, structure prête)
- [ ] Crisp chat widget (placeholder ID, structure prête)
- [ ] Script slots dans layout pour GA et Crisp

### SEO Base

- [ ] Metadata dynamique par page (title, description)
- [ ] Open Graph tags (og:title, og:description, og:image)
- [ ] Sitemap.xml généré automatiquement
- [ ] robots.txt (autoriser tout sauf /lp/*)

### Performance

- [ ] Images optimisées (next/image ou équivalent)
- [ ] Fonts preload (Bebas Neue + Sora ou selon CLAUDE.md)
- [ ] Lighthouse Performance > 90 sur Home

---

## Definition of Done

- [ ] Toutes les pages Phase 1 accessibles et fonctionnelles
- [ ] Navigation complète (header, footer, mobile menu)
- [ ] Responsive : testé mobile, tablet, desktop
- [ ] Lighthouse Performance > 90 sur Home
- [ ] Build production sans erreur
- [ ] Déployable (Vercel ou autre)

---

## Notes

- Contenu texte peut être placeholder, Max complétera
- Images/screenshots peuvent être placeholders
- Respecter les guidelines esthétiques de CLAUDE.md (cyber terminal aesthetic)
- Mobile-first

---

## Success Signal

Output <promise>WEBSITE_PHASE1_DONE</promise> when all tasks completed and Definition of Done met.
