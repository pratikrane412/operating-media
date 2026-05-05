import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Mail, Phone, Clock, User, ChevronDown, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";

// ── YOUR EMAILJS CREDENTIALS ──
const EMAILJS_SERVICE_ID = "service_h6tdnuh";   // ← replace
const EMAILJS_TEMPLATE_USER = "template_adrduww";  // ← Template 3 ID (auto-reply to user)
const EMAILJS_TEMPLATE_TEAM = "template_tm7en9q";  // ← Template 4 ID (team notification)
const EMAILJS_PUBLIC_KEY = "6nnnQ21cpn6nf4g7y";   // ← replace

// ── DATA ──
const campuses = [
  {
    city: "Andheri",
    label: "Andheri East",
    address: "Office No. 2, Chandra Niwas CHS, Off Old Police Lane, Andheri East, Mumbai – 400069. 2 mins walk from Andheri Station and Metro Station.",
    phone: "+91 77000 22882",
    email: "contact@operatingmedia.com",
    hours: "Mon–Sat · 9am – 7pm",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.827086054441!2d72.8469753150028!3d19.11862768709886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90e9b9c6255%3A0x8c8a7e6c9e5a4b8b!2sChandra%20Niwas%20Office%20No.%202%2C%20Old%20Police%20Lane%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400069!5e0!3m2!1sen!2sin!4v1701301234567",
    directionsUrl: "https://maps.app.goo.gl/2sQRkudEBixh3wEh7",
    accent: "#2563eb",
    tag: "Main Campus",
  },
  {
    city: "Borivali",
    label: "Borivali West",
    address: "705 Gold Crest Business Center, Opposite Manubhai Jewellers, LT Road, Borivali West, Mumbai – 400092.",
    phone: "+91 93264 74007",
    email: "contact@operatingmedia.com",
    hours: "Mon–Sat · 9am – 7pm",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1!2d72.8560!3d19.2307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1e7c3e3b3e3%3A0x3e3b3e3b3e3b3e3b!2sGold%20Crest%20Business%20Center%2C%20Borivali%20West!5e0!3m2!1sen!2sin!4v1701301234568",
    directionsUrl: "https://maps.app.goo.gl/jwWwd8iTVBLyWHbe8",
    accent: "#ECAB00",
    tag: "Suburbs Campus",
  },
];

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: "Email Us",
    value: "contact@operatingmedia.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: <Phone size={18} />,
    label: "Call Us",
    value: "+91 77000 22882",
    sub: "+91 93264 74007",
  },
  {
    icon: <Clock size={18} />,
    label: "Working Hours",
    value: "Monday – Saturday",
    sub: "9:00 AM – 7:00 PM",
  },
];

export default function ContactHero() {
  const [activeTab, setActiveTab] = useState(0);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const nameRef = useRef('');
  const phoneRef = useRef('');
  const emailRef = useRef('');
  const branchRef = useRef('');
  const courseRef = useRef('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const templateParams = {
      user_name: nameRef.current,
      user_email: emailRef.current,
      user_phone: phoneRef.current,
      user_branch: branchRef.current,
      user_course: courseRef.current,
    };

    try {
      // Auto-reply to user
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_USER,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Notification to your team
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_TEAM,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setSent(true);
      setTimeout(() => setSent(false), 3000);

    } catch (err) {
      console.error("Email failed:", err);
      setError(true);
      setTimeout(() => setError(false), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full bg-[#fcfaf2] font-['Satoshi',sans-serif] selection:bg-[#ECAB00] selection:text-[#0f172a] overflow-hidden">

      {/* ── BACKGROUND GLOWS ── */}
      <div className="fixed top-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#2563eb]/5 blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-[-5%] w-[600px] h-[600px] rounded-full bg-[#ECAB00]/10 blur-[120px] animate-pulse-slow pointer-events-none z-0" />

      {/* ── 1. HERO & FORM SECTION ── */}
      <section className="relative z-10 px-6 py-12 md:py-20 max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-ping absolute" />
              <span className="w-2 h-2 rounded-full bg-[#2563eb] relative z-10" />
              <span className="font-bold text-[11px] md:text-xs text-[#2563eb] uppercase tracking-[0.2em]">
                Get In Touch
              </span>
            </div>
            <h1 className="font-black text-[32px] md:text-[40px] lg:text-[46px] text-[#0f172a] leading-[1.1] tracking-tight mb-4">
              Let's Build Your{' '}
              <span className="relative inline-block text-[#ECAB00]">
                Digital Career
                <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                </svg>
              </span>
            </h1>
            <p className="font-medium text-[16px] md:text-[18px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Have questions about admissions, courses, or placements? Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>

        {/* 2-Column Split: Form + Info Panel */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-start">

          {/* ── DARK PREMIUM FORM ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#0A0F1C] rounded-[2rem] p-6 md:p-10 border border-white/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#ECAB00]/10 rounded-full blur-[80px] pointer-events-none" />

            {/* Form heading */}
            <div className="relative z-10 mb-8">
              <h2 className="font-black text-[22px] text-white leading-tight mb-1">Connect with Us Today</h2>
              <p className="font-medium text-[14px] text-gray-400">We'd love to hear from you</p>
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-5">

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="relative group">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#ECAB00] transition-colors" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    onChange={(e) => nameRef.current = e.target.value}
                    className="w-full bg-[#131B2F] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-[15px] text-white placeholder-gray-500 focus:border-[#ECAB00] focus:ring-1 focus:ring-[#ECAB00] transition-all outline-none"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="flex items-center bg-[#131B2F] border border-white/10 rounded-xl overflow-hidden focus-within:border-[#ECAB00] focus-within:ring-1 focus-within:ring-[#ECAB00] transition-all">
                  <div className="flex items-center gap-2 px-4 border-r border-white/10 text-gray-400 shrink-0">
                    <span className="text-[13px] font-bold">IN</span>
                    <span className="text-[14px] font-medium">+91</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    onChange={(e) => phoneRef.current = e.target.value}
                    className="w-full bg-transparent py-4 px-4 text-[15px] text-white placeholder-gray-500 outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Email */}
                <div className="relative group">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#ECAB00] transition-colors" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    onChange={(e) => emailRef.current = e.target.value}
                    className="w-full bg-[#131B2F] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-[15px] text-white placeholder-gray-500 focus:border-[#ECAB00] focus:ring-1 focus:ring-[#ECAB00] transition-all outline-none"
                    required
                  />
                </div>

                {/* Branch */}
                <div className="relative group">
                  <select
                    onChange={(e) => branchRef.current = e.target.value}
                    className="w-full bg-[#131B2F] border border-white/10 rounded-xl py-4 pl-4 pr-10 text-[15px] text-gray-400 focus:border-[#ECAB00] focus:ring-1 focus:ring-[#ECAB00] transition-all outline-none appearance-none cursor-pointer"
                  >
                    <option value="">Select Branch</option>
                    <option value="Andheri">Andheri</option>
                    <option value="Borivali">Borivali</option>
                    <option value="Online">Online</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
              </div>

              {/* Course Interested */}
              <div className="relative group">
                <select
                  onChange={(e) => courseRef.current = e.target.value}
                  className="w-full bg-[#131B2F] border border-white/10 rounded-xl py-4 pl-4 pr-10 text-[15px] text-gray-400 focus:border-[#ECAB00] focus:ring-1 focus:ring-[#ECAB00] transition-all outline-none appearance-none cursor-pointer"
                >
                  <option value="">Course Interested</option>
                  <option value="Master's Program in Digital Marketing">Master's Program in Digital Marketing</option>
                  <option value="Advance Diploma in Digital Marketing">Advance Diploma in Digital Marketing</option>
                  <option value="Diploma in Digital Marketing">Diploma in Digital Marketing</option>
                  <option value="Others">Others</option>
                </select>
                <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-max flex items-center justify-center gap-2 bg-[#ECAB00] hover:bg-white text-[#0A0F1C] font-black text-[15px] px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(236,171,0,0.5)] active:scale-95 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-[#0A0F1C]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </>
                ) : sent ? (
                  "✓ Message Sent!"
                ) : error ? (
                  "✗ Failed. Try again."
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

            </form>
          </motion.div>

          {/* ── INFO PANEL ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {contactInfo.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex items-start gap-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#2563eb] shrink-0 group-hover:scale-110 group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-[11px] text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="font-black text-[16px] text-[#0f172a] leading-tight mb-1">{item.value}</p>
                  <p className="font-medium text-[13px] text-gray-500">{item.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── 2. CAMPUS TABS & MAP ── */}
      <section className="relative z-10 px-6 pb-20 md:pb-24 max-w-[1400px] mx-auto mt-10">

        <div className="mb-10 text-center md:text-left">
          <h2 className="font-black text-[28px] md:text-[36px] text-[#0f172a] leading-tight">
            Visit us{' '}
            <span className="relative inline-block text-[#ECAB00]">
              in person
              <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
              </svg>
            </span>
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center md:justify-start gap-2 mb-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-1.5 flex shadow-sm">
            {campuses.map((c, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-8 py-3 rounded-xl transition-all duration-300 font-bold text-[15px] ${activeTab === i ? "bg-[#0f172a] text-white shadow-md" : "bg-transparent text-gray-500 hover:text-[#0f172a]"}`}
              >
                {c.city}
              </button>
            ))}
          </div>
        </div>

        {/* Active Campus Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-[1fr_1.5fr] gap-6 items-stretch"
          >
            {/* Campus Info */}
            <div className="bg-white rounded-[2rem] border border-gray-200 shadow-md p-8 md:p-10 flex flex-col justify-between">
              <div>
                <span
                  className="inline-block px-4 py-1.5 rounded-full mb-6 font-bold text-[11px] uppercase tracking-widest text-white"
                  style={{ backgroundColor: campuses[activeTab].accent }}
                >
                  {campuses[activeTab].tag}
                </span>

                <h3 className="font-black text-[28px] md:text-[32px] text-[#0f172a] leading-tight mb-2">
                  {campuses[activeTab].city}
                </h3>
                <p className="font-bold text-[16px] text-gray-400 mb-8 pb-6 border-b border-gray-100">
                  {campuses[activeTab].label}
                </p>

                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={18} className="text-[#ECAB00]" />
                    </div>
                    <p className="font-medium text-[15px] text-gray-600 leading-relaxed">
                      {campuses[activeTab].address}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-[#2563eb]" />
                    </div>
                    <p className="font-bold text-[15px] text-[#0f172a]">
                      {campuses[activeTab].phone}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-[#ECAB00]" />
                    </div>
                    <p className="font-bold text-[15px] text-[#0f172a]">
                      {campuses[activeTab].email}
                    </p>
                  </div>
                </div>
              </div>


              <a href={campuses[activeTab].directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-10 flex items-center gap-2 font-black text-[15px] text-[#2563eb] hover:text-[#0f172a] transition-colors group"
              >
                Get Directions <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Map iframe */}
            <div className="rounded-[2rem] overflow-hidden border border-gray-200 shadow-md h-[400px] lg:h-auto relative group">
              <iframe
                src={campuses[activeTab].mapSrc}
                className="w-full h-full filter grayscale-[0.4] group-hover:grayscale-0 transition-all duration-500 border-0"
                allowFullScreen=""
                loading="lazy"
                title={`${campuses[activeTab].city} Campus`}
              />
            </div>
          </motion.div>
        </AnimatePresence>

      </section>

      {/* ── 3. BOTTOM CTA STRIP ── */}
      <section className="relative z-10 px-6 pb-20 max-w-[1400px] mx-auto">
        <div className="bg-[#0A0F1C] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_20px_50px_-10px_rgba(10,15,28,0.5)] border border-white/5 relative overflow-hidden">

          <div className="absolute top-[-50%] left-[-10%] w-[300px] h-[300px] bg-[#2563eb]/20 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 text-center md:text-left">
            <p className="font-black text-[24px] md:text-[32px] text-white leading-tight mb-2">
              Ready to start your{' '}
              <span className="relative inline-block text-[#ECAB00]">
                journey?
                <svg className="absolute w-full h-[8px] -bottom-1 left-0 text-[#ECAB00]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                </svg>
              </span>
            </p>
            <p className="font-medium text-[16px] text-gray-400">
              Join 16,000+ students who've built careers through Operating Media.
            </p>
          </div>

          <button className="relative z-10 shrink-0 flex items-center gap-2 bg-[#ECAB00] hover:bg-white text-[#0A0F1C] font-black text-[16px] px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(236,171,0,0.5)] active:scale-95 group">
            Enroll Now <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      <style>{`
        .animate-pulse-slow {
          animation: pulseGlow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
    </main >
  );
}