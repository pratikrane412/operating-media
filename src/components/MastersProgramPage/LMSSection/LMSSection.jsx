import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  MessageSquare,
  Library,
  Calendar,
  UserCheck,
  MousePointer2,
  Sparkles,
  ArrowRight,
  Bell,
  Search
} from 'lucide-react';

const satoshi = { fontFamily: "'Satoshi', sans-serif" };

const LMSSection = () => {
  const [active, setActive] = useState(0);

  const features = [
    { title: "Progress Tracker", desc: "Real-time analytics on module completion.", icon: <BarChart3 size={16} />, img: "https://www.operatingmedia.com/wp-content/uploads/2025/06/image-437-1.png" },
    { title: "Student Forum", desc: "Collaborate with 11,000+ peers.", icon: <MessageSquare size={16} />, img: "https://www.operatingmedia.com/wp-content/uploads/2025/06/image-438.png" },
    { title: "Resource Vault", desc: "Notes and 120+ premium tools.", icon: <Library size={16} />, img: "https://www.operatingmedia.com/wp-content/uploads/2025/06/lms.png" },
    { title: "Smart Schedule", desc: "Never miss a live agency session.", icon: <Calendar size={16} />, img: "https://www.operatingmedia.com/wp-content/uploads/2025/06/image-441.png" },
    { title: "Attendance", desc: "Verified logs for certification.", icon: <UserCheck size={16} />, img: "https://www.operatingmedia.com/wp-content/uploads/2025/06/image-439.png" },
  ];

  return (
    <section
      className="py-8 lg:py-12 bg-[#F8F9FB] antialiased overflow-hidden"
      style={satoshi}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* EDITORIAL HEADER */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-[#212121] text-[30px] lg:text-[42px] leading-tight mb-3 tracking-tight"
              style={{ ...satoshi, fontWeight: 600 }}
            >
              A Private Ecosystem for{' '}
              <span className="text-[#FF5A1F]">Future Leaders</span>
            </h2>
            <p
              className="text-[#808080] text-[15px] lg:text-[17px] max-w-xl mx-auto"
              style={{ ...satoshi, fontWeight: 500 }}
            >
              Our proprietary LMS isn't just a portal; it's your digital agency workspace.
              Track, learn, and collaborate in one high-performance interface.
            </p>
          </motion.div>
        </div>

        {/* INTERACTIVE WORKSPACE */}
        <div className="relative flex flex-col items-center">

          {/* 1. NAVIGATION TABS */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 z-20">
            {features.map((f, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-5 py-3 rounded-full border transition-all duration-300 flex items-center gap-2 text-[13px] border-none cursor-pointer
                  ${active === i
                    ? 'bg-[#FF5A1F] border-[#FF5A1F] text-white shadow-lg shadow-orange-900/10 translate-y-[-2px]'
                    : 'bg-white border-gray-100 text-gray-500 hover:border-orange-200 hover:bg-orange-50/30'}`}
                style={{ ...satoshi, fontWeight: 600 }}
              >
                <span className={active === i ? 'text-[#F5C518]' : 'text-[#FF5A1F]'}>{f.icon}</span>
                {f.title}
              </button>
            ))}
          </div>

          {/* 2. MAIN DESKTOP MOCKUP */}
          <div className="relative w-full max-w-4xl z-10">

            {/* Floating Widget: Notification */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -left-8 top-12 hidden xl:flex bg-white/80 backdrop-blur-xl p-4 rounded-[2rem] shadow-xl border border-white z-30 items-center gap-3 min-w-[200px]"
            >
              <div className="w-8 h-8 rounded-full bg-[#FF5A1F] flex items-center justify-center text-white shadow-lg shadow-orange-500/30 flex-shrink-0">
                <Bell size={16} />
              </div>
              <div className="text-start">
                <p className="text-black text-[11px]" style={{ ...satoshi, fontWeight: 900 }}>New Resource</p>
                <p className="text-gray-400 text-[9px] uppercase" style={{ ...satoshi, fontWeight: 700, letterSpacing: '0.08em' }}>SEO Mastery Guide</p>
              </div>
            </motion.div>

            {/* Floating Widget: Search Bar */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -right-8 bottom-32 hidden xl:flex bg-white/80 backdrop-blur-xl p-3 rounded-full shadow-xl border border-white z-30 items-center gap-3 min-w-[240px]"
            >
              <Search size={16} className="ml-1 text-gray-400" />
              <p className="text-gray-400 text-xs" style={{ ...satoshi, fontWeight: 500 }}>Search tools...</p>
              <div
                className="ml-auto bg-[#FF5A1F] text-white px-2 py-0.5 rounded-full text-[8px] uppercase"
                style={{ ...satoshi, fontWeight: 900, letterSpacing: '0.1em' }}
              >
                Live
              </div>
            </motion.div>

            {/* Main Application Window */}
            <motion.div
              key={active}
              className="bg-[#0A0A0B] rounded-[2.5rem] p-3 shadow-[0_40px_80px_-15px_rgba(255,90,31,0.12)] border border-white/5 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {/* Window Controls */}
              <div className="flex items-center justify-between px-8 py-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                <div
                  className="text-[9px] text-white/30 uppercase"
                  style={{ ...satoshi, fontWeight: 900, letterSpacing: '0.3em' }}
                >
                  OM / PORTAL / 2026
                </div>
                <div className="w-3 h-3 text-white/20"><Sparkles size={14} /></div>
              </div>

              {/* Viewport */}
              <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-black group">
                <img
                  src={features[active].img}
                  alt="Dashboard View"
                  className="w-full h-full object-cover opacity-90 transition-opacity duration-700"
                />

                {/* Feature Overlay Card */}
                <div className="absolute top-6 left-6 max-w-[240px] bg-[#FF5A1F]/90 backdrop-blur-xl p-5 rounded-[1.5rem] border border-white/10 text-start shadow-xl">
                  <p
                    className="text-[#F5C518] text-[9px] uppercase mb-1.5 flex items-center gap-2"
                    style={{ ...satoshi, fontWeight: 900, letterSpacing: '0.2em' }}
                  >
                    <Sparkles size={10} /> Featured
                  </p>
                  <h3
                    className="text-white text-lg mb-2"
                    style={{ ...satoshi, fontWeight: 700 }}
                  >
                    {features[active].title}
                  </h3>
                  <p
                    className="text-white/80 text-[12px] leading-relaxed"
                    style={{ ...satoshi, fontWeight: 400 }}
                  >
                    {features[active].desc}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#FF5A1F]/5 rounded-full blur-[80px] -z-10" />
          </div>
        </div>

        {/* FINAL CONVERSION STRIP */}
        <div className="mt-8 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="p-3 bg-orange-50 rounded-xl text-[#FF5A1F]">
              <MousePointer2 size={24} />
            </div>
            <div className="text-start">
              <p
                className="text-[#212121] text-lg tracking-tight"
                style={{ ...satoshi, fontWeight: 700 }}
              >
                Experience it live.
              </p>
              <p
                className="text-[#808080] text-sm"
                style={{ ...satoshi, fontWeight: 500 }}
              >
                Schedule a live portal walkthrough.
              </p>
            </div>
          </div>
          <button
            className="bg-[#FF5A1F] hover:bg-[#E54D16] text-white text-[14px] px-8 py-4 rounded-full transition-all flex items-center gap-2 group shadow-lg shadow-orange-500/10 border-none cursor-pointer"
            style={{ ...satoshi, fontWeight: 700 }}
          >
            Get Free Access{' '}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default LMSSection;