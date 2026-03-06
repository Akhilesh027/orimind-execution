import { Reveal } from "@/components/shared/Reveal";
import { TextReveal } from "@/components/shared/TextReveal";
import { GlowText } from "@/components/shared/GlowText";
import { OSWindow } from "@/components/shared/OSWindow";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const consoleLogs = [
  { time: "00:00.12", msg: "> Build a SaaS dashboard with analytics", color: "text-foreground" },
  { time: "00:00.34", msg: "Parsing intent...", color: "text-muted-foreground" },
  { time: "00:00.89", msg: "Routing → [Design, Code, Data, Deploy]", color: "text-cyan" },
  { time: "00:01.45", msg: "Design Agent: generating layout system", color: "text-violet" },
  { time: "00:02.12", msg: "Code Agent: building React components", color: "text-violet" },
  { time: "00:03.01", msg: "Data Agent: creating API endpoints", color: "text-violet" },
  { time: "00:03.88", msg: "Deploy Agent: packaging build", color: "text-violet" },
  { time: "00:04.12", msg: "✓ All agents complete. Output ready.", color: "text-cyan" },
];

export function ProductPreview() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="container-wide relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-widest text-cyan mb-4 block">
              Flagship Product
            </span>
            <TextReveal
              text="infinall.ai — The Execution Engine"
              className="text-3xl md:text-5xl font-bold text-foreground mb-4"
            />
            <GlowText
              keywords={["single instruction", "specialized agents"]}
              className="text-muted-foreground max-w-2xl mx-auto mb-3"
            >
              infinall.ai converts a single instruction into coordinated execution across multiple specialized agents.
            </GlowText>
            <p className="text-sm text-muted-foreground/70 max-w-lg mx-auto">
              One prompt becomes: a website, a marketing campaign, documentation, automation workflows, deployable systems.
            </p>
          </div>
        </Reveal>

        {/* OS Window with console simulation */}
        <div className="max-w-4xl mx-auto mb-12">
          <OSWindow title="infinall — execution console">
            <div className="p-6 font-mono text-sm space-y-1.5 min-h-[280px] bg-background/50">
              {consoleLogs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.12, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex gap-3"
                >
                  <span className="text-muted-foreground/40 shrink-0 text-xs">[{log.time}]</span>
                  <span className={`${log.color} text-xs`}>{log.msg}</span>
                </motion.div>
              ))}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                viewport={{ once: true }}
                className="inline-block w-2 h-4 bg-cyan/60 animate-blink"
              />
            </div>
          </OSWindow>
        </div>

        <Reveal delay={0.2}>
          <div className="text-center">
            <Button variant="gradient" size="lg" asChild>
              <Link to="/product">
                Explore infinall.ai <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
