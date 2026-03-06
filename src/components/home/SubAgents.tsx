import { Reveal } from "@/components/shared/Reveal";
import { StaggerReveal } from "@/components/shared/StaggerReveal";
import { TextReveal } from "@/components/shared/TextReveal";
import { Code, FileText, Palette, Search, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const agents = [
  {
    icon: Code,
    title: "Coding Agent",
    desc: "Generates applications, APIs, and infrastructure. Full-stack systems from a single prompt.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80",
    gradient: "from-cyan/20 to-blue-500/10",
  },
  {
    icon: FileText,
    title: "Content Agent",
    desc: "Creates marketing campaigns, blog posts, documentation, and written assets at scale.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    gradient: "from-amber-500/15 to-violet/10",
  },
  {
    icon: Palette,
    title: "Design Agent",
    desc: "Produces UI systems, branding, creative assets, and visual identities.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    gradient: "from-pink-500/15 to-violet/10",
  },
  {
    icon: Search,
    title: "Research Agent",
    desc: "Collects structured insights, competitive analysis, and data-driven recommendations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    gradient: "from-emerald-500/15 to-cyan/10",
  },
  {
    icon: Rocket,
    title: "Deployment Agent",
    desc: "Packages systems for production. CI/CD pipelines, hosting, and environment management.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    gradient: "from-violet/20 to-cyan/10",
  },
];

export function SubAgents() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet/[0.02] to-transparent" />
      <div className="container-wide relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-widest text-violet mb-4 block">
              Agent Network
            </span>
            <TextReveal
              text="Specialized agents. Unified output."
              className="text-3xl md:text-5xl font-bold text-foreground"
            />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {agents.map((agent, i) => (
            <StaggerReveal key={agent.title} index={i}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl overflow-hidden h-full group hover:border-violet/20 transition-all duration-300 relative"
              >
                {/* Image with video-like overlay */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={agent.image}
                    alt={agent.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-[hsl(var(--background)/.6)] to-transparent" />
                  {/* Play button overlay to suggest video */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full glass-strong flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-foreground border-b-[6px] border-b-transparent ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-violet/10 blur-3xl" />
                </div>

                <div className="relative z-10 p-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-4 group-hover:border-violet/30 group-hover:scale-110 transition-all duration-300">
                    <agent.icon size={22} className="text-violet group-hover:text-cyan transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{agent.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{agent.desc}</p>
                </div>
              </motion.div>
            </StaggerReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
