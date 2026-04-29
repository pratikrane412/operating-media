import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";

// ── Intersection Observer Hook ─────────
function useInView(t = 0.1) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setV(true); },
      { threshold: t }
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [t]);
  return [ref, v];
}

// ── Custom Checkmark Icon ─────────
const CheckIcon = () => (
  <svg className="w-[18px] h-[18px] shrink-0 text-[#22C55E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

// ── Course Data ─────────────────────────────────────────────────────
const COURSES = [
  {
    id: "diploma",
    title: "Diploma in Digital Marketing",
    desc: "Kickstart your digital career with hands-on training in SEO, Google Ads, social media marketing, and real-world projects.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80",
    badgeText: "Diploma",
    badgeBg: "bg-[#D4E128]", 
    badgeTextCol: "text-gray-900",
    borderColor: "border-[#D4E128]/50 hover:border-[#D4E128]",
    shadowHover: "hover:shadow-[0_20px_40px_-15px_rgba(212,225,40,0.25)]",
    features: [
      "7 Months / 200 Hours",
      "(AI) in Digital Marketing",
      "Shopify Shop Creation",
      "Funnel Marketing"
    ]
  },
  {
    id: "advanced",
    title: "Advanced Diploma in Digital Marketing",
    desc: "Kickstart your digital career with hands-on training in SEO, Google Ads, social media marketing, and real-world projects.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    badgeText: "Advance Diploma",
    badgeBg: "bg-[#ECAB00]", 
    badgeTextCol: "text-white",
    borderColor: "border-[#ECAB00]/50 hover:border-[#ECAB00]",
    shadowHover: "hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.25)]",
    features: [
      "7 Months / 200 Hours",
      "(AI) in Digital Marketing",
      "Shopify Shop Creation",
      "Funnel Marketing"
    ]
  },
  {
    id: "masters",
    title: "Master's in Digital Strategy & Execution",
    desc: "Kickstart your digital career with hands-on training in SEO, Google Ads, social media marketing, and real-world projects.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
    badgeText: "Master's",
    badgeBg: "bg-[#84CC16]", 
    badgeTextCol: "text-white",
    borderColor: "border-[#84CC16]/50 hover:border-[#84CC16]",
    shadowHover: "hover:shadow-[0_20px_40px_-15px_rgba(132,204,22,0.25)]",
    features: [
      "7 Months / 200 Hours",
      "(AI) in Digital Marketing",
      "Shopify Shop Creation",
      "Funnel Marketing"
    ]
  }
];

// ── Course Card Component ──────────────────────────────────────
function CourseCard({ course, inView, index }) {
  return (
    <div
      className={`group bg-white rounded-[2rem] border-[2px] transition-all duration-500 flex flex-col relative ${course.borderColor} ${course.shadowHover} shadow-sm ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* ── Top Image Section ── */}
      <div className="relative h-[220px] rounded-t-[2rem] w-full">
        <div className="w-full h-full rounded-t-[1.8rem] overflow-hidden">
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full h-full object-cover transition-transform duration-[8s] ease-out group-hover:scale-110"
          />
        </div>
        
        {/* Overlapping Badge */}
        <div className={`absolute -bottom-5 left-1/2 -translate-x-1/2 px-8 py-2 rounded-full font-bold text-[14px] shadow-md tracking-wide whitespace-nowrap transition-transform duration-300 group-hover:-translate-y-1 ${course.badgeBg} ${course.badgeTextCol}`}>
          {course.badgeText}
        </div>
      </div>

      {/* ── Content Section ── */}
      <div className="pt-10 pb-7 px-6 sm:px-8 flex flex-col flex-1">
        
        {/* Title & Desc */}
        <div className="text-center mb-6">
          <h3 className="font-black text-[20px] md:text-[22px] leading-snug text-[#0F172A] mb-3 group-hover:text-orange-600 transition-colors">
            {course.title}
          </h3>
          <p className="font-medium text-[13px] md:text-[14px] text-gray-500 leading-relaxed">
            {course.desc}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-2 mb-6 flex-1">
          {course.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckIcon />
              <span className="font-semibold text-[12px] md:text-[13px] text-gray-700 leading-tight">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-100 mb-6" />

        {/* ── Buttons Section (FIXED FOR MOBILE) ── */}
        <div className="flex flex-col xl:flex-row gap-3 w-full mt-auto">
          {/* Primary Button */}
          <button className="flex-1 w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#FFB800] hover:bg-[#F5A500] text-gray-900 font-extrabold text-[14px] transition-all duration-300 active:scale-95 shadow-sm group/btn">
            <span className="whitespace-nowrap">Book Free Demo</span>
            <ArrowRight size={16} strokeWidth={2.5} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
          
          {/* Secondary Button */}
          <button className="flex-1 w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-transparent border-2 border-[#FFB800] text-[#D97706] hover:bg-[#FFFBEB] font-extrabold text-[14px] transition-all duration-300 active:scale-95 group/btn">
            <span className="whitespace-nowrap">Download Brochure</span>
            <Download size={16} strokeWidth={2.5} className="group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
}

// ── Main Section Component ───────────────────────────────────
export default function CoursesSection() {
  const [ref, inView] = useInView(0.1);

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
      className="relative w-full bg-[#FAFAFA] pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden selection:bg-[#FFB800] selection:text-gray-900"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* ── Header Area ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          
          <div className={`lg:w-[60%] transition-all duration-[800ms] ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="font-black text-[clamp(2.5rem,4.5vw,3.8rem)] leading-[1.05] tracking-tight text-[#0F172A]">
              Master Digital <br className="hidden sm:block" />
              Marketing Through <br className="hidden sm:block" />
              Hands-On <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ECAB00] to-[#FBBF24]">Practical</span> <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] to-[#ECAB00]">Training</span>
            </h2>
          </div>

          <div className={`lg:w-[40%] text-left lg:text-right pb-2 transition-all duration-[800ms] ease-out delay-150 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="font-medium text-[15px] md:text-[16px] text-gray-500 leading-relaxed ml-auto max-w-[450px]">
              Master in-demand digital marketing skills with hands-on training, live projects, and expert mentorship, empowering you to build a strong, successful, and future-ready career in the digital world.
            </p>
          </div>

        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          {COURSES.map((course, i) => (
            <CourseCard key={course.id} course={course} inView={inView} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}