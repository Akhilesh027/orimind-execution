import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useReveal } from "@/hooks/use-reveal";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  index?: number;
  direction?: "up" | "left" | "right";
}

const directionMap = {
  up: { x: 0, y: 60 },
  left: { x: -60, y: 0 },
  right: { x: 60, y: 0 },
};

export function StaggerReveal({
  children,
  className,
  index = 0,
  direction = "up",
}: StaggerRevealProps) {
  const { ref, isInView } = useReveal(0.1);
  const offset = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: offset.x, y: offset.y }
      }
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
