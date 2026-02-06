import { Reveal } from "@/components/shared/Reveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "We shipped a complete product launch—landing page, email sequence, and ad creatives—in under an hour. That used to take our team two weeks.",
    name: "Mara Jensen",
    role: "Head of Growth, Luminary Labs",
  },
  {
    quote: "OriMind doesn't feel like an AI tool. It feels like having a senior team that never sleeps. The multi-agent orchestration is genuinely impressive.",
    name: "David Chen",
    role: "CTO, BuildStack",
  },
  {
    quote: "As a solo founder, OriMind replaced three SaaS subscriptions and two freelancers. I describe what I need and it gets built.",
    name: "Priya Nair",
    role: "Founder, Artisan Commerce",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding relative">
      <div className="container-wide">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              What builders say
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6 md:p-8 h-full flex flex-col hover:border-violet/20 transition-all">
                <Quote size={20} className="text-violet/40 mb-4" />
                <p className="text-sm text-foreground leading-relaxed flex-1 mb-6">
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
