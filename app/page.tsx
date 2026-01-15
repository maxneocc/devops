import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TrustBadges from '@/components/sections/TrustBadges';
import Features from '@/components/sections/Features';
import VMLabs from '@/components/sections/VMLabs';
import VideoCourses from '@/components/sections/VideoCourses';
import Mentorship from '@/components/sections/Mentorship';
import JobStats from '@/components/sections/JobStats';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <Features />
        <VMLabs />
        <VideoCourses />
        <Mentorship />
        <JobStats />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
