"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contactInfo = [
  {
    label: "Adres",
    value: "Gazi Osman Paşa, Akbaba Sk. No:10A, 59500 Çerkezköy/Tekirdağ",
    subValue: "59500 Çerkezköy/Tekirdağ",
    link: "https://www.google.com/maps/place/Cafe+Mood+%C3%87erkezk%C3%B6y/@41.2939864,27.9964629,18z/data=!4m15!1m8!3m7!1s0x14b5261fea385cc1:0xe91e7659d85558d9!2zR2F6aSBPc21hbiBQYcWfYSwgQWtiYWJhIFNrLiBubzoxMC9BLCA1OTUwMCDDh2Vya2V6a8O2eS9UZWtpcmRhxJ8!3b1!8m2!3d41.2945446!4d27.9965219!16s%2Fg%2F11wj0ygj70!3m5!1s0x14b527a03d1ac59d:0x91b8e2460d1112f0!8m2!3d41.2942661!4d27.9967861!16s%2Fg%2F11v08m0jb0?entry=ttu&g_ep=EgoyMDI2MDQxNC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    label: "Telefon",
    value: "0534 634 61 29",
    link: "tel:+905346346129",
  },
];

const hours = [
  { day: "Pazartesi - Cuma", time: "10:00 - 00:30" },
  { day: "Cumartesi - Pazar", time: "09:00 - 01:00" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 md:py-48 px-8 md:px-16 bg-[#0A1C14] border-t border-[#C5A059]/10 flex flex-col items-center" ref={ref}>
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Ortalanmış Başlık */}
        <motion.div
          className="flex flex-col items-center text-center mb-24 w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="w-12 h-[1px] bg-[#C5A059]" />
            <span className="text-xs tracking-[0.3em] text-[#C5A059] uppercase font-light" style={{ fontFamily: "var(--font-sans)" }}>
              Bizi Ziyaret Edin
            </span>
            <div className="w-12 h-[1px] bg-[#C5A059]" />
          </div>

          <h2
            className="text-5xl md:text-7xl font-light text-[#FAF6F0] leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Lokasyon & <br />
            <span className="italic text-[#C5A059]">İletişim</span>
          </h2>
        </motion.div>

        {/* Alt Kısım - İki Sütun */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 w-full items-center">
          
          {/* Sol - Harita (Küçültülmüş ve Doğru Embed) */}
          <motion.div
            className="lg:col-span-6 h-[400px] md:h-[500px] w-full relative group overflow-hidden border border-[#C5A059]/20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Lüks Gri/Yeşil Filtresi */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-[#0A1C14]/30 mix-blend-color group-hover:bg-transparent transition-colors duration-1000" />
            
            {/* Doğru Google Maps Embed Kodu */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.8519448897587!2d27.99411961565578!3d41.2942661792728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b527a03d1ac59d%3A0x91b8e2460d1112f0!2sCafe%20Mood%20%C3%87erkezk%C3%B6y!5e0!3m2!1str!2str!4v1714413155823!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) contrast(1.1) sepia(20%) hue-rotate(80deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cafe Mood Konum"
            />
          </motion.div>

          {/* Sağ - İletişim Bilgileri */}
          <motion.div
            className="lg:col-span-6 flex flex-col justify-center gap-12"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* İletişim Listesi */}
            <div className="space-y-10">
              {contactInfo.map((info) => (
                <div key={info.label} className="group border-b border-[#FAF6F0]/10 pb-6 hover:border-[#C5A059] transition-colors duration-500">
                  <a href={info.link} target={info.link.startsWith("http") ? "_blank" : undefined} rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined} className="flex flex-col gap-2">
                    <span className="text-xs tracking-[0.2em] text-[#C5A059] uppercase font-light" style={{ fontFamily: "var(--font-sans)" }}>
                      {info.label}
                    </span>
                    <span className="text-xl md:text-2xl font-light text-[#FAF6F0] group-hover:text-[#C5A059] transition-colors duration-500" style={{ fontFamily: "var(--font-display)" }}>
                      {info.value}
                    </span>
                    {info.subValue && (
                      <span className="text-base font-light text-[#FAF6F0]/60 group-hover:text-[#C5A059]/80 transition-colors duration-500" style={{ fontFamily: "var(--font-display)" }}>
                        {info.subValue}
                      </span>
                    )}
                  </a>
                </div>
              ))}
            </div>

            {/* Saatler */}
            <div className="pt-2 border-b border-[#FAF6F0]/10 pb-8 hover:border-[#C5A059] transition-colors duration-500 group">
              <h3 className="text-xs tracking-[0.2em] text-[#C5A059] uppercase font-light mb-6" style={{ fontFamily: "var(--font-sans)" }}>
                Çalışma Saatleri
              </h3>
              <div className="space-y-4">
                {hours.map((h) => (
                  <div key={h.day} className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-lg md:text-xl font-light text-[#FAF6F0] group-hover:text-[#FAF6F0] transition-colors duration-500 gap-1 sm:gap-0" style={{ fontFamily: "var(--font-display)" }}>
                    <span>{h.day}</span>
                    <span className="text-[#C5A059]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex justify-start">
              <a
                href="https://www.google.com/maps/place/Cafe+Mood+%C3%87erkezk%C3%B6y/@41.2939864,27.9964629,18z/data=!4m15!1m8!3m7!1s0x14b5261fea385cc1:0xe91e7659d85558d9!2zR2F6aSBPc21hbiBQYcWfYSwgQWtiYWJhIFNrLiBubzoxMC9BLCA1OTUwMCDDh2Vya2V6a8O2eS9UZWtpcmRhxJ8!3b1!8m2!3d41.2945446!4d27.9965219!16s%2Fg%2F11wj0ygj70!3m5!1s0x14b527a03d1ac59d:0x91b8e2460d1112f0!8m2!3d41.2942661!4d27.9967861!16s%2Fg%2F11v08m0jb0?entry=ttu&g_ep=EgoyMDI2MDQxNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-4 text-[#FAF6F0] py-2"
              >
                <span className="text-sm tracking-[0.3em] uppercase font-light" style={{ fontFamily: "var(--font-sans)" }}>Yol Tarifi Al</span>
                <div className="w-12 h-[1px] bg-[#FAF6F0] group-hover:w-24 group-hover:bg-[#C5A059] transition-all duration-500" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
