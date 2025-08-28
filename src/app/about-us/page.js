import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageBanner from '@/components/PageBanner';
import AboutComponent from '@/components/AboutComponent';


export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageBanner title="About Us" />       
        <AboutComponent/>
      </main>
      <Footer />
    </div>
  );
}
