import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionaries';
import { type Locale } from '@/lib/i18n';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Button from '@/components/ui/Button';

interface PageProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: params.locale === 'fr' ? 'Plateforme' : 'Platform',
    description: params.locale === 'fr'
      ? 'Découvrez la plateforme NEO Cyber Camp : cours vidéo HD, labs virtuels à la demande, correction automatique, environnements isolés.'
      : 'Discover the NEO Cyber Camp platform: HD video courses, on-demand virtual labs, auto-grading, isolated environments.',
  };
}

export default async function PlateformePage({ params }: PageProps) {
  const dict = await getDictionary(params.locale);
  const p = dict.platform;

  return (
    <>
      <Navbar locale={params.locale} dict={dict} />
      <main className="pt-20">
        <section className="py-20 md:py-28 bg-cyber-deep relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />

          <Container className="relative">
            <Breadcrumb
              items={[{ label: p.breadcrumb }]}
              homeLabel={dict.common.home}
              locale={params.locale}
            />

            <div className="mt-8 max-w-4xl mx-auto text-center">
              <span className="font-mono text-accent-cyan text-sm mb-4 block">{p.tag}</span>
              <h1 className="font-display text-hero text-text-primary uppercase tracking-wide mb-6">
                {p.title}{' '}
                <span className="gradient-text">{p.titleHighlight}</span>{' '}
                {p.title2}
              </h1>
              <p className="text-text-secondary text-lg max-w-xl mx-auto mb-12">
                {p.subtitle}
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
                {p.features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-6 bg-cyber-surface border border-cyber-border hover:border-accent-cyan/30 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-accent-cyan text-sm shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-display text-lg text-text-primary uppercase mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-text-muted text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="primary" size="lg" href={`/${params.locale}/formations`}>
                  <span className="mr-2">&gt;</span>
                  {p.cta1}
                </Button>
                <Button variant="secondary" size="lg" href={`/${params.locale}/contact`}>
                  {p.cta2}
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer locale={params.locale} dict={dict} />
    </>
  );
}
