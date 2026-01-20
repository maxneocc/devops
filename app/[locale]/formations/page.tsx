import type { Metadata } from 'next';
import Link from 'next/link';
import { getDictionary } from '@/lib/dictionaries';
import { type Locale } from '@/lib/i18n';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { FORMATIONS } from '@/lib/formations';

interface PageProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: params.locale === 'fr' ? 'Formations cybersécurité' : 'Cybersecurity Courses',
    description: params.locale === 'fr'
      ? 'Catalogue de formations en cybersécurité : CSNA Stormshield, SSCP ISC², LPIC Linux, Cloud Scaleway. Cours vidéo, labs pratiques, certifications.'
      : 'Cybersecurity training catalog: CSNA Stormshield, SSCP ISC², LPIC Linux, Cloud Scaleway. Video courses, hands-on labs, certifications.',
  };
}

export default async function FormationsPage({ params }: PageProps) {
  const dict = await getDictionary(params.locale);
  const f = dict.formations;

  return (
    <>
      <Navbar locale={params.locale} dict={dict} />
      <main className="pt-20">
        <section className="py-20 md:py-28 bg-cyber-deep relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />

          <Container className="relative">
            <Breadcrumb
              items={[{ label: f.breadcrumb }]}
              homeLabel={dict.common.home}
              locale={params.locale}
            />

            <div className="mt-8">
              <span className="font-mono text-accent-cyan text-sm mb-4 block">{f.tag}</span>
              <h1 className="font-display text-hero text-text-primary uppercase tracking-wide mb-6">
                {f.title} <span className="gradient-text">{f.titleHighlight}</span>
              </h1>
              <p className="text-text-secondary text-lg max-w-2xl mb-12">
                {f.subtitle}
              </p>

              {/* Training cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {FORMATIONS.map((formation) => (
                  <Link
                    key={formation.slug}
                    href={`/${params.locale}/formations/${formation.slug}`}
                    className="group relative bg-cyber-surface border border-cyber-border hover:border-accent-cyan/50 transition-all duration-300 block"
                  >
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-cyan to-accent-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

                    <div className="p-6">
                      {/* Category & Level badges */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs text-accent-cyan uppercase">
                          {formation.partner || formation.category}
                        </span>
                        <span className="font-mono text-xs text-text-muted bg-cyber-deep px-2 py-1">
                          {formation.level}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl text-text-primary uppercase tracking-wide mb-2 group-hover:text-accent-cyan transition-colors">
                        {formation.title}
                      </h3>

                      {/* Subtitle or certification */}
                      <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                        {formation.subtitle || (formation.certification && `${dict.training.certification} ${formation.certification}`)}
                      </p>

                      {/* Info row */}
                      <div className="flex items-center justify-between pt-4 border-t border-cyber-border">
                        <span className="font-mono text-xs text-text-muted">
                          {formation.duration}
                        </span>
                        <span className="font-display text-lg text-accent-green">
                          {formation.price}
                        </span>
                      </div>

                      {/* View details indicator */}
                      <div className="mt-4 flex items-center gap-2 text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="font-mono text-xs uppercase">{f.viewDetails}</span>
                        <span className="text-lg">→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Coming soon notice */}
              <div className="mt-12 p-6 bg-cyber-surface border border-cyber-border text-center">
                <p className="text-text-muted font-mono text-sm">
                  <span className="text-accent-warm">{f.comingSoon.tag}</span> {f.comingSoon.text}
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer locale={params.locale} dict={dict} />
    </>
  );
}
