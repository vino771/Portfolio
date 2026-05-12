"use client";

import { motion } from "framer-motion";
import { Send, Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-accent font-mono text-sm tracking-widest uppercase mb-6">Connect</h2>
            <h3 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8">
              LET'S BUILD THE <span className="text-secondary italic">FUTURE</span> TOGETHER.
            </h3>
            <p className="text-secondary text-xl mb-12 max-w-lg leading-relaxed">
              Have a groundbreaking project in mind or just want to say hi? 
              Drop me a message and I'll get back to you within 24 hours.
            </p>

            <div className="flex gap-6">
              {[
                { Icon: Github, href: "https://github.com/vino771" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/kannan-n-74512b340?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
                { Icon: Twitter, href: "https://twitter.com/kannan_vino" },
                { Icon: Mail, href: "mailto:kvino4028@gmail.com" }
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-14 h-14 glass rounded-full flex items-center justify-center text-white hover:text-accent hover:border-accent/50 transition-all duration-300"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl border-white/10"
          >
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-secondary ml-1">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  suppressHydrationWarning
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-secondary ml-1">Gmail</label>
                <input
                  type="email"
                  placeholder="[GMAIL_ADDRESS]"
                  suppressHydrationWarning
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-secondary ml-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 resize-none"
                />
              </div>
              
              <button 
                suppressHydrationWarning
                className="w-full py-5 bg-accent text-black font-bold uppercase tracking-[0.2em] text-sm rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10 translate-x-1/3 translate-y-1/3" />
    </section>
  );
}
