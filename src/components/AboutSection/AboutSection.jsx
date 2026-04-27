import React, { useState, useEffect, useRef } from "react";
import { Clock, Star, Users, TrendingUp } from "lucide-react";

// ── Intersection Observer Hook (For Scroll Animations) ─────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// ── Animated Counter Hook ────────────────────────────────────
function useCounter(target, duration = 2000, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const n = parseFloat(String(target).replace(/[^0-9.]/g, ""));
    const isFloat = !Number.isInteger(n);
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = eased * n;
      setVal(isFloat ? parseFloat(cur.toFixed(1)) : Math.floor(cur));
      if (p < 1) requestAnimationFrame(tick);
      else setVal(n);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return val;
}

// ── Data ─────────────────────────────────────────────────────
const STATS = [
  { num: 15, suffix: "+", label: "Years Experience", Icon: Clock, color: "orange" },
  { num: 4.8, suffix: "★", label: "Google Rating", Icon: Star, color: "yellow" },
  { num: 500, suffix: "+", label: "Students Placed", Icon: Users, color: "green" },
  { num: 94, suffix: "%", label: "Placement Rate", Icon: TrendingUp, color: "green" },
];

const FEATURES = [
  {
    emoji: "🎯",
    title: "Agency-Built Curriculum",
    desc: "Designed by working agency professionals — real tools, live campaigns, zero fluff.",
    color: "orange",
  },
  {
    emoji: "💼",
    title: "100% Job Assistance",
    desc: "Resume prep, mock interviews, LinkedIn optimisation & direct recruiter connections.",
    color: "yellow",
  },
  {
    emoji: "🏢",
    title: "Corporate Workshops",
    desc: "Custom in-house digital marketing training tailored to your team and business goals.",
    color: "orange",
  },
];

const TRUST = [
  "Placement in 30 Days",
  "Live Projects Included",
  "Google Certified Trainers",
  "EMI Options Available",
  "Small Batch Sizes",
  "Lifetime LMS Access",
];

// ── Icons ────────────────────────────────────────────────────
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

const IconCheck = () => (
  <svg className="w-5 h-5 text-green-500 shrink-0 drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const StarSVG = () => (
  <svg className="w-4 h-4 text-yellow-400 fill-yellow-400 drop-shadow-sm" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// ── Stat Card Component ──────────────────────────────────────
function StatCard({ stat, inView, delay }) {
  const counted = useCounter(stat.num, 2000, inView);
  
  const styles = {
    orange: "text-orange-500 bg-orange-50 border-orange-100 hover:border-orange-300 hover:shadow-orange-500/20",
    yellow: "text-yellow-500 bg-yellow-50 border-yellow-100 hover:border-yellow-300 hover:shadow-yellow-500/20",
    green: "text-green-500 bg-green-50 border-green-100 hover:border-green-300 hover:shadow-green-500/20",
  };

  return (
    <div
      className={`group relative flex flex-col items-center justify-center text-center rounded-3xl border bg-white p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 cursor-default transform ${styles[stat.color]} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-current opacity-5 rounded-bl-full pointer-events-none" />
      
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-white shadow-sm border border-current/10 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
        <stat.Icon size={26} strokeWidth={2} className="opacity-80" />
      </div>

      <p className="font-black text-[42px] md:text-[52px] leading-none tracking-tight text-gray-900 mb-2 drop-shadow-sm">
        {inView ? counted : 0}<span className="text-current ml-1">{stat.suffix}</span>
      </p>

      <p className="font-bold text-[12px] uppercase tracking-[0.15em] text-gray-400">
        {stat.label}
      </p>
    </div>
  );
}

// ── Feature Card Component ───────────────────────────────────
function FeatureCard({ feature, inView, delay }) {
  const isYellow = feature.color === "yellow";
  return (
    <div
      className={`group flex items-start gap-5 rounded-3xl p-6 bg-white border shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${isYellow ? "border-yellow-100 hover:border-yellow-300" : "border-orange-100 hover:border-orange-300"} ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-3xl shadow-inner group-hover:scale-110 transition-transform duration-300 ${isYellow ? "bg-yellow-50 border border-yellow-100" : "bg-orange-50 border border-orange-100"}`}>
        {feature.emoji}
      </div>

      <div className="flex-1">
        <h4 className="font-bold text-[18px] text-gray-900 leading-tight mb-2 group-hover:text-orange-500 transition-colors">
          {feature.title}
        </h4>
        <p className="font-medium text-[15px] leading-relaxed text-gray-500">
          {feature.desc}
        </p>
      </div>
    </div>
  );
}

// ── Main Section Component ───────────────────────────────────
export default function AboutSection() {
  const [rootRef, inView] = useInView(0.1);

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
      ref={rootRef}
      className="relative w-full bg-[#FAFAFA] overflow-hidden selection:bg-orange-500 selection:text-white"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      {/* ── Background Ambient Glows ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-400/20 to-transparent blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-yellow-300/20 to-transparent blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      {/* ══════════════════════════════════════
          TOP: MAIN 2-COL GRID
      ══════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-16 pt-20 lg:pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-12 items-center">

          {/* ── LEFT: Copy & Details ── */}
          <div className="flex flex-col gap-8">
            
            {/* Badge */}
            <div className={`inline-flex items-center gap-2.5 px-4 py-2 w-fit rounded-full bg-white border border-orange-200 shadow-sm transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="font-bold text-[12px] uppercase tracking-widest text-orange-600">
                About Operating Media
              </span>
            </div>

            {/* Headline */}
            <h2 className={`font-black text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-gray-900 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              India's Best <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 pb-1">
                Digital Marketing
                <svg className={`absolute w-full h-[12px] -bottom-2 left-0 text-orange-500 transition-all duration-1000 ease-out delay-500 ${inView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} viewBox="0 0 100 20" preserveAspectRatio="none" style={{ transformOrigin: 'left' }}>
                  <path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                </svg>
              </span> <br />
              Training Institute.
            </h2>

            {/* Description */}
            <p className={`font-medium text-[18px] leading-relaxed text-gray-500 max-w-[540px] transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Operating Media bridges the gap between <strong className="text-gray-900">textbook knowledge</strong> and real industry demands. Built by <strong className="text-gray-900">agency professionals</strong> to make you job-ready from Day 1.
            </p>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <button className="group relative w-full sm:w-auto h-[56px] px-8 rounded-2xl bg-orange-500 text-white font-bold text-[16px] overflow-hidden shadow-[0_8px_25px_-8px_rgba(249,115,22,0.6)] hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/30 transition-all active:scale-[0.98] flex items-center justify-center gap-3">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
                <span className="relative z-10">Explore Courses</span>
                <span className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"><IconArrow /></span>
              </button>

              <button className="group w-full sm:w-auto h-[56px] px-8 rounded-2xl bg-white border border-gray-200 text-gray-900 font-bold text-[16px] hover:border-orange-300 hover:bg-orange-50 transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-sm">
                <span className="w-8 h-8 rounded-full flex items-center justify-center bg-orange-100 text-orange-600 group-hover:scale-110 transition-transform">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                </span>
                Free Demo Class
              </button>
            </div>

            {/* Checklist */}
            <div className={`grid grid-cols-2 gap-y-4 gap-x-2 transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {TRUST.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <IconCheck />
                  <span className="font-bold text-[15px] text-gray-700">{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* ── RIGHT: Image & Features ── */}
          <div className="flex flex-col gap-6 lg:pl-8">
            
            {/* Image Card */}
            <div className={`relative transition-all duration-1000 delay-300 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-yellow-400 rounded-3xl transform rotate-3 scale-[1.02] opacity-20 blur-lg" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white">
                <div className="aspect-[16/10] overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=85" alt="Classroom" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[10s] ease-linear" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Overlays */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-bold text-[18px] text-white mb-1">Live Classroom Sessions</p>
                    <p className="font-medium text-[14px] text-white/70">Hands-on training by experts</p>
                  </div>

                  <div className="bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3 animate-float">
                    <span className="font-black text-[26px] text-gray-900 leading-none">4.8</span>
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <StarSVG key={i} />)}</div>
                      <span className="font-bold text-[10px] uppercase tracking-widest text-gray-500">Google</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="flex flex-col gap-4 mt-2">
              {FEATURES.map((feat, i) => (
                <FeatureCard key={i} feature={feat} inView={inView} delay={400 + i * 150} />
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════
          BOTTOM: STATS & CTA BAND
      ══════════════════════════════════════ */}
      <div className="relative z-20 w-full bg-white border-t border-gray-100 py-16">
        <div className="max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-16">
          
          <p className={`text-center font-bold text-[14px] uppercase tracking-[0.2em] text-gray-400 mb-10 transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`}>
            Why 500+ Professionals Chose Operating Media
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {STATS.map((stat, i) => (
              <StatCard key={i} stat={stat} inView={inView} delay={500 + i * 100} />
            ))}
          </div>

          {/* Dark Tech CTA Strip */}
          <div className={`relative overflow-hidden rounded-[2rem] bg-[#0A0F1C] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl transition-all duration-1000 delay-[800ms] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px]" />
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-orange-500/20 to-transparent blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center lg:text-left">
              <p className="font-black text-[28px] md:text-[34px] text-white leading-tight mb-2">Ready to start your digital career?</p>
              <p className="font-medium text-[16px] md:text-[18px] text-gray-400">Join 500+ placed professionals. Next batch starts soon.</p>
            </div>

            <button className="relative z-10 group h-[60px] px-10 rounded-2xl bg-orange-500 text-white font-bold text-[18px] shadow-[0_10px_30px_-10px_rgba(249,115,22,0.8)] hover:-translate-y-1 hover:shadow-orange-500/50 transition-all active:scale-[0.98] flex items-center justify-center gap-3 shrink-0 whitespace-nowrap">
              <span>Book Free Demo</span>
              <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"><IconArrow /></span>
            </button>
          </div>

        </div>
      </div>

      {/* ── CUSTOM ANIMATIONS ── */}
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes shine { 100% { transform: translateX(100%); } }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-shine { animation: shine 1.5s ease; }
        .animate-pulse-slow { animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>
      
    </section>
  );
}