import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { GradientOrbs } from "@/components/shared/GradientOrbs";
import { Link } from "react-router-dom";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
        <GradientOrbs />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        {/* Radial light */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-violet/[0.06] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container-narrow px-6 py-32 text-center">
        <motion.div {...fadeUp(0)}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-glow" />
            Research & Innovation Company
          </div>
        </motion.div>

        <motion.h1 {...fadeUp(0.1)} className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight mb-6 leading-[0.95]">
          <span className="text-foreground">Research, systems, and</span>
          <br />
          <span className="gradient-text">execution intelligence.</span>
        </motion.h1>

        <motion.p {...fadeUp(0.2)} className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
          OriMind is a research and innovation company building execution-first AI systems.
        </motion.p>
        <motion.p {...fadeUp(0.25)} className="text-sm md:text-base text-muted-foreground/80 max-w-xl mx-auto mb-12 leading-relaxed">
          Our flagship platform, <span className="text-foreground font-medium">infinall.ai</span>, transforms a single command into coordinated digital outcomes.
        </motion.p>

        <motion.div {...fadeUp(0.35)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="gradient" size="xl" asChild>
            <Link to="/product">
              Explore infinall.ai <ArrowRight size={16} />
            </Link>
          </Button>
          <Button variant="outline" size="xl" asChild>
            <Link to="/about">About OriMind</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
