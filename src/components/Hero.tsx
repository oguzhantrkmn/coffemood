"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden w-full"
    >
      {/* Paralaks Arka Plan */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y, scale, opacity }}
      >
        <Image
          src="/images/image1.png"
          alt="Cafe Interior"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1C14]/60 via-[#0A1C14]/70 to-[#0A1C14]" />
      </motion.div>

      {/* İçerik */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-5xl mt-20 mx-auto">
        <div className="overflow-hidden flex justify-center mb-8">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 2.8, ease: [0.76, 0, 0.24, 1] }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-[1px] bg-[#C5A059]" />
            <span className="text-xs md:text-sm tracking-[0.4em] text-[#C5A059] uppercase font-light" style={{ fontFamily: "var(--font-sans)" }}>
              Çerkezköy&apos;ün İncisi
            </span>
            <div className="w-12 h-[1px] bg-[#C5A059]" />
          </motion.div>
        </div>

        <div className="overflow-hidden py-2 w-full flex justify-center">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-[8rem] font-light tracking-[0.05em] leading-[1.1] text-[#FAF6F0] text-center"
            style={{ fontFamily: "var(--font-display)" }}
            initial={{ y: "120%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.4,
              delay: 3.0,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            IN THE MOOD <br />
            <span className="italic text-[#C5A059]">for</span> COFFEE
          </motion.h1>
        </div>

        <motion.p
          className="mt-10 text-base md:text-lg text-[#FAF6F0]/80 max-w-2xl mx-auto font-light tracking-wide leading-relaxed text-center"
          style={{ fontFamily: "var(--font-sans)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.4 }}
        >
          Seçkin kahve çekirdekleri, eşsiz tatlar ve gününüze ilham verecek lüks bir atmosfer.
        </motion.p>

        <motion.div
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.6 }}
        >
          <button
            onClick={() => handleScroll("#menu")}
            className="group relative px-12 py-5 bg-transparent border border-[#C5A059] text-[#C5A059] text-sm tracking-[0.2em] uppercase overflow-hidden transition-all duration-500"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <span className="relative z-10 group-hover:text-[#0A1C14] transition-colors duration-500">
              Menüyü Keşfet
            </span>
            <div className="absolute inset-0 bg-[#C5A059] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
          </button>
        </motion.div>
      </div>

      {/* Aşağı Kaydır İşareti */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2, duration: 1 }}
      >
        <span className="text-[10px] tracking-[0.3em] text-[#FAF6F0]/50 uppercase writing-vertical" style={{ writingMode: "vertical-rl", fontFamily: "var(--font-sans)" }}>
          Aşağı Kaydır
        </span>
        <motion.div
          className="w-[1px] h-16 bg-gradient-to-b from-[#C5A059] to-transparent"
          animate={{
            scaleY: [0, 1, 0],
            transformOrigin: ["top", "top", "bottom"],
          }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
