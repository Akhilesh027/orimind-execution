import { motion } from "framer-motion";
import { useReveal } from "@/hooks/use-reveal";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TextReveal({ text, className, as: Tag = "h2" }: TextRevealProps) {
  const { ref, isInView } = useReveal(0.2);
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 0.5,
              delay: i * 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
