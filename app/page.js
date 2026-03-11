"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import {
  CheckCircleIcon,
  CursorArrowRaysIcon,
  CpuChipIcon,
  CubeTransparentIcon,
  LightBulbIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  Cog6ToothIcon,
  ArrowRightIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  TruckIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ImageCascadeGSAP from "../app/components/ImageCascadeGSAP";
import TeamCarousel from "../app/components/TeamCarousel";

import ServiceTabs from "../app/components/ServiceTabs";
import TechShowcase from "../app/components/TechShowcase";
import AdvancedProcess from "../app/components/AdvancedProcess";

gsap.registerPlugin(ScrollTrigger);



export default function Home() {
  const marketplaceImgs = [
    "https://images.unsplash.com/photo-1581090405962-9a28c1b1f7b3?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542567455-4f8b968d5d63?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581090707285-92c0f5c95c5b?q=80&w=1200&auto=format&fit=crop",
  ];

  const makeImages = (seed) => [
    `https://picsum.photos/seed/${seed}1/900/700`,
    `https://picsum.photos/seed/${seed}2/900/700`,
    `https://picsum.photos/seed/${seed}3/900/700`,
  ];

  const useCaseImgs = [
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581091014534-047f69f1f5ae?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581091215831-7b5e8d9a9a6b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581090406132-7b9a1d25d7f8?q=80&w=1200&auto=format&fit=crop",
  ];
  const [activeIndustry, setActiveIndustry] = useState(null);
  const industriesInfo = {
    Aerospace: {
      blurb:
        "Lightweight brackets, ducts, and tooling with documentation and process traceability for regulated programs. High-performance parts that meet stringent aerospace standards.",
    },
    Defence: {
      blurb:
        "Ruggedized parts and on-demand spares using engineering polymers and metals for mission-readiness. Custom solutions for defense applications with security and reliability.",
    },
    Medical: {
      blurb:
        "Patient-specific models, dental fixtures, surgical guides, and biocompatible components with validated workflows. FDA-compliant materials and processes for medical applications.",
    },
    Tooling: {
      blurb:
        "Custom jigs, fixtures, and production tools with rapid turnaround. Optimize your manufacturing process with additive tooling solutions that reduce costs and lead times.",
    },
    Automotive: {
      blurb:
        "Jigs, fixtures, and prototype housings enabling faster iteration and ergonomic improvements. From concept cars to production parts with advanced materials.",
    },
    "Oil & Gas": {
      blurb:
        "Flow components and heat-resistant parts with complex internal channels for demanding environments. Corrosion-resistant materials for harsh operating conditions.",
    },
  };
  const tech = [
    {
      id: "DMLS",
      title: "DMLS",
      subtitle: "Direct Metal Laser Sintering",
      color: "red",
      icon: "fa-atom",
      description:
        "High-precision metal printing for complex, strong, production-grade parts. Ideal for aerospace and engineering components.",
    },
    {
      id: "SLS",
      title: "SLS",
      subtitle: "Selective Laser Sintering",
      color: "blue",
      icon: "fa-cube",
      description:
        "Powder-based printing for durable nylon parts without support structures. Great for functional prototypes.",
    },
    {
      id: "FDM",
      title: "FDM",
      subtitle: "Fused Deposition Modeling",
      color: "green",
      icon: "fa-layer-group",
      description:
        "Cost-effective plastic printing for rapid prototyping and low-volume production.",
    },
  ];


  const videos = [
    "/galactic-bg.mp4",
    "/bharath.mp4",
  ];

  const [activeVideo, setActiveVideo] = useState(0);

  const [active, setActive] = useState(null);




  return (
    <div
      className="min-h-screen text-white relative overflow-hidden 
    // bg-gradient-to-br from-black via-[#0f0b0b] to-[#b91c1c] 
    "
    >
      {/* Hero Banner */}
      <section className=" relative min-h-screen bg-black text-white overflow-hidden ">

        {/* VIDEO STAGE */}
        <div className="absolute inset-0 ">
          <video
            key={activeVideo}
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={() => {
              setActiveVideo((prev) => (prev + 1) % videos.length);
            }}
          >
            <source src={videos[activeVideo]} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/55"></div>
        </div>


        {/* INDUSTRIAL FRAME */}
        <div className="absolute  inset-5 border border-white/10 pointer-events-none"></div>



        {/* ISO BADGE */}
        <div className="absolute bottom-10 right-10 z-20 flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full backdrop-blur-xl">

          <img src="/ios.webp" className="w-6 h-6" />

          <span className="text-xs tracking-widest text-white/80 font-['dena']">
            ISO CERTIFIED
          </span>

        </div>



        {/* TECHNOLOGY BAR */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">

          <span className="border border-white/20 rounded-full px-4 py-1 text-sm">
            Metal
          </span>

          <span className="border border-white/20 rounded-full px-4 py-1 text-sm">
            SLS
          </span>

          <span className="border border-white/20 rounded-full px-4 py-1 text-sm">
            FDM
          </span>

        </div>



        {/* HERO CONTENT PANEL */}
        <div className="absolute left-12 bottom-20 z-20 max-w-xl">

          <div className="text-xs tracking-widest text-red-300 uppercase font-['dena'] mb-4">
            Contract Manufacturing
          </div>

          <h1 className="font-['test'] text-[clamp(3rem,6vw,5.5rem)] leading-[0.95]">

            Engineering your
            <br />

            <span className="text-red-400">
              Concept to Creation
            </span>

          </h1>

          <p className="text-lg text-white/80 font-['scrib'] mt-6 mb-8">
            with Additive Manufacturing
          </p>

          <a
            href="/contact"
            className="inline-block bg-primary hover:bg-secondary px-7 py-3 rounded-md font-['dena']"
          >
            Get a Quote
          </a>

        </div>



        

      </section>

      <section className="relative py-36 bg-black text-white overflow-hidden">

        {/* ambient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-red-500/20 blur-[180px] rounded-full"></div>
          <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-blue-500/20 blur-[180px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-24">

            {/* LEFT CONTENT */}
            <div className="relative max-w-xl">

              {/* Section kicker */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-red-400"></div>
                <span className="text-sm uppercase tracking-wider text-red-300 font-medium">
                  Additive Manufacturing
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-6xl font-['test'] leading-[1.05] mb-8">
                Your One-Stop Destination
                <br />
                for Additive Manufacturing
              </h2>

              {/* Description */}
              <p className="text-gray-300 text-lg font-['scrib'] leading-relaxed mb-12">
                Galactic 3D is your one-stop destination for additive manufacturing
                services. As pioneers in the field, we bridge the gap to the future
                with cutting-edge technology and expert support. We offer customized,
                efficient, and high-precision solutions across industries, delivering
                unmatched performance and innovation with every project.
              </p>

              {/* Services container */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8">

                <h3 className="text-lg font-['dena'] text-red-300 mb-6">
                  Our services span across four key verticals
                </h3>

                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5 text-gray-300 font-['scrib']">

                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-red-400 mt-1" />
                    <span>Design, DFAM & Data Preparation</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-red-400 mt-1" />
                    <span>Contract Manufacturing & Part Printing</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-red-400 mt-1" />
                    <span>Training, Skill & Entrepreneurship Development</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-red-400 mt-1" />
                    <span>Capital Equipment Manufacturing</span>
                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="grid gap-10">

              {/* CARD 1 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 hover:border-red-400/40 transition">

                <CursorArrowRaysIcon className="w-10 h-10 text-red-400 mb-6" />

                <h3 className="text-2xl font-['dena'] mb-3">
                  Precision
                </h3>

                <p className="text-gray-300 font-['scrib']">
                  Delivering high-accuracy parts with rigorous testing and traceability at every step.
                </p>

              </div>

              {/* CARD 2 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 hover:border-blue-400/40 transition lg:ml-12">

                <LightBulbIcon className="w-10 h-10 text-blue-400 mb-6" />

                <h3 className="text-2xl font-['dena'] mb-3">
                  Innovation
                </h3>

                <p className="text-gray-300 font-['scrib']">
                  Leveraging cutting-edge additive manufacturing technology and expertise.
                </p>

              </div>

              {/* CARD 3 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 hover:border-green-400/40 transition">

                <GlobeAltIcon className="w-10 h-10 text-green-400 mb-6" />

                <h3 className="text-2xl font-['dena'] mb-3">
                  Sustainability
                </h3>

                <p className="text-gray-300 font-['scrib']">
                  Reducing waste and energy consumption through additive processes.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* Contract Manufacturing Offerings */}
      <section className="py-20 bg-gradient-to-b from-transparent to-red-950/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-['test'] mb-4">
              Transform Your Ideas into Reality
            </h2>
            <p className="text-gray-300 font-['scrib'] text-lg max-w-3xl mx-auto">
              Leveraging our cutting-edge additive manufacturing facilities, we
              deliver customized, high-performance parts with unmatched speed and
              precision.
            </p>
          </div>


          <ServiceTabs />

        </div>
      </section>

      {/* Industries We Serve */}
      {/* <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-['test'] mb-2">
            Industries We Serve
          </h2>
          <p className="text-gray-400 font-['scrib'] mb-6 ">
            We support mission-critical programs across regulated and
            high-performance sectors with material traceability, process
            documentation, and dimensional reports.
          </p>
          <div className="overflow-x-auto">
            <div className="flex font-['dena'] gap-6 min-w-max py-2">
              {[
                { label: "Aerospace", icon: "fa-plane" },
                { label: "Defence", icon: "fa-shield-halved" },
                { label: "Medical", icon: "fa-heart-pulse" },
                { label: "Tooling", icon: "fa-toolbox" },
                { label: "Automotive", icon: "fa-car" },
                { label: "Oil & Gas", icon: "fa-oil-well" },
              ].map(({ label, icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveIndustry(label)}
                  className={`shrink-0 flex flex-col items-center rounded-xl px-6 py-6 border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    activeIndustry === label
                      ? "bg-white/10 border-primary"
                      : "bg-dark-100/40 border-gray-800 hover:bg-white/5"
                  }`}
                  aria-pressed={activeIndustry === label}
                >
                  <div className="text-3xl mb-3">
                    <i className={`fa-solid ${icon}`} />
                  </div>
                  <span className="text-gray-200">{label}</span>
                </button>
              ))}
            </div>
            {activeIndustry && (
              <div className="mt-6 bg-white/5 border border-red-500/20 rounded-xl p-5 md:p-6 backdrop-blur animate-fadeIn">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-['dena'] mb-2">
                      {activeIndustry}
                    </h3>
                    <p className="text-gray-300 font-['scrib'] max-w-3xl">
                      {industriesInfo[activeIndustry]?.blurb}
                    </p>
                  </div>
                  <a
                    href="/industries"
                    className="self-start bg-primary hover:bg-secondary text-white font-monumentExtended px-4 py-2 rounded-md transition"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section> */}


      {/* Our Technologies */}
      <div className="container mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-['test'] mb-4">
            Advanced Technology
          </h2>
          <p className="text-gray-300 font-['scrib'] text-lg">
            We utilize state-of-the-art additive manufacturing processes.
          </p>
        </div>
        <TechShowcase />
      </div>



      {/* Training CTA Section */}
      {/* <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <video
            className="w-full h-full object-cover opacity-30"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source
              src="https://ik.imagekit.io/0s6dxbeae/EOS%20M290%20Metal%203D%20Printer.mp4?updatedAt=1756027916993"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-[#1a0f0f]/70 to-black/80"></div>

        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-6 bg-blue-500/10 border border-blue-500/30 rounded-sm px-6 py-2">
                <i className="fa-solid fa-graduation-cap text-blue-400" />
                <span className="text-sm  text-blue-300 tracking-widest uppercase">
                  Training & Development
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-['test'] mb-6 leading-tight">
                Build Your Future in
                <br />
                <span className="text-blue-400">Additive Manufacturing</span>
              </h2>
              <p className="text-gray-300 font-['scrib'] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
                From schools to institutions and industry professionals, we
                offer comprehensive training programs that combine hands-on
                experience with expert mentorship to prepare you for the future
                of manufacturing.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-sm p-6 backdrop-blur">
                <div className="text-3xl mb-4 text-center">
                  <i className="fa-solid fa-school text-blue-400" />
                </div>
                <h3 className="text-lg  mb-3 text-center">School Programs</h3>
                <p className="text-gray-400 font-['scrib'] text-sm text-center leading-relaxed">
                  STREAM-based learning modules introducing students to 3D
                  printing and design thinking from an early age.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-sm p-6 backdrop-blur">
                <div className="text-3xl mb-4 text-center">
                  <i className="fa-solid fa-building-columns text-purple-400" />
                </div>
                <h3 className="text-lg  mb-3 text-center">
                  Institution Programs
                </h3>
                <p className="text-gray-400 font-['scrib'] text-sm text-center leading-relaxed">
                  Comprehensive curriculum covering design basics to advanced
                  machine building for career-focused learning.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-sm p-6 backdrop-blur">
                <div className="text-3xl mb-4 text-center">
                  <i className="fa-solid fa-industry text-red-400" />
                </div>
                <h3 className="text-lg  mb-3 text-center">Industry Training</h3>
                <p className="text-gray-400 font-['scrib'] text-sm text-center leading-relaxed">
                  Expert-led programs for professionals covering design,
                  operations, and real-world AM implementation.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-sm p-8 backdrop-blur mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    30+
                  </div>
                  <p className="text-gray-300 font-['scrib'] text-sm">
                    Years of Combined Experience
                  </p>
                </div>
                <div>
                  <div className=" text-3xl font-bold text-blue-400 mb-2">
                    <Image
                      src="/eos.svg"
                      alt="Galactic"
                      width={100} height={100}
                    />
                  </div>
                  <p className="text-gray-300 font-['scrib'] text-sm">
                    Approved Training Partner
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    100%
                  </div>
                  <p className="text-gray-300 font-['scrib'] text-sm">
                    Hands-On Learning
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/training"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white  px-10 py-5 rounded-sm transition-all duration-300 shadow-xl hover:shadow-blue-500/50"
              >
                <span>Explore Training Programs</span>
                <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative py-28 overflow-hidden">

        {/* VIDEO BACKGROUND */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/video/training.mp4" type="video/mp4" />
          </video>
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

        <div className="container mx-auto px-6 max-w-6xl">

          {/* BENTO GRID */}
          <div className="grid md:grid-cols-4 auto-rows-[180px] gap-6">

            {/* HERO TILE */}
            <div className="col-span-4 md:col-span-2 row-span-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl p-8 flex flex-col justify-center hover:bg-white/10 transition">

              <div className="inline-flex items-center gap-3 mb-6 bg-blue-500/10 border border-blue-500/30 rounded-full px-5 py-2 backdrop-blur-md w-fit">
                <AcademicCapIcon className="w-5 h-5 text-blue-400" />
                <span className="text-xs text-blue-300 tracking-widest uppercase">
                  Training & Development
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-['test'] mb-4 leading-tight">
                Build Your Future in
                <br />
                <span className="text-blue-400">Additive Manufacturing</span>
              </h2>

              <p className="text-gray-300 font-['scrib'] text-sm md:text-base leading-relaxed max-w-md">
                From schools to institutions and industry professionals, we offer
                comprehensive training programs combining hands-on experience with
                expert mentorship.
              </p>

            </div>

            {/* SCHOOL PROGRAM */}
            <div className="col-span-2 md:col-span-1 row-span-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl p-6 flex flex-col justify-between hover:bg-white/10 hover:border-blue-400/30 transition">

              <AcademicCapIcon className="w-8 h-8 text-blue-400" />

              <div>
                <h3 className="text-lg mb-2">School Programs</h3>
                <p className="text-gray-400 text-sm font-['scrib']">
                  STREAM-based learning modules introducing students to 3D printing
                  and design thinking from an early age.
                </p>
              </div>

            </div>

            {/* INSTITUTION */}
            <div className="col-span-2 md:col-span-1 row-span-1 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl p-6 flex flex-col justify-between hover:bg-white/10 hover:border-purple-400/30 transition">

              <BuildingLibraryIcon className="w-8 h-8 text-purple-400" />

              <div>
                <h3 className="text-lg mb-1">Institution Programs</h3>
                <p className="text-gray-400 text-sm font-['scrib']">
                  Curriculum covering design basics to advanced machine building.
                </p>
              </div>

            </div>

            {/* INDUSTRY */}
            <div className="col-span-2 md:col-span-1 row-span-1 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl p-6 flex flex-col justify-between hover:bg-white/10 hover:border-red-400/30 transition">

              <Cog6ToothIcon className="w-8 h-8 text-red-400" />

              <div>
                <h3 className="text-lg mb-1">Industry Training</h3>
                <p className="text-gray-400 text-sm font-['scrib']">
                  Expert-led programs for professionals covering real-world AM
                  implementation.
                </p>
              </div>

            </div>

            {/* STATS + CTA TILE */}
            <div className="col-span-4 relative flex flex-col md:flex-row items-center justify-center gap-6 py-10">

              {/* PIECE 1 */}
              <div
                className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-8 text-center hover:bg-white/10 transition"
                style={{
                  clipPath:
                    "polygon(0 0, 85% 0, 100% 25%, 100% 100%, 0 100%, 0 0)",
                  width: "280px",
                  height: "180px",
                }}
              >
                <div className="text-4xl font-bold text-blue-400">30+</div>
                <p className="text-gray-300 text-sm font-['scrib'] mt-2">
                  Years of Combined Experience
                </p>
              </div>

              {/* PIECE 2 */}
              <div
                className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-8 flex flex-col items-center justify-center hover:bg-white/10 transition"
                style={{
                  clipPath:
                    "polygon(0 25%, 15% 0, 100% 0, 100% 100%, 0 100%)",
                  width: "320px",
                  height: "180px",
                }}
              >
                <Image
                  src="/eos.svg"
                  alt="EOS"
                  width={90}
                  height={40}
                  className="mb-3"
                />

                <p className="text-gray-300 text-sm font-['scrib'] text-center">
                  Approved Training Partner
                </p>
              </div>

              {/* PIECE 3 */}
              <div
                className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-8 flex flex-col items-center justify-center hover:bg-white/10 transition"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 75%, 85% 100%, 0 100%)",
                  width: "320px",
                  height: "180px",
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl font-bold text-blue-400">100%</span>
                  <span className="text-gray-300 text-sm font-['scrib']">
                    Hands-On Learning
                  </span>
                </div>

                <a
                  href="/training"
                  className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full transition-all duration-300 shadow hover:shadow-blue-500/40"
                >
                  Explore Training
                  <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </section>




      {/* Manufacturing Process */}
      <AdvancedProcess />

      {/* Why Choose Galactic */}
      {/* <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-['test'] mb-8">
            Why Choose Galactic
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-red-500/10 border border-red-500/20 backdrop-blur-xl">
              <h3 className="text-xl font-['dena'] mb-3">
                Building in India for the globe
              </h3>
              <p className="text-gray-400 font-['scrib'] mb-3">
                Trusted by teams across industries for performance, reliability, and
                speed.
              </p>
              <ul className="text-gray-400 font-['scrib'] text-sm space-y-1 list-none">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-globe text-blue-400 mt-1" />
                  <span>Serving aerospace, medical, defence</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-truck-fast text-blue-400 mt-1" />
                  <span>Fast logistics and delivery</span>
                </li>
              </ul>
            </div>
            <div className="card bg-red-500/10 border border-red-500/20 backdrop-blur-xl">
              <h3 className="text-xl font-['dena'] mb-3">
                Metal 3D Printing/DMLS/LPBF in Bengaluru
              </h3>
              <p className="text-gray-400 font-['scrib'] mb-3">
                Multiple technologies under one roof for the right process per
                part.
              </p>
              <ul className="text-gray-400 font-['scrib'] text-sm space-y-1 list-none">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-atom text-blue-400 mt-1" />
                  <span>Certified materials and parameters</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-flask text-blue-400 mt-1" />
                  <span>Material testing on request</span>
                </li>
              </ul>
            </div>
            <div className="card bg-red-500/10 border border-red-500/20 backdrop-blur-xl">
              <h3 className="text-xl font-['dena'] mb-3">
                Research and Collaboration Oriented
              </h3>
              <p className="text-gray-400 font-['scrib'] mb-3">
                Design, manufacturing, post-processing, and inspection—handled
                seamlessly.
              </p>
              <ul className="text-gray-400 font-['scrib'] text-sm space-y-1 list-none">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-screwdriver-wrench text-blue-400 mt-1" />
                  <span>Machining, surface finishing, painting</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check-double text-blue-400 mt-1" />
                  <span>Dimensional reports and documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-['test'] mb-10">
            Why Choose Galactic
          </h2>

          <div className="grid md:grid-cols-12 gap-4 auto-rows-[160px]">

            {/* MAIN PANEL */}
            <div className="md:col-span-7 row-span-2 p-6 rounded-2xl 
      bg-white/5 backdrop-blur-xl border border-white/10 
      shadow-[0_0_40px_rgba(255,0,0,0.15)] flex flex-col justify-between">

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <GlobeAltIcon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-['dena']">
                  Building in India for the globe
                </h3>
              </div>

              <p className="text-gray-400 font-['scrib'] text-sm max-w-md">
                Trusted by teams across aerospace, medical, and defence industries
                for performance, reliability and speed.
              </p>

              <div className="flex gap-4 text-sm text-gray-300">
                <span className="flex items-center gap-2">
                  <CubeTransparentIcon className="w-4 h-4 text-blue-400" />
                  Aerospace
                </span>

                <span className="flex items-center gap-2">
                  <BeakerIcon className="w-4 h-4 text-blue-400" />
                  Medical
                </span>

                <span className="flex items-center gap-2">
                  <TruckIcon className="w-4 h-4 text-blue-400" />
                  Fast Logistics
                </span>
              </div>

            </div>

            {/* METAL PRINTING */}
            <div className="md:col-span-5 p-6 rounded-2xl 
      bg-white/5 backdrop-blur-xl border border-white/10">

              <div className="flex items-center gap-3 mb-3">
                <CubeTransparentIcon className="w-6 h-6 text-blue-400" />
                <h3 className="font-['dena']">
                  Metal 3D Printing / DMLS / LPBF
                </h3>
              </div>

              <p className="text-gray-400 text-sm font-['scrib']">
                Multiple technologies under one roof for the right process per part.
              </p>

            </div>

            {/* CERTIFIED MATERIALS */}
            <div className="md:col-span-3 p-6 rounded-2xl 
      bg-white/5 backdrop-blur-xl border border-white/10">

              <CheckBadgeIcon className="w-6 h-6 text-blue-400 mb-2" />

              <h4 className="font-['dena'] text-sm">
                Certified Materials
              </h4>

              <p className="text-gray-400 text-xs font-['scrib']">
                Verified parameters for production-grade parts.
              </p>

            </div>

            {/* TESTING */}
            <div className="md:col-span-4 p-6 rounded-2xl 
      bg-white/5 backdrop-blur-xl border border-white/10">

              <BeakerIcon className="w-6 h-6 text-blue-400 mb-2" />

              <h4 className="font-['dena'] text-sm">
                Material Testing
              </h4>

              <p className="text-gray-400 text-xs font-['scrib']">
                Mechanical validation and analysis available.
              </p>

            </div>

            {/* RESEARCH */}
            <div className="md:col-span-5 p-6 rounded-2xl 
      bg-white/5 backdrop-blur-xl border border-white/10">

              <div className="flex items-center gap-3 mb-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-blue-400" />
                <h3 className="font-['dena']">
                  Research & Collaboration
                </h3>
              </div>

              <p className="text-gray-400 text-sm font-['scrib']">
                Design, manufacturing, post-processing and inspection
                handled seamlessly.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* Facilities & Capabilities */}
      {/* <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-['test'] mb-4 text-center">
            Facilities Designed for the Future
          </h2>
          <p className="text-gray-400 font-['scrib'] mb-12 text-center max-w-3xl mx-auto">
            Our advanced manufacturing facilities are equipped with cutting-edge
            technology and expert staff, ensuring superior performance and
            efficiency at every step of the process.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            
            <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-2xl shadow-[0_14px_40px_rgba(0,0,0,0.3)]">
              <div className="pointer-events-none absolute -top-16 -right-14 h-48 w-48 rounded-full bg-sky-300/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">
                      <i className="fa-solid fa-atom text-sky-200" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-['dena']">Metal</h3>
                      <p className="text-sm text-gray-300 font-['scrib']">
                        Build Size: Up to 250x250x300mm
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/30 bg-sky-300/10 px-3 py-1 text-[11px] uppercase tracking-wide text-sky-100 font-['dena']">
                    <i className="fa-solid fa-award" />
                    Performance Set
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-lg border border-white/20 bg-white/10 p-3">
                    <h4 className="font-['dena'] text-sm mb-2 text-sky-100">
                      Titanium
                    </h4>
                    <p className="text-xs text-gray-300 font-['scrib']">
                      Ti64Al4V, Ti64 ELI, Grade 5, Grade 23
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/20 bg-white/10 p-3">
                    <h4 className="font-['dena'] text-sm mb-2 text-sky-100">
                      Aluminum
                    </h4>
                    <p className="text-xs text-gray-300 font-['scrib']">
                      AlSi10Mg, AlF357, Al6061, Al7050
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/20 bg-white/10 p-3">
                    <h4 className="font-['dena'] text-sm mb-2 text-sky-100">
                      Stainless Steel
                    </h4>
                    <p className="text-xs text-gray-300 font-['scrib']">
                      SS316L, SS304L, 17-4PH, 15-5PH
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/20 bg-white/10 p-3">
                    <h4 className="font-['dena'] text-sm mb-2 text-sky-100">
                      Tool and Maraging Steel
                    </h4>
                    <p className="text-xs text-gray-300 font-['scrib']">
                      M300, H13, MS1, C300
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/20 bg-white/10 p-3">
                    <h4 className="font-['dena'] text-sm mb-2 text-sky-100">
                      Superalloys
                    </h4>
                    <p className="text-xs text-gray-300 font-['scrib']">
                      Inconel 718, Inconel 625, Inconel 939, Haynes 282
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/20 bg-white/10 p-3">
                    <h4 className="font-['dena'] text-sm mb-2 text-sky-100">
                      Cobalt and Copper Alloys
                    </h4>
                    <p className="text-xs text-gray-300 font-['scrib']">
                      CoCr MP1, CuCr1Zr, Pure Copper, Bronze blends
                    </p>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-2xl shadow-[0_14px_40px_rgba(0,0,0,0.3)]">
              <div className="pointer-events-none absolute -top-16 -left-14 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-blue-200/15 blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">
                      <i className="fa-solid fa-cube text-cyan-200" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-['dena']">Polymer</h3>
                      <p className="text-sm text-gray-300 font-['scrib']">
                        Build Size: Up to 250x250x250mm
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-300/10 px-3 py-1 text-[11px] uppercase tracking-wide text-cyan-100 font-['dena']">
                    <i className="fa-solid fa-award" />
                    Material Range
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-lg border border-white/20 bg-white/10 p-3">
                    <h4 className="font-['dena'] text-sm mb-2 text-cyan-100">
                      Polyamide-12
                    </h4>
                    <p className="text-xs text-gray-300 font-['scrib']">
                      PA 2200, PA 2202, PA 2210 FR, PA 3200 GF
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/20 bg-white/10 p-3">
                    <h4 className="font-['dena'] text-sm mb-2 text-cyan-100">
                      Polyamide-11
                    </h4>
                    <p className="text-xs text-gray-300 font-['scrib']">
                      PA 1100, PA 1101, PA 1102, castable PA blends
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/20 bg-white/10 p-3">
                    <h4 className="font-['dena'] text-sm mb-2 text-cyan-100">
                      FDM Engineering
                    </h4>
                    <p className="text-xs text-gray-300 font-['scrib']">
                      PLA, ABS, ASA, PETG, TPU, TPE, PP
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/20 bg-white/10 p-3">
                    <h4 className="font-['dena'] text-sm mb-2 text-cyan-100">
                      High-Temp Polymers
                    </h4>
                    <p className="text-xs text-gray-300 font-['scrib']">
                      PEEK, PEKK, ULTEM 9085, PPSU
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/20 bg-white/10 p-3">
                    <h4 className="font-['dena'] text-sm mb-2 text-cyan-100">
                      Resins and Elastomers
                    </h4>
                    <p className="text-xs text-gray-300 font-['scrib']">
                      Tough, clear, castable, dental, rubber-like resins
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/20 bg-white/10 p-3">
                    <h4 className="font-['dena'] text-sm mb-2 text-cyan-100">
                      Vacuum Casting
                    </h4>
                    <p className="text-xs text-gray-300 font-['scrib']">
                      PU-ABS, PC-like, PP-like, silicone and shore A rubbers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative py-24 bg-black text-white overflow-hidden">

        {/* subtle grid background */}
        <div className="absolute inset-0 opacity-[0.04] 
      bg-[linear-gradient(to_right,#fff_1px,transparent_1px),
      linear-gradient(to_bottom,#fff_1px,transparent_1px)] 
      bg-[size:60px_60px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-6xl tracking-tight font-['test'] mb-4 text-center">
            Facilities Designed for the Future
          </h2>

          <p className="text-gray-300 font-['scrib'] mb-14 text-center max-w-3xl mx-auto leading-relaxed">
            Our advanced manufacturing facilities combine cutting-edge technology
            with expert engineering teams to deliver superior performance and
            reliability across every stage of production.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {/* METAL */}
            <div className="relative overflow-hidden rounded-2xl border border-white/15 
          bg-white/[0.06] backdrop-blur-xl p-8 shadow-[0_14px_40px_rgba(0,0,0,0.35)]">

              {/* glass highlight */}
              <div className="absolute inset-0 rounded-2xl 
            bg-gradient-to-br from-white/10 via-transparent to-transparent 
            opacity-40 pointer-events-none" />

              <div className="relative">

                {/* header */}
                <div className="flex items-center justify-between mb-8">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl 
                  bg-sky-300/15 border border-sky-200/20 
                  flex items-center justify-center">
                      <CpuChipIcon className="w-6 h-6 text-sky-200" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-['dena']">
                        Metal
                      </h3>
                      <p className="text-sm text-gray-300 font-['scrib']">
                        Build Size: Up to 250×250×300mm
                      </p>
                    </div>

                  </div>

                  <span className="text-xs uppercase tracking-wide 
                border border-sky-200/20 bg-sky-300/15 px-3 py-1 rounded-full">
                    Performance Set
                  </span>

                </div>

                {/* materials grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                  {[
                    {
                      title: "Titanium",
                      text: "Ti64Al4V, Ti64 ELI, Grade 5, Grade 23",
                    },
                    {
                      title: "Aluminum",
                      text: "AlSi10Mg, AlF357, Al6061, Al7050",
                    },
                    {
                      title: "Stainless Steel",
                      text: "SS316L, SS304L, 17-4PH, 15-5PH",
                    },
                    {
                      title: "Tool / Maraging Steel",
                      text: "M300, H13, MS1, C300",
                    },
                    {
                      title: "Superalloys",
                      text: "Inconel 718, 625, 939, Haynes 282",
                    },
                    {
                      title: "Cobalt / Copper",
                      text: "CoCr MP1, CuCr1Zr, Pure Copper",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-white/15 
                    bg-white/[0.07] backdrop-blur-md p-3 
                    hover:bg-white/[0.12] transition"
                    >
                      <h4 className="text-sm font-semibold tracking-wide text-sky-100 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-300 font-['scrib']">
                        {item.text}
                      </p>
                    </div>
                  ))}

                </div>

              </div>
            </div>

            {/* POLYMER */}
            <div className="relative overflow-hidden rounded-2xl border border-white/15 
          bg-white/[0.06] backdrop-blur-xl p-8 shadow-[0_14px_40px_rgba(0,0,0,0.35)]">

              <div className="absolute inset-0 rounded-2xl 
            bg-gradient-to-br from-white/10 via-transparent to-transparent 
            opacity-40 pointer-events-none" />

              <div className="relative">

                {/* header */}
                <div className="flex items-center justify-between mb-8">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl 
                  bg-cyan-300/15 border border-cyan-200/20 
                  flex items-center justify-center">
                      <CubeTransparentIcon className="w-6 h-6 text-cyan-200" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-['dena']">
                        Polymer
                      </h3>
                      <p className="text-sm text-gray-300 font-['scrib']">
                        Build Size: Up to 250×250×250mm
                      </p>
                    </div>

                  </div>

                  <span className="text-xs uppercase tracking-wide 
                border border-cyan-200/20 bg-cyan-300/15 px-3 py-1 rounded-full">
                    Material Range
                  </span>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                  {[
                    {
                      title: "Polyamide-12",
                      text: "PA2200, PA2210 FR, PA3200 GF",
                    },
                    {
                      title: "Polyamide-11",
                      text: "PA1100, PA1101, PA1102",
                    },
                    {
                      title: "FDM Engineering",
                      text: "PLA, ABS, ASA, PETG, TPU",
                    },
                    {
                      title: "High-Temp Polymers",
                      text: "PEEK, PEKK, ULTEM 9085",
                    },
                    {
                      title: "Resins",
                      text: "Clear, tough, dental, rubber-like",
                    },
                    {
                      title: "Vacuum Casting",
                      text: "PU-ABS, PC-like, silicone rubbers",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-white/15 
                    bg-white/[0.07] backdrop-blur-md p-3 
                    hover:bg-white/[0.12] transition"
                    >
                      <h4 className="text-sm font-semibold tracking-wide text-cyan-100 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-300 font-['scrib']">
                        {item.text}
                      </p>
                    </div>
                  ))}

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team Carousel Section */}
      <TeamCarousel />

      {/* Quick Contact Form */}
      {/* <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-['test'] mb-2">
            Quick Contact
          </h2>
          <p className="text-gray-400 font-['scrib'] mb-6">
            Share your requirements—we typically respond within 24 hours. NDAs
            available upon request.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-red-500/5 p-6 rounded-xl border border-red-500/20 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm font-['dena'] text-gray-400">
                Name
              </label>
              <input type="text" className="input-primary" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-['dena'] text-gray-400">
                Email
              </label>
              <input type="email" className="input-primary" required />
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-['dena'] text-gray-400">
                Message
              </label>
              <textarea rows={5} className="input-primary" required />
            </div>

            <div>
              <button
                type="submit"
                className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg transition-colors duration-300 font-['dena']"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section> */}

         <section className="relative  bg-black text-white overflow-hidden pb-[5vw]">

      {/* subtle glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-5xl md:text-6xl font-['test'] mb-6 tracking-tight">
          Start a Conversation
        </h2>

        <p className="text-gray-400 font-['scrib'] mb-16 max-w-xl mx-auto">
          Have a project in mind? Share a few details and our team will
          get back to you within 24 hours.
        </p>

        {/* FORM PANEL */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative p-10 rounded-2xl 
          bg-white/[0.04] backdrop-blur-xl 
          border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
        >

          {/* glass reflection */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-40 pointer-events-none" />

          <div className="relative grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Name"
              required
              className="bg-transparent border-b border-white/20 px-2 py-3 
              focus:outline-none focus:border-white transition"
            />

            <input
              type="email"
              placeholder="Email"
              required
              className="bg-transparent border-b border-white/20 px-2 py-3 
              focus:outline-none focus:border-white transition"
            />

            <textarea
              rows={4}
              placeholder="Tell us about your project"
              className="md:col-span-2 bg-transparent border-b border-white/20 px-2 py-3 
              focus:outline-none focus:border-white transition"
            />

            <div className="md:col-span-2 pt-6 flex justify-center">
              <button
                type="submit"
                className="border border-white/20 px-8 py-3 rounded-full 
                hover:bg-white hover:text-black transition"
              >
                Send Message
              </button>
            </div>

          </div>

        </form>

      </div>
    </section>

    </div>
  );
}
