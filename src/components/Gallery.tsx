"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/images/image3.png",
    alt: "Ambiyans",
    span: "col-span-12 md:col-span-8 row-span-2",
  },
  {
    src: "/images/12.png",
    alt: "Özel Tasarım",
    span: "col-span-6 md:col-span-4 row-span-1",
  },
  {
    src: "/images/image4.png",
    alt: "Lezzet",
    span: "col-span-6 md:col-span-4 row-span-1",
  },
  {
    src: "/images/13.png",
    alt: "Köşe",
    span: "col-span-12 md:col-span-4 row-span-2",
  },
  {
    src: "/images/image8.png",
    alt: "Atmosfer",
    span: "col-span-6 md:col-span-4 row-span-1",
  },
  {
    src: "/images/14.png",
    alt: "Detaylar",
    span: "col-span-6 md:col-span-4 row-span-1",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className="relative py-32 md:py-48 px-8 md:px-16 bg-[#0A1C14] flex flex-col items-center" ref={ref}>
        <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center">
          
          <motion.div
            className="flex flex-col items-center text-center mb-24 w-full"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-center gap-4 mb-8 justify-center">
              <div className="w-12 h-[1px] bg-[#C5A059]" />
              <span className="text-xs tracking-[0.3em] text-[#C5A059] uppercase font-light" style={{ fontFamily: "var(--font-sans)" }}>
                Atmosferi Hissedin
              </span>
              <div className="w-12 h-[1px] bg-[#C5A059]" />
            </div>
            
            <h2
              className="text-5xl md:text-7xl font-light text-[#FAF6F0] mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Galeri
            </h2>
            
            <p className="text-base text-[#FAF6F0]/70 max-w-xl font-light leading-relaxed text-center" style={{ fontFamily: "var(--font-sans)" }}>
              Her detayı özenle düşünülmüş, lüks ve konforun birleştiği mekanımızdan kareler.
            </p>
          </motion.div>

          {/* Editorial Asimetrik Grid */}
          <div className="grid grid-cols-12 auto-rows-[300px] md:auto-rows-[450px] gap-6 md:gap-10 w-full">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                className={`relative overflow-hidden cursor-pointer group ${img.span}`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 1, ease: [0.76, 0, 0.24, 1] }}
                onClick={() => setLightbox(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                />
                
                {/* Lüks Siyah Hover Efekti */}
                <div className="absolute inset-0 bg-[#0A1C14]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out mix-blend-multiply" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <span
                    className="text-3xl md:text-4xl font-light tracking-[0.1em] text-[#FAF6F0]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {img.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[200] bg-[#0A1C14]/95 flex items-center justify-center p-8 md:p-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative w-full h-full max-w-[1200px]"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            >
              <Image
                src={galleryImages[lightbox].src}
                alt={galleryImages[lightbox].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
            <button
              className="absolute top-10 right-10 text-[#FAF6F0]/50 text-xl font-light hover:text-[#C5A059] transition-colors duration-300"
              onClick={() => setLightbox(null)}
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Kapat
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
