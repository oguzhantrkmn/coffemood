"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sitenin gerçek hissiyatına uygun biraz daha yavaş ve lüks bir giriş
    const timer = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#0A1C14]"
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col items-center justify-center overflow-hidden">
            <motion.h1
              className="text-6xl md:text-8xl font-light tracking-[0.15em] text-[#FAF6F0]"
              style={{ fontFamily: "var(--font-display)" }}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            >
              MOOD
            </motion.h1>
            <motion.div
              className="h-[1px] bg-[#C5A059] mt-6"
              initial={{ width: 0 }}
              animate={{ width: "80%" }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
            />
            <motion.p
              className="text-xs md:text-sm tracking-[0.4em] text-[#C5A059] mt-6 uppercase font-light"
              style={{ fontFamily: "var(--font-sans)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              C a f e & F o o d
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
