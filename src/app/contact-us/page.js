import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageBanner from '@/components/PageBanner';
import ContactFormComponent from '@/components/ContactFormComponent';
import { seoGenerateMetadata } from "@/components/Seo";
export async function generateMetadata() {
  return seoGenerateMetadata({
    title: 'Contact Fort Knox Solutions | Free Home Security Consultation Toronto',
    description: 'Ready to protect your home? Contact Fort Knox Solutions for a free security consultation. Serving Toronto & the GTA with security film, door reinforcement, and more.',
    url: `https://fortknoxsolutions.ca/contact-us`,
  });
}


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageBanner title="Contact Us" />       
        <ContactFormComponent/>
      </main>
      <Footer />
    </div>
  );
}
