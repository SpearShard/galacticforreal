"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Briefcase,
  Upload,
  Sparkles,
  Cpu,
  Factory,
  Users,
  ChevronRight,
  Flame,
  Layers,
  Activity,
  Shield,
  Zap
} from "lucide-react";

/* =====================================================
   DATA
===================================================== */

const jobsData = [
  {
    id: "J-001",
    title: "Additive Manufacturing Engineer",
    location: "Bengaluru",
    type: "Full-time",
    experience: "3–5 years",
    salary: "₹8L – ₹14L",
    description:
      "Optimize metal AM builds, manage parameters and scale production workflows.",
    responsibilities: [
      "Develop print strategies",
      "Parameter optimization",
      "Post-processing workflows",
      "Quality validation"
    ]
  },
  {
    id: "J-002",
    title: "Generative Design Engineer",
    location: "Hybrid",
    type: "Full-time",
    experience: "2–4 years",
    salary: "₹6L – ₹10L",
    description:
      "Design production-ready components using DFAM and generative workflows.",
    responsibilities: [
      "Topology optimization",
      "Simulation validation",
      "Design for additive",
      "Client collaboration"
    ]
  },
  {
    id: "J-003",
    title: "Materials Scientist",
    location: "On-site",
    type: "Contract",
    experience: "PhD preferred",
    salary: "Negotiable",
    description:
      "Characterize material behavior and develop new printable compositions.",
    responsibilities: [
      "Material testing",
      "Microstructure analysis",
      "Failure investigation",
      "R&D experiments"
    ]
  }
];

const benefits = [
  { icon: Factory, title: "Industrial Scale Labs", desc: "Metal and polymer production systems." },
  { icon: Cpu, title: "Advanced Engineering", desc: "Simulation and generative workflows." },
  { icon: Users, title: "Elite Team", desc: "Mechanical and materials specialists." },
  { icon: Shield, title: "Mission Critical", desc: "Aerospace and medical deployment." }
];

const equipment = [
  "EOS M 290 Metal Printer",
  "SLM 280 Production System",
  "Carbon M2 Polymer Platform",
  "Industrial Heat Treatment Furnaces",
  "5 Axis CNC Post Processing",
  "Metrology Grade CT Scanning"
];

const processSteps = [
  "Design Optimization",
  "Material Preparation",
  "Precision Printing",
  "Thermal Processing",
  "Quality Validation",
  "Deployment"
];

/* =====================================================
   GLASS UI
===================================================== */

function GlassPanel({ children, className = "" }) {
  return (
    <div className={`relative rounded-[28px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] ${className}`}>
      <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.15),transparent_40%)] pointer-events-none" />
      {children}
    </div>
  );
}

function Orb({ className }) {
  return <div className={`absolute rounded-full blur-[140px] opacity-40 ${className}`} />;
}

/* =====================================================
   JOB CARD
===================================================== */

function JobCard({ job, onSelect }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      onClick={() => onSelect(job)}
      className="cursor-pointer"
    >
      <GlassPanel className="p-8 group overflow-hidden">
        <div className="flex justify-between mb-6">
          <div className="text-xs tracking-widest text-red-400/70">{job.id}</div>
          <Sparkles className="text-white/40 group-hover:text-red-400 transition" />
        </div>

        <h3 className="text-2xl font-semibold mb-4">{job.title}</h3>

        <div className="space-y-2 text-white/60 text-sm mb-6">
          <div className="flex items-center gap-2"><MapPin size={14}/> {job.location}</div>
          <div className="flex items-center gap-2"><Briefcase size={14}/> {job.type}</div>
          <div>{job.experience}</div>
          <div className="text-white font-medium">{job.salary}</div>
        </div>

        <div className="flex items-center gap-2 text-sm text-white/40 group-hover:text-white transition">
          View Role <ChevronRight size={16} />
        </div>
      </GlassPanel>
    </motion.div>
  );
}

/* =====================================================
   MAIN PAGE
===================================================== */

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* AMBIENT RED ORBS */}
      <Orb className="w-[700px] h-[700px] bg-red-600/40 -top-40 -left-40" />
      <Orb className="w-[700px] h-[700px] bg-red-500/20 bottom-0 right-0" />

      {/* GRID OVERLAY */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:120px_120px]" />

      <div className="relative z-10">

        {/* HERO */}
        <section className="pt-44 pb-32 px-6 container mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold leading-[0.85] tracking-tight"
          >
            Engineering
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">
              Matter Into Form
            </span>
          </motion.h1>

          <p className="text-xl text-white/60 mt-8 max-w-2xl">
            Join a high-performance additive manufacturing company delivering
            precision engineered components across aerospace, robotics and
            medical industries.
          </p>
        </section>

        {/* STATS STRIP */}
        <section className="py-10 border-y border-white/10 overflow-hidden">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex gap-20 text-sm tracking-widest text-white/40 whitespace-nowrap"
          >
            {[...Array(6)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-3"><Activity size={16}/> 50K+ PARTS PRODUCED</div>
                <div className="flex items-center gap-3"><Flame size={16}/> METAL & POLYMER SYSTEMS</div>
                <div className="flex items-center gap-3"><Zap size={16}/> HIGH PERFORMANCE MATERIALS</div>
                <div className="flex items-center gap-3"><Layers size={16}/> INDUSTRIAL PRODUCTION</div>
              </React.Fragment>
            ))}
          </motion.div>
        </section>

        {/* BENEFITS */}
        <section className="py-32 px-6 container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map(b => {
              const Icon = b.icon;
              return (
                <GlassPanel key={b.title} className="p-8">
                  <Icon className="mb-4 text-red-400" />
                  <h3 className="text-xl mb-2">{b.title}</h3>
                  <p className="text-white/60 text-sm">{b.desc}</p>
                </GlassPanel>
              );
            })}
          </div>
        </section>

        {/* MANUFACTURING PROCESS */}
        <section className="py-32 px-6 container mx-auto">
          <h2 className="text-4xl mb-16">Manufacturing Workflow</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {processSteps.map((step, i) => (
              <GlassPanel key={step} className="p-6 text-center">
                <div className="text-red-400 text-sm mb-2">0{i + 1}</div>
                <div className="text-sm text-white/70">{step}</div>
              </GlassPanel>
            ))}
          </div>
        </section>

        {/* EQUIPMENT SHOWCASE */}
        <section className="py-32 px-6 container mx-auto">
          <h2 className="text-4xl mb-16">Production Infrastructure</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map(item => (
              <GlassPanel key={item} className="p-8">
                <div className="text-lg">{item}</div>
              </GlassPanel>
            ))}
          </div>
        </section>

        {/* JOBS */}
        <section className="py-32 px-6 container mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-semibold">Open Positions</h2>
            <div className="text-white/40 text-sm">{jobsData.length} roles available</div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobsData.map(job => (
              <JobCard key={job.id} job={job} onSelect={setSelectedJob} />
            ))}
          </div>
        </section>

        {/* JOB MODAL */}
        <AnimatePresence>
          {selectedJob && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center p-6 z-50"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-2xl w-full"
              >
                <GlassPanel className="p-12">
                  <h2 className="text-3xl mb-4">{selectedJob.title}</h2>
                  <p className="text-white/60 mb-6">{selectedJob.description}</p>

                  <h4 className="mb-3 font-medium">Responsibilities</h4>
                  <ul className="list-disc ml-6 text-white/60 space-y-1 mb-8">
                    {selectedJob.responsibilities.map(r => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>

                  <button className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-400 font-semibold">
                    Apply Now
                  </button>

                  <button onClick={() => setSelectedJob(null)} className="mt-4 w-full text-white/40">
                    Close
                  </button>
                </GlassPanel>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* APPLICATION */}
        <section className="py-40 px-6 container mx-auto">
          <GlassPanel className="p-12 max-w-2xl mx-auto">
            <h2 className="text-3xl mb-8">Apply</h2>

            <form className="space-y-6">
              <input placeholder="Full Name" className="w-full p-4 rounded-xl bg-white/5 border border-white/10" />
              <input placeholder="Email" className="w-full p-4 rounded-xl bg-white/5 border border-white/10" />
              <input placeholder="Phone" className="w-full p-4 rounded-xl bg-white/5 border border-white/10" />
              <textarea placeholder="Tell us about yourself" className="w-full p-4 rounded-xl bg-white/5 border border-white/10" />

              <label className="flex items-center gap-3 text-white/70 cursor-pointer">
                <Upload /> Upload Resume
                <input type="file" className="hidden" />
              </label>

              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-400 font-semibold">
                Submit Application
              </button>
            </form>
          </GlassPanel>
        </section>
      </div>
    </div>
  );
}
