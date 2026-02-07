import { motion } from "framer-motion";
import { useReveal } from "@/hooks/use-reveal";
import { Reveal } from "@/components/shared/Reveal";
import { StaggerReveal } from "@/components/shared/StaggerReveal";
import { GlowText } from "@/components/shared/GlowText";

const showcaseItems = [
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    title: "AI-Powered Dashboards",
    desc: "Generate complex analytics dashboards with a single command. Real-time data, beautiful charts, production-ready.",
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    title: "Marketing Campaigns",
    desc: "From creative brief to live campaign—landing pages, ad creatives, email sequences, all orchestrated by agents.",
  },
  {
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    title: "Full-Stack Applications",
    desc: "Describe your app. OriMind builds the frontend, backend, database, and deployment pipeline in parallel.",
  },
];

export function ShowcaseSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-wide">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-widest text-cyan mb-4 block">
              What You Can Build
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              From command to <span className="gradient-text">production</span>
            </h2>
            <GlowText
              keywords={["imagination", "limit"]}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              The only limit is your imagination. Every output is deployment-ready from the start.
            </GlowText>
          </div>
        </Reveal>

        <div className="space-y-20">
          {showcaseItems.map((item, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <StaggerReveal key={item.title} index={0} direction={isReversed ? "right" : "left"}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    isReversed ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={isReversed ? "lg:order-2" : ""}>
                    <ImageReveal src={item.image} alt={item.title} />
                  </div>
                  <div className={`${isReversed ? "lg:order-1 lg:text-right" : ""} space-y-4`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {item.title}
                    </h3>
                    <GlowText
                      keywords={["command", "orchestrated", "parallel"]}
                      className="text-muted-foreground leading-relaxed text-base"
                    >
                      {item.desc}
                    </GlowText>
                  </div>
                </div>
              </StaggerReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ImageReveal({ src, alt }: { src: string; alt: string }) {
  const { ref, isInView } = useReveal(0.15);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-2xl overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 border border-white/[0.08] rounded-2xl z-20 pointer-events-none" />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
      />
      {/* Glow effect on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-violet/20 to-cyan/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </motion.div>
  );
}
