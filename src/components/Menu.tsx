"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface MenuItem {
  name: string;
  desc?: string;
  price?: string;
}

interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: "sicak-kahveler",
    title: "Kahveler",
    items: [
      { name: "Americano", desc: "Zengin espresso ve sıcak suyun uyumu", price: "₺80" },
      { name: "Sütlü Americano", desc: "Americano ve taze süt", price: "₺85" },
      { name: "Espresso", desc: "Yoğun ve karakteristik", price: "₺60" },
      { name: "Double Espresso", desc: "İki kat yoğunluk", price: "₺75" },
      { name: "Mocha", desc: "Espresso, çikolata sos ve süt", price: "₺110" },
      { name: "White Chocolate Mocha", desc: "Beyaz çikolata tutkunlarına", price: "₺115" },
      { name: "Caramel Macchiato", desc: "Karamel şurubu, espresso ve süt", price: "₺110" },
      { name: "Cafe Latte", desc: "Espresso ve bol buharda ısıtılmış süt", price: "₺95" },
      { name: "Flat White", desc: "İnce kremalı yoğun kahve deneyimi", price: "₺100" },
      { name: "Cortado", desc: "Eşit oranda espresso ve sıcak süt", price: "₺90" },
    ],
  },
  {
    id: "turk-kahveleri",
    title: "Geleneksel",
    items: [
      { name: "Türk Kahvesi", desc: "Geleneksel lokum ve su eşliğinde", price: "₺65" },
      { name: "Duble Türk Kahvesi", desc: "Bol köpüklü, ekstra keyif", price: "₺85" },
      { name: "Damla Sakızlı", desc: "Ege esintili geleneksel lezzet", price: "₺70" },
      { name: "Menengiç Kahvesi", desc: "Kavrulmuş yabani fıstık ağacı meyvelerinden", price: "₺75" },
      { name: "Dibek Kahvesi", desc: "Taş dibekte dövülmüş yumuşak içim", price: "₺75" },
    ],
  },
  {
    id: "bitki-caylari",
    title: "Demlemeler",
    items: [
      { name: "Yeşil Çay", desc: "Taze antioksidan kaynağı", price: "₺70" },
      { name: "Ihlamur", desc: "Bal ve limon dilimiyle", price: "₺65" },
      { name: "Papatya", desc: "Rahatlatıcı doğal papatya özü", price: "₺65" },
      { name: "Ada Çayı", desc: "Taze demlenmiş şifa kaynağı", price: "₺65" },
      { name: "Kış Çayı", desc: "Özel baharat ve meyve karışımı", price: "₺75" },
      { name: "Beyaz Çay", desc: "Hafif ve zarif içim", price: "₺75" },
    ],
  },
];

export default function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("sicak-kahveler");

  const activeData = menuData.find((c) => c.id === activeCategory)!;

  return (
    <section id="menu" className="relative py-32 md:py-48 px-8 md:px-16 bg-[#0A1C14] border-t border-[#C5A059]/10 flex flex-col items-center" ref={ref}>
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Ortalanmış Başlık */}
        <motion.div
          className="text-center mb-24 w-full flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-[#C5A059]" />
            <span className="text-xs tracking-[0.3em] text-[#C5A059] uppercase font-light" style={{ fontFamily: "var(--font-sans)" }}>
              Özenle Seçilmiş
            </span>
            <div className="w-12 h-[1px] bg-[#C5A059]" />
          </div>
          <h2
            className="text-5xl md:text-7xl font-light text-[#FAF6F0] text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Lezzetlerimiz
          </h2>
        </motion.div>

        <div className="flex flex-col items-center w-full gap-20">
          {/* Üstte Ortalanmış Kategoriler */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 md:gap-16 w-full"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {menuData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative text-center group overflow-hidden ${
                  activeCategory === category.id ? "opacity-100" : "opacity-40 hover:opacity-70"
                } transition-opacity duration-500 pb-2`}
              >
                <h3
                  className="text-2xl md:text-3xl font-light text-[#FAF6F0] mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {category.title}
                </h3>
                <div
                  className={`h-[1px] bg-[#C5A059] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] absolute bottom-0 left-1/2 -translate-x-1/2 ${
                    activeCategory === category.id ? "w-full" : "w-0 group-hover:w-1/2"
                  }`}
                />
              </button>
            ))}
          </motion.div>

          {/* Menü Listesi (Ortalanmış ve Geniş) */}
          <motion.div
            key={activeCategory} // Anahtarı değiştirerek animasyonu tetikle
            className="w-full max-w-[900px] flex flex-col gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {activeData.items.map((item, i) => (
              <motion.div
                key={item.name}
                className="group flex flex-col items-center text-center px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              >
                <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-end gap-2 sm:gap-4 w-full mb-3">
                  <h4
                    className="text-2xl md:text-3xl font-light text-[#FAF6F0] group-hover:text-[#C5A059] transition-colors duration-500 shrink-0"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.name}
                  </h4>
                  
                  {/* Noktalı ayırıcı (Mobilde Gizli) */}
                  <div className="hidden sm:block flex-1 border-b border-dotted border-[#FAF6F0]/20 mb-2 group-hover:border-[#C5A059]/40 transition-colors duration-500 min-w-[50px]" />
                  
                  <span
                    className="text-lg md:text-xl text-[#C5A059] font-light shrink-0"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {item.price}
                  </span>
                </div>
                
                {item.desc && (
                  <p
                    className="text-sm md:text-base text-[#FAF6F0]/60 font-light tracking-wide max-w-lg"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {item.desc}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
