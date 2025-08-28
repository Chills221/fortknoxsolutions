import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageBanner from '@/components/PageBanner';
import ServicesList from '@/components/ServicesList';


export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageBanner title="Our Services" />       
        <ServicesList/>
      </main>
      <Footer />
    </div>
  );
}
