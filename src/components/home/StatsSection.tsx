import { Reveal } from "@/components/shared/Reveal";
import { CountUp } from "@/components/shared/CountUp";
import { StaggerReveal } from "@/components/shared/StaggerReveal";

const stats = [
  { value: 50, suffix: "K+", label: "Waitlist signups" },
  { value: 12, suffix: "M", label: "Tasks executed" },
  { value: 99.9, suffix: "%", label: "Uptime SLA" },
  { value: 4, suffix: "s", label: "Avg. response time" },
];

export function StatsSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet/5 via-transparent to-cyan/5" />
      <div className="container-wide px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StaggerReveal key={stat.label} index={i}>
              <div className="text-center">
                <p className="text-4xl md:text-5xl lg:text-6xl font-black gradient-text mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            </StaggerReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
