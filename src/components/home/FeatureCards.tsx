import { Reveal } from "@/components/shared/Reveal";
import { Brain, GitBranch, Code, Palette, Database, Monitor } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart Intent Routing",
    desc: "Natural language is parsed into actionable tasks and routed to the right agents automatically.",
  },
  {
    icon: GitBranch,
    title: "Multi-Agent Orchestration",
    desc: "Specialized agents collaborate in real-time—design, code, content, and deployment—without human hand-offs.",
  },
  {
    icon: Code,
    title: "Vibe Coding Workflows",
    desc: "Describe what you want. The system writes, tests, and iterates production-quality code.",
  },
  {
    icon: Palette,
    title: "Content Studio",
    desc: "Generate brand-consistent copy, visuals, and campaigns from a single brief.",
  },
  {
    icon: Database,
    title: "Persistent Memory",
    desc: "Agents remember context across sessions—your brand, preferences, and prior work inform every decision.",
  },
  {
    icon: Monitor,
    title: "Real-Time Console",
    desc: "Watch execution happen live. Monitor agent activity, review outputs, and intervene when needed.",
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
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              infinall.ai — <span className="text-muted-foreground">The Execution Engine</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              One command routes intent to specialized agents and produces production-ready deliverables.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 h-full group hover:border-violet/20 hover:bg-white/[0.06] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet/20 to-cyan/20 flex items-center justify-center mb-4 group-hover:from-violet/30 group-hover:to-cyan/30 transition-all">
                  <f.icon size={20} className="text-violet group-hover:text-cyan transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
