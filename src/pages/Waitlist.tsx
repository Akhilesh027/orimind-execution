import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Reveal } from "@/components/shared/Reveal";
import { GradientOrbs } from "@/components/shared/GradientOrbs";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { faqItems } from "@/data/faq";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  role: z.string().min(1, "Please select a role"),
  companySize: z.string().min(1, "Please select company size"),
  useCase: z.string().trim().min(1, "Please describe your use case").max(500),
});

type FormData = z.infer<typeof schema>;

const roles = ["Founder / CEO", "Developer", "Designer", "Marketer", "Product Manager", "Student", "Other"];
const sizes = ["Solo", "2–10", "11–50", "51–200", "200+"];

export default function Waitlist() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const entries = JSON.parse(localStorage.getItem("orimind_waitlist") || "[]");
    entries.push({ ...data, date: new Date().toISOString() });
    localStorage.setItem("orimind_waitlist", JSON.stringify(entries));
    reset();
    toast.success("You're on the waitlist! We'll be in touch soon.");
  };

  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <GradientOrbs />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative z-10 container-narrow px-6 py-20 text-center">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-widest text-cyan mb-4 block">Early Access</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Join the Waitlist</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Be among the first to experience the execution age. Priority access for early signups.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-narrow">
          <Reveal>
            <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-2xl p-8 max-w-lg mx-auto space-y-5">
              <div>
                <input
                  {...register("name")}
                  placeholder="Full name"
                  className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-violet"
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email address"
                  className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-violet"
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <select
                  {...register("role")}
                  className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-violet appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-surface text-muted-foreground">Select your role</option>
                  {roles.map((r) => (
                    <option key={r} value={r} className="bg-surface text-foreground">{r}</option>
                  ))}
                </select>
                {errors.role && <p className="text-xs text-destructive mt-1">{errors.role.message}</p>}
              </div>
              <div>
                <select
                  {...register("companySize")}
                  className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-violet appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-surface text-muted-foreground">Company size</option>
                  {sizes.map((s) => (
                    <option key={s} value={s} className="bg-surface text-foreground">{s}</option>
                  ))}
                </select>
                {errors.companySize && <p className="text-xs text-destructive mt-1">{errors.companySize.message}</p>}
              </div>
              <div>
                <textarea
                  {...register("useCase")}
                  placeholder="Primary use case — what would you build first?"
                  rows={3}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-violet resize-none"
                />
                {errors.useCase && <p className="text-xs text-destructive mt-1">{errors.useCase.message}</p>}
              </div>
              <Button type="submit" variant="gradient" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Join Waitlist"}
              </Button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-narrow">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>
          </Reveal>
          <div className="space-y-3 max-w-2xl mx-auto">
            {faqItems.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <FaqItem question={item.question} answer={item.answer} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="text-sm font-medium text-foreground pr-4">{question}</span>
        <ChevronDown
          size={18}
          className={`text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
