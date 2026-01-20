import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionaries';
import { type Locale } from '@/lib/i18n';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { CONTACT_INFO, EXTERNAL_LINKS } from '@/lib/constants';

interface PageProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: params.locale === 'fr' ? 'Contact' : 'Contact',
    description: params.locale === 'fr'
      ? 'Contactez NEO Cyber Camp. Une question sur nos formations ? Un projet B2B ? Nous sommes là pour vous aider.'
      : 'Contact NEO Cyber Camp. Have a question about our courses? A B2B project? We\'re here to help.',
  };
}

export default async function ContactPage({ params }: PageProps) {
  const dict = await getDictionary(params.locale);
  const c = dict.contact;

  return (
    <>
      <Navbar locale={params.locale} dict={dict} />
      <main className="pt-20">
        <section className="py-20 md:py-28 bg-cyber-deep relative overflow-hidden min-h-[80vh]">
          <div className="absolute inset-0 bg-grid opacity-30" />

          <Container className="relative">
            <Breadcrumb
              items={[{ label: c.breadcrumb }]}
              homeLabel={dict.common.home}
              locale={params.locale}
            />

            <div className="mt-8 max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="font-mono text-accent-cyan text-sm mb-4 block">{c.tag}</span>
                <h1 className="font-display text-hero text-text-primary uppercase tracking-wide mb-6">
                  {c.title1} <span className="gradient-text">{c.titleHighlight1}</span> ?
                  <br />
                  {c.title2} <span className="gradient-text">{c.titleHighlight2}</span> ?
                </h1>
                <p className="text-text-secondary text-lg max-w-xl mx-auto">
                  {c.subtitle}
                </p>
              </div>

              {/* Typeform CTA */}
              <div className="bg-cyber-surface border border-cyber-border p-8 md:p-12 text-center mb-12">
                <h2 className="font-display text-2xl text-text-primary uppercase mb-4">
                  {c.formTitle}
                </h2>
                <p className="text-text-secondary mb-8">
                  {c.formSubtitle}
                </p>
                <a
                  href={EXTERNAL_LINKS.typeform}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-accent-cyan text-cyber-deep font-mono uppercase tracking-wider hover:shadow-glow-cyan transition-shadow"
                >
                  <span className="mr-2">&gt;</span>
                  {c.formCta}
                </a>
              </div>

              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Email */}
                <div className="p-6 bg-cyber-surface border border-cyber-border text-center">
                  <span className="font-mono text-accent-cyan text-sm mb-2 block">{c.email}</span>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-text-primary hover:text-accent-cyan transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>

                {/* Address */}
                <div className="p-6 bg-cyber-surface border border-cyber-border text-center">
                  <span className="font-mono text-accent-cyan text-sm mb-2 block">{c.address}</span>
                  <p className="text-text-primary">{CONTACT_INFO.address}</p>
                </div>

                {/* Social */}
                <div className="p-6 bg-cyber-surface border border-cyber-border text-center">
                  <span className="font-mono text-accent-cyan text-sm mb-2 block">{c.social}</span>
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href={CONTACT_INFO.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent-cyan transition-colors font-mono"
                    >
                      LinkedIn
                    </a>
                    <span className="text-text-muted/50">|</span>
                    <a
                      href={CONTACT_INFO.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent-cyan transition-colors font-mono"
                    >
                      X
                    </a>
                    <span className="text-text-muted/50">|</span>
                    <a
                      href={CONTACT_INFO.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent-cyan transition-colors font-mono"
                    >
                      YouTube
                    </a>
                  </div>
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
