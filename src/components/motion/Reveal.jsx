import React from "react";
import { motion, useReducedMotion } from "motion/react";

const offsetByDirection = {
  up: { x: 0, y: 54 },
  down: { x: 0, y: -54 },
  left: { x: 54, y: 0 },
  right: { x: -54, y: 0 },
};

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = false,
  amount = 0.18,
  distance,
  duration = 0.48,
}) {
  const shouldReduceMotion = useReducedMotion();
  const baseOffset = offsetByDirection[direction] ?? offsetByDirection.up;
  const resolvedDistance = distance ?? 54;
  const offset = {
    x: baseOffset.x === 0 ? 0 : Math.sign(baseOffset.x) * resolvedDistance,
    y: baseOffset.y === 0 ? 0 : Math.sign(baseOffset.y) * resolvedDistance,
  };

  return (
    <motion.div
      className={className}
      style={{ willChange: shouldReduceMotion ? "auto" : "transform, opacity" }}
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              x: offset.x,
              y: offset.y,
            }
      }
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              x: 0,
              y: 0,
            }
      }
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
