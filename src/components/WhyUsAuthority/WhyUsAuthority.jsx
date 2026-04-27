import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2, Users2, Trophy,
  Briefcase, ArrowRight, ShieldCheck,
} from "lucide-react";

// ── Animation Presets ────────────────────────────────────────────────────────
const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: d },
  viewport: { once: true, margin: "-50px" },
});

const fadeLeft = (d = 0) => ({
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: d },
  viewport: { once: true, margin: "-50px" },
});

const scaleIn = (d = 0) => ({
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: d },
  viewport: { once: true },
});

// ── Data ─────────────────────────────────────────────────────────────────────
const REASONS = [
  {
    title: "15+ Years of Legacy",
    desc: "Mumbai's pioneer in digital education since 2011. The institute top agencies trust.",
    Icon: Trophy,
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    title: "1,600+ Students Trained",
    desc: "A growing network of placed professionals working at top agencies across India.",
    Icon: Users2,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    title: "Google & Meta Certified",
    desc: "Validate your skills with globally recognised certifications from top tech giants.",
    Icon: CheckCircle2,
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    title: "400+ Hiring Partners",
    desc: "Direct access to full-time roles and internships through our active recruiter network.",
    Icon: Briefcase,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
];

export default function WhyUsAuthority() {
  // Inject Satoshi font dynamically
  useEffect(() => {
    if (!document.querySelector('link[data-font="satoshi"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.setAttribute("data-font", "satoshi");
      link.href = "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <section 
      className="relative w-full overflow-hidden bg-white py-20 lg:py-32 selection:bg-orange-500 selection:text-white"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      {/* ── Minimal Background Ambient ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden flex justify-center z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-orange-100/40 to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1300px] px-6 sm:px-10 lg:px-12">

        {/* ── Main Layout: 2 Columns ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ════ LEFT: CLEAN VISUALS (Overlapping Images) ════ */}
          <div className="relative w-full h-[500px] sm:h-[600px] flex items-center justify-center">
            
            {/* Main Image */}
            <motion.div 
              className="absolute left-0 top-0 w-[80%] h-[75%] rounded-[2rem] overflow-hidden shadow-2xl z-10"
              {...scaleIn(0)}
            >
              <img 
                src="/images/OM-images.jpg" 
                alt="Classroom Training" 
                className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div 
              className="absolute right-0 bottom-0 w-[55%] h-[55%] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-[6px] border-white z-20"
              {...scaleIn(0.2)}
            >
              <img 
                src="/images/OM-images2.jpg" 
                alt="Student Success" 
                className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110"
              />
            </motion.div>

            {/* Floating Glass Badge 1 */}
            <motion.div 
              className="absolute top-10 -right-6 md:-right-10 z-30 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 animate-float"
              {...fadeLeft(0.4)}
            >
              <p className="font-black text-[32px] text-gray-900 leading-none">89<span className="text-orange-500">%</span></p>
              <p className="font-bold text-[11px] uppercase tracking-widest text-gray-500 mt-1">Placement Rate</p>
            </motion.div>

            {/* Floating Glass Badge 2 */}
            <motion.div 
              className="absolute bottom-16 -left-6 md:-left-10 z-30 bg-gray-900/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-gray-700 animate-float-delayed"
              {...fadeUp(0.6)}
            >
              <p className="font-black text-[24px] text-white leading-none italic">"Real Skills."</p>
              <p className="font-medium text-[12px] text-gray-400 mt-1">Live Agency Projects</p>
            </motion.div>

          </div>

          {/* ════ RIGHT: CONTENT & CLEAN LIST ════ */}
          <div className="flex flex-col">
            
            {/* Header */}
            <motion.div {...fadeUp(0)}>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-orange-500 rounded-full" />
                <span className="font-bold text-[12px] text-orange-600 uppercase tracking-[0.2em]">
                  Why Choose Us
                </span>
              </div>
              <h2 className="font-black text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-gray-900 mb-6">
                The Standard of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  Digital Mastery.
                </span>
              </h2>
              <p className="font-medium text-[16px] md:text-[18px] text-gray-500 leading-relaxed mb-10 max-w-[500px]">
                We don't just teach modules — we build careers using the same AI tools that world-class agencies use every day.
              </p>
            </motion.div>

            {/* Clean Reasons List */}
            <div className="flex flex-col gap-8 mb-12">
              {REASONS.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="group flex items-start gap-5"
                  {...fadeUp(0.2 + idx * 0.1)}
                >
                  {/* Subtle Icon Background */}
                  <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${item.bg}`}>
                    <item.Icon size={24} strokeWidth={2.5} className={item.color} />
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-[18px] text-gray-900 leading-tight mb-1.5 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="font-medium text-[15px] leading-relaxed text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Actions (ISO + CTA) */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-6 pt-8 border-t border-gray-100"
              {...fadeUp(0.6)}
            >
              {/* Primary Button */}
              <button className="w-full sm:w-auto group relative flex items-center justify-center gap-2 px-8 h-[54px] rounded-xl bg-gray-900 text-white font-bold text-[15px] transition-all hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95 overflow-hidden">
                <span className="relative z-10">Explore Courses</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Minimal ISO Indicator */}
              <div className="flex items-center gap-3 text-gray-500">
                <ShieldCheck size={24} className="text-green-500" />
                <div className="flex flex-col">
                  <span className="font-bold text-[13px] text-gray-800 leading-tight">ISO 9001:2015</span>
                  <span className="font-semibold text-[11px] uppercase tracking-widest">Certified</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Custom Animations ── */}
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes floatDelayed { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-16px); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: floatDelayed 7s ease-in-out infinite; animation-delay: 2s; }
      `}</style>
    </section>
  );
}