import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Terminal } from "lucide-react";
import { GradientOrbs } from "@/components/shared/GradientOrbs";
import { Link } from "react-router-dom";

const prompts = [
  "Build a landing page for a fruit box brand",
  "Generate a product video script and social posts",
  "Create a dashboard and deploy it",
  "Design a campaign and produce creatives",
];

const executionSteps = [
  { label: "Intent", icon: "🧠", desc: "Understanding your request..." },
  { label: "Routing", icon: "🔀", desc: "Assigning specialized agents..." },
  { label: "Agents", icon: "⚡", desc: "Executing parallel workflows..." },
  { label: "Output", icon: "✅", desc: "Delivering production-ready result." },
];

export function Hero() {
  const [promptIndex, setPromptIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [demoText, setDemoText] = useState("");
  const [executing, setExecuting] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const currentPrompt = prompts[promptIndex];
    let charIndex = 0;
    setDisplayText("");

    const typeInterval = setInterval(() => {
      if (charIndex <= currentPrompt.length) {
        setDisplayText(currentPrompt.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 40);

    const nextPrompt = setTimeout(() => {
      setPromptIndex((prev) => (prev + 1) % prompts.length);
    }, 4000);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(nextPrompt);
    };
  }, [promptIndex]);

  const handleExecute = useCallback(() => {
    if (!demoText.trim()) return;
    setExecuting(true);
    setActiveStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < executionSteps.length) {
        setActiveStep(step);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setExecuting(false);
          setActiveStep(-1);
          setDemoText("");
          setShowModal(false);
        }, 1500);
      }
    }, 1200);
  }, [demoText]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <GradientOrbs />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative z-10 container-narrow px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-glow" />
            Autonomous AI Execution Platform
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
            <span className="gradient-text">OriMind</span>
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Build. Deploy. Scale — <span className="text-muted-foreground">from one command.</span>
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            OriMind is creating an end-to-end AI execution ecosystem where intelligence doesn't merely respond—it delivers.
          </p>
        </motion.div>

        {/* Command Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          onClick={() => setShowModal(true)}
          className="mx-auto max-w-2xl cursor-pointer group"
        >
          <div className="glass-strong rounded-2xl p-4 flex items-center gap-3 hover:border-violet/30 transition-all">
            <Terminal size={20} className="text-violet shrink-0" />
            <span className="flex-1 text-left text-sm md:text-base text-muted-foreground font-mono truncate">
              {displayText}
              <span className="inline-block w-0.5 h-4 bg-violet ml-0.5 animate-blink align-middle" />
            </span>
            <div className="shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-violet to-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={14} className="text-background ml-0.5" />
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <Button variant="gradient" size="xl" asChild>
            <Link to="/waitlist">Join Waitlist</Link>
          </Button>
          <Button variant="outline" size="xl" asChild>
            <Link to="/infinall">Explore Infinall</Link>
          </Button>
        </motion.div>
      </div>

      {/* Demo Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={(e) => e.target === e.currentTarget && !executing && setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="glass-strong rounded-2xl p-6 md:p-8 w-full max-w-lg"
            >
              <h3 className="text-lg font-semibold text-foreground mb-1">Try a demo prompt</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Describe what you want to build and watch the execution pipeline.
              </p>

              <textarea
                value={demoText}
                onChange={(e) => setDemoText(e.target.value)}
                placeholder="e.g., Build a portfolio site with dark mode..."
                className="w-full h-24 p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-violet resize-none"
                disabled={executing}
              />

              {/* Execution Timeline */}
              {executing && (
                <div className="mt-6 space-y-3">
                  {executionSteps.map((step, i) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        i <= activeStep
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0.3, x: 0 }
                      }
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                        i === activeStep ? "glass" : ""
                      }`}
                    >
                      <span className="text-xl">{step.icon}</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{step.label}</p>
                        <p className="text-xs text-muted-foreground">{step.desc}</p>
                      </div>
                      {i < activeStep && (
                        <span className="text-xs text-cyan font-medium">Done</span>
                      )}
                      {i === activeStep && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-violet border-t-transparent rounded-full"
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              )}

              <div className="flex gap-3 mt-6">
                <Button
                  variant="ghost"
                  onClick={() => {
                    setShowModal(false);
                    setExecuting(false);
                    setActiveStep(-1);
                  }}
                  disabled={executing}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  variant="gradient"
                  onClick={handleExecute}
                  disabled={executing || !demoText.trim()}
                  className="flex-1"
                >
                  {executing ? "Executing..." : "Run"}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
