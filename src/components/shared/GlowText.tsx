import { motion } from "framer-motion";
import { useReveal } from "@/hooks/use-reveal";

interface GlowTextProps {
  children: string;
  keywords: string[];
  className?: string;
  as?: "p" | "span" | "h2" | "h3";
}

export function GlowText({ children, keywords, className, as: Tag = "p" }: GlowTextProps) {
  const { ref, isInView } = useReveal(0.3);

  // Split text around keywords while preserving them
  const parts: { text: string; isKeyword: boolean }[] = [];
  let remaining = children;

  while (remaining.length > 0) {
    let earliestIndex = remaining.length;
    let matchedKeyword = "";

    for (const kw of keywords) {
      const idx = remaining.toLowerCase().indexOf(kw.toLowerCase());
      if (idx !== -1 && idx < earliestIndex) {
        earliestIndex = idx;
        matchedKeyword = kw;
      }
    }

    if (matchedKeyword && earliestIndex < remaining.length) {
      if (earliestIndex > 0) {
        parts.push({ text: remaining.slice(0, earliestIndex), isKeyword: false });
      }
      parts.push({
        text: remaining.slice(earliestIndex, earliestIndex + matchedKeyword.length),
        isKeyword: true,
      });
      remaining = remaining.slice(earliestIndex + matchedKeyword.length);
    } else {
      parts.push({ text: remaining, isKeyword: false });
      remaining = "";
    }
  }

  let keywordIdx = 0;

  return (
    <Tag ref={ref} className={className}>
      {parts.map((part, i) => {
        if (part.isKeyword) {
          const delay = keywordIdx * 0.15;
          keywordIdx++;
          return (
            <motion.span
              key={i}
              initial={{ color: "hsl(0 0% 65%)", textShadow: "none" }}
              animate={
                isInView
                  ? {
                      color: "hsl(263 85% 72%)",
                      textShadow: [
                        "0 0 0px transparent",
                        "0 0 20px hsl(263 85% 58% / 0.6), 0 0 40px hsl(263 85% 58% / 0.3)",
                        "0 0 12px hsl(263 85% 58% / 0.4), 0 0 24px hsl(263 85% 58% / 0.15)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 0.8, delay: 0.3 + delay, ease: "easeOut" }}
              className="font-semibold"
            >
              {part.text}
            </motion.span>
          );
        }
        return <span key={i}>{part.text}</span>;
      })}
    </Tag>
  );
}
