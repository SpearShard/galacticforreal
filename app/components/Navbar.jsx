"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 20);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const blobRef = useRef(null);
  const linksRef = useRef([]);

  // lock background scroll

  const closeMenu = () => {

    gsap.to(linksRef.current, {
      opacity: 0,
      duration: 0.15
    });

    gsap.to(blobRef.current, {
      width: 46,
      height: 46,
      borderRadius: 999,
      duration: 0.35,
      ease: "power3.inOut"
    });

    setOpen(false);
  };

  const toggleMenu = () => {

    if (!open) {

      // expand blob
      gsap.to(blobRef.current, {
        width: 300,
        height: 420,
        borderRadius: 24,
        duration: 0.45,
        ease: "power3.out"
      });

      // animate links
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          delay: 0.2,
          duration: 0.3
        }
      );

    } else {

      // hide links
      gsap.to(linksRef.current, {
        opacity: 0,
        duration: 0.15
      });

      // collapse blob
      gsap.to(blobRef.current, {
        width: 46,
        height: 46,
        borderRadius: 999,
        duration: 0.35,
        ease: "power3.inOut"
      });

    }

    setOpen(!open);
  };

  const links = [
    { name: "Home", href: "/" },
    { name: "Upload", href: "/upload" },
    { name: "Careers", href: "/careers" },
    { name: "Training", href: "/training" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <>
      {/* LOGO */}
      <div className="fixed top-6 left-6 z-50">
  <div className="relative">

    {/* Blur layer */}
    <div
  className={`absolute bg-black/20 inset-0 rounded-lg transition-opacity duration-300
  ${scrolled ? "opacity-100 backdrop-blur-[6px]" : "opacity-0"}`}
></div>

    {/* Logo */}
    <Link href="/" className="relative block px-2 py-1">
      <img src="/navbar/logo.svg" className="h-9 w-auto" />
    </Link>

  </div>
</div>

      {/* MENU BUTTON + BLOB */}
      <div className="fixed top-6 right-6 z-50">

        <div
          ref={blobRef}
          className="relative w-11 h-11 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full overflow-hidden flex flex-col"
        >

          {/* BUTTON */}
          <button
            onClick={toggleMenu}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10 text-lg"
          >
            {open ? "✕" : "☰"}
          </button>

          {/* MENU CONTENT */}
          <div className="flex flex-col h-full pt-16 px-10 pb-6 justify-between">

            {/* LINKS */}
            <div className="flex flex-col gap-5 text-lg font-neueMontreal">

              {links.map((link, i) => (
                <Link
                  key={i}
                  ref={(el) => (linksRef.current[i] = el)}
                  href={link.href}
                  className="opacity-0 text-white/80 hover:text-white transition"
                  onClick={closeMenu}                >
                  {link.name}
                </Link>
              ))}

            </div>

            {/* CTA */}
            <div className="border-t border-white/10 pt-5">

              <Link
                ref={(el) => (linksRef.current[links.length] = el)}
                href="/contact"
                onClick={closeMenu}
                className="opacity-0 block text-center bg-primary hover:bg-secondary px-4 py-3 rounded-full text-sm font-monumentExtended"
              >
                Get a Quote
              </Link>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}