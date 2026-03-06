import { Reveal } from "@/components/shared/Reveal";
import { TextReveal } from "@/components/shared/TextReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useReveal } from "@/hooks/use-reveal";

export function FinalCta() {
  const { ref, isInView } = useReveal(0.2);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Animated gradient bg */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-violet/[0.08] via-cyan/[0.04] to-violet/[0.08] rounded-full blur-[150px] animate-gradient-shift bg-[length:200%_200%]" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet/30 to-transparent" />

      <div ref={ref} className="container-narrow relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Reveal>
            <TextReveal
              text="You imagine. It executes."
              className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
              Join the next generation of execution systems.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gradient" size="xl" asChild>
                <Link to="/product">
                  Explore infinall.ai <ArrowRight size={16} />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/contact">Contact OriMind</Link>
              </Button>
            </div>
          </Reveal>
        </motion.div>
      </div>
    </section>
  );
}
