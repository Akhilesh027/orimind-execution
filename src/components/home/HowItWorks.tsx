import { motion } from "framer-motion";
import { useReveal } from "@/hooks/use-reveal";
import { Reveal } from "@/components/shared/Reveal";
import { StaggerReveal } from "@/components/shared/StaggerReveal";
import { GlowText } from "@/components/shared/GlowText";
import { MessageSquare, GitFork, Zap, Package } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Describe",
    desc: "Tell OriMind what you need in plain language. No templates. No configuration.",
    color: "from-violet to-violet/60",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80",
  },
  {
    icon: GitFork,
    step: "02",
    title: "Route",
    desc: "Your intent is parsed and distributed to specialized agents—design, code, content, deploy.",
    color: "from-violet/60 to-cyan/60",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
  },
  {
    icon: Zap,
    step: "03",
    title: "Execute",
    desc: "Agents work in parallel, sharing context and iterating until quality thresholds are met.",
    color: "from-cyan/60 to-cyan",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&q=80",
  },
  {
    icon: Package,
    step: "04",
    title: "Deliver",
    desc: "Production-ready output is packaged and deployed. Review, iterate, or ship instantly.",
    color: "from-cyan to-cyan/40",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
  },
];

export function HowItWorks() {
  const { ref, isInView } = useReveal(0.1);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-wide">
        <Reveal>
          <div className="text-center mb-20">
            <span className="text-xs font-medium uppercase tracking-widest text-violet mb-4 block">
              How It Works
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              From intent to deliverable in{" "}
              <span className="gradient-text">four steps</span>
            </h2>
            <GlowText
              keywords={["describe", "route", "execute", "deliver"]}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Just describe what you need. We route, execute, and deliver—all autonomously.
            </GlowText>
          </div>
        </Reveal>

        <div ref={ref} className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-gradient-to-r from-violet via-cyan/50 to-cyan origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, i) => (
              <StaggerReveal key={step.step} index={i}>
                <div className="glass rounded-2xl overflow-hidden relative group hover:bg-white/[0.06] transition-all duration-500 h-full">
                  {/* Step image */}
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-[hsl(var(--background)/.6)] to-transparent" />
                    <div
                      className={`absolute top-3 left-3 w-10 h-10 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10`}
                    >
                      <step.icon size={18} className="text-white" />
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="text-xs font-mono text-muted-foreground mb-2 block">
                      {step.step}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </StaggerReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
