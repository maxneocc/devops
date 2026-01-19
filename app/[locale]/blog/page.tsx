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
    title: 'Blog',
    description: params.locale === 'fr'
      ? 'Blog NEO Cyber Camp : actualités cybersécurité, guides, tutoriels et conseils carrière.'
      : 'NEO Cyber Camp Blog: cybersecurity news, guides, tutorials and career advice.',
  };
}

export default async function BlogPage({ params }: PageProps) {
  const dict = await getDictionary(params.locale);
  const b = dict.blog;

  return (
    <>
      <Navbar locale={params.locale} dict={dict} />
      <main className="pt-20">
        <section className="py-20 md:py-28 bg-cyber-deep relative overflow-hidden min-h-[70vh]">
          <div className="absolute inset-0 bg-grid opacity-30" />

          <Container className="relative">
            <Breadcrumb
              items={[{ label: b.breadcrumb }]}
              homeLabel={dict.common.home}
              locale={params.locale}
            />

            <div className="mt-8 max-w-3xl mx-auto text-center">
              <span className="font-mono text-accent-cyan text-sm mb-4 block">{b.tag}</span>
              <h1 className="font-display text-hero text-text-primary uppercase tracking-wide mb-6">
                {b.title} <span className="gradient-text">{b.titleHighlight}</span>
              </h1>
              <p className="text-text-secondary text-lg mb-12">
                {b.subtitle}
              </p>

              {/* Coming soon */}
              <div className="p-8 bg-cyber-surface border border-cyber-border">
                <span className="font-mono text-accent-warm text-sm mb-4 block">{b.comingSoon.tag}</span>
                <h2 className="font-display text-2xl text-text-primary uppercase mb-4">
                  {b.comingSoon.title}
                </h2>
                <p className="text-text-muted">
                  {b.comingSoon.text}
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
