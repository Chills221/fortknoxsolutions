import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageBanner from '@/components/PageBanner';
import ContactFormComponent from '@/components/ContactFormComponent';


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
