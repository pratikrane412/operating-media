import React, { useState, useEffect, useRef } from "react";

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

// ── Icons (Pixel-Perfect Custom SVGs) ────────────────────────
const IconClock = () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const IconStar = () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const IconUsers = () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconTrendingUp = () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const IconArrow = () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>;
const IconCheck = () => <svg className="w-5 h-5 text-[#ecab00] shrink-0 drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
const StarFilled = () => <svg className="w-4 h-4 text-[#ecab00] fill-[#ecab00] drop-shadow-sm" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>;

// ── Data ─────────────────────────────────────────────────────
const STATS = [
  { num: 15, suffix: "+", label: "Years Experience", Icon: IconClock },
  { num: 4.8, suffix: "★", label: "Google Rating", Icon: IconStar },
  { num: 500, suffix: "+", label: "Students Placed", Icon: IconUsers },
  { num: 94, suffix: "%", label: "Placement Rate", Icon: IconTrendingUp },
];

const FEATURES = [
  {
    emoji: "🎯",
    title: "Agency-Built Curriculum",
    desc: "Designed by working agency professionals — real tools, live campaigns, zero fluff.",
  },
  {
    emoji: "💼",
    title: "100% Job Assistance",
    desc: "Resume prep, mock interviews, LinkedIn optimisation & direct recruiter connections.",
  },
  {
    emoji: "🏢",
    title: "Corporate Workshops",
    desc: "Custom in-house digital marketing training tailored to your team and business goals.",
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

// ── Components ───────────────────────────────────────────────
function StatCard({ stat, inView, delay }) {
  const counted = useCounter(stat.num, 2000, inView);
  
  return (
    <div
      className={`group relative flex flex-col items-center justify-center text-center rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 hover:shadow-[0_20px_40px_-15px_rgba(236,171,0,0.15)] hover:border-[#ecab00]/30 transition-all duration-500 cursor-default transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#ecab00]/10 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-[#ecab00]/10 text-[#ecab00] shadow-sm border border-[#ecab00]/20 group-hover:bg-[#ecab00] group-hover:text-white group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
        <stat.Icon />
      </div>

      <p className="font-black text-[42px] md:text-[52px] leading-none tracking-tight text-[#0f172a] mb-2 drop-shadow-sm transition-colors group-hover:text-[#ecab00]">
        {inView ? counted : 0}<span className="text-[#ecab00] ml-1">{stat.suffix}</span>
      </p>

      <p className="font-bold text-[12px] uppercase tracking-[0.15em] text-gray-500">
        {stat.label}
      </p>
    </div>
  );
}

function FeatureCard({ feature, inView, delay }) {
  return (
    <div
      className={`group flex items-start gap-5 rounded-3xl p-6 bg-white border border-gray-100 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(236,171,0,0.15)] hover:border-[#ecab00]/40 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-3xl shadow-inner group-hover:scale-110 transition-transform duration-500 bg-[#ecab00]/10 border border-[#ecab00]/20`}>
        {feature.emoji}
      </div>

      <div className="flex-1">
        <h4 className="font-bold text-[18px] text-[#0f172a] leading-tight mb-2 group-hover:text-[#ecab00] transition-colors duration-300">
          {feature.title}
        </h4>
        <p className="font-medium text-[14px] md:text-[15px] leading-relaxed text-gray-500">
          {feature.desc}
        </p>
      </div>
    </div>
  );
}

// ── Main Section Component ───────────────────────────────────
export default function AboutSectionPremium() {
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
      className="relative w-full bg-[#FAFCFF] overflow-hidden selection:bg-[#ecab00] selection:text-white"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      {/* ── Background Ambient Glows ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#ecab00]/10 to-transparent blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#ecab00]/5 to-transparent blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      {/* ══════════════════════════════════════
          TOP: MAIN 2-COL GRID
      ══════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-16 pt-20 lg:pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-12 items-center">

          {/* ── LEFT: Copy & Details ── */}
          <div className="flex flex-col gap-8">
            
            {/* Badge */}
            <div className={`inline-flex items-center gap-2.5 px-4 py-2 w-fit rounded-full bg-white border border-[#ecab00]/30 shadow-sm transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ecab00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ecab00]"></span>
              </span>
              <span className="font-bold text-[12px] uppercase tracking-widest text-[#0f172a]">
                About Operating Media
              </span>
            </div>

            {/* Headline */}
            <h2 className={`font-black text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.05] tracking-tight text-[#0f172a] transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              India's Best <br />
              <span className="relative inline-block text-[#ecab00] pb-1">
                Digital Marketing
                <svg className={`absolute w-full h-[12px] -bottom-1 left-0 text-[#ecab00] transition-all duration-1000 ease-out delay-500 ${inView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} viewBox="0 0 100 20" preserveAspectRatio="none" style={{ transformOrigin: 'left' }}>
                  <path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </span> <br />
              Training Institute.
            </h2>

            {/* Description */}
            <p className={`font-medium text-[16px] md:text-[18px] leading-relaxed text-gray-600 max-w-[540px] transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Operating Media bridges the gap between <strong className="text-[#0f172a]">textbook knowledge</strong> and real industry demands. Built by <strong className="text-[#0f172a]">agency professionals</strong> to make you job-ready from Day 1.
            </p>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <button className="group relative w-full sm:w-auto h-[56px] px-8 rounded-2xl bg-[#ecab00] text-white font-bold text-[16px] overflow-hidden shadow-[0_8px_20px_-6px_rgba(236,171,0,0.6)] hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(236,171,0,0.8)] transition-all active:scale-[0.98] flex items-center justify-center gap-3">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shine" />
                <span className="relative z-10 text-[#0f172a] drop-shadow-sm">Explore Courses</span>
                <span className="relative z-10 text-[#0f172a] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"><IconArrow /></span>
              </button>

              <button className="group w-full sm:w-auto h-[56px] px-8 rounded-2xl bg-white border-2 border-gray-200 text-[#0f172a] font-bold text-[16px] hover:border-[#ecab00] hover:bg-[#ecab00]/5 transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-sm">
                <span className="w-8 h-8 rounded-full flex items-center justify-center bg-[#ecab00]/10 text-[#ecab00] group-hover:scale-110 group-hover:bg-[#ecab00] group-hover:text-white transition-all">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                </span>
                Free Demo Class
              </button>
            </div>

            {/* Checklist */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {TRUST.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <IconCheck />
                  <span className="font-bold text-[15px] text-[#0f172a]/80">{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* ── RIGHT: Image & Features ── */}
          <div className="flex flex-col gap-6 lg:pl-8 mt-10 lg:mt-0">
            
            {/* Image Card */}
            <div className={`relative transition-all duration-1000 delay-300 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
              {/* Image Glow */}
              <div className="absolute inset-0 bg-[#ecab00] rounded-3xl transform rotate-3 scale-[1.02] opacity-20 blur-xl" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_-10px_rgba(15,23,42,0.2)] border border-white">
                <div className="aspect-[16/10] overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=85" alt="Classroom" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[10s] ease-linear" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/20 to-transparent" />
                </div>

                {/* Overlays */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-bold text-[16px] sm:text-[18px] text-white mb-1">Live Classroom Sessions</p>
                    <p className="font-medium text-[13px] sm:text-[14px] text-white/70">Hands-on training by experts</p>
                  </div>

                  <div className="bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3 animate-float border border-white/20">
                    <span className="font-black text-[24px] sm:text-[28px] text-[#0f172a] leading-none">4.8</span>
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <StarFilled key={i} />)}</div>
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
      <div className="relative z-20 w-full bg-white border-t border-gray-100 py-16 sm:py-20">
        <div className="max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-16">
          
          <p className={`text-center font-bold text-[13px] sm:text-[15px] uppercase tracking-[0.25em] text-[#0f172a]/40 mb-10 transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`}>
            Why 500+ Professionals Chose Operating Media
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {STATS.map((stat, i) => (
              <StatCard key={i} stat={stat} inView={inView} delay={500 + i * 100} />
            ))}
          </div>

          {/* Dark Tech CTA Strip */}
          <div className={`relative overflow-hidden rounded-[32px] bg-[#0f172a] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_20px_40px_-15px_rgba(15,23,42,0.4)] transition-all duration-1000 delay-[800ms] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 bg-[radial-gradient(ellipse_at_right,_rgba(236,171,0,0.15)_0%,_transparent_70%)] pointer-events-none" />

            <div className="relative z-10 text-center lg:text-left">
              <p className="font-black text-[28px] md:text-[38px] text-white leading-tight mb-3">Ready to start your digital career?</p>
              <p className="font-medium text-[16px] md:text-[18px] text-white/70">Join 500+ placed professionals. Next batch starts soon.</p>
            </div>

            <button className="relative z-10 group h-[60px] px-10 rounded-2xl bg-[#ecab00] text-[#0f172a] font-bold text-[18px] shadow-[0_10px_30px_-10px_rgba(236,171,0,0.8)] hover:-translate-y-1 hover:shadow-[#ecab00]/50 transition-all active:scale-[0.98] flex items-center justify-center gap-3 shrink-0 whitespace-nowrap">
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
        @keyframes pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 0.8; transform: scale(1.05); } }
      `}</style>
      
    </section>
  );
}