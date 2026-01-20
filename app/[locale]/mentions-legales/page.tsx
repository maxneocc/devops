import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionaries';
import { type Locale } from '@/lib/i18n';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';

interface PageProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: params.locale === 'fr' ? 'Mentions légales' : 'Legal Notice',
    description: params.locale === 'fr'
      ? 'Mentions légales de NEO Cyber Camp - Informations légales, éditeur, hébergement.'
      : 'NEO Cyber Camp Legal Notice - Legal information, publisher, hosting.',
  };
}

export default async function MentionsLegalesPage({ params }: PageProps) {
  const dict = await getDictionary(params.locale);
  const l = dict.legal.mentions;

  return (
    <>
      <Navbar locale={params.locale} dict={dict} />
      <main className="pt-20">
        <section className="py-20 md:py-28 bg-cyber-deep relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />

          <Container className="relative">
            <Breadcrumb
              items={[{ label: l.breadcrumb }]}
              homeLabel={dict.common.home}
              locale={params.locale}
            />

            <div className="mt-8 max-w-3xl">
              <h1 className="font-display text-hero text-text-primary uppercase tracking-wide mb-12">
                {l.title} <span className="gradient-text">{l.titleHighlight}</span>
              </h1>

              <div className="space-y-12">
                {Object.entries(l.sections).map(([key, section]) => (
                  <div key={key} className="p-6 bg-cyber-surface border border-cyber-border">
                    <h2 className="font-display text-xl text-text-primary uppercase mb-4">
                      {section.title}
                    </h2>
                    <div className="text-text-secondary whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer locale={params.locale} dict={dict} />
    </>
  );
}
