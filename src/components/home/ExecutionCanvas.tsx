import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/shared/Reveal";
import { Play, Paintbrush, Code, FileText, Rocket, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const agents = [
  { id: "design", label: "Design", icon: Paintbrush, color: "text-pink-400" },
  { id: "code", label: "Code", icon: Code, color: "text-cyan" },
  { id: "content", label: "Content", icon: FileText, color: "text-yellow-400" },
  { id: "deploy", label: "Deploy", icon: Rocket, color: "text-violet" },
];

export function ExecutionCanvas() {
  const [command, setCommand] = useState("");
  const [running, setRunning] = useState(false);
  const [activeAgent, setActiveAgent] = useState(-1);
  const [completed, setCompleted] = useState<string[]>([]);

  const handleRun = useCallback(() => {
    if (!command.trim() || running) return;
    setRunning(true);
    setCompleted([]);
    setActiveAgent(0);

    let step = 0;
    const interval = setInterval(() => {
      setCompleted((prev) => [...prev, agents[step].id]);
      step++;
      if (step < agents.length) {
        setActiveAgent(step);
      } else {
        clearInterval(interval);
        setActiveAgent(-1);
        setTimeout(() => setRunning(false), 1000);
      }
    }, 1000);
  }, [command, running]);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-wide">
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-widest text-violet mb-4 block">
              Interactive Demo
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Execution Canvas
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Panel - Command Input */}
              <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-white/5">
                <label className="text-sm font-medium text-muted-foreground mb-3 block">
                  Natural Language Command
                </label>
                <textarea
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  placeholder="Build a SaaS dashboard with user analytics, revenue charts, and a dark theme..."
                  className="w-full h-32 p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-violet resize-none font-mono"
                  disabled={running}
                />
                <Button
                  variant="gradient"
                  className="mt-4 w-full"
                  onClick={handleRun}
                  disabled={running || !command.trim()}
                >
                  <Play size={16} />
                  {running ? "Executing..." : "Run"}
                </Button>
              </div>

              {/* Right Panel - Agent Tiles */}
              <div className="p-6 md:p-8">
                <label className="text-sm font-medium text-muted-foreground mb-3 block">
                  Agent Pipeline
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {agents.map((agent, i) => {
                    const isActive = activeAgent === i;
                    const isDone = completed.includes(agent.id);
                    return (
                      <motion.div
                        key={agent.id}
                        animate={
                          isActive
                            ? { scale: 1.03, borderColor: "rgba(124,58,237,0.4)" }
                            : { scale: 1, borderColor: "rgba(255,255,255,0.08)" }
                        }
                        className="rounded-xl border p-4 bg-white/[0.02] flex flex-col items-center justify-center gap-2 relative"
                      >
                        {isDone && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-2 right-2"
                          >
                            <CheckCircle2 size={14} className="text-cyan" />
                          </motion.div>
                        )}
                        <agent.icon
                          size={24}
                          className={`${isDone ? "text-cyan" : isActive ? agent.color : "text-muted-foreground"} transition-colors`}
                        />
                        <span className="text-xs font-medium text-foreground">{agent.label}</span>
                        {isActive && (
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1, ease: "linear" }}
                            className="h-0.5 bg-gradient-to-r from-violet to-cyan rounded-full"
                          />
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                <AnimatePresence>
                  {completed.length === agents.length && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 rounded-xl bg-cyan/10 border border-cyan/20 text-center"
                    >
                      <p className="text-sm font-medium text-cyan">
                        Execution complete. All deliverables ready.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
