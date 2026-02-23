'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, Award, Building, Briefcase, Handshake, ArrowRight, CheckCircle, ExternalLink, Linkedin, ChevronRight } from 'lucide-react'

export default function About() {
  // State for active timeline item
  const [activeTimelineItem, setActiveTimelineItem] = useState(0)

  // Timeline data
  const timelineItems = [
    { year: 2018, title: 'Founded', description: 'Galactic 3D was established with a vision to revolutionize additive manufacturing.' },
    { year: 2019, title: 'First Product Launch', description: 'Released our flagship metal 3D printer, setting new industry standards.' },
    { year: 2020, title: 'Global Expansion', description: 'Opened offices in Europe and Asia to serve international clients.' },
    { year: 2021, title: 'Industry Partnership', description: 'Formed strategic alliance with aerospace and automotive leaders.' },
    { year: 2022, title: 'Innovation Award', description: 'Received the Global Additive Manufacturing Innovation Award.' },
    { year: 2023, title: 'Sustainability Initiative', description: 'Launched eco-friendly materials and carbon-neutral production.' },
  ]

  return (
    <main className="text-white">
      {/* HERO / INTRO */}
      <section className="relative min-h-[70vh] pt-28 pb-16 flex items-end overflow-hidden">
        {/* Background video */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="auto" poster="https://images.unsplash.com/photo-1581091215367-59ab6d0051d4?q=80&w=1600&auto=format&fit=crop">
            <source src="/galactic-bg.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#1a0f0f]/40 to-[#0f0b0b]/80" />
          <div className="absolute -inset-40 bg-[radial-gradient(800px_circle_at_20%_10%,rgba(185,28,28,0.20),transparent_60%)]" />
          <div className="absolute -inset-40 bg-[radial-gradient(700px_circle_at_80%_20%,rgba(255,255,255,0.06),transparent_65%)] animate-spin-slow" />
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-['test'] leading-tight mb-6">About Galactic 3D</h1>
            <p className="text-xl md:text-2xl font-['scrib'] text-red-50/90 max-w-3xl mb-8">Pioneering the future of Additive Manufacturing.</p>
            <Link href="#our-story" className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-['dena'] px-6 py-3 rounded-md transition">
              Join Our Journey <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
      {/* OUR STORY & HISTORY */}
      <section id="our-story" className="py-20 bg-dark-300 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-primary/10 to-transparent opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-secondary/10 to-transparent opacity-60"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-['dena'] mb-4 inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Story & History
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-primary mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/50"></div>

              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative pl-12 pb-10 cursor-pointer ${index === activeTimelineItem ? 'opacity-100' : 'opacity-60'}`}
                  onClick={() => setActiveTimelineItem(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: index === activeTimelineItem ? 1 : 0.6, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center ${index === activeTimelineItem ? 'bg-primary' : 'bg-dark-200'}`}>
                    <span className="text-xs font-['dena']">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-['test'] mb-2">{item.title}</h3>
                  <p className="text-white/70 font-['scrib']">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-dark-200/50 backdrop-blur-sm p-8 rounded-xl border border-white/10"
            >
              <h3 className="text-2xl font-['test'] mb-6 text-primary">Our Journey</h3>
              <p className="mb-4 font-['scrib'] text-white/80">
                Founded in 2018 by a team of engineers and designers with a shared vision, Galactic 3D began as a small startup with big dreams. Our founders recognized the untapped potential of additive manufacturing to revolutionize how products are designed, prototyped, and manufactured.
              </p>
              <p className="mb-4 font-['scrib'] text-white/80">
                What started as a research project in a university lab has grown into a global leader in advanced manufacturing solutions. Through relentless innovation and strategic partnerships, we've expanded our capabilities and reach year after year.
              </p>
              <p className="mb-6 font-['scrib'] text-white/80">
                Today, Galactic 3D stands at the forefront of the industry, pushing the boundaries of what's possible with 3D printing technology. Our journey continues as we explore new materials, develop more efficient processes, and create solutions that empower our clients to bring their most ambitious ideas to life.
              </p>
              <div className="flex items-center gap-2 text-primary">
                <Link href="/company-history" className="inline-flex font-['dena'] items-center hover:underline">
                  <span>Read our full history</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-24 bg-dark-200 relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-full h-full rounded-full bg-gradient-to-r from-primary/10 to-transparent blur-3xl"></div>
          <div className="absolute -bottom-1/2 -right-1/4 w-full h-full rounded-full bg-gradient-to-l from-secondary/10 to-transparent blur-3xl"></div>
          <div className="absolute inset-0 bg-dark-200/80"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-['dena'] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Vision & Mission
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-primary mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              className="bg-dark-300/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 h-full"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-['test']">Our Vision</h3>
              </div>
              <p className="mb-6 text-white/80 font-['scrib']">
                To lead the global transformation of manufacturing through innovative additive technologies that enable sustainable, efficient, and limitless creation.
              </p>
              <p className="text-white/80 font-['scrib']">
                We envision a future where additive manufacturing is the cornerstone of production across industries, where design constraints are eliminated, and where customization at scale is the norm rather than the exception.
              </p>
              <p className="mt-6 text-white/80 font-['scrib']">
                By pioneering advanced materials, intelligent systems, and accessible platforms, we aim to democratize manufacturing and empower creators worldwide to bring their ideas to life with unprecedented speed and precision.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="bg-dark-300/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 h-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Building className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-['test']">Our Mission</h3>
              </div>
              <p className="mb-6 text-white/80 font-['scrib']">
                To deliver cutting-edge additive manufacturing solutions that solve complex challenges and create new possibilities for our clients and partners.
              </p>
              <ul className="space-y-4 font-['scrib']">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-white/80">Develop and deploy next-generation 3D printing technologies that set new standards for speed, precision, and material capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-white/80">Foster a culture of continuous innovation through research, collaboration, and knowledge sharing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-white/80">Provide exceptional service and support that empowers our clients to maximize the potential of additive manufacturing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-white/80">Lead the industry in sustainable practices and environmentally responsible manufacturing solutions</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOUNDERS & TEAM */}
      <section className="py-24 bg-dark-300 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-dark-300/90"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-['dena'] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Founders & Team
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-primary mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          {/* Founders Section */}
          <div className="mb-16">
            <motion.h3
              className="text-2xl font-['test'] mb-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Founders
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Founder 1 */}
              <motion.div
                className="bg-dark-200/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop"
                    alt="Dr. Alexander Chen"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-['test'] mb-1">Dr. Alexander Chen</h4>
                  <p className="text-primary mb-4 font-['dena']">CEO & Co-Founder</p>
                  <p className="text-white/70 font-['scrib'] mb-4">Former aerospace engineer with 15+ years of experience in advanced manufacturing technologies.</p>
                  <div className="flex items-center gap-3">
                    <Link href="https://linkedin.com" className="text-white/60 hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link href="/team/alexander-chen" className="text-white/60 hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Founder 2 */}
              <motion.div
                className="bg-dark-200/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop"
                    alt="Dr. Sophia Rodriguez"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-['test'] mb-1">Dr. Sophia Rodriguez</h4>
                  <p className="text-primary mb-4 font-['dena']">CTO & Co-Founder</p>
                  <p className="text-white/70 mb-4 font-['scrib']">Materials scientist and pioneer in metal additive manufacturing with multiple patents.</p>
                  <div className="flex items-center gap-3">
                    <Link href="https://linkedin.com" className="text-white/60 hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link href="/team/sophia-rodriguez" className="text-white/60 hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Founder 3 */}
              <motion.div
                className="bg-dark-200/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop"
                    alt="Marcus Johnson"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-['test'] mb-1">Marcus Johnson</h4>
                  <p className="text-primary mb-4 font-['dena']">COO & Co-Founder</p>
                  <p className="text-white/70 mb-4 font-['scrib']">Former operations executive with expertise in scaling manufacturing businesses globally.</p>
                  <div className="flex items-center gap-3">
                    <Link href="https://linkedin.com" className="text-white/60 hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link href="/team/marcus-johnson" className="text-white/60 hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-16">
            <motion.h3
              className="text-2xl font-['test'] mb-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Leadership Team
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Team Member 1 */}
              <motion.div
                className="bg-dark-200/30 backdrop-blur-sm rounded-lg overflow-hidden border border-white/5"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
                    alt="Emily Zhang"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-['test']">Emily Zhang</h4>
                  <p className="text-primary/90 text-sm mb-2 font-['dena']">VP of Engineering</p>
                </div>
              </motion.div>

              {/* Team Member 2 */}
              <motion.div
                className="bg-dark-200/30 backdrop-blur-sm rounded-lg overflow-hidden border border-white/5"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
                    alt="David Patel"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-['test']">David Patel</h4>
                  <p className="text-primary/90 text-sm mb-2 font-['dena']">VP of Product</p>
                </div>
              </motion.div>

              {/* Team Member 3 */}
              <motion.div
                className="bg-dark-200/30 backdrop-blur-sm rounded-lg overflow-hidden border border-white/5"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=400&auto=format&fit=crop"
                    alt="Sarah Johnson"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-['test']">Sarah Johnson</h4>
                  <p className="text-primary/90 text-sm mb-2 font-['dena']">VP of Sales</p>
                </div>
              </motion.div>

              {/* Team Member 4 */}
              <motion.div
                className="bg-dark-200/30 backdrop-blur-sm rounded-lg overflow-hidden border border-white/5"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop"
                    alt="Michael Torres"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-['test']">Michael Torres</h4>
                  <p className="text-primary/90 text-sm mb-2 font-['dena']">VP of Research</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Team Photo */}
          <motion.div
            className="relative rounded-xl overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-96 md:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop"
                alt="Galactic 3D Team"
                fill
                style={{ objectFit: 'cover' }}
                className="brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-['test'] mb-4">Join Our Team</h3>
                <p className="text-white/80 mb-6 font-['scrib'] max-w-2xl">We're always looking for talented individuals who are passionate about pushing the boundaries of what's possible in additive manufacturing.</p>
                <Link href="/careers" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 font-['dena'] rounded-md transition">
                  View Open Positions <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FACILITY SHOWCASE */}
      <section className="py-24 bg-dark-200 relative overflow-hidden">
        {/* Ambient video background */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <video className="w-full h-full object-cover opacity-30" autoPlay muted loop playsInline preload="auto" poster="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop">
            <source src="https://videos.pexels.com/video-files/1409899/1409899-hd_1920_1080_24fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-dark-200/70"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-['dena'] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Facility Showcase
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-primary mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p
              className="mt-6 text-xl font-['scrib'] text-white/80 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our state-of-the-art manufacturing facilities combine cutting-edge technology with sustainable practices.
            </motion.p>
          </div>

          {/* Facility Images Carousel */}
          <motion.div
            className="mb-16 overflow-hidden rounded-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[300px] md:h-[500px] w-full">
              <Image
                src="https://ik.imagekit.io/0s6dxbeae/unnamed.webp?updatedAt=1756120646928"
                alt="Galactic 3D Manufacturing Facility"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-xl"
              />
            </div>
          </motion.div>

          {/* Facility Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              className="bg-dark-300/50 backdrop-blur-sm p-6 rounded-xl border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-['test'] mb-4">ISO Certified</h3>
              <p className="text-white/70 font-['scrib']">
                Our facilities maintain ISO 9001 and ISO 13485 certifications, ensuring the highest standards of management and medical device production capabilities.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="bg-dark-300/50 backdrop-blur-sm p-6 rounded-xl border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <Building className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-['test'] mb-4">Sustainable Operations</h3>
              <p className="text-white/70 font-['scrib']">
                Powered by 100% renewable energy and designed for minimal environmental impact, our facilities represent our commitment to sustainable manufacturing practices.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="bg-dark-300/50 backdrop-blur-sm p-6 rounded-xl border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-['test'] mb-4">Virtual Tours Available</h3>
              <p className="text-white/70 mb-4 font-['scrib']">
                Experience our facilities from anywhere in the world through our immersive virtual tour platform.
              </p>
              <Link href="/virtual-tour" className="text-primary hover:underline inline-flex font-['dena'] items-center gap-1">
                <span>Schedule a tour</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-dark-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl font-['test'] text-primary mb-2">50+</div>
              <div className="text-xl font-['dena'] mb-1">Global Patents</div>
              <p className="text-white/60 font-['scrib'] text-sm">Innovations in additive manufacturing</p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-5xl font-['test'] text-primary mb-2">200+</div>
              <div className="text-xl font-['dena'] mb-1">Team Members</div>
              <p className="text-white/60 font-['scrib'] text-sm">Across 12 countries</p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-5xl font-['test'] text-primary mb-2">500K+</div>
              <div className="text-xl font-['dena'] mb-1">Parts Produced</div>
              <p className="text-white/60 font-['scrib'] text-sm">For aerospace, automotive, and medical industries</p>
            </motion.div>

            {/* Stat 4 */}
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-5xl font-['test'] text-primary mb-2">30+</div>
              <div className="text-xl font-['dena'] mb-1">Industry Awards</div>
              <p className="text-white/60 font-['scrib'] text-sm">For innovation and excellence</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & PARTNERSHIPS */}
      <section className="py-20 bg-dark-200 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-['dena'] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Certifications & Partnerships
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-primary mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            {/* Logo 1 */}
            <motion.div
              className="bg-dark-300/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex items-center justify-center h-32"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=200&auto=format&fit=crop"
                alt="ISO Certification"
                width={120}
                height={60}
                style={{ objectFit: 'contain', filter: 'brightness(0.9) grayscale(0.5)' }}
              />
            </motion.div>

            {/* Logo 2 */}
            <motion.div
              className="bg-dark-300/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex items-center justify-center h-32"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=200&auto=format&fit=crop"
                alt="Aerospace Partner"
                width={120}
                height={60}
                style={{ objectFit: 'contain', filter: 'brightness(0.9) grayscale(0.5)' }}
              />
            </motion.div>

            {/* Logo 3 */}
            <motion.div
              className="bg-dark-300/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex items-center justify-center h-32"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=200&auto=format&fit=crop"
                alt="Automotive Partner"
                width={120}
                height={60}
                style={{ objectFit: 'contain', filter: 'brightness(0.9) grayscale(0.5)' }}
              />
            </motion.div>

            {/* Logo 4 */}
            <motion.div
              className="bg-dark-300/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex items-center justify-center h-32"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=200&auto=format&fit=crop"
                alt="Medical Partner"
                width={120}
                height={60}
                style={{ objectFit: 'contain', filter: 'brightness(0.9) grayscale(0.5)' }}
              />
            </motion.div>

            {/* Logo 5 */}
            <motion.div
              className="bg-dark-300/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex items-center justify-center h-32"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=200&auto=format&fit=crop"
                alt="Research Partner"
                width={120}
                height={60}
                style={{ objectFit: 'contain', filter: 'brightness(0.9) grayscale(0.5)' }}
              />
            </motion.div>
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Link href="/partners" className="inline-flex items-center gap-2 text-primary hover:text-secondary font-['test'] transition-colors">
              <span>View all our partners and certifications</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="py-20 bg-dark-300 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-dark-300/80"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-5xl font-['test'] mb-6">Join Our Team</h2>
              <p className="text-xl text-white/80 font-['scrib'] mb-8">
                Be part of a team that's redefining what's possible in additive manufacturing. We're looking for passionate individuals who thrive on innovation and collaboration.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-['dena']">Diverse & Inclusive Culture</h3>
                    <p className="text-white/70 font-['scrib']">We celebrate diversity and create an inclusive environment where everyone can thrive.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-['dena']">Continuous Learning</h3>
                    <p className="text-white/70 font-['scrib']">We invest in your growth with ongoing training and development opportunities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Handshake className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-['dena']">Competitive Benefits</h3>
                    <p className="text-white/70 font-['scrib']">Comprehensive healthcare, retirement plans, and work-life balance initiatives.</p>
                  </div>
                </div>
              </div>
              <Link href="/careers" className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-['dena'] px-6 py-3 rounded-md transition">
                View Open Positions <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                alt="Galactic 3D Team Collaboration"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent opacity-60"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-dark-300 to-dark-200 relative overflow-hidden">
        {/* Futuristic Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-dark-300/50"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-['test'] mb-8 text-white leading-tight">
              Together, We Shape the Future<br />of Manufacturing
            </h2>
            <p className="text-xl text-white/80 font-['scrib'] mb-10 max-w-3xl mx-auto">
              Partner with us to transform your ideas into reality with cutting-edge additive manufacturing solutions.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link
                  href="/contact"
                  className="bg-primary text-white font-['dena'] py-4 px-8 rounded-full inline-flex items-center space-x-2 hover:bg-primary/90 transition-colors duration-300 shadow-lg shadow-primary/20"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link
                  href="/projects"
                  className="bg-transparent text-white font-['dena'] py-4 px-8 rounded-full border-2 border-white/30 inline-flex items-center space-x-2 hover:bg-white/10 transition-all duration-300"
                >
                  <span>Explore Our Work</span>
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}