import { Reveal } from "@/components/shared/Reveal";
import { StaggerReveal } from "@/components/shared/StaggerReveal";
import { TextReveal } from "@/components/shared/TextReveal";
import { GlowText } from "@/components/shared/GlowText";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const useCases = [
  {
    persona: "Individuals",
    audience: "Creators, students, and independent builders",
    desc: "Turn ideas into shipped products without learning five different tools. Describe your vision—it gets built.",
    gradient: "from-violet to-violet/40",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
  },
  {
    persona: "Startups",
    audience: "Rapid product development and growth systems",
    desc: "Ship MVPs in hours. Launch campaigns in minutes. Scale without hiring a ten-person team.",
    gradient: "from-cyan to-cyan/40",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
  },
  {
    persona: "Enterprises",
    audience: "Secure orchestration of internal workflows",
    desc: "Dedicated environments, compliance-ready infrastructure, and orchestration at scale.",
    gradient: "from-violet to-cyan",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
];

export function DifferentiationSection() {
  return (
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
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={uc.image}
                    alt={uc.persona}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-[hsl(var(--background)/.5)] to-transparent" />
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${uc.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />
                </div>

                <div className="p-6">
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
  );
}
