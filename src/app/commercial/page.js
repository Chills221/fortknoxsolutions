import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageBanner from '@/components/PageBanner';
import CommertialSecurityComponent from '@/components/CommertialSecurityComponent';
import { seoGenerateMetadata } from "@/components/Seo";
import CommercialContactForm from '@/components/CommercialContactForm';
import HomeContactForm from '@/components/HomeContactForm';

export async function generateMetadata() {
  return seoGenerateMetadata({
    title: 'Home Security Services | Window Film, Door Reinforcements & Cameras',
    description: 'Discover our complete range of home security solutions. From shatter-resistant window film to reinforced doors and 24/7 security cameras, Fort Knox Solutions makes your home safer.',
    url: `https://fortknoxsolutions.ca/commercial`,
  });
}

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* <PageBanner title="Commercial Services" />        */}
        <CommertialSecurityComponent />
        <CommercialContactForm />
        <HomeContactForm />
      </main>
      <Footer />
    </div>
  );
}
