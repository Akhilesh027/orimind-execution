import { useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { StaggerReveal } from "@/components/shared/StaggerReveal";
import { TextReveal } from "@/components/shared/TextReveal";
import { GlowText } from "@/components/shared/GlowText";
import { GradientOrbs } from "@/components/shared/GradientOrbs";
import { OSWindow } from "@/components/shared/OSWindow";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";
import {
  Globe, BarChart3, FileText, Megaphone, Palette, Video, Workflow, Package,
  MessageSquare, GitFork, Zap, Check, X, ArrowRight,
} from "lucide-react";

const howSteps = [
  { icon: MessageSquare, num: "01", title: "Describe", desc: "Enter the outcome you want in natural language." },
  { icon: GitFork, num: "02", title: "Route", desc: "The platform analyzes intent and builds execution pathways." },
  { icon: Zap, num: "03", title: "Execute", desc: "Agents coordinate tasks across disciplines simultaneously." },
];

const capabilities = [
  { icon: Globe, label: "Websites & Apps" },
  { icon: BarChart3, label: "Dashboards" },
  { icon: FileText, label: "Documentation" },
  { icon: Megaphone, label: "Content Campaigns" },
  { icon: Palette, label: "Brand Kits" },
  { icon: Video, label: "Video Scripts" },
  { icon: Workflow, label: "Automation Workflows" },
  { icon: Package, label: "Deployment Pipelines" },
];

const consoleLogs = [
  { time: "00:00.12", msg: "Analyzing request...", color: "text-muted-foreground" },
  { time: "00:00.34", msg: "Routing agents...", color: "text-cyan" },
  { time: "00:01.02", msg: "Generating assets...", color: "text-violet" },
  { time: "00:02.45", msg: "Compiling systems...", color: "text-violet" },
  { time: "00:03.88", msg: "Running tests...", color: "text-violet" },
  { time: "00:04.12", msg: "✓ Deployment ready.", color: "text-cyan" },
];

const tiers = [
  {
    name: "Creator",
    desc: "For individuals and small projects.",
    features: ["5 concurrent agents", "50 executions/month", "Community support", "Standard memory"],
  },
  {
    name: "Team",
    desc: "For growing teams shipping fast.",
    features: ["Unlimited agents", "500 executions/month", "Priority support", "Shared memory & context", "Collaboration tools"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    desc: "For organizations at scale.",
    features: ["Dedicated infrastructure", "Unlimited executions", "SLA & compliance", "Custom integrations", "Dedicated success manager"],
  },
];

export default function Product() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <GradientOrbs />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-violet/[0.08] rounded-full blur-[150px]" />

        <div className="relative z-10 container-narrow px-6 py-28 text-center">
          <Reveal>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black gradient-text mb-4">infinall.ai</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
              The End-to-End AI Execution Engine
            </p>
            <Button variant="gradient" size="xl" onClick={() => setModalOpen(true)}>
              Request Access <ArrowRight size={16} />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Product Demo Window */}
      <section className="section-padding pt-0 -mt-16 relative z-10">
        <div className="container-narrow">
          <OSWindow title="infinall — product demo">
            <div className="aspect-video bg-background/50 flex items-center justify-center relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                alt="Dashboard preview"
                className="w-full h-full object-cover opacity-40"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full glass-strong flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-foreground border-b-[10px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>
          </OSWindow>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-wide">
          <Reveal>
            <div className="text-center mb-16">
              <TextReveal text="How It Works" className="text-3xl md:text-5xl font-bold text-foreground" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howSteps.map((s, i) => (
              <StaggerReveal key={s.num} index={i}>
                <div className="glass rounded-2xl p-8 text-center h-full relative group hover:border-violet/20 transition-all">
                  <div className="w-14 h-14 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mx-auto mb-5 group-hover:border-violet/30 transition-all">
                    <s.icon size={24} className="text-violet" />
                  </div>
                  <span className="text-4xl font-black gradient-text opacity-20 block mb-3">{s.num}</span>
                  <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </StaggerReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding">
        <div className="container-wide">
          <Reveal>
            <div className="text-center mb-16">
              <TextReveal text="Capabilities" className="text-3xl md:text-5xl font-bold text-foreground mb-4" />
              <p className="text-muted-foreground max-w-lg mx-auto">Everything you need, from a single command.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {capabilities.map((c, i) => (
              <StaggerReveal key={c.label} index={i}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass rounded-xl p-5 text-center hover:border-violet/20 transition-all group cursor-pointer"
                >
                  <c.icon size={24} className="text-muted-foreground group-hover:text-violet transition-colors mx-auto mb-3" />
                  <p className="text-sm font-medium text-foreground">{c.label}</p>
                </motion.div>
              </StaggerReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Console Preview */}
      <section className="section-padding">
        <div className="container-narrow">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-12">Console Preview</h2>
          </Reveal>
          <OSWindow title="infinall — console">
            <div className="p-6 font-mono text-sm space-y-2 min-h-[220px] bg-background/50">
              {consoleLogs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="flex gap-3"
                >
                  <span className="text-muted-foreground/50 shrink-0">[{log.time}]</span>
                  <span className={log.color}>{log.msg}</span>
                </motion.div>
              ))}
            </div>
          </OSWindow>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container-wide">
          <Reveal>
            <div className="text-center mb-16">
              <TextReveal text="Pricing" className="text-3xl md:text-5xl font-bold text-foreground mb-4" />
              <p className="text-muted-foreground">Early access pricing. Subject to change.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tiers.map((tier, i) => (
              <StaggerReveal key={tier.name} index={i}>
                <div className={`rounded-2xl p-8 h-full flex flex-col ${
                  tier.highlighted ? "glass-strong border-violet/30 glow-violet" : "glass"
                }`}>
                  <h3 className="text-xl font-bold text-foreground mb-1">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{tier.desc}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                        <Check size={14} className="text-cyan shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={tier.highlighted ? "gradient" : "outline"}
                    className="w-full"
                    onClick={() => setModalOpen(true)}
                  >
                    Request Access
                  </Button>
                </div>
              </StaggerReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && <RequestAccessModal onClose={() => setModalOpen(false)} />}
    </>
  );
}

function RequestAccessModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please fill in all required fields.");
      return;
    }
    const reqs = JSON.parse(localStorage.getItem("orimind_access_requests") || "[]");
    reqs.push({ ...formData, date: new Date().toISOString() });
    localStorage.setItem("orimind_access_requests", JSON.stringify(reqs));
    toast.success("Request submitted! We'll be in touch.");
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="glass-strong rounded-2xl p-8 w-full max-w-md relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X size={20} />
        </button>
        <h3 className="text-lg font-semibold text-foreground mb-4">Request Access</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            placeholder="Name *"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-violet"
          />
          <input
            type="email"
            placeholder="Email *"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-violet"
          />
          <input
            placeholder="Company (optional)"
            value={formData.company}
            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
            className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-violet"
          />
          <Button type="submit" variant="gradient" className="w-full">Submit Request</Button>
        </form>
      </motion.div>
    </motion.div>
  );
}
