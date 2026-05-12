"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Parallax website",
    description: "Creative and interactive scrollable website.",
    tech: ["Next.js", "Node", "react", "Three.js"],
    color: "#BFFF00",
    image: "/p1.jpg",
  },
  {
    id: "02",
    title: "Floating Solar Dashboard",
    description: "Real-time monitoring and predictive analysis for floating solar farms with interactive 3D visualizations.",
    tech: ["Three.js", "GSAP", "MQTT", "React"],
    color: "#00E0FF",
    image: "/p2.jpg",
  },
  {
    id: "03",
    title: "DreamKeeper App",
    description: "A futuristic dream journal and analysis tool using neuro-linguistic programming and generative AI.",
    tech: ["React Native", "OpenAI", "Node.js"],
    color: "#A855F7",
    image: "/p3.jpg",
  },
  {
    id: "04",
    title: "Smart Shopping Cart",
    description: "Automated checkout system using computer vision and weight sensors for a seamless retail experience.",
    tech: ["OpenCV", "Raspberry Pi", "Firebase"],
    color: "#F97316",
    image: "/p4.jpg",
  },
  {
    id: "05",
    title: "Figma Designs",
    description: "Figma Designs.",
    tech: ["Figma"],
    color: "#EF4444",
    image: "/p5.jpg",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="py-32 bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <h2 className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Selected Work</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">Case Studies</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Side: Project List */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                onMouseEnter={() => setActiveProject(index)}
                className={`group cursor-pointer p-8 rounded-2xl transition-all duration-500 border-l-4 ${activeProject === index
                  ? "bg-white/5 border-accent"
                  : "border-transparent hover:bg-white/[0.02]"
                  }`}
              >
                <div className="flex items-center gap-6 mb-4">
                  <span className="text-secondary font-mono text-sm">{project.id}</span>
                  <h4 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${activeProject === index ? "text-accent" : "text-white"
                    }`}>
                    {project.title}
                  </h4>
                </div>

                <AnimatePresence>
                  {activeProject === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-secondary text-lg mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t) => (
                          <span key={t} className="px-3 py-1 bg-white/10 text-xs font-mono rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 text-white hover:text-accent transition-colors">
                          <Github size={18} />
                          <span className="text-xs font-bold uppercase tracking-widest">Code</span>
                        </button>
                        <button className="flex items-center gap-2 text-white hover:text-accent transition-colors">
                          <ExternalLink size={18} />
                          <span className="text-xs font-bold uppercase tracking-widest">Demo</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Sticky Preview */}
          <div className="sticky top-32 hidden lg:block">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden glass relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute inset-0"
                  style={{
                    backgroundColor: `${projects[activeProject].color}10`,
                  }}
                >
                  <div className="w-full h-full relative overflow-hidden">
                    <motion.img
                      key={`img-${activeProject}`}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      src={projects[activeProject].image}
                      alt={projects[activeProject].title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"
                    />

                    {/* Glowing Accent */}
                    <div
                      className="absolute -inset-20 blur-[100px] opacity-20 pointer-events-none"
                      style={{ backgroundColor: projects[activeProject].color }}
                    />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-10 left-10 text-xs font-mono text-white/20">PREVIEW_SYSTEM_V4.2</div>
                  <div className="absolute bottom-10 right-10 text-xs font-mono text-white/20">00:00:0{activeProject + 1} / RENDERING</div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
