"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Rocket } from "lucide-react";

const stats = [
  { icon: Cpu, label: "Projects Built", value: "20+" },
  { icon: Globe, label: "Hackathons", value: "5" },
  { icon: Rocket, label: "Experience", value: "2 Years" },
];

export default function About() {
  return (
    <section id="about" className="py-32 container mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square bg-gradient-to-tr from-accent/20 to-purple-500/20 rounded-2xl overflow-hidden glass p-1">
            <div className="w-full h-full bg-[#050505] rounded-xl overflow-hidden relative group">
              <img 
                src="/profile.jpeg" 
                alt="Kannan Vino" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 blur-[100px] -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-accent font-mono text-sm tracking-widest uppercase mb-6">
            About Me
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
            Bridging the gap between <span className="text-secondary italic">Engineering</span> and <span className="text-white underline decoration-accent">Creative Design</span>.
          </h3>
          <p className="text-secondary text-lg md:text-xl leading-relaxed mb-12">
            I am a CSE Engineering student, Web developer, and UI/UX designer who loves building modern and interactive digital experiences. I create smooth parallax websites, animated interfaces, and user-friendly designs that feel clean, engaging, and visually impressive. My work also includes web development and creative frontend experiences using modern technologies. I enjoy combining design and technology to create websites and applications that not only work well but also look beautiful and feel smooth to use.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-xl border-white/5"
              >
                <stat.icon className="text-accent mb-4" size={24} />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-secondary uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
