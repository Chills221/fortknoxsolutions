import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageBanner from '@/components/PageBanner';
import AboutComponent from '@/components/AboutComponent';
import { seoGenerateMetadata } from "@/components/Seo";
import HomeContactForm from '@/components/HomeContactForm';
export async function generateMetadata() {
  return seoGenerateMetadata({
    title: 'Fort Knox Solutions | Security Film & Door Reinforcements for Homes in Toronto',
    description: 'Protect your home and family with Fort Knox Solutions. We specialize in security window film, door reinforcements, and home security upgrades across Toronto & the GTA. Free consultations available.',
    url: `https://fortknoxsolutions.ca/about-us`,
  });
}
export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HomeContactForm/>      
        <PageBanner title="About Us" />       
        <AboutComponent/>
      </main>
      <Footer />
    </div>
  );
}
