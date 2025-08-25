import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Hero from '@/components/Hero';
import AboutComponent from '@/components/AboutComponent';
import ServicesComponent from '@/components/ServicesComponent';
import FAQComponent from '@/components/FAQComponent';
import CtaComponent from '@/components/CtaComponent';
import TestimonialsComponent from '@/components/TestimonialsComponent';
import ServicesList from '@/components/ServicesList';
import ContactFormComponent from '@/components/ContactFormComponent';
import ProtectComponent from '@/components/ProtectComponent';
import CommertialSecurityComponent from '@/components/CommertialSecurityComponent';
import ProcessSteps from '@/components/ProcessSteps';


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero /> 
        <ServicesList/>       
        {/* <ServicesComponent />  */}
        <AboutComponent />
        <ProtectComponent/>
        <ProcessSteps/>
        <FAQComponent />
        {/* <TestimonialsComponent />  */}
        <CommertialSecurityComponent/>
       
        {/* <CtaComponent /> */}
        <ContactFormComponent/>
      </main>
      <Footer />
    </div>
  );
}
