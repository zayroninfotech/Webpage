import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { PromoSection } from "@/components/home/PromoSection";
import { CTASection } from "@/components/home/CTASection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { CapabilityStrip } from "@/components/home/CapabilityStrip";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroCarousel />
        <CapabilityStrip />
        <StatsSection />
        <ServicesPreview />
        <PromoSection />
        <ClientsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
