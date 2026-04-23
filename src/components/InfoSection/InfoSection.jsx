import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight, ArrowRight, MapPin, Phone,
  Clock, Users, Star, CheckCircle2,
  Zap, Shield, Trophy, GraduationCap, Download
} from "lucide-react";

const PROGRAMS = [
  {
    icon: "🎓", label: "UG in Digital Business", badge: null,
    duration: "1 Year", students: "2,400+", level: "Beginner",
    outcomes: ["Full digital marketing foundation","Live project experience","Google & Meta certification","Internship placement support"],
    modules: "12 Modules", tools: "20+ Tools",
    highlight: "Perfect for fresh graduates entering digital careers",
    heroClass: "from-blue-500 to-blue-700",
    accent: "text-blue-500", accentBorder: "border-blue-500",
    accentBg: "bg-blue-50", accentCheck: "text-blue-500",
    btnGradient: "from-blue-500 to-blue-700",
    btnShadow: "shadow-[0_6px_20px_rgba(59,130,246,0.35)]",
    hex: "#3B82F6",
  },
  {
    icon: "🏆", label: "MBA-Level PG Program", badge: "3 SEATS LEFT",
    duration: "11 Months", students: "5,800+", level: "Advanced",
    outcomes: ["360° digital strategy mastery","Agency simulation projects","Guaranteed placement support","Live client campaign management"],
    modules: "24 Modules", tools: "40+ Tools",
    highlight: "Our flagship program — highest placement record",
    heroClass: "from-orange-500 to-orange-700",
    accent: "text-orange-500", accentBorder: "border-orange-500",
    accentBg: "bg-orange-50", accentCheck: "text-orange-500",
    btnGradient: "from-orange-500 to-orange-700",
    btnShadow: "shadow-[0_6px_20px_rgba(249,115,22,0.35)]",
    hex: "#F97316",
  },
  {
    icon: "🤖", label: "Online AI Programs", badge: "NEW",
    duration: "6 Months", students: "1,200+", level: "Intermediate",
    outcomes: ["AI-driven marketing workflows","ChatGPT & automation tools","Remote-ready curriculum","AI content & ad creation"],
    modules: "16 Modules", tools: "25+ Tools",
    highlight: "Future-proof your marketing career with AI",
    heroClass: "from-violet-500 to-violet-700",
    accent: "text-violet-500", accentBorder: "border-violet-500",
    accentBg: "bg-violet-50", accentCheck: "text-violet-500",
    btnGradient: "from-violet-500 to-violet-700",
    btnShadow: "shadow-[0_6px_20px_rgba(139,92,246,0.35)]",
    hex: "#8B5CF6",
  },
  {
    icon: "📋", label: "4–6 Month Certification", badge: null,
    duration: "4–6 Months", students: "3,100+", level: "Beginner",
    outcomes: ["Core digital marketing skills","SEO, PPC & Social Media","Industry-recognised certificate","Job-ready portfolio"],
    modules: "10 Modules", tools: "15+ Tools",
    highlight: "Fast-track into digital marketing",
    heroClass: "from-emerald-500 to-emerald-700",
    accent: "text-emerald-500", accentBorder: "border-emerald-500",
    accentBg: "bg-emerald-50", accentCheck: "text-emerald-500",
    btnGradient: "from-emerald-500 to-emerald-700",
    btnShadow: "shadow-[0_6px_20px_rgba(16,185,129,0.35)]",
    hex: "#10B981",
  },
  {
    icon: "⚡", label: "Free Masterclass", badge: "FREE",
    duration: "1 Day", students: "11,000+", level: "All levels",
    outcomes: ["Live demo session","Career path guidance","Q&A with industry experts","Free resource kit included"],
    modules: "1 Session", tools: "Free Kit",
    highlight: "Try before you enroll — zero commitment",
    heroClass: "from-yellow-400 to-orange-500",
    accent: "text-yellow-500", accentBorder: "border-yellow-500",
    accentBg: "bg-yellow-50", accentCheck: "text-yellow-500",
    btnGradient: "from-yellow-400 to-orange-500",
    btnShadow: "shadow-[0_6px_20px_rgba(245,158,11,0.35)]",
    hex: "#F59E0B",
  },
  {
    icon: "📅", label: "Short Term Courses", badge: null,
    duration: "1–3 Months", students: "4,200+", level: "Beginner",
    outcomes: ["Focused skill modules","SEO or Ads or Social — pick one","Flexible weekend batches","Certificate on completion"],
    modules: "6 Modules", tools: "10+ Tools",
    highlight: "Learn one skill, deeply and fast",
    heroClass: "from-gray-500 to-gray-700",
    accent: "text-gray-500", accentBorder: "border-gray-500",
    accentBg: "bg-gray-50", accentCheck: "text-gray-500",
    btnGradient: "from-gray-500 to-gray-700",
    btnShadow: "shadow-[0_6px_20px_rgba(107,114,128,0.35)]",
    hex: "#6B7280",
  },
];

const CAMPUSES = [
  { name: "Andheri",  area: "Andheri West, Mumbai"  },
  { name: "Borivali", area: "Borivali West, Mumbai" },
];

const TRUST = [
  { Icon: Shield,        text: "Certified Faculty" },
  { Icon: Trophy,        text: "Job Guarantee"      },
  { Icon: GraduationCap, text: "Live Projects"      },
  { Icon: Zap,           text: "Agency Experience"  },
];

export default function InfoSection() {
  const [active, setActive] = useState(1);
  const prog = PROGRAMS[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');
        .info-root { font-family: 'Inter', sans-serif; }
        .info-root .disp { font-family: 'Inter', sans-serif; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.35} }
        .blink { animation: blink 1.5s ease-in-out infinite; }
        .enroll-btn { position: relative; overflow: hidden; }
        .enroll-btn::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
          transform: translateX(-100%); transition: transform 0.55s ease;
        }
        .enroll-btn:hover::after { transform: translateX(100%); }
        .prog-row { transition: transform 0.15s ease; }
        .prog-row:hover { transform: translateX(3px); }
      `}</style>

      <section className="info-root w-full bg-[#F7F6F2] py-16 px-4 sm:px-8 lg:px-14">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10 max-w-7xl mx-auto">
          <span className="h-px w-8 bg-orange-400 rounded-full" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-orange-500">
            Programs & Admissions
          </span>
        </div>

        {/* Main grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-5">

          {/* ══ LEFT SIDEBAR ══ */}
          <div className="flex flex-col gap-3">

            {/* Program list */}
            <div className="bg-white rounded-2xl p-2.5 shadow-sm">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gray-400 px-2 pt-1 pb-2">
                Choose a Program
              </p>
              <div className="flex flex-col gap-0.5">
                {PROGRAMS.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`prog-row w-full flex items-center justify-between gap-2.5
                      px-3 py-2.5 rounded-xl text-left border-none cursor-pointer
                      transition-colors duration-150
                      ${active === i
                        ? "bg-gray-950 text-white"
                        : "bg-transparent text-gray-600 hover:bg-gray-50"}`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-[14px] shrink-0">{p.icon}</span>
                      <span className="text-[12.5px] font-semibold truncate">{p.label}</span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {p.badge && (
                        <span className={`text-white text-[8px] font-black uppercase tracking-wide
                          px-1.5 py-0.5 rounded-full
                          ${p.badge === "3 SEATS LEFT" ? "bg-red-500"
                            : p.badge === "NEW" ? "bg-violet-500"
                            : "bg-emerald-500"}`}>
                          {p.badge}
                        </span>
                      )}
                      <ChevronRight size={13} className={active === i ? "opacity-50" : "opacity-20"} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Campuses */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gray-400 mb-3">
                Our Campuses
              </p>
              <div className="flex flex-col gap-2">
                {CAMPUSES.map((c) => (
                  <div key={c.name}
                    className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <MapPin size={13} className="text-orange-500 shrink-0" strokeWidth={2} />
                      <div>
                        <p className="text-[12px] font-bold text-gray-900 leading-tight">{c.name}</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">{c.area}</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-orange-500 font-bold cursor-pointer">
                      Directions →
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call strip */}
            <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                <Phone size={15} className="text-orange-500" strokeWidth={1.8} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[12px] font-bold text-gray-900">Talk to Admissions</p>
                <p className="text-[10px] text-gray-400">Mon–Sat · 9am–7pm</p>
              </div>
              <button className="shrink-0 bg-gray-950 text-white text-[11px] font-bold
                px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors
                cursor-pointer border-none">
                Call Now
              </button>
            </div>
          </div>

          {/* ══ RIGHT: Detail panel ══ */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4"
            >
              {/* Hero band */}
              <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-r ${prog.heroClass} p-8`}>
                <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-white/10" />
                <div className="absolute -bottom-8 right-20 w-32 h-32 rounded-full bg-white/5" />

                <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                  {/* Left */}
                  <div className="flex-1">
                    {prog.badge && (
                      <div className="inline-flex items-center gap-1.5 bg-white/20
                        backdrop-blur-sm rounded-full px-3 py-1 mb-4">
                        <span className="blink w-1.5 h-1.5 rounded-full bg-white inline-block" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-white">
                          {prog.badge}
                        </span>
                      </div>
                    )}
                    <h2 className="disp text-[clamp(1.6rem,3vw,2.4rem)] font-black text-white
                      leading-[1.1] mb-2.5">
                      {prog.label}
                    </h2>
                    <p className="text-white/75 text-[13px] max-w-sm leading-relaxed">
                      {prog.highlight}
                    </p>
                  </div>

                  {/* Meta pills — white bg, fully readable */}
                  <div className="flex sm:flex-col gap-2 shrink-0">
                    {[
                      { Icon: Clock, val: prog.duration              },
                      { Icon: Users, val: prog.students + " enrolled" },
                      { Icon: Star,  val: prog.level                  },
                    ].map(({ Icon, val }) => (
                      <div key={val}
                        className="inline-flex items-center gap-2
                          bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5">
                        <Icon size={12} className={prog.accent} strokeWidth={2} />
                        <span className="text-[11.5px] font-bold text-gray-900 whitespace-nowrap">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom row */}
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_280px] gap-4">

                {/* What you'll learn */}
                <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em]
                    text-gray-400 mb-4">
                    What You'll Learn
                  </p>

                  {/* 2×2 outcomes grid */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-5">
                    {prog.outcomes.map((o, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className={`${prog.accentCheck} shrink-0 mt-0.5`}
                          strokeWidth={2.5} />
                        <p className="text-[13px] font-medium text-gray-700 leading-snug">{o}</p>
                      </div>
                    ))}
                  </div>

                  {/* Stats row */}
                  <div className="flex gap-3 mb-5">
                    {[
                      { label: "Modules",  val: prog.modules  },
                      { label: "Tools",    val: prog.tools    },
                      { label: "Duration", val: prog.duration },
                    ].map(({ label, val }) => (
                      <div key={label}
                        className="flex-1 bg-gray-50 border border-gray-100
                          rounded-xl px-3 py-2.5 text-center">
                        <p className="text-[14px] font-black text-gray-950 leading-tight">{val}</p>
                        <p className="text-[9px] font-bold uppercase tracking-widest
                          text-gray-400 mt-1">{label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="h-px bg-gray-100 mb-4" />

                  {/* Trust badges */}
                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    {TRUST.map(({ Icon, text }) => (
                      <div key={text} className="flex items-center gap-1.5">
                        <Icon size={13} className={`${prog.accentCheck} shrink-0`} strokeWidth={1.8} />
                        <span className="text-[11.5px] font-semibold text-gray-500">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enroll card */}
                <div className={`bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col
                  border-t-4 ${prog.accentBorder}`}>
                  <div className="p-5 flex flex-col gap-3.5 flex-1">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gray-400">
                      Get Started
                    </p>

                    {/* Social proof */}
                    <div className="bg-gray-50 rounded-xl px-3.5 py-3">
                      <p className="text-[13px] text-gray-500 leading-relaxed">
                        Join{" "}
                        <span className="font-extrabold text-gray-950">{prog.students}</span>
                        {" "}students already enrolled.
                      </p>
                    </div>

                    {/* Urgency */}
                    {prog.badge === "3 SEATS LEFT" && (
                      <div className="flex items-center gap-2 bg-red-50
                        border border-red-100 rounded-xl px-3 py-2.5">
                        <span className="blink w-2 h-2 rounded-full bg-red-500 shrink-0 inline-block" />
                        <span className="text-[11.5px] font-bold text-red-600">
                          Only 3 seats remaining
                        </span>
                      </div>
                    )}

                    {/* Enroll button */}
                    <button
                      className={`enroll-btn group w-full py-3.5 rounded-xl text-white
                        font-extrabold text-[14px] flex items-center justify-center gap-2
                        bg-gradient-to-r ${prog.btnGradient} ${prog.btnShadow}
                        hover:scale-[1.02] active:scale-[0.98]
                        transition-transform duration-150 border-none cursor-pointer`}
                    >
                      Enroll Now
                      <ArrowRight size={15} strokeWidth={2.5}
                        className="group-hover:translate-x-1 transition-transform duration-150" />
                    </button>

                    {/* Brochure button */}
                    <button
                      className={`w-full py-3 rounded-xl bg-transparent font-semibold
                        text-[13px] text-gray-600 flex items-center justify-center gap-2
                        border-[1.5px] border-gray-200
                        hover:${prog.accentBorder} hover:${prog.accent}
                        transition-colors duration-150 cursor-pointer`}
                    >
                      <Download size={13} strokeWidth={2} />
                      Download Brochure
                    </button>

                    {/* EMI */}
                    <p className="text-[11px] text-gray-400 text-center">
                      EMI from{" "}
                      <span className="font-bold text-gray-600">₹3,500/mo</span>
                      {" "}· 0% interest
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>
    </>
  );
}
