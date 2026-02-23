export default function IndustriesPage() {
  const industries = [
    {
      key: 'aerospace',
      title: 'Aerospace',
      intro: 'Lightweight, high-strength components with tight tolerances and process traceability for flight-critical applications.',
      video: {
        src: 'https://videos.pexels.com/video-files/6819731/6819731-hd_1920_1080_24fps.mp4',
        poster: 'https://ik.imagekit.io/0s6dxbeae/pexels-photo-2091321.jpeg?updatedAt=1755889569285'
      },
      offers: [
        { name: 'Metal AM (SS/Al/Ti)', desc: 'Topology optimized brackets, heat exchangers, housings.' },
        { name: 'SLS Nylon', desc: 'Flight fixtures, ducts, and lightweight structural parts.' },
  { name: 'Inspection & Reports', desc: 'Dimensional reports, surface finish, material certs.' }
      ],
      samples: [
        'https://ik.imagekit.io/0s6dxbeae/GE-fuel-nozzle100k.v1-1-1.jpg?updatedAt=1755891626922',
        'https://ik.imagekit.io/0s6dxbeae/hm-3-matic-lightweight-part.jpg_w=1200&q=90&lossless=true&auto=format?updatedAt=1755891721834',
        'https://ik.imagekit.io/0s6dxbeae/081318+SpaceX+CC+Event-0036.jpg_format=1000w?updatedAt=1755891991162',
        'https://ik.imagekit.io/0s6dxbeae/shell-and-tube-heat-exchangers.jpg?updatedAt=1755892118146'
      ],
      caseStudy: {
        title: 'Bracket Mass Reduction',
        text: 'Optimized titanium bracket reduced mass by 32% while meeting stiffness and fatigue requirements, enabling increased payload capacity.'
      }
    },
    {
      key: 'medical',
      title: 'Medical & Dental',
      intro: 'Patient-specific instruments, biocompatible materials, and validated processes for precise clinical outcomes.',
      video: {
        src: 'https://videos.pexels.com/video-files/4329011/4329011-uhd_2560_1440_30fps.mp4',
        poster: 'https://ik.imagekit.io/0s6dxbeae/_url=https_3A_2F_2Fnewatlas-brightspot.s3.amazonaws.com_2Farchive_2Fcortex.jpg&na.image_optimisation=0?updatedAt=1755891269439'
      },
      offers: [
        { name: 'Biocompatible Polymers', desc: 'Guides, splints, and anatomical models.' },
        { name: 'High-Detail Resin', desc: 'Dental models, aligner molds, and surgical planning.' },
        { name: 'Traceability', desc: 'Documentation, batch tracking, and controlled parameters.' }
      ],
      samples: [
        'https://ik.imagekit.io/0s6dxbeae/manufacturing-and-materials-of-3d-printed-cranial-plates.jpg?updatedAt=1755892353722',
        'https://ik.imagekit.io/0s6dxbeae/How-Are-Orthopedic-Implants-Made-At-Uteshiya-Medicare-jpg.webp?updatedAt=1755892605760',
        'https://ik.imagekit.io/0s6dxbeae/bioprinting.jpg?updatedAt=1755892848122',
        'https://ik.imagekit.io/0s6dxbeae/shutterstock_1142458823-1.jpg?updatedAt=1755892951836'
      ],
      caseStudy: {
        title: 'Orthopedic Drill Guide',
        text: 'Patient-specific guide improved placement accuracy and reduced OR setup time by 25%.'
      }
    },
    {
      key: 'defence',
      title: 'Defence',
      intro: 'Ruggedized parts, rapid iteration, and secure workflows for mission-critical platforms.',
      video: {
        src: 'https://videos.pexels.com/video-files/854286/854286-hd_1280_720_25fps.mp4',
        poster: 'https://ik.imagekit.io/0s6dxbeae/defence.jpg?updatedAt=1755877504818'
      },
      offers: [
        { name: 'Engineering Polymers', desc: 'Carbon-filled nylon for high stiffness and durability.' },
        { name: 'Metal Components', desc: 'Mounts, brackets, and heat-resistant housings.' },
        { name: 'On-Demand Spares', desc: 'Digitized inventory for field-ready replacements.' }
      ],
      samples: [
        'https://ik.imagekit.io/0s6dxbeae/jet-engine-turbine-blades-of-airplane-2021-08-29-10-29-02-utc-1024x683.jpg?updatedAt=1755878249881',
        'https://ik.imagekit.io/0s6dxbeae/pexels-photo-28737754.jpeg?updatedAt=1755879075103',
        'https://ik.imagekit.io/0s6dxbeae/Submarine-Valve-Coatings.jpg?updatedAt=1755879428329',
        'https://ik.imagekit.io/0s6dxbeae/3d-printed-drone-wing-honeycomb-structure-stratasys.webp_v=4a1399?updatedAt=1755879743632'
      ],
      caseStudy: {
        title: 'Rugged UAV Bracket',
        text: 'Carbon-filled nylon bracket replaced CNC aluminum, cutting weight by 28% and cost by 35%.'
      }
    },
    {
      key: 'automotive',
      title: 'Automotive',
      intro: 'Rapid prototyping, jigs/fixtures, and low-volume production for agile development cycles.',
      video: {
        src: '',
        poster: 'https://ik.imagekit.io/0s6dxbeae/pexels-photo-919073.jpeg?updatedAt=1755889187188'
      },
      offers: [
        { name: 'SLS & FDM', desc: 'Durable jigs, check fixtures, ergonomic tooling.' },
        { name: 'High-Temp Materials', desc: 'Under-hood prototypes and thermal testing.' },
        { name: 'Surface Finishing', desc: 'Paint-ready show parts and interior trims.' }
      ],
      samples: [
        'https://ik.imagekit.io/0s6dxbeae/01-3d-druck-bremssattel.jpg_w=750&h=490&q=75&c=1?updatedAt=1755881161524',
        'https://ik.imagekit.io/0s6dxbeae/Chaos-Ultracar-ceramic-piston-HERO.jpg?updatedAt=1755881344795',
        'https://ik.imagekit.io/0s6dxbeae/00ef8eb3eb941be31dedefe6b3d84fbc68e00915-2048x1536.jpg?updatedAt=1755881458018',
        'https://ik.imagekit.io/0s6dxbeae/Customized-High-Performance-Dual-Carbon-Fiber-Stainless-Steel-Exhaust-Pipe-Tips-for-BM-W-M3-M4-M130-M140.jpg?updatedAt=1755881668736'
      ],
      caseStudy: {
        title: 'Ergonomic Assembly Jig',
        text: 'SLS nylon jig improved operator comfort and reduced takt time by 12%.'
      }
    },
    {
      key: 'oilgas',
      title: 'Oil & Gas',
      intro: 'Corrosion-resistant materials, complex geometries, and robust validation for harsh environments.',
      video: {
        src: 'https://videos.pexels.com/video-files/3079021/3079021-uhd_2560_1440_25fps.mp4',
        poster: 'https://ik.imagekit.io/0s6dxbeae/-1x-1.webp?updatedAt=1755888578256'
      },
      offers: [
        { name: 'Stainless & Inconel', desc: 'High-temp, corrosion-resistant components.' },
        { name: 'Flow Components', desc: 'Complex manifolds and optimized channels.' },
        { name: 'Inspection', desc: 'NDT partners and pressure test support.' }
      ],
      samples: [
        'https://ik.imagekit.io/0s6dxbeae/Tricone-Bits.jpg?updatedAt=1755882771677',
        'https://ik.imagekit.io/0s6dxbeae/impeller-made-with-additive-manufacturing.jpg_itok=WZlkZ6uH?updatedAt=1755882879044',
        'https://ik.imagekit.io/0s6dxbeae/additive-manufacturing-solutions-for-energy-oil-and-gas-industry.jpg_itok=tCC7iQ-P?updatedAt=1755888017713',
        'https://ik.imagekit.io/0s6dxbeae/Casing-Scraper-Downhole-Tools-Workover-Tools.webp?updatedAt=1755888186777'
      ],
      caseStudy: {
        title: 'Conformal Flow Insert',
        text: 'Metal AM insert improved flow uniformity and reduced pressure drop by 18%.'
      }
    },
    {
      key: 'space',
      title: 'Space',
      intro: 'Ultra-light structures, thermal management, and functional prototyping for space systems.',
      video: {
        src: 'https://videos.pexels.com/video-files/856992/856992-hd_1280_720_25fps.mp4',
        poster: 'https://ik.imagekit.io/0s6dxbeae/pexels-photo-256152.jpeg?updatedAt=1755889924427'
      },
      offers: [
        { name: 'Titanium & Aluminum', desc: 'Flight hardware and test components.' },
        { name: 'Lattice Structures', desc: 'Mass reduction while maintaining stiffness.' },
        { name: 'Thermal Solutions', desc: 'Heat sinks, cold plates, and channels.' }
      ],
      samples: [
        'https://ik.imagekit.io/0s6dxbeae/Image-2-Terran-1-3D-Printed-Rocket.jpg?updatedAt=1755882233209',
        'https://ik.imagekit.io/0s6dxbeae/AR1_Single_3d-printed-fuel-injector.jpg?updatedAt=1755882380211',
        'https://ik.imagekit.io/0s6dxbeae/Optisys-case-study_Image-1full-1024x683.jpg?updatedAt=1755882554923',
        'https://ik.imagekit.io/0s6dxbeae/AMForAerospace.png?updatedAt=1755874164094'
      ],
      caseStudy: {
        title: 'Lightweight Panel',
        text: 'Aluminum lattice panel achieved 40% mass reduction with required modal performance.'
      }
    }
  ]

  const Section = ({ industry }) => (
    <section className="relative py-24 md:py-32">
      {/* Cinematic background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline poster={industry.video.poster}>
          <source src={industry.video.src} type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Top fade to black for seamless blending */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent" />
        
        {/* Main content overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0f0f]/40 to-transparent" />
        
        {/* Red accent gradient */}
        <div className="absolute -inset-48 bg-[radial-gradient(900px_circle_at_15%_0%,rgba(185,28,28,0.25),transparent_60%)]" />
        
        {/* Bottom fade to black for seamless blending */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Intro */}
        <div className="max-w-4xl mb-10">
          <h2 className="text-5xl md:text-7xl font-['test'] mb-4">{industry.title}</h2>
          <p className="text-lg md:text-xl font-['scrib'] text-red-50/90">{industry.intro}</p>
        </div>

        {/* What We Offer */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-['dena'] mb-4">What We Offer</h3>
          <p className="text-gray-300 font-['scrib'] mb-6 max-w-3xl">Processes and materials tuned for this sector, with documentation and validation as required.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {industry.offers.map((item, idx) => (
              <div key={idx} className="border border-red-500/20 bg-white/5 backdrop-blur rounded-xl p-6 hover:scale-[1.02] transition-transform shadow-2xl">
                <h4 className="text-lg font-semibold mb-2">{item.name}</h4>
                <p className="text-gray-300 font-['scrib'] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Parts Gallery */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-['dena'] mb-4">Sample Parts</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industry.samples.map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl shadow-2xl border border-red-500/20">
                <img src={src} alt={`${industry.title} sample ${idx+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Case Study */}
        <div className="bg-gradient-to-tr from-red-500/10 via-transparent to-red-500/20 border border-red-500/20 rounded-2xl p-6 md:p-8 backdrop-blur">
          <h4 className="text-xl md:text-2xl font-['dena'] mb-2">{industry.caseStudy.title}</h4>
          <p className="text-gray-200 font-['scrib'] mb-4 max-w-3xl">{industry.caseStudy.text}</p>
          <a href="#" className="inline-block bg-primary hover:bg-secondary font-['test'] text-white px-5 py-2 rounded-md transition-colors">Read Case Study</a>
        </div>
      </div>
    </section>
  )

  return (
    <main className="text-white">
      {/* Page intro */}
      <section className="relative pt-28 pb-16">
        <div className="absolute inset-0 -z-10">
          {/* Bottom fade to black for seamless blending with first industry section */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#1a0f0f]/40 to-transparent" />
          <div className="absolute -inset-48 bg-[radial-gradient(900px_circle_at_20%_5%,rgba(185,28,28,0.25),transparent_60%)]" />
        </div>
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-['dena'] mb-4">Industries We Serve</h1>
          <p className="text-lg md:text-xl text-red-50/90 max-w-3xl">From aerospace to medical, we bring production-ready additive manufacturing with the right processes, materials, and standards for each sector.</p>
        </div>
      </section>

      {/* Industry sections */}
      {industries.map(ind => (
        <Section key={ind.key} industry={ind} />
      ))}

      {/* Outro CTA */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 -z-10">
          {/* Top fade to black for seamless blending with last industry section */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0f0f]/40 to-black/60" />
          <div className="absolute -inset-48 bg-[radial-gradient(900px_circle_at_80%_10%,rgba(185,28,28,0.25),transparent_60%)]" />
        </div>
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-tr from-red-500/10 via-transparent to-red-500/20 border border-red-500/20 rounded-2xl p-8 md:p-12 text-center backdrop-blur">
            <h2 className="text-4xl md:text-6xl font-['test'] mb-4">Let’s Build the Future Together</h2>
            <p className="text-gray-200 font-['scrib'] mb-6">Partner with Galactic for reliable, high-performance additive manufacturing across industries.</p>
            <a href="/contact" className="inline-block bg-primary hover:bg-secondary text-white px-8 py-3 rounded-md transition-colors">Get a Quote</a>
          </div>
        </div>
      </section>
    </main>
  )
}


