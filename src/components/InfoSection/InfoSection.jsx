import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, Phone, CheckCircle2 } from "lucide-react";

// ── Shared Font Styling ──
const S = { fontFamily: "'Satoshi', sans-serif" };

// ── Unified Premium Data ──
const PROGRAMS = [
  {
    id: "ug",
    icon: "🎓",
    label: "UG in Digital Business",
    badge: "For Undergrads",
    duration: "1 Year",
    students: "2,400+",
    level: "Beginner",
    desc: "Perfect for fresh graduates looking to build a strong foundation in the digital ecosystem.",
    outcomes: ["Full digital marketing foundation", "Live project experience", "Google & Meta certification", "Internship placement support"],
  },
  {
    id: "mba",
    icon: "🏆",
    label: "MBA-Level PG Program",
    badge: "Highest Placements",
    duration: "11 Months",
    students: "5,800+",
    level: "Advanced",
    desc: "Our flagship program designed to turn you into a 360° digital strategy master.",
    outcomes: ["360° digital strategy mastery", "Agency simulation projects", "Guaranteed placement support", "Live client campaign management"],
  },
  {
    id: "ai",
    icon: "🤖",
    label: "Online AI Programs",
    badge: "Trending",
    duration: "6 Months",
    students: "1,200+",
    level: "Intermediate",
    desc: "Future-proof your marketing career with cutting-edge AI and automation workflows.",
    outcomes: ["AI-driven marketing workflows", "ChatGPT & automation tools", "Remote-ready curriculum", "AI content & ad creation"],
  },
  {
    id: "cert",
    icon: "📋",
    label: "4–6 Month Certification",
    badge: "Fast Track",
    duration: "4–6 Months",
    students: "3,100+",
    level: "Beginner",
    desc: "A fast-track certification program designed for rapid entry into the digital marketing industry.",
    outcomes: ["Core digital marketing skills", "SEO, PPC & Social Media", "Industry-recognised certificate", "Job-ready portfolio"],
  }
];

// ── Animation Helper ──
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function InfoSection() {
  const [activeIdx, setActiveIdx] = useState(1);
  const prog = PROGRAMS[activeIdx];

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
    <section className="relative w-full bg-[#fff] py-16 lg:py-24 overflow-hidden selection:bg-[#ecab00] selection:text-[#0A0F1C]" style={S}>

      {/* ── Light Line Shade Background ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* ── Subtle Background Glow ── */}
      <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#ecab00]/10 blur-[150px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] rounded-full bg-[#0A0F1C]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-12">

        {/* ── Header Area ── */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12 lg:mb-16 text-center lg:text-left"
        >
          <div className="mb-4 inline-flex items-center gap-3 bg-white px-4 py-1.5 rounded-full border border-gray-100 shadow-sm">
            <span className="h-2 w-2 bg-[#ecab00] rounded-full animate-pulse" />
            <span className="font-bold text-[11px] md:text-[12px] uppercase tracking-[0.15em] text-[#ecab00]">
              Programs & Admissions
            </span>
          </div>
          
          {/* Main Heading: Exactly 46px on Desktop */}
          <h2 className="font-black text-[2.2rem] sm:text-[3rem] lg:text-[46px] leading-[1.1] tracking-tight text-[#0A0F1C]">
            Find the Perfect <span className="text-[#ecab00] relative inline-block">Program for You</span>
          </h2>
        </motion.div>

        {/* ── Main Layout: Tabs (Left) + Content (Right) ── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

          {/* ════ LEFT: Navigation Tabs ════ */}
          <div className="w-full lg:w-[38%] flex flex-col gap-4">
            
            {/* Mobile horizontal scroll / Desktop vertical stack */}
            <div className="flex lg:flex-col gap-3 lg:gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide snap-x">
              {PROGRAMS.map((p, i) => {
                const isActive = activeIdx === i;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveIdx(i)}
                    className={`group shrink-0 lg:shrink w-[280px] sm:w-[320px] lg:w-full flex items-center justify-between px-5 py-4 lg:p-5 rounded-2xl border text-left transition-all duration-300 snap-center
                      ${isActive 
                        ? 'bg-white shadow-[0_15px_40px_-10px_rgba(236,171,0,0.15)] border-[#ecab00]/50 scale-[1.02] lg:scale-105 z-10' 
                        : 'bg-white/40 border-gray-100 hover:bg-white hover:shadow-md hover:border-gray-200'}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center text-2xl lg:text-3xl rounded-xl transition-all duration-300 ${isActive ? 'bg-[#ecab00]/10 shadow-inner' : 'bg-white shadow-sm border border-gray-50'}`}>
                        {p.icon}
                      </span>
                      <div>
                        <p className={`font-black text-[16px] lg:text-[18px] leading-tight mb-1 transition-colors ${isActive ? 'text-[#0A0F1C]' : 'text-gray-700 group-hover:text-[#0A0F1C]'}`}>
                          {p.label}
                        </p>
                        <p className={`font-bold text-[11px] uppercase tracking-widest transition-colors ${isActive ? 'text-[#ecab00]' : 'text-gray-400'}`}>
                          {p.duration}
                        </p>
                      </div>
                    </div>
                    <ChevronRight size={22} strokeWidth={3} className={`transition-transform duration-300 ${isActive ? 'text-[#ecab00] translate-x-1' : 'text-gray-300'}`} />
                  </button>
                );
              })}
            </div>

            {/* Quick Contact Block (Desktop Only) */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="hidden lg:flex mt-4 flex-col p-6 rounded-[2rem] bg-white border border-gray-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)]"
            >
              <p className="font-bold text-[11px] text-gray-400 uppercase tracking-widest mb-4">Admissions Help</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#ecab00]/10 flex items-center justify-center text-[#ecab00]">
                  <Phone size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-bold text-[16px] text-[#0A0F1C] leading-tight mb-1">Talk to an Advisor</p>
                  <p className="font-medium text-[13px] text-gray-500">Mon–Sat · 9am–7pm</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* ════ RIGHT: Active Content Panel ════ */}
          <div className="w-full lg:w-[62%] min-h-[480px] relative rounded-[2rem] bg-white border border-gray-100 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08)] overflow-hidden">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="flex flex-col h-full"
              >
                
                {/* ── Top Hero Area (Dark Premium Theme) ── */}
                <div className="relative px-8 lg:px-12 py-10 lg:py-12 bg-[#0A0F1C] overflow-hidden">
                  {/* Decor shape */}
                  <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-[#ecab00]/20 blur-[80px]" />
                  
                  <div className="relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-white font-bold text-[10px] uppercase tracking-widest mb-5">
                      ★ {prog.badge}
                    </span>
                    <h3 className="font-black text-[clamp(1.8rem,3vw,2.5rem)] text-white leading-tight mb-3 drop-shadow-md">
                      {prog.label}
                    </h3>
                    <p className="font-medium text-[15px] md:text-[17px] text-white/70 max-w-lg leading-relaxed">
                      {prog.desc}
                    </p>
                  </div>
                </div>

                {/* ── Bottom Content Area ── */}
                <div className="px-8 lg:px-12 py-10 flex-1 flex flex-col justify-between">
                  
                  {/* Grid Features */}
                  <div className="mb-10">
                    <p className="font-bold text-[12px] text-gray-400 uppercase tracking-widest mb-6">What You'll Learn</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6">
                      {prog.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start gap-3 group">
                          <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-[#ecab00]/15 text-[#ecab00] group-hover:bg-[#ecab00] group-hover:text-white transition-colors duration-300">
                            <CheckCircle2 size={14} strokeWidth={3} />
                          </div>
                          <span className="font-bold text-[14px] lg:text-[15px] text-gray-700 leading-snug group-hover:text-[#0A0F1C] transition-colors">
                            {outcome}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Meta */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-8 border-t border-gray-100">
                    
                    <div className="flex gap-8 w-full sm:w-auto">
                      <div>
                        <p className="font-black text-[24px] lg:text-[28px] text-[#0A0F1C] leading-none mb-1">{prog.students}</p>
                        <p className="font-bold text-[10px] lg:text-[11px] text-gray-400 uppercase tracking-widest">Enrolled</p>
                      </div>
                      <div className="w-px h-12 bg-gray-200 hidden sm:block" />
                      <div>
                        <p className="font-black text-[24px] lg:text-[28px] text-[#0A0F1C] leading-none mb-1">{prog.level}</p>
                        <p className="font-bold text-[10px] lg:text-[11px] text-gray-400 uppercase tracking-widest">Difficulty</p>
                      </div>
                    </div>

                    <div className="w-full sm:w-auto">
                      <button className="group relative w-full sm:w-auto flex items-center justify-center gap-2 px-8 h-[54px] rounded-xl font-bold text-[15px] text-[#0A0F1C] bg-[#ecab00] hover:bg-[#d99c00] shadow-[0_10px_30px_-10px_rgba(236,171,0,0.5)] active:scale-95 transition-all duration-300 overflow-hidden">
                        <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-shine" />
                        <span className="relative z-10">Enroll Now</span>
                        <ArrowRight size={18} strokeWidth={3} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                  </div>

                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .animate-pulse-slow { animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes shine { 100% { transform: translateX(100%); } }
        .animate-shine { animation: shine 1s ease; }
      `}</style>
    </section>
  );
}