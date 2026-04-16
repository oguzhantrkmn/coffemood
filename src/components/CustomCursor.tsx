"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  
  // Outer ring
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Inner dot
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfigRing = { damping: 25, stiffness: 300, mass: 1 };
  const springConfigDot = { damping: 30, stiffness: 700, mass: 0.5 };
  
  const rx = useSpring(cursorX, springConfigRing);
  const ry = useSpring(cursorY, springConfigRing);
  
  const dx = useSpring(dotX, springConfigDot);
  const dy = useSpring(dotY, springConfigDot);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    setVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20); // 40px/2
      cursorY.set(e.clientY - 20);
      dotX.set(e.clientX - 3);   // 6px/2
      dotY.set(e.clientY - 3);
    };

    const handleHoverStart = () => setHovering(true);
    const handleHoverEnd = () => setHovering(false);

    window.addEventListener("mousemove", moveCursor);

    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, .cursor-hover"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [cursorX, cursorY, dotX, dotY]);

  if (!visible) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-[#C5A059] rounded-full pointer-events-none z-[10001] mix-blend-screen"
        style={{ x: rx, y: ry }}
        animate={{
          scale: hovering ? 1.5 : 1,
          opacity: hovering ? 0.3 : 0.6,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#C5A059] rounded-full pointer-events-none z-[10001] mix-blend-screen"
        style={{ x: dx, y: dy }}
        animate={{
          scale: hovering ? 0 : 1,
          opacity: hovering ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
