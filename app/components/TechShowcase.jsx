"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const technologies = [
    {
        id: "DMLS",
        title: "DMLS",
        subtitle: "Direct Metal Laser Sintering",
        description: "High-precision metal printing for complex, strong, production-grade parts. Ideal for aerospace and engineering components.",
        color: "red",
        icon: "fa-atom",
        image: "https://www.mechdaily.com/wp-content/uploads/2024/09/What-is-Direct-Metal-Laser-Sintering.webp", // Metal printing machine
    },
    {
        id: "SLS",
        title: "SLS",
        subtitle: "Selective Laser Sintering",
        description: "Powder-based printing for durable nylon parts without support structures. Great for functional prototypes and end-use parts.",
        color: "blue",
        icon: "fa-cube",
        image: "https://blog.spatial.com/hubfs/image2.jpg", // Industrial clean lab
    },
    {
        id: "FDM",
        title: "FDM",
        subtitle: "Fused Deposition Modeling",
        description: "Cost-effective plastic printing for rapid prototyping and low-volume production. Wide range of materials available.",
        color: "green",
        icon: "fa-layer-group",
        image: "https://makerly.eu/wp-content/uploads/2023/05/5-i.jpg", // 3D printing close up
    },
];

export default function TechShowcase() {
    const [activeTech, setActiveTech] = useState("DMLS");

    return (
        <div className="w-full max-w-6xl mx-auto h-[500px] flex flex-col md:flex-row gap-4">
            {technologies.map((tech) => (
                <motion.div
                    key={tech.id}
                    layout
                    onClick={() => setActiveTech(activeTech === tech.id ? tech.id : tech.id)}
                    className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeTech === tech.id ? "md:flex-[3] flex-[3]" : "md:flex-1 flex-1"
                        }`}
                    initial={false}
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src={tech.image}
                            alt={tech.title}
                            className={`w-full h-full object-cover transition-transform duration-700 ${activeTech === tech.id ? 'scale-100' : 'scale-110 grayscale-[50%]'}`}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500 ${activeTech === tech.id ? 'opacity-90' : 'opacity-60 hover:opacity-40'}`} />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        {/* Icon always visible */}
                        <div className={`mb-auto transition-all duration-500 ${activeTech === tech.id ? 'opacity-100 translate-y-0' : 'opacity-70'}`}>
                            <div className={`w-12 h-12 rounded-full bg-${tech.color}-500/20 text-${tech.color}-400 flex items-center justify-center border border-${tech.color}-500/30 backdrop-blur-md`}>
                                <i className={`fa-solid ${tech.icon} text-xl`} />
                            </div>
                        </div>

                        {/* Title & Text */}
                        <div className="relative z-10">
                            <motion.h3
                                layout="position"
                                className={`text-3xl font-['dena'] text-white mb-2 ${activeTech === tech.id ? '' : 'md:-rotate-90 md:origin-bottom-left md:absolute md:bottom-0 md:left-0 md:w-[300px] md:mb-12'}`}
                            >
                                {tech.title}
                            </motion.h3>

                            <div className={`overflow-hidden transition-all duration-500 ${activeTech === tech.id ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className={`text-${tech.color}-300 font-['dena'] text-sm mb-3 tracking-widest uppercase`}>
                                    {tech.subtitle}
                                </p>
                                <p className="text-gray-300 font-['scrib'] leading-relaxed max-w-lg">
                                    {tech.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Active Border */}
                    {activeTech === tech.id && (
                        <motion.div
                            layoutId="activeBorder"
                            className={`absolute inset-0 border-2 border-${tech.color}-500/50 rounded-3xl pointer-events-none`}
                        />
                    )}
                </motion.div>
            ))}
        </div>
    );
}
