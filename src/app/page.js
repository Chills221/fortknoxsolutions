import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { seoGenerateMetadata } from '@/components/Seo';
import Hero from '@/components/Hero';
import ProtectComponent from '@/components/ProtectComponent';
import ProcessSteps from '@/components/ProcessSteps';
import WhyChoose from '@/components/WhyChoose';
import EmbedVideo from '@/components/EmbedVideo';
import MainContent from '@/components/MainContent';

export async function generateMetadata() {
  return seoGenerateMetadata({
    title: 'Fort Knox Solutions | Security Film & Door Reinforcements for Homes in Toronto',
  description: 'Protect your home and family with Fort Knox Solutions. We specialize in security window film, door reinforcements, and home security upgrades across Toronto & the GTA. Free consultations available.',
    url: `https://fortknoxsolutions.ca/`,
  });
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero /> 
        <MainContent/>
        <WhyChoose/>
        <EmbedVideo/>
        <ProtectComponent/>
        <ProcessSteps/>
      </main>
      <Footer />
    </div>
  );
}
