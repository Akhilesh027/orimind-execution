import { Reveal } from "@/components/shared/Reveal";
import { StaggerReveal } from "@/components/shared/StaggerReveal";
import { TextReveal } from "@/components/shared/TextReveal";
import { GlowText } from "@/components/shared/GlowText";
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
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
  },
  {
    persona: "Startups",
    audience: "Rapid shipping, scalable systems",
    desc: "Ship MVPs in hours. Launch campaigns in minutes. Scale without hiring a ten-person team.",
    gradient: "from-cyan to-cyan/40",
    stats: "80% cost reduction",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
  },
  {
    persona: "Enterprises",
    audience: "Secure orchestration at scale",
    desc: "Dedicated environments, compliance-ready infrastructure, and orchestration that handles thousands of concurrent workflows.",
    gradient: "from-violet to-cyan",
    stats: "99.9% uptime",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
];

export function DifferentiationSection() {
  const { ref, isInView } = useReveal(0.1);

  return (
    <>
      {/* Differentiation with image */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet/[0.04] blur-[120px] pointer-events-none" />
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal>
                <span className="text-xs font-medium uppercase tracking-widest text-violet mb-4 block">
                  The Shift
                </span>
                <TextReveal
                  text="From Intelligence to Execution"
                  className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
                />
              </Reveal>
              <Reveal delay={0.15}>
                <GlowText
                  keywords={["executes outcomes", "categorical", "intent to deliverable"]}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  Most AI tools generate suggestions. OriMind executes outcomes. The difference isn't incremental—it's categorical. We eliminate the hand-offs between tools, the manual review cycles, and the integration overhead. What remains is a direct line from intent to deliverable.
                </GlowText>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-2xl overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10 pointer-events-none" />
                <img
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
                  alt="AI neural network visualization"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 border border-white/[0.08] rounded-2xl z-20 pointer-events-none" />
                <div className="absolute -inset-1 bg-gradient-to-r from-violet/15 to-cyan/15 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
            </Reveal>
          </div>
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
                  className="glass rounded-2xl overflow-hidden h-full hover:border-violet/20 transition-all group relative"
                >
                  {/* Image header */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={uc.image}
                      alt={uc.persona}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-[hsl(var(--background)/.5)] to-transparent" />
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${uc.gradient} opacity-60 group-hover:opacity-100 transition-opacity`}
                    />
                  </div>

                  <div className="p-6">
                    <span
                      className={`inline-block text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${uc.gradient} bg-clip-text text-transparent mb-3`}
                    >
                      {uc.stats}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{uc.persona}</h3>
                    <p className="text-xs text-cyan font-medium mb-3">{uc.audience}</p>
                    <GlowText
                      keywords={["shipped products", "MVPs", "compliance-ready"]}
                      className="text-sm text-muted-foreground leading-relaxed mb-4"
                    >
                      {uc.desc}
                    </GlowText>
                    <span className="inline-flex items-center gap-1 text-sm text-violet font-medium group-hover:gap-2 transition-all">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </div>
                </motion.div>
              </StaggerReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
