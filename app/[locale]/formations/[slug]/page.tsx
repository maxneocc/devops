import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/lib/dictionaries';
import { type Locale } from '@/lib/i18n';
import { getFormationBySlug, getAllFormationSlugs, type Formation } from '@/lib/formations';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ProgramSection from '@/components/ui/ProgramSection';
import { EXTERNAL_LINKS } from '@/lib/constants';

interface PageProps {
  params: { locale: Locale; slug: string };
}

// Generate static params for all formations
export async function generateStaticParams() {
  const slugs = getAllFormationSlugs();
  const locales: Locale[] = ['fr', 'en'];

  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const formation = getFormationBySlug(params.slug);

  if (!formation) {
    return { title: 'Formation non trouvée' };
  }

  return {
    title: formation.title,
    description: formation.presentation.slice(0, 160),
  };
}

export default async function FormationDetailPage({ params }: PageProps) {
  const dict = await getDictionary(params.locale);
  const formation = getFormationBySlug(params.slug);

  if (!formation) {
    notFound();
  }

  const fd = dict.formationDetail;

  return (
    <>
      <Navbar locale={params.locale} dict={dict} />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-cyber-deep relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />

          <Container className="relative">
            <Breadcrumb
              items={[
                { label: dict.formations.breadcrumb, href: `/${params.locale}/formations` },
                { label: formation.title },
              ]}
              homeLabel={dict.common.home}
              locale={params.locale}
            />

            <div className="mt-8 grid lg:grid-cols-3 gap-12">
              {/* Left: Main info */}
              <div className="lg:col-span-2">
                {formation.partner && (
                  <span className="font-mono text-accent-cyan text-sm mb-4 block uppercase">
                    {formation.partner}
                  </span>
                )}
                <h1 className="font-display text-4xl md:text-5xl text-text-primary uppercase tracking-wide mb-4">
                  {formation.title}
                </h1>
                {formation.subtitle && (
                  <p className="text-text-secondary text-lg mb-6">{formation.subtitle}</p>
                )}

                {/* Key metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-cyber-surface border border-cyber-border p-4">
                    <span className="font-mono text-xs text-text-muted block mb-1">{fd.duration}</span>
                    <span className="font-display text-xl text-accent-cyan">{formation.duration}</span>
                  </div>
                  <div className="bg-cyber-surface border border-cyber-border p-4">
                    <span className="font-mono text-xs text-text-muted block mb-1">{fd.level}</span>
                    <span className="font-display text-xl text-text-primary">{formation.level}</span>
                  </div>
                  <div className="bg-cyber-surface border border-cyber-border p-4">
                    <span className="font-mono text-xs text-text-muted block mb-1">{fd.modality}</span>
                    <span className="font-mono text-sm text-text-primary">{formation.modality}</span>
                  </div>
                  {formation.certification && (
                    <div className="bg-cyber-surface border border-cyber-border p-4">
                      <span className="font-mono text-xs text-text-muted block mb-1">{fd.certification}</span>
                      <span className="font-display text-xl text-accent-green">{formation.certification}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Price card */}
              <div className="lg:col-span-1">
                <div className="bg-cyber-surface border border-accent-cyan/30 p-6 sticky top-24">
                  <div className="mb-6">
                    <span className="font-mono text-xs text-text-muted block mb-2">{fd.price}</span>
                    <span className="font-display text-3xl text-accent-green">{formation.price}</span>
                  </div>

                  <Link
                    href={`/${params.locale}/contact`}
                    className="block w-full py-3 px-6 bg-accent-cyan text-cyber-deep font-mono uppercase tracking-wider text-center hover:shadow-glow-cyan transition-shadow mb-4"
                  >
                    {fd.cta.contact}
                  </Link>

                  <a
                    href={EXTERNAL_LINKS.app}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-6 border border-accent-cyan text-accent-cyan font-mono uppercase tracking-wider text-center hover:bg-accent-cyan/10 transition-colors"
                  >
                    {fd.cta.demo}
                  </a>

                  {formation.certification && (
                    <p className="mt-4 text-xs text-text-muted text-center">
                      {fd.certificationIncluded}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Presentation */}
        <section className="py-16 bg-cyber-surface">
          <Container>
            <h2 className="font-display text-2xl text-text-primary uppercase tracking-wide mb-6">
              {fd.sections.presentation}
            </h2>
            <div className="prose prose-invert max-w-none">
              {formation.presentation.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-text-secondary mb-4">{paragraph}</p>
              ))}
            </div>
          </Container>
        </section>

        {/* Objectives */}
        <section className="py-16 bg-cyber-deep">
          <Container>
            <h2 className="font-display text-2xl text-text-primary uppercase tracking-wide mb-6">
              {fd.sections.objectives}
            </h2>
            <ul className="space-y-4">
              {formation.objectives.map((objective, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-accent-cyan/20 border border-accent-cyan flex items-center justify-center font-mono text-xs text-accent-cyan">
                    {i + 1}
                  </span>
                  <span className="text-text-secondary">{objective}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* Target Audience */}
        <section className="py-16 bg-cyber-surface">
          <Container>
            <h2 className="font-display text-2xl text-text-primary uppercase tracking-wide mb-6">
              {fd.sections.targetAudience}
            </h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {formation.targetAudience.map((audience, i) => (
                <li key={i} className="flex items-center gap-3 text-text-secondary">
                  <span className="w-2 h-2 bg-accent-green" />
                  {audience}
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* Program / Modules (if available) */}
        {formation.modules && formation.modules.length > 0 && (
          <section className="py-16 bg-cyber-deep">
            <Container>
              <ProgramSection
                modules={formation.modules}
                title={fd.sections.program}
                expandAllLabel={fd.program.expandAll}
                collapseAllLabel={fd.program.collapseAll}
                topicsLabel={fd.program.topics}
              />
            </Container>
          </section>
        )}

        {/* Pedagogy & Evaluation */}
        <section className="py-16 bg-cyber-surface">
          <Container>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Pedagogical Means */}
              <div>
                <h2 className="font-display text-2xl text-text-primary uppercase tracking-wide mb-6">
                  {fd.sections.pedagogy}
                </h2>
                <ul className="space-y-3">
                  {formation.pedagogicalMeans.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                      <span className="w-2 h-2 bg-accent-cyan mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Evaluation */}
              <div>
                <h2 className="font-display text-2xl text-text-primary uppercase tracking-wide mb-6">
                  {fd.sections.evaluation}
                </h2>
                <ul className="space-y-3">
                  {formation.evaluationMethods.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                      <span className="w-2 h-2 bg-accent-green mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Prerequisites & Equipment */}
        <section className="py-16 bg-cyber-deep">
          <Container>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-cyber-surface border border-cyber-border p-6">
                <h3 className="font-display text-lg text-text-primary uppercase tracking-wide mb-4">
                  {fd.sections.prerequisites}
                </h3>
                <p className="text-text-secondary text-sm">{formation.prerequisites}</p>
              </div>

              <div className="bg-cyber-surface border border-cyber-border p-6">
                <h3 className="font-display text-lg text-text-primary uppercase tracking-wide mb-4">
                  {fd.sections.equipment}
                </h3>
                <p className="text-text-secondary text-sm">{formation.equipment}</p>
              </div>

              <div className="bg-cyber-surface border border-cyber-border p-6">
                <h3 className="font-display text-lg text-text-primary uppercase tracking-wide mb-4">
                  {fd.sections.access}
                </h3>
                <p className="text-text-secondary text-sm">{formation.access}</p>
              </div>
            </div>
          </Container>
        </section>

        {/* Highlights */}
        <section className="py-16 bg-cyber-surface">
          <Container>
            <h2 className="font-display text-2xl text-text-primary uppercase tracking-wide mb-8">
              {fd.sections.highlights}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {formation.highlights.map((highlight, i) => (
                <div
                  key={i}
                  className="bg-cyber-deep border border-accent-cyan/30 p-6 relative group hover:border-accent-cyan transition-colors"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-cyan to-accent-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  <span className="font-mono text-4xl text-accent-cyan/30 block mb-2">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-text-primary">{highlight}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-cyber-deep relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <Container className="relative text-center">
            <h2 className="font-display text-3xl md:text-4xl text-text-primary uppercase tracking-wide mb-4">
              {fd.finalCta.title} <span className="gradient-text">{formation.title}</span>
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              {fd.finalCta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${params.locale}/contact`}
                className="px-8 py-4 bg-accent-cyan text-cyber-deep font-mono uppercase tracking-wider hover:shadow-glow-cyan transition-shadow"
              >
                {fd.cta.contact}
              </Link>
              <Link
                href={`/${params.locale}/formations`}
                className="px-8 py-4 border border-text-muted text-text-secondary font-mono uppercase tracking-wider hover:border-accent-cyan hover:text-accent-cyan transition-colors"
              >
                {fd.finalCta.backToList}
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer locale={params.locale} dict={dict} />
    </>
  );
}
