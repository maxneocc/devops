import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionaries';
import { type Locale } from '@/lib/i18n';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { TRAINING_PREVIEW } from '@/lib/constants';

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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {TRAINING_PREVIEW.map((training) => (
                  <div
                    key={training.slug}
                    className="group relative bg-cyber-surface border border-cyber-border hover:border-accent-cyan/50 transition-all duration-300"
                  >
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-cyan to-accent-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

                    <div className="p-6">
                      {/* Partner badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs text-accent-cyan uppercase">
                          {training.partner}
                        </span>
                        <span className="font-mono text-xs text-text-muted bg-cyber-deep px-2 py-1">
                          {training.level}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl text-text-primary uppercase tracking-wide mb-2 group-hover:text-accent-cyan transition-colors">
                        {training.title}
                      </h3>

                      {/* Certification badge */}
                      <p className="text-text-secondary text-sm mb-4">
                        {dict.training.certification} {training.certification}
                      </p>

                      {/* Info row */}
                      <div className="flex items-center justify-between pt-4 border-t border-cyber-border">
                        <span className="font-mono text-xs text-text-muted">
                          {training.duration}
                        </span>
                        <span className="font-display text-lg text-accent-green">
                          {training.price.toLocaleString(params.locale === 'fr' ? 'fr-FR' : 'en-US')} &euro;
                        </span>
                      </div>
                    </div>
                  </div>
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
