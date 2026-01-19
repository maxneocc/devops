import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionaries';
import { type Locale } from '@/lib/i18n';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Button from '@/components/ui/Button';
import { PARTNERS, EXTERNAL_LINKS } from '@/lib/constants';

interface PageProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return {
    title: params.locale === 'fr' ? 'Solutions B2B - Entreprises et Écoles' : 'B2B Solutions - Companies and Schools',
    description: params.locale === 'fr'
      ? 'Solutions de formation cybersécurité pour entreprises et écoles. Cours existants, création sur mesure, plateforme technique intégrée, certifications officielles.'
      : 'Cybersecurity training solutions for companies and schools. Existing courses, custom creation, integrated technical platform, official certifications.',
  };
}

export default async function SolutionsPage({ params }: PageProps) {
  const dict = await getDictionary(params.locale);
  const s = dict.solutions;

  const sectionNav = [
    { label: s.nav.why, href: '#pourquoi-neo' },
    { label: s.nav.courses, href: '#cours-existants' },
    { label: s.nav.custom, href: '#creation-cours' },
    { label: s.nav.platform, href: '#plateforme' },
    { label: s.nav.certifications, href: '#certifications' },
    { label: s.nav.evaluation, href: '#evaluation' },
    { label: s.nav.space, href: '#espace-dedie' },
  ];

  return (
    <>
      <Navbar locale={params.locale} dict={dict} />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-cyber-deep relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />

          <Container className="relative">
            <Breadcrumb
              items={[{ label: s.breadcrumb }]}
              homeLabel={dict.common.home}
              locale={params.locale}
            />

            <div className="mt-8 max-w-4xl">
              <span className="font-mono text-accent-cyan text-sm mb-4 block">{s.hero.tag}</span>
              <h1 className="font-display text-hero text-text-primary uppercase tracking-wide mb-6">
                {s.hero.title}{' '}
                <span className="gradient-text">{s.hero.titleHighlight}</span>{' '}
                {s.hero.title2}
              </h1>
              <p className="text-text-secondary text-lg mb-10 max-w-2xl">
                {s.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" href="#former-equipes">
                  <span className="mr-2">&gt;</span>
                  {s.hero.cta1}
                </Button>
                <Button variant="secondary" size="lg" href="#ecoles">
                  {s.hero.cta2}
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Section Navigation */}
        <section className="py-4 bg-cyber-surface border-y border-cyber-border sticky top-20 z-40">
          <Container>
            <nav className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
              {sectionNav.map((section) => (
                <a
                  key={section.href}
                  href={section.href}
                  className="text-sm text-text-muted hover:text-accent-cyan transition-colors whitespace-nowrap font-mono"
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </Container>
        </section>

        {/* Section 1: Pourquoi NEO */}
        <section id="pourquoi-neo" className="py-20 md:py-28 bg-cyber-deep">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="font-mono text-accent-cyan text-sm mb-4 block">{s.section1.tag}</span>
                <h2 className="font-display text-section text-text-primary uppercase tracking-wide mb-6">
                  {s.section1.title} <span className="gradient-text">{s.section1.titleHighlight}</span>
                </h2>
                <p className="text-text-secondary mb-8">
                  {s.section1.subtitle}
                </p>
              </div>

              <div className="space-y-4">
                {s.section1.items.map((item, index) => (
                  <div key={index} className="p-4 bg-cyber-surface border border-cyber-border hover:border-accent-cyan/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-accent-cyan text-sm shrink-0">{String(index + 1).padStart(2, '0')}</span>
                      <div>
                        <h3 className="font-display text-lg text-text-primary uppercase mb-1">{item.title}</h3>
                        <p className="text-text-muted text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Section 2: Cours existants */}
        <section id="cours-existants" className="py-20 md:py-28 bg-cyber-surface">
          <Container>
            <div id="former-equipes" className="max-w-4xl mx-auto text-center">
              <span className="font-mono text-accent-cyan text-sm mb-4 block">{s.section2.tag}</span>
              <h2 className="font-display text-section text-text-primary uppercase tracking-wide mb-6">
                {s.section2.title} <span className="gradient-text">{s.section2.titleHighlight}</span>
              </h2>
              <p className="text-text-secondary mb-8">
                {s.section2.subtitle}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
                {s.section2.items.map((item, index) => (
                  <div key={index} className="p-6 bg-cyber-deep border border-cyber-border">
                    <h3 className="font-display text-lg text-text-primary uppercase mb-2">{item.title}</h3>
                    <p className="text-text-muted text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <Button variant="secondary" href={`/${params.locale}/formations`}>
                {s.section2.cta} &rarr;
              </Button>
            </div>
          </Container>
        </section>

        {/* Section 3: Création sur mesure */}
        <section id="creation-cours" className="py-20 md:py-28 bg-cyber-deep">
          <Container>
            <div id="ecoles" className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <span className="font-mono text-accent-cyan text-sm mb-4 block">{s.section3.tag}</span>
                <h2 className="font-display text-section text-text-primary uppercase tracking-wide mb-6">
                  {s.section3.title} <span className="gradient-text">{s.section3.titleHighlight}</span>
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  {s.section3.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-cyber-surface border border-cyber-border">
                  <span className="font-mono text-accent-green text-sm mb-4 block">{s.section3.optionA.tag}</span>
                  <h3 className="font-display text-xl text-text-primary uppercase mb-4">{s.section3.optionA.title}</h3>
                  <p className="text-text-secondary mb-6">
                    {s.section3.optionA.subtitle}
                  </p>
                  <ul className="space-y-2 text-text-muted text-sm">
                    {s.section3.optionA.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2"><span className="text-accent-green">&gt;</span> {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 bg-cyber-surface border border-cyber-border">
                  <span className="font-mono text-accent-warm text-sm mb-4 block">{s.section3.optionB.tag}</span>
                  <h3 className="font-display text-xl text-text-primary uppercase mb-4">{s.section3.optionB.title}</h3>
                  <p className="text-text-secondary mb-6">
                    {s.section3.optionB.subtitle}
                  </p>
                  <ul className="space-y-2 text-text-muted text-sm">
                    {s.section3.optionB.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2"><span className="text-accent-warm">&gt;</span> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-cyber-surface/50 border border-cyber-border text-center">
                <p className="text-text-secondary">
                  {s.section3.deliverables}
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 4: Plateforme */}
        <section id="plateforme" className="py-20 md:py-28 bg-cyber-surface">
          <Container>
            <div className="text-center mb-12">
              <span className="font-mono text-accent-cyan text-sm mb-4 block">{s.section4.tag}</span>
              <h2 className="font-display text-section text-text-primary uppercase tracking-wide mb-6">
                {s.section4.title} <span className="gradient-text">{s.section4.titleHighlight}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {s.section4.items.map((item, index) => (
                <div key={index} className="p-6 bg-cyber-deep border border-cyber-border hover:border-accent-cyan/30 transition-colors">
                  <h3 className="font-display text-lg text-text-primary uppercase mb-2">{item.title}</h3>
                  <p className="text-text-muted text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Section 5: Certifications */}
        <section id="certifications" className="py-20 md:py-28 bg-cyber-deep">
          <Container>
            <div className="text-center mb-12">
              <span className="font-mono text-accent-cyan text-sm mb-4 block">{s.section5.tag}</span>
              <h2 className="font-display text-section text-text-primary uppercase tracking-wide mb-6">
                {s.section5.title} <span className="gradient-text">{s.section5.titleHighlight}</span>
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto mb-10">
                {s.section5.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {PARTNERS.map((partner) => (
                <div
                  key={partner.slug}
                  className="h-20 flex items-center justify-center px-4 border border-cyber-border bg-cyber-surface hover:border-accent-cyan/30 transition-colors"
                >
                  <span className="font-mono text-text-muted text-sm text-center">{partner.name}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Section 6: Évaluation */}
        <section id="evaluation" className="py-20 md:py-28 bg-cyber-surface">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="font-mono text-accent-cyan text-sm mb-4 block">{s.section6.tag}</span>
                <h2 className="font-display text-section text-text-primary uppercase tracking-wide mb-6">
                  {s.section6.title} <span className="gradient-text">{s.section6.titleHighlight}</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {s.section6.items.map((item, index) => (
                  <div key={index} className="p-6 bg-cyber-deep border border-cyber-border">
                    <h3 className="font-display text-lg text-text-primary uppercase mb-2">{item.title}</h3>
                    <p className="text-text-muted text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Section 7: Espace dédié */}
        <section id="espace-dedie" className="py-20 md:py-28 bg-cyber-deep">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <span className="font-mono text-accent-cyan text-sm mb-4 block">{s.section7.tag}</span>
              <h2 className="font-display text-section text-text-primary uppercase tracking-wide mb-6">
                {s.section7.title} <span className="gradient-text">{s.section7.titleHighlight}</span>
              </h2>
              <p className="text-text-secondary mb-10">
                {s.section7.subtitle}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left mb-10">
                {s.section7.items.map((item, index) => (
                  <div key={index} className="p-4 bg-cyber-surface border border-cyber-border">
                    <span className="font-mono text-accent-green text-sm">&gt;</span>
                    <span className="text-text-primary text-sm ml-2">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-text-muted text-sm font-mono">
                <span className="text-accent-warm">{params.locale === 'fr' ? 'À venir' : 'Coming soon'}:</span> {s.section7.coming}
              </p>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28 bg-cyber-surface border-t border-cyber-border">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-section text-text-primary uppercase tracking-wide mb-6">
                {s.finalCta.title} <span className="gradient-text">{s.finalCta.titleHighlight}</span>
              </h2>
              <p className="text-text-secondary mb-10">
                {s.finalCta.subtitle}
              </p>
              <Button variant="primary" size="lg" href={EXTERNAL_LINKS.typeform}>
                <span className="mr-2">&gt;</span>
                {s.finalCta.cta}
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer locale={params.locale} dict={dict} />
    </>
  );
}
