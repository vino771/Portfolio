"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <h2 className="text-2xl font-bold tracking-tighter mb-2">KANNAN VINO</h2>
          <p className="text-secondary text-sm font-mono tracking-widest uppercase">
            Creative Developer & CSE Engineer
          </p>
        </div>

        <div className="flex gap-8">
          {[
            { label: "GitHub", href: "https://github.com/vino771" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/kannan-n-74512b340?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
            { label: "Twitter", href: "https://twitter.com/kannan_vino" },
            { label: "Gmail", href: "mailto:kvino4028@gmail.com" }
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="text-secondary text-xs font-mono uppercase tracking-widest hover:text-accent transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="text-secondary text-xs font-mono uppercase tracking-widest">
          © {currentYear} • ALL RIGHTS RESERVED
        </div>
      </div>

      {/* Moving gradient background */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-20 left-0 w-full h-40 bg-gradient-to-t from-accent/20 to-transparent blur-3xl pointer-events-none"
      />
    </footer>
  );
}
