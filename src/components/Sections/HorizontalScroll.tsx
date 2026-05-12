"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const extraProjects = [
  { title: "Drone Smell Detection", desc: "Environmental monitoring via autonomous UAVs." },
  { title: "Smart Bed System", desc: "AI-integrated health and sleep optimization." },
  { title: "Gesture UI", desc: "Touchless interface for medical displays." },
  { title: "Solar Tracker", desc: "Dual-axis precise light harvesting system." },
];

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen w-[400vw] flex flex-row relative">
          <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#050505] p-20">
            <h2 className="text-7xl md:text-9xl font-bold tracking-tighter text-center">
              MORE <span className="text-accent italic">PROJECTS</span>
            </h2>
            <p className="mt-8 text-secondary font-mono tracking-widest uppercase">Scroll to explore</p>
          </div>
          
          {extraProjects.map((project, i) => (
            <div key={i} className="h-screen w-screen flex items-center justify-center p-10 md:p-20">
               <div className="w-full max-w-4xl glass rounded-3xl p-12 md:p-24 flex flex-col justify-center border-white/5 relative group">
                  <span className="text-accent font-mono text-xl mb-8">0{i + 6}</span>
                  <h3 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 group-hover:translate-x-4 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <p className="text-secondary text-xl md:text-2xl max-w-xl">
                    {project.desc}
                  </p>
                  
                  <div className="absolute top-10 right-10 w-20 h-20 border border-white/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full animate-ping" />
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
