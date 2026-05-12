"use client";

import dynamic from "next/dynamic";
import Loader from "@/components/Layout/Loader";
import Navbar from "@/components/Navigation/Navbar";
import Hero from "@/components/Sections/Hero";
import Marquee from "@/components/Sections/Marquee";
import About from "@/components/Sections/About";
import Projects from "@/components/Sections/Projects";
import Skills from "@/components/Sections/Skills";
import Experience from "@/components/Sections/Experience";
import Contact from "@/components/Sections/Contact";
import Footer from "@/components/Sections/Footer";
import SmoothScroll from "@/components/Layout/SmoothScroll";
import CustomCursor from "@/components/Layout/CustomCursor";

const HorizontalScroll = dynamic(() => import("@/components/Sections/HorizontalScroll"), {
  ssr: false,
});

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#050505] text-white selection:bg-accent selection:text-black">
        <Loader />
        <CustomCursor />
        <Navbar />
        
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <HorizontalScroll />
        <Skills />
        <Experience />
        <Contact />
        
        <Footer />
      </main>
    </SmoothScroll>
  );
}
