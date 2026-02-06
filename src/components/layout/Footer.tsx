import { Link } from "react-router-dom";
import { ArrowUpRight, Github, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const footerLinks = {
  Product: [
    { label: "Infinall", href: "/infinall" },
    { label: "Blog", href: "/blog" },
    { label: "Waitlist", href: "/waitlist" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email.");
      return;
    }
    const subs = JSON.parse(localStorage.getItem("orimind_newsletter") || "[]");
    subs.push({ email, date: new Date().toISOString() });
    localStorage.setItem("orimind_newsletter", JSON.stringify(subs));
    setEmail("");
    toast.success("Subscribed to the newsletter!");
  };

  return (
    <footer className="border-t border-white/5 bg-surface">
      <div className="container-wide px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet to-cyan flex items-center justify-center text-sm font-bold text-background">
                O
              </div>
              <span className="text-lg font-bold text-foreground">OriMind</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              One Mind. Infinite Intelligence. The autonomous AI execution platform where work completes itself.
            </p>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 h-10 px-4 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-violet"
              />
              <button
                type="submit"
                className="h-10 px-4 rounded-lg bg-gradient-to-r from-violet to-cyan text-sm font-medium text-background hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                      <ArrowUpRight size={12} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-16 pt-8 border-t border-white/5">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} OriMind. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
