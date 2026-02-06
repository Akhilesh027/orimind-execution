import { useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  const [email, setEmail] = useState("");

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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet/5 to-transparent" />
      <div className="container-narrow relative z-10">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              You imagine. <span className="gradient-text">It executes.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Join the waitlist for early access to the execution age.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 h-12 px-5 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet"
              />
              <Button type="submit" variant="gradient" size="lg">
                Join Waitlist <ArrowRight size={16} />
              </Button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
