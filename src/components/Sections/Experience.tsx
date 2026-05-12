"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "2026 - Present",
    role: "Freelance Creative Developer",
    company: "Fiverr",
    desc: "Building high-end interactive websites and 3D web experiences using GSAP and Three.js.",
  },
  {
    year: "2025 - 2026",
    role: "UI/UX designer",
    company: "Fiverr",
    desc: "Developing several Parallax and animated websites.",
  },
  {
    year: "2025 - 2026",
    role: "Iot based project",
    company: "TinkerCad & AutoCad",
    desc: "Designed interfaces for drone control systems and robot telemetry dashboards.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 container mx-auto px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Journey</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">Experience</h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center justify-between ${i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Content */}
                <div className="w-full md:w-[45%] glass p-8 rounded-2xl border-white/5 relative group hover:border-accent/30 transition-colors duration-500">
                  <span className="text-accent font-mono text-xs mb-2 block">{exp.year}</span>
                  <h4 className="text-2xl font-bold mb-1">{exp.role}</h4>
                  <p className="text-white/60 text-sm mb-4 font-medium uppercase tracking-widest">{exp.company}</p>
                  <p className="text-secondary leading-relaxed">{exp.desc}</p>

                  {/* Glowing dot for mobile */}
                  <div className="absolute top-8 -left-[45px] w-4 h-4 bg-accent rounded-full md:hidden" />
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-[#050505] z-10 hidden md:block" />

                {/* Empty space for alignment */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
