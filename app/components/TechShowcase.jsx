// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";

// const technologies = [
//     {
//         id: "DMLS",
//         title: "DMLS",
//         subtitle: "Direct Metal Laser Sintering",
//         description: "High-precision metal printing for complex, strong, production-grade parts. Ideal for aerospace and engineering components.",
//         color: "red",
//         icon: "fa-atom",
//         image: "https://www.mechdaily.com/wp-content/uploads/2024/09/What-is-Direct-Metal-Laser-Sintering.webp", // Metal printing machine
//     },
//     {
//         id: "SLS",
//         title: "SLS",
//         subtitle: "Selective Laser Sintering",
//         description: "Powder-based printing for durable nylon parts without support structures. Great for functional prototypes and end-use parts.",
//         color: "blue",
//         icon: "fa-cube",
//         image: "https://blog.spatial.com/hubfs/image2.jpg", // Industrial clean lab
//     },
//     {
//         id: "FDM",
//         title: "FDM",
//         subtitle: "Fused Deposition Modeling",
//         description: "Cost-effective plastic printing for rapid prototyping and low-volume production. Wide range of materials available.",
//         color: "green",
//         icon: "fa-layer-group",
//         image: "https://makerly.eu/wp-content/uploads/2023/05/5-i.jpg", // 3D printing close up
//     },
// ];

// export default function TechShowcase() {
//     const [activeTech, setActiveTech] = useState("DMLS");

//     return (
//         <div className="w-full max-w-6xl mx-auto h-[500px] flex flex-col md:flex-row gap-4">
//             {technologies.map((tech) => (
//                 <motion.div
//                     key={tech.id}
//                     layout
//                     onClick={() => setActiveTech(activeTech === tech.id ? tech.id : tech.id)}
//                     className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeTech === tech.id ? "md:flex-[3] flex-[3]" : "md:flex-1 flex-1"
//                         }`}
//                     initial={false}
//                 >
//                     {/* Background Image */}
//                     <div className="absolute inset-0">
//                         <img
//                             src={tech.image}
//                             alt={tech.title}
//                             className={`w-full h-full object-cover transition-transform duration-700 ${activeTech === tech.id ? 'scale-100' : 'scale-110 grayscale-[50%]'}`}
//                         />
//                         <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500 ${activeTech === tech.id ? 'opacity-90' : 'opacity-60 hover:opacity-40'}`} />
//                     </div>

//                     {/* Content */}
//                     <div className="absolute inset-0 p-8 flex flex-col justify-end">
//                         {/* Icon always visible */}
//                         <div className={`mb-auto transition-all duration-500 ${activeTech === tech.id ? 'opacity-100 translate-y-0' : 'opacity-70'}`}>
//                             <div className={`w-12 h-12 rounded-full bg-${tech.color}-500/20 text-${tech.color}-400 flex items-center justify-center border border-${tech.color}-500/30 backdrop-blur-md`}>
//                                 <i className={`fa-solid ${tech.icon} text-xl`} />
//                             </div>
//                         </div>

//                         {/* Title & Text */}
//                         <div className="relative z-10">
//                             <motion.h3
//                                 layout="position"
//                                 className={`text-3xl font-['dena'] text-white mb-2 ${activeTech === tech.id ? '' : 'md:-rotate-90 md:origin-bottom-left md:absolute md:bottom-0 md:left-0 md:w-[300px] md:mb-12'}`}
//                             >
//                                 {tech.title}
//                             </motion.h3>

//                             <div className={`overflow-hidden transition-all duration-500 ${activeTech === tech.id ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
//                                 <p className={`text-${tech.color}-300 font-['dena'] text-sm mb-3 tracking-widest uppercase`}>
//                                     {tech.subtitle}
//                                 </p>
//                                 <p className="text-gray-300 font-['scrib'] leading-relaxed max-w-lg">
//                                     {tech.description}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Active Border */}
//                     {activeTech === tech.id && (
//                         <motion.div
//                             layoutId="activeBorder"
//                             className={`absolute inset-0 border-2 border-${tech.color}-500/50 rounded-3xl pointer-events-none`}
//                         />
//                     )}
//                 </motion.div>
//             ))}
//         </div>
//     );
// }



















"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CubeIcon,
  Squares2X2Icon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const technologies = [
  {
    id: "DMLS",
    title: "DMLS",
    subtitle: "Direct Metal Laser Sintering",
    description:
      "High-precision metal printing for complex, strong, production-grade parts. Ideal for aerospace and engineering components.",
    color: "red",
    icon: Cog6ToothIcon,
    image:
      "https://www.mechdaily.com/wp-content/uploads/2024/09/What-is-Direct-Metal-Laser-Sintering.webp",
  },
  {
    id: "SLS",
    title: "SLS",
    subtitle: "Selective Laser Sintering",
    description:
      "Powder-based printing for durable nylon parts without support structures. Great for functional prototypes and end-use parts.",
    color: "blue",
    icon: CubeIcon,
    image: "https://blog.spatial.com/hubfs/image2.jpg",
  },
  {
    id: "FDM",
    title: "FDM",
    subtitle: "Fused Deposition Modeling",
    description:
      "Cost-effective plastic printing for rapid prototyping and low-volume production. Wide range of materials available.",
    color: "green",
    icon: Squares2X2Icon,
    image: "https://makerly.eu/wp-content/uploads/2023/05/5-i.jpg",
  },
];

export default function TechShowcase() {
  const [activeTech, setActiveTech] = useState("DMLS");

  return (
    <div className="w-full max-w-6xl mx-auto h-[520px] flex gap-3">

      {technologies.map((tech) => {
        const Icon = tech.icon;
        const isActive = activeTech === tech.id;

        return (
          <motion.div
            key={tech.id}
            layout
            onClick={() => setActiveTech(tech.id)}
            className={`relative overflow-hidden rounded-3xl cursor-pointer
            transition-all duration-700 ease-[cubic-bezier(.25,1,.5,1)]
            ${isActive ? "flex-[4]" : "flex-[0.9]"}
            `}
          >

            {/* BACKGROUND IMAGE */}
            <img
              src={tech.image}
              className={`absolute inset-0 w-full h-full object-cover
              transition-all duration-700
              ${isActive ? "scale-100" : "scale-110 grayscale opacity-60"}
              `}
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"/>

            {/* COLLAPSED PANEL */}
            {!isActive && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 backdrop-blur-md bg-white/5">

                <Icon className={`w-7 h-7 text-${tech.color}-400`} />

                <span className="text-white text-sm font-['dena'] rotate-90 whitespace-nowrap">
                  {tech.title}
                </span>

              </div>
            )}

            {/* ACTIVE PANEL CONTENT */}
            <motion.div
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 40,
                filter: isActive ? "blur(0px)" : "blur(6px)"
              }}
              transition={{
                duration: 0.45,
                ease: [0.25, 1, 0.5, 1]
              }}
              className="absolute inset-0 flex flex-col justify-end p-8 pointer-events-none"
            >

              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 max-w-lg">

                <div className="flex items-center gap-3 mb-3">

                  <Icon className={`w-6 h-6 text-${tech.color}-400`} />

                  <h3 className="text-2xl font-['dena'] text-white">
                    {tech.title}
                  </h3>

                </div>

                <p className={`text-${tech.color}-300 text-xs uppercase tracking-widest mb-2`}>
                  {tech.subtitle}
                </p>

                <p className="text-gray-300 font-['scrib'] leading-relaxed">
                  {tech.description}
                </p>

              </div>

            </motion.div>

            {/* ACTIVE BORDER */}
            {isActive && (
              <motion.div
                layoutId="accordionBorder"
                className={`absolute inset-0 border border-${tech.color}-500/40 rounded-3xl`}
              />
            )}

          </motion.div>
        );
      })}
    </div>
  );
}