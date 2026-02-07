import { Marquee } from "@/components/shared/Marquee";
import { Reveal } from "@/components/shared/Reveal";

const brands = [
  "TechCrunch",
  "Y Combinator",
  "Andreessen Horowitz",
  "Sequoia",
  "Product Hunt",
  "Wired",
  "The Verge",
  "Forbes",
];

export function LogoMarquee() {
  return (
    <section className="py-16 border-y border-white/5 relative overflow-hidden">
      <Reveal>
        <p className="text-xs uppercase tracking-widest text-muted-foreground text-center mb-8">
          Backed by visionaries. Featured everywhere.
        </p>
      </Reveal>
      <Marquee speed={40}>
        {brands.map((brand) => (
          <span
            key={brand}
            className="text-lg md:text-xl font-semibold text-muted-foreground/40 whitespace-nowrap px-6 select-none"
          >
            {brand}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
