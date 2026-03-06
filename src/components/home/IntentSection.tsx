import { Reveal } from "@/components/shared/Reveal";
import { TextReveal } from "@/components/shared/TextReveal";
import { GlowText } from "@/components/shared/GlowText";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const flowSteps = [
  { label: "Intent", color: "bg-violet" },
  { label: "System", color: "bg-gradient-to-r from-violet to-cyan" },
  { label: "Execution", color: "bg-gradient-to-r from-cyan to-cyan" },
  { label: "Output", color: "bg-cyan" },
];

export function IntentSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet/[0.04] blur-[120px] pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-widest text-violet mb-4 block">
                What OriMind Builds
              </span>
              <TextReveal
                text="From Intent to Outcome"
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <GlowText
                keywords={["execute", "unified execution"]}
                className="text-lg text-muted-foreground leading-relaxed mb-4"
              >
                Traditional AI tools assist with fragments of work. OriMind builds systems that execute.
              </GlowText>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Instead of switching between tools for design, code, content, and deployment, our systems coordinate these capabilities into unified execution flows.
              </p>
              <p className="text-foreground font-medium">
                Ideas should not stall in planning. They should move directly into production.
              </p>
            </Reveal>
          </div>

          {/* Animated flow diagram */}
          <Reveal delay={0.2}>
            <div className="relative">
              <div className="glass rounded-2xl p-8 md:p-12">
                <div className="flex flex-col gap-4">
                  {flowSteps.map((step, i) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4"
                    >
                      <div className={`w-3 h-3 rounded-full ${step.color} shrink-0`} />
                      <div className="flex-1 h-px bg-white/10" />
                      <span className="text-sm font-mono font-medium text-foreground">{step.label}</span>
                      {i < flowSteps.length - 1 && (
                        <ArrowRight size={14} className="text-muted-foreground/30" />
                      )}
                    </motion.div>
                  ))}
                </div>
                {/* Connecting vertical pulse */}
                <motion.div
                  style={{ x }}
                  className="absolute top-8 right-8 w-20 h-20 rounded-full bg-cyan/10 blur-2xl"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
