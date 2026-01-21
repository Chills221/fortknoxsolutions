import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageBanner from '@/components/PageBanner';
import FAQComponent from '@/components/FAQComponent';
import { seoGenerateMetadata } from "@/components/Seo";
import HomeContactForm from '@/components/HomeContactForm';

export async function generateMetadata() {
  return seoGenerateMetadata({
    title: 'Fort Knox Solutions | Security Film & Door Reinforcements for Homes in Toronto',
    description: 'Protect your home and family with Fort Knox Solutions. We specialize in security window film, door reinforcements, and home security upgrades across Toronto & the GTA. Free consultations available.',
    url: `https://fortknoxsolutions.ca/faq`,
  });
}


export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageBanner title="Frequently Asked Questions" />
        <FAQComponent/>
        <HomeContactForm/>
      </main>
      <Footer />
    </div>
  );
}
