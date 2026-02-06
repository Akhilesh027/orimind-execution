import { Reveal } from "@/components/shared/Reveal";
import { GradientOrbs } from "@/components/shared/GradientOrbs";
import { Target, Users, Zap, BookOpen } from "lucide-react";

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
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <GradientOrbs />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative z-10 container-narrow px-6 py-20 text-center">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-widest text-cyan mb-4 block">About</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Why OriMind Exists</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The world doesn't need another AI tool. It needs an execution engine—a system that transforms intent into outcome without the friction of fragmented workflows.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <div className="glass rounded-2xl p-8">
                <span className="text-xs font-medium uppercase tracking-widest text-violet mb-3 block">Mission</span>
                <p className="text-lg text-foreground leading-relaxed">
                  Remove friction between ideas and outcomes through autonomous end-to-end execution.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass rounded-2xl p-8">
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
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-16">Principles</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="glass rounded-2xl p-6 h-full hover:border-violet/20 transition-all">
                  <p.icon size={24} className="text-violet mb-4" />
                  <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-narrow">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-16">Origin</h2>
          </Reveal>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet/50 via-cyan/50 to-transparent hidden md:block" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <Reveal key={t.stage} delay={i * 0.1}>
                  <div className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                    <div className={`flex-1 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                      <span className="text-xs font-medium text-cyan">{t.year}</span>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{t.stage}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-violet to-cyan shrink-0 hidden md:block" />
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
