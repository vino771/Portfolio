"use client";

import { motion } from "framer-motion";

const words = [
  "AI", "UI/UX", "WEBGL", "GSAP", "IOT", "FUTURE", "DESIGN", "INTERACTIVE",
  "AI", "UI/UX", "WEBGL", "GSAP", "IOT", "FUTURE", "DESIGN", "INTERACTIVE"
];

export default function Marquee() {
  return (
    <div className="py-20 bg-white/5 overflow-hidden whitespace-nowrap border-y border-white/10">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-20 items-center"
      >
        {words.map((word, i) => (
          <span
            key={i}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent stroke-white/20 stroke-1 hover:text-accent hover:stroke-accent transition-colors duration-500"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
          >
            {word} •
          </span>
        ))}
      </motion.div>
    </div>
  );
}
