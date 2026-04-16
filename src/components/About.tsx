"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section id="about" ref={sectionRef} className="relative py-40 md:py-52 px-8 md:px-16 overflow-hidden bg-[#0A1C14] flex flex-col items-center">
      {/* İnce dikey arka plan çizgileri */}
      <div className="absolute inset-0 flex justify-evenly pointer-events-none opacity-[0.03]">
        <div className="w-[1px] h-full bg-[#FAF6F0]" />
        <div className="w-[1px] h-full bg-[#FAF6F0]" />
        <div className="w-[1px] h-full bg-[#FAF6F0]" />
        <div className="w-[1px] h-full bg-[#FAF6F0]" />
        <div className="w-[1px] h-full bg-[#FAF6F0]" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center">
        {/* Ortalanmış Başlık Bölümü */}
        <div className="flex flex-col items-center text-center mb-24 w-full" ref={textRef}>
          <motion.div
            className="flex items-center gap-4 mb-8 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="w-12 h-[1px] bg-[#C5A059]" />
            <span className="text-xs tracking-[0.3em] text-[#C5A059] uppercase font-light" style={{ fontFamily: "var(--font-sans)" }}>
              Bizim Hikayemiz
            </span>
            <div className="w-12 h-[1px] bg-[#C5A059]" />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-light leading-[1.1] text-[#FAF6F0] mb-12 text-center"
            style={{ fontFamily: "var(--font-display)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          >
            Bir Fincan <br />
            <span className="italic text-[#C5A059]">Sanat</span>
          </motion.h2>

          <motion.div
            className="space-y-8 max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p className="text-sm md:text-base text-[#FAF6F0]/80 font-light leading-loose" style={{ fontFamily: "var(--font-sans)" }}>
              Çerkezköy&apos;ün kalbinde, modern ve rafine tasarımıyla Mood Coffee & Food, kahve tutkunları için eşsiz bir deneyim sunuyor. Özenle seçilmiş yüksek kaliteli kahve çekirdekleri, uzman baristalarımızın ellerinde adeta bir sanat eserine dönüşüyor.
            </p>
            <p className="text-sm md:text-base text-[#FAF6F0]/80 font-light leading-loose" style={{ fontFamily: "var(--font-sans)" }}>
              Mekanımız, hem dingin bir çalışma ortamı hem de sevdiklerinizle keyifli vakit geçirebileceğiniz lüks ve zarif bir atmosfer vadediyor. Instagram&apos;a değer anlar burada başlar.
            </p>
          </motion.div>
        </div>

        {/* Resimler ve İstatistikler - Geniş Boşluklarla (Spacing) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center w-full mt-10">
          {/* Sol - Resimler */}
          <div className="lg:col-span-8 relative h-[500px] md:h-[700px] w-full flex justify-center">
            <motion.div
              className="absolute top-0 right-10 md:right-20 w-[65%] h-[75%] overflow-hidden"
              style={{ y: y1 }}
            >
              <Image
                src="/images/image2.png"
                alt="Cafe Interior"
                fill
                className="object-cover transition-transform duration-[20s] hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#0A1C14]/10 mix-blend-multiply" />
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-10 md:left-20 w-[50%] h-[60%] border-8 border-[#0A1C14] overflow-hidden shadow-2xl"
              style={{ y: y2 }}
            >
              <Image
                src="/images/11.png"
                alt="Coffee Detail"
                fill
                className="object-cover transition-transform duration-[20s] hover:scale-110"
              />
            </motion.div>
          </div>

          {/* Sağ - İstatistikler */}
          <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-start gap-16 mt-10 lg:mt-0">
            {[
              { number: "50+", label: "Özel İçecek" },
              { number: "4.8", label: "Google Puan" },
              { number: "10K+", label: "Mutlu Ziyaretçi" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.2, duration: 0.8 }}
                className="flex flex-col gap-3 text-center lg:text-left"
              >
                <div
                  className="text-5xl md:text-6xl font-light text-[#C5A059]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.number}
                </div>
                <div className="text-xs tracking-[0.3em] text-[#FAF6F0]/60 uppercase" style={{ fontFamily: "var(--font-sans)" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
