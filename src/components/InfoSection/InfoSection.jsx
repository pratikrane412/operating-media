import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// CheckCircle2 is now imported correctly!
import { ChevronRight, ArrowRight, Phone, CheckCircle2 } from "lucide-react"; 

// ── Shared Font Styling ──
const S = { fontFamily: "'Satoshi', sans-serif" };

// ── Data ──
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
    theme: {
      from: "from-blue-500",
      to: "to-indigo-600",
      text: "text-blue-600",
      bg: "bg-blue-50",
      glow: "bg-blue-500/20"
    }
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
    theme: {
      from: "from-orange-500",
      to: "to-amber-500",
      text: "text-orange-600",
      bg: "bg-orange-50",
      glow: "bg-orange-500/20"
    }
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
    theme: {
      from: "from-violet-500",
      to: "to-purple-600",
      text: "text-violet-600",
      bg: "bg-violet-50",
      glow: "bg-violet-500/20"
    }
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
    theme: {
      from: "from-emerald-500",
      to: "to-teal-600",
      text: "text-emerald-600",
      bg: "bg-emerald-50",
      glow: "bg-emerald-500/20"
    }
  }
];

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
    <section className="relative w-full bg-[#FAFAFA] py-20 lg:py-28 overflow-hidden selection:bg-orange-500 selection:text-white" style={S}>

      {/* ── Background Detail ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at center, #000 1.5px, transparent 1.5px)", backgroundSize: "32px 32px" }} />
      
      {/* Dynamic Background Glow based on active tab */}
      <div className={`absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none transition-colors duration-1000 ease-in-out ${prog.theme.glow}`} />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-12">

        {/* ── Header ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16 text-center lg:text-left"
        >
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-[2px] w-10 bg-orange-500 rounded-full" />
            <span className="font-bold text-[12px] uppercase tracking-widest text-orange-600">
              Programs & Admissions
            </span>
          </div>
          <h2 className="font-black text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-gray-900">
            Find the Perfect <span className="text-[#FFC107]">Program for You</span>
          </h2>
        </motion.div>

        {/* ── Main Layout: Tabs (Left) + Content (Right) ── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

          {/* ════ LEFT: Navigation Tabs ════ */}
          <div className="w-full lg:w-[35%] flex flex-col gap-3">
            
            {/* Mobile horizontal scroll / Desktop vertical stack */}
            <div className="flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide snap-x">
              {PROGRAMS.map((p, i) => {
                const isActive = activeIdx === i;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveIdx(i)}
                    className={`shrink-0 lg:shrink w-[280px] lg:w-full flex items-center justify-between px-5 py-4 rounded-2xl border text-left transition-all duration-300 snap-center
                      ${isActive 
                        ? `bg-white shadow-xl ${p.theme.border} ring-1 ring-${p.theme.from.split('-')[1]}-500/50` 
                        : "bg-white/50 border-gray-100 hover:bg-white hover:shadow-md hover:border-gray-200"}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-12 h-12 flex items-center justify-center text-2xl rounded-xl transition-colors duration-300 ${isActive ? p.theme.bg : 'bg-gray-100'}`}>
                        {p.icon}
                      </span>
                      <div>
                        <p className={`font-black text-[15px] leading-tight mb-1 transition-colors ${isActive ? p.theme.text : 'text-gray-900'}`}>
                          {p.label}
                        </p>
                        <p className="font-semibold text-[11px] text-gray-400 uppercase tracking-widest">
                          {p.duration}
                        </p>
                      </div>
                    </div>
                    <ChevronRight size={20} strokeWidth={2.5} className={`transition-transform duration-300 ${isActive ? `${p.theme.text} translate-x-1` : 'text-gray-300'}`} />
                  </button>
                );
              })}
            </div>

            {/* Quick Contact Block (Desktop Only) */}
            <div className="hidden lg:flex mt-6 flex-col p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <p className="font-bold text-[11px] text-gray-400 uppercase tracking-widest mb-4">Admissions Help</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                  <Phone size={20} strokeWidth={2} />
                </div>
                <div>
                  <p className="font-bold text-[16px] text-gray-900 leading-tight mb-1">Talk to an Advisor</p>
                  <p className="font-medium text-[13px] text-gray-500">Mon–Sat · 9am–7pm</p>
                </div>
              </div>
            </div>

          </div>

          {/* ════ RIGHT: Active Content Panel ════ */}
          <div className="w-full lg:w-[65%] min-h-[450px] relative rounded-[2rem] bg-white border border-gray-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] overflow-hidden">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex flex-col h-full"
              >
                
                {/* ── Top Hero Area ── */}
                <div className={`relative px-8 md:px-12 py-10 bg-gradient-to-r ${prog.theme.from} ${prog.theme.to} overflow-hidden`}>
                  {/* Decor shapes */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
                  
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-bold text-[10px] uppercase tracking-widest mb-4">
                      {prog.badge}
                    </span>
                    <h3 className="font-black text-[clamp(1.8rem,3vw,2.5rem)] text-white leading-tight mb-3">
                      {prog.label}
                    </h3>
                    <p className="font-medium text-[15px] md:text-[16px] text-white/90 max-w-[500px] leading-relaxed">
                      {prog.desc}
                    </p>
                  </div>
                </div>

                {/* ── Bottom Content Area ── */}
                <div className="px-8 md:px-12 py-10 flex-1 flex flex-col justify-between">
                  
                  {/* Grid Features */}
                  <div className="mb-10">
                    <p className="font-bold text-[12px] text-gray-400 uppercase tracking-widest mb-6">What You'll Learn</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6">
                      {prog.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${prog.theme.bg} ${prog.theme.text}`}>
                            <CheckCircle2 size={14} strokeWidth={3} />
                          </div>
                          <span className="font-semibold text-[14px] text-gray-700 leading-snug">
                            {outcome}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Meta */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-100">
                    
                    <div className="flex gap-6 w-full sm:w-auto">
                      <div>
                        <p className="font-black text-[22px] text-gray-900 leading-none mb-1">{prog.students}</p>
                        <p className="font-bold text-[10px] text-gray-400 uppercase tracking-widest">Enrolled</p>
                      </div>
                      <div className="w-px h-10 bg-gray-200 hidden sm:block" />
                      <div>
                        <p className="font-black text-[22px] text-gray-900 leading-none mb-1">{prog.level}</p>
                        <p className="font-bold text-[10px] text-gray-400 uppercase tracking-widest">Difficulty</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button className={`w-full sm:w-auto flex items-center justify-center gap-2 px-8 h-[50px] rounded-xl text-white font-bold text-[15px] bg-gradient-to-r ${prog.theme.from} ${prog.theme.to} shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300`}>
                        Enroll Now <ArrowRight size={18} />
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
      `}</style>
    </section>
  );
}