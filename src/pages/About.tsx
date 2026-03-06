import { Reveal } from "@/components/shared/Reveal";
import { TextReveal } from "@/components/shared/TextReveal";
import { GlowText } from "@/components/shared/GlowText";
import { GradientOrbs } from "@/components/shared/GradientOrbs";
import { ParallaxImage } from "@/components/shared/ParallaxImage";
import { StaggerReveal } from "@/components/shared/StaggerReveal";
import { Target, Users, Zap, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useReveal } from "@/hooks/use-reveal";

const principles = [
  { icon: Target, title: "Build for outcomes", desc: "Every feature is measured by the result it produces, not the process it enables." },
  { icon: Users, title: "Humans set direction", desc: "AI executes. Humans decide what matters, what ships, and what gets refined." },
  { icon: Zap, title: "Automation without chaos", desc: "Structured orchestration replaces fragile automation chains and brittle integrations." },
  { icon: BookOpen, title: "Systems that learn", desc: "Every execution makes the next one smarter. Context compounds across projects and sessions." },
];

const timeline = [
  { stage: "Spark", year: "2024", desc: "The insight that AI tools create more work instead of less. The gap between intelligence and execution becomes clear." },
  { stage: "Prototype", year: "2025", desc: "Multi-agent orchestration proves that end-to-end execution is achievable. First workflows ship complete deliverables." },
  { stage: "Platform", year: "2026", desc: "OriMind launches as a unified execution ecosystem. One command, infinite capability." },
];

export default function About() {
  const { ref, isInView } = useReveal(0.1);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <GradientOrbs />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 container-narrow px-6 py-28 text-center">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-widest text-cyan mb-4 block">About</span>
            <TextReveal
              text="Why OriMind Exists"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
            />
            <GlowText
              keywords={["execution engine", "intent into outcome"]}
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              The world doesn't need another AI tool. It needs an execution engine—a system that transforms intent into outcome without the friction of fragmented workflows.
            </GlowText>
          </Reveal>
        </div>
      </section>

      {/* Parallax image break */}
      <div className="relative h-[40vh] overflow-hidden">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80"
          alt="AI neural visualization"
          speed={0.2}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <div className="glass rounded-2xl p-8 h-full hover:border-violet/20 transition-all">
                <span className="text-xs font-medium uppercase tracking-widest text-violet mb-3 block">Mission</span>
                <p className="text-lg text-foreground leading-relaxed">
                  Remove friction between ideas and outcomes through autonomous end-to-end execution.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass rounded-2xl p-8 h-full hover:border-cyan/20 transition-all">
                <span className="text-xs font-medium uppercase tracking-widest text-cyan mb-3 block">Vision</span>
                <p className="text-lg text-foreground leading-relaxed">
                  A unified ecosystem where intelligence, creativity, and execution converge.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding">
        <div className="container-wide">
          <Reveal>
            <TextReveal text="Principles" className="text-3xl md:text-5xl font-bold text-foreground text-center mb-16" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {principles.map((p, i) => (
              <StaggerReveal key={p.title} index={i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-6 h-full hover:border-violet/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-4 group-hover:border-violet/30 transition-all">
                    <p.icon size={22} className="text-violet group-hover:text-cyan transition-colors" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              </StaggerReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-narrow">
          <Reveal>
            <TextReveal text="Origin" className="text-3xl md:text-5xl font-bold text-foreground text-center mb-16" />
          </Reveal>
          <div ref={ref} className="relative">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet via-cyan to-transparent origin-top hidden md:block"
            />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <Reveal key={t.stage} delay={i * 0.15}>
                  <div className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                    <div className={`flex-1 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                      <span className="text-xs font-mono text-cyan">{t.year}</span>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{t.stage}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-violet to-cyan shrink-0 hidden md:block shadow-lg shadow-violet/20" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
