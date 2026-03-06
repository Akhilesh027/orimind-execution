import { Reveal } from "@/components/shared/Reveal";
import { StaggerReveal } from "@/components/shared/StaggerReveal";
import { TextReveal } from "@/components/shared/TextReveal";
import { GlowText } from "@/components/shared/GlowText";
import { Brain, GitBranch, Code, Palette, Database, Monitor } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "Smart Intent Routing",
    desc: "Transforms natural language into structured execution plans routed to the right agents.",
  },
  {
    icon: GitBranch,
    title: "Multi-Agent Orchestration",
    desc: "Coordinates design, development, content, and deployment agents without human hand-offs.",
  },
  {
    icon: Code,
    title: "Vibe Coding Workflows",
    desc: "Generate production-ready codebases directly from prompts. Test and iterate automatically.",
  },
  {
    icon: Palette,
    title: "Content Studio",
    desc: "Create social campaigns, product content, and documentation from a single brief.",
  },
  {
    icon: Database,
    title: "Persistent Memory",
    desc: "Context-aware systems that learn from previous interactions across projects.",
  },
  {
    icon: Monitor,
    title: "Execution Console",
    desc: "A real-time interface showing agent activity, system progress, and deliverable status.",
  },
];

export function FeatureCards() {
  return (
    <section className="section-padding relative">
      <div className="container-wide">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-widest text-cyan mb-4 block">
              Feature Grid
            </span>
            <TextReveal
              text="Built for execution"
              className="text-3xl md:text-5xl font-bold text-foreground mb-4"
            />
            <GlowText
              keywords={["specialized agents", "production-ready"]}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Six core capabilities that power specialized agents into production-ready output.
            </GlowText>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <StaggerReveal key={f.title} index={i}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="glass rounded-2xl p-6 h-full group hover:border-violet/20 transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-violet/10 blur-3xl" />
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-4 group-hover:border-violet/30 group-hover:scale-110 transition-all duration-300">
                    <f.icon
                      size={22}
                      className="text-violet group-hover:text-cyan transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            </StaggerReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
