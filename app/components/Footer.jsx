"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Linkedin, Twitter, Instagram, Youtube,
  Mail, MapPin, Phone, Globe, ArrowRight,
  Sparkles, Send, Github, MessageSquare
} from "lucide-react";

// --- MAGNETIC COMPONENT ---
const MagneticElement = ({ children, distance = 0.5 }) => {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    const moveX = (clientX - centerX) * distance
    const moveY = (clientY - centerY) * distance
    setPosition({ x: moveX, y: moveY })
  }

  const reset = () => setPosition({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  )
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const textParallax = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const glowOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 0.4]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubscribeStatus("error");
      return;
    }
    setSubscribeStatus("success");
    setEmail("");
    setTimeout(() => setSubscribeStatus(null), 3000);
  };

  const FOOTER_LINKS = [
    { name: "Home", href: "/" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "Resources", href: "/resources" },
    { name: "About Us", href: "/about" },
    { name: "The Team", href: "/team" },
    { name: "Contact", href: "/contact" }
  ];

  const SOCIALS = [
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { Icon: Youtube, href: "https://youtube.com", label: "YouTube" }
  ];

  return (
    <footer
      ref={containerRef}
      className="relative bg-[#050505] pt-32 pb-12 overflow-hidden text-white selection:bg-red-500 selection:text-white"
    >
      {/* --- BACKGROUND GIANT TYPOGRAPHY --- */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden opacity-10 select-none">
        <motion.h2
          style={{ x: textParallax }}
          className="text-[30vw] font-['test'] leading-none whitespace-nowrap bg-gradient-to-r from-red-600 via-white to-blue-600 bg-clip-text text-transparent"
        >
          GALACTIC 3D
        </motion.h2>
      </div>

      {/* --- AMBIENT GLOWS --- */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute -bottom-1/2 -left-1/4 h-[100%] w-[100%] rounded-full bg-red-600/20 blur-[150px] pointer-events-none"
      />
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute -bottom-1/2 -right-1/4 h-[100%] w-[100%] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none"
      />

      <div className="container relative z-10 mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">

          {/* LEFT: Branding & About */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-4xl font-['test'] tracking-tighter mb-4">
                GALACTIC<span className="text-red-500">3D</span>
              </h3>
              <p className="text-lg font-['scrib'] text-white/50 max-w-sm leading-relaxed">
                Shaping the infinite frontier of additive manufacturing. Precision meets imagination in every layer.
              </p>
            </motion.div>

            <div className="flex gap-4">
              {SOCIALS.map(({ Icon, href, label }, i) => (
                <MagneticElement key={i} distance={0.3}>
                  <Link
                    href={href}
                    target="_blank"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white/50 transition-all hover:border-red-500 hover:text-white hover:bg-white/10"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                </MagneticElement>
              ))}
            </div>
          </div>

          {/* MIDDLE: Links - Floating Glass Column */}
          <div className="lg:col-span-3">
            <div className="rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-3xl p-8 h-full">
              <h4 className="text-xs uppercase tracking-[0.3em] text-white/30 mb-8 font-['scrib']">Navigation</h4>
              <ul className="space-y-4">
                {FOOTER_LINKS.map((link, i) => (
                  <li key={i}>
                    <MagneticElement distance={0.2}>
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between text-xl font-['test'] text-white/60 hover:text-white transition-colors"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-red-500" />
                      </Link>
                    </MagneticElement>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: Newsletter & Contact */}
          <div className="lg:col-span-5 space-y-8">
            {/* Newsletter Glass Card */}
            <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl p-10 overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-4 opacity-10 transition-opacity group-hover:opacity-30">
                <Send className="h-24 w-24 -rotate-12" />
              </div>

              <h4 className="text-2xl font-['test'] mb-4">Stay Synchronized</h4>
              <p className="text-white/40 mb-8 font-['scrib']">Receive surgical-grade updates on our latest breakthroughs.</p>

              <form onSubmit={handleSubscribe} className="relative">
                <div className="relative flex items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER UNIVERSAL ID"
                    className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 font-['scrib'] text-sm focus:outline-none focus:border-red-500/50 transition-colors uppercase tracking-widest placeholder:text-white/20"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 h-10 w-10 flex items-center justify-center rounded-full bg-red-600 text-white transition-transform hover:scale-110 active:scale-95"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
                {subscribeStatus === "success" && (
                  <p className="absolute -bottom-6 left-6 text-[10px] text-green-400 font-['scrib'] uppercase tracking-widest">Connection established</p>
                )}
              </form>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl border border-white/5 bg-white/5 flex items-start gap-4 group hover:bg-white/10 transition-colors">
                <MapPin className="h-5 w-5 text-red-500 shrink-0 mt-1" />
                <div>
                  <h5 className="text-[10px] uppercase tracking-widest text-white/30 mb-2 font-['scrib']">Location</h5>
                  <p className="text-xs font-['scrib'] text-white/60 leading-relaxed">
                    Cambridge Institute, Bengaluru, Karnataka 560036
                  </p>
                </div>
              </div>
              <div className="p-6 rounded-3xl border border-white/5 bg-white/5 flex items-start gap-4 group hover:bg-white/10 transition-colors">
                <Mail className="h-5 w-5 text-blue-500 shrink-0 mt-1" />
                <div>
                  <h5 className="text-[10px] uppercase tracking-widest text-white/30 mb-2 font-['scrib']">Communications</h5>
                  <p className="text-xs font-['scrib'] text-white/60">aabid@galactic-3d.com</p>
                  <p className="text-[10px] font-['scrib'] text-white/40 mt-1">24/7 Response Units</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR: THE FINAL LINE --- */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-[10px] font-['scrib'] uppercase tracking-[0.2em] text-white/30">
              Systems Operational • &copy; {new Date().getFullYear()} Galactic 3D
            </p>
          </div>

          <div className="flex gap-8">
            {["Terms", "Privacy", "Artifacts"].map((item, i) => (
              <Link
                key={i}
                href={`/${item.toLowerCase()}`}
                className="text-[10px] font-['scrib'] uppercase tracking-widest text-white/30 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[10px] font-['scrib'] uppercase tracking-widest text-white/20">Design By</span>
            <div className="text-xs font-['test'] tracking-tighter transition-all hover:text-red-500 cursor-default">ANTIGRAVITY SYSTEMS</div>
          </div>
        </div>
      </div>

      {/* --- FOOTER DECORATION --- */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
    </footer>
  );
}
