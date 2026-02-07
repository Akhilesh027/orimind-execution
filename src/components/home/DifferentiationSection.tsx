import { Reveal } from "@/components/shared/Reveal";
import { StaggerReveal } from "@/components/shared/StaggerReveal";
import { TextReveal } from "@/components/shared/TextReveal";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useReveal } from "@/hooks/use-reveal";

const useCases = [
  {
    persona: "Individuals",
    audience: "Students, creators, freelancers",
    desc: "Turn ideas into shipped products without learning five different tools. Describe your vision—OriMind builds it.",
    gradient: "from-violet to-violet/40",
    stats: "10x faster",
  },
  {
    persona: "Startups",
    audience: "Rapid shipping, scalable systems",
    desc: "Ship MVPs in hours. Launch campaigns in minutes. Scale without hiring a ten-person team.",
    gradient: "from-cyan to-cyan/40",
    stats: "80% cost reduction",
  },
  {
    persona: "Enterprises",
    audience: "Secure orchestration at scale",
    desc: "Dedicated environments, compliance-ready infrastructure, and orchestration that handles thousands of concurrent workflows.",
    gradient: "from-violet to-cyan",
    stats: "99.9% uptime",
  },
];

export function DifferentiationSection() {
  const { ref, isInView } = useReveal(0.1);

  return (
    <>
      {/* Differentiation */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet/[0.04] blur-[120px] pointer-events-none" />
        <div className="container-narrow relative z-10">
          <Reveal>
            <div className="text-center">
              <span className="text-xs font-medium uppercase tracking-widest text-violet mb-4 block">
                The Shift
              </span>
              <TextReveal
                text="From Intelligence to Execution"
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              />
              <motion.p
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              >
                Most AI tools generate suggestions. OriMind executes outcomes. The difference
                isn't incremental—it's categorical. We eliminate the hand-offs between tools,
                the manual review cycles, and the integration overhead. What remains is a
                direct line from intent to deliverable.
              </motion.p>
            </div>
          </Reveal>
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
              <TextReveal
                text="Built for every scale"
                className="text-3xl md:text-5xl font-bold text-foreground"
              />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <StaggerReveal key={uc.persona} index={i}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="glass rounded-2xl p-8 h-full hover:border-violet/20 transition-all group relative overflow-hidden"
                >
                  {/* Top gradient bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${uc.gradient} opacity-60 group-hover:opacity-100 transition-opacity`}
                  />

                  <span
                    className={`inline-block text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${uc.gradient} bg-clip-text text-transparent mb-3`}
                  >
                    {uc.stats}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{uc.persona}</h3>
                  <p className="text-xs text-cyan font-medium mb-4">{uc.audience}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{uc.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-violet font-medium group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={14} />
                  </span>
                </motion.div>
              </StaggerReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
