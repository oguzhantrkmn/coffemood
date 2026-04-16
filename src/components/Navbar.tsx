"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { name: "Ana Sayfa", href: "#hero" },
  { name: "Hikayemiz", href: "#about" },
  { name: "Menü", href: "#menu" },
  { name: "Atmosfer", href: "#gallery" },
  { name: "İletişim", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-in-out flex justify-center ${
          scrolled
            ? "bg-[#0A1C14]/90 backdrop-blur-xl border-b border-[#C5A059]/10 py-4"
            : "bg-transparent py-8"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, delay: 2.6, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="w-full max-w-[1400px] px-8 md:px-16 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#hero");
            }}
            className="flex items-center gap-3 leading-none"
          >
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-[#C5A059]/30">
              <Image
                src="/images/logo.png"
                alt="Cafe Mood Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span
                className="text-2xl md:text-3xl font-light tracking-[0.15em] text-[#FAF6F0]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                MOOD
              </span>
              <span
                className="text-[8px] md:text-[9px] tracking-[0.35em] text-[#C5A059] uppercase mt-1"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Cafe & Food
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className="relative group text-sm tracking-[0.2em] text-[#FAF6F0]/80 transition-colors duration-500 uppercase font-light hover:text-[#C5A059]"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-500 ease-out group-hover:w-full" />
              </a>
            ))}
          </div>

          <button
            className="md:hidden flex flex-col gap-[6px] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü"
          >
            <motion.span
              className="block w-7 h-[1px] bg-[#C5A059]"
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4 }}
            />
            <motion.span
              className="block w-7 h-[1px] bg-[#C5A059]"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
            <motion.span
              className="block w-7 h-[1px] bg-[#C5A059]"
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Tam Ekran Lüks Mobil Menü */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[99] bg-[#0A1C14] flex flex-col items-center justify-center gap-10"
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FAF6F0]/5 text-[20vw] font-bold whitespace-nowrap pointer-events-none" style={{ fontFamily: "var(--font-display)" }}>
              MOOD
            </div>
            
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className="relative text-3xl tracking-widest text-[#FAF6F0] hover:text-[#C5A059] transition-colors uppercase font-light"
                style={{ fontFamily: "var(--font-display)" }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
