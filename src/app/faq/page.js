import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageBanner from '@/components/PageBanner';
import FAQComponent from '@/components/FAQComponent';


export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageBanner title="Frequently Asked Questions" />       
        <FAQComponent/>
      </main>
      <Footer />
    </div>
  );
}
