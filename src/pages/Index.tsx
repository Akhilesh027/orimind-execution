import { Hero } from "@/components/home/Hero";
import { FeatureCards } from "@/components/home/FeatureCards";
import { DifferentiationSection } from "@/components/home/DifferentiationSection";
import { ExecutionCanvas } from "@/components/home/ExecutionCanvas";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaSection } from "@/components/home/CtaSection";

const Index = () => (
  <>
    <Hero />
    <DifferentiationSection />
    <FeatureCards />
    <ExecutionCanvas />
    <Testimonials />
    <CtaSection />
  </>
);

export default Index;
