import { Hero } from "@/components/home/Hero";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { StatsSection } from "@/components/home/StatsSection";
import { DifferentiationSection } from "@/components/home/DifferentiationSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeatureCards } from "@/components/home/FeatureCards";
import { ShowcaseSection } from "@/components/home/ShowcaseSection";
import { ExecutionCanvas } from "@/components/home/ExecutionCanvas";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaSection } from "@/components/home/CtaSection";

const Index = () => (
  <>
    <Hero />
    <LogoMarquee />
    <StatsSection />
    <DifferentiationSection />
    <HowItWorks />
    <FeatureCards />
    <ShowcaseSection />
    <ExecutionCanvas />
    <Testimonials />
    <CtaSection />
  </>
);

export default Index;
