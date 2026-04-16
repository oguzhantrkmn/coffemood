"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const socialLinks = [
  { 
    name: "Instagram", 
    href: "https://instagram.com/cafemood",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    )
  },
  { 
    name: "Facebook", 
    href: "https://facebook.com/cafemood",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  },
  { 
    name: "Twitter", 
    href: "https://twitter.com/cafemood",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    )
  },
];

export default function Footer() {
  return (
    <footer className="relative py-20 px-8 md:px-16 bg-[#0A1C14] border-t border-[#FAF6F0]/5 overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* En Üst - Dev Logo */}
        <motion.div
          className="mb-16 flex flex-col items-center"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full overflow-hidden border-2 border-[#C5A059]/40 shadow-[0_0_30px_rgba(197,160,89,0.1)]">
            <Image
              src="/images/logo.png"
              alt="Cafe Mood Logo"
              fill
              className="object-cover"
            />
          </div>
          <h2
            className="text-4xl md:text-5xl font-light tracking-[0.2em] text-[#FAF6F0] text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            MOOD
          </h2>
          <div className="flex items-center gap-6 mt-4">
            <div className="w-16 h-[1px] bg-[#C5A059]" />
            <span
              className="text-[10px] tracking-[0.4em] text-[#C5A059] uppercase font-light text-center"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Cafe & Food
            </span>
            <div className="w-16 h-[1px] bg-[#C5A059]" />
          </div>
        </motion.div>

        {/* Sosyal Medya İkonları */}
        <div className="flex justify-center items-center gap-10 mb-24 w-full">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="relative group text-[#FAF6F0]/60 hover:text-[#C5A059] transition-all duration-500 cursor-hover"
            >
              <div className="transform group-hover:-translate-y-1 transition-transform duration-500">
                {link.icon}
              </div>
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.2em] text-[#C5A059] uppercase font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ fontFamily: "var(--font-sans)" }}>
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* Alt Sınır Çizgisi */}
        <div className="w-full max-w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent mb-10" />

        {/* Telif Hakkı ve Detaylar */}
        <div className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center gap-6 text-[10px] tracking-[0.2em] text-[#FAF6F0]/30 font-light uppercase text-center" style={{ fontFamily: "var(--font-sans)" }}>
          <span className="md:w-1/3 md:text-left">© 2026 MOOD CAFE & FOOD</span>
          <span className="md:w-1/3 text-[#C5A059]/60">TÜM HAKLARI SAKLIDIR</span>
          <span className="md:w-1/3 md:text-right">Premium Experience in Çerkezköy</span>
        </div>
        
      </div>
    </footer>
  );
}
