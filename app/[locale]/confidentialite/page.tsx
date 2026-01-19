import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionaries';
import { type Locale } from '@/lib/i18n';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { CONTACT_INFO } from '@/lib/constants';

interface PageProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: params.locale === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy',
    description: params.locale === 'fr'
      ? 'Politique de confidentialité de NEO Cyber Camp - Protection des données personnelles.'
      : 'NEO Cyber Camp Privacy Policy - Personal data protection.',
  };
}

export default async function ConfidentialitePage({ params }: PageProps) {
  const dict = await getDictionary(params.locale);
  const l = dict.legal.privacy;

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
              <h1 className="font-display text-hero text-text-primary uppercase tracking-wide mb-4">
                {l.title} <span className="gradient-text">{l.titleHighlight}</span>
              </h1>
              <p className="text-text-muted font-mono text-sm mb-12">{l.lastUpdate}</p>

              <div className="space-y-8">
                {/* Section 1: Collection */}
                <div className="p-6 bg-cyber-surface border border-cyber-border">
                  <h2 className="font-display text-xl text-text-primary uppercase mb-4">
                    {l.sections.collection.title}
                  </h2>
                  <p className="text-text-secondary">{l.sections.collection.content}</p>
                </div>

                {/* Section 2: Usage */}
                <div className="p-6 bg-cyber-surface border border-cyber-border">
                  <h2 className="font-display text-xl text-text-primary uppercase mb-4">
                    {l.sections.usage.title}
                  </h2>
                  <p className="text-text-secondary mb-4">{l.sections.usage.intro}</p>
                  <ul className="space-y-2 text-text-muted">
                    {l.sections.usage.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent-cyan">&gt;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 3: Protection */}
                <div className="p-6 bg-cyber-surface border border-cyber-border">
                  <h2 className="font-display text-xl text-text-primary uppercase mb-4">
                    {l.sections.protection.title}
                  </h2>
                  <p className="text-text-secondary">{l.sections.protection.content}</p>
                </div>

                {/* Section 4: Sharing */}
                <div className="p-6 bg-cyber-surface border border-cyber-border">
                  <h2 className="font-display text-xl text-text-primary uppercase mb-4">
                    {l.sections.sharing.title}
                  </h2>
                  <p className="text-text-secondary mb-4">{l.sections.sharing.intro}</p>
                  <ul className="space-y-2 text-text-muted">
                    {l.sections.sharing.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent-cyan">&gt;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 5: Rights */}
                <div className="p-6 bg-cyber-surface border border-cyber-border">
                  <h2 className="font-display text-xl text-text-primary uppercase mb-4">
                    {l.sections.rights.title}
                  </h2>
                  <p className="text-text-secondary mb-4">{l.sections.rights.content}</p>
                  <p className="text-text-secondary">
                    {l.sections.rights.contact}{' '}
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-accent-cyan hover:underline">
                      {CONTACT_INFO.email}
                    </a>
                  </p>
                </div>

                {/* Section 6: Cookies */}
                <div className="p-6 bg-cyber-surface border border-cyber-border">
                  <h2 className="font-display text-xl text-text-primary uppercase mb-4">
                    {l.sections.cookies.title}
                  </h2>
                  <p className="text-text-secondary">{l.sections.cookies.content}</p>
                </div>

                {/* Section 7: Contact */}
                <div className="p-6 bg-cyber-surface border border-cyber-border">
                  <h2 className="font-display text-xl text-text-primary uppercase mb-4">
                    {l.sections.contactTitle.title}
                  </h2>
                  <p className="text-text-secondary mb-4">{l.sections.contactTitle.content}</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-accent-cyan hover:underline font-mono">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer locale={params.locale} dict={dict} />
    </>
  );
}
