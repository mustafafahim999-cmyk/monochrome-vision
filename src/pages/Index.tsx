import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { GlobalPresence } from "@/components/GlobalPresence";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <About />
      <GlobalPresence />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
