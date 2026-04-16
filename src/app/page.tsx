"use client";

import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
