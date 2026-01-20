import { type Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomePage from '@/components/pages/HomePage';

// Force static generation for optimal performance
export const dynamic = 'force-static';
export const revalidate = false;

interface PageProps {
  params: { locale: Locale };
}

export default async function Home({ params }: PageProps) {
  const dict = await getDictionary(params.locale);

  return (
    <>
      <Navbar locale={params.locale} dict={dict} />
      <main>
        <HomePage locale={params.locale} dict={dict} />
      </main>
      <Footer locale={params.locale} dict={dict} />
    </>
  );
}
