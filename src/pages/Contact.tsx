import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Reveal } from "@/components/shared/Reveal";
import { GradientOrbs } from "@/components/shared/GradientOrbs";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, Clock, Twitter, Linkedin, Github } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const msgs = JSON.parse(localStorage.getItem("orimind_contact") || "[]");
    msgs.push({ ...data, date: new Date().toISOString() });
    localStorage.setItem("orimind_contact", JSON.stringify(msgs));
    reset();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <>
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <GradientOrbs />
        <div className="relative z-10 container-narrow px-6 py-20 text-center">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-widest text-cyan mb-4 block">Contact</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Get in Touch</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Questions, partnerships, or just want to say hello? We'd love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Reveal>
                <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-2xl p-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        {...register("name")}
                        placeholder="Name"
                        className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-violet"
                      />
                      {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="Email"
                        className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-violet"
                      />
                      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div>
                    <input
                      {...register("subject")}
                      placeholder="Subject"
                      className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-violet"
                    />
                    {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject.message}</p>}
                  </div>
                  <div>
                    <textarea
                      {...register("message")}
                      placeholder="Your message..."
                      rows={5}
                      className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-violet resize-none"
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" variant="gradient" size="lg" className="w-full">Send Message</Button>
                </form>
              </Reveal>
            </div>

            <div>
              <Reveal delay={0.1}>
                <div className="glass rounded-2xl p-6 space-y-6">
                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-violet mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">hello@orimind.ai</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-cyan mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Response Time</p>
                      <p className="text-sm text-muted-foreground">We typically respond within 24 hours.</p>
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-6">
                    <p className="text-xs text-muted-foreground mb-3">Follow us</p>
                    <div className="flex gap-3">
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter"><Twitter size={18} /></a>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn"><Linkedin size={18} /></a>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub"><Github size={18} /></a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
