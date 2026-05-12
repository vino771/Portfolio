"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React", level: "Expert" },
  { name: "Next.js", level: "Expert" },
  { name: "GSAP", level: "Advanced" },
  { name: "Python", level: "Advanced" },
  { name: "IoT", level: "Advanced" },
  { name: "Blender", level: "Intermediate" },
  { name: "UI/UX", level: "Advanced" },
  { name: "Three.js", level: "Intermediate" },
];

export default function Skills() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Capabilities</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">Skillset & Tools</h3>
          </div>
          <p className="text-secondary max-w-sm text-lg">
            A combination of hardware expertise and modern software engineering.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ 
                y: -10, 
                backgroundColor: "rgba(191, 255, 0, 0.05)",
                borderColor: "rgba(191, 255, 0, 0.3)"
              }}
              className="glass p-8 rounded-2xl border-white/5 flex flex-col items-center justify-center text-center group transition-colors duration-500"
            >
              <div className="w-12 h-12 mb-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent transition-colors duration-500">
                <div className="w-2 h-2 bg-white group-hover:bg-accent rounded-full transition-colors" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold mb-2">{skill.name}</h4>
              <p className="text-xs font-mono text-secondary uppercase tracking-[0.2em]">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
         <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[150px]" />
      </div>
    </section>
  );
}
