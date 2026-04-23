import React, { useRef, useState, useEffect } from "react";
import {
  Users,
  Trophy,
  CheckCircle2,
  ArrowRight,
  Download,
  CalendarDays,
} from "lucide-react";

// --- Intersection Observer Hook ---
function useInView(t = 0.05) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setV(true);
      },
      { threshold: t }
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [t]);
  return [ref, v];
}

const COURSES = [
  {
    id: "diploma",
    badgeText: "For Beginners",
    badgeBg: "#F97316",
    badgeColor: "#fff",
    title: "Diploma Program",
    subtitle: "Digital Marketing Basics",
    subtitleColor: "#F97316",
    months: "3 Months",
    enrolled: "5,000+ Enrolled",
    rating: "4.8",
    accentColor: "#F97316",
    features: [
      "10+ In-depth Modules",
      "15+ Digital Marketing Tools",
      "80 Hours of Live Training",
      "Practical Assignments",
      "Business Consultation",
      "Industry Expert Faculties",
    ],
  },
  {
    id: "advanced",
    badgeText: "Career Launchpad",
    badgeBg: "#EA580C",
    badgeColor: "#fff",
    title: "Advanced Diploma",
    subtitle: "Digital Marketing Fundamentals",
    subtitleColor: "#EA580C",
    months: "4 Months",
    enrolled: "12,000+ Enrolled",
    rating: "4.8",
    accentColor: "#EA580C",
    isPopular: true,
    features: [
      "15+ Expert-led Modules",
      "25+ Digital Marketing Tools",
      "110 Hours of Live Training",
      "SEO, PPC & Social Media",
      "Web Page Design",
      "100% Job Assistance",
    ],
  },
  {
    id: "masters",
    badgeText: "Career Accelerator",
    badgeBg: "#C2410C",
    badgeColor: "#fff",
    title: "Master's Program",
    subtitle: "Digital Marketing Excellence",
    subtitleColor: "#C2410C",
    months: "7 Months",
    enrolled: "8,000+ Enrolled",
    rating: "4.9",
    accentColor: "#C2410C",
    features: [
      "30+ Advanced Modules",
      "120+ Digital Marketing Tools",
      "200 Hours of Live Training",
      "AI-Powered Strategies",
      "Shopify & E-commerce Setup",
      "Guaranteed Job Placement",
    ],
  },
];

function OutlineButton({ accentColor, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 font-extrabold text-[13px] transition-all duration-200 tracking-wide"
      style={{
        fontFamily: "'Satoshi', sans-serif",
        borderColor: accentColor,
        backgroundColor: hovered ? accentColor : "transparent",
        color: hovered ? "#fff" : accentColor,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
}

function FilledButton({ accentColor, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 font-extrabold text-[13px] transition-all duration-200 tracking-wide"
      style={{
        fontFamily: "'Satoshi', sans-serif",
        borderColor: accentColor,
        backgroundColor: hovered ? "transparent" : accentColor,
        color: hovered ? accentColor : "#fff",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
}

function Card({ c, inView, index }) {
  return (
    <div
      className="relative pt-[22px] flex flex-col transition-all duration-[650ms] ease-out"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(36px)",
        transitionDelay: `${index * 130}ms`,
        fontFamily: "'Satoshi', sans-serif",
      }}
    >
      {/* Badge pill */}
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-center">
        <div
          className="font-extrabold text-[11px] tracking-[0.12em] uppercase px-6 py-2 rounded-full whitespace-nowrap"
          style={{
            fontFamily: "'Satoshi', sans-serif",
            backgroundColor: c.badgeBg,
            color: c.badgeColor,
            boxShadow: `0 4px 18px ${c.badgeBg}55`,
          }}
        >
          {c.badgeText}
        </div>
      </div>

      {/* Card body */}
      <div
        className={`group flex-1 flex flex-col bg-white rounded-[20px] px-7 pt-9 pb-7 transition-all duration-300 border-[1.5px] 
          ${c.isPopular ? 'shadow-xl translate-y-0' : 'hover:-translate-y-1 hover:shadow-2xl border-[#E5DDD6]'}`}
        style={{
          borderColor: c.isPopular ? c.accentColor : undefined,
          boxShadow: c.isPopular ? `0 8px 40px ${c.accentColor}22` : undefined,
        }}
      >
        <h3
          className="m-0 font-black text-[26px] tracking-tight text-slate-900 leading-[1.15]"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          {c.title}
        </h3>

        <p
          className="mt-0 mb-[18px] font-bold text-[15px] tracking-wide"
          style={{ color: c.subtitleColor, fontFamily: "'Satoshi', sans-serif" }}
        >
          {c.subtitle}
        </p>

        {/* Meta row */}
        <div className="flex items-center gap-[18px] mb-[22px] pb-[18px] border-b-[1.5px] border-dashed border-[#F0E8E0]">
          <div className="flex items-center gap-1.5 text-gray-700">
            <CalendarDays size={13} style={{ color: c.accentColor }} />
            <span className="font-semibold text-[13px]" style={{ fontFamily: "'Satoshi', sans-serif" }}>{c.months}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-700">
            <Users size={13} style={{ color: c.accentColor }} />
            <span className="font-semibold text-[13px]" style={{ fontFamily: "'Satoshi', sans-serif" }}>{c.enrolled}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-700">
            <Trophy size={13} className="text-amber-400" />
            <span className="font-bold text-[13px]" style={{ fontFamily: "'Satoshi', sans-serif" }}>{c.rating}</span>
            <span className="text-[13px] text-amber-400">★</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-[11px] flex-1 mb-[26px]">
          {c.features.map((text, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <CheckCircle2
                size={17}
                strokeWidth={2.2}
                className="shrink-0"
                style={{ color: c.accentColor }}
              />
              <span
                className="text-sm font-medium text-gray-700 leading-tight"
                style={{ fontFamily: "'Satoshi', sans-serif" }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>

        <div className="h-[1.5px] bg-[#F3EDE8] mb-[22px]" />

        {/* Buttons */}
        <div className="flex gap-3">
          <OutlineButton accentColor={c.accentColor}>
            View Course <ArrowRight size={15} />
          </OutlineButton>
          <FilledButton accentColor={c.accentColor}>
            <Download size={14} /> Brochure
          </FilledButton>
        </div>
      </div>
    </div>
  );
}

export default function Programs() {
  const [ref, inView] = useInView(0.04);

  // Inject Satoshi font
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
      ref={ref}
      className="bg-[#FAFAF8] w-full overflow-hidden relative"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      {/* Soft ambient backgrounds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[60px] -right-[60px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(251,191,36,0.11)_0%,_transparent_70%)]" />
        <div className="absolute -bottom-[60px] -left-[60px] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,_rgba(249,115,22,0.08)_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-[1160px] mx-auto px-6 py-20 lg:py-24">
        {/* Header */}
        <div className="text-center mb-[72px]">
          <div
            className="flex items-center justify-center gap-2.5 mb-5 transition-all duration-[650ms] ease-out"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(22px)",
            }}
          >
            <div className="h-0.5 w-9 bg-gradient-to-r from-transparent to-orange-500 rounded-full" />
            <span
              className="font-extrabold text-[11px] tracking-[0.22em] uppercase text-orange-500"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              Our Programs
            </span>
            <div className="h-0.5 w-9 bg-gradient-to-l from-transparent to-orange-500 rounded-full" />
          </div>

          <h2
            className="font-black leading-[1.05] tracking-tighter text-slate-900 mb-4 transition-all duration-[650ms] ease-out delay-75"
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.6rem)",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(22px)",
            }}
          >
            Popular Digital Marketing{" "}
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-400 bg-clip-text text-transparent">
              Courses
            </span>
          </h2>

          <p
            className="text-base leading-[1.7] text-gray-500 max-w-[460px] mx-auto mb-5 transition-all duration-[650ms] ease-out delay-150"
            style={{
              fontFamily: "'Satoshi', sans-serif",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(22px)",
            }}
          >
            Choose the program built for your goals — from beginner to industry leader.
          </p>

          {/* Decorative dots */}
          <div
            className="flex items-center justify-center gap-1.5 transition-all duration-[650ms] ease-out delay-[220ms]"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(22px)",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <div className="w-8 h-2 rounded-full bg-orange-400" />
            <div className="w-2 h-2 rounded-full bg-amber-400" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start pt-3">
          {COURSES.map((c, i) => (
            <Card key={c.id} c={c} inView={inView} index={i} />
          ))}
        </div>

        {/* CTA banner */}
        <div
          className="mt-16 rounded-[24px] px-11 py-9 flex flex-wrap items-center justify-between gap-5 bg-gradient-to-br from-[#fff7ed] to-[#fef9ec] border border-[#FED7AA] shadow-sm relative overflow-hidden transition-all duration-[650ms] ease-out delay-[700ms]"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(22px)",
          }}
        >
          <div className="absolute -right-[50px] -top-[50px] w-[180px] h-[180px] rounded-full bg-amber-400/15 pointer-events-none" />
          <div className="relative z-10">
            <p
              className="m-0 mb-1 font-black text-[21px] text-gray-900 tracking-tight"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              Not sure which program fits you?
            </p>
            <p
              className="m-0 text-sm text-gray-500"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              Free counselling — expert guidance, zero pressure.
            </p>
          </div>
          <button
            className="relative z-10 flex items-center gap-2.5 px-8 py-3.5 rounded-2xl border-none font-extrabold text-sm text-white cursor-pointer whitespace-nowrap bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 shadow-[0_6px_24px_rgba(234,88,12,0.36)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(234,88,12,0.44)] active:translate-y-0"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            Talk to a Counsellor <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}