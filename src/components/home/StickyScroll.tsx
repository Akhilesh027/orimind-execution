import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { OSWindow } from "@/components/shared/OSWindow";
import { MessageSquare, GitFork, Zap, Package } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Describe",
    desc: "Enter a natural-language instruction. No templates. No configuration. Just tell the system what you need in plain English.",
    visual: "describe",
  },
  {
    icon: GitFork,
    step: "02",
    title: "Route",
    desc: "The system analyzes your intent, decomposes the task, and builds a structured workflow. Specialized agents are assigned automatically.",
    visual: "route",
  },
  {
    icon: Zap,
    step: "03",
    title: "Execute",
    desc: "Agents collaborate across disciplines—design, code, content, deployment—sharing context and iterating until quality thresholds are met.",
    visual: "execute",
  },
  {
    icon: Package,
    step: "04",
    title: "Deliver",
    desc: "Production-ready outputs appear. Review, iterate, or ship instantly. Every deliverable is deployment-ready from the start.",
    visual: "deliver",
  },
];

const visualContent: Record<string, { lines: string[]; highlight: string }> = {
  describe: {
    lines: [
      '> "Build a SaaS dashboard with user analytics,',
      '   revenue charts, and dark mode support"',
      "",
      "Parsing natural language input...",
      "Intent classified: FULL_STACK_APPLICATION",
    ],
    highlight: "text-foreground",
  },
  route: {
    lines: [
      "Workflow created: WF-2026-0312",
      "├── Design Agent    → UI system, layout",
      "├── Code Agent      → Components, API",
      "├── Content Agent   → Copy, documentation",
      "└── Deploy Agent    → Build, CI/CD",
    ],
    highlight: "text-cyan",
  },
  execute: {
    lines: [
      "[Design]  ████████████████░░ 89%  Layout ready",
      "[Code]    ███████████████░░░ 84%  Components built",
      "[Content] ██████████████████ 100% Copy generated",
      "[Deploy]  █████████░░░░░░░░░ 52%  Pipeline config",
      "",
      "Agents sharing context... iterating...",
    ],
    highlight: "text-violet",
  },
  deliver: {
    lines: [
      "✓ Design system generated (42 components)",
      "✓ Frontend built (Next.js + TypeScript)",
      "✓ API endpoints created (12 routes)",
      "✓ Documentation generated (8 pages)",
      "✓ Deployed to production",
      "",
      "All deliverables ready. Open dashboard →",
    ],
    highlight: "text-cyan",
  },
};

export function StickyScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const activeIndex = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 3]);

  return (
    <section className="relative">
      <div className="container-wide px-6">
        <div className="text-center mb-16 pt-24">
          <span className="text-xs font-medium uppercase tracking-widest text-violet mb-4 block">
            Execution Flow
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            How it <span className="gradient-text">works</span>
          </h2>
        </div>
      </div>

      <div ref={containerRef} className="relative" style={{ height: `${steps.length * 100}vh` }}>
        <div className="sticky top-0 h-screen flex items-center">
          <div className="container-wide px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left: Text steps */}
              <div className="space-y-2">
                {steps.map((step, i) => (
                  <StepItem key={step.step} step={step} index={i} progress={activeIndex} />
                ))}
              </div>

              {/* Right: Sticky OS window */}
              <div>
                <OSWindow title="infinall — execution console">
                  <div className="p-6 font-mono text-xs min-h-[320px] bg-background/50">
                    {steps.map((step, i) => (
                      <StepVisual key={step.visual} visual={step.visual} index={i} progress={activeIndex} />
                    ))}
                  </div>
                </OSWindow>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, index, progress }: { step: typeof steps[number]; index: number; progress: ReturnType<typeof useTransform> }) {
  return (
    <motion.div
      className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300"
      style={{
        opacity: 0.3,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.5 }}
    >
      <div className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0">
        <step.icon size={18} className="text-violet" />
      </div>
      <div>
        <span className="text-xs font-mono text-muted-foreground block mb-1">{step.step}</span>
        <h3 className="text-xl font-bold text-foreground mb-1">{step.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
      </div>
    </motion.div>
  );
}

function StepVisual({ visual, index, progress }: { visual: string; index: number; progress: ReturnType<typeof useTransform> }) {
  const content = visualContent[visual];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ amount: 0.3 }}
      className="space-y-1"
    >
      {index === 0 && content.lines.map((line, j) => (
        <motion.div
          key={j}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: j * 0.08 }}
          viewport={{ once: true }}
          className={`${content.highlight}`}
        >
          {line || "\u00A0"}
        </motion.div>
      ))}
    </motion.div>
  );
}
