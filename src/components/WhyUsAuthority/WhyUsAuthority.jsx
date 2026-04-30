import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2, Users2, Trophy,
  Briefcase, ArrowRight, ShieldCheck,
} from "lucide-react";

// ── Animation Presets ────────────────────────────────────────────────────────
const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: d },
  viewport: { once: true, margin: "-50px" },
});

const fadeLeft = (d = 0) => ({
  initial: { opacity: 0, x: 30 },
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

// ── Data (Unified Premium Colors) ────────────────────────────────────────────
const REASONS = [
  {
    title: "15+ Years of Legacy",
    desc: "Mumbai's pioneer in digital education since 2011. The institute top agencies trust.",
    Icon: Trophy,
  },
  {
    title: "1,600+ Students Trained",
    desc: "A growing network of placed professionals working at top agencies across India.",
    Icon: Users2,
  },
  {
    title: "Google & Meta Certified",
    desc: "Validate your skills with globally recognised certifications from top tech giants.",
    Icon: CheckCircle2,
  },
  {
    title: "400+ Hiring Partners",
    desc: "Direct access to full-time roles and internships through our active recruiter network.",
    Icon: Briefcase,
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
      // Background explicitly set to #FCFAF2 with correct tailwind syntax
      className="relative w-full overflow-hidden bg-[#FCFAF2] py-12 lg:py-16 selection:bg-[#ecab00] selection:text-[#0f172a]"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      {/* ── Subtle glow to match theme ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden flex justify-center z-0">
        <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-[#ecab00]/10 to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1300px] px-6 sm:px-10 lg:px-12">

        {/* ── Main Layout: 2 Columns ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ════ LEFT: CLEAN VISUALS (Overlapping Images) ════ */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center mt-6 lg:mt-0">
            
            {/* Main Image */}
            <motion.div 
              className="absolute left-0 top-0 w-[80%] h-[75%] rounded-3xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(15,23,42,0.2)] z-10"
              {...scaleIn(0)}
            >
              <img 
                src="/images/OM-images.jpg" 
                alt="Classroom Training" 
                className="w-full h-full object-cover transition-transform duration-[10s] ease-out hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 to-transparent" />
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div 
              className="absolute right-0 bottom-0 w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-[#FCFAF2] z-20"
              {...scaleIn(0.2)}
            >
              <img 
                src="/images/OM-images2.jpg" 
                alt="Student Success" 
                className="w-full h-full object-cover transition-transform duration-[10s] ease-out hover:scale-110"
              />
            </motion.div>

            {/* Floating Glass Badge 1 */}
            <motion.div 
              className="absolute top-8 -right-4 sm:-right-8 lg:-right-10 z-30 bg-white/90 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-xl border border-gray-100 animate-float"
              {...fadeLeft(0.4)}
            >
              <p className="font-black text-[28px] sm:text-[32px] text-[#0f172a] leading-none">89<span className="text-[#ecab00]">%</span></p>
              <p className="font-bold text-[10px] sm:text-[11px] uppercase tracking-widest text-gray-500 mt-1">Placement Rate</p>
            </motion.div>

            {/* Floating Glass Badge 2 */}
            <motion.div 
              className="absolute bottom-12 -left-4 sm:-left-8 lg:-left-10 z-30 bg-[#0f172a]/95 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-2xl border border-white/10 animate-float-delayed"
              {...fadeUp(0.6)}
            >
              <p className="font-black text-[20px] sm:text-[24px] text-white leading-none italic">"Real Skills."</p>
              <p className="font-medium text-[11px] sm:text-[12px] text-gray-300 mt-1">Live Agency Projects</p>
            </motion.div>

          </div>

          {/* ════ RIGHT: CONTENT & CLEAN LIST ════ */}
          <div className="flex flex-col pt-8 lg:pt-0">
            
            {/* Header */}
            <motion.div {...fadeUp(0)}>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[3px] w-8 bg-[#ecab00] rounded-full" />
                <span className="font-bold text-[13px] text-[#0f172a] uppercase tracking-[0.2em]">
                  Why Choose Us
                </span>
              </div>
              <h2 className="font-black text-[32px] md:text-[40px] lg:text-[46px] leading-[1.15] tracking-tight text-[#0f172a] mb-5">
                The Standard of <br />
                <span className="relative inline-block text-[#ecab00]">
                  Digital Mastery.
                  {/* Animated Highlight Underline */}
                  <svg className="absolute w-full h-[8px] -bottom-1 left-0 text-[#ecab00]/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                      d="M0 15 Q 50 0 100 15" 
                      fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              <p className="font-medium text-[16px] md:text-[17px] text-gray-500 leading-relaxed mb-10 max-w-[500px]">
                We don't just teach modules — we build careers using the same AI tools that world-class agencies use every day.
              </p>
            </motion.div>

            {/* Clean Premium Reasons List */}
            <div className="flex flex-col gap-6 sm:gap-8 mb-10">
              {REASONS.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="group flex items-start gap-5 cursor-default"
                  {...fadeUp(0.2 + idx * 0.1)}
                >
                  {/* Premium Icon Container */}
                  <div className="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center bg-[#ecab00]/10 text-[#ecab00] border border-[#ecab00]/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#ecab00] group-hover:text-[#0f172a] group-hover:shadow-[0_10px_20px_-10px_rgba(236,171,0,0.5)]">
                    <item.Icon size={24} strokeWidth={2.5} className="transition-colors duration-300" />
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-[17px] sm:text-[18px] text-[#0f172a] leading-tight mb-1.5 group-hover:text-[#ecab00] transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="font-medium text-[14px] sm:text-[15px] leading-relaxed text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Actions (ISO + CTA) */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pt-8 border-t border-gray-200/60"
              {...fadeUp(0.6)}
            >
              {/* Primary Button */}
              <button className="w-full sm:w-auto group relative flex items-center justify-center gap-2 px-8 h-[54px] rounded-xl bg-[#0f172a] text-white font-bold text-[15px] transition-all duration-300 hover:bg-[#ecab00] hover:text-[#0f172a] hover:shadow-[0_10px_20px_-10px_rgba(236,171,0,0.6)] active:scale-95 overflow-hidden">
                <span className="relative z-10">Explore Courses</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Premium ISO Indicator */}
              <div className="flex items-center gap-3 text-gray-500 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
                <ShieldCheck size={26} className="text-[#ecab00]" />
                <div className="flex flex-col">
                  <span className="font-black text-[13px] text-[#0f172a] leading-none">ISO 9001:2015</span>
                  <span className="font-bold text-[10px] uppercase tracking-widest text-gray-400 mt-1">Certified</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Custom Floating Animations ── */}
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes floatDelayed { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-16px); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: floatDelayed 7s ease-in-out infinite; animation-delay: 2s; }
      `}</style>
    </section>
  );
}