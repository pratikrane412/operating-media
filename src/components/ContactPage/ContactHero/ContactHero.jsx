import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Mail, Phone, Clock, ChevronRight, User, ChevronDown, ArrowRight } from "lucide-react";

// ── DATA ──
const campuses = [
  {
    city: "Mumbai",
    label: "Andheri West",
    address: "Office no 2, Chandra Niwas, off Old Police Lane, Andheri East, Mumbai, Maharashtra 400069",
    phone: "+91 96199 58615",
    email: "mumbai@operatingmedia.com",
    hours: "Mon–Sat · 9am – 7pm",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.827086054441!2d72.8469753150028!3d19.11862768709886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90e9b9c6255%3A0x8c8a7e6c9e5a4b8b!2sChandra%20Niwas%20Office%20No.%202%2C%20Old%20Police%20Lane%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400069!5e0!3m2!1sen!2sin!4v1701301234567",
    accent: "#2563eb",
    tag: "Main Campus",
  },
  {
    city: "Borivali",
    label: "Borivali West",
    address: "705 Gold Crest Business Center, Opp Manubhai Jewellers LT Road, Borivali, West, Borivali West, Mumbai, Maharashtra 400092",
    phone: "+91 77000 22882",
    email: "borivali@operatingmedia.com",
    hours: "Mon–Sat · 9am – 7pm",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.827086054441!2d72.8469753150028!3d19.11862768709886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90e9b9c6255%3A0x8c8a7e6c9e5a4b8b!2sChandra%20Niwas%20Office%20No.%202%2C%20Old%20Police%20Lane%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400069!5e0!3m2!1sen!2sin!4v1701301234567",
    accent: "#ECAB00",
    tag: "Suburbs Campus",
  },
];

const contactInfo = [
  { icon: <Mail size={18} />, label: "Email Us", value: "contact@operatingmedia.com", sub: "We reply within 24 hours" },
  { icon: <Phone size={18} />, label: "Call Us", value: "+91 77000 22882", sub: "+91 93264 74007" },
  { icon: <Clock size={18} />, label: "Working Hours", value: "Monday – Saturday", sub: "9:00 AM – 7:00 PM" },
];

export default function ContactHero() {
  const [activeTab, setActiveTab] = useState(0);
  const [sent, setSent] = useState(false);

  // Form State
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", location: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
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
              Let's Build Your <span className="relative inline-block text-[#ECAB00]">
                Digital Career
                <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent"/>
                </svg>
              </span>
            </h1>
            <p className="font-medium text-[16px] md:text-[18px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Have questions about admissions, courses, or placements? Request a quote or reach out directly — our experts respond fast.
            </p>
          </motion.div>
        </div>

        {/* 2-Column Split: Form + Info Panel */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-start">
          
          {/* ── DARK PREMIUM FORM (As per your reference image) ── */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="bg-[#0A0F1C] rounded-[2rem] p-6 md:p-10 border border-white/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] relative overflow-hidden"
          >
            {/* Subtle Inner Glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#ECAB00]/10 rounded-full blur-[80px] pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-5">
              
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="relative group">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#ECAB00] transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Enter Full Name" 
                    className="w-full bg-[#131B2F] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-[15px] text-white placeholder-gray-500 focus:border-[#ECAB00] focus:ring-1 focus:ring-[#ECAB00] transition-all outline-none"
                    required
                  />
                </div>

                {/* Phone Number with IN +91 */}
                <div className="flex items-center bg-[#131B2F] border border-white/10 rounded-xl overflow-hidden focus-within:border-[#ECAB00] focus-within:ring-1 focus-within:ring-[#ECAB00] transition-all">
                  <div className="flex items-center gap-2 px-4 border-r border-white/10 text-gray-400 shrink-0">
                    <span className="text-[13px] font-bold">IN</span>
                    <span className="text-[14px] font-medium">+91</span>
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full bg-transparent py-4 px-4 text-[15px] text-white placeholder-gray-500 outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Email Address */}
                <div className="relative group">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#ECAB00] transition-colors" />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-[#131B2F] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-[15px] text-white placeholder-gray-500 focus:border-[#ECAB00] focus:ring-1 focus:ring-[#ECAB00] transition-all outline-none"
                    required
                  />
                </div>

                {/* Select Course */}
                <div className="relative group">
                  <select className="w-full bg-[#131B2F] border border-white/10 rounded-xl py-4 pl-4 pr-10 text-[15px] text-gray-400 focus:border-[#ECAB00] focus:ring-1 focus:ring-[#ECAB00] transition-all outline-none appearance-none cursor-pointer">
                    <option value="">Select Course</option>
                    <option value="masters">PG in Digital Marketing (PGDM)</option>
                    <option value="business">PG in Business Strategy (PGDBS)</option>
                    <option value="short">Short Term Certifications</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none group-focus-within:text-[#ECAB00]" />
                </div>
              </div>

              {/* Select Preferred Location */}
              <div className="relative group">
                <select className="w-full bg-[#131B2F] border border-white/10 rounded-xl py-4 pl-4 pr-10 text-[15px] text-gray-400 focus:border-[#ECAB00] focus:ring-1 focus:ring-[#ECAB00] transition-all outline-none appearance-none cursor-pointer">
                  <option value="">Select Preferred Location</option>
                  <option value="andheri">Andheri West, Mumbai</option>
                  <option value="borivali">Borivali West, Mumbai</option>
                  <option value="online">Online Live Classes</option>
                </select>
                <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none group-focus-within:text-[#ECAB00]" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-2 w-max flex items-center justify-center gap-2 bg-[#ECAB00] hover:bg-white text-[#0A0F1C] font-black text-[15px] px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(236,171,0,0.5)] active:scale-95 group"
              >
                {sent ? "✓ Request Sent!" : <> Request A Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /> </>}
              </button>

            </form>
          </motion.div>

          {/* ── INFO PANEL (Light Theme) ── */}
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
                  <p className="font-bold text-[11px] text-gray-400 uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="font-black text-[16px] text-[#0f172a] leading-tight mb-1">
                    {item.value}
                  </p>
                  <p className="font-medium text-[13px] text-gray-500">
                    {item.sub}
                  </p>
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
            Visit us <span className="text-[#ECAB00]">in person</span>
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center md:justify-start gap-2 mb-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-1.5 flex shadow-sm">
            {campuses.map((c, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-8 py-3 rounded-xl transition-all duration-300 font-bold text-[15px] ${
                  activeTab === i ? "bg-[#0f172a] text-white shadow-md" : "bg-transparent text-gray-500 hover:text-[#0f172a]"
                }`}
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
                <span className={`inline-block px-4 py-1.5 rounded-full mb-6 font-bold text-[11px] uppercase tracking-widest text-white`} style={{ backgroundColor: campuses[activeTab].accent }}>
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
                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-[#ECAB00]" />
                    </div>
                    <p className="font-medium text-[15px] text-gray-600 leading-relaxed pt-2">
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
                </div>
              </div>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(campuses[activeTab].address)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-10 flex items-center gap-2 font-black text-[15px] text-[#2563eb] hover:text-[#0f172a] transition-colors group"
              >
                Get Directions <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Map iframe */}
            <div className="rounded-[2rem] overflow-hidden border border-gray-200 shadow-md h-[400px] lg:h-auto relative group">
              {/* Grayscale filter removed on hover */}
              <iframe
                src={campuses[activeTab].mapSrc}
                className="w-full h-full filter grayscale-[0.4] group-hover:grayscale-0 transition-all duration-500 border-0"
                allowFullScreen=""
                loading="lazy"
                title={campuses[activeTab].city}
              />
            </div>
          </motion.div>
        </AnimatePresence>

      </section>

      {/* ── 3. BOTTOM CTA STRIP (Dark Navy) ── */}
      <section className="relative z-10 px-6 pb-20 max-w-[1400px] mx-auto">
        <div className="bg-[#0A0F1C] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_20px_50px_-10px_rgba(10,15,28,0.5)] border border-white/5 relative overflow-hidden">
          
          <div className="absolute top-[-50%] left-[-10%] w-[300px] h-[300px] bg-[#2563eb]/20 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 text-center md:text-left">
            <p className="font-black text-[24px] md:text-[32px] text-white leading-tight mb-2">
              Ready to start your <span className="text-[#ECAB00]">journey?</span>
            </p>
            <p className="font-medium text-[16px] text-gray-400">
              Join 11,000+ students who've built careers through Operating Media.
            </p>
          </div>
          
          <button className="relative z-10 shrink-0 flex items-center gap-2 bg-[#ECAB00] hover:bg-white text-[#0A0F1C] font-black text-[16px] px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(236,171,0,0.5)] active:scale-95 group">
            Enroll Now <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* ── CUSTOM CSS ── */}
      <style>{`
        .animate-pulse-slow { 
          animation: pulseGlow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; 
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
    </main>
  );
}