import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useReveal } from "@/hooks/use-reveal";

interface OSWindowProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export function OSWindow({ children, title = "infinall.ai", className = "" }: OSWindowProps) {
  const { ref, isInView } = useReveal(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`os-window video-glow ${className}`}
    >
      <div className="os-window-titlebar">
        <div className="os-window-dot bg-destructive/60" />
        <div className="os-window-dot bg-accent/60" />
        <div className="os-window-dot bg-cyan/60" />
        <span className="text-xs text-muted-foreground font-mono ml-2">{title}</span>
      </div>
      <div className="relative">{children}</div>
    </motion.div>
  );
}
