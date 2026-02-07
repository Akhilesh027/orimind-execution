import { Reveal } from "@/components/shared/Reveal";
import { StaggerReveal } from "@/components/shared/StaggerReveal";
import { TextReveal } from "@/components/shared/TextReveal";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "We shipped a complete product launch—landing page, email sequence, and ad creatives—in under an hour. That used to take our team two weeks.",
    name: "Mara Jensen",
    role: "Head of Growth, Luminary Labs",
    avatar: "MJ",
  },
  {
    quote: "OriMind doesn't feel like an AI tool. It feels like having a senior team that never sleeps. The multi-agent orchestration is genuinely impressive.",
    name: "David Chen",
    role: "CTO, BuildStack",
    avatar: "DC",
  },
  {
    quote: "As a solo founder, OriMind replaced three SaaS subscriptions and two freelancers. I describe what I need and it gets built.",
    name: "Priya Nair",
    role: "Founder, Artisan Commerce",
    avatar: "PN",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet/[0.03] to-transparent" />
      <div className="container-wide relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-widest text-violet mb-4 block">
              Testimonials
            </span>
            <TextReveal
              text="What builders say"
              className="text-3xl md:text-5xl font-bold text-foreground"
            />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <StaggerReveal key={t.name} index={i}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-6 md:p-8 h-full flex flex-col hover:border-violet/20 transition-all duration-300 group"
              >
                <Quote
                  size={28}
                  className="text-violet/30 mb-4 group-hover:text-violet/60 transition-colors"
                />
                <p className="text-sm md:text-base text-foreground leading-relaxed flex-1 mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet to-cyan flex items-center justify-center text-xs font-bold text-background">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
