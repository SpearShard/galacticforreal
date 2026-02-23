"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});
  const [activeAccordion, setActiveAccordion] = useState(null);
  const formRef = useRef(null);

  // Form validation
  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newErrors.email = "Invalid email";
    if (!form.subject) newErrors.subject = "Subject is required";
    if (!form.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setStatus("loading");
    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setForm({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
      // Scroll to form top to show success message
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 1500);
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-20">
        {/* <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            className="w-full h-full object-cover opacity-40"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/galactic-bg.mp4" type="video/mp4" />
            <source
              src="https://videos.pexels.com/video-files/6819731/6819731-hd_1920_1080_24fps.mp4"
              type="video/mp4"
            />
          </video>
        </div> */}
        {/* <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/60 to-[#0f0b0b]"></div> */}

        <div className="container mx-auto px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-0.5 w-12 bg-red-500"></div>
              <div className="text-xs md:text-sm  tracking-[0.2em] text-red-400 uppercase">
                Contact Us
              </div>
              <div className="h-0.5 w-12 bg-red-500"></div>
            </div>

            <h1 className="text-5xl md:text-7xl font-['test'] leading-tight mb-6">
              Let's Build Something
              <br />
              <span className="text-red-400">Extraordinary Together</span>
            </h1>

            <p className="text-gray-300 font-['scrib'] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
              From concept to creation, our team is ready to help you bring your
              ideas to life with precision additive manufacturing solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 border border-white/20 rounded-sm px-4 py-2">
                <span className="text-sm font-['scrib']">
                  24-48 Hour Response Time
                </span>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-sm px-4 py-2">
                <span className="text-sm font-['scrib']">
                  Expert Consultation
                </span>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-sm px-4 py-2">
                <span className="text-sm font-['scrib']">NDA Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container mx-auto px-6 mb-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Form Card */}
        <main
          id="contact-form"
          ref={formRef}
          className="order-2 lg:order-1 lg:col-span-2 flex flex-col gap-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-black/80 to-red-950/30 p-10 rounded-3xl shadow-2xl border border-red-500/20 hover:shadow-primary/30 transition-all duration-300 relative overflow-hidden"
          >
            {/* Background Elements */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>

            <h2 className="text-3xl md:text-5xl font-['test'] text-primary drop-shadow-lg mb-8 relative z-10">
              Send Us a Message
            </h2>

            {status === "success" ? (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-8 text-center animate-fade-in">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-monumentExtended text-white mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-red-50/90 mb-6">
                  Thank you for reaching out. Our team will get back to you
                  within 24-48 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="bg-primary hover:bg-secondary text-white font-monumentExtended tracking-wide px-6 py-3 rounded-md transition-colors duration-300 focus:outline-none active:scale-95"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                className="space-y-8 relative font-['scrib'] z-10"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-base font-semibold text-red-50/90 mb-2"
                    >
                      Your Name<span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`w-full bg-black/30 border ${
                        errors.name ? "border-red-500" : "border-red-500/20"
                      } rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10`}
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        className="text-red-500 text-xs mt-1 animate-fade-in"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-semibold text-red-50/90 mb-2"
                    >
                      Your Email<span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      className={`w-full bg-black/30 border ${
                        errors.email ? "border-red-500" : "border-red-500/20"
                      } rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10`}
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="text-red-500 text-xs mt-1 animate-fade-in"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-base font-semibold text-red-50/90 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full bg-black/30 border border-red-500/20 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10"
                      placeholder="Your Company"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-base font-semibold text-red-50/90 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full bg-black/30 border border-red-500/20 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-base font-semibold text-red-50/90 mb-2"
                  >
                    Subject<span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    aria-required="true"
                    aria-invalid={!!errors.subject}
                    aria-describedby={
                      errors.subject ? "subject-error" : undefined
                    }
                    className={`w-full bg-black/30 border ${
                      errors.subject ? "border-red-500" : "border-red-500/20"
                    } rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10`}
                    placeholder="How can we help you?"
                    value={form.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && (
                    <p
                      id="subject-error"
                      className="text-red-500 text-xs mt-1 animate-fade-in"
                    >
                      {errors.subject}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-base font-semibold text-red-50/90 mb-2"
                  >
                    Message<span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    className={`w-full bg-black/30 border ${
                      errors.message ? "border-red-500" : "border-red-500/20"
                    } rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10 resize-none`}
                    placeholder="Tell us about your project or inquiry..."
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <p
                      id="message-error"
                      className="text-red-500 text-xs mt-1 animate-fade-in"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    className={`w-full bg-primary hover:bg-secondary text-white font-monumentExtended tracking-wide py-3 px-6 rounded-md text-base shadow-lg transition-all duration-300 flex items-center justify-center focus:outline-none active:scale-95`}
                    disabled={status === "loading"}
                    aria-busy={status === "loading"}
                  >
                    {status === "loading" ? (
                      <span className="flex items-center">
                        <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></span>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Response Time Note */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-200/50 p-6 rounded-2xl border border-dark-100 shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-['dena'] mb-1">
                  Quick Response Guarantee
                </h3>
                <p className="text-gray-400 font-['scrib']">
                  We typically respond to all inquiries within 24-48 hours
                  during business days. For urgent matters, please call us
                  directly.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-dark-200/80 p-4 rounded-2xl shadow-xl border border-dark-100 overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9 w-full h-96 rounded-lg overflow-hidden relative group">
              <iframe
                title="Galactic 3D Location"
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d62198.617989690334!2d77.60654333821292!3d13.00931143128238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d13.0242069!2d77.6025813!4m5!1s0x3bae11a915ab800d%3A0x7b9df0b7c02a0008!2sGalactic-3D%2C%20Cambridge%20Institute%20of%20Technology%2C%20Jai%20Bhuvaneshwari%20Layout%20Road%2C%20SR%20Layout%2C%20Chikkabasavanapura%2C%20Krishnarajapuram%2C%20Bengaluru%2C%20Karnataka!3m2!1d13.0135513!2d77.7036341!5e0!3m2!1sen!2sin!4v1750678240914!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              {/* Overlay for directions */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Galactic-3D,+Cambridge+Institute+of+Technology,+Jai+Bhuvaneshwari+Layout+Road,+SR+Layout,+Chikkabasavanapura,+Krishnarajapuram,+Bengaluru,+Karnataka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-xl text-base shadow-lg transition-all duration-300 focus:ring-4 focus:outline-none active:scale-95 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        </main>

        {/* Contact Info Sidebar */}
        <aside className="order-1 lg:order-2 lg:col-span-1 space-y-8 lg:sticky lg:top-32 lg:self-start">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-dark-200/80 rounded-2xl shadow-2xl p-8 flex flex-col gap-8 border border-dark-100"
          >
            <h2 className="text-2xl font-['test'] mb-2 text-primary">
              Alternative Ways to Reach Us
            </h2>

            {/* Location */}
            <div className="flex items-start space-x-4 group transition-all duration-200 hover:bg-primary/10 rounded-lg p-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-all duration-200">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-['dena'] mb-1 tracking-wide">
                  Our Location
                </h3>
                <address className="font-['scrib'] not-italic text-gray-400 leading-tight">
                  Cambridge Institute of Technology, Jai Bhuvaneshwari Layout
                  Rd, SR Layout, Chikkabasavanapura, Krishnarajapuram,
                  Bengaluru, Karnataka 560036
                </address>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4 group transition-all duration-200 hover:bg-primary/10 rounded-lg p-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-all duration-200">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-['dena'] mb-1 tracking-wide">
                  Phone
                </h3>
                <p className="font-['scrib'] text-gray-400 mb-1">
                  Main:{" "}
                  <a
                    href="tel:8939058575"
                    className="hover:text-primary transition-colors"
                  >
                    89390 58575
                  </a>
                </p>
                <p className="font-['scrib'] text-gray-400 mb-1">
                  Support:{" "}
                  <a
                    href="tel:8939058575"
                    className="hover:text-primary transition-colors"
                  >
                    89390 58575
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4 group transition-all duration-200 hover:bg-primary/10 rounded-lg p-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-all duration-200">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <div className="font-['test']">
                <h3 className="text-lg font-['dena'] mb-1 tracking-wide">
                  Email
                </h3>
                <p className="text-gray-400 font-['scrib'] mb-1">
                  General:{" "}
                  <a
                    href="mailto:admin@galactic-3d.com"
                    className="hover:text-primary transition-colors"
                  >
                    admin@galactic-3d.com
                  </a>
                </p>
                <p className="text-gray-400 font-['scrib'] mb-1">
                  Support:{" "}
                  <a
                    href="mailto:support@galactic-3d.com"
                    className="hover:text-primary transition-colors"
                  >
                    support@galactic-3d.com
                  </a>
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start space-x-4 group transition-all duration-200 hover:bg-primary/10 rounded-lg p-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-all duration-200">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="font-['test']">
                <h3 className="text-lg font-['dena'] mb-1 tracking-wide">
                  Business Hours
                </h3>
                <p className="text-gray-400 font-['scrib']  mb-1">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-gray-400 font-['scrib']  mb-1">
                  Saturday: 9:00 AM - 4:00 PM
                </p>
                <p className="text-gray-400 font-['scrib'] ">Sunday: Closed</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-['dena'] mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition duration-300"
                >
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A105323006&keywords=Galactic%203D%20PVT%20LTD&origin=ENTITY_SEARCH_HOME_HISTORY&sid=q%3B_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition duration-300"
                >
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/galactic.3d/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition duration-300"
                >
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-primary/20 to-dark-300 rounded-2xl shadow-2xl p-8 border border-primary/30"
          >
            <h3 className="text-xl font-['test'] mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-gray-300 mb-6 font-['scrib']">
              Our team is ready to help you with any urgent inquiries or
              technical support.
            </p>
            <a
              href="tel:8939058575"
              className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-xl text-base shadow-lg transition-all duration-300 focus:ring-4 focus:outline-none active:scale-95 flex items-center gap-2 w-full justify-center"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <p className="font-['dena']">Call Our Support Team</p>
            </a>
          </motion.div>
        </aside>
      </div>

      {/* FAQ Section with Accordion */}
      <div className="container mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-6 font-['dena'] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl font-['scrib'] text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about our services and processes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto space-y-4"
        >
          {/* FAQ Item 1 */}
          <div className="bg-dark-200/80 rounded-xl overflow-hidden border border-dark-100">
            <button
              onClick={() => toggleAccordion(0)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
              <h3 className="text-xl font-['dena']">
                What materials do you work with?
              </h3>
              <svg
                className={`w-6 h-6 text-primary transition-transform duration-300 ${
                  activeAccordion === 0 ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeAccordion === 0 ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-6 pt-0 text-gray-400 font-['test']">
                We work with a wide range of materials including various
                plastics (PLA, ABS, PETG, Nylon), resins, metals (aluminum,
                titanium, steel), and composites. The specific material choice
                depends on your project requirements and intended application.
                Our experts can help you select the best material for your
                specific needs.
              </div>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-dark-200/80 rounded-xl overflow-hidden border border-dark-100">
            <button
              onClick={() => toggleAccordion(1)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
              <h3 className="text-xl font-['dena']">
                How long does the 3D printing process take?
              </h3>
              <svg
                className={`w-6 h-6 text-primary transition-transform duration-300 ${
                  activeAccordion === 1 ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeAccordion === 1 ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-6 pt-0 text-gray-400 font-['test']">
                Project timelines vary based on complexity, size, and material.
                Simple prototypes can be completed in 1-3 days, while complex
                production parts may take 1-2 weeks. We'll provide a detailed
                timeline during your consultation and keep you updated
                throughout the process. For urgent projects, we also offer
                expedited services at an additional cost.
              </div>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-dark-200/80 rounded-xl overflow-hidden border border-dark-100">
            <button
              onClick={() => toggleAccordion(2)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
              <h3 className="text-xl font-['dena']">
                Do you offer design services?
              </h3>
              <svg
                className={`w-6 h-6 text-primary transition-transform duration-300 ${
                  activeAccordion === 2 ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeAccordion === 2 ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-6 pt-0 text-gray-400 font-['test']">
                Yes, our team of experienced designers can help bring your ideas
                to life. We offer comprehensive design services from concept
                development to CAD modeling and optimization for additive
                manufacturing. Whether you have a rough sketch or a detailed
                concept, we can transform it into a printable 3D model. Our
                design team specializes in creating functional, efficient, and
                aesthetically pleasing designs.
              </div>
            </div>
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-dark-200/80 rounded-xl overflow-hidden border border-dark-100">
            <button
              onClick={() => toggleAccordion(3)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
              <h3 className="text-xl font-['dena']">
                What file formats do you accept?
              </h3>
              <svg
                className={`w-6 h-6 text-primary transition-transform duration-300 ${
                  activeAccordion === 3 ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeAccordion === 3 ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-6 pt-0 text-gray-400 font-['test']">
                We accept most standard 3D file formats including STL, OBJ,
                STEP, IGES, and native CAD files from software like SolidWorks,
                Fusion 360, and AutoCAD. If you have a file in a different
                format, please contact us to discuss compatibility. Our
                engineering team can also help convert or repair files if
                needed.
              </div>
            </div>
          </div>

          {/* FAQ Item 5 */}
          <div className="bg-dark-200/80 rounded-xl overflow-hidden border border-dark-100">
            <button
              onClick={() => toggleAccordion(4)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
              <h3 className="text-xl font-['dena']">
                Can you handle large production runs?
              </h3>
              <svg
                className={`w-6 h-6 text-primary transition-transform duration-300 ${
                  activeAccordion === 4 ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeAccordion === 4 ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-6 pt-0 text-gray-400 font-['test']">
                Absolutely. Our facility is equipped for both small batch
                production and larger manufacturing runs. We'll work with you to
                determine the most efficient production method based on your
                quantity requirements. For high-volume production, we can
                develop a customized manufacturing plan that optimizes cost,
                reliability, and delivery time. We also offer inventory management
                and just-in-time production services for ongoing projects.
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-primary/80 to-secondary/80 py-16"
      >
        <div className="container mx-auto px-6 text-center">
          {/* <h2 className="heading-2 mb-6 font-['scrib'] ">Ready to Start Your Project?</h2> */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-['test'] mb-8 text-white leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-3xl font-['scrib'] mx-auto">
            Contact us today to discuss your needs and discover how our additive
            manufacturing solutions can benefit your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-primary hover:bg-gray-200 font-['dena'] py-4 px-10 rounded-xl text-lg inline-block shadow-lg transition-all duration-300 focus:ring-4 focus:ring-white/40 focus:outline-none active:scale-95 hover:shadow-white/40"
            >
              Explore Our Services
            </Link>
            <a
              href="#contact-form"
              className="bg-dark-400 hover:bg-dark-300 text-white font-['dena'] py-4 px-10 rounded-xl text-lg inline-block shadow-lg transition-all duration-300 focus:ring-4 focus:ring-dark-400/40 focus:outline-none active:scale-95 hover:shadow-dark-400/40"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </motion.div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 1s both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s both;
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 1s both;
        }
        @keyframes slide-down {
          0% {
            opacity: 0;
            transform: translateY(-40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-right {
          animation: slide-right 1s both;
        }
        @keyframes slide-right {
          0% {
            opacity: 0;
            transform: translateX(-40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
}
