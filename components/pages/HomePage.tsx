import { type Locale } from '@/lib/i18n';
import Hero from '@/components/sections/Hero';
import Partners from '@/components/sections/Partners';
import Offerings from '@/components/sections/Offerings';
import WhyNeo from '@/components/sections/WhyNeo';
import TrainingPreview from '@/components/sections/TrainingPreview';
import B2BTeaser from '@/components/sections/B2BTeaser';
import FinalCTA from '@/components/sections/FinalCTA';

interface HomePageProps {
  locale: Locale;
  dict: {
    hero: {
      tagline: string;
      title1: string;
      title2: string;
      title3: string;
      subtitle: string;
      subtitle2: string;
      cta_individual: string;
      cta_organization: string;
      stats: {
        labs: string;
        courses: string;
        certifications: string;
      };
      scroll: string;
    };
    partners: {
      tag: string;
      title: string;
    };
    offerings: {
      tag: string;
      title: string;
      titleHighlight: string;
      title2: string;
      items: {
        formations: { title: string; description: string; features: string[] };
        labs: { title: string; description: string; features: string[] };
        certifications: { title: string; description: string; features: string[] };
      };
    };
    whyNeo: {
      tag: string;
      title: string;
      titleHighlight: string;
      description: string;
      cta: string;
      items: Array<{ title: string; description: string }>;
    };
    training: {
      tag: string;
      title: string;
      titleHighlight: string;
      subtitle: string;
      cta: string;
      certification: string;
    };
    b2b: {
      tag: string;
      title1: string;
      titleHighlight1: string;
      title2: string;
      titleHighlight2: string;
      items: Array<{ title: string; description: string }>;
      cta: string;
    };
    finalCta: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      cta1: string;
      cta2: string;
      trust: {
        eu: string;
        gdpr: string;
        partners: string;
      };
    };
  };
}

export default function HomePage({ locale, dict }: HomePageProps) {
  return (
    <>
      <Hero locale={locale} dict={dict.hero} />
      <Partners dict={dict.partners} />
      <Offerings dict={dict.offerings} />
      <WhyNeo locale={locale} dict={dict.whyNeo} />
      <TrainingPreview locale={locale} dict={dict.training} />
      <B2BTeaser locale={locale} dict={dict.b2b} />
      <FinalCTA locale={locale} dict={dict.finalCta} />
    </>
  );
}
