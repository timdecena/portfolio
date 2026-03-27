import React from "react";
import { motion, useReducedMotion } from "motion/react";

export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0,
  once = false,
  amount = 0.14,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: shouldReduceMotion
            ? {}
            : {
                staggerChildren: stagger,
                delayChildren,
              },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 44,
  duration = 0.42,
}) {
  const shouldReduceMotion = useReducedMotion();
  const axis =
    direction === "left" || direction === "right"
      ? { x: direction === "left" ? distance : -distance, y: 0 }
      : { x: 0, y: direction === "up" ? distance : -distance };

  return (
    <motion.div
      className={className}
      style={{ willChange: shouldReduceMotion ? "auto" : "transform, opacity" }}
      variants={{
        hidden: shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, x: axis.x, y: axis.y },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
      transition={{
        duration,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
