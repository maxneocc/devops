# NEO Cyber Camp - Landing Page

A cybersecurity education platform landing page built with Next.js 14 and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript

## Quick Start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Production build
```

## Frontend Aesthetics Guidelines

### Philosophy
Avoid generic "AI slop" aesthetics. Create distinctive, memorable frontends that surprise and delight.

### Typography
- **Avoid**: Inter, Roboto, Arial, system fonts, Space Grotesk, Poppins
- **Use**: Distinctive choices that elevate the design
- Current: **Bebas Neue** (headlines) + **Sora** (body) - bold industrial meets clean modern

### Color & Theme
- **Avoid**: Clichéd purple gradients on white, timid evenly-distributed palettes
- **Use**: Dominant colors with sharp accents, cohesive aesthetic commitment
- Current: **Cyber terminal aesthetic**
  - `--bg-deep`: #0a0a0f (near-black with subtle blue)
  - `--bg-surface`: #12121a (elevated surfaces)
  - `--accent-primary`: #00f0ff (electric cyan)
  - `--accent-secondary`: #39ff14 (terminal green)
  - `--accent-warm`: #ff6b35 (warm contrast)
  - `--text-primary`: #e8e8e8
  - `--text-muted`: #6b7280

### Backgrounds
- **Avoid**: Flat solid colors
- **Use**: Layered depth - CSS gradients, geometric patterns, contextual effects
- Current: Grid patterns, scanlines, noise texture overlays, radial glows

### Motion
- **Avoid**: Scattered micro-interactions without purpose
- **Use**: Orchestrated page load with staggered reveals (animation-delay)
- Current: Coordinated entrance animations, typewriter effects, smooth scroll triggers

### Visual Identity
- Monospace elements for "hacker" authenticity
- Sharp geometric shapes over soft rounded corners
- High contrast accents on dark backgrounds
- Scanline/CRT effects for retro-tech feel

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout, fonts, CSS variables
│   ├── page.tsx            # Landing page composition
│   └── globals.css         # Custom properties, patterns, effects
├── components/
│   ├── layout/             # Navbar, Footer, MobileMenu
│   ├── sections/           # Hero, Features, FAQ, etc.
│   └── ui/                 # Button, Container, FeatureCard, etc.
├── lib/
│   ├── constants.ts        # Content and configuration
│   └── utils.ts            # Utilities (cn helper)
└── public/
    └── images/partners/    # Partner logo SVGs
```

## Partner Logos
- ISC2, Scaleway, Stormshield, French Tech Sofia
- CCIFB, Projet Voltaire, Linux Professional Institute
- Cisco Netacad, Pagescreen, Frigghome

## Development Notes

- CSS variables in `:root` for consistent theming
- `cn()` utility combines clsx + tailwind-merge
- Staggered animations use `animation-delay` with CSS custom properties
- Background patterns use pseudo-elements (::before, ::after)
