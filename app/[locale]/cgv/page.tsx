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
    title: params.locale === 'fr' ? 'Conditions Générales de Vente' : 'Terms of Sale',
    description: params.locale === 'fr'
      ? 'Conditions générales de vente de NEO Cyber Camp - Formations en cybersécurité.'
      : 'NEO Cyber Camp Terms of Sale - Cybersecurity training.',
  };
}

export default async function CGVPage({ params }: PageProps) {
  const dict = await getDictionary(params.locale);
  const l = dict.legal.cgv;

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
              <h1 className="font-display text-hero text-text-primary uppercase tracking-wide mb-6">
                {l.title} <span className="gradient-text">{l.titleHighlight}</span>
              </h1>

              <p className="text-accent-warm font-mono text-sm mb-12">{l.placeholder}</p>

              <div className="space-y-8">
                {Object.entries(l.sections).map(([key, section]) => (
                  <div key={key} className="p-6 bg-cyber-surface border border-cyber-border">
                    <h2 className="font-display text-xl text-text-primary uppercase mb-4">
                      {section.title}
                    </h2>
                    <p className="text-text-secondary">{section.content}</p>
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
