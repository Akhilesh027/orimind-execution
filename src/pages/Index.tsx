import { Hero } from "@/components/home/Hero";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { IntentSection } from "@/components/home/IntentSection";
import { ProductPreview } from "@/components/home/ProductPreview";
import { FeatureCards } from "@/components/home/FeatureCards";
import { StickyScroll } from "@/components/home/StickyScroll";
import { SubAgents } from "@/components/home/SubAgents";
import { DifferentiationSection } from "@/components/home/DifferentiationSection";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCta } from "@/components/home/FinalCta";

const Index = () => (
  <>
    <Hero />
    <LogoMarquee />
    <IntentSection />
    <ProductPreview />
    <FeatureCards />
    <StickyScroll />
    <SubAgents />
    <DifferentiationSection />
    <Testimonials />
    <FinalCta />
  </>
);

export default Index;
