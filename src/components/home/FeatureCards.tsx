import { Reveal } from "@/components/shared/Reveal";
import { StaggerReveal } from "@/components/shared/StaggerReveal";
import { TextReveal } from "@/components/shared/TextReveal";
import { GlowText } from "@/components/shared/GlowText";
import { Brain, GitBranch, Code, Palette, Database, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { useReveal } from "@/hooks/use-reveal";

const features = [
  {
    icon: Brain,
    title: "Smart Intent Routing",
    desc: "Natural language is parsed into actionable tasks and routed to the right agents automatically.",
    gradient: "from-violet/20 to-pink-500/10",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80",
  },
  {
    icon: GitBranch,
    title: "Multi-Agent Orchestration",
    desc: "Specialized agents collaborate in real-time—design, code, content, and deployment—without human hand-offs.",
    gradient: "from-cyan/20 to-blue-500/10",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
  },
  {
    icon: Code,
    title: "Vibe Coding Workflows",
    desc: "Describe what you want. The system writes, tests, and iterates production-quality code.",
    gradient: "from-violet/15 to-cyan/10",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
  },
  {
    icon: Palette,
    title: "Content Studio",
    desc: "Generate brand-consistent copy, visuals, and campaigns from a single brief.",
    gradient: "from-pink-500/15 to-violet/10",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80",
  },
  {
    icon: Database,
    title: "Persistent Memory",
    desc: "Agents remember context across sessions—your brand, preferences, and prior work inform every decision.",
    gradient: "from-cyan/15 to-emerald-500/10",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80",
  },
  {
    icon: Monitor,
    title: "Real-Time Console",
    desc: "Watch execution happen live. Monitor agent activity, review outputs, and intervene when needed.",
    gradient: "from-amber-500/15 to-violet/10",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
  },
];

export function FeatureCards() {
  return (
    <section className="section-padding relative">
      <div className="container-wide">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-widest text-cyan mb-4 block">
              Product Preview
            </span>
            <TextReveal
              text="infinall.ai — The Execution Engine"
              className="text-3xl md:text-5xl font-bold text-foreground mb-4"
            />
            <GlowText
              keywords={["specialized agents", "production-ready"]}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              One command routes intent to specialized agents and produces production-ready deliverables.
            </GlowText>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <StaggerReveal key={f.title} index={i}>
              <FeatureCard feature={f} />
            </StaggerReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: (typeof features)[number] }) {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={`glass rounded-2xl overflow-hidden h-full group hover:border-violet/20 transition-all duration-300 relative`}
    >
      {/* Mini image strip */}
      <div className="relative h-28 overflow-hidden">
        <img
          src={feature.image}
          alt={feature.title}
          loading="lazy"
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-[hsl(var(--background)/.7)] to-transparent`} />
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-violet/10 blur-3xl" />
      </div>

      <div className="relative z-10 p-6">
        <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-4 group-hover:border-violet/30 group-hover:scale-110 transition-all duration-300">
          <feature.icon
            size={22}
            className="text-violet group-hover:text-cyan transition-colors duration-300"
          />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
      </div>
    </motion.div>
  );
}
