import { Reveal } from "@/components/shared/Reveal";
import { ArrowRight } from "lucide-react";

const sections = [
  {
    title: "From Intelligence to Execution",
    desc: "Most AI tools generate suggestions. OriMind executes outcomes. The difference isn't incremental—it's categorical. We eliminate the hand-offs between tools, the manual review cycles, and the integration overhead. What remains is a direct line from intent to deliverable.",
  },
];

const useCases = [
  {
    persona: "Individuals",
    audience: "Students, creators, freelancers",
    desc: "Turn ideas into shipped products without learning five different tools. Describe your vision—OriMind builds it.",
    gradient: "from-violet/20 to-violet/5",
  },
  {
    persona: "Startups",
    audience: "Rapid shipping, scalable systems",
    desc: "Ship MVPs in hours. Launch campaigns in minutes. Scale without hiring a ten-person team.",
    gradient: "from-cyan/20 to-cyan/5",
  },
  {
    persona: "Enterprises",
    audience: "Secure orchestration at scale",
    desc: "Dedicated environments, compliance-ready infrastructure, and orchestration that handles thousands of concurrent workflows.",
    gradient: "from-violet/15 to-cyan/10",
  },
];

export function DifferentiationSection() {
  return (
    <>
      {/* Differentiation */}
      <section className="section-padding relative">
        <div className="container-narrow">
          {sections.map((s) => (
            <Reveal key={s.title}>
              <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">{s.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding relative">
        <div className="container-wide">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-xs font-medium uppercase tracking-widest text-cyan mb-4 block">
                Use Cases
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Built for every scale
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {useCases.map((uc, i) => (
              <Reveal key={uc.persona} delay={i * 0.1}>
                <div className={`glass rounded-2xl p-8 h-full bg-gradient-to-b ${uc.gradient} hover:border-violet/20 transition-all group`}>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{uc.persona}</h3>
                  <p className="text-xs text-cyan font-medium mb-4">{uc.audience}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{uc.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-violet font-medium group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
