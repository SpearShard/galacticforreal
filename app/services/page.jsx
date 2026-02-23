'use client'

import Link from 'next/link'
import { Rocket, Factory, Shapes, Wrench, Box, Users, CheckCircle2, ShieldCheck, Clock3, Globe2 } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      key: 'rapid-prototyping',
      title: 'Rapid Prototyping',
      intro: 'Validate concepts fast using high-detail resins and engineering polymers.',
      desc: 'Compress weeks into days with fit–feel–function iterations. Align stakeholders early, reduce risk before tooling, and accelerate design confidence.',
      features: [
        'High-detail resin and engineering polymers',
        'Functional testing and quick iteration loops',
        'Design refinements before production tooling',
      ],
      primaryHref: '/submit',
      secondaryHref: '/contact',
      Icon: Rocket,
    },
    {
      key: 'contract-manufacturing',
      title: 'Contract Manufacturing',
      intro: 'Production-grade parts with documentation, consistency, and repeatability at scale.',
      desc: 'From pilot runs to steady production: qualified parameters, traceability, and dimensional reports so every shipment meets spec—program after program.',
      features: [
  'Process documentation and material traceability',
  'Dimensional reports and sign-offs',
        'Stable, repeatable production at scale',
      ],
      primaryHref: '/submit',
      secondaryHref: '/contact',
      Icon: Factory,
    },
    {
      key: 'dfam-design',
      title: 'DFAM & Product Design',
      intro: 'Optimize for additive: lattices, topology, part consolidation for lighter products.',
      desc: 'Co-engineer lighter, stronger parts. Reduce assemblies and unlock internal features that machining can’t reach—while ensuring manufacturability.',
      features: [
        'Lattice infill and topology optimization',
        'Part consolidation and BOM reduction',
        'DFAM reviews and manufacturability checks',
      ],
      primaryHref: '/contact',
      secondaryHref: '/contact',
      Icon: Shapes,
    },
    {
      key: 'reverse-engineering',
      title: 'Reverse Engineering',
      intro: 'Scan and reconstruct parts to create production-ready parametric CAD.',
      desc: 'Capture geometry, rebuild parametric models, and define tolerances so legacy spares can be produced reliably on demand.',
      features: [
        '3D scanning and mesh processing',
        'Parametric CAD reconstruction',
        'Tolerance definition for production',
      ],
      primaryHref: '/contact',
      secondaryHref: '/contact',
      Icon: Wrench,
    },
    {
      key: 'part-production',
      title: 'Part Production',
      intro: 'Reliable batch and continuous production using SLS, FDM, and metal AM with inspections.',
      desc: 'Qualified parameters, controlled post-processing, and inspection so every part meets performance and regulatory requirements.',
      features: [
        'SLS, FDM, and metal AM capabilities',
        'Post-processing and finishing controls',
        'Incoming/outgoing inspection protocols',
      ],
      primaryHref: '/submit',
      secondaryHref: '/contact',
      Icon: Box,
    },
    {
      key: 'designer-marketplace',
      title: 'Designer Marketplace',
      intro: 'Explore, upload, and sell printable designs; source ready-to-manufacture files.',
      desc: 'A curated catalog of printable components. Go from digital inventory to on‑demand production with a click.',
      features: [
        'Curated, production-ready designs',
  'Sell or source high-performance parts',
        'Seamless quote-to-production flow',
      ],
      primaryHref: '/marketplace',
      secondaryHref: '/contact',
      Icon: Users,
    },
  ]

  return (
    <main className="text-white">
      {/* Hero / Intro */}
      <section className="relative min-h-[70vh] pt-28 pb-16 flex items-end">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="auto" poster="https://images.unsplash.com/photo-1581091215367-59ab6d0051d4?q=80&w=1600&auto=format&fit=crop">
            <source src="/galactic-bg.mp4" type="video/mp4" />
            <source src="https://videos.pexels.com/video-files/6819731/6819731-hd_1920_1080_24fps.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#1a0f0f]/40 to-[#0f0b0b]/70" />
          <div className="absolute -inset-48 bg-[radial-gradient(900px_circle_at_20%_5%,rgba(185,28,28,0.25),transparent_60%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[#0f0b0b]/70 to-[#0f0b0b]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-['test'] mb-4">Our Services</h1>
          <p className="text-lg md:text-xl font-['scrib'] text-red-50/90 max-w-3xl">From idea to production: DFAM, prototyping, manufacturing, and delivery—seamlessly connected.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#1a0f0f]/30 to-[#0f0b0b]/70" />
          <div className="absolute -inset-48 bg-[radial-gradient(900px_circle_at_80%_0%,rgba(185,28,28,0.22),transparent_60%)]" />
        </div>
        <div className="container  mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1  md:grid-cols-3 gap-10">
            {services.map((svc) => (
              <div key={svc.key} className="bg-white/5 relative backdrop-blur-xl border border-red-500/20 rounded-2xl shadow-2xl p-8 hover:bg-white/10 hover:border-red-500/40 transition">
                <div className="w-16 h-16 bg-white/10 border border-red-500/30 rounded-full p-4 shadow-lg flex items-center justify-center mb-6">
                  <svc.Icon className="w-7 h-7 text-red-300" />
                </div>
                <h3 className="text-2xl md:text-3xl font-['dena'] mb-3">{svc.title}</h3>
                <p className="font-['scrib']  text-red-50/90 mb-4">{svc.intro}</p>
                <p className="font-['scrib'] text-gray-300 mb-5">{svc.desc}</p>
                <ul className="space-y-2 mb-6">
                  {svc.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" />
                      <span className="font-['scrib'] text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link href={svc.primaryHref} className="bg-primary hover:bg-secondary text-white font-['me'] text-[0.9vw]  px-6 py-3 rounded-md transition">Upload a Part</Link>
                  <Link href={svc.secondaryHref} className="bg-white/10 hover:bg-white/20 text-white font-['me'] text-[0.9vw]  px-6 py-3 rounded-md transition">Start a Project</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outro CTA */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#1a0f0f]/40 to-[#0f0b0b]/70" />
          <div className="absolute -inset-48 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(185,28,28,0.25),transparent_60%)]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-tr from-red-500/10 via-transparent to-red-500/20 border border-red-500/20 rounded-2xl p-8 md:p-12 text-center backdrop-blur">
            <h2 className="text-4xl md:text-6xl font-['test'] mb-4">Ready to Manufacture the Future?</h2>
            <p className="font-['scrib'] text-gray-200 mb-6">Partner with Galactic 3D to take your product from prototype to production with confidence.</p>
            <div className="mt-6 mb-6 flex font-['scrib'] items-center justify-center gap-3 flex-wrap text-xs text-gray-200/90">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-red-500/20 flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-red-300" /> ISO‑certified processes</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-red-500/20 flex items-center gap-2"><Clock3 className="w-4 h-4 text-red-300" /> Avg. 3–7 day lead time</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-red-500/20 flex items-center gap-2"><Globe2 className="w-4 h-4 text-red-300" /> Trusted by aerospace OEMs</span>
            </div>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link href="/contact" className="font-['dena'] bg-primary hover:bg-secondary text-white font-monumentExtended px-6 py-3 rounded-md transition">Get a Quote</Link>
              <Link href="/contact" className="font-['dena'] bg-white/10 hover:bg-white/20 text-white font-monumentExtended px-6 py-3 rounded-md transition">Book a Demo</Link>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  )
}


