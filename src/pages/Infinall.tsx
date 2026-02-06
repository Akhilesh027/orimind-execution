import { useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { GradientOrbs } from "@/components/shared/GradientOrbs";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Globe, BarChart3, FileText, Megaphone, Palette, Video, Workflow, Package,
  ChevronRight, Check, X,
} from "lucide-react";

const steps = [
  { num: "01", title: "Describe", desc: "Tell OriMind what you need in natural language." },
  { num: "02", title: "Route", desc: "Intent is parsed and routed to specialized agents." },
  { num: "03", title: "Execute", desc: "Agents collaborate and deliver production-ready output." },
];

const capabilities = [
  { icon: Globe, label: "Websites & apps" },
  { icon: BarChart3, label: "Dashboards" },
  { icon: FileText, label: "Documentation" },
  { icon: Megaphone, label: "Content campaigns" },
  { icon: Palette, label: "Brand kits" },
  { icon: Video, label: "Video scripts" },
  { icon: Workflow, label: "Automation workflows" },
  { icon: Package, label: "Deployment packaging" },
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

const consoleLogs = [
  { time: "00:00.12", msg: "Parsing intent: 'Build a SaaS dashboard'", color: "text-muted-foreground" },
  { time: "00:00.34", msg: "Routing to agents: [Design, Code, Deploy]", color: "text-cyan" },
  { time: "00:01.02", msg: "Design agent: generating layout...", color: "text-violet" },
  { time: "00:02.45", msg: "Code agent: building components...", color: "text-violet" },
  { time: "00:03.88", msg: "Deploy agent: packaging build...", color: "text-violet" },
  { time: "00:04.12", msg: "✓ Execution complete. Output ready.", color: "text-cyan" },
];

export default function Infinall() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <GradientOrbs />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative z-10 container-narrow px-6 py-20 text-center">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-black gradient-text mb-4">infinall.ai</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              The End-to-End AI Execution Engine
            </p>
          </Reveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-16">How It Works</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.1}>
                <div className="glass rounded-2xl p-8 text-center h-full relative">
                  <span className="text-5xl font-black gradient-text opacity-30 block mb-4">{s.num}</span>
                  <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                  {i < steps.length - 1 && (
                    <ChevronRight size={20} className="text-muted-foreground absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden md:block" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-4">Capabilities</h2>
            <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">Everything you need, from a single command.</p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {capabilities.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.05}>
                <div className="glass rounded-xl p-5 text-center hover:border-violet/20 hover:bg-white/[0.06] transition-all group">
                  <c.icon size={24} className="text-muted-foreground group-hover:text-violet transition-colors mx-auto mb-3" />
                  <p className="text-sm font-medium text-foreground">{c.label}</p>
                </div>
              </Reveal>
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
          <Reveal delay={0.1}>
            <div className="glass rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="text-xs text-muted-foreground ml-2 font-mono">infinall console</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-2">
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
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-4">Pricing</h2>
            <p className="text-muted-foreground text-center mb-16">Early access pricing. Subject to change.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.1}>
                <div className={`rounded-2xl p-8 h-full flex flex-col ${
                  tier.highlighted
                    ? "glass-strong border-violet/30 glow-violet"
                    : "glass"
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Request Access Modal */}
      {modalOpen && (
        <RequestAccessModal onClose={() => setModalOpen(false)} />
      )}
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
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
