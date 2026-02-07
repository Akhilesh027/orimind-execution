import { useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { TextReveal } from "@/components/shared/TextReveal";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useReveal } from "@/hooks/use-reveal";

export function CtaSection() {
  const [email, setEmail] = useState("");
  const { ref, isInView } = useReveal(0.2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    const waitlist = JSON.parse(localStorage.getItem("orimind_cta_emails") || "[]");
    waitlist.push({ email, date: new Date().toISOString() });
    localStorage.setItem("orimind_cta_emails", JSON.stringify(waitlist));
    setEmail("");
    toast.success("You're on the list! We'll be in touch.");
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-violet/[0.06] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet/30 to-transparent" />

      <div className="container-narrow relative z-10">
        <div ref={ref} className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-8"
          >
            <Sparkles size={14} className="text-violet" />
            Early Access Available
          </motion.div>

          <Reveal>
            <TextReveal
              text="You imagine. It executes."
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Join the waitlist for early access to the execution age.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 h-12 px-5 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet transition-all"
              />
              <Button type="submit" variant="gradient" size="lg">
                Join Waitlist <ArrowRight size={16} />
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
